import { Component, OnInit, NgZone, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController, NavController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pointsgiftlist',
  templateUrl: './pointsgiftlist.page.html',
  styleUrls: ['./pointsgiftlist.page.scss'],
})
export class PointsgiftlistPage implements OnInit {
  temparray:any=[];
  serverData:any=[];
  val:boolean=false;
  redeem_for:any;
  errorImage:any;
  @ViewChildren(IonSlides) slides: QueryList<IonSlides>;
  
  // @ViewChild('slidesRef') slidesRef: IonSlides;
  postSlider={speed:"500",initialSlide:0,slidesPerView:2,spaceBetween:7};
  allocationData: any;
  constructor(private route: Router, public platform:Platform, private sendData: DataTransferService, 
    public apiService:ApiService, private zone:NgZone, public modalCtrl: ModalController,
     private navController: NavController,public location:Location){
   
    console.log("temparray",this.temparray);
   
   }
   ionViewWillEnter(){
    this.zone.run(()=>{
      if(this.platform.is('mobile')){
        this.postSlider={speed:"200",initialSlide:0,slidesPerView:2,spaceBetween:7};
        // this.postSlider.initialSlide=2.3;
        this.val=true;
      }else{
        this.postSlider={speed:"200",initialSlide:0,slidesPerView:4,spaceBetween:7};
        // this.postSlider.initialSlide=4.3;
      }
      this.pointsGiftDetails(null);
    });
   
  }
  ionViewWillLeave(){
    this.sendData.itemDetails = {
      "product_id":"",
      "quantity": ""
    }
  }
  ngOnInit() {
    
    //this.redeem_for = this.sendData.alldata.redeem_for;
  //  history.pushState(null, null, window.location.pathname);
    this.allocationData = this.sendData.alldata;
    console.log("temparray",  this.allocationData);
  }

  public async  goToFun(ind:number,type){
    this.slides.toArray().forEach(async (slider, index) => {
      if(ind==index && type=='next'){
        await slider.slideNext();
      }else if(ind==index && type=='prev'){
        await slider.slidePrev();
      }
    })
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.pointsGiftDetails(event);
      
  }
  close(){
    if(this.allocationData.redeem_for=='self' || this.allocationData.redeem_for=='other'){
      this.route.navigate(['./tabs/home']); 
    }else{
      this.location.back();
    }
   
  }
  pointsGiftDetails(event){
    if(event == null){
      this.apiService.presentLoadingDefault();
    }
    this.apiService.presentLoadingDefault();
    this.zone.run(async () => {
      let apiKey = {
        "request_page":this.allocationData.request_page,
        "search_str":"",
        "redeem_for":this.allocationData.redeem_for,
        "request_for":this.allocationData.customer_id,
        "request_user_type":this.allocationData.employee_type,
        "filter":{
          "category":"",
          "sub_category":""
      }
      }
      this.apiService.apiCallWithLoginToken(URLS.ProductListUrl, apiKey).subscribe((result) => {
        if(event == null){
          this.apiService.presentLoadingClose();
        }else{event.target.complete();}
        this.apiService.presentLoadingClose();
        this.temparray = result;
        if (result.success == 1) {
          this.serverData=result.data;
          this.errorImage='';
        } else {
          this.errorImage=result.error_image
          // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
        
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        this.apiService.presentLoadingClose();
      });
     
  
    });
  }
  purchaseDetails(){
    if(this.allocationData.customer_id!=''){
      this.sendData.alldata={'customer_id':this.allocationData.customer_id,'request_page':'other', 'employee_type':this.allocationData.employee_type, 'backKey':'back'}
      this.route.navigate(['./purchasehistory']);
    }else{
     // this.sendData.backKey = 'back2';
      this.sendData.alldata={'customer_id':'','request_page':'self', 'backKey':'back2'}
      this.route.navigate(['./purchasehistory']);
    }
    // this.sendData.request_page = 'self';
   
  }
  gotoitemdetail(item){
    this.sendData.page_request_type ='buy';
    if(this.allocationData.customer_id==''){
      this.sendData.itemDetails = {'auto_id':item.auto_id,'request_page':'','request_for':''};
      this.sendData.redeem_for = 'self';
      this.sendData.cart_request = 'customer';
    }else{
     this.sendData.itemDetails = {'auto_id':item.auto_id,'request_page':this.allocationData.employee_type,'request_for':this.allocationData.customer_id}
      this.sendData.cart_request = 'dealer';
      this.sendData.redeem_for = 'other';
      console.log("dfjk:", this.sendData.itemDetails);
    }
    this.route.navigate(['/itemdetail']);
  }

  goToCart(){
    if(this.allocationData.customer_id!=''){
      this.sendData.alldata={'customer_id':this.allocationData.customer_id,'employee_type':this.allocationData.employee_type}
      this.sendData.page_request_type = 'buy';
      this.sendData.redeem_for = 'other'
      this.sendData.itemDetails = [];
      this.sendData.cart_request = "view";
      this.sendData.itemDetails = {"product_id": "","quantity": ""}
   // this.sendData.cartDetails = result.data;
    this.route.navigate(['./buyitem']);
      //this.route.navigate(['./purchasehistory']);
    }
    else{
      // this.sendData.alldata={'customer_id':'','employee_type':''} 
      this.sendData.page_request_type = 'buy';
     this.sendData.itemDetails = [];
     this.sendData.cart_request = "view";
     this.sendData.redeem_for = 'self';
     this.sendData.itemDetails = {
      "product_id": "",
      "quantity": ""
    }
    this.route.navigate(['./buyitem']);
    }
  }
}
