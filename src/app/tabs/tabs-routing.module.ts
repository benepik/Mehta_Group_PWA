import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    //   {
    //     path: '',
    //     loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    // },
      {
          path: 'home',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
        {
          path: 'profile',
          loadChildren: () => import('../profileModule/profile/profile.module').then( m => m.ProfilePageModule)
        },
        {
          path: 'customer-allocation',
          loadChildren: () => import('../dealerModule/customer-allocation/customer-allocation.module').then( m => m.CustomerAllocationPageModule)
        },
        {
          path: 'orders',
          loadChildren: () => import('../orderModule/orders/orders.module').then( m => m.OrdersPageModule)
        },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/app/login',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
