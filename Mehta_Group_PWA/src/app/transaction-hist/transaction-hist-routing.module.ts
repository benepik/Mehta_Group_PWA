import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionHistPage } from './transaction-hist.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionHistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionHistPageRoutingModule {}
