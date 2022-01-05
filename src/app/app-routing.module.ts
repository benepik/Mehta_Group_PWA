import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: '*',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },

  {
    path: 'login-type',
    loadChildren: () => import('./loginModule/login-type/login-type.module').then( m => m.LoginTypePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profileModule/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'customer-allocation',
    loadChildren: () => import('./dealerModule/customer-allocation/customer-allocation.module').then( m => m.CustomerAllocationPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orderModule/orders/orders.module').then( m => m.OrdersPageModule)
  },



  {
    path: 'communication-list',
    loadChildren: () => import('./communicationModule/communication-list/communication-list.module').then( m => m.CommunicationListPageModule)
  },
  {
    path: 'communication-detail',
    loadChildren: () => import('./communicationModule/communication-detail/communication-detail.module').then( m => m.CommunicationDetailPageModule)
  },
  {
    path: 'accounts-detail',
    loadChildren: () => import('./profileModule/accounts-detail/accounts-detail.module').then( m => m.AccountsDetailPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./profileModule/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'account-statment',
    loadChildren: () => import('./account-statment/account-statment.module').then( m => m.AccountStatmentPageModule)
  },
  {
    path: 'help-support-list',
    loadChildren: () => import('./helpSupportModule/help-support-list/help-support-list.module').then( m => m.HelpSupportListPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./helpSupportModule/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./helpSupportModule/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
   //chandan working start
  {
    path: 'language',
    loadChildren: () => import('./RegistrationModule/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./RegistrationModule/mobile/mobile.module').then( m => m.MobilePageModule)
  },
  {
    path: 'otpverify',
    loadChildren: () => import('./RegistrationModule/otpverify/otpverify.module').then( m => m.OtpverifyPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./RegistrationModule/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'profile-upload',
    loadChildren: () => import('./RegistrationModule/profile-upload/profile-upload.module').then( m => m.ProfileUploadPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./RegistrationModule/geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./RegistrationModule/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'customer-reg',
    loadChildren: () => import('./customerRegistrationModule/customer-reg/customer-reg.module').then( m => m.CustomerRegPageModule)
  },
  {
    path: 'approved-list',
    loadChildren: () => import('./customerRegistrationModule/approved-list/approved-list.module').then( m => m.ApprovedListPageModule)
  },
  {
    path: 'rejected-list',
    loadChildren: () => import('./customerRegistrationModule/rejected-list/rejected-list.module').then( m => m.RejectedListPageModule)
  },
  {
    path: 'dealer-list',
    loadChildren: () => import('./dealerModule/dealer-list/dealer-list.module').then( m => m.DealerListPageModule)
  },
  {
    path: 'profile-view',
    loadChildren: () => import('./dealerModule/profile-view/profile-view.module').then( m => m.ProfileViewPageModule)
  },
  {
    path: 'customer-list',
    loadChildren: () => import('./dealerModule/customer-list/customer-list.module').then( m => m.CustomerListPageModule)
  },
  {
    path: 'customer-details',
    loadChildren: () => import('./dealerModule/customer-details/customer-details.module').then( m => m.CustomerDetailsPageModule)
  },
  {
    path: 'redemption-report',
    loadChildren: () => import('./redemptionModule/redemption-report/redemption-report.module').then( m => m.RedemptionReportPageModule)
  },
  {
    path: 'dealer-allocat',
    loadChildren: () => import('./dealer-allocat/dealer-allocat.module').then( m => m.DealerAllocatPageModule)
  },
 
  {
    path: 'point-statement',
    loadChildren: () => import('./redemptionModule/point-statement/point-statement.module').then( m => m.PointStatementPageModule)
  },
  {
    path: 'assign-dealer',
    loadChildren: () => import('./customerRegistrationModule/assign-dealer/assign-dealer.module').then( m => m.AssignDealerPageModule)
  },
  {
    path: 'model-camera',
    loadChildren: () => import('./RegistrationModule/model-camera/model-camera.module').then( m => m.ModelCameraPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./profileModule/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./profileModule/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'allocate-point-form',
    loadChildren: () => import('./dealerModule/allocate-point-form/allocate-point-form.module').then( m => m.AllocatePointFormPageModule)
  },
  {
    path: 'redeemotp',
    loadChildren: () => import('./redemptionModule/redeemotp/redeemotp.module').then( m => m.RedeemotpPageModule)
  },
  {
    path: 'admin-approval',
    loadChildren: () => import('./RegistrationModule/admin-approval/admin-approval.module').then( m => m.AdminApprovalPageModule)
  },
  {
    path: 'appove-reject-reedemption',
    loadChildren: () => import('./orderModule/appove-reject-reedemption/appove-reject-reedemption.module').then( m => m.AppoveRejectReedemptionPageModule)
  },
  {
    path: 'orderdetails',
    loadChildren: () => import('./orderModule/orderdetails/orderdetails.module').then( m => m.OrderdetailsPageModule)
  },
  {
    path: 'redeemotp',
    loadChildren: () => import('./redemptionModule/redeemotp/redeemotp.module').then( m => m.RedeemotpPageModule)
  },
  {
    path: 'buyitem',
    loadChildren: () => import('./redemptionModule/buyitem/buyitem.module').then( m => m.BuyitemPageModule)
  },
  {
    path: 'itemdetail',
    loadChildren: () => import('./redemptionModule/itemdetail/itemdetail.module').then( m => m.ItemdetailPageModule)
  },
  {
    path: 'pointsgiftlist',
    loadChildren: () => import('./redemptionModule/pointsgiftlist/pointsgiftlist.module').then( m => m.PointsgiftlistPageModule)
  },
  {
    path: 'purchasehistory',
    loadChildren: () => import('./redemptionModule/purchasehistory/purchasehistory.module').then( m => m.PurchasehistoryPageModule)
  },
  {
    path: 'select-address',
    loadChildren: () => import('./redemptionModule/select-address/select-address.module').then( m => m.SelectAddressPageModule)
  },
  {
    path: 'point-statement',
    loadChildren: () => import('./redemptionModule/point-statement/point-statement.module').then( m => m.PointStatementPageModule)
  },
  {
    path: 'redemption-report',
    loadChildren: () => import('./redemptionModule/redemption-report/redemption-report.module').then( m => m.RedemptionReportPageModule)
  },
  {
    path: 'change-address',
    loadChildren: () => import('./redemptionModule/change-address/change-address.module').then( m => m.ChangeAddressPageModule)
  },
  {
    path: 'transaction-hist',
    loadChildren: () => import('./transaction-hist/transaction-hist.module').then( m => m.TransactionHistPageModule)
  },
  {
    path: 'product-catalogue',
    loadChildren: () => import('./quickModule/product-catalogue/product-catalogue.module').then( m => m.ProductCataloguePageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./quickModule/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'image-zoom',
    loadChildren: () => import('./image-zoom/image-zoom.module').then( m => m.ImageZoomPageModule)
  },
  {
    path: 'polls',
    loadChildren: () => import('./quickModule/polls/polls.module').then( m => m.PollsPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./office_report/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'select-dealer',
    loadChildren: () => import('./select-dealer/select-dealer.module').then( m => m.SelectDealerPageModule)
  },
  {
    path: 'alert-list',
    loadChildren: () => import('./alert-list/alert-list.module').then( m => m.AlertListPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'force-optional-update',
    loadChildren: () => import('./force-optional-update/force-optional-update.module').then( m => m.ForceOptionalUpdatePageModule)
  },
  {
    path: 'redeemfilter',
    loadChildren: () => import('./redeemfilter/redeemfilter.module').then( m => m.RedeemfilterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
