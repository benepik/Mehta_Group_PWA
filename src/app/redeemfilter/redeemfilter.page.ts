import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiservicesService } from '../provider/apiservices.service';
import { DataTransferService } from '../services/data-transfer.service';
import { LocalStorageService } from '../services/local-storage.service';
import { URLS, APP_CONFIG } from '../../../src/assets/constant';
import { ApiService } from '../provider/api.service';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-redeemfilter',
  templateUrl: './redeemfilter.page.html',
  styleUrls: ['./redeemfilter.page.scss'],
})
export class RedeemfilterPage implements OnInit {

  Alldata: any;
  selecteddata: any;
  branddata: any;
  selectedindex: any;
  changecolorcheck: any=0;
  applydataarr: any;
  filterData: any;


  clickcolor:boolean=true;
  clickcolor2:boolean=false;
  showdata:boolean=false;
  todayAccStatementRespo:any;
  todayListResult:any;
  allListResult:any;
  brandCategoryData:any;
  value:number=0;
  todayBrandDetail:any;
  filterArray:any;
  showFilterDiv:boolean = false;
  showCheckRadio:any;
  errorMessage:string="";
  myInfiniteScroll:any;
  myinfiniteScrollCall:boolean=false;
  tabType:any;
  creditType:any;
  errorImage:any;
  categoryAuto_Arr: any={};
  uniqueString: string;
  allocationData: any;
  categoryAuto_id: any=[];
  categoryAuto_id1: any=[];
  categoryAuto_id2: any=[];
  filterDataArr: any;
  filterArr: any;
  Arr: any;
  constructor(private router:Router,private storageService:LocalStorageService,private zone:NgZone,
    private apiservices:ApiService,private sendData:DataTransferService,private modalCtrl:ModalController,
    public navParam:NavParams, ) {

   }
   applydata(applydata,i){
     this.zone.run(()=>{
      //  this.categoryAuto_id=[];
      console.log('category data',applydata);
      console.log('categor index',i);
     this.selectedindex=undefined;
      this.changecolorcheck=i;
      this.branddata=applydata;  
      if(applydata.is_dependent==1){
        this.filterSubCateFun();
      }else{
        console.log('categor index',i);
        this.applydataarr=applydata.options;
      } 
     });

   }

   select(selecteddata,j){
    this.zone.run(()=>{
    console.log('selecteddata data',selecteddata);
    console.log('selecteddata index',j);
      this.selectedindex=j;
      if(selecteddata.alias_name=='category'){
        console.log('selecteddata alias_name',this.categoryAuto_id);
        var index= this.categoryAuto_id.indexOf(parseInt(selecteddata.auto_id));
        if(index>=0){
          selecteddata.is_selected=0;
          this.categoryAuto_id.splice(index,1);
          this.uniqueString = [...new Set(this.categoryAuto_id)].join(',');    
          console.log('this.uniqueString1', this.uniqueString);
        }else{
          selecteddata.is_selected=1;
          this.categoryAuto_id.push(parseInt(selecteddata.auto_id));
          this.uniqueString = [...new Set(this.categoryAuto_id)].join(',');  
          console.log(' this.uniqueString', this.uniqueString);

        }
        this.categoryAuto_Arr[selecteddata.alias_name] = this.uniqueString;
      }else if(selecteddata.alias_name=='sub_category'){
        console.log('selecteddata alias_name',selecteddata.alias_name);
        var index1= this.categoryAuto_id1.indexOf(parseInt(selecteddata.auto_id));
        if(index1>=0){
          selecteddata.is_selected=0;
            this.categoryAuto_id1.splice(index1,1);
            this.uniqueString = [...new Set(this.categoryAuto_id1)].join(',');
          console.log('this.uniqueString1', this.uniqueString);
        }else{
          selecteddata.is_selected=1;
            this.categoryAuto_id1.push(parseInt(selecteddata.auto_id));
            this.uniqueString = [...new Set(this.categoryAuto_id1)].join(',');
        }
          console.log(' this.uniqueString', this.uniqueString);
          this.categoryAuto_Arr[selecteddata.alias_name] = this.uniqueString;
      }else if(selecteddata.alias_name=='brands'){
        console.log('selecteddata alias_name',selecteddata.alias_name);
        var index2= this.categoryAuto_id2.indexOf(parseInt(selecteddata.auto_id));
        if(index2>=0){
          selecteddata.is_selected=0;
            this.categoryAuto_id2.splice(index2,1);
            this.uniqueString = [...new Set(this.categoryAuto_id2)].join(',');
          console.log('this.uniqueString1', this.uniqueString);
        }else{
          selecteddata.is_selected=1;
            this.categoryAuto_id2.push(parseInt(selecteddata.auto_id));
            this.uniqueString = [...new Set(this.categoryAuto_id2)].join(',');
        }
          console.log(' this.uniqueString', this.uniqueString);
          this.categoryAuto_Arr[selecteddata.alias_name] = this.uniqueString;
      }
      
      console.log('categoryAuto_id data',this.uniqueString);
      console.log('categoryAuto_Arr data',this.categoryAuto_Arr);
  });
   }

  ngOnInit() {
    // this.allocationData=this.sendData.alldata;
    this.allocationData=this.navParam.data.data;
    this.Arr=this.navParam.data;
    if(this.Arr.filterPre==undefined){
      this.categoryAuto_Arr={'category':'','sub_category':'','brands':''};
    }else{
      this.categoryAuto_Arr=this.navParam.data.filterPre;
    }
    console.log('previous allocationData data',this.allocationData);
    console.log('previous filter data', this.Arr.filterPre);
    this.filterListFun();
  }

  filterSubCateFun(){
    this.zone.run(async () => {
      let apiKey = {
        category_id:this.categoryAuto_Arr['category'] || '',
        filter:this.categoryAuto_Arr
      }
      this.apiservices.apiCallWithLoginToken(URLS.filterSubCategoryApi, apiKey).subscribe((result) => {
        if (result.success == 1) {
          this.applydataarr=result.data[0].options;
          console.log('this.applydataarr', this.applydataarr);
          this.applydataarr.forEach(e => {
              if(e.is_selected==1){
                this.categoryAuto_id1.push(parseInt(e.auto_id));
              }
          });
        } else {
        }     
      }, err => {
        this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
     
  
    });


  }

 filterListFun(){
    this.zone.run(async () => {
      let apiKey = {
        "filter":this.categoryAuto_Arr
      }
      this.apiservices.apiCallWithLoginToken(URLS.filterProductApi, apiKey).subscribe((result) => {
        if (result.success == 1) {
          this.filterData=result.data;
          this.applydataarr=this.filterData[0].options;
            this.applydataarr.forEach(ele => {
              if(ele.is_selected==1){
                this.categoryAuto_id.push(parseInt(ele.auto_id));
              }
            });
            this.filterData[2].options.forEach(ele => {
              if(ele.is_selected==1){
                this.categoryAuto_id2.push(parseInt(ele.auto_id));
              }
            });
         
          // console.log('this.applydataarr', this.applydataarr);
          this.errorImage='';
        } else {
          // this.errorMessage=result.message;
          // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
        
      }, err => {
        this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        // this.apiService.presentLoadingClose();
      });
     
  
    });
  }

  gotoBack(){
    this.modalCtrl.dismiss({
      'dismissed': true ,
      'data':'',
      'filter':''
    });
  }
  clearFilter(){
    this.categoryAuto_id=[];
    this.categoryAuto_id1=[];
    this.categoryAuto_id2=[];
    // this.filterArr={'category':'','sub_category':'','brands':''};
    this.categoryAuto_Arr={'category':'','sub_category':'','brands':''};
    this.filterData.forEach(element => {
      element.options.forEach(ele => {
        console.log('element',ele);
        ele.is_selected=0;
      });
    });
      this.applydataarr.forEach(element => {
          console.log('element1',element);
          element.is_selected=0;
      });
  
    console.log('filterData',this.categoryAuto_Arr);
    
  }
  applyfun(){
    this.zone.run(()=>{
      this.apiservices.presentLoadingDefault();
      this.zone.run(async () => {
        let apiKey = {
          "request_page":this.allocationData.request_page,
          "search_str":'',
          "redeem_for":this.allocationData.redeem_for,
          "request_for":this.allocationData.customer_id,
          "request_user_type":this.allocationData.employee_type,
          "filter":this.categoryAuto_Arr
        }
        this.apiservices.apiCallWithLoginToken(URLS.ProductListUrl, apiKey).subscribe((result) => {
          this.apiservices.presentLoadingClose();
          if (result.success == 1) {
            console.log('filter data',result.data);
              this.modalCtrl.dismiss({
                'dismissed': true ,
                'data':result.data,
                'filter':this.categoryAuto_Arr
              });
        
            this.errorImage='';
  
          } else {
            // this.errorMessage=result.message;
            this.errorImage=result.error_image;
            this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
            // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
          }
          
        }, err => {
          this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
          this.apiservices.presentLoadingClose();
        });
       
    
      });
    });

  }


}
