import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-redemption-report',
  templateUrl: './redemption-report.page.html',
  styleUrls: ['./redemption-report.page.scss'],
})
export class RedemptionReportPage implements OnInit {
  serverData:any=[];
  allocationHomeData:any;
  errorMessage: any;
  loginData: any;
  server: any;
  employee_type: any;
  constructor(private route: Router, public platform:Platform,private zone:NgZone,
    private sendData:DataTransferService,private localStorage:LocalStorageService,private apiService:ApiService) {
    this.allocationHomeData=this.sendData.alldata;
    console.log('allocationHomeData',this.allocationHomeData);
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
   }
  ngOnInit() {
    if(this.allocationHomeData.requestType=='customer'){
      console.log('this.alll',this.allocationHomeData)
      this.loginData=this.allocationHomeData.item.customer_id;
      this.transectionHistory();
    }else{
      this.localStorage.getStorage().then(storedData=>{
        console.log('storedData',storedData);
        this.loginData=storedData.allStoreData.user_id;
        this.transectionHistory();
       });  
    }
  }
  gotoHomeTab(){
    this.localStorage.getStorage().then(storedData=>{
      console.log('storedData',storedData);
      this.employee_type=storedData.allStoreData.employee_type;
      if(this.employee_type=='3' || this.employee_type=='4'){
        this.apiService.isSelected='';
        console.log('storedData',this.employee_type);
      }else if(this.employee_type=='2'){
        this.apiService.isSelected='true';
      }
     });
  
    
  }
  view(){
    this.route.navigate(['./dealer-allocat']);
  }
  transectionHistory(){
    this.zone.run(()=>{
      let apiKey={ 
        "request_for":this.loginData,
        "request_type":this.allocationHomeData.requestType,
        "request_user_type":this.allocationHomeData.employee_type,
        "dealer_id":this.allocationHomeData.dealer_id
      }
      console.log('login data response',apiKey);
      this.apiService.apiCallWithLoginToken(URLS.reedemTransectionUrl,apiKey).subscribe((result) =>{
        console.log('login data response',result);
        this.server=result;
        if(result.success==1){  
          this.serverData=result.data; 
          this.errorMessage='';
        }else{
          this.errorMessage=result.message;
        }
        },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');               
      });
    }); 
  }
}
