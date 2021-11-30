import { Component, NgZone, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
// import { Storage } from '@ionic/storage-angular'; 
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})

export class TermsConditionsPage implements OnInit {

  privacyData:any;
  pageTitle:any;
  homePageData: any;

  constructor(private localStorage:LocalStorageService, public apiService:ApiService,
    private sendData:DataTransferService,private zone:NgZone,private router:Router ) { 

  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    // this.apiService.tandc.
    // this.homePageData=this.sendData.alldata;
    // console.log('this.homePageData',this.homePageData);
    // if(this.homePageData){
    //   this.privacyData = this.homePageData.tnc;
    //   this.pageTitle=this.homePageData.page_title;
    // }else{
    this.localStorage.getStorage().then(storedData=>{
      console.log('val',storedData );
      this.privacyData =storedData.maintainanceData.term_condition_data.data.content;
      this.pageTitle = storedData.maintainanceData.term_condition_data.page_title;
    });
  // }
}

// gototerms(){
//   this.zone.run(()=>{
//     let apiKey={
//       "request_page":"home",
//       "requested_module":"tnc",
//       "request_for": ""
//     }
//     this.apiService.apiCallWithLoginToken(URLS.SkipUrl,apiKey).subscribe((result) =>{
//       if(result.success==1){
//         this.router.navigateByUrl("/tabs/home",{replaceUrl:true});
//       }else{
//         this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
//       }
//     },err =>{
//       this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
//     });
//   });
// }

}
