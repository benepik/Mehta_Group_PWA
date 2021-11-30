import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
// import{RedeemotpPage} from '../../redeemotp/redeemotp.page';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-allocate-point-form',
  templateUrl: './allocate-point-form.page.html',
  styleUrls: ['./allocate-point-form.page.scss'],
})
export class AllocatePointFormPage implements OnInit {
productList:any;
brandList:any;
minmonth:any;
min:string;
minyear:String;
mindate:String;
myDate: String;
// currentDate: String = new Date().toISOString();
  brandId: any;
  prodId: any;
  bagsCount:any="";
  pointAllocatedRes: number=0;
  btnText:string="Submit";
  btnDisable: boolean=false;
  dataList: string[];
  loading: any;
  dealerHomeData:any;
  budgetMonth: any;
  budgetId: any;
  budMonthOpt:any;
  brandOption:any;
  productOption:any;
  maxBagLimit:number=0;
  Invoice:any='';
  maxDate:any;
  minDate:any;
  constructor(private apiService: ApiService,private zone:NgZone,public loadingController: LoadingController, 
    private navCtrl:NavController,private sendData:DataTransferService,public route: Router ,public modalCtrl:ModalController) { 
    this.dealerHomeData=this.sendData.alldata;
    this.maxBagLimit=parseInt(this.sendData.alldata.max_bag_limit);
    console.log('previousePageData==> ', this.dealerHomeData);

    console.log("bag Count==",this.bagsCount);
  }

 ngOnInit() {
  this.fetchmonthData();
    
  
  }

  checkBagCount(ev){
    console.log('bageCount',ev);
    if(parseInt(ev.detail.value)>this.dealerHomeData.max_bag_limit){
      this.apiService.showToastMessage('Maximum'+' '+this.dealerHomeData.max_bag_limit+' '+'bags allowed', 'top', 2000, 'redBg');
    }
  }

  gotoHomeTab(){
    this.apiService.isSelected='true';
    console.log("this.apiService.isSelected000000",this.apiService.isSelected)
    // alert(this.apiService.isSelected)
  }
  async fetchmonthData(){
         this.loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
        });
        await this.loading.present();
        let apiKey = {
          "search_str":"",
          "request_type":"brandAllocateMonth",
          "request_user_type":this.dealerHomeData.employee_type
          };
          this.apiService.apiCallWithLoginToken(URLS.searchApiUrl, apiKey).subscribe((result) => {
            console.log('allocatedMonthData', result);
            this.loading.dismiss()
            if (result.success == 1) {
            this.budgetMonth=result.data;

            }else{
              this.apiService.showToastMessage(JSON.stringify(result.message), 'top', 3000, 'redBg');
              this.navCtrl.pop();
            }
          }, err => {
            this.loading.dismiss()
            this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
          })
  }

async fetchData(productName, count){
  this.zone.run(async () => {
    let proName= await productName;
    let apiKey = {
    "search_str":"",
    "request_type":proName,
    "request_user_type":this.dealerHomeData.employee_type,
    'dealer_budget_id':this.budgetId
    }
    this.apiService.apiCallWithLoginToken(URLS.searchApiUrl, apiKey).subscribe((result) => {
      if(count==this.dataList.length-1){
        this.loading.dismiss();
      }
      if (result.success == 1) {
        if(productName=='product'){
          this.productList=result.data;
          console.log('productlist==>', this.productList);
        }else if(productName=='brand'){
          this.brandList=result.data;
          console.log('brandList==>', this.brandList);
        }
      } else {
        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      }
      
    }, err => {
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      if(count==this.dataList.length-1){
        this.loading.dismiss();
      }
    });
   

  });
}
  

checkBrandValue(ev,data){
  console.log('ev',ev);
  console.log('brand data ',data);
  this.brandId=data.auto_id;

}
checkProdValue(ev,data){
  console.log('ev',ev);
  console.log('prouct data ',data);
  this.prodId=data.auto_id;
  this.pointAllocatedRes=data.points_allocated;

}
async checkBudgetValue(ev,data){
  console.log('ev',ev);
  console.log('prouct data ',data);
    this.minDate= data.min_date;
    this.maxDate=data.max_date;
  this.budgetId=data.auto_id;
  this.dataList=['product', 'brand'];
    for(let i=0;i<this.dataList.length; i++){
      this.fetchData(this.dataList[i], i);
      if(i==0){
        this.loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
        });
        await this.loading.present();
      }
    }
}

gotoSubmit(){
  this.zone.run(async () => {
    this.btnText='Please wait...';
    this.btnDisable=true;
    let apiKey = {

      "allocate_to":this.dealerHomeData.customer_id,
      "brand_id": this.brandId,
      "product_id": this.prodId,
      "sell_date": this.myDate,
      "bag_number": this.bagsCount,
      'budget_id':this.budgetId,
      "invoice_number":this.Invoice
    }
    this.apiService.apiCallWithLoginToken(URLS.pointAllocateApiUrl, apiKey).subscribe((result) => {
    this.btnText='Submit';
    this.btnDisable=false;
      if (result.success==1) {
       // this.brandId=''
      //  this.budMonthOpt='';
        this.myDate='';
       
       // this.budgetMonth=''
      //  this.budMonthOpt='';
        
       // this.productList=[];
       // this.fetchmonthData();
      //  this.budgetMonth='';
        this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
        this.bagsCount='';
      //  this.route.navigate(['/tabs/customer-allocation']);
       // window.history.go(-1);
      // this.navCtrl.navigateBack('/customer-allocation');
      } else {
        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      }
    }, err => {
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
    });
  
  });


 
  
}

// async modalcall(){
//   let apiKey = {
//     "dealerHomeData":this.dealerHomeData,
//     "brandId": this.brandId,
//     "prodId": this.prodId,
//     "myDate": this.myDate,
//     "bagsCount": this.bagsCount,
//     'budgetId':this.budgetId
//   };
//   this.sendData.alldata=apiKey;
//   const modal = await this.modalCtrl.create({
//     component: RedeemotpPage,
//     cssClass: 'my-custom-class'
//   });
//   modal.onDidDismiss().then((dataReturned) => {
//     if (dataReturned !== null) {

//     }
//     else{
//       // this.userImg = '';
//     }
//   });
//   return await modal.present();
// }
// gotohistory(){
//   // this.modalCtrl.dismiss({
//   //   'dismissed': true 
//   // });
//   this.zone.run(()=>{
//     let apiKey={
//       "send_type":"Allocate"
//      }
//     this.apiService.apiCallWithLoginToken(URLS.otpGetUrl,apiKey).subscribe((result) =>{
//       if(result.success==1){
//         // this.modalcall();
//         // this.router.navigate(['/purchasehistory']);
//       }else{
//         this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
//       }
//     },err =>{
//       this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
//     });
//   }); 

 
  
// }


}
