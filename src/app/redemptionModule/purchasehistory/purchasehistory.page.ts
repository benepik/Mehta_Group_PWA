import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { Location } from '@angular/common';
@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.page.html',
  styleUrls: ['./purchasehistory.page.scss'],
})
export class PurchasehistoryPage implements OnInit {
  arrr:any=[];
  value:number=0;
  errorMessage:string;
  backKey:any;
  infiniteScroll_call: boolean=false;
  infiniteScroll_val: any;
  errorImage:any;
  title:any;
  allocationData: any;
  constructor(private router:Router,private sendData:DataTransferService, public route: Router,
    private _clipboardService: ClipboardService,private location:Location,
    public apiService:ApiService, private zone:NgZone) {
      // this.request_page=this.sendData.request_page;
      this.allocationData = this.sendData.alldata;
      console.log("all locationData==", this.allocationData);
      this.arrr=[];
      // history.pushState(null, null, window.location.pathname);
       this.value=0;
       this.backKey = this.sendData.alldata.backKey;
       console.log("back button key==", this.backKey);
    }

  ionViewWillLeave(){
    this.sendData.itemDetails = { "product_id":"", "quantity": ""}
  }
  ngOnInit() {
    this.purchaseHIst(null);
  }
  copy(text: string){
    this._clipboardService.copy(text);
    // this.mymessage="Copied";
    this.apiService.showToastMessage("Copied", "top", 3000, "greenBg");
  }
  close(){
    this.zone.run(async () => {
    this.route.navigate(['./customer-details']);
    });
  }
  hometab(){
    this.zone.run(async () => {
    this.route.navigate(['./tabs/home']);
    });
  }
  goBack(){
    this.zone.run(async () => {
      this.location.back();
    // this.route.navigate(['./pointsgiftlist']);
    });
  }
  modalcall(item){
    console.log('itemss: ', item);
    this.zone.run(async () => {
    this.sendData.itemDetails = {'auto_id':item.product_id,'request_page':this.allocationData.employee_type,
    'request_for':this.allocationData.customer_id};
    if(this.allocationData.customer_id==''){
      this.sendData.redeem_for='self';
      this.sendData.cart_request='dealer';
    }else {
      this.sendData.redeem_for='other';
      this.sendData.cart_request='customer';
    }
    console.log("798:", this.sendData.itemDetails);
    this.sendData.page_request_type = 'detail';
    this.router.navigate(['/itemdetail']);
  });
  }
  purchaseHIst(event){
    if(event == null){
      this.apiService.presentLoadingDefault();
    }
    this.apiService.presentLoadingDefault();
    this.zone.run(async () => {
      let apiKey = {
        "value":this.value,
        "request_page":this.allocationData.request_page, 
        "request_for":this.allocationData.customer_id

      }
    this.apiService.apiCallWithLoginToken(URLS.PurchaseHistoryUrl, apiKey).subscribe((result) => {
        if(event == null){
          this.apiService.presentLoadingClose();
        }else{event.target.complete();}
        this.apiService.presentLoadingClose();
       // this.arrr = result.data;
      //  this.arrr=[];
       this.title = result.page_title;
        if(result.success == 1 || result.success == '1'){
          if(this.arrr==undefined){
            this.arrr=result.data;
          }else{
            this.arrr=this.arrr.concat(result.data);
          }
        this.errorMessage='';
        this.errorImage='';
        }  else{
          if(this.value==0){
            this.errorImage=result.noDataImage;
          }else{
            this.errorMessage=result.message;
          }   
          // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
                  
      if(this.infiniteScroll_call==true){
        this.stopInfiniteScroll();
        }
      },err=>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            if(this.infiniteScroll_call==true){
            this.stopInfiniteScroll();
      }
      }
      )
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.purchaseHIst(event);
      
  }
async back(){
  this.zone.run(async () => {
  if(this.allocationData.customer_id != ''){
    this.sendData.alldata={'customer_id':this.allocationData.customer_id,'employee_type':this.allocationData.employee_type}
    this.router.navigateByUrl('/pointsgiftlist', {replaceUrl:true})
  }else {
    this.sendData.alldata={'customer_id':'','employee_type':''}
    this.router.navigateByUrl('/pointsgiftlist', {replaceUrl:true})
  }
});
  
}
  loadData(event) { 
    this.infiniteScroll_call=true;
    this.infiniteScroll_val=event;
    setTimeout(() => {
      this.value=this.arrr.length;
      this.purchaseHIst(null);
    }, 500);
  }
  
  stopInfiniteScroll(){
    if(this.infiniteScroll_call==true){
      this.infiniteScroll_call=false;
      this.infiniteScroll_val.target.complete();
    }
  }
}
