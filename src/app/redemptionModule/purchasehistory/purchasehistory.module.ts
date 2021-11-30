import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasehistoryPageRoutingModule } from './purchasehistory-routing.module';

import { PurchasehistoryPage } from './purchasehistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchasehistoryPageRoutingModule
  ],
  declarations: [PurchasehistoryPage]
})
export class PurchasehistoryPageModule {}
