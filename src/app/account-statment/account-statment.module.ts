import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountStatmentPageRoutingModule } from './account-statment-routing.module';

import { AccountStatmentPage } from './account-statment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountStatmentPageRoutingModule
  ],
  declarations: [AccountStatmentPage]
})
export class AccountStatmentPageModule {}
