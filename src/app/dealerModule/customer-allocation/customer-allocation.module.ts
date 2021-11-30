import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerAllocationPageRoutingModule } from './customer-allocation-routing.module';

import { CustomerAllocationPage } from './customer-allocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerAllocationPageRoutingModule
  ],
  declarations: [CustomerAllocationPage]
})
export class CustomerAllocationPageModule {}
