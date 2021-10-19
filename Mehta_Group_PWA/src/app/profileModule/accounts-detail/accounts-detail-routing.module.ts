import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsDetailPage } from './accounts-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsDetailPageRoutingModule {}
