import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpSupportListPageRoutingModule } from './help-support-list-routing.module';

import { HelpSupportListPage } from './help-support-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpSupportListPageRoutingModule
  ],
  declarations: [HelpSupportListPage]
})
export class HelpSupportListPageModule {}
