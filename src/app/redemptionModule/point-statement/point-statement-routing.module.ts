import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointStatementPage } from './point-statement.page';

const routes: Routes = [
  {
    path: '',
    component: PointStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointStatementPageRoutingModule {}
