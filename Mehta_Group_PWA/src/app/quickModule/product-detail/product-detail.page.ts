import { Component, OnInit, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween:10,
  };
  items:any;
  constructor(private route: Router, public platform:Platform, public zone:NgZone, 
    private apiService:ApiService, public sendData: DataTransferService,private localStorage:LocalStorageService) { 
    this.items = this.sendData.item;
  }

  ngOnInit() {
  }

}
