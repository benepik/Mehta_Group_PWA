(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_account-statment_account-statment_module_ts"], {
    /***/
    25338: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountStatmentPageRoutingModule": function AccountStatmentPageRoutingModule() {
          return (
            /* binding */
            _AccountStatmentPageRoutingModule
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


      var _account_statment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account-statment.page */
      53697);

      var routes = [{
        path: '',
        component: _account_statment_page__WEBPACK_IMPORTED_MODULE_0__.AccountStatmentPage
      }];

      var _AccountStatmentPageRoutingModule = function AccountStatmentPageRoutingModule() {
        _classCallCheck(this, AccountStatmentPageRoutingModule);
      };

      _AccountStatmentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AccountStatmentPageRoutingModule);
      /***/
    },

    /***/
    61800: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountStatmentPageModule": function AccountStatmentPageModule() {
          return (
            /* binding */
            _AccountStatmentPageModule
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


      var _account_statment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account-statment-routing.module */
      25338);
      /* harmony import */


      var _account_statment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account-statment.page */
      53697);

      var _AccountStatmentPageModule = function AccountStatmentPageModule() {
        _classCallCheck(this, AccountStatmentPageModule);
      };

      _AccountStatmentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _account_statment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountStatmentPageRoutingModule],
        declarations: [_account_statment_page__WEBPACK_IMPORTED_MODULE_1__.AccountStatmentPage]
      })], _AccountStatmentPageModule);
      /***/
    },

    /***/
    53697: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountStatmentPage": function AccountStatmentPage() {
          return (
            /* binding */
            _AccountStatmentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_account_statment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./account-statment.page.html */
      99087);
      /* harmony import */


      var _account_statment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account-statment.page.scss */
      8528);
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


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      51532);

      var _AccountStatmentPage = /*#__PURE__*/function () {
        function AccountStatmentPage(route, zone, apiService, sendData) {
          _classCallCheck(this, AccountStatmentPage);

          this.route = route;
          this.zone = zone;
          this.apiService = apiService;
          this.sendData = sendData;
          this.serverData = [];
          this.value = 0;
          this.allData = this.sendData.registrationType;
        }

        _createClass(AccountStatmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.accountShow(null);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.accountShow(event);
          }
        }, {
          key: "accountShow",
          value: function accountShow(event) {
            var _this = this;

            if (event == null) {
              this.apiService.presentLoadingDefault();
            }

            this.apiService.presentLoadingDefault(); //this.apiService.presentLoadingDefault();

            this.zone.run(function () {
              var apiKey = {
                // "request_type":this.allData.request_Type,
                "request_page": _this.allData.request_page,
                "request_for": _this.allData.auto_id
              };

              _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.AccStatementUrl, apiKey).subscribe(function (result) {
                console.log("AccStatementUrl: ", result);

                if (event == null) {
                  _this.apiService.presentLoadingClose();
                } else {
                  event.target.complete();
                }

                _this.apiService.presentLoadingClose();

                _this.title = result.pageTitle;
                _this.serverData = result.data;

                if (result.success == 1) {
                  _this.errorMessage = '';
                } else {
                  _this.errorMessage = result.message;
                }
              }, function (err) {});
            });
          }
        }]);

        return AccountStatmentPage;
      }();

      _AccountStatmentPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__.DataTransferService
        }];
      };

      _AccountStatmentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account-statment',
        template: _raw_loader_account_statment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_account_statment_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AccountStatmentPage);
      /***/
    },

    /***/
    8528: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table {\n  box-shadow: 1px 1px 1px 2px #EFEAEA;\n}\n\n.pinkBg {\n  background-color: #F2E8E8;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-row {\n  background: #B01D22;\n  color: #fff;\n  font-size: 14px;\n}\n\n.co_ro {\n  border-left: 1px solid #ECEEEF;\n  text-align: center;\n}\n\nion-text {\n  font-size: 12px;\n}\n\n.walletImages {\n  height: 40px;\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: auto;\n  display: block;\n}\n\n.colorWhite {\n  color: #fff;\n}\n\n.accTitle {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.totalBtn {\n  --background:#ec6d72;\n  text-transform: none;\n  text-transform: initial;\n  max-width: 100%;\n  white-space: pre-wrap;\n  font-size: 11px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n}\n\n.fontAcc {\n  font-size: 12px;\n}\n\n.dataTable .header-row td {\n  min-width: 100px;\n  padding: 10px;\n  border-right: 1px solid #fff;\n}\n\n.dataTable tr td {\n  padding: 2px;\n  border-right: 1px solid #ECEEEF;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc3RhdG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sbUNBQUE7QUFFUDs7QUFERTtFQUFRLHlCQUFBO0FBS1Y7O0FBSkU7RUFBZSwyQkFBQTtBQVFqQjs7QUFQQTtFQUFNLHNCQUFBO0VBQXVCLHlCQUFBO0VBQTJCLHdCQUFBO0FBYXhEOztBQVpBO0VBQWlCLDRCQUFBO0FBZ0JqQjs7QUFmQTtFQUFzQiw2QkFBQTtBQW1CdEI7O0FBbEJBO0VBQWEsbUJBQUE7RUFBcUIsV0FBQTtFQUFZLGVBQUE7QUF3QjlDOztBQXZCRTtFQUFPLDhCQUFBO0VBQStCLGtCQUFBO0FBNEJ4Qzs7QUEzQkU7RUFBVSxlQUFBO0FBK0JaOztBQTlCRTtFQUFlLFlBQUE7RUFBYSxXQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtFQUFvQixZQUFBO0VBQWEsY0FBQTtBQXNDM0U7O0FBckNJO0VBQVksV0FBQTtBQXlDaEI7O0FBeENJO0VBQVUsZUFBQTtFQUFnQixpQkFBQTtBQTZDOUI7O0FBNUNJO0VBQWUsNEJBQUE7RUFBOEIsc0JBQUE7RUFBd0IsMkJBQUE7QUFrRHpFOztBQWpESTtFQUFVLG9CQUFBO0VBQXFCLG9CQUFBO0VBQUEsdUJBQUE7RUFBdUIsZUFBQTtFQUFlLHFCQUFBO0VBQXFCLGVBQUE7RUFDdEYsb0JBQUE7RUFBc0Isa0JBQUE7QUEwRDlCOztBQXpESTtFQUFTLGVBQUE7QUE2RGI7O0FBM0RNO0VBQWUsZ0JBQUE7RUFBZ0IsYUFBQTtFQUFnQiw0QkFBQTtBQWlFckQ7O0FBaEVNO0VBQU8sWUFBQTtFQUFZLCtCQUFBO0VBQWdDLGVBQUE7QUFxRXpEIiwiZmlsZSI6ImFjY291bnQtc3RhdG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle2JveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCAjRUZFQUVBO31cbiAgLnBpbmtCZ3tiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFOEU4O31cbiAgLmhlYWRlciAuY29sIHsgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7fVxuLmNvbCB7Ym9yZGVyOiBzb2xpZCAxcHggZ3JleTtib3JkZXItYm90dG9tLXN0eWxlOiBub25lOyBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7fVxuLmNvbDpsYXN0LWNoaWxkIHtib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O31cbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTt9XG4uaGVhZGVyLXJvdyB7YmFja2dyb3VuZDogICNCMDFEMjI7Y29sb3I6ICNmZmY7Zm9udC1zaXplOiAxNHB4O31cbiAgLmNvX3Jve2JvcmRlci1sZWZ0OiAxcHggc29saWQgI0VDRUVFRjt0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgaW9uLXRleHR7IGZvbnQtc2l6ZToxMnB4OyB9XG4gIC53YWxsZXRJbWFnZXN7IGhlaWdodDogNDBweDt3aWR0aDogNTBweDtvYmplY3QtZml0OiBjb250YWluO21hcmdpbjogYXV0bztkaXNwbGF5OiBibG9jazt9XG4gICAgLmNvbG9yV2hpdGV7Y29sb3I6ICNmZmY7fVxuICAgIC5hY2NUaXRsZXtmb250LXNpemU6MTRweDsgZm9udC13ZWlnaHQ6Ym9sZDt9XG4gICAgLmJnV2FsbGV0SW1hZ2V7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO31cbiAgICAudG90YWxCdG57LS1iYWNrZ3JvdW5kOiNlYzZkNzI7dGV4dC10cmFuc2Zvcm06aW5pdGlhbDttYXgtd2lkdGg6MTAwJTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtmb250LXNpemU6MTFweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7IC0tcGFkZGluZy1lbmQ6IDVweDt9XG4gICAgLmZvbnRBY2N7Zm9udC1zaXplOiAxMnB4O31cbiAgICAuZGF0YVRhYmxle1xuICAgICAgLmhlYWRlci1yb3cgdGR7bWluLXdpZHRoOjEwMHB4O3BhZGRpbmc6IDEwcHg7ICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO31cbiAgICAgIHRyIHRkIHtwYWRkaW5nOjJweDtib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUNFRUVGO2ZvbnQtc2l6ZTogMTNweDt9XG5cbiAgICB9Il19 */";
      /***/
    },

    /***/
    99087: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t  </ion-refresher>\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"ion-padding bgWalletImage\">\n        <p class=\"colorWhite ion-no-margin accTitle\">{{serverData?.reward_card?.title}}</p>\n        <ion-row>\n          <ion-col [size]=\"1\" sizexs=\"1\" size-md=\"1\" size-lg=\"1\">\n            <img src=\"assets/Other Icons/Wallet.svg\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"walletImages\">\n          </ion-col>\n          <ion-col [size]=\"5\" sizexs=\"5\" size-md=\"7\" size-lg=\"7\" >\n            <p class=\"ion-no-margin colorWhite fontAcc\">{{serverData?.reward_card?.available_balance_text}}</p>\n            <p class=\"ion-no-margin colorWhite\">{{serverData?.reward_card?.available_balance}}</p>\n          </ion-col>\n          <ion-col [size]=\"3\" sizexs=\"3\" size-md=\"2\" size-lg=\"2\" class=\"ion-no-padding\">\n            <ion-button  class=\"totalBtn\">{{serverData?.reward_card?.total_debits_text}}&nbsp;{{serverData?.reward_card?.total_debits}}</ion-button>\n          </ion-col>\n          <ion-col [size]=\"3\" sizexs=\"3\" size-md=\"2\" size-lg=\"2\" class=\"ion-text-right ion-no-padding\">\n            <ion-button class=\"totalBtn\">{{serverData?.reward_card?.total_credits_text}}&nbsp;{{serverData?.reward_card?.total_credits}}</ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <!-- table  -->\n\n<!-- \n      \n        <div style=\"width: 100%;overflow:scroll;\" class=\"dataTable\">\n          <ion-row class=\"header-row\" *ngIf=\"serverData?.account_data?.length>0\">\n          <ion-col class=\"co_ro\" size=\"3\" *ngFor = \"let item of serverData?.header\">\n            <ion-text>{{item?.value}}</ion-text>\n          </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let data of serverData?.account_data; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n            <ion-col  class=\"co_ro\" size=\"3\">\n              <ion-text>{{data?.date}} </ion-text>\n            </ion-col>\n            <ion-col class=\"co_ro\" size=\"3\">\n              <ion-text>{{data?.description}}</ion-text>\n            </ion-col>\n            <ion-col class=\"co_ro\" size=\"3\">\n              <ion-text>{{data?.debit}}</ion-text>\n            </ion-col>\n            <ion-col class=\"co_ro\"  size=\"3\">\n              <ion-text> {{data?.credit}} </ion-text>\n            </ion-col>\n          </ion-row>\n          <div *ngIf=\"errorMessage!=''\">\n            <p class=\"ion-text-center\">{{errorMessage}}</p> \n          </div>\n        </div>  -->\n\n\n        <div style=\"width:100%;overflow:auto\" class=\"dataTable\" >\n          <table width=\"100%\" border=\"1\" padding=\"5\">\n            <tr class=\"header-row\" >\n              <td class=\"ion-text-center\" *ngFor = \"let item of serverData?.header\">{{item?.value}}</td>\n              <!-- <td class=\"ion-text-center\" ></td> -->\n            </tr>\n            \n            <tr *ngFor=\"let data of serverData?.account_data; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n              <td class=\"ion-text-center\"> {{data?.transaction_date}}</td>\n              <td class=\"ion-text-center\"> {{data?.date}}</td>\n              <td class=\"ion-text-center\"><span>{{data?.description}}</span>\n                <!-- <br> \n                <p class=\"ion-no-margin\">{{data?.dealer_code}}</p> -->\n              </td>\n              <td class=\"ion-text-center\">{{data?.debit}}</td>\n              <td class=\"ion-text-center\"> {{data?.credit}}</td>\n              <!-- <td class=\"ion-text-center\">{{data?.debit}}</td> -->\n              <!-- <td class=\"ion-text-center\">{{data?.debit}}</td> -->\n              <!-- <td class=\"ion-text-center\">{{data?.bags_sold}}</td> -->\n              <!-- <td class=\"ion-text-center\"><ion-button  class = \"act1\" (click)=\"view(data)\">View</ion-button></td> -->\n            </tr>\n          </table>\n          </div>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_account-statment_account-statment_module_ts-es5.js.map