(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"],{

/***/ 26023:
/*!**************************************************************!*\
  !*** ./src/app/redemptionModule/redeemotp/redeemotp.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemotpPage": function() { return /* binding */ RedeemotpPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_redeemotp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./redeemotp.page.html */ 32834);
/* harmony import */ var _redeemotp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeemotp.page.scss */ 54249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);





// import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';





let RedeemotpPage = class RedeemotpPage {
    constructor(modalController, apiServices, platform, sendData, zone, router, localStorage) {
        this.modalController = modalController;
        this.apiServices = apiServices;
        this.platform = platform;
        this.sendData = sendData;
        this.zone = zone;
        this.router = router;
        this.localStorage = localStorage;
        this.FirstOtp = "";
        this.SecondOtp = "";
        this.ThirdOtp = "";
        this.FourthOtp = "";
        this.key = 0;
        this.cart_details = this.sendData.cartDetails;
        this.redeem_for = this.sendData.redeem_for;
        this.addres_id = this.sendData.address_id;
        this.req = this.sendData.alldata;
        this.red = this.sendData.item;
        this.localStorage.getStorage().then(storedData => {
            this.userTypeAll = storedData.allStoreData;
        });
    }
    ngOnInit() {
        // if(this.key == 1){
        //   this.getOtpDetails();
        // }
        this.getOtpDetails();
    }
    ionViewWillEnter() {
        this.zone.run(() => {
            if (this.platform.is('mobile')) {
                // this.postSlider={speed:"500",initialSlide:0,slidesPerView:2.3,spaceBetween:7};
                // // this.postSlider.initialSlide=2.3;
                this.val = true;
                console.log("this.val", this.val);
            }
            else {
                // this.postSlider={speed:"500",initialSlide:0,slidesPerView:4.3,spaceBetween:7};
                // this.postSlider.initialSlide=4.3;
                this.val = false;
                console.log("this.val111", this.val);
            }
        });
    }
    getkey(otpfirts77, ev) {
        console.log("tttt111", ev);
        console.log("tttt111", otpfirts77);
        console.log("tttt", this.otpfirts);
    }
    getOtpDetails() {
        this.apiServices.presentLoadingDefault();
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let apiKey = {
                "send_type": "redeem",
                "request_page": "dealer",
                "redeem_for": this.red,
                "request_for": this.req.request_for,
                "request_user_type": this.req.request_user_type
            };
            this.apiServices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.otpGetUrl, apiKey).subscribe((result) => {
                this.temparray = result.data;
                this.apiServices.presentLoadingClose();
                if (result.success == 1 || result.success == '1') {
                    this.apiServices.showToastMessage(result.message, 'top', 2000, 'greenBg');
                }
                else {
                    this.apiServices.showToastMessage(result.message, 'top', 2000, 'redBg');
                }
            });
        }));
    }
    moveFocus1(nextElement, val, index) {
        console.log("val", val);
    }
    moveFocus(nextElement, val, index) {
        console.log("val", val);
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
    close() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    checkFocus(index) {
        console.log('otp:', this.FirstOtp);
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
        console.log('otp:', this.FirstOtp, this.SecondOtp, this.ThirdOtp, this.FourthOtp);
    }
    gotohistory() {
        console.log('otp1223', this.otpfirts);
        //this.addres_id=this.addres.data.data[0].auto_id;
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let apiKey = {
                "request_page": "dealer",
                "redeem_for": this.redeem_for,
                "address_id": this.addres_id,
                "cart_id": this.cart_details[0].cart_id,
                "otp": this.FirstOtp.trim() + this.SecondOtp.trim() + this.ThirdOtp.trim() + this.FourthOtp.trim(),
                "otp_type": this.temparray.type,
                "request_for": this.req.request_for,
                "request_user_type": this.req.request_user_type
            };
            this.apiServices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.BuyUrl, apiKey).subscribe((result) => {
                // this.temparray = result.data;
                if (result.success == 1 || result.success == '1') {
                    this.modalController.dismiss({
                        'dismissed': true
                    });
                    this.apiServices.showToastMessage(result.message, 'top', 2000, 'greenBg');
                    this.sendData.page_request_type = 'detail';
                    //this.sendData.backKey='back';
                    if (this.userTypeAll.employee_type == 1) {
                        this.sendData.alldata = { 'customer_id': '', 'request_page': 'self', 'backKey': 'back' };
                    }
                    else {
                        if (this.req.request_for == '') {
                            this.sendData.alldata = { 'customer_id': '', 'request_page': 'self', 'backKey': 'back' };
                        }
                        else {
                            this.sendData.alldata = { 'customer_id': this.req.request_for, 'request_page': 'other', 'backKey': 'back' };
                        }
                    }
                    this.router.navigate(['/purchasehistory']);
                    //this.callModal();
                }
                else {
                    this.apiServices.showToastMessage(result.message, 'top', 2000, 'redBg');
                }
            });
        }));
    }
};
RedeemotpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService }
];
RedeemotpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-redeemotp',
        template: _raw_loader_redeemotp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_redeemotp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RedeemotpPage);



/***/ }),

/***/ 54249:
/*!****************************************************************!*\
  !*** ./src/app/redemptionModule/redeemotp/redeemotp.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputfiled {\n  padding: 0px 20px;\n}\n.inputfiled .bodBottom {\n  border: 2px solid red;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  padding-right: 10px !important;\n  width: 85%;\n  height: 50px;\n  margin: auto;\n  color: red;\n}\n.resendText {\n  color: red;\n  font-size: 12px;\n  margin: 0;\n}\n.otpcss {\n  font-weight: bold;\n  font-size: 15px;\n}\n.resend {\n  font-size: 10px;\n  color: red;\n}\n.desktopcss {\n  background: white;\n}\n.txtcentr {\n  text-align: center;\n}\n.circle {\n  text-align: end;\n  padding: 0px;\n}\n.circle_close {\n  font-size: 30px;\n  color: #b01d22;\n}\n.sure {\n  font-size: 20px;\n  color: #b01d22;\n}\n.ok_but {\n  --background:#b01d22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGO0FBQUk7RUFBVyxxQkFBQTtFQUFxQixtQkFBQTtFQUFtQixrQkFBQTtFQUFrQixlQUFBO0VBQWUsaUJBQUE7RUFDbEYsOEJBQUE7RUFBOEIsVUFBQTtFQUFVLFlBQUE7RUFBWSxZQUFBO0VBQVksVUFBQTtBQVd0RTtBQVJFO0VBQVksVUFBQTtFQUFVLGVBQUE7RUFBZSxTQUFBO0FBY3ZDO0FBYkU7RUFBUSxpQkFBQTtFQUFrQixlQUFBO0FBa0I1QjtBQWpCRTtFQUFRLGVBQUE7RUFBZ0IsVUFBQTtBQXNCMUI7QUFyQkU7RUFBWSxpQkFBQTtBQXlCZDtBQXBCRTtFQUFVLGtCQUFBO0FBd0JaO0FBdkJFO0VBQ0UsZUFBQTtFQUNDLFlBQUE7QUEwQkw7QUF2QkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQTBCSjtBQXhCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBMkJGO0FBekJBO0VBQ0Usb0JBQUE7QUE0QkYiLCJmaWxlIjoicmVkZWVtb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dGZpbGVke1xyXG4gIHBhZGRpbmc6MHB4IDIwcHg7XHJcbiAgICAuYm9kQm90dG9te2JvcmRlcjoycHggc29saWQgcmVkO2JvcmRlci1yYWRpdXM6MTBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MThweDtmb250LXdlaWdodDpib2xkO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjEwcHggIWltcG9ydGFudDt3aWR0aDo4NSU7aGVpZ2h0OjUwcHg7bWFyZ2luOmF1dG87Y29sb3I6cmVkO31cclxuICB9XHJcblxyXG4gIC5yZXNlbmRUZXh0e2NvbG9yOnJlZDtmb250LXNpemU6MTJweDttYXJnaW46MDt9XHJcbiAgLm90cGNzc3tmb250LXdlaWdodDogYm9sZDtmb250LXNpemU6IDE1cHg7fVxyXG4gIC5yZXNlbmR7Zm9udC1zaXplOiAxMHB4O2NvbG9yOiByZWR9XHJcbiAgLmRlc2t0b3Bjc3N7YmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIC8vIHBvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MTVweCAyMHB4O3RvcDo1MCU7d2lkdGg6MzUlO2hlaWdodDozNSU7Ym90dG9tOjAlO1xyXG4gICAgLy8gbGVmdDo1MCU7cmlnaHQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAvLyAubW9iaWxlY3NzeyBiYWNrZ3JvdW5kOndoaXRlO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MTVweCAyMHB4O3RvcDozMiU7Ym90dG9tOjMyJTtsZWZ0OjQlO3JpZ2h0OjQlO30gIFxyXG4gIC50eHRjZW50cnt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gIC5jaXJjbGV7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgcGFkZGluZzogMHB4O1xyXG4gLy8gICBmb250LXNpemU6MjBweDtcclxufVxyXG4uY2lyY2xlX2Nsb3Nle1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6I2IwMWQyMjtcclxufVxyXG4uc3VyZXtcclxuICBmb250LXNpemU6MjBweDtcclxuICBjb2xvcjojYjAxZDIyO1xyXG59XHJcbi5va19idXR7XHJcbiAgLS1iYWNrZ3JvdW5kOiNiMDFkMjI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 32834:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redemptionModule/redeemotp/redeemotp.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: rgba(255,255,255,0.5);\">\n  <ion-row>\n    <ion-col class=\"circle\">\n   <ion-icon name=\"close\" class=\"circle_close\" (click)=\"close()\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <!-- <div *ngIf = \"key == 0\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <p class=\"sure\">Are You Sure?</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button class=\"ok_but\" (click)=\"ok()\">Ok</ion-button>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <div [ngClass]=\"{'mobilecss':val==true, 'desktopcss':val==false}\" class=\"inputfiled\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" [size]=\"12\">\n        <p class=\"otpcss\">{{temparray?.FirstMsg}}</p>\n        <!-- <ion-input type=\"text\" [(ngModel)]=\"otpfirts\" (ionChange)=\"getkey(otpfirts,$event)\"></ion-input> -->\n      </ion-col>\n    </ion-row>\n    <!--  -->\n  <!-- </ion-grid> -->\n\n    <ion-row>\n\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <!-- <ion-input type=\"tel\" [(ngModel)]=\"otpfirts\"></ion-input> \n\n        <ion-input type=\"number\" [(ngModel)]=\"otpfirts\" (ionChange)=\"getkey(otpfirts,$event)\"></ion-input> -->\n         <ion-input style=\"padding:0px !important;\" type=\"tel\" #otp1 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(1)\"\n          (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\"></ion-input> \n      </ion-col>\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-input style=\"padding:0px !important;\" type=\"tel\" #otp2 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(2)\"\n          (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\"></ion-input>\n      </ion-col>\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-input style=\"padding:0px !important;\" type=\"tel\" #otp3 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(3)\"\n          (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\"></ion-input>\n      </ion-col>\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-input style=\"padding:0px !important;\" type=\"tel\" #otp4 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(4)\"\n          (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <p class=\"resend\" (click) = \"getOtpDetails()\">{{temparray?.ThirdMsg}}&nbsp;{{temparray?.resendText}}</p>\n      </ion-col>\n    </ion-row>\n    <div class=\"txtcentr\">\n      <ion-button class=\"ionic_btn\" (click)=\"gotohistory()\">{{temparray?.buttonText}}</ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_redemptionModule_redeemotp_redeemotp_page_ts-es2015.js.map