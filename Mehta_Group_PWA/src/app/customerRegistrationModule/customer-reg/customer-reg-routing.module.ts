import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerRegPage } from './customer-reg.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRegPageRoutingModule {}
