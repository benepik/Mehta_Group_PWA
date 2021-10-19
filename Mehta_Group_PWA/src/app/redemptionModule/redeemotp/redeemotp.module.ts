import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemotpPageRoutingModule } from './redeemotp-routing.module';

import { RedeemotpPage } from './redeemotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RedeemotpPageRoutingModule
  ],
  declarations: [RedeemotpPage]
})
export class RedeemotpPageModule {}
