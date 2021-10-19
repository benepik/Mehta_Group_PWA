import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settings:any=[];
  constructor() { 
    this.settings=[{
      "icon":"assets/LoginPageIcon/Arrow.svg",
      "title":"Manage Address",
      "arrowicon":"assets/LoginPageIcon/Arrow.svg"

    },
    {
      "icon":"assets/LoginPageIcon/Arrow.svg",
      "title":"Change Language",
      "arrowicon":"assets/LoginPageIcon/Arrow.svg"

    }]
  }

  ngOnInit() {
  }

}
