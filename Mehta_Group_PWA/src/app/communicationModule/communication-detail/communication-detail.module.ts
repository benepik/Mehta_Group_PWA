import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunicationDetailPageRoutingModule } from './communication-detail-routing.module';

import { CommunicationDetailPage } from './communication-detail.page';
import { PipesModule } from 'pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunicationDetailPageRoutingModule,PipesModule
  ],
  declarations: [CommunicationDetailPage]
})
export class CommunicationDetailPageModule {}
