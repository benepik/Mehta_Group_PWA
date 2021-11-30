import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})

export class MaintenancePage implements OnInit{

  alldata:any;
  public unregisterBackButtonAction:any;

  constructor(private sendData:DataTransferService,public platform:Platform) {}









  ngOnInit(){
    this.alldata = this.sendData.myParam;
    console.log("maintenace data comming form home forceUpdateApi== ", this.alldata);
  }

  ionViewWillLeave(){
    // this.menu.swipeEnable(true);
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
              
  ionViewWillEnter(){
    // this.menu.swipeEnable(false);
    // this.initializeBackButtonCustomHandler();
    console.log("[1] will enter fired");
  }








  
}