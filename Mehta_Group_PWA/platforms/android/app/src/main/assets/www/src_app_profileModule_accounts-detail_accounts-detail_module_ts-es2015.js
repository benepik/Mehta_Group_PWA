(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_profileModule_accounts-detail_accounts-detail_module_ts"],{

/***/ 41953:
/*!*********************************************************************************!*\
  !*** ./src/app/profileModule/accounts-detail/accounts-detail-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsDetailPageRoutingModule": function() { return /* binding */ AccountsDetailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _accounts_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-detail.page */ 84783);




const routes = [
    {
        path: '',
        component: _accounts_detail_page__WEBPACK_IMPORTED_MODULE_0__.AccountsDetailPage
    }
];
let AccountsDetailPageRoutingModule = class AccountsDetailPageRoutingModule {
};
AccountsDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountsDetailPageRoutingModule);



/***/ }),

/***/ 68938:
/*!*************************************************************************!*\
  !*** ./src/app/profileModule/accounts-detail/accounts-detail.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsDetailPageModule": function() { return /* binding */ AccountsDetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _accounts_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-detail-routing.module */ 41953);
/* harmony import */ var _accounts_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts-detail.page */ 84783);







let AccountsDetailPageModule = class AccountsDetailPageModule {
};
AccountsDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _accounts_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsDetailPageRoutingModule
        ],
        declarations: [_accounts_detail_page__WEBPACK_IMPORTED_MODULE_1__.AccountsDetailPage]
    })
], AccountsDetailPageModule);



/***/ }),

/***/ 84783:
/*!***********************************************************************!*\
  !*** ./src/app/profileModule/accounts-detail/accounts-detail.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsDetailPage": function() { return /* binding */ AccountsDetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_accounts_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accounts-detail.page.html */ 41611);
/* harmony import */ var _accounts_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts-detail.page.scss */ 30731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);








let AccountsDetailPage = class AccountsDetailPage {
    constructor(platform, apiService, zone, router) {
        this.platform = platform;
        this.apiService = apiService;
        this.zone = zone;
        this.router = router;
        this.accountData = [];
    }
    ngOnInit() {
        this.apiService.presentLoadingDefault();
        this.AccountDetail();
    }
    AccountDetail() {
        this.zone.run(() => {
            let apiKey = {};
            console.log('login data response', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.accountDetailUrl, apiKey).subscribe((result) => {
                console.log('login data response', result);
                this.account = result;
                this.apiService.presentLoadingClose();
                if (result.success == 1) {
                    this.accountData = result.data.account_details;
                    // this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');     
                }
                else {
                    this.errorMessage = result.message;
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
AccountsDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AccountsDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-accounts-detail',
        template: _raw_loader_accounts_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accounts_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountsDetailPage);



/***/ }),

/***/ 30731:
/*!*************************************************************************!*\
  !*** ./src/app/profileModule/accounts-detail/accounts-detail.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pDiv {\n  font-size: 14px;\n  color: gray;\n}\n\n.aaccountTitle {\n  font-size: 15px;\n  margin: 14px 0px 14px 0px;\n}\n\n.mainTitle {\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.titleDiv {\n  font-size: 15px;\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.acount_row {\n  height: 100%;\n}\n\n.colDiv {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxlQUFBO0VBQ0YsV0FBQTtBQUVKOztBQUNBO0VBQW1CLGVBQUE7RUFDZix5QkFBQTtBQUdKOztBQUZBO0VBQVcseUJBQUE7RUFBeUIsaUJBQUE7QUFPcEM7O0FBTkE7RUFBVSxlQUFBO0VBQWdCLHlCQUFBO0VBQXlCLGlCQUFBO0FBWW5EOztBQVhBO0VBQ0ksWUFBQTtBQWNKOztBQVpBO0VBQVEsVUFBQTtBQWdCUiIsImZpbGUiOiJhY2NvdW50cy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBEaXZ7Zm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIC8vIHdpZHRoOiA4MCU7XG59XG4uYWFjY291bnRUaXRsZXsgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMTRweCAwcHggMTRweCAwcHg7IH1cbi5tYWluVGl0bGV7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi50aXRsZURpdntmb250LXNpemU6IDE1cHg7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5hY291bnRfcm93e1xuICAgIGhlaWdodDoxMDAlO1xufVxuLmNvbERpdnt3aWR0aDogNTAlO30iXX0= */");

/***/ }),

/***/ 41611:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profileModule/accounts-detail/accounts-detail.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{account?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"acount_row\">\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" push-md=\"3\" push-lg=\"3\" class=\"whiteCol whit_Pad\">\n      <!-- <p class=\"ion-no-margin mainTitle\">Accounts Details</p> -->\n      <p class=\"titleDiv\" [innerHTML]=\"account?.pageTitle\"></p>\n      <ion-row>\n        <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" *ngFor=\"let item of accountData\" >\n        <p class=\"aaccountTitle \" [innerHTML]=\"item?.key\"></p>\n        <p  class=\"ion-no-margin pDiv borderBtmDiv\"  [innerHTML]=\"item?.value\"></p>\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"errorMessage!=''\"> \n        <p class=\"ion-text-center\">{{errorMessage}}</p>\n      </div>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profileModule_accounts-detail_accounts-detail_module_ts-es2015.js.map