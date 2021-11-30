import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunicationListPageRoutingModule } from './communication-list-routing.module';

import { CommunicationListPage } from './communication-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunicationListPageRoutingModule
  ],
  declarations: [CommunicationListPage]
})
export class CommunicationListPageModule {}
