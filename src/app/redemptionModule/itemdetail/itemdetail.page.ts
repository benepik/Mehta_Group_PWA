// import { Component, OnInit } from '@angular/core';
import { Component,OnInit, ViewChild,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.page.html',
  styleUrls: ['./itemdetail.page.scss'],
})
export class ItemdetailPage implements OnInit {
  @ViewChild('slidesRef') slidesRef: IonSlides;
  temparray:any=[];
  faqs:any=[];
  visible :boolean= false;
  faqsData:any;
  currentItemindex=0;
  showImage:any;
  redeem_for:any;
  tempButt:any;
  page_request_type:any
  item_detail:any;
  item_details:any;
  postSlider={speed:"500",initialSlide:0,slidesPerView:1,spaceBetween:7};
  constructor(private router:Router, private sendData: DataTransferService, public apiService:ApiService, private zone:NgZone) {
    this.item_details = this.sendData.itemDetails;
    this.page_request_type = this.sendData.page_request_type;
    this.redeem_for = this.sendData.redeem_for;    
    console.log('99999:', this.item_details )
    if(this.sendData.itemDetails.product_id){
      this.item_details.auto_id = this.sendData.itemDetails.product_id;
    } else{  
      console.log("546789:", this.sendData.itemDetails);
      this.item_details = this.sendData.itemDetails;
      
    }
    console.log(" this.item_details : ",  this.item_details)
   }

   ionViewWillEnter(){
    
   }
  ngOnInit() { 
    this.itemDetailsShow();
  }

 itemDetailsShow(){
  this.apiService.presentLoadingDefault();
  this.zone.run(async () => {
    let apiKey = {
      "request_page":this.sendData.cart_request,
      "redeem_for":this.redeem_for,
      "page_request_type":this.page_request_type,
      "product_id":this.item_details.auto_id,
      "request_for":this.item_details.request_for,
      "request_user_type":this.item_details.request_page
    }
    console.log("aaaaaaaaa:", apiKey);
    this.apiService.apiCallWithLoginToken(URLS.ProductDetailUrl, apiKey).subscribe((result) => {
      this.apiService.presentLoadingClose();
      this.temparray = result.data;
      this.tempButt = result.buy_data;
      if (result.success == 1) {
      }
       else {
        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      }
      
    }, err => {
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      this.apiService.presentLoadingClose();
    });
   

  });
 }
  showArrow(item, index) {
    this.currentItemindex = index;
    console.log(item, index)
    if(item.show_div){
      item.show_div = item.show_div == true ? false : true;
    }else{
      item.show_div = true;
    } 
  }

buyitemFun(){
  // alert('1')
  this.zone.run(async () => {
  this.sendData.page_request_type = 'buy';
  this.sendData.cart_request = this.tempButt.cart_request;
  this.sendData.alldata={'customer_id':this.item_details.request_for,'employee_type':this.item_details.request_page};
  if( this.tempButt.buy_btn_text == "Add To Cart"){
   // this.sendData.count = "1";
    this.sendData.itemDetails = {"product_id": this.item_details.auto_id,"quantity": 1}    
  }else{
    this.sendData.itemDetails = { "product_id": "", "quantity": ""}
  }
  this.router.navigate(['/buyitem']);
});
  }
    nextslide(){
      this.zone.run(async () => {
      this.slidesRef.slideNext();
      });
    }
    privslide(){
      this.zone.run(async () => {
      this.slidesRef.slidePrev();
      });
    }
}
