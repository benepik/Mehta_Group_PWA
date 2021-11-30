import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController, PopoverController, AlertController } from '@ionic/angular';
import{RedeemotpPage} from '../redeemotp/redeemotp.page';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyitem',
  templateUrl: './buyitem.page.html',
  styleUrls: ['./buyitem.page.scss'],
})
export class BuyitemPage implements OnInit {
num:number=1;
redeem_for:any;
addres:any;
item_details:any;
addres_id:any;
loginPageData:any;
temparray:any;
showDonebutt:number = 0;
msg:any;
quantity:any;
cart_details:any;
cart_detail:any =[];
cart_req:any;
allocationData: any;
  constructor(public modalCtrl:ModalController,public alertController:AlertController,public popoverController:PopoverController,
     private sendData: DataTransferService, public route: Router, public apiService:ApiService, private zone:NgZone) {
   
   }
   ionViewWillEnter(){
  //  this.cart_details = this.sendData.cartDetails;
    this.cart_req = this.sendData.cart_request;
    this.showAddress();
    this.buyitem(this.item_details);
   // this.cart_details = this.sendData.cartDetails;
   // this.itemDetailsShow();
   }
  
  ngOnInit() {
    this.redeem_for = this.sendData.redeem_for;
    this.allocationData = this.sendData.alldata;
    this.item_details = this.sendData.itemDetails;
    console.log('this.allocationData', this.allocationData);
    console.log('this.item_details',   this.item_details);
    // this.showAddress();
    // this.buyitem(this.item_details);
  }
  minus(item){
    if(item.quantity!=0){
      item.quantity = JSON.parse(item.quantity);
      item.quantity=item.quantity-1;
      this.cart_req = "buy";
      this.showDonebutt = 1;
    //  this.buyitem(item);
    }
   
  }
  plus(item){
    // item.quantity = parseInt(item.quantity);
    item.quantity= parseInt(item.quantity)+1;
    this.cart_req = "buy";
    this.showDonebutt = 1;
  //  this.buyitem(item);
   
  }

buyitem(item){ 
  this.apiService.presentLoadingDefault();
  this.zone.run(async () => {
    let apiKey = {
      "request_page":"dealer",
      "redeem_for":this.redeem_for,
      "cart_request":this.cart_req,
      "request_for":this.allocationData.customer_id,
      "request_user_type":this.allocationData.employee_type,
      "product_arr": [
        {
            "product_id":item.product_id,
            "count":item.quantity
        }]
    }
    console.log("item.product_id ,item.quantity ", item.quantity, item.quantity)
    
    this.apiService.apiCallWithLoginToken(URLS.CartUrl, apiKey).subscribe((result) => {
    this.apiService.presentLoadingClose();
      //this.temparray = result.data;
      if (result.success == 1) {
        this.cart_details=result.data;
        console.log('this is ',this.cart_details);
        this.msg='';
      } else {
        this.msg = result.message;
      // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      }
    }, err => {
      this.apiService.presentLoadingClose();
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      
    });
     
    });
  }
  itemDetailsShow(){
   // this.apiService.presentLoadingDefault();
    this.zone.run(async () => {
      let apiKey = {
        "request_page":"dealer",
        "redeem_for":this.redeem_for,
        "product_id":this.item_details.auto_id,
        "page_request_type":this.sendData.page_request_type
      }
      
      this.apiService.apiCallWithLoginToken(URLS.ProductDetailUrl, apiKey).subscribe((result) => {
       // this.apiService.presentLoadingClose();
        this.temparray = result.data;
        if (result.success == 1) {
         // this.serverData=result.data;
        
        } else {
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
        
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      //  this.apiService.presentLoadingClose();
      });
     
  
    });
   }
 modalcall(){
  this.sendData.cartDetails =  this.cart_details;
  console.log(" this.cart_details" ,  this.cart_detail);
  
  if(this.addres.data.data.length != 0){
    this.sendData.address_id = this.addres.data.data[0].auto_id;
  this.presentAlertConfirm();
 }
 else{
   this.apiService.showToastMessage("Address is Required", 'top', 2000, 'redBg');
 }
}
async callModal(){
  const modal = await this.modalCtrl.create({
    component: RedeemotpPage,
    cssClass: 'my-custom-class'
  });
  modal.onDidDismiss().then((dataReturned) => {
    console.log("data returned after dismiss modal==",dataReturned);
    if (dataReturned !== null) {
     
    }
    else{
      
    }
  });
  this.sendData.alldata={"request_for":this.allocationData.customer_id,
  "request_user_type":this.allocationData.employee_type}
  this.sendData.item=this.redeem_for;
  return await modal.present();
}
// async presentPopover(ev: any) {
//   const popover = await this.popoverController.create({
//     component: redeemotp,
//     cssClass: 'my-custom-class',

//     event: ev,
//     translucent: true
//   });
//   await popover.present();

//  // const { role } = await popover.onDidDismiss();
// //  console.log('onDidDismiss resolved with role', role);
// }
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    message: 'Are you sure, you want to buy?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Yes',
        handler: () => {
          this.callModal();
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}
showAddress(){
  this.apiService.presentLoadingDefault();
  this.zone.run(()=>{
    let apiKey = {
      "address_fetch_type":"deliver",
      "redeem_for":this.redeem_for,
      "request_page":"dealer",
      "request_for":this.allocationData.customer_id,
      "request_user_type":this.allocationData.employee_type,
    }
    this.apiService.apiCallWithLoginToken(URLS.AddressUrl,apiKey).subscribe((result) =>{
      console.log("AddressUrl: ", result);
      this.apiService.presentLoadingClose();
      this.addres = result;
      if(result.success==1){
        
      }else {

      }
    },err=>{
      this.apiService.presentLoadingClose();
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
    });
  });
}
changeAddress(){
  if(this.allocationData.customer_id!=''){
    this.sendData.alldata={'customer_id':this.allocationData.customer_id,'request_page':'other', 'employee_type':this.allocationData.employee_type }
    //this.sendData.backKey = 'back';
    this.route.navigate(['./change-address']);
  }else{
    this.sendData.alldata={'customer_id':'','request_page':'self', 'employee_type':''}
    this.route.navigate(['./change-address']);
  }
  this.route.navigate(['./change-address']);
}
doneUpdate(){
  this.apiService.presentLoadingDefault();
  this.cart_detail = [];
  for(let i = 0; i<this.cart_details.length; i++){
    this.cart_details[i]['count'] = this.cart_details[i].quantity;
       this.cart_detail.push(this.cart_details[i]);
     }
  this.zone.run(async () => {
    let apiKey = {
      "request_page":"dealer",
      "redeem_for":this.redeem_for,
      "cart_request":this.cart_req,
      "product_arr": this.cart_detail,
      "request_for":this.allocationData.customer_id,
      "request_user_type":this.allocationData.employee_type,
    }
    console.log("apikey : ", apiKey)
    console.log("product_arr:", this.cart_detail)
    
    this.apiService.apiCallWithLoginToken(URLS.CartUrl, apiKey).subscribe((result) => {
     this.apiService.presentLoadingClose();
      //this.temparray = result.data;
      if (result.success == 1) {
        this.showDonebutt = 0;
        this.cart_details=result.data;
      this.msg='';
      } else {
        this.msg = result.message;
        this.cart_details=[];
        // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      }
      
    }, err => {
      this.apiService.presentLoadingClose();
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      
    });
     
    });
}
}
