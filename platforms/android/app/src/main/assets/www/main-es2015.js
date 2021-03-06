(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    // {
    //   path: '*',
    //   redirectTo: 'login',
    //   pathMatch: 'full'
    // },
    {
        path: 'login-type',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_loginModule_login-type_login-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./loginModule/login-type/login-type.module */ 28780)).then(m => m.LoginTypePageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("default-src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profileModule/profile/profile.module */ 58063)).then(m => m.ProfilePageModule)
    },
    {
        path: 'customer-allocation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dealerModule_customer-allocation_customer-allocation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dealerModule/customer-allocation/customer-allocation.module */ 71689)).then(m => m.CustomerAllocationPageModule)
    },
    {
        path: 'orders',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_orderModule_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./orderModule/orders/orders.module */ 8844)).then(m => m.OrdersPageModule)
    },
    {
        path: 'communication-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_communicationModule_communication-list_communication-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./communicationModule/communication-list/communication-list.module */ 27028)).then(m => m.CommunicationListPageModule)
    },
    {
        path: 'communication-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_communicationModule_communication-detail_communication-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./communicationModule/communication-detail/communication-detail.module */ 26297)).then(m => m.CommunicationDetailPageModule)
    },
    {
        path: 'accounts-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profileModule_accounts-detail_accounts-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profileModule/accounts-detail/accounts-detail.module */ 68938)).then(m => m.AccountsDetailPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profileModule_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profileModule/settings/settings.module */ 8254)).then(m => m.SettingsPageModule)
    },
    {
        path: 'account-statment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account-statment_account-statment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account-statment/account-statment.module */ 61800)).then(m => m.AccountStatmentPageModule)
    },
    {
        path: 'help-support-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_helpSupportModule_help-support-list_help-support-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./helpSupportModule/help-support-list/help-support-list.module */ 74246)).then(m => m.HelpSupportListPageModule)
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_helpSupportModule_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./helpSupportModule/faq/faq.module */ 64621)).then(m => m.FaqPageModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_helpSupportModule_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./helpSupportModule/contact-us/contact-us.module */ 67048)).then(m => m.ContactUsPageModule)
    },
    //chandan working start
    {
        path: 'language',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_RegistrationModule_language_language_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/language/language.module */ 83224)).then(m => m.LanguagePageModule)
    },
    {
        path: 'mobile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_RegistrationModule_mobile_mobile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/mobile/mobile.module */ 67150)).then(m => m.MobilePageModule)
    },
    {
        path: 'otpverify',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_RegistrationModule_otpverify_otpverify_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/otpverify/otpverify.module */ 10533)).then(m => m.OtpverifyPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_registration_registration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/registration/registration.module */ 61683)).then(m => m.RegistrationPageModule)
    },
    {
        path: 'profile-upload',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_profile-upload_profile-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/profile-upload/profile-upload.module */ 78140)).then(m => m.ProfileUploadPageModule)
    },
    {
        path: 'geolocation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_RegistrationModule_geolocation_geolocation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/geolocation/geolocation.module */ 45967)).then(m => m.GeolocationPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_RegistrationModule_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/login/login.module */ 11933)).then(m => m.LoginPageModule)
    },
    {
        path: 'customer-reg',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_customerRegistrationModule_customer-reg_customer-reg_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./customerRegistrationModule/customer-reg/customer-reg.module */ 68786)).then(m => m.CustomerRegPageModule)
    },
    {
        path: 'approved-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_customerRegistrationModule_approved-list_approved-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./customerRegistrationModule/approved-list/approved-list.module */ 85981)).then(m => m.ApprovedListPageModule)
    },
    {
        path: 'rejected-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_customerRegistrationModule_rejected-list_rejected-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./customerRegistrationModule/rejected-list/rejected-list.module */ 5507)).then(m => m.RejectedListPageModule)
    },
    {
        path: 'dealer-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dealerModule_dealer-list_dealer-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dealerModule/dealer-list/dealer-list.module */ 35869)).then(m => m.DealerListPageModule)
    },
    {
        path: 'profile-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dealerModule_profile-view_profile-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dealerModule/profile-view/profile-view.module */ 89395)).then(m => m.ProfileViewPageModule)
    },
    {
        path: 'customer-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dealerModule_customer-list_customer-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dealerModule/customer-list/customer-list.module */ 79440)).then(m => m.CustomerListPageModule)
    },
    {
        path: 'customer-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dealerModule_customer-details_customer-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dealerModule/customer-details/customer-details.module */ 64358)).then(m => m.CustomerDetailsPageModule)
    },
    {
        path: 'redemption-report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_redemption-report_redemption-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/redemption-report/redemption-report.module */ 51092)).then(m => m.RedemptionReportPageModule)
    },
    {
        path: 'dealer-allocat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dealer-allocat_dealer-allocat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dealer-allocat/dealer-allocat.module */ 74150)).then(m => m.DealerAllocatPageModule)
    },
    {
        path: 'point-statement',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_point-statement_point-statement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/point-statement/point-statement.module */ 57109)).then(m => m.PointStatementPageModule)
    },
    {
        path: 'assign-dealer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_customerRegistrationModule_assign-dealer_assign-dealer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./customerRegistrationModule/assign-dealer/assign-dealer.module */ 84866)).then(m => m.AssignDealerPageModule)
    },
    {
        path: 'model-camera',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_model-camera_model-camera_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/model-camera/model-camera.module */ 67233)).then(m => m.ModelCameraPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profileModule_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profileModule/privacy-policy/privacy-policy.module */ 95312)).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profileModule_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profileModule/terms-conditions/terms-conditions.module */ 3625)).then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'allocate-point-form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dealerModule_allocate-point-form_allocate-point-form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dealerModule/allocate-point-form/allocate-point-form.module */ 7926)).then(m => m.AllocatePointFormPageModule)
    },
    {
        path: 'redeemotp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_redeemotp_redeemotp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/redeemotp/redeemotp.module */ 14326)).then(m => m.RedeemotpPageModule)
    },
    {
        path: 'admin-approval',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_RegistrationModule_admin-approval_admin-approval_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationModule/admin-approval/admin-approval.module */ 72091)).then(m => m.AdminApprovalPageModule)
    },
    {
        path: 'appove-reject-reedemption',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_orderModule_appove-reject-reedemption_appove-reject-reedemption_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./orderModule/appove-reject-reedemption/appove-reject-reedemption.module */ 74177)).then(m => m.AppoveRejectReedemptionPageModule)
    },
    {
        path: 'orderdetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_orderModule_orderdetails_orderdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./orderModule/orderdetails/orderdetails.module */ 74590)).then(m => m.OrderdetailsPageModule)
    },
    {
        path: 'redeemotp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_redeemotp_redeemotp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/redeemotp/redeemotp.module */ 14326)).then(m => m.RedeemotpPageModule)
    },
    {
        path: 'buyitem',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_buyitem_buyitem_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/buyitem/buyitem.module */ 12402)).then(m => m.BuyitemPageModule)
    },
    {
        path: 'itemdetail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_itemdetail_itemdetail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/itemdetail/itemdetail.module */ 43723)).then(m => m.ItemdetailPageModule)
    },
    {
        path: 'pointsgiftlist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_pointsgiftlist_pointsgiftlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/pointsgiftlist/pointsgiftlist.module */ 61321)).then(m => m.PointsgiftlistPageModule)
    },
    {
        path: 'purchasehistory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_purchasehistory_purchasehistory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/purchasehistory/purchasehistory.module */ 9258)).then(m => m.PurchasehistoryPageModule)
    },
    {
        path: 'select-address',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_select-address_select-address_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/select-address/select-address.module */ 38423)).then(m => m.SelectAddressPageModule)
    },
    {
        path: 'point-statement',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_point-statement_point-statement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/point-statement/point-statement.module */ 57109)).then(m => m.PointStatementPageModule)
    },
    {
        path: 'redemption-report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_redemption-report_redemption-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/redemption-report/redemption-report.module */ 51092)).then(m => m.RedemptionReportPageModule)
    },
    {
        path: 'change-address',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redemptionModule_change-address_change-address_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redemptionModule/change-address/change-address.module */ 51504)).then(m => m.ChangeAddressPageModule)
    },
    {
        path: 'transaction-hist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transaction-hist_transaction-hist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transaction-hist/transaction-hist.module */ 52860)).then(m => m.TransactionHistPageModule)
    },
    {
        path: 'product-catalogue',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quickModule_product-catalogue_product-catalogue_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quickModule/product-catalogue/product-catalogue.module */ 2911)).then(m => m.ProductCataloguePageModule)
    },
    {
        path: 'product-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_quickModule_product-detail_product-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./quickModule/product-detail/product-detail.module */ 68658)).then(m => m.ProductDetailPageModule)
    },
    {
        path: 'image-zoom',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_image-zoom_image-zoom_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./image-zoom/image-zoom.module */ 87421)).then(m => m.ImageZoomPageModule)
    },
    {
        path: 'polls',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quickModule_polls_polls_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quickModule/polls/polls.module */ 889)).then(m => m.PollsPageModule)
    },
    {
        path: 'user-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_office_report_user-list_user-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./office_report/user-list/user-list.module */ 20358)).then(m => m.UserListPageModule)
    },
    {
        path: 'select-dealer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_select-dealer_select-dealer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./select-dealer/select-dealer.module */ 72639)).then(m => m.SelectDealerPageModule)
    },
    {
        path: 'alert-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_alert-list_alert-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./alert-list/alert-list.module */ 83951)).then(m => m.AlertListPageModule)
    },
    {
        path: 'maintenance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_maintenance_maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maintenance/maintenance.module */ 84099)).then(m => m.MaintenancePageModule)
    },
    {
        path: 'force-optional-update',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_force-optional-update_force-optional-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./force-optional-update/force-optional-update.module */ 39544)).then(m => m.ForceOptionalUpdatePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider/api.service */ 14303);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/local-storage.service */ 18345);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data-transfer.service */ 51532);
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ 30582);















let AppComponent = class AppComponent {
    constructor(platform, localStorage, loc, zone, apiService, route, device_id, sendData, alertController, splashScreen, fcm, statusBar) {
        this.platform = platform;
        this.localStorage = localStorage;
        this.loc = loc;
        this.zone = zone;
        this.apiService = apiService;
        this.route = route;
        this.device_id = device_id;
        this.sendData = sendData;
        this.alertController = alertController;
        this.splashScreen = splashScreen;
        this.fcm = fcm;
        this.statusBar = statusBar;
        this.isDesktop = false;
        this.localStorage.createDB();
        this.initializeApp();
        document.querySelector('body').style.setProperty('--headerColor', '#B01D22');
        document.querySelector('body').style.setProperty('--backgroundColor', ' #F2F4F5');
        document.querySelector('body').style.setProperty('--reedeemColor', '  #FEBA12');
    }
    ionViewWillEnter() {
        //  this.initializeApp();
    }
    ngOnInit() {
        this.isDesktop = this.platform.is('desktop');
        this.route.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivationStart && e.snapshot.outlet === "administration")
                this.outlet.deactivate();
        });
        // this.maintance();
        // this.backButtonEvent();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // if (this.platform.is("cordova")) {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            // this.fcmActivity()
            this.generateDeviceId();
            this.apiService.generateFCMToken();
            this.maintance();
        });
    }
    fcmActivity() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.fcm.subscribeToTopic('marketing');
            this.fcm.getToken().then(token => {
                console.log('appcomponent fcm push getToken==> ', JSON.stringify(token));
            }, error => {
                console.log('appcomponent fcm push getToken error==> ', JSON.stringify(error));
            });
            this.fcm.onNotification().subscribe(data => {
                if (data.wasTapped) {
                    console.log("appcomponent Received in background");
                }
                else {
                    console.log("appcomponent Received in foreground");
                }
                ;
            }, error => {
                console.log('appcomponent fcm push onnotification error==> ', JSON.stringify(error));
            });
            this.fcm.onTokenRefresh().subscribe(token => {
                console.log('appcomponent fcm push getToken==> ', JSON.stringify(token));
            }, error => {
                console.log('appcomponent fcm push onTokenRefesh error==> ', JSON.stringify(error));
            });
            this.fcm.hasPermission().then(hasPermission => {
                if (hasPermission) {
                    console.log("appcomponent Has permission!");
                }
                else {
                    this.fcm.requestPushPermissionIOS().then(res => {
                        console.log('appcomponent fcm push permission==> ', JSON.stringify(res));
                    }, (error) => {
                        console.log('appcomponent fcm push permission error==> ', JSON.stringify(error));
                    });
                }
            }, error => {
                console.log('appcomponent fcm push hasPermission error==> ', JSON.stringify(error));
                this.fcm.requestPushPermissionIOS().then(res => {
                    console.log('appcomponent fcm push permission==> ', JSON.stringify(res));
                }, (error) => {
                    console.log('appcomponent fcm push permission error==> ', JSON.stringify(error));
                });
            });
        });
    }
    generateDeviceId() {
        if (this.platform.is("cordova")) {
            console.log("call FCM /DeviceId 12");
            let deviceUuid = this.device_id.uuid;
            console.log('device id==>' + deviceUuid);
            this.deviceId = deviceUuid == null ? "browser" : deviceUuid;
            // alert('2'+this.deviceId);
            if (this.deviceId == "browser") {
                let deviceUuid = this.device_id.uuid;
                this.deviceId = deviceUuid == null ? "browser" : deviceUuid;
                if (this.deviceId == "browser") {
                    let deviceUuid = this.device_id.uuid;
                    this.deviceId = deviceUuid == null ? "browser" : deviceUuid;
                    this.localStorage.setStorage('deviceId', this.deviceId);
                }
                else {
                    this.localStorage.setStorage('deviceId', this.deviceId);
                }
            }
            else {
                this.localStorage.setStorage('deviceId', this.deviceId);
            }
        }
        else {
            console.log("call FCM /DeviceId 123");
            this.localStorage.setStorage('deviceId', 'PWA');
            console.log("call FCM /DeviceId 121", this.deviceId);
        }
    }
    showExitConfirm() {
        this.alertController.create({
            header: 'App termination',
            message: 'Do you want to close the app?',
            backdropDismiss: false,
            buttons: [{
                    text: 'Stay',
                    role: 'cancel',
                    handler: () => {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Exit',
                    handler: () => {
                        navigator['app'].exitApp();
                    }
                }]
        })
            .then(alert => {
            alert.present();
        });
    }
    maintance() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.localStorage.getStorage().then((storedData) => {
                console.log('localStorage storedData storedData000', storedData);
            });
            this.zone.run(() => {
                let apiKey = {};
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_2__.URLS.maintanceUrl, apiKey).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    if (result.success == 1 || result.success == '1') {
                        this.maintanceData = result;
                        yield this.localStorage.setStorage('maintainanceData', result);
                        yield this.localStorage.getStorage().then((storedData) => {
                            console.log('localStorage storedData storedData', storedData);
                            if (storedData && storedData.allStoreData != undefined) {
                                // this.route.navigate(['/tabs']);
                                console.log('localStorage storedData', storedData);
                                // window.location.assign('/tabs');
                                this.route.navigateByUrl('/tabs/home');
                            }
                            else {
                                console.log('localStorage storedData maintance', storedData);
                                this.maintanceData = storedData.maintainanceData;
                                this.route.navigate(['/login']);
                            }
                        });
                        if (result.data.is_down == 1 || result.data.is_down == '1') {
                            this.sendData.myParam = result.maintainence_data;
                            this.route.navigate(["/maintenance"]);
                            //for maintance redirection page
                        }
                    }
                    else {
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }), err => {
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.PlatformLocation },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone },
    { type: _provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__.Device },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__.DataTransferService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__.FCM },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar }
];
AppComponent.propDecorators = {
    routerOutlets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet,] }],
    outlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChildren, args: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet,] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/service-worker */ 72249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 59865);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ 30582);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-clipboard */ 50948);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 34255);
























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_20__.ClipboardModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_21__.IonicStorageModule.forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicRouteStrategy },
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__.InAppBrowser, _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__.Device,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__.FileTransfer, _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__.FCM, _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__.Diagnostic,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__.Geolocation, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__.NativeGeocoder,
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__.FilePath
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 81343:
/*!***********************************************!*\
  !*** ./src/app/image-zoom/image-zoom.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageZoomPage": function() { return /* binding */ ImageZoomPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-zoom.page.html */ 47674);
/* harmony import */ var _image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-zoom.page.scss */ 32968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 18345);






let ImageZoomPage = class ImageZoomPage {
    constructor(navParams, modalCtrl, localStorage) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.localStorage = localStorage;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            zoom: {
                minRatio: 1,
                maxRatio: 3,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        };
        this.localStorage.getStorage().then(result => {
            this.loginUserData = result.allStoreData;
        });
    }
    ionViewWillEnter() {
        this.slides.lockSwipes(true);
    }
    ngOnInit() {
        console.table(this.navParams);
        this.zoomData = this.navParams.data.data;
        console.log('img==> ', this.zoomData);
    }
    dismiss() {
        this.modalCtrl.dismiss();
        this.slides.lockSwipes(false);
    }
    download() {
    }
};
ImageZoomPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
ImageZoomPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides,] }]
};
ImageZoomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImageZoomPage);



/***/ }),

/***/ 14303:
/*!*****************************************!*\
  !*** ./src/app/provider/api.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local-storage.service */ 18345);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ 30582);
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data-transfer.service */ 51532);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);













let ApiService = class ApiService {
    constructor(http, loadingCtrl, toastController, localStorage, iab, alertController, device_id, platform, fcm, sendData, router) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.localStorage = localStorage;
        this.iab = iab;
        this.alertController = alertController;
        this.device_id = device_id;
        this.platform = platform;
        this.fcm = fcm;
        this.sendData = sendData;
        this.router = router;
        this.fcmGenerationRetryCount = 0;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes', //Windows only
        };
        this.forceUpdateCount = 1;
        this.pushIsinBackground = false;
    }
    get device() {
        if (this.platform.is("ios")) {
            return "3";
        }
        else if (this.platform.is("android")) {
            return "2";
        }
        else {
            return "4";
            // return "2";
        }
    }
    ;
    apiCallWithLoginToken(url, data) {
        console.log("22url==", url);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.localStorage.getStorage()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((storedData) => {
            console.log("Shivanshi local storage data==", storedData);
            data["client_id"] = src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.clientId;
            data["device"] = this.device;
            data["app_version"] = src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.app_version;
            data["device_id"] = storedData.deviceId;
            var loginToken;
            if (storedData && storedData.allStoreData) {
                console.log("Shivanshi allStoreData==", storedData.allStoreData);
                data["employee_id"] = storedData.allStoreData.user_id;
                data["user_type"] = storedData.allStoreData.employee_type;
                loginToken = storedData.allStoreData.login_token;
                console.log('Shivanshi login token', loginToken);
            }
            else {
                loginToken = "";
                console.log('login token response', loginToken);
            }
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
                    "Content-Type": "application/json",
                    Authorization: loginToken
                }),
            };
            console.log('Shivanshi request options', httpOptions);
            console.log('Shivanshi request url', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url);
            console.log('Shivanshi request data', data);
            // alert('Shivanshi url==> '+URLS.baseUrl+url);
            // alert('Shivanshi tokens==> '+JSON.stringify(loginToken));
            // alert('Shivanshi data==> '+JSON.stringify(data));
            return this.http.post(src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url, data, httpOptions)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError));
        }));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)("Something bad happened, please try again later.");
    }
    showToastMessage(msg, pos, time, bgClassName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (msg == '') {
            }
            else {
                console.log("toastMessage color==", bgClassName);
                const toast = yield this.toastController.create({
                    message: msg,
                    position: pos,
                    duration: time,
                    cssClass: bgClassName
                });
                toast.present();
            }
        });
    }
    presentLoadingDefault() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: '',
                cssClass: 'loader-waiting',
                duration: 2000
            });
            yield this.loading.present();
            // const { role, data } = await loading.onDidDismiss();
            // console.log('Loading dismissed!');
        });
    }
    generateDeviceId() {
        if (this.platform.is("cordova")) {
            console.log("call FCM /DeviceId 12");
            let deviceUuid = this.device_id.uuid;
            this.deviceId = deviceUuid == null ? "browser" : deviceUuid;
            if (this.deviceId == "browser") {
                let deviceUuid = this.device_id.uuid;
                this.deviceId = deviceUuid == null ? "browser" : deviceUuid;
                if (this.deviceId == "browser") {
                    let deviceUuid = this.device_id.uuid;
                    this.deviceId = deviceUuid == null ? "browser" : deviceUuid;
                    this.localStorage.setStorage('deviceId', this.deviceId);
                }
                else {
                    this.localStorage.setStorage('deviceId', this.deviceId);
                }
            }
            else {
                this.localStorage.setStorage('deviceId', this.deviceId);
            }
        }
        else {
            console.log("call FCM /DeviceId 123");
            this.localStorage.setStorage('deviceId', 'PWA');
        }
    }
    presentLoadingClose() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
            // console.log('Loading dismissed!');
            // await this.loading.getTop().then(loader => {
            //   if (loader) {
            //     loader.dismiss();
            //   }
            // });
        });
    }
    //for media file
    mediaFileUpload(url, formData) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.localStorage.getStorage()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((storedData) => {
            console.log("storedData", storedData);
            formData.append('client_id', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.clientId);
            formData.append('device', this.device);
            formData.append('device_id', storedData.deviceId);
            formData.append('app_version', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.app_version);
            formData.append('employee_id', storedData.allStoreData.user_id);
            formData.append('user_type', storedData.allStoreData.employee_type);
            return this.http.post(src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url, formData, {
                reportProgress: true,
                observe: 'events',
            });
        }));
    }
    generateFCMToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let that = this;
            this.platform.ready().then(() => {
                console.log("call FCM Function==");
                if (this.platform.is("cordova")) {
                    that.fcm.subscribeToTopic('Mehta');
                    console.log("call FCM platform==", that.platform);
                    that.fcm.onNotification().subscribe((data) => {
                        console.log("data receive from server call FCM == ", data);
                        if (data.wasTapped) {
                            console.log("Received in background");
                            that.pushIsinBackground = true;
                            setTimeout(() => {
                                that.checkcondition(data);
                            }, 3000);
                            console.log("call FCM Received in background==", data);
                        }
                        else {
                            console.log("Received in foreground");
                            console.log("call FCM Received in foreground==", data);
                            if (that.platform.is('ios')) {
                                that.pushAlertView(data.aps.alert.title, data.aps.alert.body, data);
                            }
                            else {
                                // that.pushAlertView(data.title+' '+'New Notification', data.body, data);
                                that.pushAlertView(data.title, data.body, data);
                            }
                        }
                        ;
                        that.fcm.unsubscribeFromTopic('Mehta');
                    });
                    this.fcm.getToken().then(token => {
                        console.log("call FCM and get token0==", token);
                        if (token) {
                            this.fcmToken = token;
                            console.log("call FCM If Token==>", this.fcmToken);
                            setTimeout(() => {
                                this.localStorage.setStorage('fcmToken', this.fcmToken);
                            }, 1000);
                            // this.storage.set('fcmToken', this.fcmToken);
                        }
                        else {
                            console.log("call FCM else Token==", token);
                            if (this.fcmGenerationRetryCount <= 2) {
                                this.generateFCMToken();
                                this.fcmGenerationRetryCount = this.fcmGenerationRetryCount + 1;
                            }
                        }
                    });
                    console.log("call FCM and get token1.1==");
                    this.fcm.onTokenRefresh().subscribe(token => {
                        console.log("call FCM and get token1==", token);
                    });
                }
                else {
                    let fcmDummyToken = "PWA";
                    setTimeout(() => {
                        this.localStorage.setStorage('fcmToken', fcmDummyToken);
                    }, 800);
                    // this.storage.set('fcmToken', this.fcmToken);
                    console.log("call FCM static FCM Token==", fcmDummyToken);
                }
            });
        });
    }
    pushAlertView(pushTitle, pushMessage, pushData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: pushTitle,
                message: pushMessage,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ignore',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log("call FCM cancel/Ignore Push Alert==", blah);
                        }
                    }, {
                        text: 'View',
                        handler: () => {
                            console.log("call FCM View/Redirect Push Alert==", pushData);
                            this.checkcondition(pushData);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    checkcondition(pushAllData) {
        console.log("call FCM push redirection data==", pushAllData);
        console.log("call FCM checkConditionData 12==", pushAllData);
        this.sendData.alldata = pushAllData; // this data transfer use for "notice-detail", "hr-policy-detail"
        this.sendData.myParam = pushAllData; // this data transfer use for "communication-detail", "say-cheers-detail"
        this.router.navigate([pushAllData.redirect_page]);
        if (this.pushIsinBackground == true) {
            //hide loader in case of backfround push
            console.log("call FCM App Position in background==", this.pushIsinBackground);
            // this.hideLoader();
        }
        else {
            console.log("call FCM App Position in foreground==", this.pushIsinBackground);
        }
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__.Device },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__.DataTransferService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 51532:
/*!***************************************************!*\
  !*** ./src/app/services/data-transfer.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTransferService": function() { return /* binding */ DataTransferService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image-zoom/image-zoom.page */ 81343);




let DataTransferService = class DataTransferService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    zoomSingleImage(path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__.ImageZoomPage,
                cssClass: 'my-custom-class',
                // swipeToClose: true,
                // mode: 'ios', backdropDismiss: true,
                // presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    data: path,
                },
            });
            return yield modal.present();
        });
    }
    readMoreHTML(str, max, add) {
        console.log('str==> ', str);
        if (str && str.length > max) {
            var tempStr = str.substring(0, max);
            var openAtag = tempStr.split("<a ");
            var closeAtag = tempStr.split("</a>");
            // console.log('openAtag== ', openAtag.length);
            // console.log('closeAtag== ', closeAtag.length);
            if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                // console.log("equal== ", str);
                return str + " " + add;
            }
            else {
                var nextStr = str.substring(max, str.length);
                // console.log("remaining sub string******", nextStr);
                var nextCloseAtagIndex = nextStr.search("</a>");
                // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);
                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4);
                // console.log("final******", str);
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                // console.log("not equal== ", str);
                return str + " " + add;
            }
            // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
            // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);
        }
        else {
            return str;
        }
    }
};
DataTransferService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
DataTransferService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DataTransferService);



/***/ }),

/***/ 18345:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": function() { return /* binding */ LocalStorageService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 43250);


// import { Storage } from "@ionic/storage";

let LocalStorageService = class LocalStorageService {
    constructor(storage) {
        this.storage = storage;
        this._storage = null;
    }
    // async setStorage(key, value){
    //   console.log('localStorage storedData storage data key==> ', key);
    //   console.log('localStorage storedData storage data value==> ', value);
    //  await this.storage.get('allStoreData').then(async (storedData)=>{
    //     console.log('call Fcm storage service2==> ', storedData);  
    //     if(storedData){
    //       storedData[key]=value;
    //      await this.storage.set('allStoreData', storedData).then(res=>{
    //         console.log('storage data==> ', res);
    //       });
    //     }else{
    //       console.log('******==> ', storedData);    
    //       console.log('****** key==> ', key);    
    //       console.log('****** value==> ', value);    
    //       let obj={};
    //       obj[key]=value;
    //       await this.storage.set('allStoreData', obj).then(res=>{
    //         console.log('storage data null obj==> ', res);
    //       });
    //     }
    //   });
    // }
    setStorage(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log('localStorage storedData storage data key==> ', key);
            console.log('localStorage storedData storage data value==> ', value);
            yield this.storage.get('allStoreData').then((storedData) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
                console.log('call Fcm storage service2==> ', storedData);
                if (storedData) {
                    storedData[key] = value;
                    yield this.storage.set('allStoreData', storedData).then(res => {
                        console.log('storage data==> ', res);
                    });
                }
                else {
                    console.log('******==> ', storedData);
                    console.log('****** key==> ', key);
                    console.log('****** value==> ', value);
                    let obj = {};
                    obj[key] = value;
                    yield this.storage.set('allStoreData', obj).then(res => {
                        console.log('storage data null obj==> ', res);
                    });
                }
            }));
        });
    }
    // to get a key/value pair
    getStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get('allStoreData');
                if (result != null) {
                    return result;
                }
                return null;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    // remove a single key value:
    remove(key) {
        this.storage.remove(key);
    }
    //  delete all data from your application:
    clear() {
        this.storage.clear();
    }
    createDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            // If using a custom driver:
            // await this.storage.defineDriver(MyCustomDriver)
            // await this.storage.create();
            const storage = yield this.storage.create();
            this._storage = storage;
        });
    }
};
LocalStorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ 56544:
/*!********************************!*\
  !*** ./src/assets/constant.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URLS": function() { return /* binding */ URLS; },
/* harmony export */   "APP_CONFIG": function() { return /* binding */ APP_CONFIG; }
/* harmony export */ });
const URLS = {
    //***************** Development URL*****************
    MainUrl: "https://benepik.in",
    baseUrl: "https://benepik.in/BandhanRewards/api",
    //***************** UAT URL*****************
    // MainUrl:"https://benepik.org",
    // baseUrl:"https://benepik.org/BandhanRewards/api",
    // ***************** production URL*****************
    // MainUrl:"https://benepik.co.in",
    // baseUrl:"https://benepik.co.in/BandhanRewards/api",
    //pwa
    maintanceUrl: "/maintainence",
    MobileSubmitUrl: "/login",
    otpSubmitUrl: "/otpVerify",
    forceUpdateUrl: "/forceUpdate",
    registrationFormUrl: "/registrationForm",
    registrationFormSubmitUrl: "/saveForm",
    PromotedFeedUrl: "/promotedFeed",
    HomeUrl: "/home",
    QUickAccessUrl: '/quickAccess',
    PostListUrl: '/postList',
    PostDetailUrl: '/postDetail',
    SideMenuUrl: '/sideMenu',
    HelpSupportUrl: '/helpSupport',
    AccStatementUrl: '/accStatement',
    ContactHelpSupportUrl: '/contactHelpSupport',
    LikeList: '/likeList',
    DoCommentUrl: '/doComment',
    accountDetailUrl: "/accountDetails",
    imageUploadUrl: "/uploadImage",
    geoLocationUrl: "/geoLocation",
    LogOutUrl: '/logout',
    DoLike: '/doLike',
    customerAllocationUrl: "/customerList",
    searchApiUrl: "/search",
    pointAllocateApiUrl: '/pointAllocate',
    getUserList: '/userList',
    otpGetUrl: "/sendOtp",
    reedemTransectionUrl: "/transactionHistory",
    SkipUrl: "/common",
    UpdateRegistrationUrl: '/updateRegistration',
    CustRegDataUrl: '/custRegData',
    DealerAllocationUrl: '/dealerAllocation',
    ProductListUrl: '/productList',
    CustReg: "/custReg",
    orderDetailUrl: "/OrderDetail",
    acceptRejectUrl: "/OrderUpdate",
    AddressUrl: '/address',
    AddAddressUrl: '/addAddress',
    ProductDetailUrl: '/productDetail',
    BuyUrl: '/buy',
    CartUrl: '/cart',
    PurchaseHistoryUrl: '/purchaseHistory',
    ApprovalListUrl: '/ApprovalList',
    OrderDetailListUrl: '/OrderDetailList',
    RedemptionUrl: '/redemption',
    BrandProductUrl: '/brandProduct',
    ExistingUrl: '/Existing',
    alertListApi: '/alert'
};
const APP_CONFIG = {
    clientId: 'CO-43',
    app_version: 3
    // device:4,
    // device_id:'PWA',
    // packageName : 'com.benepik.multiply',
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 32968:
/*!*************************************************!*\
  !*** ./src/app/image-zoom/image-zoom.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: none;\n}\n\nion-slides {\n  width: 100%;\n}\n\nion-slide {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.product-zoom-modal {\n  --width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* End Modal css */\n\n/* Global modal transparent*/\n\n.sc-ion-modal-md-h {\n  --background: none;\n}\n\n.sc-ion-modal-ios-h {\n  --background: none;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: #fff;\n  position: absolute;\n  top: 0;\n}\n\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksa0JBQUE7QUFDWjs7QUFBQTtFQUFhLFdBQUE7QUFJYjs7QUFIQTtFQUFhLDhCQUFBO0FBT2I7O0FBTkE7RUFBcUIsV0FBQTtFQUFjLGVBQUE7QUFXbkM7O0FBVkE7RUFBYSxrQkFBQTtFQUFxQixZQUFBO0VBQWdCLGFBQUE7RUFBZSxXQUFBO0FBaUJqRTs7QUFmQTtFQUF1QixhQUFBO0VBQWdCLG9DQUFBO0FBb0J2Qzs7QUFuQkEsa0JBQUE7O0FBQ0EsNEJBQUE7O0FBQ0E7RUFBdUIsa0JBQUE7QUF1QnZCOztBQXRCQTtFQUF3QixrQkFBQTtBQTBCeEI7O0FBdkJBO0VBQWEsZ0RBQUE7RUFDVCxhQUFBO0VBQWdCLGtCQUFBO0VBQXNCLE1BQUE7QUE2QjFDOztBQTVCSTtFQUFTLFdBQUE7QUFnQ2IiLCJmaWxlIjoiaW1hZ2Utem9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHsgIC0tYmFja2dyb3VuZDogbm9uZTt9XG5pb24tc2xpZGVzIHsgd2lkdGg6IDEwMCU7fVxuaW9uLXNsaWRlIHsgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTt9XG4uc3dpcGVyLXNsaWRlIGltZyB7ICB3aWR0aDogMTAwJTsgIG1heC13aWR0aDogMTAwJTt9XG4uem9vbS1ib3ggeyAgcG9zaXRpb246IGFic29sdXRlOyAgaGVpZ2h0OiAxMDAlOyAgIGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO31cblxuLnByb2R1Y3Qtem9vbS1tb2RhbCB7ICAtLXdpZHRoOiAxMDAlOyAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO31cbi8qIEVuZCBNb2RhbCBjc3MgKi9cbi8qIEdsb2JhbCBtb2RhbCB0cmFuc3BhcmVudCovXG4uc2MtaW9uLW1vZGFsLW1kLWggeyAgIC0tYmFja2dyb3VuZDogbm9uZTt9XG4uc2MtaW9uLW1vZGFsLWlvcy1oIHsgICAtLWJhY2tncm91bmQ6IG5vbmU7fVxuXG5cbmlvbi10b29sYmFyIHstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgLS1jb2xvcjogI2ZmZjsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICB0b3A6IDA7ICB9XG4gICAgaW9uLWljb257Y29sb3I6I2ZmZjt9Il19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 47674:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-zoom/image-zoom.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map