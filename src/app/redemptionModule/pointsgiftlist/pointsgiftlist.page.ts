import { Component, OnInit, NgZone, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController, NavController, Platform, PopoverController } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
import { Location } from '@angular/common';
import { RedeemfilterPage } from 'src/app/redeemfilter/redeemfilter.page';
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
  productSearch:string='';
  // @ViewChild('slidesRef') slidesRef: IonSlides;
  postSlider={speed:"500",initialSlide:0,slidesPerView:2,spaceBetween:7};
  allocationData: any;
  filData: any;
  errorMessage: any;
  constructor(private route: Router, public platform:Platform, private sendData: DataTransferService, 
    public apiService:ApiService, private zone:NgZone, public modalCtrl: ModalController,
     private navController: NavController,public location:Location, public popoverController: PopoverController,){
   }
   ionViewWillEnter(){
     this.productSearch='';
    this.zone.run(()=>{
      if(this.platform.is('mobile')){
        this.postSlider={speed:"200",initialSlide:0,slidesPerView:2,spaceBetween:7};
        // this.postSlider.initialSlide=2.3;
        this.val=true;
      }else{
        this.postSlider={speed:"200",initialSlide:0,slidesPerView:4,spaceBetween:7};
        // this.postSlider.initialSlide=4.3;
      }
      this.pointsGiftDetails(null,'');
    });
   
  }
  ionViewWillLeave(){
    this.sendData.itemDetails = { "product_id":"", "quantity": ""};
  }
  ngOnInit() {
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
    this.pointsGiftDetails(event,'');  
  }

  close(){
    if(this.allocationData.redeem_for=='self' || this.allocationData.redeem_for=='other'){
      this.route.navigate(['./tabs/home']); 
    }else{
      this.location.back();
    }
   
  }

  searchApi(ev){
    console.log('ev',ev);
    if(ev.detail.value && ev.detail.value!=''){
      this.productSearch=ev.detail.value;
    }else{
      this.productSearch='';
    }
    console.log('ev',ev);
    this.serverData=[];
    this.pointsGiftDetails(ev,this.productSearch);
  }
  // checkValue(ev) {
  //   this.value=0;
  //   this.productData=[];
  //   this.productID=ev.detail.value.join();
  //   console.log('select opt value==111> ', ev);
  //   this.storeDetail();
  // }

  filterpage(){
    this.sendData.alldata=this.allocationData;
    this.route.navigate(["/redeemfilter"]);
  }
    // async presentPopover(ev: any) {
    //   const popover = await this.popoverController.create({
    //     component: RedeemfilterPage,
    //     cssClass: 'my-custom-class',
    //     event: ev,
    //     translucent: true
    //   });
    //   await popover.present();
  
    //  // const { role } = await popover.onDidDismiss();
    // //  console.log('onDidDismiss resolved with role', role);
    // }
  // }


  async ModalOpen() {
      const modal = await this.modalCtrl.create({
        component: RedeemfilterPage,
        componentProps:{data:this.allocationData,filterPre:this.filData},
        cssClass: 'modalClass'
      });
      modal.onDidDismiss().then((dataReturned) => {
        console.log("this.dataReturned:1",dataReturned.data);
        if (dataReturned.data.data!='') {
          this.serverData = dataReturned.data.data;
          this.filData=dataReturned.data.filter;
          console.log("  this.serverData",  this.serverData);
        }else{
          console.log(" this.dataReturned:",dataReturned.data);
        }
      });
      return await modal.present();
    }


  
  pointsGiftDetails(event,searchString){
    if(event == null){
      this.apiService.presentLoadingDefault();
    }
    // this.apiService.presentLoadingDefault();
    this.zone.run(async () => {
      let apiKey = {
        "request_page":this.allocationData.request_page,
        "search_str":searchString,
        "redeem_for":this.allocationData.redeem_for,
        "request_for":this.allocationData.customer_id,
        "request_user_type":this.allocationData.employee_type,
        "filter":{"category":"","sub_category":"","brands" :""}
      }
      this.apiService.apiCallWithLoginToken(URLS.ProductListUrl, apiKey).subscribe((result) => {
        if(event == null){
        this.apiService.presentLoadingClose();
        }
        // else{
        //   event.target.complete();
        // }
        // this.apiService.presentLoadingClose();
        this.temparray = result;
        if (result.success == 1) {
    
          this.serverData=result.data;
          // this.errorImage='';
          this.errorMessage='';
        } else {
          this.errorMessage=result.message;
          // this.errorImage=result.error_image
          // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
        
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        this.apiService.presentLoadingClose();
      });
     
  
    });
  }
  purchaseDetails(){
    if(this.allocationData.customer_id==''){
      this.sendData.alldata={'customer_id':'','request_page':'self', 'backKey':'back2'};
      
      this.route.navigate(['./purchasehistory']);
    }else{
      this.sendData.alldata={'customer_id':this.allocationData.customer_id,'request_page':'other', 'employee_type':this.allocationData.employee_type, 'backKey':'back'}
      this.route.navigate(['./purchasehistory']);

    }
  }
  gotoitemdetail(item){
    this.sendData.page_request_type ='buy';
    if(this.allocationData.customer_id==''){
      this.sendData.itemDetails = {'auto_id':item.auto_id,'request_page':'','request_for':''};
      this.sendData.redeem_for = this.allocationData.redeem_for;
      this.sendData.cart_request = 'customer';
    }else{
     this.sendData.itemDetails = {'auto_id':item.auto_id,'request_page':this.allocationData.employee_type,'request_for':this.allocationData.customer_id}
      this.sendData.cart_request = 'dealer';
      this.sendData.redeem_for =this.allocationData.redeem_for;
      console.log("dfjk:", this.sendData.itemDetails);
    }
    this.route.navigate(['/itemdetail']);
  }

  goToCart(){
    this.sendData.itemDetails = [];
    this.sendData.page_request_type = 'buy';
    this.sendData.cart_request = "view";
    this.sendData.itemDetails = {"product_id": "","quantity": ""};
    if(this.allocationData.customer_id==''){
     this.sendData.redeem_for = 'self';
    this.route.navigate(['/buyitem']);
    }else{
    this.sendData.alldata={'customer_id':this.allocationData.customer_id,'employee_type':this.allocationData.employee_type}
    this.sendData.redeem_for = 'other';
    this.route.navigate(['/buyitem']);
    }
  }
}
