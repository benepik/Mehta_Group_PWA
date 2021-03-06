(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_mobile_mobile_module_ts"],{

/***/ 33421:
/*!********************************************************************!*\
  !*** ./src/app/RegistrationModule/mobile/mobile-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobilePageRoutingModule": function() { return /* binding */ MobilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mobile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile.page */ 61023);




const routes = [
    {
        path: '',
        component: _mobile_page__WEBPACK_IMPORTED_MODULE_0__.MobilePage
    }
];
let MobilePageRoutingModule = class MobilePageRoutingModule {
};
MobilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MobilePageRoutingModule);



/***/ }),

/***/ 67150:
/*!************************************************************!*\
  !*** ./src/app/RegistrationModule/mobile/mobile.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobilePageModule": function() { return /* binding */ MobilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-routing.module */ 33421);
/* harmony import */ var _mobile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile.page */ 61023);







let MobilePageModule = class MobilePageModule {
};
MobilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mobile_routing_module__WEBPACK_IMPORTED_MODULE_0__.MobilePageRoutingModule
        ],
        declarations: [_mobile_page__WEBPACK_IMPORTED_MODULE_1__.MobilePage]
    })
], MobilePageModule);



/***/ }),

/***/ 61023:
/*!**********************************************************!*\
  !*** ./src/app/RegistrationModule/mobile/mobile.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobilePage": function() { return /* binding */ MobilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mobile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mobile.page.html */ 88368);
/* harmony import */ var _mobile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile.page.scss */ 71963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);










let MobilePage = class MobilePage {
    constructor(route, platform, apiService, zone, sendData, localStorage, navCntrl) {
        this.route = route;
        this.platform = platform;
        this.apiService = apiService;
        this.zone = zone;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.navCntrl = navCntrl;
        this.phonenumber = '';
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
    }
    ionViewWillEnter() {
        this.itemss = this.sendData.itemDetails;
        console.log('ssssssss:', this.itemss);
        this.loginPageData = this.sendData.loginKey;
        console.log('loginPageData', this.loginPageData);
        this.show_Popup = this.sendData.alldata;
        console.log(' this.show_popup ', this.show_Popup);
        if (this.loginPageData.type == "Existing") {
            this.maintanceData = this.show_Popup.show_popup[0].otp_screen_data;
        }
        else if (this.loginPageData.type == "Register") {
            this.maintanceData = this.show_Popup.show_popup[1].otp_screen_data;
        }
        else {
            this.localStorage.getStorage().then((storedData) => {
                this.maintanceData = storedData.maintainanceData;
                console.log('ffff: ', this.maintanceData);
                console.log('localStorage data from maintance', storedData);
            });
        }
    }
    ionViewWillLeave() {
        //this.sendData.alldata.otp_screen_data = this.maintanceData;
    }
    ngOnInit() {
    }
    LoginCall(phonenumber, sms) {
        console.log('length', phonenumber.length);
        if (phonenumber.trim().length == 10) {
            this.apiService.presentLoadingDefault();
            this.zone.run(() => {
                let apiKey = {
                    contact: phonenumber,
                    send_type: this.loginPageData.type,
                    message_type: sms,
                };
                console.log('login data response', apiKey);
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.MobileSubmitUrl, apiKey).subscribe((result) => {
                    console.log('login data response', result);
                    this.apiService.presentLoadingClose();
                    if (result.success == 1) {
                        this.mobileSubmitData = result;
                        let object = {
                            apiData: this.mobileSubmitData,
                            phonenumber: phonenumber,
                            send_type: this.loginPageData.type,
                            requestPage: this.loginPageData.requestPage,
                        };
                        this.sendData.alldata = object;
                        this.phonenumber = '';
                        console.log('login data response', this.sendData);
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                        this.sendData.itemDetails = this.itemss;
                        this.route.navigate(['/otpverify']);
                    }
                    else {
                        this.phonenumber = '';
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, (err) => {
                    this.apiService.presentLoadingClose();
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        }
        else {
            this.apiService.showToastMessage('Please enter 10 digits.', 'top', 3000, 'redBg');
        }
    }
    termsShow() {
        this.zone.run(() => {
            this.route.navigate(['/terms-conditions']);
        });
    }
    privacyShow() {
        console.log('1');
        this.zone.run(() => {
            this.route.navigate(['/privacy-policy']);
        });
    }
    gotoLogn() {
        this.zone.run(() => {
            this.route.navigate(['/login']);
        });
    }
    gotoHomeTab() {
        this.zone.run(() => {
            console.log('request page==', this.loginPageData);
            if (this.loginPageData.requestPage == 'officer') {
                console.log('1');
                this.apiService.isSelected = '';
                this.navCntrl.back();
                // this.route.navigateByUrl("/tabs/home",{replaceUrl:true});
            }
            else {
                this.apiService.isSelected = 'true';
                this.navCntrl.back();
                // this.route.navigateByUrl('/tabs/customer-allocation');
            }
            console.log('this.apiService.isSelected000000', this.apiService.isSelected);
        });
        // alert(this.apiService.isSelected)
    }
    UpCall(phonenumber, sms) {
        this.zone.run(() => {
            let apiKey = {
                contact: phonenumber,
                send_type: 'Existing',
                message_type: sms,
            };
            console.log('login data response', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.ExistingUrl, apiKey).subscribe((result) => {
                console.log('login data response', result);
                if (result.success == 1) {
                    this.sendData.itemDetails = result;
                    this.sendData.alldata = apiKey;
                    this.sendData.item = this.itemss;
                    this.sendData.loginKey = this.loginPageData;
                    this.route.navigate(['/select-dealer']);
                    this.phonenumber = '';
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, (err) => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
MobilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
MobilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-mobile',
        template: _raw_loader_mobile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mobile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MobilePage);



/***/ }),

/***/ 71963:
/*!************************************************************!*\
  !*** ./src/app/RegistrationModule/mobile/mobile.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\n  text-align: end;\n}\n\n.para {\n  font-size: small;\n}\n\n.banner_bg {\n  left: 0;\n  width: 100%;\n  border-radius: 10px;\n  display: block;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(84, 83, 83, 0.6) !important;\n  color: var(--text-light2);\n  font-size: 18px !important;\n  font-weight: 500 !important;\n}\n\np span {\n  color: var(--headerColor);\n}\n\n.btnCenter {\n  display: block;\n  margin: auto;\n  width: 100%;\n  color: white;\n}\n\n.small {\n  width: 120px;\n  text-align: right;\n  margin-top: -10px;\n}\n\n.small_p {\n  width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyxlQUFBO0FBRUw7O0FBREE7RUFBTyxnQkFBQTtBQUtQOztBQUpBO0VBQVksT0FBQTtFQUFRLFdBQUE7RUFBWSxtQkFBQTtFQUFvQixjQUFBO0FBV3BEOztBQVZBO0VBQVkseURBQUE7RUFBeUQseUJBQUE7RUFDakUsMEJBQUE7RUFBMkIsMkJBQUE7QUFnQi9COztBQWZDO0VBQU8seUJBQUE7QUFtQlI7O0FBbEJBO0VBQVcsY0FBQTtFQUFlLFlBQUE7RUFBYyxXQUFBO0VBQVksWUFBQTtBQXlCcEQ7O0FBeEJBO0VBQU8sWUFBQTtFQUFlLGlCQUFBO0VBQW1CLGlCQUFBO0FBOEJ6Qzs7QUE3QkE7RUFBUyxZQUFBO0FBaUNUIiwiZmlsZSI6Im1vYmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29se3RleHQtYWxpZ246IGVuZDt9XG4ucGFyYXsgZm9udC1zaXplOiBzbWFsbDt9XG4uYmFubmVyX2JnIHtsZWZ0OiAwO3dpZHRoOiAxMDAlO2JvcmRlci1yYWRpdXM6IDEwcHg7ZGlzcGxheTogYmxvY2s7fSAgIFxuaW9uLWlucHV0IHsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSg4NCwgODMsIDgzLCAwLjYpICFpbXBvcnRhbnQ7Y29sb3I6dmFyKC0tdGV4dC1saWdodDIpO1xuICAgIGZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDsgfSBcbiBwIHNwYW57Y29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTt9XG4uYnRuQ2VudGVye2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogYXV0bzsgd2lkdGg6MTAwJTsgY29sb3I6IHdoaXRlO31cbi5zbWFsbHt3aWR0aDogMTIwcHg7ICB0ZXh0LWFsaWduOiByaWdodDsgbWFyZ2luLXRvcDotMTBweDt9XG4uc21hbGxfcHt3aWR0aDogMTI1cHg7fSJdfQ== */");

/***/ }),

/***/ 88368:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RegistrationModule/mobile/mobile.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center abc1\">\n    <ion-col size-xl=\"4\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary':  platform.width()>740}\">\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <img src = \"assets/icon/logo.svg\" class=\"small_p\">\n          </ion-col>\n          <ion-col class=\"col\">\n            <img src = \"assets/icon/abc.png\" class=\"small\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row class=\"ion-padding\">\n        <ion-col >\n          <p class=\"ion-no-margin\" [innerHTML]=\"maintanceData?.mobile_string\"></p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-padding\">\n        <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" >\n          <ion-input maxlength=\"0\" type=\"tel\" [(ngModel)]=\"phone_code\" read-only>+91</ion-input>\n          </ion-col>\n          <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\">\n              <ion-input type=\"tel\" [(ngModel)]=\"phonenumber\" pattern=\"^[1-9][0-9]*$\" maxlength=\"10\" minlength=\"10\"></ion-input>\n          </ion-col>\n      </ion-row>\n   \n      <br>  <br>\n      <ion-row *ngIf=\"loginPageData?.type=='login' || loginPageData?.type=='newRegister'\" class=\"ion-padding\">\n        <ion-col [size]=\"1\" class=\"autoMargin ion-no-padding\"> <ion-checkbox color=\"danger\" [(ngModel)]=\"isChecked\"></ion-checkbox></ion-col>\n        <ion-col [size]=\"11\">\n        <p class = \"para ion-no-margin\" >By continuing you agree to the \n          <span tappable (click)=\"termsShow()\">Terms of Use</span> and \n          <span tappable (click)=\"privacyShow()\">Privacy Policy.</span></p></ion-col>\n      </ion-row>\n\n      <br>\n      <ion-row>\n        <ion-col *ngIf=\"loginPageData?.type =='login' || loginPageData?.type =='newRegister' \">\n          <ion-button tappable (click)=\"gotoLogn()\" class=\"ionic_btn btnCenter\">Back</ion-button></ion-col>\n        <ion-col *ngIf=\"loginPageData?.type =='Register' || loginPageData?.type =='Existing'\"> \n          <ion-button tappable (click)=\"gotoHomeTab()\" class=\"ionic_btn btnCenter\">Back</ion-button></ion-col>\n        <ion-col>\n          <ion-button *ngIf=\"loginPageData?.type =='login' || loginPageData?.type =='newRegister' \" [disabled]=\"phonenumber?.trim()=='' || !isChecked\" \n            tappable (click)=\"LoginCall(phonenumber,'sms')\" class=\"ionic_btn btnCenter\">{{maintanceData?.btn_text}}</ion-button>\n            <!-- loginPageData?.type !='Register' &&  -->\n          <ion-button *ngIf=\"loginPageData?.type =='Existing'\"\n            [disabled]=\"phonenumber?.trim()==''\"   tappable (click)=\"UpCall(phonenumber,'sms')\" class=\"ionic_btn btnCenter\">Continue</ion-button>\n          <ion-button *ngIf=\"loginPageData?.type == 'Register'\"\n            [disabled]=\"phonenumber?.trim()==''\"   tappable (click)=\"LoginCall(phonenumber,'sms')\" class=\"ionic_btn btnCenter\">Continue</ion-button>    \n        </ion-col>\n      </ion-row>\n \n  \n      <br>\n      <div class = \"ion-text-center\" [ngClass]=\"{'banner': platform.width()<740}\">\n        <img src=\"./assets/icon/Design 1.png\" class =\"banner_bg\">\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_RegistrationModule_mobile_mobile_module_ts-es2015.js.map