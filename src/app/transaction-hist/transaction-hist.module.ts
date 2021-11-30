import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionHistPageRoutingModule } from './transaction-hist-routing.module';

import { TransactionHistPage } from './transaction-hist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionHistPageRoutingModule
  ],
  declarations: [TransactionHistPage]
})
export class TransactionHistPageModule {}
