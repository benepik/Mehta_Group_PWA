import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemfilterPage } from './redeemfilter.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemfilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemfilterPageRoutingModule {}
