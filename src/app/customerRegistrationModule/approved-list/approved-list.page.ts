import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.page.html',
  styleUrls: ['./approved-list.page.scss'],
})
export class ApprovedListPage implements OnInit {
  userImg:string="";
  constructor(private route: Router, public platform:Platform) { 
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  }

  ngOnInit() {
  }
  active(){
//  this.route.navigate(['./active-customer']);
  }
  blocked(){
    // this.route.navigate(['./blocked-customer']);
  }
  view(){
    
  }
}
