import { Location } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
// import { ApiService } from '../provider/api.service';

@Component({
  selector: 'app-appove-reject-reedemption',
  templateUrl: './appove-reject-reedemption.page.html',
  styleUrls: ['./appove-reject-reedemption.page.scss'],
})
export class AppoveRejectReedemptionPage implements OnInit {
  orderData:any;
  priviousData:any;
  errorMessage:any;
  constructor(private apiService:ApiService,public zone:NgZone,public route:Router, public location:Location,private sendData:DataTransferService) {
    this.priviousData=this.sendData.alldata;
   }

  ngOnInit() {
    this.orderDetail();
  }

  orderDetail(){
    this.apiService.presentLoadingDefault();
    this.zone.run(() => {
      let apiKey = {
        "order_id":this.priviousData.auto_id,
        "is_panel_login":''
      }
      this.apiService.apiCallWithLoginToken(URLS.orderDetailUrl, apiKey).subscribe((result) => {
        console.log("PostListUrl: ", result);
        this.apiService.presentLoadingClose();
        this.orderData=result;
        if (result.success == 1) {
          
        }else{
          this.errorMessage=result.message;
        }
      },err=>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    })
  }
  close(){
    this.route.navigate(['/orderdetails'])
  }
  acceptFun(item){
    this.apiService.presentLoadingDefault();
    this.zone.run(() => {
      let apiKey = {
        "order_id":this.priviousData.auto_id,
        "product_price":'',
        "agency_fees":'',
        "courier_charges":'',
        "order_status":item.order_status,
        "approval_status":item.approval_status,
        "utm_source":''
      }
      this.apiService.apiCallWithLoginToken(URLS.acceptRejectUrl, apiKey).subscribe((result) => {
        console.log("PostListUrl: ", result);
        this.apiService.presentLoadingClose();
        if(result.success==1){
          this.location.back();
          this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
        }else{
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
  
      },err=>{
        this.apiService.presentLoadingClose();
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    })

  }

}
