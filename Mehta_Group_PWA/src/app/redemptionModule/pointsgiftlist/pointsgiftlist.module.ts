import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointsgiftlistPageRoutingModule } from './pointsgiftlist-routing.module';

import { PointsgiftlistPage } from './pointsgiftlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointsgiftlistPageRoutingModule
  ],
  declarations: [PointsgiftlistPage]
})
export class PointsgiftlistPageModule {}
