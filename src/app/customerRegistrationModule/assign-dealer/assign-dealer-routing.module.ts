import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignDealerPage } from './assign-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: AssignDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignDealerPageRoutingModule {}
