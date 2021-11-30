import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerAllocatPage } from './dealer-allocat.page';

const routes: Routes = [
  {
    path: '',
    component: DealerAllocatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerAllocatPageRoutingModule {}
