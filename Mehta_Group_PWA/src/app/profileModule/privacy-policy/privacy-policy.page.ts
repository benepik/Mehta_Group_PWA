import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { ApiService } from 'src/app/provider/api.service';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
  privacyData:any;
  pageTitle:any;
  constructor(private localStorage:LocalStorageService,public apiService:ApiService) { }

  ngOnInit() {
    this.localStorage.getStorage().then(storedData=>{
      this.privacyData =storedData.maintainanceData.privacy_data.data.content;
      this.pageTitle = storedData.maintainanceData.privacy_data.page_title;
    });
  }

}
