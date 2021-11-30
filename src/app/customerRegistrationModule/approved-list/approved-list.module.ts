import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedListPageRoutingModule } from './approved-list-routing.module';

import { ApprovedListPage } from './approved-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedListPageRoutingModule
  ],
  declarations: [ApprovedListPage]
})
export class ApprovedListPageModule {}
