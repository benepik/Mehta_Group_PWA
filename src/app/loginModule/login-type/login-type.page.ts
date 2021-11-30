import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-type',
  templateUrl: './login-type.page.html',
  styleUrls: ['./login-type.page.scss'],
})

export class LoginTypePage implements OnInit {

  loginType:any;

  constructor(public router:Router) {

    this.loginType=[
      {
        image:"assets/LoginPageIcon/Officer.svg",
        type:"Officer"
      },
      {
        image:"assets/LoginPageIcon/LoginCustomer.svg",
        type:"Customer"
      },
      {
        image:"assets/LoginPageIcon/Dealer.svg",
        type:"Dealer"
      },
      {
        image:"assets/LoginPageIcon/Region.svg",
        type:"Region"
      }
    ]

  }

  ngOnInit() {
  }
  
  gotoHome(){
    this.router.navigate(['/home']);
  }

}
