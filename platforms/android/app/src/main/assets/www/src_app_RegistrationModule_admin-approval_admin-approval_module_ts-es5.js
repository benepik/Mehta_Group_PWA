(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_admin-approval_admin-approval_module_ts"], {
    /***/
    66366: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminApprovalPageRoutingModule": function AdminApprovalPageRoutingModule() {
          return (
            /* binding */
            _AdminApprovalPageRoutingModule
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


      var _admin_approval_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-approval.page */
      94946);

      var routes = [{
        path: '',
        component: _admin_approval_page__WEBPACK_IMPORTED_MODULE_0__.AdminApprovalPage
      }];

      var _AdminApprovalPageRoutingModule = function AdminApprovalPageRoutingModule() {
        _classCallCheck(this, AdminApprovalPageRoutingModule);
      };

      _AdminApprovalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AdminApprovalPageRoutingModule);
      /***/
    },

    /***/
    72091: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminApprovalPageModule": function AdminApprovalPageModule() {
          return (
            /* binding */
            _AdminApprovalPageModule
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


      var _admin_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-approval-routing.module */
      66366);
      /* harmony import */


      var _admin_approval_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-approval.page */
      94946);

      var _AdminApprovalPageModule = function AdminApprovalPageModule() {
        _classCallCheck(this, AdminApprovalPageModule);
      };

      _AdminApprovalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _admin_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminApprovalPageRoutingModule],
        declarations: [_admin_approval_page__WEBPACK_IMPORTED_MODULE_1__.AdminApprovalPage]
      })], _AdminApprovalPageModule);
      /***/
    },

    /***/
    94946: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminApprovalPage": function AdminApprovalPage() {
          return (
            /* binding */
            _AdminApprovalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_admin_approval_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./admin-approval.page.html */
      1262);
      /* harmony import */


      var _admin_approval_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-approval.page.scss */
      8517);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      18345);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/constant */
      56544);

      var _AdminApprovalPage = /*#__PURE__*/function () {
        function AdminApprovalPage(sendData, platform, router, zone, storage, apiService) {
          _classCallCheck(this, AdminApprovalPage);

          this.sendData = sendData;
          this.platform = platform;
          this.router = router;
          this.zone = zone;
          this.storage = storage;
          this.apiService = apiService;
          this.approvalImage = this.sendData.alldata;
        }

        _createClass(AdminApprovalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "gotoLogin",
          value: function gotoLogin() {
            var _this = this;

            this.zone.run(function () {
              var apiKey = {};
              console.log('login data response', apiKey);

              _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.LogOutUrl, apiKey).subscribe(function (result) {
                console.log('logout data response', result); // this.accountData=result.data.account_details;

                _this.storage.remove('allStoreData');

                _this.storage.getStorage().then(function (storedData) {
                  console.log('this is all stored data', storedData);
                });

                _this.apiService.generateDeviceId();

                _this.apiService.generateFCMToken();

                _this.maintance();

                _this.router.navigate(['./login']);

                _this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
              }, function (err) {
                _this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "maintance",
          value: function maintance() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.getStorage().then(function (storedData) {
                        console.log('localStorage storedData storedData000', storedData);
                      });

                    case 2:
                      this.zone.run(function () {
                        var apiKey = {};

                        _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.maintanceUrl, apiKey).subscribe(function (result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!(result.success == 1 || result.success == '1')) {
                                      _context.next = 7;
                                      break;
                                    }

                                    this.maintanceData = result;
                                    _context.next = 4;
                                    return this.storage.setStorage('maintainanceData', result);

                                  case 4:
                                    if (result.data.is_down == 1 || result.data.is_down == '1') {
                                      this.sendData.myParam = result.maintainence_data;
                                      this.router.navigate(["/maintenance"]); //for maintance redirection page
                                    }

                                    _context.next = 8;
                                    break;

                                  case 7:
                                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');

                                  case 8:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        }, function (err) {
                          _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AdminApprovalPage;
      }();

      _AdminApprovalPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _AdminApprovalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-admin-approval',
        template: _raw_loader_admin_approval_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_approval_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AdminApprovalPage);
      /***/
    },

    /***/
    8517: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".col {\n  text-align: end;\n}\n\n.overImgDiv {\n  position: fixed;\n  top: 50%;\n  transform: translate(0%, -50%);\n}\n\n.desktopDiv {\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.btnL {\n  --border-radius: 20px;\n  font-size: 14px;\n  text-transform: none;\n  text-transform: initial;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWFwcHJvdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFLLGVBQUE7QUFFTDs7QUFEQTtFQUFjLGVBQUE7RUFBaUIsUUFBQTtFQUFVLDhCQUFBO0FBT3pDOztBQU5BO0VBQWEsU0FBQTtFQUFTLGdDQUFBO0FBV3RCOztBQVZBO0VBQU0scUJBQUE7RUFBc0IsZUFBQTtFQUFnQixvQkFBQTtFQUFBLHVCQUFBO0VBQXdCLFlBQUE7QUFpQnBFIiwiZmlsZSI6ImFkbWluLWFwcHJvdmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x7dGV4dC1hbGlnbjogZW5kO31cbi5vdmVySW1nRGl2IHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO31cbi5kZXNrdG9wRGl2eyBsZWZ0OjUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTt9XG4uYnRuTHstLWJvcmRlci1yYWRpdXM6IDIwcHg7Zm9udC1zaXplOiAxNHB4O3RleHQtdHJhbnNmb3JtOiBpbml0aWFsO2hlaWdodDogMzVweDt9Il19 */";
      /***/
    },

    /***/
    1262: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>adminApproval</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content style=\"--background:#fff;\" class=\"ion-padding\">\n <ion-row>\n   <ion-col  [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\"  class=\"ion-padding\">\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <img src = \"assets/icon/logo.svg\" style = \"width: 100px;\">\n        </ion-col>\n        <ion-col class=\"col\">\n          <img src = \"assets/icon/abc.png\" style = \"width: 100px;text-align: right;\">\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n   </ion-col>\n </ion-row>\n <div class=\"overImgDiv ion-text-center\" [ngClass]=\"{'desktopDiv': !this.platform.is('mobile')}\">\n    <img [src]=\"approvalImage\" onerror=\"this.src='./assets/watermark/watermark.png'\" class=\"underWork\"/>\n    <br><br>\n    <ion-button color=\"danger\" size=\"large\" class=\"btnL\" tappable (click)=\"gotoLogin()\">Return to login</ion-button>\n </div>\n  <!-- <div>\n    <img [src]=\"approvalImage\" onerror=\"this.src='./assets/watermark/watermark.png'\" class=\"underWork\"/>\n  </div> -->\n<div >\n \n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_RegistrationModule_admin-approval_admin-approval_module_ts-es5.js.map