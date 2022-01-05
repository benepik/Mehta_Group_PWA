import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from 'src/assets/constant';
import { ApiService } from '../provider/api.service';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.page.html',
  styleUrls: ['./alert-list.page.scss'],
})
export class AlertListPage implements OnInit {
  alertList:any;
  errorMessage:any;
  alertData:any;
  value:number=0;
  infiniteScroll_call: boolean=false;
  infiniteScroll_val: any;
  constructor(private zone: NgZone, private router: Router,public apiServices:ApiService,public sendData:DataTransferService) { 
  }

  ngOnInit() {
    this.alertListFun();
  }

  alertListFun(){
    this.zone.run(()=>{
    console.log("shivi fun called==");
    let apiKey={
      limit:this.value
    };
    console.log("brand pending api keys==", apiKey);
    this.apiServices.apiCallWithLoginToken(URLS.alertListApi, apiKey).subscribe((result) => {
      console.log("brand pending Api Result==", result);
      this.alertData=result;
      if(result.success == 1){
        if(this.alertList==undefined){
          this.alertList = result.data;
        }else{
          this.alertList = this.alertList.concat(result.data);  
        }  
        this.errorMessage='';
      }else{
        this.errorMessage=result.message;
        // this.apiServices.showToastMessage(result.message,'top',3000,'redBg');
      }
       
    if(this.infiniteScroll_call==true){
      this.stopInfiniteScroll();
      }

    }, err=>{
      this.apiServices.showToastMessage(JSON.stringify(err),'top',3000,'redBg');
      if(this.infiniteScroll_call==false){
        this.stopInfiniteScroll();
        }
    });
  });
  }


  // alertDetail(data){
  //   this.zone.run(()=>{
  //     if(data.fron_end_page_name!=''){
  //       this.sendData.alldata=data;
  //       console.log('alertDat',this.sendData.alldata);    
  //       this.router.navigate([data.fron_end_page_name]);
  //     }else{}
  //   });
  // }
  alertDetail(data){
    this.zone.run(()=>{
      if(data.redirection_type==1){
        this.sendData.alldata=data;
        console.log('alertDat',this.sendData.alldata);    
        this.router.navigate([data.href]);
      }else{}
    });
  }

  stopInfiniteScroll(){
    if(this.infiniteScroll_call==true){
      this.infiniteScroll_call=false;
      this.infiniteScroll_val.target.complete();
    }
  }
  loadData(event) {
    this.infiniteScroll_call=true;
    this.infiniteScroll_val=event;
    setTimeout(() => {
      this.value=this.alertList.length;
      this.alertListFun();
    }, 500);
  }

  
}
