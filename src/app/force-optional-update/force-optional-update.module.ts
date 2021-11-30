import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForceOptionalUpdatePageRoutingModule } from './force-optional-update-routing.module';

import { ForceOptionalUpdatePage } from './force-optional-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForceOptionalUpdatePageRoutingModule
  ],
  declarations: [ForceOptionalUpdatePage]
})
export class ForceOptionalUpdatePageModule {}
