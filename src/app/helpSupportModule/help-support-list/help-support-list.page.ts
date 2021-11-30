import { Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-help-support-list',
  templateUrl: './help-support-list.page.html',
  styleUrls: ['./help-support-list.page.scss'],
})
export class HelpSupportListPage implements OnInit {
  settings:any=[];
  constructor(private router:Router, public zone:NgZone, private apiService:ApiService,private sendData:DataTransferService) { 
}

gotoFaq(item){
  this.sendData.alldata=item;
  if(item.pageTitle=="FAQ"){
    this.router.navigate(['/faq']);
  }else{
    this.router.navigate(['/contact-us']);
  }
// this.router.navigateByUrl(item.pageTitle);
  // if(item.pageTitle=="FAQ"){
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       data: JSON.stringify(item)
  //   }
  // }
  // console.log("items", item)
  //   this.router.navigate(['/faq'], navigationExtras);
  // }else{
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       data: JSON.stringify(item)
  //   }
  // }
  // console.log("items9", item)
  //   this.router.navigate(['/contact-us'], navigationExtras);
  // }
  
}

  ngOnInit() {
    this.helpSupportShow();
  }
  helpSupportShow(){
    this.apiService.presentLoadingDefault();
    this.zone.run(()=>{
      let apiKey = {  }
      this.apiService.apiCallWithLoginToken(URLS.HelpSupportUrl, apiKey).subscribe((result) =>{
        console.log("HelpSupportUrl: ", result);
          this.apiService.presentLoadingClose();
        if(result){
           this.settings= result;
        }
      });
    })
  }

}