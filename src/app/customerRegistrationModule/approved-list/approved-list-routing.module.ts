import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovedListPage } from './approved-list.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedListPageRoutingModule {}
