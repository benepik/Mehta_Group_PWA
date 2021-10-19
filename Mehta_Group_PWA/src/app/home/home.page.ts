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
  constructor(public platform:Platform,public zone:NgZone,private router:Router,public popoverController:PopoverController,
    private localStorage:LocalStorageService,private sendData:DataTransferService, private apiService:ApiService,
    public modalCtrl:ModalController) {
     
      // this.pageType=this.sendData.registrationType;
      // console.log("  this.pageType: ",  this.pageType);
  }

  ionViewWillEnter(){
    this.apiService.isSelected=''
    this.forceUpdate();
    this.localStorage.getStorage().then(allShiavsnhi=>{
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
   
  }
  redeemDetails(id){
   // this.sendData.redeem_for = id;
    this.sendData.alldata={'customer_id':'','employee_type':'', 'redeem_for': id}
    this.router.navigate(['/pointsgiftlist']);
  }
  reloder(){
    setTimeout(() => {
      window.location.reload()
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
         // this.sendData.backKey = 'home';
          this.sendData.registrationType = {'auto_id':'','request_page':'self'}
          // this.sendData.request_page = 'self';
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
      let apiKey={
        "registration_token":"dummy",
      }
      this.apiService.apiCallWithLoginToken(URLS.forceUpdateUrl,apiKey).subscribe((result) =>{
        console.log('force Upadte call result',result);
       
        if(result.success==1 || result.success=='1'){

          this.orderShow=result.conditionCheks.order_tab_access;
          if((result.conditionCheks.app_status==1 || result.conditionCheks.app_status=='1')
          && (result.conditionCheks.app_status==2 || result.conditionCheks.app_status=='2')){
            // for forceUpdate and optional upadte
          }else if(result.conditionCheks.app_status==0 || result.conditionCheks.app_status=='0'){
            if(result.conditionCheks.is_down==1 || result.conditionCheks.is_down=='1'){
              // for maintance page
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
  }

  logOutCall(){
      this.zone.run(()=>{
        let apiKey={}
        console.log('login data response',apiKey);
        this.apiService.apiCallWithLoginToken(URLS.LogOutUrl,apiKey).subscribe((result) =>{
          console.log('logout data response',result);   
          this.localStorage.remove('allStoreData');
          this.maintance();
           this.router.navigate(['./login']);
            this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');     
        },err =>{
          this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        });
      }); 
    }
    async maintance(){
      this.zone.run(()=>{
        let apiKey={}
        this.apiService.apiCallWithLoginToken(URLS.maintanceUrl,apiKey).subscribe(async (result) =>{
          if(result.success==1 || result.success=='1'){
            this.maintanceData=result;
          await  this.localStorage.setStorage('maintainanceData', result);
            if(result.data.is_down==1 || result.data.is_down=='1'){
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
          if(dataReturned.data.data.button_text == "New Customer"){
            this.sendData.loginKey={
              "type":'Register',
              "requestPage":'officer'
            }
            this.sendData.itemDetails=dataReturned;
            this.router.navigate(['/mobile']);
            
          }
          else{
            this.sendData.loginKey={
              "type":'Existing',
              "requestPage":'officer'
            }
            this.sendData.itemDetails=dataReturned;
            this.router.navigate(['/mobile']);
          }
        }
        else{
          
        }
      });
      return await modal.present();
   }
}




