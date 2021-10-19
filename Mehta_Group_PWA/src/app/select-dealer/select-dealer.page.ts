import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../provider/api.service';
import { DataTransferService } from '../services/data-transfer.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-select-dealer',
  templateUrl: './select-dealer.page.html',
  styleUrls: ['./select-dealer.page.scss'],
})
export class SelectDealerPage implements OnInit {
  dealerList:any;
  searchString:any='';
  imgArr:any='';
  ischecked=false;
  obj:any;
  mobileSubmitData:any;
  itemss:any;
  loginPageData:any;
  selcetdItem:any;
  bp:any=[];
  constructor(public sendData: DataTransferService, private zone:NgZone, public apiService: ApiService, public navCntrl: NavController, public route: Router) {
    
   
   }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.obj = this.sendData.alldata;
    this.itemss = this.sendData.item;  
    console.log("qwew: ", this.obj)
    this.loginPageData=this.sendData.loginKey;
    this.dealerList = this.sendData.itemDetails;
  }
  back(){
    this.navCntrl.back();
  }
  checkValue(ev) {
    console.log('select opt value==> ', ev);
    this.selcetdItem = ev.target.value;
    console.log('select opt value==> ',  this.selcetdItem);
      this.ischecked=true;
    }
  continue(){
  // this.sendData.alldata = this.obj;
  // this.sendData.item = this.itemss;
  //this.route.navigate(['./otpverify']);
  if(this.selcetdItem){
  this.zone.run(()=>{
    this.bp = []
    for(let i =0; i<this.selcetdItem.length; i++){
     this.bp.push(this.selcetdItem[i].dealer_id);
     this.bp.toString();
     console.log("bp :", this.bp.toString());
    }
    let apiKey={
      "contact":this.obj.contact,
      "send_type":this.obj.send_type,
      "message_type":'sms',
      "dealer_id": this.bp.toString()
    }
    console.log('login data response',apiKey);
    this.apiService.apiCallWithLoginToken(URLS.MobileSubmitUrl,apiKey).subscribe((result) =>{
      console.log('login data response',result);
       // this.apiService.presentLoadingClose();
      if(result.success==1){
         this.mobileSubmitData=result;
        
        let object={
          "apiData":this.mobileSubmitData,
          "phonenumber":this.obj.contact,
          "send_type":this.obj.send_type,
          "dealer_id": this.bp.toString(),
         "requestPage":this.loginPageData.requestPage
        }
        this.sendData.alldata=object;
        this.obj.contact = '';
        console.log('login data response',this.sendData);
        this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
        this.sendData.itemDetails=this.itemss;   
        this.route.navigate(['./otpverify']);
      // }else{
      //   this.phonenumber = '';
      //   this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
      // }
      }
    },err =>{
      this.apiService.presentLoadingClose();
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
    });
  }); 
}
else{
  this.apiService.showToastMessage('Please Select Dealer', 'top', 3000, 'redBg')
}
  }
}
