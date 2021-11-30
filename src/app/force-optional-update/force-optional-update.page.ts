import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController, Platform } from '@ionic/angular';
import { ApiService } from '../provider/api.service';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-force-optional-update',
  templateUrl: './force-optional-update.page.html',
  styleUrls: ['./force-optional-update.page.scss'],
})

export class ForceOptionalUpdatePage implements OnInit {

  showAllData:any="";
  appStatus:any;
  
  constructor(private router:Router,private zone:NgZone,private apiServices:ApiService,public platform:Platform,
    public menuCtrl:MenuController,private sendData:DataTransferService) {

    this.showAllData=this.sendData.myParam;
    console.log("showing data form force update==", this.showAllData);

    this.appStatus=this.sendData.alldata;
    console.log("showing data button form force update==", this.appStatus);

  }

  ngOnInit() { }

  updateApp(linkUpdate){
    this.zone.run(()=>{
      this.apiServices.iab.create(linkUpdate.update_link, "_system", this.apiServices.options);
    });
  }

  goToHome(){
    this.zone.run(()=>{
      this.router.navigate(["/tabs"],{replaceUrl:true});
    });
  }

}
