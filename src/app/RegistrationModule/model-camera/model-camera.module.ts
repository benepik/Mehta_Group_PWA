import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelCameraPageRoutingModule } from './model-camera-routing.module';

import { ModelCameraPage } from './model-camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelCameraPageRoutingModule
  ],
  declarations: [ModelCameraPage]
})
export class ModelCameraPageModule {}
