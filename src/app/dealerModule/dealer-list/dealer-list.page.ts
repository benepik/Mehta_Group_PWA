import { Component, OnInit, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.page.html',
  styleUrls: ['./dealer-list.page.scss'],
})
export class DealerListPage implements OnInit {
  userImg:string="";
  dealerList:any;
  listHeader:any;
  header_title:any;
  allStored: any;
  infiniteScroll_call: boolean=false;
  infiniteScroll_val: any;
  errorMessage: any;
  value:number=0;
  constructor(private route: Router, public platform:Platform, public zone:NgZone, 
    private apiService:ApiService, public sendData: DataTransferService,private localStorage:LocalStorageService, public navController:NavController) { 
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  //  this.allStored = this.sendData.alldata;
  }
ionViewWillEnter(){
 // this.dealerListShow();
}
  ngOnInit() {
    if(this.sendData.alldata != undefined){
      if(this.sendData.alldata.my=='officer'){
        this.allStored=this.sendData.alldata;
        this.dealerListShow();
      }
      else{
        this.localStorage.getStorage().then(storedData=>{
          this.allStored=storedData.allStoreData;
          console.log('stored data in dealer list page',this.allStored);
          this.dealerListShow();
        })
       
      }
    }
   else{
      this.localStorage.getStorage().then(storedData=>{
        this.allStored=storedData.allStoreData;
        console.log('stored data in dealer list page',this.allStored);
        this.dealerListShow();
      })
     
    }
    
  }
  close(){
    if(this.sendData.alldata != undefined){
    if(this.sendData.alldata.my=='officer'){
      
      this.route.navigate(['./user-list']);
    }
    else{
      this.route.navigate(['./tabs/home']);
    } 
  }
    else{
      this.route.navigate(['./tabs/home']);
    } 
    
   // this.navController.back();
    // this.modalCtrl.dismiss();
  }
  dealerListShow(){
    this.apiService.presentLoadingDefault();
    this.zone.run(()=>{
      let apiKey = {
        "request_user_type":this.allStored.employee_type,
        "search_str":"",
        "value":this.value,
        "request_for":this.allStored.user_id,
        "request_type":"list"
      }
      console.log('dealerListShoow::', apiKey)
      this.apiService.apiCallWithLoginToken(URLS.getUserList, apiKey).subscribe((result) =>{
       this.apiService.presentLoadingClose();
        console.log("UserListUrl: ", result);
        this.listHeader = result.tab_data;
          this.header_title = result.header_title;
        if(result.success == 1){
          if(this.dealerList==undefined){
            this.dealerList = result.data;  
          }else{
            this.dealerList=this.dealerList.concat(result.data);
          }
          this.errorMessage='';
        } else{
          this.errorMessage=result.message;
          this.apiService.showToastMessage(result.message, top, 2000, "redBg");
        }
        if(this.infiniteScroll_call==true){
          this.stopInfiniteScroll();
          }
      },err=>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 2000, "redBg");
      });
    });
  }
view(item){
  // this.sendData.viewProfilId = id.customer_id;
  // this.sendData.viewProfilType = id.employee_type;
  this.sendData.alldata=item;
  this.route.navigate(['./profile-view']);
  // this.route.navigate(['./customer-details']);
}


loadData(event) { 
  this.infiniteScroll_call=true;
  this.infiniteScroll_val=event;
  setTimeout(() => {
    this.value=this.dealerList.length;
    this.dealerListShow();
  }, 500);
}

stopInfiniteScroll(){
  if(this.infiniteScroll_call==true){
    this.infiniteScroll_call=false;
    this.infiniteScroll_val.target.complete();
  }
}
}
