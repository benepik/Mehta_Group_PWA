import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoveRejectReedemptionPageRoutingModule } from './appove-reject-reedemption-routing.module';

import { AppoveRejectReedemptionPage } from './appove-reject-reedemption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppoveRejectReedemptionPageRoutingModule
  ],
  declarations: [AppoveRejectReedemptionPage]
})
export class AppoveRejectReedemptionPageModule {}
