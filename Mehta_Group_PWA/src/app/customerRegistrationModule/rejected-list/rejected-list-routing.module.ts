import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectedListPage } from './rejected-list.page';

const routes: Routes = [
  {
    path: '',
    component: RejectedListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectedListPageRoutingModule {}
