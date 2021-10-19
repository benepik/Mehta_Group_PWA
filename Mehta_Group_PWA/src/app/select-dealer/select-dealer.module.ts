import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDealerPageRoutingModule } from './select-dealer-routing.module';

import { SelectDealerPage } from './select-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDealerPageRoutingModule
  ],
  declarations: [SelectDealerPage]
})
export class SelectDealerPageModule {}
