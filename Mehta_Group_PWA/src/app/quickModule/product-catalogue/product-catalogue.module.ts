import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCataloguePageRoutingModule } from './product-catalogue-routing.module';

import { ProductCataloguePage } from './product-catalogue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCataloguePageRoutingModule
  ],
  declarations: [ProductCataloguePage]
})
export class ProductCataloguePageModule {}
