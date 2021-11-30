(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_select-dealer_select-dealer_module_ts"],{

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

/***/ 90143:
/*!***************************************************************!*\
  !*** ./src/app/select-dealer/select-dealer-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDealerPageRoutingModule": function() { return /* binding */ SelectDealerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _select_dealer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-dealer.page */ 72442);




const routes = [
    {
        path: '',
        component: _select_dealer_page__WEBPACK_IMPORTED_MODULE_0__.SelectDealerPage
    }
];
let SelectDealerPageRoutingModule = class SelectDealerPageRoutingModule {
};
SelectDealerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectDealerPageRoutingModule);



/***/ }),

/***/ 72639:
/*!*******************************************************!*\
  !*** ./src/app/select-dealer/select-dealer.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDealerPageModule": function() { return /* binding */ SelectDealerPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _select_dealer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-dealer-routing.module */ 90143);
/* harmony import */ var _select_dealer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-dealer.page */ 72442);







let SelectDealerPageModule = class SelectDealerPageModule {
};
SelectDealerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_dealer_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectDealerPageRoutingModule
        ],
        declarations: [_select_dealer_page__WEBPACK_IMPORTED_MODULE_1__.SelectDealerPage]
    })
], SelectDealerPageModule);



/***/ }),

/***/ 72442:
/*!*****************************************************!*\
  !*** ./src/app/select-dealer/select-dealer.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDealerPage": function() { return /* binding */ SelectDealerPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_select_dealer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./select-dealer.page.html */ 35682);
/* harmony import */ var _select_dealer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-dealer.page.scss */ 84502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/api.service */ 14303);
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);









let SelectDealerPage = class SelectDealerPage {
    constructor(sendData, zone, apiService, navCntrl, route) {
        this.sendData = sendData;
        this.zone = zone;
        this.apiService = apiService;
        this.navCntrl = navCntrl;
        this.route = route;
        this.searchString = '';
        this.imgArr = '';
        this.ischecked = false;
        this.bp = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.obj = this.sendData.alldata;
        this.itemss = this.sendData.item;
        console.log("qwew: ", this.obj);
        this.loginPageData = this.sendData.loginKey;
        this.dealerList = this.sendData.itemDetails;
    }
    back() {
        this.navCntrl.back();
    }
    checkValue(ev) {
        console.log('select opt value==> ', ev);
        this.selcetdItem = ev.target.value;
        console.log('select opt value==> ', this.selcetdItem);
        this.ischecked = true;
    }
    continue() {
        // this.sendData.alldata = this.obj;
        // this.sendData.item = this.itemss;
        //this.route.navigate(['./otpverify']);
        if (this.selcetdItem) {
            this.zone.run(() => {
                this.bp = [];
                for (let i = 0; i < this.selcetdItem.length; i++) {
                    this.bp.push(this.selcetdItem[i].dealer_id);
                    this.bp.toString();
                    console.log("bp :", this.bp.toString());
                }
                let apiKey = {
                    "contact": this.obj.contact,
                    "send_type": this.obj.send_type,
                    "message_type": 'sms',
                    "dealer_id": this.bp.toString()
                };
                console.log('login data response', apiKey);
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.MobileSubmitUrl, apiKey).subscribe((result) => {
                    console.log('login data response', result);
                    // this.apiService.presentLoadingClose();
                    if (result.success == 1) {
                        this.mobileSubmitData = result;
                        let object = {
                            "apiData": this.mobileSubmitData,
                            "phonenumber": this.obj.contact,
                            "send_type": this.obj.send_type,
                            "dealer_id": this.bp.toString(),
                            "requestPage": this.loginPageData.requestPage
                        };
                        this.sendData.alldata = object;
                        this.obj.contact = '';
                        console.log('login data response', this.sendData);
                        this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
                        this.sendData.itemDetails = this.itemss;
                        this.route.navigate(['./otpverify']);
                        // }else{
                        //   this.phonenumber = '';
                        //   this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                        // }
                    }
                }, err => {
                    this.apiService.presentLoadingClose();
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        }
        else {
            this.apiService.showToastMessage('Please Select Dealer', 'top', 3000, 'redBg');
        }
    }
};
SelectDealerPage.ctorParameters = () => [
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
SelectDealerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-select-dealer',
        template: _raw_loader_select_dealer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_select_dealer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectDealerPage);



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

/***/ 84502:
/*!*******************************************************!*\
  !*** ./src/app/select-dealer/select-dealer.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padd10 {\n  padding: 10px 0px 10px 0px;\n}\n\n.ionic_btnic {\n  --background: var(--headerColor);\n  --border-radius: 14px;\n  width: auto;\n  text-transform: capitalize;\n  height: 30px;\n  font-size: 14px;\n}\n\n.txtcentr {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1kZWFsZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsMEJBQUE7QUFFUjs7QUFEQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQVUsa0JBQUE7QUFNViIsImZpbGUiOiJzZWxlY3QtZGVhbGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkMTB7cGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7fVxuLmlvbmljX2J0bmlje1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnR4dGNlbnRye3RleHQtYWxpZ246Y2VudGVyO30iXX0= */");

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

/***/ 35682:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-dealer/select-dealer.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Select Dealer</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"back()\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n      <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n          <ion-row>\n              <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\" >\n                <ion-list>\n                    <!-- <ion-item  class=\"brbottom\" *ngFor =\"let item of dealerList?.data\">\n                      <ion-label class=\"para1\">{{item?.full_name}}<br>{{item?.dealer_code}}</ion-label>\n                        [value]=\"imgArr\" -->\n                       \n                      <!-- <ion-radio [value]=\"item.auto_id\"  slot=\"start\" (click)=\"radioGroupChange($event, item)\" ></ion-radio> -->\n                      <!-- <ion-checkbox slot=\"end\" [(ngModel)]= \"item.ischecked\"></ion-checkbox>\n                    </ion-item>  --> \n                    <ion-select  placeholder=\"Select Dealer\" (ionChange)=\"checkValue($event)\" multiple=\"true\">\n                      <ion-select-option *ngFor = \"let id of dealerList?.data\" [value]=\"id\" >{{id?.full_name}}<br>{{id?.dealer_code}}</ion-select-option>\n                    </ion-select>\n                    <ion-item *ngFor=\"let item of selcetdItem\">\n                      <ion-label>\n                        {{item?.full_name}}&nbsp;({{item?.dealer_code}})\n                      </ion-label>\n                    </ion-item>\n                 </ion-list>\n              </ion-col>\n          </ion-row>\n          <br>\n          <div class=\"txtcentr\" *ngIf = \"dealerList?.continue_process?.btn_applicable == true\">\n              <ion-button class=\"ionic_btnic\" tappable (click)=\"continue()\">{{dealerList?.continue_process?.btn_text}}</ion-button>\n          </div>\n          <br>\n          </ion-col>\n          </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_select-dealer_select-dealer_module_ts-es2015.js.map