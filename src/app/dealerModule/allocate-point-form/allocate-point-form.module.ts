import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllocatePointFormPageRoutingModule } from './allocate-point-form-routing.module';

import { AllocatePointFormPage } from './allocate-point-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllocatePointFormPageRoutingModule
  ],
  declarations: [AllocatePointFormPage]
})
export class AllocatePointFormPageModule {}
