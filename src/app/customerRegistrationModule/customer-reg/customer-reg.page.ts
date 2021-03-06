import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.page.html',
  styleUrls: ['./customer-reg.page.scss'],
})
export class CustomerRegPage implements OnInit {
  // userImg:string="";
  buttData:any;
  showImg:any;
  id_item:any;
  tab_status:any;
  custmReg:any;
  searchString:string='';
  isItemAvailable = false;
  // items = [];
  buttonData = [];
  pageTitle:any;
  value:number=0;
  infiniteScroll_call: boolean=false;
  infiniteScroll_val: any;
  errorMessage: any;
  selectedbtn:any='active';
  constructor(private route: Router, public platform:Platform,  private navController: NavController, 
    public zone:NgZone, private apiService:ApiService, public sendData: DataTransferService) {
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
    this.buttonData = [{tab_name: "Active Customers",tab_status: "selected_tab"},
    {tab_name: "Blocked Customers",tab_status: "unselected_tab"}]

    
  }
  ionViewWillEnter(){
    this.customerReg();
  }

  ngOnInit() {
    
  }

searchCustomer(ev){
  console.log('ev',ev);
  if(ev.detail.value && ev.detail.value!=''){
    this.searchString=ev.detail.value;
  }else{
    this.searchString='';
  }
  console.log('ev',ev);
  //this.value=0;
  //this.userData=[];
 // this.showItemList(this.searchString);
}
  close(){
    this.route.navigate(['./tabs/home']);
  }

  customerReg(){
    // this.apiService.presentLoadingDefault();
    this.zone.run(()=>{
      let apiKey = {}
      this.apiService.apiCallWithLoginToken(URLS.CustReg, apiKey).subscribe((result) =>{
        console.log("CustReg: ", result);
        // this.apiService.presentLoadingClose();
        if(result.success == 1){
          this.buttData = result.data;
          this.value=0;
          this.custmReg=[];
          this.showItemList('pending');
          this.pageTitle = this.buttData[0].tab_name; 
        } else{

        }
      }, err => {
      this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      // this.apiService.presentLoadingClose();
      })
    })
  }

  showItemList(id){
    if(id=="app"){
      this.tab_status = "selected_tab";
    }
    this.id_item= id;
    this.apiService.presentLoadingDefault();
    this.zone.run(()=>{
      let apiKey = {
      "value":this.value,
      "search_str":"",
      "selected_tab":id
      }
      this.apiService.apiCallWithLoginToken(URLS.CustRegDataUrl, apiKey).subscribe((result) =>{
      console.log("CustRegDataUrl: ", result);
      this.apiService.presentLoadingClose();
        if(result.success == 1){
          if(this.custmReg==undefined){
            this.custmReg=result.data;
          }else{
            this.custmReg =this.custmReg.concat(result.data);
          }        
          this.showImg = "";
          this.errorMessage='';
          console.log("custmReg : ", this.custmReg);
        }else{
          if(this.value==0){
            this.showImg = result.no_data_image;
            this.errorMessage='';
          }else{
            this.errorMessage=result.message;
            this.showImg = "";
          }
        }
        if(this.infiniteScroll_call==true){
          this.stopInfiniteScroll();
          }
      },err=>{
        this.apiService.presentLoadingClose();
          this.apiService.showToastMessage(JSON.stringify(err), top, 2000, "redBg");
        });
    });
  }
loadData(event) {
  this.infiniteScroll_call=true;
  this.infiniteScroll_val=event;
  setTimeout(() => {
    this.value=this.custmReg.length;
    this.showItemList("rejected");
  }, 500);
}
loadDataActive(event) {
  this.infiniteScroll_call=true;
  this.infiniteScroll_val=event;
  console.log("event:", event)
  setTimeout(() => {
    this.value=this.custmReg.length;
    // for (let i = 0; i < this.buttonData.length; i++) {
      if(this.buttonData[0].tab_status=='selected_tab'){
        this.showItemList("active");
      }else{
        this.showItemList("block");
      }
  }, 500);
}
loadDataPending(event) {
  this.infiniteScroll_call=true;
  this.infiniteScroll_val=event;
  setTimeout(() => {
    this.value=this.custmReg.length;
    this.showItemList("pending");
  }, 500);
}

stopInfiniteScroll(){
  if(this.infiniteScroll_call==true){
    this.infiniteScroll_call=false;
    this.infiniteScroll_val.target.complete();
  }
}

changedTabs(item){
  this.custmReg=[];
  this.value=0;
  // this.showImg={};
  this.zone.run(()=>{
  if(item.tab_status != "selected_tab"){
    item.tab_status = "selected_tab";
    if(this.pageTitle == "Approved List"){
      if(item.tab_name == "Active Customers"){
        item.tab_status='selected_tab';
        this.showItemList("active");
      }else{
        item.tab_status='unselected_tab';
        this.showItemList("block");
        
      }
  }
  for(let i=0; i<this.buttonData.length; i++){
    if(item.tab_name != this.buttonData[i].tab_name){
      this.buttonData[i].tab_status = "unselected_tab";
    }
    else{
      this.buttonData[i].tab_status = "selected_tab";
    }
  }
}
  })
}
 changedTab(item){
  // alert('1');
  this.zone.run(()=>{
    this.custmReg=[];
    this.value=0;
    // this.showImg={};
    if(item.tab_status != "selected_tab"){
      item.tab_status = "selected_tab";
      this.pageTitle = item.tab_name;
      if(this.pageTitle == "Approved List"){
        this.buttonData[0].tab_status = "selected_tab";
        this.buttonData[1].tab_status = "unselected_tab";
        this.showItemList("active");
      }else if(this.pageTitle == "Rejected List"){
        this.showItemList("rejected");
      }else{
        this.showItemList("pending");
      }
      if(item.show_no_data == "1"){
        this.showImg = item.no_data_image;
      }
      else{
      }
      for(let i=0; i<this.buttData.length; i++){
        if(item.tab_name != this.buttData[i].tab_name){
          this.buttData[i].tab_status = "unselected_tab";
        }
        else{
          this.buttData[i].tab_status = "selected_tab";
        }
      }
    console.log("this.buttData :", this.buttData)
    }
 else{
  if(item.show_no_data == "1"){
    this.showImg = item.no_data_image;
  }
  else{
  // this.showImg = item.no_data_image;
  } 
}
   });

 }
 view(id){
   console.log("id36", id)
  // this.sendData.listType = id;
   if(this.pageTitle=="Pending List"){
    this.sendData.registrationType ={request_page:'pending_customer'} ;
   }else if(this.pageTitle=="Approved List"){
    if(this.id_item == "active"){
    this.sendData.registrationType ={request_page:'active_customer'} 
    }else{
      this.sendData.registrationType ={request_page:'block_customer'} 
      }
   } else {
    this.sendData.registrationType ={request_page:'rejected_customer'} 
   }
   this.sendData.alldata=id.customer_id;
   this.route.navigate(['./registration']);
 }
}
