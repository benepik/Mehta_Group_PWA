import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerAllocationPage } from './customer-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerAllocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerAllocationPageRoutingModule {}
