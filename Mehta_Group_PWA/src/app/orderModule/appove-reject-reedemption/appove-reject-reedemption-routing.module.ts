import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoveRejectReedemptionPage } from './appove-reject-reedemption.page';

const routes: Routes = [
  {
    path: '',
    component: AppoveRejectReedemptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoveRejectReedemptionPageRoutingModule {}
