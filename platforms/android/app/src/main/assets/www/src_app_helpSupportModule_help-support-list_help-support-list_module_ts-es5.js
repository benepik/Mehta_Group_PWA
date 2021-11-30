(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_helpSupportModule_help-support-list_help-support-list_module_ts"], {
    /***/
    59878: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelpSupportListPageRoutingModule": function HelpSupportListPageRoutingModule() {
          return (
            /* binding */
            _HelpSupportListPageRoutingModule
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


      var _help_support_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./help-support-list.page */
      89894);

      var routes = [{
        path: '',
        component: _help_support_list_page__WEBPACK_IMPORTED_MODULE_0__.HelpSupportListPage
      }];

      var _HelpSupportListPageRoutingModule = function HelpSupportListPageRoutingModule() {
        _classCallCheck(this, HelpSupportListPageRoutingModule);
      };

      _HelpSupportListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HelpSupportListPageRoutingModule);
      /***/
    },

    /***/
    74246: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelpSupportListPageModule": function HelpSupportListPageModule() {
          return (
            /* binding */
            _HelpSupportListPageModule
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


      var _help_support_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./help-support-list-routing.module */
      59878);
      /* harmony import */


      var _help_support_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./help-support-list.page */
      89894);

      var _HelpSupportListPageModule = function HelpSupportListPageModule() {
        _classCallCheck(this, HelpSupportListPageModule);
      };

      _HelpSupportListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _help_support_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpSupportListPageRoutingModule],
        declarations: [_help_support_list_page__WEBPACK_IMPORTED_MODULE_1__.HelpSupportListPage]
      })], _HelpSupportListPageModule);
      /***/
    },

    /***/
    89894: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelpSupportListPage": function HelpSupportListPage() {
          return (
            /* binding */
            _HelpSupportListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_help_support_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./help-support-list.page.html */
      55499);
      /* harmony import */


      var _help_support_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./help-support-list.page.scss */
      72693);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/constant */
      56544);

      var _HelpSupportListPage = /*#__PURE__*/function () {
        function HelpSupportListPage(router, zone, apiService, sendData) {
          _classCallCheck(this, HelpSupportListPage);

          this.router = router;
          this.zone = zone;
          this.apiService = apiService;
          this.sendData = sendData;
          this.settings = [];
        }

        _createClass(HelpSupportListPage, [{
          key: "gotoFaq",
          value: function gotoFaq(item) {
            this.sendData.alldata = item;

            if (item.pageTitle == "FAQ") {
              this.router.navigate(['/faq']);
            } else {
              this.router.navigate(['/contact-us']);
            } // this.router.navigateByUrl(item.pageTitle);
            // if(item.pageTitle=="FAQ"){
            //   let navigationExtras: NavigationExtras = {
            //     queryParams: {
            //       data: JSON.stringify(item)
            //   }
            // }
            // console.log("items", item)
            //   this.router.navigate(['/faq'], navigationExtras);
            // }else{
            //   let navigationExtras: NavigationExtras = {
            //     queryParams: {
            //       data: JSON.stringify(item)
            //   }
            // }
            // console.log("items9", item)
            //   this.router.navigate(['/contact-us'], navigationExtras);
            // }

          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.helpSupportShow();
          }
        }, {
          key: "helpSupportShow",
          value: function helpSupportShow() {
            var _this = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {};

              _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.HelpSupportUrl, apiKey).subscribe(function (result) {
                console.log("HelpSupportUrl: ", result);

                _this.apiService.presentLoadingClose();

                if (result) {
                  _this.settings = result;
                }
              });
            });
          }
        }]);

        return HelpSupportListPage;
      }();

      _HelpSupportListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }];
      };

      _HelpSupportListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-help-support-list',
        template: _raw_loader_help_support_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_help_support_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HelpSupportListPage);
      /***/
    },

    /***/
    72693: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".arrowIcon {\n  height: 20px;\n  width: 100%;\n  margin: auto;\n}\n\n.boxS {\n  box-shadow: 1px 0px 4px 1px #d2d2d2;\n  margin-bottom: 10px;\n}\n\n.mainTitle {\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.SettingTitle {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAtc3VwcG9ydC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLFlBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQUlyQzs7QUFIQTtFQUFNLG1DQUFBO0VBQW9DLG1CQUFBO0FBUTFDOztBQVBBO0VBQVcseUJBQUE7RUFBeUIsaUJBQUE7QUFZcEM7O0FBWEE7RUFBYyxlQUFBO0FBZWQiLCJmaWxlIjoiaGVscC1zdXBwb3J0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFycm93SWNvbntoZWlnaHQ6IDIwcHg7d2lkdGg6IDEwMCU7IG1hcmdpbjogYXV0bzt9XG4uYm94U3tib3gtc2hhZG93OiAxcHggMHB4IDRweCAxcHggI2QyZDJkMjttYXJnaW4tYm90dG9tOiAxMHB4O31cbi5tYWluVGl0bGV7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5TZXR0aW5nVGl0bGV7Zm9udC1zaXplOiAxM3B4O30iXX0= */";
      /***/
    },

    /***/
    55499: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{settings?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-padding\">\n      <p class=\"ion-no-margin mainTitle\">{{settings?.pageTitle}}</p>\n      <br>\n      <ion-row *ngFor=\"let item of settings?.data\"  class=\"ion-align-items-center boxS\"  tappable (click)=\"gotoFaq(item)\">\n        <ion-col [size]=\"3\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"autoMargin\">\n          <img [src]=\"item?.icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"arrowIcon\">\n        </ion-col>\n        <ion-col [size]=\"7\" size-sm=\"8\" size-md=\"10\" size-lg=\"10\" >\n          <p class=\"SettingTitle \" [innerHTML]=\"item?.title\"></p>\n          </ion-col>\n          <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"autoMargin\">\n            <img [src]=\"item?.arrow_icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"arrowIcon\">\n          </ion-col>\n      </ion-row>\n\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_helpSupportModule_help-support-list_help-support-list_module_ts-es5.js.map