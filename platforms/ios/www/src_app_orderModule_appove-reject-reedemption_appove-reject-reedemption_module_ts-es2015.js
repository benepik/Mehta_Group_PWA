(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_orderModule_appove-reject-reedemption_appove-reject-reedemption_module_ts"],{

/***/ 57537:
/*!***************************************************************************************************!*\
  !*** ./src/app/orderModule/appove-reject-reedemption/appove-reject-reedemption-routing.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppoveRejectReedemptionPageRoutingModule": function() { return /* binding */ AppoveRejectReedemptionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _appove_reject_reedemption_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appove-reject-reedemption.page */ 2271);




const routes = [
    {
        path: '',
        component: _appove_reject_reedemption_page__WEBPACK_IMPORTED_MODULE_0__.AppoveRejectReedemptionPage
    }
];
let AppoveRejectReedemptionPageRoutingModule = class AppoveRejectReedemptionPageRoutingModule {
};
AppoveRejectReedemptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppoveRejectReedemptionPageRoutingModule);



/***/ }),

/***/ 74177:
/*!*******************************************************************************************!*\
  !*** ./src/app/orderModule/appove-reject-reedemption/appove-reject-reedemption.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppoveRejectReedemptionPageModule": function() { return /* binding */ AppoveRejectReedemptionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _appove_reject_reedemption_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appove-reject-reedemption-routing.module */ 57537);
/* harmony import */ var _appove_reject_reedemption_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appove-reject-reedemption.page */ 2271);







let AppoveRejectReedemptionPageModule = class AppoveRejectReedemptionPageModule {
};
AppoveRejectReedemptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _appove_reject_reedemption_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppoveRejectReedemptionPageRoutingModule
        ],
        declarations: [_appove_reject_reedemption_page__WEBPACK_IMPORTED_MODULE_1__.AppoveRejectReedemptionPage]
    })
], AppoveRejectReedemptionPageModule);



/***/ }),

/***/ 2271:
/*!*****************************************************************************************!*\
  !*** ./src/app/orderModule/appove-reject-reedemption/appove-reject-reedemption.page.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppoveRejectReedemptionPage": function() { return /* binding */ AppoveRejectReedemptionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_appove_reject_reedemption_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./appove-reject-reedemption.page.html */ 11536);
/* harmony import */ var _appove_reject_reedemption_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appove-reject-reedemption.page.scss */ 67465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);









// import { ApiService } from '../provider/api.service';
let AppoveRejectReedemptionPage = class AppoveRejectReedemptionPage {
    constructor(apiService, zone, route, location, sendData) {
        this.apiService = apiService;
        this.zone = zone;
        this.route = route;
        this.location = location;
        this.sendData = sendData;
        this.priviousData = this.sendData.alldata;
    }
    ngOnInit() {
        this.orderDetail();
    }
    orderDetail() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "order_id": this.priviousData.auto_id,
                "is_panel_login": ''
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.orderDetailUrl, apiKey).subscribe((result) => {
                console.log("PostListUrl: ", result);
                this.apiService.presentLoadingClose();
                this.orderData = result;
                if (result.success == 1) {
                }
                else {
                    this.errorMessage = result.message;
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    close() {
        this.route.navigate(['/orderdetails']);
    }
    acceptFun(item) {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "order_id": this.priviousData.auto_id,
                "product_price": '',
                "agency_fees": '',
                "courier_charges": '',
                "order_status": item.order_status,
                "approval_status": item.approval_status,
                "request_for": this.priviousData.user_id,
                "utm_source": ''
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.acceptRejectUrl, apiKey).subscribe((result) => {
                console.log("PostListUrl: ", result);
                this.apiService.presentLoadingClose();
                if (result.success == 1) {
                    this.location.back();
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
AppoveRejectReedemptionPage.ctorParameters = () => [
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService }
];
AppoveRejectReedemptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-appove-reject-reedemption',
        template: _raw_loader_appove_reject_reedemption_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_appove_reject_reedemption_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppoveRejectReedemptionPage);



/***/ }),

/***/ 67465:
/*!*******************************************************************************************!*\
  !*** ./src/app/orderModule/appove-reject-reedemption/appove-reject-reedemption.page.scss ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerColor {\n  color: var(--headerColor);\n}\n\n.boldPDiv {\n  font-weight: bold;\n}\n\n.orderBgDiv {\n  background-color: #f8f8f8;\n}\n\n.fontPDiv {\n  font-size: 13px;\n}\n\n.imageorder {\n  height: 80px;\n  /* width: 100%; */\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.btnDiv {\n  display: block;\n  margin: auto;\n  width: 100px;\n}\n\n.borderRadius {\n  border-radius: 10px;\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG92ZS1yZWplY3QtcmVlZGVtcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEseUJBQUE7QUFFYjs7QUFEQTtFQUFVLGlCQUFBO0FBS1Y7O0FBSkE7RUFBWSx5QkFBQTtBQVFaOztBQVBBO0VBQVUsZUFBQTtBQVdWOztBQVZBO0VBQVksWUFBQTtFQUNSLGlCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQWNKOztBQWJJO0VBQVEsY0FBQTtFQUFlLFlBQUE7RUFBYSxZQUFBO0FBbUJ4Qzs7QUFsQkk7RUFBZSxtQkFBQTtFQUF1QixZQUFBO0FBdUIxQyIsImZpbGUiOiJhcHBvdmUtcmVqZWN0LXJlZWRlbXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJDb2xvcntjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO31cbi5ib2xkUERpdntmb250LXdlaWdodDogYm9sZDt9XG4ub3JkZXJCZ0RpdntiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O31cbi5mb250UERpdntmb250LXNpemU6IDEzcHg7fVxuLmltYWdlb3JkZXJ7aGVpZ2h0OiA4MHB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47fVxuICAgIC5idG5EaXZ7ZGlzcGxheTogYmxvY2s7bWFyZ2luOiBhdXRvO3dpZHRoOiAxMDBweDt9XG4gICAgLmJvcmRlclJhZGl1c3sgYm9yZGVyLXJhZGl1czogMTBweDsgICBwYWRkaW5nOiA0cHg7fSJdfQ== */");

/***/ }),

/***/ 11536:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderModule/appove-reject-reedemption/appove-reject-reedemption.page.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{orderData?.page_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button tappable (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" \n    class=\"whiteCol whit_Pad whit_pad_top\">\n    <ion-row>\n      <ion-col [size]=\"12\" >\n        <p class=\"ion-no-margin headerColor\" [innerHTML]=\"orderData?.order_str\"></p>\n      </ion-col>\n      <ion-col [size]=\"12\" >\n        <p class=\"ion-no-margin boldPDiv\" [innerHTML]=\"orderData?.total_point_str\"></p>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-text-right\" *ngFor=\"let id of orderData?.Tracking_details\">\n        <!-- <p class=\"ion-no-margin boldPDiv\" [innerHTML]=\"id?.key&nbsp;id?.value\"></p> -->\n        <p class=\"ion-no-margin boldPDiv\">{{id?.key}}&nbsp;{{id?.value}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of orderData?.data\">\n      <ion-col>\n        <p class=\"headerColor\">{{item?.key}}</p>\n        <div class=\"borderDiv orderBgDiv ion-padding\">\n          <ion-row *ngFor=\"let val of item?.data\">\n            <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\">\n              <p class=\"ion-no-margin fontPDiv\">{{val?.key}}</p>\n            </ion-col>\n            <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\">:</ion-col>\n            <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n              <p *ngIf=\"val?.media_type==0\" class=\"ion-no-margin fontPDiv borderRadius ion-text-center\" [style.color]=\"val?.color_code\" \n              [style.background-color]=\"val?.circle_color\">{{val?.value}}</p>\n              <img *ngIf=\"val?.media_type==1\" class=\"imageorder\" [src]=\"val?.value\"/>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngFor=\"let item of orderData?.footer_data\">\n        <ion-button *ngIf=\"item.btn_applicable==true\" color=\"danger ionic_btn btnDiv\" \n        tappable (click)=\"acceptFun(item)\">{{item?.btn_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n    </ion-col>\n    </ion-row>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_orderModule_appove-reject-reedemption_appove-reject-reedemption_module_ts-es2015.js.map