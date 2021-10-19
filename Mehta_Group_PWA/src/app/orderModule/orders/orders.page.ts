import { Component, OnInit, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
year:any = new Date().toISOString();
listHeader:any;
listData:any;
  constructor(private route: Router, public platform:Platform, public zone:NgZone, 
    private apiService:ApiService, public sendData: DataTransferService,private localStorage:LocalStorageService) {
    
  
     }

  ngOnInit() {
  
  }
  ionViewWillEnter(){
    this.approveListShow(this.year);
        // alert("11");
  }
  changeData(ev){
    console.log('ev',ev);
    this.year= this.year.slice(0,4);
    console.log('ev',this.year);
    this.approveListShow(this.year);
  // this.dealerAllocateShow(this.mnth,this.yr);

  }
  approveListShow(item){
   // this.apiService.presentLoadingDefault();
  //  alert(this.apiService.isSelected);
  //  this.apiService.isSelected='';
   console.log("this.apiService.isSelected11111",this.apiService.isSelected)
  //  alert(this.apiService.isSelected);
    this.zone.run(()=>{
      let apiKey = {
        "year":item
      }
      this.apiService.apiCallWithLoginToken(URLS.ApprovalListUrl, apiKey).subscribe((result) =>{
      // this.apiService.presentLoadingClose();
        console.log("ApprovalListUrl: ", result);
        this.listHeader = result.header_data;
        this.listData = result.data;
        if(result.success == '1'){  }
        else{
          this.apiService.showToastMessage(result.message, 'top', 2000, 'redBg');
        }
      },err=>{
     //   this.apiService.presentLoadingClose();
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    })
  }
listDetails(item){
  this.year= this.year.slice(0,4);
  let obj={
    "item":item,
    "year":this.year,
   //  "customer_type": "all",
   }
  this.sendData.ordersDetails = obj;
 this.route.navigate(['./orderdetails']);
  }
}
