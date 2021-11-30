(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_profileModule_terms-conditions_terms-conditions_module_ts"],{

/***/ 38491:
/*!***********************************************************************************!*\
  !*** ./src/app/profileModule/terms-conditions/terms-conditions-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageRoutingModule": function() { return /* binding */ TermsConditionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions.page */ 82211);




const routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPage
    }
];
let TermsConditionsPageRoutingModule = class TermsConditionsPageRoutingModule {
};
TermsConditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsConditionsPageRoutingModule);



/***/ }),

/***/ 3625:
/*!***************************************************************************!*\
  !*** ./src/app/profileModule/terms-conditions/terms-conditions.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageModule": function() { return /* binding */ TermsConditionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions-routing.module */ 38491);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page */ 82211);







let TermsConditionsPageModule = class TermsConditionsPageModule {
};
TermsConditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPageRoutingModule
        ],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsPage]
    })
], TermsConditionsPageModule);



/***/ }),

/***/ 82211:
/*!*************************************************************************!*\
  !*** ./src/app/profileModule/terms-conditions/terms-conditions.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPage": function() { return /* binding */ TermsConditionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./terms-conditions.page.html */ 48730);
/* harmony import */ var _terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page.scss */ 53937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ 18345);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);





// import { Storage } from '@ionic/storage-angular'; 



let TermsConditionsPage = class TermsConditionsPage {
    constructor(localStorage, apiService, sendData, zone, router) {
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.sendData = sendData;
        this.zone = zone;
        this.router = router;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.apiService.tandc.
        // this.homePageData=this.sendData.alldata;
        // console.log('this.homePageData',this.homePageData);
        // if(this.homePageData){
        //   this.privacyData = this.homePageData.tnc;
        //   this.pageTitle=this.homePageData.page_title;
        // }else{
        this.localStorage.getStorage().then(storedData => {
            console.log('val', storedData);
            this.privacyData = storedData.maintainanceData.term_condition_data.data.content;
            this.pageTitle = storedData.maintainanceData.term_condition_data.page_title;
        });
        // }
    }
};
TermsConditionsPage.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__.DataTransferService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
TermsConditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsConditionsPage);



/***/ }),

/***/ 53937:
/*!***************************************************************************!*\
  !*** ./src/app/profileModule/terms-conditions/terms-conditions.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titleDiv {\n  font-size: 17px;\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.contentDiv {\n  font-size: 14px;\n  color: #464444;\n  line-height: 14px;\n}\n\n.knowledgeButton {\n  width: 50%;\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsZUFBQTtFQUFnQix5QkFBQTtFQUF5QixpQkFBQTtBQUluRDs7QUFIQTtFQUFZLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLGlCQUFBO0FBUzNDOztBQVJBO0VBQWlCLFVBQUE7RUFBWSxjQUFBO0VBQWUsWUFBQTtBQWM1QyIsImZpbGUiOiJ0ZXJtcy1jb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZURpdntmb250LXNpemU6IDE3cHg7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5jb250ZW50RGl2e2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogIzQ2NDQ0NDtsaW5lLWhlaWdodDogMTRweDt9XG4ua25vd2xlZGdlQnV0dG9ue3dpZHRoOiA1MCUgO2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogYXV0bzt9Il19 */");

/***/ }),

/***/ 48730:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profileModule/terms-conditions/terms-conditions.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding\">\n      <!-- <p class=\"titleDiv\" [innerHTML]=\"pageTitle\"></p> -->\n      <p class=\"contentDiv\" [innerHTML]=\"privacyData\"></p>\n      <!-- <ion-button *ngIf=\"homePageData?.btn_applicable==true\" color=\"danger\" class=\"knowledgeButton\"\n      (click)=\"gototerms()\">{{homePageData?.btn_text}}</ion-button> -->\n      </ion-col>\n      </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profileModule_terms-conditions_terms-conditions_module_ts-es2015.js.map