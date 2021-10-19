import { Component, NgZone, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
// import { URLS, APP_CONFIG } from '../../../src/assets/constant';
import { Router } from '@angular/router';
import {  IonRouterOutlet, IonTabs, Platform, PopoverController } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { URLS } from 'src/assets/constant';
// import { Storage } from "@ionic/storage";
// import { DataTransferService } from '../services/data-transfer.service';
import { ProfilePage } from '../profileModule/profile/profile.page';
import { DataTransferService } from '../services/data-transfer.service';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage implements OnInit{
  // @ViewChild('tabs', { static: false }) tabs: IonTabs;
  @ViewChild('tabs', {read: IonTabs}) tabRef: IonTabs;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  employType:any;
  activeTabs:string='';
  maintanceData:any;
  pageType:any;
  orderShow: boolean;
  openData: any;
  constructor(private zone:NgZone,private router:Router,public platform:Platform,
    public popoverController: PopoverController,private localStorage:LocalStorageService, 
    public apiService: ApiService,public sendData:DataTransferService
    // private storage:Storage, private sendData:DataTransferService
    ) {
    
      // console.log("  this.pageType: ",  this.pageType);
    // this.platform.backButton.subscribeWithPriority(0, () => {
    //   this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
    //   });
    // });
    
  
  }

  ionViewWillEnter(){
    console.log('current tabs constructor==> ',this.apiService.isSelected);
    
    if(this.apiService.isSelected=='true'){ 
      if(this.employType==2){
        this.router.navigateByUrl('tabs/customer-allocation');
      }else{
        this.router.navigateByUrl('tabs/orders');
      } 
    }else{
      // this.setCurrentTab();
      this.apiService.isSelected=''
      this.router.navigateByUrl('tabs/home');  
    }
    this.forceUpdate();
    this.localStorage.getStorage().then(storedData=>{
      this.employType = storedData.allStoreData.employee_type;
    });
  }
  ngOnInit(){
    // this.router.navigateByUrl('tabs/tab3');
    // console.log('current tabs constructor==> ');
   

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
          // this.apiService.tandc=result.term_condition_data;
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
                this.sendData.alldata={ "requestFor":'',  "requestPage":"home"  }
                // for redirect to profile page
                this.router.navigate(['/profile-upload']);
                return false;
              }else if(result.conditionCheks.user_location_submit.is_uploaded==false){
              // for redirect to location page
              this.sendData.alldata={"requestFor":'',"requestPage":"home" }
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
  changeTab(url,event){
    this.zone.run(()=>{
    if(url=='profile'){
      this.presentPopover(event);
    }else if(url=='communication-list'){
      this.apiService.showToastMessage("Coming Soon!", 'top', 2000, 'redBg');
     
    }
    else{
      this.router.navigateByUrl('tabs/'+url);
    }
    this.activeTabs=url;
  });
  }

  setCurrentTab(){
    console.log('this.tabRef.getSelected()',this.tabRef.getSelected())
    this.zone.run(()=>{
    // if(this.platform?.is('mobile')){
      console.log('current tabs==> ', this.tabRef.getSelected());
      this.activeTabs=this.tabRef.getSelected();
      });
    }

    
  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfilePage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

   // const { role } = await popover.onDidDismiss();
  //  console.log('onDidDismiss resolved with role', role);
  }
  
     
}