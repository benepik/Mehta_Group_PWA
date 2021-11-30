import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.page.html',
  styleUrls: ['./profile-view.page.scss'],
})
export class ProfileViewPage implements OnInit {
  loading: any;
  allocatedPointsRes: any;
  allocationData:any;
  constructor(private apiService: ApiService,private zone:NgZone,public loadingController: LoadingController, 
    public platform:Platform, private route:Router,private sendData:DataTransferService) {
    this.allocationData= this.sendData.alldata;
    console.log('1',this.allocationData);
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

  redemption_report(item){
    this.sendData.alldata={ 
      "item":item,
      "requestType":'customer'}
    this.route.navigate(['/redemption-report']);
  }
  customer_list(){
    this.sendData.alldata =this.allocationData;
    // this.sendData.viewProfilId = item
     this.route.navigate(['/customer-list']);
   }
}

