import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-rejected-list',
  templateUrl: './rejected-list.page.html',
  styleUrls: ['./rejected-list.page.scss'],
})
export class RejectedListPage implements OnInit {
  userImg:string="";
  constructor(private route: Router, public platform:Platform) { 
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  }

  ngOnInit() {
  }
  view(){
    this.route.navigate(['./dealer-list']);
  }
}
