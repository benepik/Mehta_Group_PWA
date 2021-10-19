import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCataloguePage } from './product-catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCataloguePageRoutingModule {}
