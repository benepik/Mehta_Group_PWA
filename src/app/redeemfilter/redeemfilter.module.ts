import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemfilterPageRoutingModule } from './redeemfilter-routing.module';

import { RedeemfilterPage } from './redeemfilter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemfilterPageRoutingModule
  ],
  declarations: [RedeemfilterPage]
})
export class RedeemfilterPageModule {}
