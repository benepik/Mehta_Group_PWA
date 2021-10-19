(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_loginModule_login-type_login-type_module_ts"],{

/***/ 45158:
/*!*********************************************************************!*\
  !*** ./src/app/loginModule/login-type/login-type-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginTypePageRoutingModule": function() { return /* binding */ LoginTypePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-type.page */ 29559);




const routes = [
    {
        path: '',
        component: _login_type_page__WEBPACK_IMPORTED_MODULE_0__.LoginTypePage
    }
];
let LoginTypePageRoutingModule = class LoginTypePageRoutingModule {
};
LoginTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginTypePageRoutingModule);



/***/ }),

/***/ 28780:
/*!*************************************************************!*\
  !*** ./src/app/loginModule/login-type/login-type.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginTypePageModule": function() { return /* binding */ LoginTypePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-type-routing.module */ 45158);
/* harmony import */ var _login_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-type.page */ 29559);







let LoginTypePageModule = class LoginTypePageModule {
};
LoginTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginTypePageRoutingModule
        ],
        declarations: [_login_type_page__WEBPACK_IMPORTED_MODULE_1__.LoginTypePage]
    })
], LoginTypePageModule);



/***/ }),

/***/ 29559:
/*!***********************************************************!*\
  !*** ./src/app/loginModule/login-type/login-type.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginTypePage": function() { return /* binding */ LoginTypePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-type.page.html */ 41599);
/* harmony import */ var _login_type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-type.page.scss */ 17157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let LoginTypePage = class LoginTypePage {
    constructor(router) {
        this.router = router;
        this.loginType = [
            {
                image: "assets/LoginPageIcon/Officer.svg",
                type: "Officer"
            },
            {
                image: "assets/LoginPageIcon/LoginCustomer.svg",
                type: "Customer"
            },
            {
                image: "assets/LoginPageIcon/Dealer.svg",
                type: "Dealer"
            },
            {
                image: "assets/LoginPageIcon/Region.svg",
                type: "Region"
            }
        ];
    }
    ngOnInit() {
    }
    gotoHome() {
        this.router.navigate(['/home']);
    }
};
LoginTypePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login-type',
        template: _raw_loader_login_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginTypePage);



/***/ }),

/***/ 17157:
/*!*************************************************************!*\
  !*** ./src/app/loginModule/login-type/login-type.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selcetP {\n  margin: 0px 0px 0px 10px;\n}\n\n.typeImage {\n  height: 50px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  padding: 10px 0px 0px 0px;\n}\n\n.pDiv {\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.widthDivtype {\n  width: 80%;\n  display: block;\n  margin: auto;\n}\n\n.nextbtn {\n  display: block;\n  margin: auto;\n  width: 30%;\n}\n\n.container1 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsd0JBQUE7QUFFVDs7QUFEQTtFQUFXLFlBQUE7RUFBYSxXQUFBO0VBQVcsc0JBQUE7S0FBQSxtQkFBQTtFQUFvQix5QkFBQTtBQVF2RDs7QUFQQTtFQUFNLGVBQUE7RUFBZ0IsZUFBQTtBQVl0Qjs7QUFYQTtFQUFjLFVBQUE7RUFBVyxjQUFBO0VBQWUsWUFBQTtBQWlCeEM7O0FBaEJBO0VBQVMsY0FBQTtFQUFlLFlBQUE7RUFBYSxVQUFBO0FBc0JyQzs7QUFyQkE7RUFBZ0IsV0FBQTtBQXlCaEIiLCJmaWxlIjoibG9naW4tdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsY2V0UHttYXJnaW46IDBweCAwcHggMHB4IDEwcHg7fVxuLnR5cGVJbWFnZXtoZWlnaHQ6IDUwcHg7d2lkdGg6MTAwJTtvYmplY3QtZml0OiBjb250YWluO3BhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7fVxuLnBEaXZ7bWFyZ2luLXRvcDogMHB4O2ZvbnQtc2l6ZTogMTJweDt9XG4ud2lkdGhEaXZ0eXBle3dpZHRoOiA4MCU7ZGlzcGxheTogYmxvY2s7bWFyZ2luOiBhdXRvO31cbi5uZXh0YnRue2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogYXV0bzt3aWR0aDogMzAlO31cbi5jb250YWluZXIxeyAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtYXJnaW46IDYwcHggYXV0byAwO1xuIH0iXX0= */");

/***/ }),

/***/ 41599:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/login-type/login-type.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar>\n    <ion-title>loginType</ion-title>\n  </ion-toolbar> -->\n\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"container1\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <ion-row>\n        <ion-col [size]=\"6\" size-sm=\"7\" size-md=\"7\" size-lg=\"2\">\n          <img src = \"assets/icon/logo.svg\" onerror=\"\"/>    \n        </ion-col>\n        <ion-col [size]=\"4\" push=\"2\" size-sm=\"5\" size-md=\"5\" size-lg=\"2\" push-lg=\"8\" class=\"ion-text-right\">\n          <img src = \"assets/icon/abc.png\" onerror=\"\"/>    \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <p class=\"selcetP\">Select Login Type</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-padding\">\n        <ion-col *ngFor=\"let item of loginType\" [size]=\"6\" size-sm=\"6\" size-md=\"3\" size-lg=\"3\" >\n          <div class=\"borderDiv widthDivtype\">\n            <img [src]=\"item?.image\" class=\"typeImage\">\n            <p class=\"ion-text-center pDiv\">{{item?.type}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <br><br>\n      <ion-row>\n        <ion-col>\n          <ion-button size=\"small\" class=\"nextbtn\" color=\"danger\" shape=\"round\" tappable (click)=\"gotoHome()\">Next</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <div class=\"bottomImage\"></div>\n  </ion-row>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_loginModule_login-type_login-type_module_ts-es2015.js.map