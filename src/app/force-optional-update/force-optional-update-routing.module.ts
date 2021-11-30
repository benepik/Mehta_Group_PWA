import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForceOptionalUpdatePage } from './force-optional-update.page';

const routes: Routes = [
  {
    path: '',
    component: ForceOptionalUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForceOptionalUpdatePageRoutingModule {}
