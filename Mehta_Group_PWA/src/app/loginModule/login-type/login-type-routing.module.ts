import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginTypePage } from './login-type.page';

const routes: Routes = [
  {
    path: '',
    component: LoginTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginTypePageRoutingModule {}
