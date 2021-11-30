import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountStatmentPage } from './account-statment.page';

const routes: Routes = [
  {
    path: '',
    component: AccountStatmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountStatmentPageRoutingModule {}
