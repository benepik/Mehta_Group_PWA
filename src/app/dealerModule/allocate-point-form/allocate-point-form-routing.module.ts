import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllocatePointFormPage } from './allocate-point-form.page';

const routes: Routes = [
  {
    path: '',
    component: AllocatePointFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllocatePointFormPageRoutingModule {}
