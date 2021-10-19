import { Component, OnInit, NgZone } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { Platform, PopoverController } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.page.html',
  styleUrls: ['./orderdetails.page.scss'],
})
export class OrderdetailsPage implements OnInit {
  apiDetails:any;
  listData:any;
  value:number=0;
  month:any = new Date().toISOString();
  listType:any;
  infiniteScroll_call: boolean=false;
  infiniteScroll_val: any;
  errorMessage: any;
  searchString:string='';
  mnth:any='';
  customerT:any='';
  errorImage: any;
  callapicheck:number=0;
  constructor(private route: Router, public location:Location,public platform:Platform, public zone:NgZone, public popoverController: PopoverController,
    private apiService:ApiService, public sendData: DataTransferService,private localStorage:LocalStorageService) {
      
      
     }
ionViewWillEnter(){
  this.apiDetails=this.sendData.ordersDetails;
  this.mnth = this.month.slice(5,7);
  this.value=0;
  this.listData=[];
  this.customerT ='1,2';
  this.orderDetailsShow(this.searchString, this.mnth,this.customerT);
}

  ngOnInit() {
   
  }

  gotoHomeTab(){
    
    console.log("this.apiService.isSelected000000",this.apiService.isSelected)
}
close(){
  this.apiService.isSelected='true';
  this.route.navigate(['./tabs']);
}
  changeData(ev){
    if(this.callapicheck!=0){
      this.listData=[];
      this.value=0;
      console.log('ev',ev);
      this.mnth = this.month.slice(5,7);
      console.log('ev',this.mnth);
     this.orderDetailsShow(this.searchString, this.mnth,this.customerT);
    }
  }

  checkValue(ev) {
    console.log('select opt value==> ', ev);
 this.customerT=ev.target.value;
 this.listData=[];
 this.value=0;
 this.mnth = this.month.slice(5,7);
    this.orderDetailsShow(this.searchString, this.mnth,this.customerT);

  }
orderDetailsShow(string, Month,customerType){
  console.log('val');
  this.zone.run(()=>{
    let apiKey = {
      "year": this.apiDetails.year,
      "month": Month,
      "order_status": this.apiDetails.item.order_status,
      "customer_type":customerType,
      "search_str":string,
      "value":this.value
    }
    this.apiService.apiCallWithLoginToken(URLS.OrderDetailListUrl, apiKey).subscribe((result) =>{
    // this.apiService.presentLoadingClose();
      console.log("OrderDetailListUrl: ", result);
      this.listType = result.filter.data;
      this.callapicheck=1;
      if(result.success == 1){
        if(this.listData==undefined){
          this.listData=result.data;
        }else{
          this.listData=this.listData.concat(result.data);
        }
        this.errorMessage='';
        this.errorImage='';
      }else{
        if(this.value==0){
          this.errorImage=result.error_image;
        }else{
           this.errorMessage=result.message;
        }

        // this.listData=[];
        // this.apiService.showToastMessage(result.message, 'top', 2000, 'redBg');
      }
          if(this.infiniteScroll_call==true){
      this.stopInfiniteScroll();
      }
    },err=>{
   //   this.apiService.presentLoadingClose();
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
          if(this.infiniteScroll_call==true){
      this.stopInfiniteScroll();
      }
    });
  });
}
gotoViewOrder(item){
  this.sendData.alldata=item;
  this.route.navigate(['/appove-reject-reedemption']);
}

searchCustomer(ev){
  console.log('ev',ev);
  if(ev.detail.value && ev.detail.value!=''){
    this.searchString=ev.detail.value;
  }else{
    this.searchString='';
  }
  console.log('ev',ev);
  this.value=0;
  this.listData=[];
  this.mnth = this.month.slice(5,7);
  this.orderDetailsShow(this.searchString,this.mnth,this.customerT);
}


  loadData(event) { 
    this.infiniteScroll_call=true;
    this.infiniteScroll_val=event;
    setTimeout(() => {
      this.value=this.listData.length;
      this.mnth = this.month.slice(5,7);
      this.orderDetailsShow(this.searchString ,this.mnth,this.customerT);
    }, 500);
  }
  
  stopInfiniteScroll(){
    if(this.infiniteScroll_call==true){
      this.infiniteScroll_call=false;
      this.infiniteScroll_val.target.complete();
    }
  }
  verifyFun(item, key){
    console.log("item::::::", item)
    this.apiService.presentLoadingDefault();
    this.zone.run(() => {
      let apiKey = {
        "order_id":item.auto_id,
        "product_price":'',
        "agency_fees":'',
        "courier_charges":'',
        "order_status":key.order_status,
        "approval_status":key.approval_status,
        "utm_source":''
      }
      this.apiService.apiCallWithLoginToken(URLS.acceptRejectUrl, apiKey).subscribe((result) => {
        console.log("PostListUrl: ", result);
        this.apiService.presentLoadingClose();
        if(result.success==1){
          this.mnth = this.month.slice(5,7);
          this.value=0;
          this.listData=[];
          this.customerT ='1,2';
          this.orderDetailsShow(this.searchString, this.mnth,this.customerT);
          // this.location.back();
          this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
        }else{
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
  
      },err=>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    })

  }

}

