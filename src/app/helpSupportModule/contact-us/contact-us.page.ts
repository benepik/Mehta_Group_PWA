import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { ApiService } from 'src/app/provider/api.service';
import { URLS } from 'src/assets/constant';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  CategoryData:any;
  subject: string="";
  description: string="";
  files:any=[];
  userImg:string="";
  imageFile:any;
  attachData: any;
  userImage: string | ArrayBuffer;
  currentObj: any;
  constructor(public zone:NgZone, private router:Router, public activeRoute: ActivatedRoute, private apiService:ApiService
    ,private sendData:DataTransferService,public navctrl:NavController) {
    this.CategoryData=this.sendData.alldata; 
    console.log('contact us Data',this.CategoryData);
  }

  ngOnInit() {
    // this.contactShow();
  }
  changeData(ev,data){
  
  }
  // contactShow(){
  //   this.activeRoute.queryParams.subscribe(params => {
  //         if(params){
  //           if(params.data){
  //           console.log("data1: ", JSON.parse(params.data));
  //           this.CategoryData= JSON.parse(params.data);
  //           }
  //         }
  //     })
  // }
  submit(subject, description){
    this.apiService.presentLoadingDefault();
    console.log(subject, description)
    this.zone.run(()=>{
      let apiKey={
        "subject":subject,
        "message":description,
        "attachment":this.attachData,
        "media_type":"1",
        "flag_type":"1"
      }
      console.log("apiKey : ", apiKey)
      this.apiService.apiCallWithLoginToken(URLS.ContactHelpSupportUrl,apiKey).subscribe((result) =>{
        console.log(result);
        this.apiService.presentLoadingClose();
        if(result.success == 1){
          this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
           this.navctrl.pop();
          this.subject = "";
          this.description = "";
          this.attachData="";
        }else {
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      },err=>{
        this.apiService.presentLoadingClose();
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    })
  }
  attachment(event){
    console.log('event1==>', event);
    console.log('this.currentObj==>', this.currentObj);

    var formData = new FormData();
    if(event.target.files){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          console.log(reader.result);
          this.attachData = reader.result;
          formData.append("file", this.files);
          console.log("files : ", this.files)
         console.log('this.currentObj==>', this.currentObj);
        // this.currentObj.answer= reader.result;
       
      };

    }
  }
}
