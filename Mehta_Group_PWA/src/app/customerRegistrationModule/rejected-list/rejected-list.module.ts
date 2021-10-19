import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedListPageRoutingModule } from './rejected-list-routing.module';

import { RejectedListPage } from './rejected-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedListPageRoutingModule
  ],
  declarations: [RejectedListPage]
})
export class RejectedListPageModule {}
