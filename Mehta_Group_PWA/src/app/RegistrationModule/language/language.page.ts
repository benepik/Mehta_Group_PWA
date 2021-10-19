import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  public eng:any;
  public hin:any;
  public guj:any;
  constructor(private route: Router,  public platform:Platform,) { 
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  }

  ngOnInit() {
  }
  isClick: boolean=false;

isClicked(){
 return this.isClick;
}
mobile(){
  this.isClick=!this.isClick;
 this.route.navigate(['./login']);
}

}
