(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_otpverify_otpverify_module_ts"],{

/***/ 27222:
/*!**************************************************************************!*\
  !*** ./src/app/RegistrationModule/otpverify/otpverify-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpverifyPageRoutingModule": function() { return /* binding */ OtpverifyPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _otpverify_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otpverify.page */ 14119);




const routes = [
    {
        path: '',
        component: _otpverify_page__WEBPACK_IMPORTED_MODULE_0__.OtpverifyPage
    }
];
let OtpverifyPageRoutingModule = class OtpverifyPageRoutingModule {
};
OtpverifyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpverifyPageRoutingModule);



/***/ }),

/***/ 10533:
/*!******************************************************************!*\
  !*** ./src/app/RegistrationModule/otpverify/otpverify.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpverifyPageModule": function() { return /* binding */ OtpverifyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _otpverify_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otpverify-routing.module */ 27222);
/* harmony import */ var _otpverify_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otpverify.page */ 14119);







let OtpverifyPageModule = class OtpverifyPageModule {
};
OtpverifyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otpverify_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpverifyPageRoutingModule
        ],
        declarations: [_otpverify_page__WEBPACK_IMPORTED_MODULE_1__.OtpverifyPage]
    })
], OtpverifyPageModule);



/***/ }),

/***/ 14119:
/*!****************************************************************!*\
  !*** ./src/app/RegistrationModule/otpverify/otpverify.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpverifyPage": function() { return /* binding */ OtpverifyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_otpverify_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./otpverify.page.html */ 20867);
/* harmony import */ var _otpverify_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otpverify.page.scss */ 51557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);










let OtpverifyPage = class OtpverifyPage {
    constructor(route, platform, apiService, zone, sendData, localStorage, navCtrl) {
        this.route = route;
        this.platform = platform;
        this.apiService = apiService;
        this.zone = zone;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.navCtrl = navCtrl;
        this.FirstOtp = "";
        this.SecondOtp = "";
        this.ThirdOtp = "";
        this.FourthOtp = "";
        this.priviousData = this.sendData.alldata;
        this.mobileNumberData = this.priviousData.apiData;
        this.reg = this.sendData.itemDetails;
        console.log('login priviousData', this.priviousData);
        console.log('login reg', this.reg);
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
    }
    ngOnInit() {
    }
    moveFocus(nextElement, val, index) {
        if (index < 4) {
            if (this.SecondOtp == undefined || this.SecondOtp == "") {
                nextElement.setFocus();
            }
            else if (this.ThirdOtp == undefined || this.ThirdOtp == "") {
                nextElement.setFocus();
            }
            else if (this.FourthOtp == undefined || this.FourthOtp == "") {
                nextElement.setFocus();
            }
        }
        else { }
    }
    checkFocus(index) {
        console.log("********", index);
        if (index == 1) {
            this.FirstOtp = "";
        }
        else if (index == 2) {
            this.SecondOtp = "";
        }
        else if (index == 3) {
            this.ThirdOtp = "";
        }
        else if (index == 4) {
            this.FourthOtp = "";
        }
    }
    Continue() {
        this.zone.run(() => {
            this.apiService.presentLoadingDefault();
            let apiKey = {
                "contact": this.priviousData.phonenumber,
                "otp": this.FirstOtp.trim() + this.SecondOtp.trim() + this.ThirdOtp.trim() + this.FourthOtp.trim(),
                "employee_id": this.mobileNumberData.user_id,
                "type": this.mobileNumberData.data.type,
                "dealer_id": this.priviousData.dealer_id,
                "request_page": this.priviousData.requestPage,
                "request_for": this.mobileNumberData.user_id
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.otpSubmitUrl, apiKey).subscribe((result) => {
                this.apiService.presentLoadingClose();
                if (result.success == 1) {
                    if (result.request_page == 'dealer') {
                        this.sendData.registrationType = result;
                        this.sendData.alldata = this.mobileNumberData.user_id;
                        this.route.navigate(['/registration']);
                        console.log('1 sendData', this.sendData.alldata);
                    }
                    else if (result.request_page == 'officer') {
                        result.frompage = 'otp';
                        this.sendData.registrationType = result;
                        this.sendData.alldata = this.mobileNumberData.user_id;
                        if (this.reg.data.data.show_form == true) {
                            this.route.navigate(['/registration']);
                        }
                        else {
                            this.navCtrl.navigateRoot(["tabs/home"]);
                            // this.route.navigateByUrl("/tabs/home",{replaceUrl:true});
                        }
                        console.log('2 sendData', this.sendData.alldata);
                    }
                    else {
                        this.localStorage.setStorage('allStoreData', result.data);
                        if (result.tnc_verified == 0) {
                            this.route.navigate(['/terms-conditions']);
                        }
                        else {
                            this.localStorage.getStorage().then(allShiavsnhi => {
                                console.log('2 allShiavsnhi', allShiavsnhi);
                                if (allShiavsnhi) {
                                    console.log('2 allShiavsnhi==', allShiavsnhi);
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 100);
                                    this.navCtrl.navigateRoot(["/tabs/home"]);
                                    // this.route.navigateByUrl("/tabs/home",{replaceUrl:true});
                                    //  this.route.navigate(['./tabs']);
                                }
                            });
                        }
                    }
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
    SendOtp(Sendtype, messageType) {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "contact": this.priviousData.phonenumber,
                "send_type": Sendtype,
                "message_type": messageType
            };
            this.mobileNumberData.data.type = "3";
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.MobileSubmitUrl, apiKey).subscribe((result) => {
                this.apiService.presentLoadingClose();
                if (result.message) {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                }
                else {
                }
            }, err => {
                this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    mobileno() {
        this.route.navigate(['./mobile']);
    }
};
OtpverifyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
OtpverifyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-otpverify',
        template: _raw_loader_otpverify_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_otpverify_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtpverifyPage);



/***/ }),

/***/ 51557:
/*!******************************************************************!*\
  !*** ./src/app/RegistrationModule/otpverify/otpverify.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\n  text-align: end;\n}\n\n.para {\n  color: #B01D22;\n  font-size: 14px;\n}\n\nion-list {\n  padding-bottom: 15px;\n}\n\nion-list ion-item {\n  border: 0 !important;\n  width: 273px;\n}\n\nion-list ion-item ion-input {\n  border-bottom: 1px solid rgba(204, 204, 204, 0.6) !important;\n  margin: 0 16px;\n  color: var(--text-light2);\n  font-size: 1.95rem !important;\n  font-weight: 500 !important;\n  --padding-bottom: 5px !important;\n}\n\n.ionic_btn {\n  --background: #B01D22;\n  border-radius: 8px;\n  width: 85px;\n  height: 32px;\n  font-size: 12px;\n}\n\n.banner_bg {\n  margin-top: -66px;\n  left: 0;\n  width: 100%;\n  display: block;\n}\n\n.butt1 {\n  text-align: center;\n}\n\n.ionic_btn {\n  --background: #B01D22;\n  --border-radius: 14px;\n  width: 113px;\n  text-transform: capitalize;\n  height: 30px;\n  font-size: 14px;\n}\n\n.box {\n  width: 60px;\n  height: 45px;\n  border: 1px solid #B01D22;\n  border-radius: 6px;\n  margin: auto;\n}\n\n.boxInput {\n  text-align: center;\n}\n\n.box ion-input {\n  font-size: 23px;\n}\n\n.small {\n  width: 120px;\n  text-align: right;\n  margin-top: -10px;\n}\n\n.small_p {\n  width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cHZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFBSyxlQUFBO0FBRVQ7O0FBREk7RUFBTSxjQUFBO0VBQWUsZUFBQTtBQU16Qjs7QUFMSTtFQUFVLG9CQUFBO0FBU2Q7O0FBUlE7RUFBVSxvQkFBQTtFQUFxQixZQUFBO0FBWXZDOztBQVhZO0VBQVcsNERBQUE7RUFBNkQsY0FBQTtFQUFlLHlCQUFBO0VBQ25GLDZCQUFBO0VBQThCLDJCQUFBO0VBQTRCLGdDQUFBO0FBa0IxRTs7QUFmSTtFQUFZLHFCQUFBO0VBQXVCLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxZQUFBO0VBQWMsZUFBQTtBQXVCdEY7O0FBdEJJO0VBQVksaUJBQUE7RUFBa0IsT0FBQTtFQUFTLFdBQUE7RUFBWSxjQUFBO0FBNkJ2RDs7QUE1Qkk7RUFBTyxrQkFBQTtBQWdDWDs7QUEvQkk7RUFFUSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFpQ1o7O0FBL0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWtDWjs7QUFoQ0k7RUFBVSxrQkFBQTtBQW9DZDs7QUFuQ0k7RUFBZ0IsZUFBQTtBQXVDcEI7O0FBdENJO0VBQU8sWUFBQTtFQUFlLGlCQUFBO0VBQW1CLGlCQUFBO0FBNEM3Qzs7QUEzQ0k7RUFBUyxZQUFBO0FBK0NiIiwiZmlsZSI6Im90cHZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNvbHt0ZXh0LWFsaWduOiBlbmQ7fVxuICAgIC5wYXJhe2NvbG9yOiAjQjAxRDIyO2ZvbnQtc2l6ZTogMTRweDt9XG4gICAgaW9uLWxpc3Qge3BhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBpb24taXRlbSB7Ym9yZGVyOiAwICFpbXBvcnRhbnQ7d2lkdGg6IDI3M3B4O1xuICAgICAgICAgICAgaW9uLWlucHV0IHtib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYpICFpbXBvcnRhbnQ7bWFyZ2luOiAwIDE2cHg7Y29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOTVyZW0gIWltcG9ydGFudDtmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7LS1wYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7fVxuICAgICAgICB9XG4gICAgfVxuICAgIC5pb25pY19idG57IC0tYmFja2dyb3VuZDogI0IwMUQyMjsgYm9yZGVyLXJhZGl1czogOHB4OyB3aWR0aDogODVweDsgaGVpZ2h0OiAzMnB4OyBmb250LXNpemU6IDEycHg7IH1cbiAgICAuYmFubmVyX2JnIHttYXJnaW4tdG9wOiAtNjZweDtsZWZ0OiAwOyB3aWR0aDogMTAwJTtkaXNwbGF5OiBibG9jazt9XG4gICAgLmJ1dHQxe3RleHQtYWxpZ246IGNlbnRlcjt9XG4gICAgLmlvbmljX2J0bntcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjZjVmNmY5O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjQjAxRDIyO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDExM3B4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJveHtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0IwMUQyMjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgIC5ib3hJbnB1dHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuICAgIC5ib3ggaW9uLWlucHV0IHtmb250LXNpemU6IDIzcHg7fVxuICAgIC5zbWFsbHt3aWR0aDogMTIwcHg7ICB0ZXh0LWFsaWduOiByaWdodDsgbWFyZ2luLXRvcDotMTBweDt9XG4gICAgLnNtYWxsX3B7d2lkdGg6IDEyNXB4O30iXX0= */");

/***/ }),

/***/ 20867:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RegistrationModule/otpverify/otpverify.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center abc1\">\n    <ion-col size-xl=\"4\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary': platform.width()>740}\">\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <img src = \"assets/icon/logo.svg\" class=\"small_p\">\n          </ion-col>\n          <ion-col class=\"col\">\n            <img src = \"assets/icon/abc.png\" class=\"small\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <br>\n      <ion-row>\n        <ion-col push-lg=\"1\">\n          <p class=\"ion-no-margin frstmsg\" [innerHTML]=\"mobileNumberData?.data?.FirstMsg\"></p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col push-lg=\"1\">\n        <p tappable (click)=\"mobileno()\" class =\"para\">{{mobileNumberData?.data?.changeNumberText}}&nbsp;{{mobileNumberData?.data?.SecondMsg}}</p>\n      </ion-col>\n    </ion-row>  \n            <!-- <ion-grid class=\"grid\"> -->\n              <ion-row class = \"boxInput\">\n                <ion-col class=\"box1\" [size]=\"3\">\n                 <!-- <div class = \"box\"> -->\n                  <ion-input class = \"box\" maxlength=\"1\" mode=\"md\" placeholder=\"*\" type=\"tel\" (ionFocus)=\"checkFocus(1)\"\n                    #otp1 (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\"></ion-input>\n                  <!-- </div> -->\n                  </ion-col>\n                <ion-col class=\"box1\" [size]=\"3\">\n                  <!-- <div > -->\n                 <ion-input class = \"box\" maxlength=\"1\" mode=\"md\" placeholder=\"*\" type=\"tel\" (ionFocus)=\"checkFocus(2)\"\n                 #otp2  (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\"></ion-input>\n                <!-- </div> -->\n                </ion-col>\n                <ion-col class=\"box1\" [size]=\"3\">\n                  <!-- <div class = \"box\"> -->\n                 <ion-input class = \"box\" maxlength=\"1\" mode=\"md\" placeholder=\"*\" type=\"tel\"  (ionFocus)=\"checkFocus(3)\"\n                 #otp3 (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\"></ion-input>\n                <!-- </div> -->\n                </ion-col>\n                <ion-col class=\"box1\" [size]=\"3\">\n                  <!-- <div class = \"box\"> -->\n                 <ion-input class = \"box\" maxlength=\"1\" mode=\"md\" placeholder=\"*\" type=\"tel\"  \n                 #otp4  (ionFocus)=\"checkFocus(4)\" (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\"></ion-input>\n                <!-- </div> -->\n                </ion-col>\n              </ion-row>\n            <!-- </ion-grid> -->\n  \n  <ion-row>\n    <ion-col push-lg=\"1\">\n      <p class=\"para\" tappable (click)=\"SendOtp('Resend','voice')\" [innerHTML]=\"mobileNumberData?.data?.voiceMsg\"></p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col push-lg=\"1\">\n      <p class=\"para ion-no-margin\">{{mobileNumberData?.data?.ThirdMsg}}&nbsp;\n        <span tappable (click)=\"SendOtp('Resend','sms')\">{{mobileNumberData?.data?.resendText}}</span></p>\n    </ion-col>\n  </ion-row>\n  \n  <div class = \"butt1\" [ngClass]=\"{'banner': platform.width()<740}\">\n    <ion-button [disabled]=\"FirstOtp.trim()=='' || SecondOtp.trim()=='' || ThirdOtp.trim()=='' || FourthOtp.trim()==''\"\n   tappable (click) =\"Continue()\" class=\"ionic_btn\">{{mobileNumberData?.data?.buttonText}}</ion-button>\n    <img src=\"assets/icon/Design 1.png\" class =\"banner_bg\">\n  </div>\n      </ion-col>\n      </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_RegistrationModule_otpverify_otpverify_module_ts-es2015.js.map