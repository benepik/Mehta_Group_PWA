(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_dealer-allocat_dealer-allocat_module_ts"], {
    /***/
    15456: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DealerAllocatPageRoutingModule": function DealerAllocatPageRoutingModule() {
          return (
            /* binding */
            _DealerAllocatPageRoutingModule
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


      var _dealer_allocat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dealer-allocat.page */
      39342);

      var routes = [{
        path: '',
        component: _dealer_allocat_page__WEBPACK_IMPORTED_MODULE_0__.DealerAllocatPage
      }];

      var _DealerAllocatPageRoutingModule = function DealerAllocatPageRoutingModule() {
        _classCallCheck(this, DealerAllocatPageRoutingModule);
      };

      _DealerAllocatPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DealerAllocatPageRoutingModule);
      /***/
    },

    /***/
    74150: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DealerAllocatPageModule": function DealerAllocatPageModule() {
          return (
            /* binding */
            _DealerAllocatPageModule
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


      var _dealer_allocat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dealer-allocat-routing.module */
      15456);
      /* harmony import */


      var _dealer_allocat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dealer-allocat.page */
      39342);

      var _DealerAllocatPageModule = function DealerAllocatPageModule() {
        _classCallCheck(this, DealerAllocatPageModule);
      };

      _DealerAllocatPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _dealer_allocat_routing_module__WEBPACK_IMPORTED_MODULE_0__.DealerAllocatPageRoutingModule],
        declarations: [_dealer_allocat_page__WEBPACK_IMPORTED_MODULE_1__.DealerAllocatPage]
      })], _DealerAllocatPageModule);
      /***/
    },

    /***/
    39342: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DealerAllocatPage": function DealerAllocatPage() {
          return (
            /* binding */
            _DealerAllocatPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_dealer_allocat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dealer-allocat.page.html */
      66272);
      /* harmony import */


      var _dealer_allocat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dealer-allocat.page.scss */
      58459);
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

      var _DealerAllocatPage = /*#__PURE__*/function () {
        function DealerAllocatPage(route, platform, apiService, zone, sendData) {
          _classCallCheck(this, DealerAllocatPage);

          this.route = route;
          this.platform = platform;
          this.apiService = apiService;
          this.zone = zone;
          this.sendData = sendData;
          this.serverData = [];
          this.month = new Date().toISOString();
          this.mnth = '';
          this.yr = ''; // this.mnth = this.month.slice(5,7);
          // this.yr= this.month.slice(0,4);

          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          });
        }

        _createClass(DealerAllocatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dealerAllocateShow(this.mnth, this.yr);
          }
        }, {
          key: "changeData",
          value: function changeData(ev) {
            console.log('ev', ev);
            this.mnth = this.month.slice(5, 7);
            this.yr = this.month.slice(0, 4);
            console.log('ev', this.mnth);
            console.log('ev', this.yr);
            this.dealerAllocateShow(this.mnth, this.yr);
          }
        }, {
          key: "dealerAllocateShow",
          value: function dealerAllocateShow(Month, Year) {
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
                          "month": Month,
                          "year": Year,
                          "request_page": "dealer",
                          "request_for": ""
                        };
                        this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.DealerAllocationUrl, apiKey).subscribe(function (result) {
                          _this2.apiService.presentLoadingClose();

                          _this2.serverData = result;

                          if (result.success == 1) {
                            _this2.message = '';
                          } else {
                            _this2.message = result.message; // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
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
        }, {
          key: "close",
          value: function close() {
            this.route.navigate(['./tabs/home']);
          }
        }, {
          key: "view",
          value: function view(item) {
            this.sendData.pointData = item;
            this.sendData.month = this.mnth;
            this.sendData.year = this.yr;
            console.log("month: ", this.yr);
            this.route.navigate(['./point-statement']);
          }
        }]);

        return DealerAllocatPage;
      }();

      _DealerAllocatPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }];
      };

      _DealerAllocatPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-dealer-allocat',
        template: _raw_loader_dealer_allocat_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dealer_allocat_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DealerAllocatPage);
      /***/
    },

    /***/
    58459: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".act {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: #B01D22 !important;\n  color: #B01D22 !important;\n  border: 1px solid;\n  border-radius: 5px;\n  width: 90%;\n}\n\n.seg {\n  padding: 15px;\n}\n\nh5 {\n  color: #B01D22;\n  font-size: 20px;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-row {\n  background: #B01D22;\n  color: #fff;\n}\n\n.co_ro {\n  border-left: 1px solid #ECEEEF;\n  text-align: center;\n}\n\nion-text, p {\n  font-size: 14px;\n}\n\n.headr_col {\n  text-align: center;\n  color: #B01D22 !important;\n}\n\n.act1 {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: #B01D22 !important;\n  color: #B01D22 !important;\n  border: 1px solid;\n  border-radius: 8px;\n  width: 100%;\n  height: 20px;\n}\n\n.table {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n}\n\n.table_start {\n  padding-top: 20px;\n}\n\n.pinkBg {\n  background-color: #f2e8e8;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n\n.dataTable table {\n  width: 100%;\n}\n\n.dataTable .header-row td {\n  padding: 10px;\n  border-right: 1px solid #fff;\n}\n\n.dataTable tr.body-row td {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  white-space: nowrap;\n  padding: 10px 5px;\n  border-right: 1px solid #ECEEEF;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxlci1hbGxvY2F0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLDBCQUFBO0VBQTRCLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3BFLHlCQUFBO0VBQTBCLGlCQUFBO0VBQWtCLGtCQUFBO0VBQW1CLFVBQUE7QUFPbkU7O0FBTkE7RUFBSyxhQUFBO0FBVUw7O0FBVEE7RUFBSSxjQUFBO0VBQWdCLGVBQUE7QUFjcEI7O0FBYkE7RUFBYywyQkFBQTtBQWlCZDs7QUFoQkE7RUFBTyxzQkFBQTtFQUF3Qix5QkFBQTtFQUEyQix3QkFBQTtBQXNCMUQ7O0FBckJBO0VBQWlCLDRCQUFBO0FBeUJqQjs7QUF4QkE7RUFBc0IsNkJBQUE7QUE0QnRCOztBQTNCQTtFQUFhLG1CQUFBO0VBQXFCLFdBQUE7QUFnQ2xDOztBQS9CQTtFQUFPLDhCQUFBO0VBQStCLGtCQUFBO0FBb0N0Qzs7QUFuQ0U7RUFBWSxlQUFBO0FBdUNkOztBQXRDRTtFQUFXLGtCQUFBO0VBQW1CLHlCQUFBO0FBMkNoQzs7QUExQ0U7RUFBTSwwQkFBQTtFQUEyQixvQ0FBQTtFQUFxQyxrQ0FBQTtFQUFtQyx5QkFBQTtFQUN2RyxpQkFBQTtFQUFrQixrQkFBQTtFQUFtQixXQUFBO0VBQVksWUFBQTtBQW9EckQ7O0FBbkRFO0VBQU8sbUNBQUE7QUF1RFQ7O0FBdERFO0VBQWEsaUJBQUE7QUEwRGY7O0FBekRFO0VBQVEseUJBQUE7QUE2RFY7O0FBNURFO0VBQWUsNEJBQUE7RUFBNkIsc0JBQUE7RUFBdUIsWUFBQTtFQUFhLDJCQUFBO0FBbUVsRjs7QUFqRUk7RUFBTSxXQUFBO0FBcUVWOztBQXBFSTtFQUFpQixhQUFBO0VBQWdCLDRCQUFBO0FBd0VyQzs7QUF2RUk7RUFBZ0IsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQXdCLG1CQUFBO0VBQXFCLGlCQUFBO0VBQWtCLCtCQUFBO0VBQzNFLGVBQUE7QUE2RVIiLCJmaWxlIjoiZGVhbGVyLWFsbG9jYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdHsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgLS1ib3JkZXItY29sb3I6ICNCMDFEMjIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O2JvcmRlcjogMXB4IHNvbGlkO2JvcmRlci1yYWRpdXM6IDVweDt3aWR0aDo5MCU7fVxuLnNlZ3twYWRkaW5nOiAxNXB4O31cbmg1eyBjb2xvcjogI0IwMUQyMjsgZm9udC1zaXplOiAyMHB4O31cbi5oZWFkZXIgLmNvbCB7YmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7fVxuLmNvbCB7IGJvcmRlcjogc29saWQgMXB4IGdyZXk7IGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7IGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTt9XG4uY29sOmxhc3QtY2hpbGQge2JvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7fVxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge2JvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O31cbi5oZWFkZXItcm93IHtiYWNrZ3JvdW5kOiAgI0IwMUQyMjtjb2xvcjogI2ZmZjt9XG4uY29fcm97Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRUNFRUVGO3RleHQtYWxpZ246IGNlbnRlcjt9XG4gIGlvbi10ZXh0LCBwe2ZvbnQtc2l6ZTogMTRweDt9XG4gIC5oZWFkcl9jb2x7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7fVxuICAuYWN0MXt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LS1ib3JkZXItY29sb3I6ICNCMDFEMjIgIWltcG9ydGFudDtjb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO2JvcmRlci1yYWRpdXM6IDhweDt3aWR0aDogMTAwJTtoZWlnaHQ6IDIwcHg7fVxuICAudGFibGV7Ym94LXNoYWRvdzogMXB4IDFweCAxcHggMnB4ICNlZmVhZWE7fVxuICAudGFibGVfc3RhcnR7cGFkZGluZy10b3A6IDIwcHg7fVxuICAucGlua0Jne2JhY2tncm91bmQtY29sb3I6ICNmMmU4ZTg7fVxuICAuYmdXYWxsZXRJbWFnZXtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7cGFkZGluZzogNXB4O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9XG4gIC5kYXRhVGFibGV7XG4gICAgdGFibGV7d2lkdGg6IDEwMCU7fVxuICAgIC5oZWFkZXItcm93IHRkeyAgcGFkZGluZzogMTBweDsgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7fVxuICAgIHRyLmJvZHktcm93IHRkIHttaW4td2lkdGg6IGZpdC1jb250ZW50OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBwYWRkaW5nOiAxMHB4IDVweDtib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUNFRUVGO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7fVxuXG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    66272: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{serverData?.header_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <!-- <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\"> </div> -->\n        <div class=\"underLineBorder\"></div>\n\n     <div class=\"seg\">\n      <ion-row>\n        <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"6\">\n         <ion-item lines=\"none\">\n           <!-- <ion-label position=\"stacked\">Change Year</ion-label> -->\n           <ion-datetime [(ngModel)] = \"month\" displayFormat=\"MMM  YYYY\" (ionChange) = \"changeData($event)\"></ion-datetime>\n             <ion-icon name=\"chevron-down-outline\"></ion-icon>\n           </ion-item>\n        </ion-col>\n      </ion-row>\n       <!-- <ion-row>\n         <ion-col size-xl=\"12\" size-md=\"12\" size-xs=\"12\">\n          <ion-item>\n            <ion-label position=\"stacked\">Select Month</ion-label>\n              <ion-datetime [(ngModel)] = \"month\" displayFormat=\"MMM  YYYY\" placeholder=\"Select Month\" (ionChange) = \"changeData($event)\"></ion-datetime>\n       \n           \n            </ion-item>\n         </ion-col>\n       </ion-row> -->\n       <div style=\"width:100%;overflow:auto\" class=\"dataTable\" >\n        <table>\n          <tr class=\"header-row\">\n            <td class=\"ion-text-center\" *ngFor=\"let item of serverData?.header_data\">{{item}}</td>\n          </tr>\n          <tr class=\"body-row\" *ngFor=\"let data of serverData?.data; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n            <td class=\"ion-text-center\"> {{ind + 1}}</td>\n            <td class=\"ion-text-center\">{{data?.full_name}}<br> <p class=\"ion-no-margin\">{{data?.dealer_code}}</p></td>\n            <td class=\"ion-text-center\">{{data?.bags_sold}}</td>\n            <!-- <td class=\"ion-text-center\">{{data?.bags_sold}}</td> -->\n            <td class=\"ion-text-center\"><ion-button  class = \"act1\" (click)=\"view(data)\">View</ion-button></td>\n          </tr>\n        </table>\n        </div>\n        <h1 *ngIf = \"message !=''\" class = \"headr_col\">{{message}}</h1>\n      <!-- <div class=\"table_start\">\n       <div class=\"table\">\n       <ion-row class=\"header-row\">\n        <ion-col class=\"co_ro\" size=\"3\" *ngFor = \"let item of serverData?.header_data\">\n          <ion-text>{{item}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <h1 *ngIf = \"message !=''\" class = \"headr_col\">{{message}}</h1>\n      <ion-row *ngFor=\"let data of serverData?.data; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n        <ion-col *ngIf = \"message ==''\" class=\"co_ro\" size=\"3\">\n          <ion-text>\n            {{ind + 1}}\n          </ion-text>\n        </ion-col>\n        <ion-col *ngIf = \"message ==''\" size=\"3\" class=\"co_ro\">\n          <ion-text>{{data?.full_name}}</ion-text>\n          <p class=\"ion-no-margin\">{{data?.dealer_code}}</p>\n        </ion-col>\n        <ion-col *ngIf = \"message ==''\" size=\"3\" class=\"co_ro\">\n          <ion-text>{{data?.bags_sold}}</ion-text>\n        </ion-col>\n        <ion-col *ngIf = \"message ==''\" class=\"co_ro\" size=\"3\">\n          <ion-button  class = \"act1\" (click)=\"view(data)\">View</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n      </div> -->\n      </div>\n       </ion-col>\n       </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_dealer-allocat_dealer-allocat_module_ts-es5.js.map