import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-point-statement',
  templateUrl: './point-statement.page.html',
  styleUrls: ['./point-statement.page.scss'],
})
export class PointStatementPage implements OnInit {
  serverData:any=[];
  pointData:any;
  message:any;
  constructor(private route: Router, public platform:Platform, private sendData: DataTransferService, public apiService:ApiService, private zone:NgZone) {
    this.pointData = this.sendData.pointData;
    console.log("pointdata: ", this.pointData)
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
   }

  ngOnInit() {
    this.pointStatmentShow();
  }
pointStatmentShow(){
  this.apiService.presentLoadingDefault();
  this.zone.run(async () => {
    let apiKey = {
      "month":this.sendData.month,
      "year":this.sendData.year,
      "request_page":"customer",
      "request_for":this.pointData.dealer_id
    }
    this.apiService.apiCallWithLoginToken(URLS.DealerAllocationUrl, apiKey).subscribe((result) => {
      this.apiService.presentLoadingClose();
      this.serverData=result;
      if (result.success == 1) {

      } else {
        this.message = result.message;
        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      }
      
    }, err => {
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      this.apiService.presentLoadingClose();
    });
   

  });
}
}
