import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-communication-list',
  templateUrl: './communication-list.page.html',
  styleUrls: ['./communication-list.page.scss'],
})
export class CommunicationListPage implements OnInit {
  community:any;
  value:number=0;
  communityData:any=[];
  errorMessage:string;
  infiniteScroll_call: boolean=false;
  infiniteScroll_val: any;
  constructor(public zone:NgZone, private router:Router, public activeRoute: ActivatedRoute, 
    private apiService:ApiService,public sendData:DataTransferService) { 
   }

  ngOnInit() {
    this.communicationList();
  }
  
  communicationList(){
    this.apiService.presentLoadingDefault();
    this.zone.run(()=>{
      let apiKey = {
	      "value":this.value,
        "flag_type":"1"
      }
      this.apiService.apiCallWithLoginToken(URLS.PostListUrl, apiKey).subscribe((result) =>{
        console.log("PostListUrl: ", result);
        this.apiService.presentLoadingClose();
        this.community=result;
        if(result.success==1){
          if(this.communityData==undefined){
            this.communityData=result.data;
          }else{
            this.communityData=this.communityData.concat(result.data);
          }
        this.errorMessage='';
        }else{
          this.errorMessage=result.message;
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
               
      if(this.infiniteScroll_call==true){
        this.stopInfiniteScroll();
        }
      },err=>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            if(this.infiniteScroll_call==true){
            this.stopInfiniteScroll();
      }
      });
    })
}
  gotoDetail(item){
    this.sendData.alldata=item;
      this.router.navigate(['/communication-detail']);
  }

    loadData(event) { 
    this.infiniteScroll_call=true;
    this.infiniteScroll_val=event;
    setTimeout(() => {
      this.value=this.communityData.length;
      this.communicationList();
    }, 500);
  }
  
  stopInfiniteScroll(){
    if(this.infiniteScroll_call==true){
      this.infiniteScroll_call=false;
      this.infiniteScroll_val.target.complete();
    }
  }
}
