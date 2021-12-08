import { Component, NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, Platform, PopoverController } from '@ionic/angular';
import { ProfilePage } from '../profileModule/profile/profile.page';
import { ApiService } from 'src/app/provider/api.service';
import { URLS } from 'src/assets/constant';
import { LocalStorageService } from '../services/local-storage.service';
import { DataTransferService } from '../services/data-transfer.service';
import{AdminApprovalPage} from '../RegistrationModule/admin-approval/admin-approval.page';
import { ModelCameraPage } from '../RegistrationModule/model-camera/model-camera.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  promotedfeedData:any=[];
  userDetail:any;
  allStored:any;
  QuickAccess:any;
  maintanceData:any;
  Communication:any;
  Reedem:any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween:10,
  };

  changeContainerClass:boolean=false;
  pageType:any;
  orderShow: boolean;
  storageData: any;
  constructor(public platform:Platform,public zone:NgZone,private router:Router,public popoverController:PopoverController,
    private localStorage:LocalStorageService,private sendData:DataTransferService, private apiService:ApiService,
    public modalCtrl:ModalController) {
  }

  ionViewWillEnter(){
    this.apiService.isSelected=''
    this.forceUpdate();
    this.localStorage.getStorage().then(allShiavsnhi=>{
      this.storageData=allShiavsnhi;
      this.homePageShow();
      this.promotedFeed();
      if(this.platform.is("mobile")){
        this.changeContainerClass=false;
      }else{
        this.changeContainerClass=true;
      }
    });
  }

  ngOnInit(){
  //  this.reloder();
  }
  redeemDetails(id){
    console.log('1234', this.storageData.allStoreData);
    if(this.storageData.allStoreData.employee_type==1){
      this.sendData.alldata={'customer_id':'','employee_type':'', 'redeem_for': id,'request_page':'customer'};
    }else if(this.storageData.allStoreData.employee_type==2){
      this.sendData.alldata={'customer_id':'','employee_type':'', 'redeem_for': id,'request_page':'dealer'};
    }
    this.router.navigate(['/pointsgiftlist']);
  }
  reloder(){
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
  promotedFeed(){
    this.zone.run(()=>{
      let apiKey = {}
      this.apiService.apiCallWithLoginToken(URLS.PromotedFeedUrl,apiKey).subscribe((result) =>{
        console.log("promotedfeed: ", result);
        if(result.success==1){
           this.promotedfeedData= result.data;
        }else{
          this.promotedfeedData.banner_image = result.noDataImage;
        }
      },err=>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
  }
homePageShow(){
  this.apiService.presentLoadingDefault();
  this.zone.run(()=>{
    let apiKey = {}
    this.apiService.apiCallWithLoginToken(URLS.HomeUrl,apiKey).subscribe((result) =>{
      console.log("home: ", result);
        this.apiService.presentLoadingClose();
      
      if(result.success==1){
        this.Reedem= result.data.reward_card;
        this.QuickAccess = result.data.quick_access;
        this.Communication = result.data.post_list;
        this.userDetail = result.data.user_details;
        // setTimeout(() => {
        //   window.location.reload()
        // }, 200);
      }else {

      }
    },err=>{
      this.apiService.presentLoadingClose();
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
    });
  });
}
gotoCommnunication(item){
    if(item.flag_type==1){
      this.sendData.alldata=item;
      this.router.navigate(['/communication-detail']);
    }
 }
  ViewMore(){
    this.router.navigate(['/communication-list']);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfilePage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      // componentProps: {
      //   onclick: () => {
      //     popover.dismiss();
      //   },
      // },
    });
    await popover.present();
    // this.popoverController.dismiss({
    //   'dismissed': true
    // });
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  gotoQuickAccess(id){
    this.zone.run(()=>{
      console.log('1 waah==',id)
      // if(id.redirect_url =="account-statment" || id.redirect_url =="purchasehistory" || id.redirect_url =="product-catalogue"){
        if(id.redirect_url =="polls"){
          this.apiService.showToastMessage("Coming Soon!", 'top', 2000, 'redBg');
        } else if(id.redirect_url =="mobile"){
           this.addCustomer(id);
           //this.sendData.alldata=id;
           //this.sendData.loginKey={"type":'Register',"requestPage":'officer'}
         }else{
          this.sendData.registrationType = {'auto_id':'','request_page':'self'}
          this.sendData.alldata={'customer_id':'','employee_type':'','request_page':'self', 'backKey': 'home'}
          //this.sendData.alldata=id,
          this.router.navigateByUrl(id.redirect_url);
        }
        
    });

  }


  gotoCustomer(item){
    if(item.redirect_url == "redemption-report"){
      this.apiService.showToastMessage("Coming Soon!", 'top', 2000, "redBg");
    } else{
      this.router.navigateByUrl(item.redirect_url);
    }
  }

  forceUpdate(){
    console.log('force Upadte call');
    this.zone.run(()=>{
      this.localStorage.getStorage().then(storedData=>{
        let newFcmToken= storedData.fcmToken;
        console.log("finally get new fcm token on tabs page==", newFcmToken);
        let apiKey={
          "registration_token":newFcmToken || this.apiService.fcmToken || "",
        }
      this.apiService.apiCallWithLoginToken(URLS.forceUpdateUrl,apiKey).subscribe((result) =>{
        console.log('force Upadte call result',result);
        // alert('force Upadte call result'+JSON.stringify(result));
        if(result.success==1 || result.success=='1'){
          this.orderShow=result.conditionCheks.order_tab_access;
          if(result.conditionCheks.app_status==1 || result.conditionCheks.app_status=='1'){
            // for forceUpdate 
            this.sendData.alldata=result.conditionCheks.app_status;
            this.sendData.myParam=result.force_update_data;
                this.router.navigate(["/force-optional-update"]);
          }else if(result.conditionCheks.app_status==2 || result.conditionCheks.app_status=='2'){
             // for optional upadte
             if(this.apiService.forceUpdateCount==1){
              this.sendData.alldata=result.conditionCheks.app_status;
              this.sendData.myParam=result.force_update_data;
             this.apiService.forceUpdateCount=this.apiService.forceUpdateCount+1;
             this.router.navigate(["/force-optional-update"]);
             }
          }else if(result.conditionCheks.app_status==0 || result.conditionCheks.app_status=='0'){
            if(result.conditionCheks.is_down==1 || result.conditionCheks.is_down=='1'){
              // for maintance page
              this.sendData.myParam=result.maintainence_data
              this.router.navigate(["/maintenance"]);
            }else if(result.conditionCheks.is_down==0 || result.conditionCheks.is_down=='0'){
               if(result.conditionCheks.tnc_verified==false){
                // for redirect to location page
                this.sendData.alldata=result.conditionCheks.tnc_data;
                this.router.navigate(['/terms-conditions']);
                return false;
                } else if(result.conditionCheks.registration_status.is_uploaded==false){
                // for redirect to registration page
                this.sendData.registrationType={"request_page":"home"};
                this.router.navigate(['/registration']);
                return false;
              }else if(result.conditionCheks.profile_image_status.is_uploaded==false){
                this.sendData.alldata={"requestFor":'',"requestPage":"home"}
                // for redirect to profile page
                this.router.navigate(['/profile-upload']);
                return false;
              }else if(result.conditionCheks.user_location_submit.is_uploaded==false){
              // for redirect to location page
              this.sendData.alldata={"requestFor":'',"requestPage":"home"}
              this.router.navigate(['/geolocation']);
              return false;
              }else if(result.conditionCheks.show_registration_image==true){
                // for redirect to location page
                this.sendData.alldata=result.conditionCheks.registration_image;
                this.router.navigate(['/admin-approval']);
                console.log('login data response', this.sendData.alldata);
                // this.modalCall(event);
                return false;
              }
            }
          }
          // this.localStorage.setStorage('allStoreData',result.data);
          // this.route.navigate(['/tabs']);
        }else if((result.success==2 || result.success=='2') || (result.success==0 || result.success=='0')){
          this.logOutCall();
        }
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
  });
  }

  logOutCall(){
      this.zone.run(()=>{
        let apiKey={}
        console.log('login data response',apiKey);
        this.apiService.apiCallWithLoginToken(URLS.LogOutUrl,apiKey).subscribe((result) =>{
          console.log('logout data response',result);   
          this.localStorage.remove('allStoreData');
          this.apiService.generateDeviceId();
          this.apiService.generateFCMToken();
          this.maintance();
           this.router.navigate(['/login']);
          //  window.location.reload();
            this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');     
        },err =>{
          this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        });
      }); 
    }
    async maintance(){
      await this.localStorage.getStorage().then((storedData)=>{
        console.log('localStorage storedData storedData000',storedData);
      });
      this.zone.run(()=>{
        let apiKey={}
        this.apiService.apiCallWithLoginToken(URLS.maintanceUrl,apiKey).subscribe(async (result) =>{
          if(result.success==1 || result.success=='1'){
            this.maintanceData=result;
          await  this.localStorage.setStorage('maintainanceData', result);
            if(result.data.is_down==1 || result.data.is_down=='1'){
              this.sendData.myParam=result.maintainence_data;
              this.router.navigate(["/maintenance"]);
            }
          }else{
            this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
          }
        },err =>{
          this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        });
      });
    }
    async addCustomer(allVal){
      this.sendData.alldata=allVal;
      const modal = await this.modalCtrl.create({
        component: ModelCameraPage,
        componentProps:{data:allVal},
        cssClass: 'my-custom-class'
      });
    
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          console.log('dataReturned:', dataReturned)
          this.sendData.itemDetails=dataReturned;
          if(dataReturned.data.data.button_text == "New Customer"){
            this.sendData.loginKey={"type":'Register',"requestPage":'officer'}
            this.router.navigate(['/mobile']);
          }else{
            this.sendData.loginKey={ "type":'Existing',"requestPage":'officer'}
            this.router.navigate(['/mobile']);
          }
        }else{
          
        }
      });
      return await modal.present();
   }
}




