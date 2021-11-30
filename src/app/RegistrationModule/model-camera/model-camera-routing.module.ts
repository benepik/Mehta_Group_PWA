import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelCameraPage } from './model-camera.page';

const routes: Routes = [
  {
    path: '',
    component: ModelCameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelCameraPageRoutingModule {}
