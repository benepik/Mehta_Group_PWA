(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_point-statement_point-statement_module_ts"], {
    /***/
    70504: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PointStatementPageRoutingModule": function PointStatementPageRoutingModule() {
          return (
            /* binding */
            _PointStatementPageRoutingModule
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


      var _point_statement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./point-statement.page */
      58141);

      var routes = [{
        path: '',
        component: _point_statement_page__WEBPACK_IMPORTED_MODULE_0__.PointStatementPage
      }];

      var _PointStatementPageRoutingModule = function PointStatementPageRoutingModule() {
        _classCallCheck(this, PointStatementPageRoutingModule);
      };

      _PointStatementPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PointStatementPageRoutingModule);
      /***/
    },

    /***/
    57109: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PointStatementPageModule": function PointStatementPageModule() {
          return (
            /* binding */
            _PointStatementPageModule
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


      var _point_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./point-statement-routing.module */
      70504);
      /* harmony import */


      var _point_statement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./point-statement.page */
      58141);

      var _PointStatementPageModule = function PointStatementPageModule() {
        _classCallCheck(this, PointStatementPageModule);
      };

      _PointStatementPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _point_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointStatementPageRoutingModule],
        declarations: [_point_statement_page__WEBPACK_IMPORTED_MODULE_1__.PointStatementPage]
      })], _PointStatementPageModule);
      /***/
    },

    /***/
    58141: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PointStatementPage": function PointStatementPage() {
          return (
            /* binding */
            _PointStatementPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_point_statement_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./point-statement.page.html */
      46474);
      /* harmony import */


      var _point_statement_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./point-statement.page.scss */
      64400);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/constant */
      56544);

      var _PointStatementPage = /*#__PURE__*/function () {
        function PointStatementPage(route, platform, sendData, apiService, zone) {
          _classCallCheck(this, PointStatementPage);

          this.route = route;
          this.platform = platform;
          this.sendData = sendData;
          this.apiService = apiService;
          this.zone = zone;
          this.serverData = [];
          this.pointData = this.sendData.pointData;
          console.log("pointdata: ", this.pointData);
          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          });
        }

        _createClass(PointStatementPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pointStatmentShow();
          }
        }, {
          key: "pointStatmentShow",
          value: function pointStatmentShow() {
            var _this = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var apiKey;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        apiKey = {
                          "month": this.sendData.month,
                          "year": this.sendData.year,
                          "request_page": "customer",
                          "request_for": this.pointData.dealer_id
                        };
                        this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.DealerAllocationUrl, apiKey).subscribe(function (result) {
                          _this2.apiService.presentLoadingClose();

                          _this2.serverData = result;

                          if (result.success == 1) {} else {
                            _this2.message = result.message;

                            _this2.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                          }
                        }, function (err) {
                          _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                          _this2.apiService.presentLoadingClose();
                        });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }]);

        return PointStatementPage;
      }();

      _PointStatementPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
        }];
      };

      _PointStatementPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-point-statement',
        template: _raw_loader_point_statement_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_point_statement_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PointStatementPage);
      /***/
    },

    /***/
    64400: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".act {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: #B01D22 !important;\n  color: #B01D22 !important;\n  border: 1px solid;\n  border-radius: 5px;\n  width: 90%;\n}\n\nh5 {\n  color: #B01D22;\n  font-size: 20px;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-row {\n  background: #B01D22;\n  color: #fff;\n  font-size: 14px;\n}\n\n.co_ro {\n  border-left: 1px solid #ECEEEF;\n  text-align: center;\n}\n\n.headr_col {\n  text-align: center;\n  color: #B01D22 !important;\n}\n\nion-text, p {\n  font-size: 10px;\n}\n\n.act1 {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: #B01D22 !important;\n  color: #B01D22 !important;\n  border: 1px solid;\n  border-radius: 8px;\n  width: 50%;\n  height: 20px;\n}\n\n.table {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n}\n\n.table_start {\n  padding-top: 20px;\n}\n\n.pinkBg {\n  background-color: #f2e8e8;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n\n.dataTable .header-row td {\n  padding: 10px;\n  border-right: 1px solid #fff;\n}\n\n.dataTable tr.body-row td {\n  width: 100%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  white-space: nowrap;\n  padding: 10px 5px;\n  border-right: 1px solid #ECEEEF;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50LXN0YXRlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFDQTtFQUNJLDZCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBR0o7O0FBQUU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkU7RUFDSSxlQUFBO0FBS047O0FBSEU7RUFDRSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNFLGlCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpFO0VBQ0UsbUNBQUE7QUFPSjs7QUFMRTtFQUNJLGlCQUFBO0FBUU47O0FBTkU7RUFBUSx5QkFBQTtBQVVWOztBQVRFO0VBQW1CLDRCQUFBO0VBQ2pCLHNCQUFBO0VBQXVCLFlBQUE7RUFDdkIsMkJBQUE7QUFjSjs7QUFYTTtFQUFpQixhQUFBO0VBQWdCLDRCQUFBO0FBZ0J2Qzs7QUFmTTtFQUNFLFdBQUE7RUFBYSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFBd0IsbUJBQUE7RUFBcUIsaUJBQUE7RUFDMUQsK0JBQUE7RUFDQSxlQUFBO0FBb0JSIiwiZmlsZSI6InBvaW50LXN0YXRlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0e1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOjkwJTtcbn1cblxuaDV7XG4gICAgY29sb3I6ICNCMDFEMjI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmhlYWRlciAuY29sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcbn1cblxuLmNvbCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG4uaGVhZGVyLXJvdyB7XG4gICAgYmFja2dyb3VuZDogICNCMDFEMjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAuY29fcm97XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRUNFRUVGO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaGVhZHJfY29se1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi10ZXh0LCBwe1xuICAgICAgZm9udC1zaXplOjEwcHg7XG4gIH1cbiAgLmFjdDF7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNCMDFEMjIgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC50YWJsZXtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI2VmZWFlYTtcbiAgfVxuICAudGFibGVfc3RhcnR7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAucGlua0Jne2JhY2tncm91bmQtY29sb3I6ICNmMmU4ZTg7fVxuICAuYmdXYWxsZXRJbWFnZXsgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO3BhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fVxuXG4gICAgLmRhdGFUYWJsZXtcbiAgICAgIC5oZWFkZXItcm93IHRkeyAgcGFkZGluZzogMTBweDsgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7fVxuICAgICAgdHIuYm9keS1yb3cgdGQge1xuICAgICAgICB3aWR0aDogMTAwJTsgbWluLXdpZHRoOiBmaXQtY29udGVudDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFQ0VFRUY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cblxuICAgIH0iXX0= */";
      /***/
    },

    /***/
    46474: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{serverData?.header_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col *ngIf=\"serverData\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" [ngClass]=\"{'boundary1':  platform.width()>740}\">\n      <!-- <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">  </div> -->\n        <div class=\"underLineBorder\"></div>\n     <!-- <div class=\"ion-padding\">\n       <div class=\"table\">\n       <ion-row class=\"header-row\">\n        <ion-col class=\"co_ro\" size=\"3\" *ngFor = \"let item of serverData?.header_data\">\n          <ion-text>{{item}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let data of serverData?.data; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n        <ion-col  class=\"co_ro\" size=\"3\">\n          <ion-text>\n            {{data?.bill_month}}\n          </ion-text>\n        </ion-col>\n        trans_date\n        <ion-col  class=\"co_ro\" size=\"3\">\n          <ion-text>\n            {{data?.bill_month}}\n          </ion-text>\n        </ion-col>\n        <ion-col class=\"co_ro\" size=\"3\">\n          <p class=\"ion-no-margin\">{{data?.full_name}}</p>\n          <p class=\"ion-no-margin\">{{data?.contact}}</p>\n        </ion-col>\n        <ion-col class=\"co_ro\" size=\"3\">\n          <ion-text>{{data?.brand_name}}</ion-text>\n        </ion-col>\n        <ion-col class=\"co_ro\"  size=\"3\">\n          <ion-text>\n            {{data?.product_name}}\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n      </div> -->\n\n      <div style=\"width:100%;overflow:auto\" class=\"dataTable\" >\n        <table>\n          <tr class=\"header-row\">\n            <td class=\"ion-text-center\" *ngFor=\"let item of serverData?.header_data\">{{item}}</td>\n          </tr>\n          <tr class=\"body-row\" *ngFor=\"let data of serverData?.data; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n            <td class=\"ion-text-center\">{{data?.bill_month}}</td>\n            <td class=\"ion-text-center\">{{data?.trans_date}}</td>\n            <td class=\"ion-text-center\">{{data?.full_name}}<br>{{data?.contact}}</td>\n            <td class=\"ion-text-center\">{{data?.brand_name}}</td>\n            <td class=\"ion-text-center\">{{data?.product_name}}</td>\n            <!-- <td class=\"ion-text-center\"><ion-button *ngIf=\"data?.btn_applicable == '1'\" class = \"act1\" (click)=\"view(data)\">{{data?.detail_btn}}</ion-button></td> -->\n          </tr>\n        </table>\n        </div>\n       </ion-col>\n       </ion-row>\n       <div *ngIf=\"message!=''\">\n        <h1 class = \"headr_col\">{{message}}</h1>\n       </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_redemptionModule_point-statement_point-statement_module_ts-es5.js.map