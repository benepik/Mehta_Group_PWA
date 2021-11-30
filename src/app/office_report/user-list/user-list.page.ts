import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  allStored: any;
  server:any;
  errorMessage:any;
  serverData:any=[];
  constructor(private route: Router, public platform:Platform,private zone:NgZone,
    private sendData:DataTransferService,private localStorage:LocalStorageService,private apiService:ApiService) { }

  ngOnInit() {
    this.localStorage.getStorage().then(storedData=>{
      this.allStored=storedData.allStoreData;
      console.log('stored data in dealer list page',this.allStored);
      this.reportShow();
    })
    
  }

  reportShow(){
    this.zone.run(()=>{
      let apiKey={ 
        "request_user_type":this.allStored.employee_type,
        "search_str":"",
        "value":"",
        "request_for":this.allStored.user_id,
        "request_type":"list"
      }
      console.log('login data response',apiKey);
      this.apiService.apiCallWithLoginToken(URLS.getUserList,apiKey).subscribe((result) =>{
        console.log('login data response',result);
        this.server=result;
        if(result.success==1){  
          this.serverData=result.data; 
          this.errorMessage='';
        }else{
          this.errorMessage=result.message;
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
               
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');               
      });
    }); 
  }
   view(item){
     this.sendData.alldata ={'employee_type':item.employee_type, 'user_id':item.officer_id, 'my':'officer'};
     this.route.navigate(['./dealer-list']);
   }
   close(){
     this.route.navigate(['./tabs/home']);
   }
}
