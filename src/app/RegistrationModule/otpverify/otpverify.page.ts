import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.page.html',
  styleUrls: ['./otpverify.page.scss'],
})

export class OtpverifyPage implements OnInit {

  FirstOtp:any = "";
  SecondOtp:any = "";
  ThirdOtp:any = "";
  FourthOtp:any = "";
  mobileNumberData:any;
  reg:any;
  priviousData: any;

  constructor(private route: Router, public platform:Platform,private apiService:ApiService,private zone:NgZone,
    private sendData:DataTransferService,private localStorage:LocalStorageService,public navCtrl:NavController) { 

    this.priviousData=this.sendData.alldata;
    this.mobileNumberData=this.priviousData.apiData;
    this.reg=this.sendData.itemDetails;
    console.log('login priviousData', this.priviousData);
    console.log('login reg', this.reg);
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });

  }




  ngOnInit() {

  }

  moveFocus(nextElement, val, index){
    if (index < 4) {
      if (this.SecondOtp == undefined || this.SecondOtp == "") {
        nextElement.setFocus();
      } else if (this.ThirdOtp == undefined || this.ThirdOtp == "") {
        nextElement.setFocus();
      } else if (this.FourthOtp == undefined || this.FourthOtp == "") {
        nextElement.setFocus();
      }
    } else {}
  }

  checkFocus(index){
    console.log("********", index);
    if (index == 1) {
      this.FirstOtp = "";
    } else if (index == 2) {
      this.SecondOtp = "";
    } else if (index == 3) {
      this.ThirdOtp = "";
    } else if (index == 4) {
      this.FourthOtp = "";
    }
  }
  Continue(){
    this.zone.run(()=>{
      this.apiService.presentLoadingDefault();
      let apiKey={
        "contact":this.priviousData.phonenumber,
        "otp":this.FirstOtp.trim() + this.SecondOtp.trim() + this.ThirdOtp.trim() + this.FourthOtp.trim(),
        "employee_id":this.mobileNumberData.user_id,
        "type":this.mobileNumberData.data.type,
        "dealer_id": this.priviousData.dealer_id,
        "request_page":this.priviousData.requestPage,
        "request_for":this.mobileNumberData.user_id
      }
      this.apiService.apiCallWithLoginToken(URLS.otpSubmitUrl,apiKey).subscribe((result) =>{
        this.apiService.presentLoadingClose();
        if(result.success==1){
          if(result.request_page=='dealer'){
            this.sendData.registrationType=result;
            this.sendData.alldata=this.mobileNumberData.user_id;
            this.route.navigate(['/registration']);
           console.log('1 sendData',this.sendData.alldata);
          }else if(result.request_page=='officer'){
            result.frompage='otp';
            this.sendData.registrationType=result;
            this.sendData.alldata=this.mobileNumberData.user_id;
            if(this.reg.data.data.show_form == true){
              this.route.navigate(['/registration']);
            }else{
              this.navCtrl.navigateRoot(["tabs/home"]);
              // this.route.navigateByUrl("/tabs/home",{replaceUrl:true});
            }
            console.log('2 sendData',this.sendData.alldata);
          } else{
            this.localStorage.setStorage('allStoreData',result.data);   
            if(result.tnc_verified==0){
              this.route.navigate(['/terms-conditions']);
            }else{
              this.localStorage.getStorage().then(allShiavsnhi=>{
                console.log('2 allShiavsnhi',allShiavsnhi);
                if(allShiavsnhi){
                  console.log('2 allShiavsnhi==',allShiavsnhi);
                  setTimeout(() => {
                    window.location.reload()
                  }, 100);
                  this.navCtrl.navigateRoot(["/tabs/home"]);
                  // this.route.navigateByUrl("/tabs/home",{replaceUrl:true});
                  //  this.route.navigate(['./tabs']);
                }  
              });
            }
          }
        }else{
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      },err =>{
        this.apiService.presentLoadingClose();
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    }); 
  }

  SendOtp(Sendtype,messageType){
    this.apiService.presentLoadingDefault();
    this.zone.run(()=>{
      let apiKey={
        "contact":this.priviousData.phonenumber,
        "send_type":Sendtype,
        "message_type":messageType
      }
      this.mobileNumberData.data.type ="3";
      this.apiService.apiCallWithLoginToken(URLS.MobileSubmitUrl,apiKey).subscribe((result) =>{
        this.apiService.presentLoadingClose();
        if(result.message){
          this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
        }else{

        }
      
      },err =>{
        this.apiService.presentLoadingClose();
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    }); 
  }
  mobileno(){
    this.route.navigate(['./mobile']);
  }
}
