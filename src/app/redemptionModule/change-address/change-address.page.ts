import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.page.html',
  styleUrls: ['./change-address.page.scss'],
})
export class ChangeAddressPage implements OnInit {
  redeem_for: any;
  addres:any;
  imgArr:any;
  autoid:any;
  msg:any="";
  constructor(private sendData: DataTransferService, public route: Router, public apiService:ApiService, private zone:NgZone) { 
    this.redeem_for = this.sendData.alldata;

    console.log("this.redeem_for",this.redeem_for);
  }
  ionViewWillEnter(){
    this.chagngeAddress();
}
  ngOnInit() {
    
  }
  radioGroupChange(ev, obj) {
    console.log('ev==>', ev);
    console.log('obj==>', obj);
   // console.log('data==>', data);
 //  obj.answer = obj.value;
    if (obj.is_primary == '1') {
      this.imgArr = obj.auto_id;
    } else {
      this.apiService.presentLoadingDefault();
      this.zone.run(()=>{
        let apiKey = {
          "address_fetch_type":"change",
          "redeem_for":this.redeem_for.request_page,
          "request_page":"dealer",
          "address_id":obj.auto_id,
          "request_for": "5",
          "requested_module": "address",
        }
        this.apiService.apiCallWithLoginToken(URLS.SkipUrl,apiKey).subscribe((result) =>{
          console.log("CommonUrl: ", result);
          this.apiService.presentLoadingClose();
          if(result.success==1){
            //this.apiService.showToastMessage(result.message, 'top' , 2000, 'greenBg');
            this.route.navigate(['./buyitem']);
          }
          else{
            this.apiService.showToastMessage(result.message, 'top' , 2000, 'redBg');
          }
        }, err => {
          this.apiService.presentLoadingClose();
          this.apiService.showToastMessage(JSON.stringify(err), 'top', 2000, 'redBg');
        }
        )
      }
      )
    //  this.imgArr = obj.auto_id;
    }
  }

chagngeAddress(){
  this.apiService.presentLoadingDefault();
  this.zone.run(()=>{
    let apiKey = {
      "address_fetch_type":"change",
      "redeem_for":this.redeem_for.request_page,
      "request_page":"dealer",
      "request_for":this.redeem_for.customer_id,
      "request_user_type":this.redeem_for.employee_type
    }
    this.apiService.apiCallWithLoginToken(URLS.AddressUrl,apiKey).subscribe((result) =>{
      console.log("AddressUrl: ", result);
      this.apiService.presentLoadingClose();
      this.addres = result;
      if(result.success==1){
        this.msg='';
        for (let i = 0; i < this.addres.data.data.length; i++) {
          if(this.addres.data.data[i].is_primary=='1' || this.addres.data.data[i].is_primary==1){
            this.imgArr = this.addres.data.data[i].auto_id;
            console.log("this.imgArr: ",this.imgArr);
         
          } else{
           // this.imgArr= '';
            console.log("this.imgArr: ",this.imgArr);
          }
        }
        // for(let i =0; i<this.addres.data.data.length; i++){
        //   if(this.addres.data.data[i].is_primary == '1' || this.addres.data.data[i].is_primary == 1){
        //     this.autoid = this.addres.data.data[i].auto_id;
        //   }
        //   // else{
        //   //   this.autoid="";
        //   // }
        // }
      }else {
this.msg=result.message;
      }
    },err=>{
     
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
    });
  }); 
}

addAddress(){
let item={"auto_id":'',"pin_code":''}
 this.sendData.alldata={"customer":this.redeem_for.customer_id ,"typee":this.redeem_for.employee_type};
 console.log('selecttttt:', this.sendData.alldata);
  this.sendData.addressDetails =item;
  console.log('addressDetails:', this.sendData.addressDetails);
  this.route.navigate(['./select-address']);
}
edit(item){
  this.sendData.addressDetails = item;
  this.route.navigate(['./select-address']);
}
}
