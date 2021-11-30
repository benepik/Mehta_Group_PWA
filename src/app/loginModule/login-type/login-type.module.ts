import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginTypePageRoutingModule } from './login-type-routing.module';

import { LoginTypePage } from './login-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginTypePageRoutingModule
  ],
  declarations: [LoginTypePage]
})
export class LoginTypePageModule {}
