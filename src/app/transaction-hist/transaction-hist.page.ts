import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-transaction-hist',
  templateUrl: './transaction-hist.page.html',
  styleUrls: ['./transaction-hist.page.scss'],
})
export class TransactionHistPage implements OnInit {
  serverData:any=[];
  buttReg:any=[];
  allocationHomeData:any;
  errorMessage: any;
  loginData: any;
  server: any;
  requestType:any;
  constructor(private route: Router, public platform:Platform,private zone:NgZone,
    private sendData:DataTransferService,private localStorage:LocalStorageService,private apiService:ApiService) {
      this.requestType = "customer";
     }

  ngOnInit() {
    this.redemptionShow();
    this.showButt();
  }
  showButt(){
    this.buttReg = [{auto_id: "1", tab_name: "Customer Report", tab_status: "selected_tab", requestType: 'customer'},
     {auto_id: "2", tab_name: "Dealer Report", tab_status: "unselected_tab", requestType: 'dealer'}]
  }
  close(){
    this.route.navigate(['./tabs/home']);
  }
  redemptionShow(){
    this.zone.run(()=>{
      let apiKey={ 
        "request_type":this.requestType,
        "search_str":"",
        "value":""
      }
      console.log('login data response',apiKey);
      this.apiService.apiCallWithLoginToken(URLS.RedemptionUrl,apiKey).subscribe((result) =>{
        console.log('login data response',result);
        this.server=result;
        if(result.success==1){  
          this.serverData=result.data; 
          this.errorMessage='';
        }else{
          this.errorMessage=result.message;
          // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
               
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');               
      });
    }); 
   }
   active(id){
    if(id.tab_status != "selected_tab"){
      id.tab_status = "selected_tab";
    for(let i=0; i<this.buttReg.length; i++){
      if(id.tab_name != this.buttReg[i].tab_name){
        this.buttReg[i].tab_status = "unselected_tab";
      }
      else{
        this.buttReg[i].tab_status = "selected_tab";
      }
    }
  }
  this.requestType = id?.requestType;
  this.redemptionShow();
    // 
    // if(id.tab_status != "selected_tab"){
    //  id.tab_status = "selected_tab";
    // }
    // 
   }
  viewFun(item){
    this.sendData.alldata = {'customer_id':item.auto_id,'employee_type':'','request_page':'other','backKey': 'back2'}
    // this.sendData.registrationType = {'auto_id':item.auto_id,'request_Type':this.requestType,'request_page':'other'}
    this.route.navigate(['/purchasehistory']);
  //  this.route.navigate(['./account-statment']);
  }
}
