import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-assign-dealer',
  templateUrl: './assign-dealer.page.html',
  styleUrls: ['./assign-dealer.page.scss'],
})
export class AssignDealerPage implements OnInit {
data:any=[];
  constructor(public platform:Platform) {
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });

   }

  ngOnInit() {
    this.data=[{
      'name': "Rahul", "mobile":"878936872", "code": "GNE01","Location":"SECTOR 49, Gurugram, Haryana"
    }];
  }

}
