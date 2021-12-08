import { Component, NgZone, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ActionSheetController, ModalController, Platform, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ModelCameraPage } from '../model-camera/model-camera.page';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { ApiService } from 'src/app/provider/api.service';
import { URLS } from 'src/assets/constant';
import { Location } from '@angular/common';
// import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-profile-upload',
  templateUrl: './profile-upload.page.html',
  styleUrls: ['./profile-upload.page.scss'],
})
export class ProfileUploadPage implements OnInit {
  private win:any=window;
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
  showImgOption: boolean=false;
  userImage: string | ArrayBuffer;
  currentObj: any;
  dataReturned:any;
  registrationData:any;
  UplaodData:any;
  constructor(private camera: Camera,
    public actionSheetController: ActionSheetController,private file: File,public zone:NgZone,public location:Location,
    // private webview: WebView,
    private route: Router,public platform:Platform,private filePath: FilePath,private apiService:ApiService,
    public modalCtrl: ModalController,public sendData:DataTransferService,public toastController: ToastController) { 
      this.registrationData=this.sendData.alldata;
      if(this.registrationData.requestPage=='dealer'){
        this.registrationData.requestFor=this.registrationData.requestFor;
      }else{
        this.registrationData.requestFor='';
      }
      console.log('1', this.registrationData);
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });

  }

  ngOnInit() {
  }
  next(){
    if(this.registrationData.requestPage=='dealer'){
      this.sendData.alldata=this.registrationData;
      this.route.navigate(['/geolocation']);
    }else{
      this.route.navigate(['/tabs']);
    }

  }
  skip(){
    this.zone.run(()=>{
      let apiKey={
        "request_page":this.registrationData.requestPage,
        "requested_module":"profile",
        "request_for":this.registrationData.requestFor
      }
      this.apiService.apiCallWithLoginToken(URLS.SkipUrl,apiKey).subscribe((result) =>{
        if(result.success==1){
          if(this.registrationData.requestPage=='dealer'){
            this.sendData.alldata=this.registrationData;
            this.route.navigate(['/geolocation']);
          }else{
            console.log('gotoHome');
            this.route.navigateByUrl('/tabs');
          }
        }else{
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
  }
  // back(){
    
  //   let obj={
  //     'request_page':this.registrationData.requestPage,
  //     'frompage':'back'
  //   }
  //   this.sendData.alldata = this.registrationData.requestFor;
  //   this.sendData.registrationType=obj;
  //   setTimeout(() => {
  //     // this.route.navigate(['./registration']);
  //     this.location.back();
  //   }, 1000);
    
  // }
  async pickImage(sourceType) {
    const options: CameraOptions = {
    quality: 100,
    sourceType: sourceType,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }
    const tempImage = await this.camera.getPicture(options);
    const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
    const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);

    const newBaseFilesystemPath = this.file.dataDirectory;

    await this.file.copyFile(tempBaseFilesystemPath, tempFilename, 
                         newBaseFilesystemPath, tempFilename);

   const storedPhoto = newBaseFilesystemPath + tempFilename;
   const displayImage = this.win.ionic.webview.convertFileSrc(storedPhoto);
   
  }
  async selectImage(obj) {
    console.log('selectImage cordova');

    this.currentObj=obj;
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
  async openSelectImageOpt(obj){
    console.log('selectImage browser');
    this.currentObj=obj;
     if(this.showImgOption==false){
       this.showImgOption=true;
      const modal = await this.modalCtrl.create({
        component: ModelCameraPage,
        componentProps:{data:this.registrationData},
        cssClass: 'my-custom-class'
      });
      modal.onDidDismiss().then((dataReturned) => {
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
          console.log("data:" , this.userImg)
          //alert('Modal Sent Data :'+ dataReturned);
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
