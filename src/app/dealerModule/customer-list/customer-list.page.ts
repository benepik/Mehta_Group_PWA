import { Component, OnInit, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {
  userImg:string="";
  customerList:any;
  allocationData:any;
  header_title:any;
  image:any;
  constructor(private route: Router, public platform:Platform, public navCtrl: NavController, public zone:NgZone, private apiService:ApiService, public sendData: DataTransferService) {
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
    this.allocationData= this.sendData.alldata;
   }

  ngOnInit() {
    this.customerListShow();
  }
  customerListShow(){
    this.apiService.presentLoadingDefault();
    this.zone.run(()=>{
      let apiKey = {
        "search_str":"",
        "value":"",
        "request_for":this.allocationData.customer_id,
        "request_user_type":this.allocationData.employee_type,
        "request_type":"list"
      }
      this.apiService.apiCallWithLoginToken(URLS.getUserList, apiKey).subscribe((result) =>{
       this.apiService.presentLoadingClose();
        console.log("UserListUrl: ", result);
        if(result.success == '1'){
           this.customerList = result.data;
           this.header_title = result.header_title;
          // this.custmReg = result.data;
        }
        else{
          this.image=result.no_data_image;
         // this.apiService.showToastMessage(result.message, top, 2000, "redBg");
        }
      });
    });
  }
view(item){
  console.log("id456 : ", item);
  this.sendData.alldata = item;
  this.sendData.itemDetails = this.allocationData.customer_id;
  console.log('123',this.sendData.alldata);
 this.route.navigate(['./customer-details']);
  // this.navCtrl.navigateBack('/customer-details');
}
}
