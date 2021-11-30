import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';


@Component({
  selector: 'app-customer-allocation',
  templateUrl: './customer-allocation.page.html',
  styleUrls: ['./customer-allocation.page.scss'],
})
export class CustomerAllocationPage implements OnInit {
  errorMessage:any;
  customerData: any;
  customerPoints: any;
  searchString:string='';
  userData:any=[];
  infiniteScroll_call: boolean=false;
  infiniteScroll_val: any;
  value:number=0;
  constructor(private zone:NgZone,private modalCtrl: ModalController, private alertController:AlertController, private apiService:ApiService,private router:Router,public platform:Platform,
    private sendData:DataTransferService) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.value=0;
    this.userData=[];
    this.customerAllocation(this.searchString);
  }
  searchCustomer(ev){
    console.log('ev',ev);
    if(ev.detail.value && ev.detail.value!=''){
      this.searchString=ev.detail.value;
    }else{
      this.searchString='';
    }
    console.log('ev',ev);
    this.value=0;
    this.userData=[];
    this.customerAllocation(this.searchString);
  }
  customerAllocation(searchdata){
    this.zone.run(()=>{
      let apiKey={ 
        "search_str":searchdata,
        "value":this.value
      }
      console.log('login data response',apiKey);
      this.apiService.apiCallWithLoginToken(URLS.customerAllocationUrl,apiKey).subscribe((result) =>{
        console.log('login data response',result);
        this.customerData=result;
        if(result.success==1){  
          if(this.userData==undefined){
            this.userData=result.data;
          }else{
            this.userData=this.userData.concat(result.data);
          }        
          this.errorMessage='';
        }else{
          this.errorMessage=result.message;
        }
               
    if(this.infiniteScroll_call==true){
      this.stopInfiniteScroll();
      }

      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');               
    if(this.infiniteScroll_call==true){
      this.stopInfiniteScroll();
      }
      });
    }); 
  }


  loadData(event) { 
    this.infiniteScroll_call=true;
    this.infiniteScroll_val=event;
    setTimeout(() => {
      this.value=this.userData.length;
      this.customerAllocation(this.searchString);
    }, 500);
  }
  
  stopInfiniteScroll(){
    if(this.infiniteScroll_call==true){
      this.infiniteScroll_call=false;
      this.infiniteScroll_val.target.complete();
    }
  }
  view(item){
    this.zone.run(() => {
    this.sendData.alldata=item;
    this.sendData.myParam='customerCheck'
    this.router.navigate(['/customer-details']); 
    })
  }
  allocated(item){
    this.zone.run(() => {
    //  this.apiService.isSelected='true';
    this.sendData.alldata=item;
    this.router.navigate(['/allocate-point-form']);
    });
  }
  transectionHistory(){
    this.zone.run(() => {
    this.sendData.alldata={"requestType":'dealer'}
    this.router.navigate(['./redemption-report']);
    });
  }
 async addCustomer(allVal){
  this.zone.run(() => {
    this.sendData.alldata=allVal;
    
          this.sendData.loginKey={
            "type":'Register',
            "requestPage":'dealer'
          }
         // this.sendData.itemDetails=dataReturned;
          this.router.navigate(['/mobile']); 
        });
  }
      
}
