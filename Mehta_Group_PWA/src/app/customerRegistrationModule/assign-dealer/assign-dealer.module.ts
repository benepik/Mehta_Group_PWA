import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignDealerPageRoutingModule } from './assign-dealer-routing.module';

import { AssignDealerPage } from './assign-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignDealerPageRoutingModule
  ],
  declarations: [AssignDealerPage]
})
export class AssignDealerPageModule {}
