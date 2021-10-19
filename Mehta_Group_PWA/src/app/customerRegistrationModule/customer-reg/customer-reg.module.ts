import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerRegPageRoutingModule } from './customer-reg-routing.module';

import { CustomerRegPage } from './customer-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerRegPageRoutingModule
  ],
  declarations: [CustomerRegPage]
})
export class CustomerRegPageModule {}
