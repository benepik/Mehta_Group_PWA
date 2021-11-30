(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_force-optional-update_force-optional-update_module_ts"],{

/***/ 83757:
/*!*******************************************************************************!*\
  !*** ./src/app/force-optional-update/force-optional-update-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceOptionalUpdatePageRoutingModule": function() { return /* binding */ ForceOptionalUpdatePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _force_optional_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./force-optional-update.page */ 54497);




const routes = [
    {
        path: '',
        component: _force_optional_update_page__WEBPACK_IMPORTED_MODULE_0__.ForceOptionalUpdatePage
    }
];
let ForceOptionalUpdatePageRoutingModule = class ForceOptionalUpdatePageRoutingModule {
};
ForceOptionalUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForceOptionalUpdatePageRoutingModule);



/***/ }),

/***/ 39544:
/*!***********************************************************************!*\
  !*** ./src/app/force-optional-update/force-optional-update.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceOptionalUpdatePageModule": function() { return /* binding */ ForceOptionalUpdatePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _force_optional_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./force-optional-update-routing.module */ 83757);
/* harmony import */ var _force_optional_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./force-optional-update.page */ 54497);







let ForceOptionalUpdatePageModule = class ForceOptionalUpdatePageModule {
};
ForceOptionalUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _force_optional_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForceOptionalUpdatePageRoutingModule
        ],
        declarations: [_force_optional_update_page__WEBPACK_IMPORTED_MODULE_1__.ForceOptionalUpdatePage]
    })
], ForceOptionalUpdatePageModule);



/***/ }),

/***/ 54497:
/*!*********************************************************************!*\
  !*** ./src/app/force-optional-update/force-optional-update.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceOptionalUpdatePage": function() { return /* binding */ ForceOptionalUpdatePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_force_optional_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./force-optional-update.page.html */ 81147);
/* harmony import */ var _force_optional_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./force-optional-update.page.scss */ 84646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/api.service */ 14303);
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-transfer.service */ 51532);








let ForceOptionalUpdatePage = class ForceOptionalUpdatePage {
    constructor(router, zone, apiServices, platform, menuCtrl, sendData) {
        this.router = router;
        this.zone = zone;
        this.apiServices = apiServices;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.showAllData = "";
        this.showAllData = this.sendData.myParam;
        console.log("showing data form force update==", this.showAllData);
        this.appStatus = this.sendData.alldata;
        console.log("showing data button form force update==", this.appStatus);
    }
    ngOnInit() { }
    updateApp(linkUpdate) {
        this.zone.run(() => {
            this.apiServices.iab.create(linkUpdate.update_link, "_system", this.apiServices.options);
        });
    }
    goToHome() {
        this.zone.run(() => {
            this.router.navigate(["/tabs"], { replaceUrl: true });
        });
    }
};
ForceOptionalUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService }
];
ForceOptionalUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-force-optional-update',
        template: _raw_loader_force_optional_update_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_force_optional_update_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForceOptionalUpdatePage);



/***/ }),

/***/ 84646:
/*!***********************************************************************!*\
  !*** ./src/app/force-optional-update/force-optional-update.page.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backgroundDiv {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.updateDataDiv {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  border: 0;\n  margin: auto;\n  transform: translate(0%, -50%);\n  text-align: center;\n  color: #fff;\n  padding: 0 15px;\n}\n\n.updateDataDiv .innerTextDiv {\n  background: #fff;\n  border-radius: 10px;\n  padding: 15px;\n  color: gray;\n}\n\n.updateDataDiv .innerTextDiv .titleText {\n  font-size: 18px;\n  margin: 0;\n  font-weight: bold;\n}\n\n.updateDataDiv .innerTextDiv .discriptionText {\n  font-size: 13px;\n  margin: 10px 0 0 0;\n  line-height: 20px;\n}\n\n.updateDataDiv .innerTextDiv .continueAppDiv {\n  color: var(--Appcolor);\n  margin: 15px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmNlLW9wdGlvbmFsLXVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZSxlQUFBO0VBQWUsV0FBQTtFQUFXLFlBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0FBS3JEOztBQUpJO0VBQWUsa0JBQUE7RUFBa0IsUUFBQTtFQUFRLE9BQUE7RUFBTyxRQUFBO0VBQVEsU0FBQTtFQUFTLFlBQUE7RUFDN0QsOEJBQUE7RUFBOEIsa0JBQUE7RUFBa0IsV0FBQTtFQUFXLGVBQUE7QUFnQm5FOztBQWZRO0VBQWMsZ0JBQUE7RUFBZ0IsbUJBQUE7RUFBbUIsYUFBQTtFQUFhLFdBQUE7QUFxQnRFOztBQXBCWTtFQUFXLGVBQUE7RUFBZSxTQUFBO0VBQVMsaUJBQUE7QUF5Qi9DOztBQXhCWTtFQUFpQixlQUFBO0VBQWUsa0JBQUE7RUFBa0IsaUJBQUE7QUE2QjlEOztBQTVCWTtFQUFnQixzQkFBQTtFQUFzQixrQkFBQTtBQWdDbEQiLCJmaWxlIjoiZm9yY2Utb3B0aW9uYWwtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kRGl2e3Bvc2l0aW9uOmZpeGVkO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb3Zlcjs7fVxuICAgIC51cGRhdGVEYXRhRGl2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDowO3JpZ2h0OjA7Ym9yZGVyOjA7bWFyZ2luOmF1dG87XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoMCUsIC01MCUpO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmY7cGFkZGluZzowIDE1cHg7XG4gICAgICAgIC5pbm5lclRleHREaXZ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MTBweDtwYWRkaW5nOjE1cHg7Y29sb3I6Z3JheTtcbiAgICAgICAgICAgIC50aXRsZVRleHR7Zm9udC1zaXplOjE4cHg7bWFyZ2luOjA7Zm9udC13ZWlnaHQ6Ym9sZDt9XG4gICAgICAgICAgICAuZGlzY3JpcHRpb25UZXh0e2ZvbnQtc2l6ZToxM3B4O21hcmdpbjoxMHB4IDAgMCAwO2xpbmUtaGVpZ2h0OjIwcHg7fVxuICAgICAgICAgICAgLmNvbnRpbnVlQXBwRGl2e2NvbG9yOnZhcigtLUFwcGNvbG9yKTttYXJnaW46MTVweCAwIDAgMDt9XG4gICAgICAgIH1cbiAgICB9Il19 */");

/***/ }),

/***/ 81147:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/force-optional-update/force-optional-update.page.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"position:relative;\" >\n  <!-- <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\"  [ngClass]=\"{whiteCol: platform?.is('Desktop')}\"> -->\n  <div class=\"backgroundDiv\" [style.background]=\"'url('+showAllData?.update_image+')'\">\n\n    <div class=\"updateDataDiv\">\n       <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\">\n      <div class=\"innerTextDiv\"> \n        <ion-row>\n          <ion-col [size]=\"12\"><p class=\"titleText\">{{showAllData?.title}}</p></ion-col>\n          <ion-col [size]=\"12\"><p class=\"discriptionText\">{{showAllData?.content}}</p></ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n          <ion-col [size]=\"2\"  size-sm=\"2\" size-md=\"2\" size-lg=\"2\"></ion-col>\n          <ion-col [size]=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\">\n            <ion-button color=\"danger\" *ngIf=\"appStatus==1 || appStatus==2\" class=\"dynamicButtonColor\" tappable (click)=\"updateApp(showAllData)\">{{showAllData?.button_text}}</ion-button>\n            <p class=\"continueAppDiv\" *ngIf=\"appStatus==2 || appStatus=='2'\" tappable (click)=\"goToHome()\" >{{showAllData?.button_text2}}</p>\n          </ion-col>\n          <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\"></ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n    </ion-row>\n    </div>\n\n  </div>\n  <!-- </ion-col>\n  </ion-row> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_force-optional-update_force-optional-update_module_ts-es2015.js.map