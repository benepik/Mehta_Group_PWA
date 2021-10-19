(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_redeemotp_redeemotp_module_ts"],{

/***/ 26009:
/*!************************************************************************!*\
  !*** ./src/app/redemptionModule/redeemotp/redeemotp-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemotpPageRoutingModule": function() { return /* binding */ RedeemotpPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _redeemotp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeemotp.page */ 26023);




const routes = [
    {
        path: '',
        component: _redeemotp_page__WEBPACK_IMPORTED_MODULE_0__.RedeemotpPage
    }
];
let RedeemotpPageRoutingModule = class RedeemotpPageRoutingModule {
};
RedeemotpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemotpPageRoutingModule);



/***/ }),

/***/ 14326:
/*!****************************************************************!*\
  !*** ./src/app/redemptionModule/redeemotp/redeemotp.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemotpPageModule": function() { return /* binding */ RedeemotpPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _redeemotp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeemotp-routing.module */ 26009);
/* harmony import */ var _redeemotp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeemotp.page */ 26023);







let RedeemotpPageModule = class RedeemotpPageModule {
};
RedeemotpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _redeemotp_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemotpPageRoutingModule
        ],
        declarations: [_redeemotp_page__WEBPACK_IMPORTED_MODULE_1__.RedeemotpPage]
    })
], RedeemotpPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_redemptionModule_redeemotp_redeemotp_module_ts-es2015.js.map