import { Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { URLS } from 'src/assets/constant';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-account-statment',
  templateUrl: './account-statment.page.html',
  styleUrls: ['./account-statment.page.scss'],
})
export class AccountStatmentPage implements OnInit {
    serverData:any=[];
    title:any;
    allData:any;
    value:number=0;
   // errorMessage:any;
    errorMessage:string;
    
    constructor(private route: Router, public zone:NgZone, private apiService:ApiService,private sendData:DataTransferService) {
      this.allData = this.sendData.registrationType; 
     }
    ngOnInit() {
      this.accountShow(null);
    }
    doRefresh(event) {
      console.log('Begin async operation');
      this.accountShow(event);
        
    }

accountShow(event){
  if(event == null){
    this.apiService.presentLoadingDefault();
  }
  this.apiService.presentLoadingDefault();
  //this.apiService.presentLoadingDefault();
  this.zone.run(()=>{
    let apiKey = {
      // "request_type":this.allData.request_Type,
      "request_page":this.allData.request_page,
      "request_for":this.allData.auto_id
    }
    this.apiService.apiCallWithLoginToken(URLS.AccStatementUrl, apiKey).subscribe((result) =>{
      console.log("AccStatementUrl: ", result);
      if(event == null){
        this.apiService.presentLoadingClose();
      }else{event.target.complete();}
        this.apiService.presentLoadingClose();
        this.title = result.pageTitle;
        this.serverData= result.data;
        if(result.success == 1){
          this.errorMessage='';

       }else{
        this.errorMessage=result.message;
       }
    },err=>{

    });
  })
}

}
