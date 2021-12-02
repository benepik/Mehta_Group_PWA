import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  // faqs:any=[];
  visible :boolean= false;
  faqsData:any;
  showImage:any;
  currentItemindex=0;
  constructor(public zone:NgZone, private router:Router, public activeRoute: ActivatedRoute, private apiService:ApiService,
    private sendData:DataTransferService) {
    this.faqsData=this.sendData.alldata;
    console.log('faqsData',this.faqsData);
   }

  ngOnInit() {
    // this.faqShow();
  }
  // faqShow(){
  //   this.activeRoute.queryParams.subscribe(params => {
  //         if(params){
  //           if(params.data){
  //           console.log("data1: ", JSON.parse(params.data));
  //           this.faqs= JSON.parse(params.data);
  //           if(JSON.parse(params.data).list.success == 1){
  //           this.faqsData= JSON.parse(params.data).list.data;
  //          this.faqs.list[this.currentItemindex].showSegment = true;
  //           }
  //           else {
  //             this.showImage = JSON.parse(params.data).list.noDataImage;
  //           }
  //         }
  //         }
  //     })
  // }
 
  showArrow(item, index) {
    this.currentItemindex = index;
    console.log(item, index)
    if(item.showSegment){
      item.showSegment = item.showSegment == true ? false : true;
    }else{
      item.showSegment = true;
    } 
    }
   
  

}
