import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-dealer-allocat',
  templateUrl: './dealer-allocat.page.html',
  styleUrls: ['./dealer-allocat.page.scss'],
})
export class DealerAllocatPage implements OnInit {
  serverData:any=[];
  month:any = new Date().toISOString();
  mnth:any='';
  yr:any='';
  message:any;
  constructor(private route: Router, public platform:Platform, private apiService: ApiService,private zone:NgZone,
    private sendData:DataTransferService) {
    // this.mnth = this.month.slice(5,7);
    // this.yr= this.month.slice(0,4);
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
   }

  ngOnInit() {
      this.dealerAllocateShow(this.mnth,this.yr);
  }
  changeData(ev){
    console.log('ev',ev);
    this.mnth = this.month.slice(5,7);
    this.yr= this.month.slice(0,4);
    console.log('ev',this.mnth );
    console.log('ev',this.yr);
   this.dealerAllocateShow(this.mnth,this.yr);

  }
  dealerAllocateShow(Month,Year){
    this.apiService.presentLoadingDefault();
    this.zone.run(async () => {
      let apiKey = {
         "month":Month,
         "year":Year,
         "request_page":"dealer",
         "request_for":""

      }
      this.apiService.apiCallWithLoginToken(URLS.DealerAllocationUrl, apiKey).subscribe((result) => {
        this.apiService.presentLoadingClose();
        this.serverData=result;
        if (result.success == 1) {
          this.message ='';
        } else {
          this.message = result.message;
         // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
        
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        this.apiService.presentLoadingClose();
      });
     
  
    });
  

  }
  close(){
    this.route.navigate(['./tabs/home']);
  }
view(item){
  this.sendData.pointData = item;
  this.sendData.month = this.mnth;
  this.sendData.year  = this.yr;
  console.log("month: ", this.yr);
  this.route.navigate(['./point-statement']);
}
}
