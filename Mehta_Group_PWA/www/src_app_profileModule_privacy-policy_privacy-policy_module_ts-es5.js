(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_profileModule_privacy-policy_privacy-policy_module_ts"], {
    /***/
    35325: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrivacyPolicyPageRoutingModule": function PrivacyPolicyPageRoutingModule() {
          return (
            /* binding */
            _PrivacyPolicyPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./privacy-policy.page */
      77805);

      var routes = [{
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPage
      }];

      var _PrivacyPolicyPageRoutingModule = function PrivacyPolicyPageRoutingModule() {
        _classCallCheck(this, PrivacyPolicyPageRoutingModule);
      };

      _PrivacyPolicyPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrivacyPolicyPageRoutingModule);
      /***/
    },

    /***/
    95312: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrivacyPolicyPageModule": function PrivacyPolicyPageModule() {
          return (
            /* binding */
            _PrivacyPolicyPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./privacy-policy-routing.module */
      35325);
      /* harmony import */


      var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./privacy-policy.page */
      77805);

      var _PrivacyPolicyPageModule = function PrivacyPolicyPageModule() {
        _classCallCheck(this, PrivacyPolicyPageModule);
      };

      _PrivacyPolicyPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPageRoutingModule],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPolicyPage]
      })], _PrivacyPolicyPageModule);
      /***/
    },

    /***/
    77805: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrivacyPolicyPage": function PrivacyPolicyPage() {
          return (
            /* binding */
            _PrivacyPolicyPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./privacy-policy.page.html */
      55082);
      /* harmony import */


      var _privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./privacy-policy.page.scss */
      80018);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      18345);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);

      var _PrivacyPolicyPage = /*#__PURE__*/function () {
        function PrivacyPolicyPage(localStorage, apiService) {
          _classCallCheck(this, PrivacyPolicyPage);

          this.localStorage = localStorage;
          this.apiService = apiService;
        }

        _createClass(PrivacyPolicyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.localStorage.getStorage().then(function (storedData) {
              _this.privacyData = storedData.maintainanceData.privacy_data.data.content;
              _this.pageTitle = storedData.maintainanceData.privacy_data.page_title;
            });
          }
        }]);

        return PrivacyPolicyPage;
      }();

      _PrivacyPolicyPage.ctorParameters = function () {
        return [{
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }];
      };

      _PrivacyPolicyPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-privacy-policy',
        template: _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrivacyPolicyPage);
      /***/
    },

    /***/
    80018: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".contentDiv {\n  font-size: 14px;\n  color: #464444;\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFZLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLGlCQUFBO0FBRzNDIiwiZmlsZSI6InByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC50aXRsZURpdntmb250LXNpemU6IDE3cHg7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5jb250ZW50RGl2e2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogIzQ2NDQ0NDtsaW5lLWhlaWdodDogMTRweDt9Il19 */";
      /***/
    },

    /***/
    55082: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol whit_Pad\">\n      <!-- <p class=\"titleDiv\" [innerHTML]=\"pageTitle\"></p> -->\n      <p class=\"contentDiv\" [innerHTML]=\"privacyData\"></p>\n      </ion-col>\n      </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_profileModule_privacy-policy_privacy-policy_module_ts-es5.js.map