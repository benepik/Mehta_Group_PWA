import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealerAllocatPageRoutingModule } from './dealer-allocat-routing.module';

import { DealerAllocatPage } from './dealer-allocat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealerAllocatPageRoutingModule
  ],
  declarations: [DealerAllocatPage]
})
export class DealerAllocatPageModule {}
