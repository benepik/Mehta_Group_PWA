import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedemptionReportPageRoutingModule } from './redemption-report-routing.module';

import { RedemptionReportPage } from './redemption-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedemptionReportPageRoutingModule
  ],
  declarations: [RedemptionReportPage]
})
export class RedemptionReportPageModule {}
