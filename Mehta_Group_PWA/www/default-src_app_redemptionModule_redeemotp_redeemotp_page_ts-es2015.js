(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"],{

/***/ 81343:
/*!***********************************************!*\
  !*** ./src/app/image-zoom/image-zoom.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageZoomPage": function() { return /* binding */ ImageZoomPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-zoom.page.html */ 47674);
/* harmony import */ var _image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-zoom.page.scss */ 32968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 18345);






let ImageZoomPage = class ImageZoomPage {
    constructor(navParams, modalCtrl, localStorage) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.localStorage = localStorage;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            zoom: {
                minRatio: 1,
                maxRatio: 3,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        };
        this.localStorage.getStorage().then(result => {
            this.loginUserData = result.allStoreData;
        });
    }
    ionViewWillEnter() {
        this.slides.lockSwipes(true);
    }
    ngOnInit() {
        console.table(this.navParams);
        this.zoomData = this.navParams.data.data;
        console.log('img==> ', this.zoomData);
    }
    dismiss() {
        this.modalCtrl.dismiss();
        this.slides.lockSwipes(false);
    }
    download() {
    }
};
ImageZoomPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
ImageZoomPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides,] }]
};
ImageZoomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImageZoomPage);



/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_redeemotp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./redeemotp.page.html */ 32834);
/* harmony import */ var _redeemotp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeemotp.page.scss */ 54249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);





// import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';




let RedeemotpPage = class RedeemotpPage {
    constructor(modalController, apiServices, platform, sendData, zone, router) {
        this.modalController = modalController;
        this.apiServices = apiServices;
        this.platform = platform;
        this.sendData = sendData;
        this.zone = zone;
        this.router = router;
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
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                    this.sendData.alldata = { 'customer_id': '', 'request_page': 'self', 'backKey': 'back' };
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
RedeemotpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-redeemotp',
        template: _raw_loader_redeemotp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_redeemotp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RedeemotpPage);



/***/ }),

/***/ 51532:
/*!***************************************************!*\
  !*** ./src/app/services/data-transfer.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTransferService": function() { return /* binding */ DataTransferService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image-zoom/image-zoom.page */ 81343);




let DataTransferService = class DataTransferService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    zoomSingleImage(path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__.ImageZoomPage,
                cssClass: 'my-custom-class',
                // swipeToClose: true,
                // mode: 'ios', backdropDismiss: true,
                // presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    data: path,
                },
            });
            return yield modal.present();
        });
    }
    readMoreHTML(str, max, add) {
        console.log('str==> ', str);
        if (str && str.length > max) {
            var tempStr = str.substring(0, max);
            var openAtag = tempStr.split("<a ");
            var closeAtag = tempStr.split("</a>");
            // console.log('openAtag== ', openAtag.length);
            // console.log('closeAtag== ', closeAtag.length);
            if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                // console.log("equal== ", str);
                return str + " " + add;
            }
            else {
                var nextStr = str.substring(max, str.length);
                // console.log("remaining sub string******", nextStr);
                var nextCloseAtagIndex = nextStr.search("</a>");
                // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);
                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4);
                // console.log("final******", str);
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                // console.log("not equal== ", str);
                return str + " " + add;
            }
            // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
            // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);
        }
        else {
            return str;
        }
    }
};
DataTransferService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
DataTransferService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DataTransferService);



/***/ }),

/***/ 32968:
/*!*************************************************!*\
  !*** ./src/app/image-zoom/image-zoom.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: none;\n}\n\nion-slides {\n  width: 100%;\n}\n\nion-slide {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.product-zoom-modal {\n  --width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* End Modal css */\n\n/* Global modal transparent*/\n\n.sc-ion-modal-md-h {\n  --background: none;\n}\n\n.sc-ion-modal-ios-h {\n  --background: none;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: #fff;\n  position: absolute;\n  top: 0;\n}\n\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksa0JBQUE7QUFDWjs7QUFBQTtFQUFhLFdBQUE7QUFJYjs7QUFIQTtFQUFhLDhCQUFBO0FBT2I7O0FBTkE7RUFBcUIsV0FBQTtFQUFjLGVBQUE7QUFXbkM7O0FBVkE7RUFBYSxrQkFBQTtFQUFxQixZQUFBO0VBQWdCLGFBQUE7RUFBZSxXQUFBO0FBaUJqRTs7QUFmQTtFQUF1QixhQUFBO0VBQWdCLG9DQUFBO0FBb0J2Qzs7QUFuQkEsa0JBQUE7O0FBQ0EsNEJBQUE7O0FBQ0E7RUFBdUIsa0JBQUE7QUF1QnZCOztBQXRCQTtFQUF3QixrQkFBQTtBQTBCeEI7O0FBdkJBO0VBQWEsZ0RBQUE7RUFDVCxhQUFBO0VBQWdCLGtCQUFBO0VBQXNCLE1BQUE7QUE2QjFDOztBQTVCSTtFQUFTLFdBQUE7QUFnQ2IiLCJmaWxlIjoiaW1hZ2Utem9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHsgIC0tYmFja2dyb3VuZDogbm9uZTt9XG5pb24tc2xpZGVzIHsgd2lkdGg6IDEwMCU7fVxuaW9uLXNsaWRlIHsgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTt9XG4uc3dpcGVyLXNsaWRlIGltZyB7ICB3aWR0aDogMTAwJTsgIG1heC13aWR0aDogMTAwJTt9XG4uem9vbS1ib3ggeyAgcG9zaXRpb246IGFic29sdXRlOyAgaGVpZ2h0OiAxMDAlOyAgIGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO31cblxuLnByb2R1Y3Qtem9vbS1tb2RhbCB7ICAtLXdpZHRoOiAxMDAlOyAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO31cbi8qIEVuZCBNb2RhbCBjc3MgKi9cbi8qIEdsb2JhbCBtb2RhbCB0cmFuc3BhcmVudCovXG4uc2MtaW9uLW1vZGFsLW1kLWggeyAgIC0tYmFja2dyb3VuZDogbm9uZTt9XG4uc2MtaW9uLW1vZGFsLWlvcy1oIHsgICAtLWJhY2tncm91bmQ6IG5vbmU7fVxuXG5cbmlvbi10b29sYmFyIHstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgLS1jb2xvcjogI2ZmZjsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICB0b3A6IDA7ICB9XG4gICAgaW9uLWljb257Y29sb3I6I2ZmZjt9Il19 */");

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

/***/ 47674:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-zoom/image-zoom.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n");

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