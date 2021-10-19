import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointsgiftlistPage } from './pointsgiftlist.page';

const routes: Routes = [
  {
    path: '',
    component: PointsgiftlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointsgiftlistPageRoutingModule {}
