import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedemptionReportPage } from './redemption-report.page';

const routes: Routes = [
  {
    path: '',
    component: RedemptionReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedemptionReportPageRoutingModule {}
