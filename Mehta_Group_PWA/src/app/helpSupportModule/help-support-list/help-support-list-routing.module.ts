import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpSupportListPage } from './help-support-list.page';

const routes: Routes = [
  {
    path: '',
    component: HelpSupportListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpSupportListPageRoutingModule {}
