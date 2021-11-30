import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
// import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-redeemotp',
  templateUrl: './redeemotp.page.html',
  styleUrls: ['./redeemotp.page.scss'],
})
export class RedeemotpPage implements OnInit {
  FirstOtp:any = "";
  SecondOtp:any = "";
  ThirdOtp:any = "";
  FourthOtp:any = "";
  sendOtpData:any;
  redeem_for:any;
  otpfirts:any;
  key:number = 0;
  temparray:any;
  val:boolean;
  cart_details:any;
  addres_id:any;
  req:any;
  red: any;
  userTypeAll: any;
  constructor(public modalController: ModalController,public apiServices:ApiService,public platform:Platform,
    private sendData: DataTransferService,public zone:NgZone,private router:Router,public localStorage:LocalStorageService) {
    this.cart_details = this.sendData.cartDetails;
    this.redeem_for = this.sendData.redeem_for;
    this.addres_id = this.sendData.address_id;
    this.req = this.sendData.alldata;
    this.red=this.sendData.item;
    this.localStorage.getStorage().then(storedData=>{
      this.userTypeAll=storedData.allStoreData;
    })
   }

  ngOnInit() {
    // if(this.key == 1){
    //   this.getOtpDetails();
    // }
    this.getOtpDetails();
  }
  ionViewWillEnter(){
    this.zone.run(()=>{
      if(this.platform.is('mobile')){
        // this.postSlider={speed:"500",initialSlide:0,slidesPerView:2.3,spaceBetween:7};
        // // this.postSlider.initialSlide=2.3;
        this.val=true;
        console.log("this.val",this.val);
      }else{
        // this.postSlider={speed:"500",initialSlide:0,slidesPerView:4.3,spaceBetween:7};
        // this.postSlider.initialSlide=4.3;
        this.val=false;
        console.log("this.val111",this.val);
      }
    })
  }

  getkey(otpfirts77,ev){
    console.log("tttt111",ev);
    console.log("tttt111",otpfirts77);
    console.log("tttt",this.otpfirts);
  }
  getOtpDetails(){
    this.apiServices.presentLoadingDefault();
    this.zone.run(async () => {
      let apiKey = {
        "send_type":"redeem",
        "request_page":"dealer",
        "redeem_for":this.red,
        "request_for":this.req.request_for,
      "request_user_type":this.req.request_user_type
      }
      
      this.apiServices.apiCallWithLoginToken(URLS.otpGetUrl, apiKey).subscribe((result) => {
        this.temparray = result.data;
        this.apiServices.presentLoadingClose();
        if(result.success == 1 || result.success == '1'){
          this.apiServices.showToastMessage(result.message, 'top', 2000, 'greenBg');
        }
        else{
          this.apiServices.showToastMessage(result.message, 'top', 2000, 'redBg');
        }
      
        
      })
    });
  }

  moveFocus1(nextElement, val, index){
    console.log("val",val)
  }
  moveFocus(nextElement, val, index){
    console.log("val",val)
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

  close(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  checkFocus(index){
     console.log('otp:', this.FirstOtp)
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
    console.log('otp:', this.FirstOtp, this.SecondOtp, this.ThirdOtp, this.FourthOtp )
  }



  gotohistory(){
    console.log('otp1223', this.otpfirts)
//this.addres_id=this.addres.data.data[0].auto_id;
  this.zone.run(async () => {
    let apiKey = {
      "request_page":"dealer",
      "redeem_for":this.redeem_for,
      "address_id":this.addres_id,
      "cart_id":this.cart_details[0].cart_id,
      "otp":this.FirstOtp.trim() + this.SecondOtp.trim() + this.ThirdOtp.trim() + this.FourthOtp.trim(),
      "otp_type": this.temparray.type,
      "request_for":this.req.request_for,
      "request_user_type":this.req.request_user_type
    }
  
    this.apiServices.apiCallWithLoginToken(URLS.BuyUrl, apiKey).subscribe((result) => {
      
     // this.temparray = result.data;
      if(result.success == 1 || result.success == '1'){
        this.modalController.dismiss({
          'dismissed': true 
        });
        this.apiServices.showToastMessage(result.message, 'top', 2000, 'greenBg');
        this.sendData.page_request_type = 'detail';
        //this.sendData.backKey='back';
        if(this.userTypeAll.employee_type==1){
          this.sendData.alldata={'customer_id':'','request_page':'self', 'backKey': 'back' }
        }else{
          if(this.req.request_for==''){
            this.sendData.alldata={'customer_id':'','request_page':'self', 'backKey': 'back' }
          }else{
            this.sendData.alldata={'customer_id':this.req.request_for,'request_page':'other', 'backKey': 'back' }
          }
    
        }
        this.router.navigate(['/purchasehistory']);
        //this.callModal();
      }
      else{
        this.apiServices.showToastMessage(result.message, 'top', 2000, 'redBg');
      }
    })
  });
    

  }
}
