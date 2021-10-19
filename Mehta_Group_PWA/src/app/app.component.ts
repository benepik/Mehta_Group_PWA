import { Component, NgZone, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { Platform ,AlertController,  NavController, IonRouterOutlet  } from '@ionic/angular';
import { URLS } from 'src/assets/constant';
import { ApiService } from './provider/api.service';
//import { Location } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { PlatformLocation } from '@angular/common';
//import { Platform,  } from '@ionic/angular';

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
 
  constructor(public platform:Platform,private localStorage:LocalStorageService, public loc: PlatformLocation, private zone:NgZone,
    private apiService:ApiService,private route:Router,
    public alertController: AlertController,private splashScreen: SplashScreen,
    private statusBar: StatusBar,) {
    this.localStorage.createDB();
    this.initializeApp();
    // this.maintance();
   // this.initializeApp();
    
    //.initializeApp();
    
      // var r = confirm("You pressed a Back button! Are you sure?!");

      // if (r == true) {
      
      //   if(window.location.pathname == "/tabs/home"){
      //     history.pushState(null, null, window.location.href);
      //   }
      //   else{
      //     history.back();
      //   }
      //     // Call Back button programmatically as per user confirmation.
          
      //     // Uncomment below line to redirect to the previous page instead.
      //     // window.location = document.referrer // Note: IE11 is not supporting this.
      // } else {
      //  // alert(2);
      //     // Stay on the current page.
      //     alert(window.location.pathname);
      //     history.pushState(null, null, window.location.href);
      // }

      // history.pushState(null, null, window.location.href);
  

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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.maintance();
    });
  //   this.loc.onPopState(() => {
  //     // this.loc.forward();
  //     // this.route.navigate(['./transaction-hist']);
  //     // history.pushState(null, null, window.location.pathname);
  //     //window.location.replace('/transaction-hist');
  //     history.pushState(null, null, window.location.pathname);
      
  //     // if(window.location.pathname == "/tabs/home"){
       
  //     // }
  //     // else if(window.location.pathname == "/login"){
  //     // //  alert(window.location.pathname);
  //     //   history.pushState(null, null, window.location.pathname);
  //     // }
  //  });
    // this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    //   console.log('Back press handler!');
    //   if (this._location.isCurrentPathEqualTo('/home')) {

    //     // Show Exit Alert!
    //     console.log('Show Exit Alert!');
    //     this.showExitConfirm();
    //     processNextHandler();
    //   } 
    //   else if(this._location.isCurrentPathEqualTo('/login')){
    //     console.log('Show Exit Alert!');
    //     this.showExitConfirm();
    //     processNextHandler();
    //   }
    //   else {

    //     // Navigate to back page
    //     console.log('Navigate to back page');
    //     this._location.back();

    //   }

    // });

    // this.platform.backButton.subscribeWithPriority(5, () => {
    //   console.log('Handler called to force close!');
    //   this.alertController.getTop().then(r => {
    //     if (r) {
    //       navigator['app'].exitApp();
    //     }
    //   }).catch(e => {
    //     console.log(e);
    //   })
    // });

  }
  // backButtonEvent() {
  //   document.addEventListener("backbutton", () => {
  //     this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
  //     if (outlet && outlet.canGoBack()) {
  //     outlet.pop();
  //     }else if(this.route.url === "tabs/home"){
  //     navigator['app'].exitApp(); // work for ionic 4
  //     } else if (!outlet.canGoBack()) {
  //     navigator['app'].exitApp(); // work for ionic 4
  //     }
  //     });
  //     });
  //   // this.platform.backButton.subscribeWithPriority(0, () => {
  //   //   if (this.routerOutlets && this.routerOutlets.canGoBack()) {
  //   //     this.routerOutlets.pop();
  //   //   } else if (this.route.url === '/LoginPage') {
  //   //     navigator['app'].exitApp();
  
  //   //     // or if that doesn't work, try
  //   //     navigator['app'].exitApp();
  //   //   } else {
  //   //     this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
  //   //   }
  //   // });
  //   }
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
              this.route.navigateByUrl('tabs');              
            }else{                        
            console.log('localStorage storedData maintance',storedData);
              this.maintanceData=storedData.maintainanceData;
              this.route.navigate(['/login']);              
            }
          });         
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











}
