import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {
  loading: any;
  allocatedPointsRes: any;
  allocationData:any;
  checkredirect: any;
  constructor(private apiService: ApiService,private zone:NgZone,public loadingController: LoadingController, 
    public platform:Platform, private route:Router,private sendData:DataTransferService) { 
      this.allocationData= this.sendData.alldata;
      this.checkredirect=this.sendData.myParam;
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
   }

  ngOnInit() {
    this.fetchData();
  }

  ionViewWillEnter(){
    // this.allocationData= this.sendData.alldata;
    // this.fetchData();
  }
async fetchData(){
  this.loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
  });
  await this.loading.present();

  this.zone.run(async () => {
    let apiKey = {
      "search_str":"",
      "request_for":this.allocationData.customer_id,
      "request_user_type":this.allocationData.employee_type,
      "request_type":"detail",
   //   "dealer_id":this.sendData.itemDetails,
      "value":"0"
    }
    this.apiService.apiCallWithLoginToken(URLS.getUserList, apiKey).subscribe((result) => {
       this.loading.dismiss();
       this.allocatedPointsRes=result;
      if (result.success == 1) {

      } else {
        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      }
      
    }, err => {
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
       this.loading.dismiss();
    
    });
   

  });
}
gotoHomeTab(){
  if(this.checkredirect=='customerCheck'){
    this.apiService.isSelected='true';
    console.log("this.apiService.isSelected000000",this.apiService.isSelected);
  }
// alert(this.apiService.isSelected)
}

  redemption_report(item){
    this.sendData.alldata={ "item":item, "requestType":'customer', 'employee_type':this.allocationData.employee_type, 'dealer_id': this.sendData.itemDetails}
    this.route.navigate(['/redemption-report']);
  }
  customer_list(){
    // this.sendData.viewProfilId = item
    //this.sendData.alldata
     this.route.navigate(['./customer-list']);
   }
   goToRedeem(item){
      if(item.redirect_url=='purchasehistory'){
       // this.sendData.backKey = ;
        this.sendData.alldata={'customer_id':this.allocationData.customer_id,
        'request_page':'customer', 'backKey':'back1', 'employee_type':this.allocationData.employee_type, }
      }else{
        //this.sendData.backKey = 'back1';
        this.sendData.alldata={'customer_id':this.allocationData.customer_id,
        'employee_type':this.allocationData.employee_type,
        'request_page':'dealer', 'backKey':'back1', 'redeem_for': 'other'}
        console.log('2345678:', this.sendData.alldata)
       // this.sendData.redeem_for = 'other';
      }
   
    // this.sendData.request_page = 'customer';
    // this.sendData.alldata = this.allocationData;
  
    this.route.navigateByUrl(item?.redirect_url);
   }
}
