import { Component, OnInit, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.page.html',
  styleUrls: ['./product-catalogue.page.scss'],
})
export class ProductCataloguePage implements OnInit {
  productBrand:any=[];
  constructor(private route: Router, public platform:Platform, public zone:NgZone, 
    private apiService:ApiService, public sendData: DataTransferService,private localStorage:LocalStorageService) { }

  ngOnInit() {
  this.product_icon();
  }
product_icon(){
  this.apiService.presentLoadingDefault();
  this.zone.run(()=>{
    let apiKey = {}
    this.apiService.apiCallWithLoginToken(URLS.BrandProductUrl, apiKey).subscribe((result) =>{
      this.apiService.presentLoadingClose();
    if(result.success =='1' || result.success =='1'){
      this.productBrand = result.data;
    }
    })
  })
}
product_cs(id){
  this.sendData.item=id;
  this.route.navigate(['./product-detail']);
}
}
