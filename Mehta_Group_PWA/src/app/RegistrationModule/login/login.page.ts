import { Component, NgZone, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { ApiService } from 'src/app/provider/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(public platform:Platform,public route: Router,private sendData:DataTransferService,private zone:NgZone,
    private apiService:ApiService,private localStorage:LocalStorageService, public loc:PlatformLocation) { 

    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  //   this.loc.onPopState(() => {

      
  //     history.pushState(null, null, window.location.pathname);
    
  // })
  }



  ionViewWillEnter(){

  }

  ngOnInit() {
  }

  register(Type){
    console.log('type',Type);
    this.zone.run(()=>{
      this.sendData.loginKey={
        "type":Type,
        "requestPage":'user'
      }
      this.localStorage.setStorage('type',Type);
      this.route.navigate(['/mobile']);
    });

  }

}
