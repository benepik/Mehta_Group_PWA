import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { APP_CONFIG, URLS } from 'src/assets/constant';
import { catchError, mergeMap } from 'rxjs/operators';
import { ToastController, LoadingController, Platform, AlertController } from '@ionic/angular';
import { LocalStorageService } from '../services/local-storage.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { DataTransferService } from '../services/data-transfer.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // public  loading:any;
 loading:any;
  tandc:any;
  isSelected:any;
  fcmToken: string;
  fcmGenerationRetryCount: number=0;
  options:InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };
  deviceId: any;
  forceUpdateCount:number=1;
  pushIsinBackground: boolean=false;
  get device(){
    if (this.platform.is("ios")) {
      return "3";
    } else if (this.platform.is("android")) {
      return "2";
    } else {
      return "4";
      // return "2";
    }
  };
  constructor(private http:HttpClient, public loadingCtrl: LoadingController, public toastController:ToastController,
    private localStorage:LocalStorageService,public iab:InAppBrowser ,public alertController:AlertController,
    private device_id:Device,public platform:Platform, private fcm: FCM,private sendData:DataTransferService,
    public  router:Router) { }

  apiCallWithLoginToken(url: string, data: Object): Observable<any> {
    console.log("22url==", url);
    return from(this.localStorage.getStorage()).pipe(mergeMap((storedData)=>{
      console.log("Shivanshi local storage data==", storedData);
      data["client_id"] = APP_CONFIG.clientId;
      data["device"] = this.device;
      data["app_version"]=APP_CONFIG.app_version;
      data["device_id"] = storedData.deviceId;         
      var loginToken;
      if(storedData && storedData.allStoreData){
        console.log("Shivanshi allStoreData==", storedData.allStoreData);
        data["employee_id"] = storedData.allStoreData.user_id;
        data["user_type"]=storedData.allStoreData.employee_type;
         loginToken=storedData.allStoreData.login_token;
        console.log('Shivanshi login token', loginToken);
      }else{ 
        loginToken="";
        console.log('login token response', loginToken);
      }
      var httpOptions = {
          headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization:loginToken
        }),
      };
      console.log('Shivanshi request options', httpOptions);
      console.log('Shivanshi request url', URLS.baseUrl+url);
      console.log('Shivanshi request data', data);
      // alert('Shivanshi url==> '+URLS.baseUrl+url);
      // alert('Shivanshi tokens==> '+JSON.stringify(loginToken));
      // alert('Shivanshi data==> '+JSON.stringify(data));
      return this.http.post(URLS.baseUrl+url, data, httpOptions)
      .pipe(catchError(this.handleError));
    }) )

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened, please try again later.");
  }
  async showToastMessage(msg, pos, time, bgClassName) {
    if(msg==''){

    }else{
    console.log("toastMessage color==", bgClassName);
    const toast = await this.toastController.create({
      message: msg,
      position: pos,
      duration: time,
      cssClass:bgClassName
    });
    toast.present();
  }
  }
  async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
			message: '',
			cssClass: 'loader-waiting',
      duration:2000
      
		});
		await this.loading.present();
    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');

	}

   generateDeviceId(){
    if (this.platform.is("cordova")) {
      console.log("call FCM /DeviceId 12");
      let deviceUuid=this.device_id.uuid;
      this.deviceId = deviceUuid==null?"browser":deviceUuid;
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
    }
  }

  async	presentLoadingClose() {
    await this.loading.dismiss();
    // console.log('Loading dismissed!');
    // await this.loading.getTop().then(loader => {
    //   if (loader) {
    //     loader.dismiss();
    //   }
    // });
	}

  //for media file
    public mediaFileUpload(url, formData) {
      return from(this.localStorage.getStorage()).pipe(mergeMap((storedData)=>{
        console.log("storedData",storedData)
        formData.append('client_id', APP_CONFIG.clientId);
        formData.append('device',this.device);
        formData.append('device_id', storedData.deviceId);
        formData.append('app_version', APP_CONFIG.app_version);
        formData.append('employee_id', storedData.allStoreData.user_id);
        formData.append('user_type', storedData.allStoreData.employee_type);
      return this.http.post<any>(URLS.baseUrl+url, formData, {
          reportProgress: true,
          observe: 'events',
        })
      }));
    }

    async generateFCMToken(){
      let that=this;
      this.platform.ready().then(() => {
        console.log("call FCM Function==");
        if(this.platform.is("cordova")) {
          that.fcm.subscribeToTopic('Mehta');
          console.log("call FCM platform==",that.platform);
          that.fcm.onNotification().subscribe((data) => {
            console.log("data receive from server call FCM == ",data);
            if(data.wasTapped){
              console.log("Received in background");
              that.pushIsinBackground=true;
              setTimeout(() => {
                that.checkcondition(data);
              }, 3000);
              console.log("call FCM Received in background==",data);
            } else {
              console.log("Received in foreground");
              console.log("call FCM Received in foreground==",data);
              if (that.platform.is('ios')) {
                that.pushAlertView(data.aps.alert.title, data.aps.alert.body, data);
              }else{
                // that.pushAlertView(data.title+' '+'New Notification', data.body, data);
                that.pushAlertView(data.title, data.body, data);
              }
            };
            that.fcm.unsubscribeFromTopic('Mehta');
          });
          this.fcm.getToken().then(token => {
            console.log("call FCM and get token0==", token);
            if(token){
              this.fcmToken=token;

              console.log("call FCM If Token==>", this.fcmToken);
              setTimeout(()=>{
                this.localStorage.setStorage('fcmToken', this.fcmToken);
              },1000);
              // this.storage.set('fcmToken', this.fcmToken);
            }else{
              console.log("call FCM else Token==", token);
              if(this.fcmGenerationRetryCount<=2){
                this.generateFCMToken();
                this.fcmGenerationRetryCount=this.fcmGenerationRetryCount+1;
              }
            }
          });
          console.log("call FCM and get token1.1==");
          this.fcm.onTokenRefresh().subscribe(token => {
            console.log("call FCM and get token1==", token);
          });
        }else{
          let fcmDummyToken="PWA";
          setTimeout(()=>{
            this.localStorage.setStorage('fcmToken', fcmDummyToken);
          },800);
            // this.storage.set('fcmToken', this.fcmToken);
          console.log("call FCM static FCM Token==", fcmDummyToken);
        }
      })
    }

    async pushAlertView(pushTitle, pushMessage, pushData){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: pushTitle,
        message: pushMessage,
        backdropDismiss:false,
        buttons: [
          {
            text: 'Ignore',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log("call FCM cancel/Ignore Push Alert==", blah);
            }
          }, {
            text: 'View',
            handler: () => {
              console.log("call FCM View/Redirect Push Alert==",pushData);
              this.checkcondition(pushData);
            }
          }
        ]
      });
      await alert.present();
    }

    checkcondition(pushAllData){
      console.log("call FCM push redirection data==", pushAllData);
      console.log("call FCM checkConditionData 12==", pushAllData);
      this.sendData.alldata=pushAllData;  // this data transfer use for "notice-detail", "hr-policy-detail"
      this.sendData.myParam=pushAllData;  // this data transfer use for "communication-detail", "say-cheers-detail"
      this.router.navigate([pushAllData.redirect_page]);
      if(this.pushIsinBackground==true){
        //hide loader in case of backfround push
        console.log("call FCM App Position in background==", this.pushIsinBackground);
        // this.hideLoader();
      }else{
        console.log("call FCM App Position in foreground==", this.pushIsinBackground);
      }
    }
}
