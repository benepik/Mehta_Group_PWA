import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.page.html',
  styleUrls: ['./admin-approval.page.scss'],
})
export class AdminApprovalPage implements OnInit {
  approvalImage:any;
  maintanceData:any;
  constructor(private sendData:DataTransferService,public platform:Platform,private router:Router,private zone:NgZone,
    private storage:LocalStorageService,private apiService:ApiService) {
    this.approvalImage=this.sendData.alldata;
   }

  ngOnInit() {
  }
  gotoLogin(){
      this.zone.run(()=>{
        let apiKey={}
        console.log('login data response',apiKey);
        this.apiService.apiCallWithLoginToken(URLS.LogOutUrl,apiKey).subscribe((result) =>{
          console.log('logout data response',result);
           // this.accountData=result.data.account_details;
           this.storage.remove('allStoreData');
           this.storage.getStorage().then(storedData=>{
            console.log('this is all stored data',storedData);
           });
           this.apiService.generateDeviceId();
           this.apiService.generateFCMToken();
           this.maintance();
            
           this.router.navigate(['./login']);
           
            this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
            
        },err =>{
          this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        });
      });
    }
  
  async maintance(){
    await this.storage.getStorage().then((storedData)=>{
      console.log('localStorage storedData storedData000',storedData);
    });
    this.zone.run(()=>{
      let apiKey={}
      this.apiService.apiCallWithLoginToken(URLS.maintanceUrl,apiKey).subscribe(async (result) =>{
        if(result.success==1 || result.success=='1'){
          this.maintanceData=result;
        await  this.storage.setStorage('maintainanceData', result);
          if(result.data.is_down==1 || result.data.is_down=='1'){
            this.sendData.myParam=result.maintainence_data;
            this.router.navigate(["/maintenance"]);
            //for maintance redirection page
          }
        }else{
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
  }

}
