import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.page.html',
  styleUrls: ['./mobile.page.scss'],
})

export class MobilePage implements OnInit {

  phonenumber: any = '';
  mobileSubmitData: any;
  loginPageData: any;
  maintanceData: any;
  phone_code: number;
  isChecked: any;
  itemss: any;
  show_Popup: any;

  constructor(private route: Router,public platform: Platform,private apiService: ApiService,private zone: NgZone,
    public sendData: DataTransferService,private localStorage: LocalStorageService,public navCntrl: NavController) {
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });

  }

  ionViewWillEnter() {
    this.itemss =this.sendData.itemDetails;
    console.log('ssssssss:', this.itemss);
    this.loginPageData = this.sendData.loginKey;
    console.log('loginPageData',this.loginPageData);
    this.show_Popup = this.sendData.alldata;
    console.log(' this.show_popup ', this.show_Popup );
    if(this.loginPageData.type=="Existing"){
      this.maintanceData=this.show_Popup.show_popup[0].otp_screen_data;
    }else if(this.loginPageData.type=="Register"){
      this.maintanceData=this.show_Popup.show_popup[1].otp_screen_data;
    }else{
        this.localStorage.getStorage().then((storedData) => {
        this.maintanceData = storedData.maintainanceData;
        console.log('ffff: ', this.maintanceData);
        console.log('localStorage data from maintance', storedData);
      });
    }
  }

  ionViewWillLeave() {
    //this.sendData.alldata.otp_screen_data = this.maintanceData;
  }

  ngOnInit() {
   
  }

  LoginCall(phonenumber, sms) {
    console.log('length',phonenumber.length);
    if(phonenumber.trim().length==10){
    this.apiService.presentLoadingDefault();
    this.zone.run(() => {
      let apiKey = {
        contact: phonenumber,
        send_type: this.loginPageData.type,
        message_type: sms,
      };
      console.log('login data response', apiKey);
      this.apiService.apiCallWithLoginToken(URLS.MobileSubmitUrl, apiKey).subscribe((result) => {
        console.log('login data response', result);
        this.apiService.presentLoadingClose();
        if (result.success == 1) {
          this.mobileSubmitData = result;
          let object = {
            apiData: this.mobileSubmitData,
            phonenumber: phonenumber,
            send_type: this.loginPageData.type,
            requestPage: this.loginPageData.requestPage,
          };
          this.sendData.alldata = object;
          this.phonenumber = '';
          console.log('login data response', this.sendData);
          this.apiService.showToastMessage(result.message,'top',3000,'greenBg');
          this.sendData.itemDetails = this.itemss;
          this.route.navigate(['/otpverify']);
        } else {
          this.phonenumber = '';
          this.apiService.showToastMessage(result.message,'top',3000,'redBg');
        }
      },(err) => {
        this.apiService.presentLoadingClose();
        this.apiService.showToastMessage(JSON.stringify(err),'top',3000,'redBg');
      });
    });
  }else{
    this.apiService.showToastMessage('Please enter 10 digits.','top',3000,'redBg');
  }
  }

  termsShow() {
    this.zone.run(() => {
    this.route.navigate(['/terms-conditions']);
    });
  }

  privacyShow() {
    console.log('1');
    this.zone.run(() => {
    this.route.navigate(['/privacy-policy']);
    });
  }

  gotoLogn() {
    this.zone.run(() => {
    this.route.navigate(['/login']);
    });
  }


  gotoHomeTab() {
    this.zone.run(() => {
    console.log('request page==', this.loginPageData);
    if (this.loginPageData.requestPage == 'officer') {
      console.log('1');
      this.apiService.isSelected = '';
      this.navCntrl.back();
      // this.route.navigateByUrl("/tabs/home",{replaceUrl:true});
    } else {
      this.apiService.isSelected = 'true';
      this.navCntrl.back();
      // this.route.navigateByUrl('/tabs/customer-allocation');
    }
    console.log('this.apiService.isSelected000000', this.apiService.isSelected);
  });
    // alert(this.apiService.isSelected)
  }

  UpCall(phonenumber, sms) {
    this.zone.run(() => {
      let apiKey = {
        contact: phonenumber,
        send_type: 'Existing',
        message_type: sms,
      };
      console.log('login data response', apiKey);
      this.apiService.apiCallWithLoginToken(URLS.ExistingUrl, apiKey).subscribe(
        (result) => {
          console.log('login data response', result);
          if (result.success == 1) {
            this.sendData.itemDetails = result;
            this.sendData.alldata = apiKey;
            this.sendData.item = this.itemss;
            this.sendData.loginKey = this.loginPageData;
            this.route.navigate(['/select-dealer']);
            this.phonenumber = '';
          } else {
            this.apiService.showToastMessage(result.message,'top',3000,'redBg');
          }
        },
        (err) => {
          this.apiService.showToastMessage(JSON.stringify(err),'top',3000,'redBg');
        }
      );
    });
  }
}
