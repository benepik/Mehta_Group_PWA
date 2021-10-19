import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicationListPage } from './communication-list.page';

const routes: Routes = [
  {
    path: '',
    component: CommunicationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationListPageRoutingModule {}
