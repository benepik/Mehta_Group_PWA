(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_alert-list_alert-list_module_ts"], {
    /***/
    16172: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertListPageRoutingModule": function AlertListPageRoutingModule() {
          return (
            /* binding */
            _AlertListPageRoutingModule
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


      var _alert_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert-list.page */
      64632);

      var routes = [{
        path: '',
        component: _alert_list_page__WEBPACK_IMPORTED_MODULE_0__.AlertListPage
      }];

      var _AlertListPageRoutingModule = function AlertListPageRoutingModule() {
        _classCallCheck(this, AlertListPageRoutingModule);
      };

      _AlertListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AlertListPageRoutingModule);
      /***/
    },

    /***/
    83951: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertListPageModule": function AlertListPageModule() {
          return (
            /* binding */
            _AlertListPageModule
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


      var _alert_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert-list-routing.module */
      16172);
      /* harmony import */


      var _alert_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert-list.page */
      64632);

      var _AlertListPageModule = function AlertListPageModule() {
        _classCallCheck(this, AlertListPageModule);
      };

      _AlertListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _alert_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlertListPageRoutingModule],
        declarations: [_alert_list_page__WEBPACK_IMPORTED_MODULE_1__.AlertListPage]
      })], _AlertListPageModule);
      /***/
    },

    /***/
    64632: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertListPage": function AlertListPage() {
          return (
            /* binding */
            _AlertListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_alert_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./alert-list.page.html */
      42716);
      /* harmony import */


      var _alert_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert-list.page.scss */
      24352);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var _provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../provider/api.service */
      14303);
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      51532);

      var _AlertListPage = /*#__PURE__*/function () {
        function AlertListPage(zone, router, apiServices, sendData) {
          _classCallCheck(this, AlertListPage);

          this.zone = zone;
          this.router = router;
          this.apiServices = apiServices;
          this.sendData = sendData;
          this.value = 0;
          this.infiniteScroll_call = false;
        }

        _createClass(AlertListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.alertListFun();
          }
        }, {
          key: "alertListFun",
          value: function alertListFun() {
            var _this = this;

            this.zone.run(function () {
              console.log("shivi fun called==");
              var apiKey = {
                limit: _this.value
              };
              console.log("brand pending api keys==", apiKey);

              _this.apiServices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_2__.URLS.alertListApi, apiKey).subscribe(function (result) {
                console.log("brand pending Api Result==", result);
                _this.alertData = result;

                if (result.success == 1) {
                  if (_this.alertList == undefined) {
                    _this.alertList = result.data;
                  } else {
                    _this.alertList = _this.alertList.concat(result.data);
                  }

                  _this.errorMessage = '';
                } else {
                  _this.errorMessage = result.message; // this.apiServices.showToastMessage(result.message,'top',3000,'redBg');
                }

                if (_this.infiniteScroll_call == true) {
                  _this.stopInfiniteScroll();
                }
              }, function (err) {
                _this.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                if (_this.infiniteScroll_call == false) {
                  _this.stopInfiniteScroll();
                }
              });
            });
          }
        }, {
          key: "alertDetail",
          value: function alertDetail(data) {
            var _this2 = this;

            this.zone.run(function () {
              if (data.fron_end_page_name != '') {
                _this2.sendData.alldata = data;
                console.log('alertDat', _this2.sendData.alldata);

                _this2.router.navigate([data.fron_end_page_name]);
              } else {}
            });
          }
        }, {
          key: "stopInfiniteScroll",
          value: function stopInfiniteScroll() {
            if (this.infiniteScroll_call == true) {
              this.infiniteScroll_call = false;
              this.infiniteScroll_val.target.complete();
            }
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this3 = this;

            this.infiniteScroll_call = true;
            this.infiniteScroll_val = event;
            setTimeout(function () {
              _this3.value = _this3.alertList.length;

              _this3.alertListFun();
            }, 500);
          }
        }]);

        return AlertListPage;
      }();

      _AlertListPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__.DataTransferService
        }];
      };

      _AlertListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-alert-list',
        template: _raw_loader_alert_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_alert_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AlertListPage);
      /***/
    },

    /***/
    24352: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".moduleAligment {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.dataContainer {\n  padding-top: 10px;\n}\n\n.dataContainer img.modIcons {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border: 1px solid #d6d4d4;\n  display: block;\n  margin: auto;\n}\n\n.dataContainer p.modTitle {\n  margin: 5px auto;\n  line-height: 1.5;\n  font-size: 14px;\n  color: #444;\n  font-weight: bold;\n}\n\n.dataContainer .alertlist {\n  border: 1px solid #ececec;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  box-shadow: 0px 2px 5px #f1f1f1;\n  background: #fff;\n}\n\n.dataContainer p.date {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n  margin-bottom: 3px;\n}\n\n.dataContainer p.time {\n  font-size: 13px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLGtCQUFBO0VBQWtCLG1CQUFBO0FBR2xDOztBQUZBO0VBQWUsaUJBQUE7QUFNZjs7QUFMSTtFQUFhLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxZQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtFQUFtQix5QkFBQTtFQUF5QixjQUFBO0VBQWMsWUFBQTtBQWNwSDs7QUFiSTtFQUFXLGdCQUFBO0VBQWdCLGdCQUFBO0VBQWdCLGVBQUE7RUFBZSxXQUFBO0VBQVcsaUJBQUE7QUFvQnpFOztBQW5CSTtFQUFXLHlCQUFBO0VBQXlCLGtCQUFBO0VBQWtCLGtCQUFBO0VBQWtCLCtCQUFBO0VBQStCLGdCQUFBO0FBMEIzRzs7QUF6Qkk7RUFBTyxpQkFBQTtFQUFpQixZQUFBO0VBQWEsZUFBQTtFQUFnQixrQkFBQTtBQStCekQ7O0FBOUJJO0VBQU8sZUFBQTtFQUFnQixXQUFBO0FBa0MzQiIsImZpbGUiOiJhbGVydC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGVBbGlnbWVudHtwYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7fVxuLmRhdGFDb250YWluZXJ7cGFkZGluZy10b3A6IDEwcHg7XG4gICAgaW1nLm1vZEljb25ze2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjYwcHg7aGVpZ2h0OjYwcHg7b2JqZWN0LWZpdDpjb250YWluO2JvcmRlcjoxcHggc29saWQgI2Q2ZDRkNDtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO31cbiAgICBwLm1vZFRpdGxle21hcmdpbjo1cHggYXV0bztsaW5lLWhlaWdodDoxLjU7Zm9udC1zaXplOjE0cHg7Y29sb3I6IzQ0NDtmb250LXdlaWdodDpib2xkO31cbiAgICAuYWxlcnRsaXN0e2JvcmRlcjoxcHggc29saWQgI2VjZWNlYztib3JkZXItcmFkaXVzOjVweDttYXJnaW4tYm90dG9tOjVweDtib3gtc2hhZG93OjBweCAycHggNXB4ICNmMWYxZjE7YmFja2dyb3VuZDojZmZmO31cbiAgICBwLmRhdGV7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjogYmxhY2s7Zm9udC1zaXplOiAxOHB4O21hcmdpbi1ib3R0b206M3B4O31cbiAgICBwLnRpbWV7Zm9udC1zaXplOiAxM3B4O2NvbG9yOiBncmF5O31cbn0iXX0= */";
      /***/
    },

    /***/
    42716: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{alertData?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n  <div  *ngIf=\"alertList\" class=\"moduleAligment\">\n    <div   class=\"dataContainer\" >\n      <!-- <ion-row>\n        *ngFor=\"let data of alertList\"\n        <ion-col [size]=\"12\"><p class=\"date\">{{data?.label}}</p></ion-col>\n      </ion-row> -->\n      <ion-row *ngFor=\"let alert of alertList?.alert_notification\" class=\"alertlist\" tappable (click)=\"alertDetail(alert)\"> \n        <ion-col [size]=\"3\"><img src=\"{{alert?.title_icon}}\" class=\"modIcons\" onerror=\"this.src='./assets/watermark/watermark.png'\"></ion-col>\n        <ion-col [size]=\"9\">\n          <p class=\"modTitle\" [innerHTML]=\"alert.description\"></p>   \n          <p class=\"time autoMargin\">{{alert?.created_date}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n<div *ngIf=\"errorMessage\">\n  <p class=\"ion-text-center\">{{errorMessage}}</p>\n</div>\n<ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_alert-list_alert-list_module_ts-es5.js.map