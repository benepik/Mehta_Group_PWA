(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, // {
      //   path: '*',
      //   redirectTo: 'login',
      //   pathMatch: 'full'
      // },
      {
        path: 'login-type',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_loginModule_login-type_login-type_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./loginModule/login-type/login-type.module */
          28780)).then(function (m) {
            return m.LoginTypePageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("default-src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./home/home.module */
          3467)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/profile/profile.module */
          58063)).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'customer-allocation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_customer-allocation_customer-allocation_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/customer-allocation/customer-allocation.module */
          71689)).then(function (m) {
            return m.CustomerAllocationPageModule;
          });
        }
      }, {
        path: 'orders',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_orderModule_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./orderModule/orders/orders.module */
          8844)).then(function (m) {
            return m.OrdersPageModule;
          });
        }
      }, {
        path: 'communication-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_communicationModule_communication-list_communication-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./communicationModule/communication-list/communication-list.module */
          27028)).then(function (m) {
            return m.CommunicationListPageModule;
          });
        }
      }, {
        path: 'communication-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_communicationModule_communication-detail_communication-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./communicationModule/communication-detail/communication-detail.module */
          26297)).then(function (m) {
            return m.CommunicationDetailPageModule;
          });
        }
      }, {
        path: 'accounts-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profileModule_accounts-detail_accounts-detail_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/accounts-detail/accounts-detail.module */
          68938)).then(function (m) {
            return m.AccountsDetailPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profileModule_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/settings/settings.module */
          8254)).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'account-statment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_account-statment_account-statment_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./account-statment/account-statment.module */
          61800)).then(function (m) {
            return m.AccountStatmentPageModule;
          });
        }
      }, {
        path: 'help-support-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_helpSupportModule_help-support-list_help-support-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./helpSupportModule/help-support-list/help-support-list.module */
          74246)).then(function (m) {
            return m.HelpSupportListPageModule;
          });
        }
      }, {
        path: 'faq',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_helpSupportModule_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./helpSupportModule/faq/faq.module */
          64621)).then(function (m) {
            return m.FaqPageModule;
          });
        }
      }, {
        path: 'contact-us',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_helpSupportModule_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./helpSupportModule/contact-us/contact-us.module */
          67048)).then(function (m) {
            return m.ContactUsPageModule;
          });
        }
      }, //chandan working start
      {
        path: 'language',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_language_language_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/language/language.module */
          83224)).then(function (m) {
            return m.LanguagePageModule;
          });
        }
      }, {
        path: 'mobile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_mobile_mobile_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/mobile/mobile.module */
          67150)).then(function (m) {
            return m.MobilePageModule;
          });
        }
      }, {
        path: 'otpverify',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_otpverify_otpverify_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/otpverify/otpverify.module */
          10533)).then(function (m) {
            return m.OtpverifyPageModule;
          });
        }
      }, {
        path: 'registration',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_registration_registration_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/registration/registration.module */
          61683)).then(function (m) {
            return m.RegistrationPageModule;
          });
        }
      }, {
        path: 'profile-upload',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_profile-upload_profile-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/profile-upload/profile-upload.module */
          78140)).then(function (m) {
            return m.ProfileUploadPageModule;
          });
        }
      }, {
        path: 'geolocation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_geolocation_geolocation_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/geolocation/geolocation.module */
          45967)).then(function (m) {
            return m.GeolocationPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/login/login.module */
          11933)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'customer-reg',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customerRegistrationModule_customer-reg_customer-reg_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customerRegistrationModule/customer-reg/customer-reg.module */
          68786)).then(function (m) {
            return m.CustomerRegPageModule;
          });
        }
      }, {
        path: 'approved-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customerRegistrationModule_approved-list_approved-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customerRegistrationModule/approved-list/approved-list.module */
          85981)).then(function (m) {
            return m.ApprovedListPageModule;
          });
        }
      }, {
        path: 'rejected-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customerRegistrationModule_rejected-list_rejected-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customerRegistrationModule/rejected-list/rejected-list.module */
          5507)).then(function (m) {
            return m.RejectedListPageModule;
          });
        }
      }, {
        path: 'dealer-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_dealer-list_dealer-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/dealer-list/dealer-list.module */
          35869)).then(function (m) {
            return m.DealerListPageModule;
          });
        }
      }, {
        path: 'profile-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_profile-view_profile-view_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/profile-view/profile-view.module */
          89395)).then(function (m) {
            return m.ProfileViewPageModule;
          });
        }
      }, {
        path: 'customer-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_customer-list_customer-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/customer-list/customer-list.module */
          79440)).then(function (m) {
            return m.CustomerListPageModule;
          });
        }
      }, {
        path: 'customer-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_customer-details_customer-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/customer-details/customer-details.module */
          64358)).then(function (m) {
            return m.CustomerDetailsPageModule;
          });
        }
      }, {
        path: 'redemption-report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_redemption-report_redemption-report_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/redemption-report/redemption-report.module */
          51092)).then(function (m) {
            return m.RedemptionReportPageModule;
          });
        }
      }, {
        path: 'dealer-allocat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealer-allocat_dealer-allocat_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealer-allocat/dealer-allocat.module */
          74150)).then(function (m) {
            return m.DealerAllocatPageModule;
          });
        }
      }, {
        path: 'point-statement',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_point-statement_point-statement_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/point-statement/point-statement.module */
          57109)).then(function (m) {
            return m.PointStatementPageModule;
          });
        }
      }, {
        path: 'assign-dealer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customerRegistrationModule_assign-dealer_assign-dealer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customerRegistrationModule/assign-dealer/assign-dealer.module */
          84866)).then(function (m) {
            return m.AssignDealerPageModule;
          });
        }
      }, {
        path: 'model-camera',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_model-camera_model-camera_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/model-camera/model-camera.module */
          67233)).then(function (m) {
            return m.ModelCameraPageModule;
          });
        }
      }, {
        path: 'privacy-policy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profileModule_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/privacy-policy/privacy-policy.module */
          95312)).then(function (m) {
            return m.PrivacyPolicyPageModule;
          });
        }
      }, {
        path: 'terms-conditions',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profileModule_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/terms-conditions/terms-conditions.module */
          3625)).then(function (m) {
            return m.TermsConditionsPageModule;
          });
        }
      }, {
        path: 'allocate-point-form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_allocate-point-form_allocate-point-form_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/allocate-point-form/allocate-point-form.module */
          7926)).then(function (m) {
            return m.AllocatePointFormPageModule;
          });
        }
      }, {
        path: 'redeemotp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_redeemotp_redeemotp_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/redeemotp/redeemotp.module */
          14326)).then(function (m) {
            return m.RedeemotpPageModule;
          });
        }
      }, {
        path: 'admin-approval',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_admin-approval_admin-approval_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/admin-approval/admin-approval.module */
          72091)).then(function (m) {
            return m.AdminApprovalPageModule;
          });
        }
      }, {
        path: 'appove-reject-reedemption',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_orderModule_appove-reject-reedemption_appove-reject-reedemption_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./orderModule/appove-reject-reedemption/appove-reject-reedemption.module */
          74177)).then(function (m) {
            return m.AppoveRejectReedemptionPageModule;
          });
        }
      }, {
        path: 'orderdetails',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_orderModule_orderdetails_orderdetails_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./orderModule/orderdetails/orderdetails.module */
          74590)).then(function (m) {
            return m.OrderdetailsPageModule;
          });
        }
      }, {
        path: 'redeemotp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_redeemotp_redeemotp_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/redeemotp/redeemotp.module */
          14326)).then(function (m) {
            return m.RedeemotpPageModule;
          });
        }
      }, {
        path: 'buyitem',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_buyitem_buyitem_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/buyitem/buyitem.module */
          12402)).then(function (m) {
            return m.BuyitemPageModule;
          });
        }
      }, {
        path: 'itemdetail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_itemdetail_itemdetail_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/itemdetail/itemdetail.module */
          43723)).then(function (m) {
            return m.ItemdetailPageModule;
          });
        }
      }, {
        path: 'pointsgiftlist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_pointsgiftlist_pointsgiftlist_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/pointsgiftlist/pointsgiftlist.module */
          61321)).then(function (m) {
            return m.PointsgiftlistPageModule;
          });
        }
      }, {
        path: 'purchasehistory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_purchasehistory_purchasehistory_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/purchasehistory/purchasehistory.module */
          9258)).then(function (m) {
            return m.PurchasehistoryPageModule;
          });
        }
      }, {
        path: 'select-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_select-address_select-address_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/select-address/select-address.module */
          38423)).then(function (m) {
            return m.SelectAddressPageModule;
          });
        }
      }, {
        path: 'point-statement',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_point-statement_point-statement_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/point-statement/point-statement.module */
          57109)).then(function (m) {
            return m.PointStatementPageModule;
          });
        }
      }, {
        path: 'redemption-report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_redemption-report_redemption-report_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/redemption-report/redemption-report.module */
          51092)).then(function (m) {
            return m.RedemptionReportPageModule;
          });
        }
      }, {
        path: 'change-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_change-address_change-address_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/change-address/change-address.module */
          51504)).then(function (m) {
            return m.ChangeAddressPageModule;
          });
        }
      }, {
        path: 'transaction-hist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_transaction-hist_transaction-hist_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./transaction-hist/transaction-hist.module */
          52860)).then(function (m) {
            return m.TransactionHistPageModule;
          });
        }
      }, {
        path: 'product-catalogue',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_quickModule_product-catalogue_product-catalogue_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./quickModule/product-catalogue/product-catalogue.module */
          2911)).then(function (m) {
            return m.ProductCataloguePageModule;
          });
        }
      }, {
        path: 'product-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_quickModule_product-detail_product-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./quickModule/product-detail/product-detail.module */
          68658)).then(function (m) {
            return m.ProductDetailPageModule;
          });
        }
      }, {
        path: 'image-zoom',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_image-zoom_image-zoom_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./image-zoom/image-zoom.module */
          87421)).then(function (m) {
            return m.ImageZoomPageModule;
          });
        }
      }, {
        path: 'polls',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_quickModule_polls_polls_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./quickModule/polls/polls.module */
          889)).then(function (m) {
            return m.PollsPageModule;
          });
        }
      }, {
        path: 'user-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_office_report_user-list_user-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./office_report/user-list/user-list.module */
          20358)).then(function (m) {
            return m.UserListPageModule;
          });
        }
      }, {
        path: 'select-dealer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_select-dealer_select-dealer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./select-dealer/select-dealer.module */
          72639)).then(function (m) {
            return m.SelectDealerPageModule;
          });
        }
      }, {
        path: 'alert-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_alert-list_alert-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./alert-list/alert-list.module */
          83951)).then(function (m) {
            return m.AlertListPageModule;
          });
        }
      }, {
        path: 'maintenance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_maintenance_maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./maintenance/maintenance.module */
          84099)).then(function (m) {
            return m.MaintenancePageModule;
          });
        }
      }, {
        path: 'force-optional-update',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_force-optional-update_force-optional-update_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./force-optional-update/force-optional-update.module */
          39544)).then(function (m) {
            return m.ForceOptionalUpdatePageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var _provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./provider/api.service */
      14303);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/local-storage.service */
      18345);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      77668);
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/data-transfer.service */
      51532);
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      30582);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, localStorage, loc, zone, apiService, route, device_id, sendData, alertController, splashScreen, fcm, statusBar) {
          _classCallCheck(this, AppComponent);

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

        _createClass(AppComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {//  this.initializeApp();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isDesktop = this.platform.is('desktop');
            this.route.events.subscribe(function (e) {
              if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivationStart && e.snapshot.outlet === "administration") _this.outlet.deactivate();
            }); // this.maintance();
            // this.backButtonEvent();
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              // if (this.platform.is("cordova")) {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide(); // this.fcmActivity()


              _this2.generateDeviceId();

              _this2.apiService.generateFCMToken();

              _this2.maintance();
            });
          }
        }, {
          key: "fcmActivity",
          value: function fcmActivity() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.fcm.subscribeToTopic('marketing');
                      this.fcm.getToken().then(function (token) {
                        console.log('appcomponent fcm push getToken==> ', JSON.stringify(token));
                      }, function (error) {
                        console.log('appcomponent fcm push getToken error==> ', JSON.stringify(error));
                      });
                      this.fcm.onNotification().subscribe(function (data) {
                        if (data.wasTapped) {
                          console.log("appcomponent Received in background");
                        } else {
                          console.log("appcomponent Received in foreground");
                        }

                        ;
                      }, function (error) {
                        console.log('appcomponent fcm push onnotification error==> ', JSON.stringify(error));
                      });
                      this.fcm.onTokenRefresh().subscribe(function (token) {
                        console.log('appcomponent fcm push getToken==> ', JSON.stringify(token));
                      }, function (error) {
                        console.log('appcomponent fcm push onTokenRefesh error==> ', JSON.stringify(error));
                      });
                      this.fcm.hasPermission().then(function (hasPermission) {
                        if (hasPermission) {
                          console.log("appcomponent Has permission!");
                        } else {
                          _this3.fcm.requestPushPermissionIOS().then(function (res) {
                            console.log('appcomponent fcm push permission==> ', JSON.stringify(res));
                          }, function (error) {
                            console.log('appcomponent fcm push permission error==> ', JSON.stringify(error));
                          });
                        }
                      }, function (error) {
                        console.log('appcomponent fcm push hasPermission error==> ', JSON.stringify(error));

                        _this3.fcm.requestPushPermissionIOS().then(function (res) {
                          console.log('appcomponent fcm push permission==> ', JSON.stringify(res));
                        }, function (error) {
                          console.log('appcomponent fcm push permission error==> ', JSON.stringify(error));
                        });
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "generateDeviceId",
          value: function generateDeviceId() {
            if (this.platform.is("cordova")) {
              console.log("call FCM /DeviceId 12");
              var deviceUuid = this.device_id.uuid;
              console.log('device id==>' + deviceUuid);
              this.deviceId = deviceUuid == null ? "browser" : deviceUuid; // alert('2'+this.deviceId);

              if (this.deviceId == "browser") {
                var _deviceUuid = this.device_id.uuid;
                this.deviceId = _deviceUuid == null ? "browser" : _deviceUuid;

                if (this.deviceId == "browser") {
                  var _deviceUuid2 = this.device_id.uuid;
                  this.deviceId = _deviceUuid2 == null ? "browser" : _deviceUuid2;
                  this.localStorage.setStorage('deviceId', this.deviceId);
                } else {
                  this.localStorage.setStorage('deviceId', this.deviceId);
                }
              } else {
                this.localStorage.setStorage('deviceId', this.deviceId);
              }
            } else {
              console.log("call FCM /DeviceId 123");
              this.localStorage.setStorage('deviceId', 'PWA');
              console.log("call FCM /DeviceId 121", this.deviceId);
            }
          }
        }, {
          key: "showExitConfirm",
          value: function showExitConfirm() {
            this.alertController.create({
              header: 'App termination',
              message: 'Do you want to close the app?',
              backdropDismiss: false,
              buttons: [{
                text: 'Stay',
                role: 'cancel',
                handler: function handler() {
                  console.log('Application exit prevented!');
                }
              }, {
                text: 'Exit',
                handler: function handler() {
                  navigator['app'].exitApp();
                }
              }]
            }).then(function (alert) {
              alert.present();
            });
          }
        }, {
          key: "maintance",
          value: function maintance() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.localStorage.getStorage().then(function (storedData) {
                        console.log('localStorage storedData storedData000', storedData);
                      });

                    case 2:
                      this.zone.run(function () {
                        var apiKey = {};

                        _this4.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_2__.URLS.maintanceUrl, apiKey).subscribe(function (result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this5 = this;

                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    if (!(result.success == 1 || result.success == '1')) {
                                      _context2.next = 9;
                                      break;
                                    }

                                    this.maintanceData = result;
                                    _context2.next = 4;
                                    return this.localStorage.setStorage('maintainanceData', result);

                                  case 4:
                                    _context2.next = 6;
                                    return this.localStorage.getStorage().then(function (storedData) {
                                      console.log('localStorage storedData storedData', storedData);

                                      if (storedData && storedData.allStoreData != undefined) {
                                        // this.route.navigate(['/tabs']);
                                        console.log('localStorage storedData', storedData); // window.location.assign('/tabs');

                                        // window.location.assign('/tabs');
                                        _this5.route.navigateByUrl('/tabs/home');
                                      } else {
                                        console.log('localStorage storedData maintance', storedData);
                                        _this5.maintanceData = storedData.maintainanceData;

                                        _this5.route.navigate(['/login']);
                                      }
                                    });

                                  case 6:
                                    if (result.data.is_down == 1 || result.data.is_down == '1') {
                                      this.sendData.myParam = result.maintainence_data;
                                      this.route.navigate(["/maintenance"]); //for maintance redirection page
                                    }

                                    _context2.next = 10;
                                    break;

                                  case 9:
                                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');

                                  case 10:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        }, function (err) {
                          _this4.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.PlatformLocation
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone
        }, {
          type: _provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__.Device
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__.DataTransferService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen
        }, {
          type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__.FCM
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar
        }];
      };

      _AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChildren,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet]
        }],
        outlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChildren,
          args: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet]
        }]
      };
      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/service-worker */
      72249);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      20138);
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      59865);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      83046);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54925);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      97905);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      77668);
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      30582);
      /* harmony import */


      var ngx_clipboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-clipboard */
      50948);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      34255);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_20__.ClipboardModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_21__.IonicStorageModule.forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicRouteStrategy
        }, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__.InAppBrowser, _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__.Device, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__.FileTransfer, _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__.FCM, _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__.Diagnostic, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__.Geolocation, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__.NativeGeocoder, _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__.FilePath],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    81343: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageZoomPage": function ImageZoomPage() {
          return (
            /* binding */
            _ImageZoomPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./image-zoom.page.html */
      47674);
      /* harmony import */


      var _image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-zoom.page.scss */
      32968);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/local-storage.service */
      18345);

      var _ImageZoomPage = /*#__PURE__*/function () {
        function ImageZoomPage(navParams, modalCtrl, localStorage) {
          var _this6 = this;

          _classCallCheck(this, ImageZoomPage);

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
          this.localStorage.getStorage().then(function (result) {
            _this6.loginUserData = result.allStoreData;
          });
        }

        _createClass(ImageZoomPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.slides.lockSwipes(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.table(this.navParams);
            this.zoomData = this.navParams.data.data;
            console.log('img==> ', this.zoomData);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
            this.slides.lockSwipes(false);
          }
        }, {
          key: "download",
          value: function download() {}
        }]);

        return ImageZoomPage;
      }();

      _ImageZoomPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService
        }];
      };

      _ImageZoomPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides]
        }]
      };
      _ImageZoomPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ImageZoomPage);
      /***/
    },

    /***/
    14303: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      69412);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      19773);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/local-storage.service */
      18345);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      77668);
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      30582);
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      51532);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ApiService = /*#__PURE__*/function () {
        function ApiService(http, loadingCtrl, toastController, localStorage, iab, alertController, device_id, platform, fcm, sendData, router) {
          _classCallCheck(this, ApiService);

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
            fullscreen: 'yes' //Windows only

          };
          this.forceUpdateCount = 1;
          this.pushIsinBackground = false;
        }

        _createClass(ApiService, [{
          key: "device",
          get: function get() {
            if (this.platform.is("ios")) {
              return "3";
            } else if (this.platform.is("android")) {
              return "2";
            } else {
              return "4"; // return "2";
            }
          }
        }, {
          key: "apiCallWithLoginToken",
          value: function apiCallWithLoginToken(url, data) {
            var _this7 = this;

            console.log("22url==", url);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.localStorage.getStorage()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(function (storedData) {
              console.log("Shivanshi local storage data==", storedData);
              data["client_id"] = src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.clientId;
              data["device"] = _this7.device;
              data["app_version"] = src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.app_version;
              data["device_id"] = storedData.deviceId;
              var loginToken;

              if (storedData && storedData.allStoreData) {
                console.log("Shivanshi allStoreData==", storedData.allStoreData);
                data["employee_id"] = storedData.allStoreData.user_id;
                data["user_type"] = storedData.allStoreData.employee_type;
                loginToken = storedData.allStoreData.login_token;
                console.log('Shivanshi login token', loginToken);
              } else {
                loginToken = "";
                console.log('login token response', loginToken);
              }

              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
                  "Content-Type": "application/json",
                  Authorization: loginToken
                })
              };
              console.log('Shivanshi request options', httpOptions);
              console.log('Shivanshi request url', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url);
              console.log('Shivanshi request data', data); // alert('Shivanshi url==> '+URLS.baseUrl+url);
              // alert('Shivanshi tokens==> '+JSON.stringify(loginToken));
              // alert('Shivanshi data==> '+JSON.stringify(data));

              return _this7.http.post(src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url, data, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this7.handleError));
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error("An error occurred:", error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // return an observable with a user-facing error message


            return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)("Something bad happened, please try again later.");
          }
        }, {
          key: "showToastMessage",
          value: function showToastMessage(msg, pos, time, bgClassName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(msg == '')) {
                        _context4.next = 3;
                        break;
                      }

                      _context4.next = 8;
                      break;

                    case 3:
                      console.log("toastMessage color==", bgClassName);
                      _context4.next = 6;
                      return this.toastController.create({
                        message: msg,
                        position: pos,
                        duration: time,
                        cssClass: bgClassName
                      });

                    case 6:
                      toast = _context4.sent;
                      toast.present();

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentLoadingDefault",
          value: function presentLoadingDefault() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingCtrl.create({
                        message: '',
                        cssClass: 'loader-waiting',
                        duration: 2000
                      });

                    case 2:
                      this.loading = _context5.sent;
                      _context5.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "generateDeviceId",
          value: function generateDeviceId() {
            if (this.platform.is("cordova")) {
              console.log("call FCM /DeviceId 12");
              var deviceUuid = this.device_id.uuid;
              this.deviceId = deviceUuid == null ? "browser" : deviceUuid;

              if (this.deviceId == "browser") {
                var _deviceUuid3 = this.device_id.uuid;
                this.deviceId = _deviceUuid3 == null ? "browser" : _deviceUuid3;

                if (this.deviceId == "browser") {
                  var _deviceUuid4 = this.device_id.uuid;
                  this.deviceId = _deviceUuid4 == null ? "browser" : _deviceUuid4;
                  this.localStorage.setStorage('deviceId', this.deviceId);
                } else {
                  this.localStorage.setStorage('deviceId', this.deviceId);
                }
              } else {
                this.localStorage.setStorage('deviceId', this.deviceId);
              }
            } else {
              console.log("call FCM /DeviceId 123");
              this.localStorage.setStorage('deviceId', 'PWA');
            }
          }
        }, {
          key: "presentLoadingClose",
          value: function presentLoadingClose() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } //for media file

        }, {
          key: "mediaFileUpload",
          value: function mediaFileUpload(url, formData) {
            var _this8 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.localStorage.getStorage()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(function (storedData) {
              console.log("storedData", storedData);
              formData.append('client_id', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.clientId);
              formData.append('device', _this8.device);
              formData.append('device_id', storedData.deviceId);
              formData.append('app_version', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.app_version);
              formData.append('employee_id', storedData.allStoreData.user_id);
              formData.append('user_type', storedData.allStoreData.employee_type);
              return _this8.http.post(src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url, formData, {
                reportProgress: true,
                observe: 'events'
              });
            }));
          }
        }, {
          key: "generateFCMToken",
          value: function generateFCMToken() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this9 = this;

              var that;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      that = this;
                      this.platform.ready().then(function () {
                        console.log("call FCM Function==");

                        if (_this9.platform.is("cordova")) {
                          that.fcm.subscribeToTopic('Mehta');
                          console.log("call FCM platform==", that.platform);
                          that.fcm.onNotification().subscribe(function (data) {
                            console.log("data receive from server call FCM == ", data);

                            if (data.wasTapped) {
                              console.log("Received in background");
                              that.pushIsinBackground = true;
                              setTimeout(function () {
                                that.checkcondition(data);
                              }, 3000);
                              console.log("call FCM Received in background==", data);
                            } else {
                              console.log("Received in foreground");
                              console.log("call FCM Received in foreground==", data);

                              if (that.platform.is('ios')) {
                                that.pushAlertView(data.aps.alert.title, data.aps.alert.body, data);
                              } else {
                                // that.pushAlertView(data.title+' '+'New Notification', data.body, data);
                                that.pushAlertView(data.title, data.body, data);
                              }
                            }

                            ;
                            that.fcm.unsubscribeFromTopic('Mehta');
                          });

                          _this9.fcm.getToken().then(function (token) {
                            console.log("call FCM and get token0==", token);

                            if (token) {
                              _this9.fcmToken = token;
                              console.log("call FCM If Token==>", _this9.fcmToken);
                              setTimeout(function () {
                                _this9.localStorage.setStorage('fcmToken', _this9.fcmToken);
                              }, 1000); // this.storage.set('fcmToken', this.fcmToken);
                            } else {
                              console.log("call FCM else Token==", token);

                              if (_this9.fcmGenerationRetryCount <= 2) {
                                _this9.generateFCMToken();

                                _this9.fcmGenerationRetryCount = _this9.fcmGenerationRetryCount + 1;
                              }
                            }
                          });

                          console.log("call FCM and get token1.1==");

                          _this9.fcm.onTokenRefresh().subscribe(function (token) {
                            console.log("call FCM and get token1==", token);
                          });
                        } else {
                          var fcmDummyToken = "PWA";
                          setTimeout(function () {
                            _this9.localStorage.setStorage('fcmToken', fcmDummyToken);
                          }, 800); // this.storage.set('fcmToken', this.fcmToken);

                          console.log("call FCM static FCM Token==", fcmDummyToken);
                        }
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "pushAlertView",
          value: function pushAlertView(pushTitle, pushMessage, pushData) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: pushTitle,
                        message: pushMessage,
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Ignore',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log("call FCM cancel/Ignore Push Alert==", blah);
                          }
                        }, {
                          text: 'View',
                          handler: function handler() {
                            console.log("call FCM View/Redirect Push Alert==", pushData);

                            _this10.checkcondition(pushData);
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "checkcondition",
          value: function checkcondition(pushAllData) {
            console.log("call FCM push redirection data==", pushAllData);
            console.log("call FCM checkConditionData 12==", pushAllData);
            this.sendData.alldata = pushAllData; // this data transfer use for "notice-detail", "hr-policy-detail"

            this.sendData.myParam = pushAllData; // this data transfer use for "communication-detail", "say-cheers-detail"

            this.router.navigate([pushAllData.redirect_page]);

            if (this.pushIsinBackground == true) {
              //hide loader in case of backfround push
              console.log("call FCM App Position in background==", this.pushIsinBackground); // this.hideLoader();
            } else {
              console.log("call FCM App Position in foreground==", this.pushIsinBackground);
            }
          }
        }]);

        return ApiService;
      }();

      _ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__.Device
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
        }, {
          type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__.DataTransferService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }];
      };

      _ApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Injectable)({
        providedIn: 'root'
      })], _ApiService);
      /***/
    },

    /***/
    51532: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTransferService": function DataTransferService() {
          return (
            /* binding */
            _DataTransferService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../image-zoom/image-zoom.page */
      81343);

      var _DataTransferService = /*#__PURE__*/function () {
        function DataTransferService(modalController) {
          _classCallCheck(this, DataTransferService);

          this.modalController = modalController;
        }

        _createClass(DataTransferService, [{
          key: "zoomSingleImage",
          value: function zoomSingleImage(path) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var modal;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.modalController.create({
                        component: _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__.ImageZoomPage,
                        cssClass: 'my-custom-class',
                        // swipeToClose: true,
                        // mode: 'ios', backdropDismiss: true,
                        // presentingElement: this.routerOutlet.nativeEl,
                        componentProps: {
                          data: path
                        }
                      });

                    case 2:
                      modal = _context9.sent;
                      _context9.next = 5;
                      return modal.present();

                    case 5:
                      return _context9.abrupt("return", _context9.sent);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "readMoreHTML",
          value: function readMoreHTML(str, max, add) {
            console.log('str==> ', str);

            if (str && str.length > max) {
              var tempStr = str.substring(0, max);
              var openAtag = tempStr.split("<a ");
              var closeAtag = tempStr.split("</a>"); // console.log('openAtag== ', openAtag.length);
              // console.log('closeAtag== ', closeAtag.length);

              if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>'; // console.log("equal== ", str);

                return str + " " + add;
              } else {
                var nextStr = str.substring(max, str.length); // console.log("remaining sub string******", nextStr);

                var nextCloseAtagIndex = nextStr.search("</a>"); // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);

                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4); // console.log("final******", str);

                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>'; // console.log("not equal== ", str);

                return str + " " + add;
              } // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
              // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);

            } else {
              return str;
            }
          }
        }]);

        return DataTransferService;
      }();

      _DataTransferService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _DataTransferService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DataTransferService);
      /***/
    },

    /***/
    18345: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalStorageService": function LocalStorageService() {
          return (
            /* binding */
            _LocalStorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage-angular */
      43250); // import { Storage } from "@ionic/storage";


      var _LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService(storage) {
          _classCallCheck(this, LocalStorageService);

          this.storage = storage;
          this._storage = null;
        } // async setStorage(key, value){
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


        _createClass(LocalStorageService, [{
          key: "setStorage",
          value: function setStorage(key, value) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      console.log('localStorage storedData storage data key==> ', key);
                      console.log('localStorage storedData storage data value==> ', value);
                      _context11.next = 4;
                      return this.storage.get('allStoreData').then(function (storedData) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                          var obj;
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  console.log('call Fcm storage service2==> ', storedData);

                                  if (!storedData) {
                                    _context10.next = 7;
                                    break;
                                  }

                                  storedData[key] = value;
                                  _context10.next = 5;
                                  return this.storage.set('allStoreData', storedData).then(function (res) {
                                    console.log('storage data==> ', res);
                                  });

                                case 5:
                                  _context10.next = 14;
                                  break;

                                case 7:
                                  console.log('******==> ', storedData);
                                  console.log('****** key==> ', key);
                                  console.log('****** value==> ', value);
                                  obj = {};
                                  obj[key] = value;
                                  _context10.next = 14;
                                  return this.storage.set('allStoreData', obj).then(function (res) {
                                    console.log('storage data null obj==> ', res);
                                  });

                                case 14:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          } // to get a key/value pair

        }, {
          key: "getStorage",
          value: function getStorage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var result;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return this.storage.get('allStoreData');

                    case 3:
                      result = _context12.sent;

                      if (!(result != null)) {
                        _context12.next = 6;
                        break;
                      }

                      return _context12.abrupt("return", result);

                    case 6:
                      return _context12.abrupt("return", null);

                    case 9:
                      _context12.prev = 9;
                      _context12.t0 = _context12["catch"](0);
                      console.log(_context12.t0);
                      return _context12.abrupt("return", null);

                    case 13:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 9]]);
            }));
          } // remove a single key value:

        }, {
          key: "remove",
          value: function remove(key) {
            this.storage.remove(key);
          } //  delete all data from your application:

        }, {
          key: "clear",
          value: function clear() {
            this.storage.clear();
          }
        }, {
          key: "createDB",
          value: function createDB() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var storage;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.storage.create();

                    case 2:
                      storage = _context13.sent;
                      this._storage = storage;

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return LocalStorageService;
      }();

      _LocalStorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
        }];
      };

      _LocalStorageService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LocalStorageService);
      /***/
    },

    /***/
    56544: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "URLS": function URLS() {
          return (
            /* binding */
            _URLS
          );
        },

        /* harmony export */
        "APP_CONFIG": function APP_CONFIG() {
          return (
            /* binding */
            _APP_CONFIG
          );
        }
        /* harmony export */

      });

      var _URLS = {
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
      var _APP_CONFIG = {
        clientId: 'CO-43',
        app_version: 3 // device:4,
        // device_id:'PWA',
        // packageName : 'com.benepik.multiply',

      };
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    32968: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: none;\n}\n\nion-slides {\n  width: 100%;\n}\n\nion-slide {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.product-zoom-modal {\n  --width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* End Modal css */\n\n/* Global modal transparent*/\n\n.sc-ion-modal-md-h {\n  --background: none;\n}\n\n.sc-ion-modal-ios-h {\n  --background: none;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: #fff;\n  position: absolute;\n  top: 0;\n}\n\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksa0JBQUE7QUFDWjs7QUFBQTtFQUFhLFdBQUE7QUFJYjs7QUFIQTtFQUFhLDhCQUFBO0FBT2I7O0FBTkE7RUFBcUIsV0FBQTtFQUFjLGVBQUE7QUFXbkM7O0FBVkE7RUFBYSxrQkFBQTtFQUFxQixZQUFBO0VBQWdCLGFBQUE7RUFBZSxXQUFBO0FBaUJqRTs7QUFmQTtFQUF1QixhQUFBO0VBQWdCLG9DQUFBO0FBb0J2Qzs7QUFuQkEsa0JBQUE7O0FBQ0EsNEJBQUE7O0FBQ0E7RUFBdUIsa0JBQUE7QUF1QnZCOztBQXRCQTtFQUF3QixrQkFBQTtBQTBCeEI7O0FBdkJBO0VBQWEsZ0RBQUE7RUFDVCxhQUFBO0VBQWdCLGtCQUFBO0VBQXNCLE1BQUE7QUE2QjFDOztBQTVCSTtFQUFTLFdBQUE7QUFnQ2IiLCJmaWxlIjoiaW1hZ2Utem9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHsgIC0tYmFja2dyb3VuZDogbm9uZTt9XG5pb24tc2xpZGVzIHsgd2lkdGg6IDEwMCU7fVxuaW9uLXNsaWRlIHsgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTt9XG4uc3dpcGVyLXNsaWRlIGltZyB7ICB3aWR0aDogMTAwJTsgIG1heC13aWR0aDogMTAwJTt9XG4uem9vbS1ib3ggeyAgcG9zaXRpb246IGFic29sdXRlOyAgaGVpZ2h0OiAxMDAlOyAgIGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO31cblxuLnByb2R1Y3Qtem9vbS1tb2RhbCB7ICAtLXdpZHRoOiAxMDAlOyAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO31cbi8qIEVuZCBNb2RhbCBjc3MgKi9cbi8qIEdsb2JhbCBtb2RhbCB0cmFuc3BhcmVudCovXG4uc2MtaW9uLW1vZGFsLW1kLWggeyAgIC0tYmFja2dyb3VuZDogbm9uZTt9XG4uc2MtaW9uLW1vZGFsLWlvcy1oIHsgICAtLWJhY2tncm91bmQ6IG5vbmU7fVxuXG5cbmlvbi10b29sYmFyIHstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgLS1jb2xvcjogI2ZmZjsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICB0b3A6IDA7ICB9XG4gICAgaW9uLWljb257Y29sb3I6I2ZmZjt9Il19 */";
      /***/
    },

    /***/
    91106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    47674: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map