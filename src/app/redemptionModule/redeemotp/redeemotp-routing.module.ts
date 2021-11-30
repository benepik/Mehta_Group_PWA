import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemotpPage } from './redeemotp.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemotpPageRoutingModule {}
