import { Component, NgZone, OnInit } from '@angular/core';
import { ApiService } from 'src/app/provider/api.service';
import { Platform } from '@ionic/angular';
import { URLS } from 'src/assets/constant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accounts-detail',
  templateUrl: './accounts-detail.page.html',
  styleUrls: ['./accounts-detail.page.scss'],
})
export class AccountsDetailPage implements OnInit {
  accountData:any=[];
  account: any;
  errorMessage:string;
  constructor(public platform:Platform,private apiService:ApiService,private zone:NgZone,private router:Router) { 
 
  }

  ngOnInit() {
    this.apiService.presentLoadingDefault();
    this.AccountDetail();
    
  }


 AccountDetail(){
    this.zone.run(()=>{
      let apiKey={ }
      console.log('login data response',apiKey);
      this.apiService.apiCallWithLoginToken(URLS.accountDetailUrl,apiKey).subscribe((result) =>{
        console.log('login data response',result);
        this.account=result;
       
          this.apiService.presentLoadingClose();
        
        if(result.success==1){
          this.accountData=result.data.account_details;
          // this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');     
        }else{
          this.errorMessage=result.message;
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }

      },err =>{
        this.apiService.presentLoadingClose();
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    }); 
  }


}
