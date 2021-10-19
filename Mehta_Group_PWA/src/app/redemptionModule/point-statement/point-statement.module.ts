import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointStatementPageRoutingModule } from './point-statement-routing.module';

import { PointStatementPage } from './point-statement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointStatementPageRoutingModule
  ],
  declarations: [PointStatementPage]
})
export class PointStatementPageModule {}
