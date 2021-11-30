import { Component, NgZone, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
//import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { APP_CONFIG, URLS } from 'src/assets/constant';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ActionSheetController, ModalController,PopoverController, Platform, ToastController, AlertController } from '@ionic/angular';
import { ModelCameraPage } from '../../RegistrationModule/model-camera/model-camera.page';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {
  private win:any=window;
  
  profileData:any;
  userImg:string="";
  files:any=[];
  croppedImagePath = "";
  imageData: any;
  isLoading = false;
  formData:any=[];
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  maintanceData:any;
  showImgOption: boolean=false;
  userImage: string | ArrayBuffer;
  currentObj: any;
  dataReturned:any;
  UplaodData:any;
  currentName: any;
  fileName: any;
  constructor(private camera: Camera,public actionSheetController: ActionSheetController,private file: File,
    private storage:LocalStorageService,private router: Router,public platform:Platform,
    private sendData:DataTransferService,public modalCtrl: ModalController,public popoverController:PopoverController,
    public toastController: ToastController,public zone:NgZone, private apiService:ApiService,
    private alertController:AlertController) { 
  }
 
  ionViewWillEnter(){
    this.apiService.isSelected=''
    this.profileShow();
  }
  ngOnInit() {
   
  }
  profileShow(){
    this.zone.run(()=>{
      let apiKey = {}
      this.apiService.apiCallWithLoginToken(URLS.SideMenuUrl, apiKey).subscribe((result) =>{
        console.log("SideMenuUrl: ", result);
        if(result.success==1){
           this.profileData= result.data;
        }else{
        }
      },err=>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    })
  }

  async gotoDetail(item){
    const popover = await this.popoverController.getTop();
    if (popover)
      await popover.dismiss(null);  
      // this.popoverController.dismiss(null);
    this.zone.run(()=>{
      if(item?.redirect_url == "logout"){
        this.presentAlertConfirm();
      }else if(item.redirect_url == "accounts-detail"){
        if(this.profileData.emp_data.employee_type=="1"){
          this.sendData.registrationType={"request_page": "account_detail"};
          this.sendData.alldata=this.profileData.emp_data.employee_type;
          console.log('registrationType',this.sendData.registrationType);
          this.router.navigate(['./registration']);
        }else{
          this.router.navigate(['./accounts-detail']);
        }
      } else {
        this.router.navigateByUrl(item?.redirect_url);
      }
    });
  
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Are you sure, you want to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.LogOutFun();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  LogOutFun(){
    this.zone.run(()=>{
      let apiKey={}
      console.log('login data response',apiKey);
      this.apiService.apiCallWithLoginToken(URLS.LogOutUrl,apiKey).subscribe((result) =>{
        console.log('logout data response',result);
        // this.accountData=result.data.account_details;
        this.storage.remove('allStoreData');
        this.storage.getStorage().then(async storedData=>{
          console.log('this is all stored data',storedData);
          if(this.platform.is('desktop')){
            console.log('not mobile platform');
            this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
            setTimeout(() => {
              window.location.reload()
            }, 200);
            this.apiService.generateDeviceId();
            this.apiService.generateFCMToken();
            this.maintance();
            this.router.navigate(['./login']);


            // this.appCtrl.getRootNav().setRoot(yourcomponent);
          //  await location.reload();
            // this.maintance();
          }else{
            this.apiService.generateDeviceId();
            this.apiService.generateFCMToken();
            this.maintance();
            this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
            this.router.navigate(['./login']);
            console.log('mobile platform');
          }
        });
        
        
          
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
  }


  async maintance(){
    await this.storage.getStorage().then((storedData)=>{
      console.log('localStorage storedData storedData000',storedData);
    });
    this.zone.run(()=>{
      let apiKey={}
      this.apiService.apiCallWithLoginToken(URLS.maintanceUrl,apiKey).subscribe(async (result) =>{
        if(result.success==1 || result.success=='1'){
          this.maintanceData=result;
        await  this.storage.setStorage('maintainanceData', result);
          if(result.data.is_down==1 || result.data.is_down=='1'){
            //for maintance redirection page
          }
        }else{
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
  }

  async openSelectImageOpt(obj){
    console.log('selectImage browser');
    // this.currentObj=obj;
     if(this.showImgOption==false){
      this.showImgOption=true;
      const modal = await this.modalCtrl.create({
        component: ModelCameraPage,
        cssClass: 'my-custom-class',
        componentProps:{data:''}
      });
      modal.onDidDismiss().then((dataReturned) => {
        console.log(dataReturned);
        if (dataReturned !== null) {
          this.UplaodData=dataReturned.data;
          this.dataReturned = dataReturned.data.data;
         // this.currentObj.answer = this.dataReturned.data;
         console.log(" this.dataReturned:" ,  this.dataReturned)
          // this.userImg = this.dataReturned.data;
          this.userImg = this.dataReturned.filebaseUrl;
          if(this.userImg == undefined){
            this.userImg = '';
          }
        }
        else{
          this.userImg = '';
        }
      });
      return await modal.present();
    }
     else{
      this.showImgOption=false;
     }
     
   }


}


