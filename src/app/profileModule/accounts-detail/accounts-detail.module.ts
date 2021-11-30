import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsDetailPageRoutingModule } from './accounts-detail-routing.module';

import { AccountsDetailPage } from './accounts-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountsDetailPageRoutingModule
  ],
  declarations: [AccountsDetailPage]
})
export class AccountsDetailPageModule {}
