import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicationDetailPage } from './communication-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CommunicationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationDetailPageRoutingModule {}
