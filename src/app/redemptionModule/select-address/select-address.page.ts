import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.page.html',
  styleUrls: ['./select-address.page.scss'],
})
export class SelectAddressPage implements OnInit {
  redeem_for:any;
  formData: any = [];
  add1:any;
  add2:any;
  req:any;
  pin:any;
  reedem_for:any;
  addid=0;
  searchData: any=[];
  addressDetail:any;
  state:any;
  city:any;

  constructor(private sendData: DataTransferService, public route: Router, public apiService:ApiService, 
    private zone:NgZone ,public platform:Platform) { 
    this.redeem_for = this.sendData.redeem_for;
    this.addressDetail = this.sendData.addressDetails;
    console.log("this.redeem_for : ",this.addressDetail);
    if(this.addressDetail.auto_id!=''){
      console.log("this.redeem_for :123 ",this.addressDetail);
    this.add1=this.addressDetail.address_line1;
    this.add2=this.addressDetail.address_line2;
    this.pin=this.addressDetail.pin_code;
    this.city= this.addressDetail.city;
    this.state= this.addressDetail.state;
   
      console.log("this.redeem_for :12 ",this.req);
    }
    else{
      this.pin=this.addressDetail.pin_code;
      // this.addressDetail.auto_id='';
      // console.log("this ",this.addressDetail.auto_id);
    }
  }

  ngOnInit() {
  //  this.searchApiCall(this.pin) ;
if(this.pin!=''){
  this.searchApiCall(this.pin) ;
}

   
   this.req=this.sendData.alldata;
  }
  // ionViewWillLeave(){
  //   this.addressDetail={};
  // }
 
  
  checkInput(event){
    console.log('1',event);
    if(event.length == 6){
    this.searchApiCall(event);
    }else{
      this.searchData=[];
    }
  }

  searchApiCall(searchString) {
    this.zone.run(() => {
      let apiKey = {
        "search_str": searchString,
        "request_type":"pin"
      }
      // console.log('lengthBABA', apiKey.search_str.toString().length);
      this.apiService.apiCallWithLoginToken(URLS.searchApiUrl, apiKey).subscribe((result) => {
        if (result.success == 1) {
          this.searchData = result.data;
          console.log('   this.searchData',   this.searchData);
          for (let i = 0; i < this.searchData.length; i++) {
            this.city=this.searchData[i].city;
            this.state=this.searchData[i].state;
            this.addressDetail.pin_id=this.searchData[i].auto_id;
          }

        } else {
          // this.addressDetail.auto_id
          this.searchData = [];
          console.log('   this.searchData',   this.searchData);
          // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
    // }
  }
  checkingFilled(){
    if(this.add1 == undefined || this.add1==''){
      this.apiService.showToastMessage('Please fill the Address line 1','top',2000,'redBg');
    }else if(this.add2 == undefined || this.add2==''){
      this.apiService.showToastMessage('Please fill the Address line 2','top',2000,'redBg');
    }else if(this.addressDetail.pin_id == undefined || this.addressDetail.pin_id ==''){
       if(this.searchData == undefined || this.searchData.length == 0){
        this.apiService.showToastMessage('Please fill the pincode','top',2000,'redBg');
      }else{
        this.apiService.showToastMessage('Please fill the correct pincode','top',2000,'redBg');
      }
      
    }else {
      if(this.searchData.length==0){
        this.apiService.showToastMessage('Please fill the correct Pincode','top',2000,'redBg');
      }else{
        this.addressDetails();
      }
      // if(this.searchData.length>0){
       
      // }else{
      // this.apiService.showToastMessage('Please fill the correct Pincode','top',2000,'redBg');
    // }
    }
  }
//AddAddressUrl
addressDetails(){
  // if(this.addressDetail.auto_id==undefined || this.addressDetail.auto_id=='')
  // {
  //   this.addressDetail.auto_id='';
  // }
  console.log("this.redeem_for : ", this.addressDetail.auto_id);
  this.zone.run(()=>{
    let apiKey = {
      "address_line1":this.add1,
      "address_line2":this.add2,
      "address_id":this.addressDetail.auto_id,
      "pin_id": this.addressDetail.pin_id,
      "redeem_for":this.redeem_for,
      "request_for":this.req.customer,
      "request_user_type":this.req.typee,
      "request_page":"dealer",
    }
    //console.log('apiiikkker', apiKey)
    this.apiService.apiCallWithLoginToken(URLS.AddAddressUrl,apiKey).subscribe((result) =>{
      console.log("AddAddressUrl:", result);
     // this.addres = result;
      if(result.success==1){
        this.route.navigate(['./change-address']);
      }else {
      //  this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      }
    },err=>{
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
    });
  });
}
back(){
  this.route.navigate(['./change-address']);
}
}
