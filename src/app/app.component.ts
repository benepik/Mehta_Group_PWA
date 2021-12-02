import { Component, NgZone, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { Platform ,AlertController,  NavController, IonRouterOutlet  } from '@ionic/angular';
import { URLS } from 'src/assets/constant';
import { ApiService } from './provider/api.service';
import { LocalStorageService } from './services/local-storage.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { PlatformLocation } from '@angular/common';
import { Device } from '@ionic-native/device/ngx';
import { DataTransferService } from './services/data-transfer.service';

import { FCM } from '@ionic-native/fcm/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  @ViewChildren(RouterOutlet) outlet: RouterOutlet; 
  public isDesktop = false;
  maintanceData:any;
  deviceId: any;
 
  constructor(public platform:Platform,private localStorage:LocalStorageService, public loc: PlatformLocation, private zone:NgZone,
    private apiService:ApiService,private route:Router,private device_id:Device,private sendData:DataTransferService,
    public alertController: AlertController,private splashScreen: SplashScreen,private fcm: FCM,
    private statusBar: StatusBar,) {
    this.localStorage.createDB();
    this.initializeApp();
  

    document.querySelector('body').style.setProperty('--headerColor','#B01D22');
    document.querySelector('body').style.setProperty('--backgroundColor',' #F2F4F5');
    document.querySelector('body').style.setProperty('--reedeemColor','  #FEBA12');
  }
  ionViewWillEnter(){
  //  this.initializeApp();
  }
  ngOnInit() {
    this.isDesktop = this.platform.is('desktop');
    this.route.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });
    // this.maintance();
    
   // this.backButtonEvent();
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      // if (this.platform.is("cordova")) {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.fcmActivity()
      this.generateDeviceId();
      this.apiService.generateFCMToken();
      this.maintance(); 



    });
 



  }

  async fcmActivity(){

    this.fcm.subscribeToTopic('marketing');

this.fcm.getToken().then(token => {
 
  console.log('appcomponent fcm push getToken==> ', JSON.stringify(token));
},error=>{
  console.log('appcomponent fcm push getToken error==> ', JSON.stringify(error));
});

this.fcm.onNotification().subscribe(data => {
  if(data.wasTapped){
    console.log("appcomponent Received in background");
  } else {
    console.log("appcomponent Received in foreground");
  };
},error=>{
  console.log('appcomponent fcm push onnotification error==> ', JSON.stringify(error));
});

this.fcm.onTokenRefresh().subscribe(token => {
  console.log('appcomponent fcm push getToken==> ', JSON.stringify(token));
},error=>{
  console.log('appcomponent fcm push onTokenRefesh error==> ', JSON.stringify(error));
});

this.fcm.hasPermission().then(hasPermission => {
  if (hasPermission) {
    console.log("appcomponent Has permission!");
  }else{
    this.fcm.requestPushPermissionIOS().then(res=>{
      console.log('appcomponent fcm push permission==> ', JSON.stringify(res));
    },(error)=>{
      console.log('appcomponent fcm push permission error==> ', JSON.stringify(error));

    });
  }
},error=>{
  console.log('appcomponent fcm push hasPermission error==> ', JSON.stringify(error));
  this.fcm.requestPushPermissionIOS().then(res=>{
    console.log('appcomponent fcm push permission==> ', JSON.stringify(res));
  },(error)=>{
    console.log('appcomponent fcm push permission error==> ', JSON.stringify(error));

  });
})



  }

  generateDeviceId(){
    if (this.platform.is("cordova")) {
      console.log("call FCM /DeviceId 12");
      let deviceUuid=this.device_id.uuid;
      console.log('device id==>'+deviceUuid);
      this.deviceId = deviceUuid==null?"browser":deviceUuid;
      // alert('2'+this.deviceId);
      if(this.deviceId=="browser"){
        let deviceUuid=this.device_id.uuid;
        this.deviceId = deviceUuid==null?"browser":deviceUuid;
        if(this.deviceId=="browser"){
          let deviceUuid=this.device_id.uuid;
          this.deviceId = deviceUuid==null?"browser":deviceUuid;
          this.localStorage.setStorage('deviceId', this.deviceId);
        }else{
          this.localStorage.setStorage('deviceId', this.deviceId);
        }
      }else{
        this.localStorage.setStorage('deviceId', this.deviceId);
      }
    }else{
      console.log("call FCM /DeviceId 123");
      this.localStorage.setStorage('deviceId', 'PWA');
      console.log("call FCM /DeviceId 121",this.deviceId);
    }
  }
  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
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
          await this.localStorage.setStorage('maintainanceData', result);
          await this.localStorage.getStorage().then((storedData)=>{
            console.log('localStorage storedData storedData',storedData);
            if(storedData && storedData.allStoreData!=undefined){
              // this.route.navigate(['/tabs']);
              console.log('localStorage storedData',storedData);
              // window.location.assign('/tabs');
              this.route.navigateByUrl('/tabs/home');              
            }else{                        
            console.log('localStorage storedData maintance',storedData);
              this.maintanceData=storedData.maintainanceData;
              this.route.navigate(['/login']);              
            }
          });         
          if(result.data.is_down==1 || result.data.is_down=='1'){
            this.sendData.myParam=result.maintainence_data;
            this.route.navigate(["/maintenance"]);
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

}
