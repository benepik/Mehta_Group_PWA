(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_helpSupportModule_faq_faq_module_ts"], {
    /***/
    30275: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FaqPageRoutingModule": function FaqPageRoutingModule() {
          return (
            /* binding */
            _FaqPageRoutingModule
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


      var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./faq.page */
      37941);

      var routes = [{
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
      }];

      var _FaqPageRoutingModule = function FaqPageRoutingModule() {
        _classCallCheck(this, FaqPageRoutingModule);
      };

      _FaqPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FaqPageRoutingModule);
      /***/
    },

    /***/
    64621: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FaqPageModule": function FaqPageModule() {
          return (
            /* binding */
            _FaqPageModule
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


      var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./faq-routing.module */
      30275);
      /* harmony import */


      var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./faq.page */
      37941);

      var _FaqPageModule = function FaqPageModule() {
        _classCallCheck(this, FaqPageModule);
      };

      _FaqPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage]
      })], _FaqPageModule);
      /***/
    },

    /***/
    37941: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FaqPage": function FaqPage() {
          return (
            /* binding */
            _FaqPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./faq.page.html */
      2142);
      /* harmony import */


      var _faq_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./faq.page.scss */
      868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var _FaqPage = /*#__PURE__*/function () {
        function FaqPage(zone, router, activeRoute, apiService, sendData) {
          _classCallCheck(this, FaqPage);

          this.zone = zone;
          this.router = router;
          this.activeRoute = activeRoute;
          this.apiService = apiService;
          this.sendData = sendData; // faqs:any=[];

          this.visible = false;
          this.currentItemindex = 0;
          this.faqsData = this.sendData.alldata;
        }

        _createClass(FaqPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.faqShow();
          } // faqShow(){
          //   this.activeRoute.queryParams.subscribe(params => {
          //         if(params){
          //           if(params.data){
          //           console.log("data1: ", JSON.parse(params.data));
          //           this.faqs= JSON.parse(params.data);
          //           if(JSON.parse(params.data).list.success == 1){
          //           this.faqsData= JSON.parse(params.data).list.data;
          //          this.faqs.list[this.currentItemindex].showSegment = true;
          //           }
          //           else {
          //             this.showImage = JSON.parse(params.data).list.noDataImage;
          //           }
          //         }
          //         }
          //     })
          // }

        }, {
          key: "showArrow",
          value: function showArrow(item, index) {
            this.currentItemindex = index;
            console.log(item, index);

            if (item.showSegment) {
              item.showSegment = item.showSegment == true ? false : true;
            } else {
              item.showSegment = true;
            }
          }
        }]);

        return FaqPage;
      }();

      _FaqPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }];
      };

      _FaqPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-faq',
        template: _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_faq_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FaqPage);
      /***/
    },

    /***/
    868: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".arrowIcon {\n  height: 20px;\n  width: 100%;\n  margin: auto;\n}\n\n.boxS {\n  box-shadow: 1px 0px 4px 1px #d2d2d2;\n  margin-bottom: 10px;\n}\n\n.mainTitle {\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.SettingTitle {\n  font-size: 14px;\n}\n\nion-icon {\n  margin: auto;\n  display: block;\n  color: var(--headerColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxZQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUFJckM7O0FBSEE7RUFBTSxtQ0FBQTtFQUFvQyxtQkFBQTtBQVExQzs7QUFQQTtFQUFXLHlCQUFBO0VBQXlCLGlCQUFBO0FBWXBDOztBQVhBO0VBQWMsZUFBQTtBQWVkOztBQWRBO0VBQVMsWUFBQTtFQUFjLGNBQUE7RUFBZSx5QkFBQTtBQW9CdEMiLCJmaWxlIjoiZmFxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnJvd0ljb257aGVpZ2h0OiAyMHB4O3dpZHRoOiAxMDAlOyBtYXJnaW46IGF1dG87fVxuLmJveFN7Ym94LXNoYWRvdzogMXB4IDBweCA0cHggMXB4ICNkMmQyZDI7bWFyZ2luLWJvdHRvbTogMTBweDt9XG4ubWFpblRpdGxle2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtmb250LXdlaWdodDogYm9sZDt9XG4uU2V0dGluZ1RpdGxle2ZvbnQtc2l6ZTogMTRweDt9XG5pb24taWNvbnttYXJnaW46IGF1dG87IGRpc3BsYXk6IGJsb2NrO2NvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7fSJdfQ== */";
      /***/
    },

    /***/
    2142: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{faqsData?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" push-md=\"3\" push-lg=\"3\" class=\"whiteCol ion-padding\">\n      <!-- <p class=\"ion-no-margin mainTitle\">Settings</p> -->\n      <!-- <br> -->\n      <ion-row class=\"boxS ion-padding\" *ngIf = \"showImage\">\n        <ion-col [size]=\"11\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\" >\n          <img [src]=\"showImage\" onerror=\"this.src='assets/watermark/watermark.png'\">\n        </ion-col>\n      </ion-row>\n      <ion-row [ngClass]=\"item?.showSegment ? 'active' : '' \" *ngFor=\"let item of faqsData?.list?.data; let i = index\" \n      tappable (click)=\"showArrow(item, i)\" class=\"boxS ion-padding\">\n        <ion-col [size]=\"11\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\"  >\n          <p class=\"SettingTitle  ion-no-margin\" [innerHTML]=\"item?.question\"></p>\n\n          </ion-col>\n          <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"autoMargin\" tappable >\n            <ion-icon  [name]=\"item?.showSegment? 'chevron-up-outline' :'chevron-down-outline'\" ></ion-icon>\n          </ion-col>\n          <ion-row *ngIf=\"item?.showSegment\">\n            <ion-col>\n              <p class=\"discriptionDiv ion-no-margin\" [innerHTML]=\"item?.answer\"></p>\n            </ion-col>\n          </ion-row>\n      </ion-row>\n\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_helpSupportModule_faq_faq_module_ts-es5.js.map