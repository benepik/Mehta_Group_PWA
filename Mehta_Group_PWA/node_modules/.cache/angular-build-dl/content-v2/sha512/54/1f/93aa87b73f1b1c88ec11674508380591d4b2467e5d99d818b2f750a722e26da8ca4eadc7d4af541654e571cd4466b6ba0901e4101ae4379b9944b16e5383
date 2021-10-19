(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_pointsgiftlist_pointsgiftlist_module_ts"],{

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

/***/ 61102:
/*!**********************************************************************************!*\
  !*** ./src/app/redemptionModule/pointsgiftlist/pointsgiftlist-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsgiftlistPageRoutingModule": function() { return /* binding */ PointsgiftlistPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pointsgiftlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointsgiftlist.page */ 90880);




const routes = [
    {
        path: '',
        component: _pointsgiftlist_page__WEBPACK_IMPORTED_MODULE_0__.PointsgiftlistPage
    }
];
let PointsgiftlistPageRoutingModule = class PointsgiftlistPageRoutingModule {
};
PointsgiftlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PointsgiftlistPageRoutingModule);



/***/ }),

/***/ 61321:
/*!**************************************************************************!*\
  !*** ./src/app/redemptionModule/pointsgiftlist/pointsgiftlist.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsgiftlistPageModule": function() { return /* binding */ PointsgiftlistPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pointsgiftlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointsgiftlist-routing.module */ 61102);
/* harmony import */ var _pointsgiftlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointsgiftlist.page */ 90880);







let PointsgiftlistPageModule = class PointsgiftlistPageModule {
};
PointsgiftlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pointsgiftlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointsgiftlistPageRoutingModule
        ],
        declarations: [_pointsgiftlist_page__WEBPACK_IMPORTED_MODULE_1__.PointsgiftlistPage]
    })
], PointsgiftlistPageModule);



/***/ }),

/***/ 90880:
/*!************************************************************************!*\
  !*** ./src/app/redemptionModule/pointsgiftlist/pointsgiftlist.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsgiftlistPage": function() { return /* binding */ PointsgiftlistPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pointsgiftlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pointsgiftlist.page.html */ 2362);
/* harmony import */ var _pointsgiftlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointsgiftlist.page.scss */ 55149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);










let PointsgiftlistPage = class PointsgiftlistPage {
    constructor(route, platform, sendData, apiService, zone, modalCtrl, navController, location) {
        this.route = route;
        this.platform = platform;
        this.sendData = sendData;
        this.apiService = apiService;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.navController = navController;
        this.location = location;
        this.temparray = [];
        this.serverData = [];
        this.val = false;
        // @ViewChild('slidesRef') slidesRef: IonSlides;
        this.postSlider = { speed: "500", initialSlide: 0, slidesPerView: 2, spaceBetween: 7 };
        console.log("temparray", this.temparray);
    }
    ionViewWillEnter() {
        this.zone.run(() => {
            if (this.platform.is('mobile')) {
                this.postSlider = { speed: "200", initialSlide: 0, slidesPerView: 2, spaceBetween: 7 };
                // this.postSlider.initialSlide=2.3;
                this.val = true;
            }
            else {
                this.postSlider = { speed: "200", initialSlide: 0, slidesPerView: 4, spaceBetween: 7 };
                // this.postSlider.initialSlide=4.3;
            }
            this.pointsGiftDetails(null);
        });
    }
    ionViewWillLeave() {
        this.sendData.itemDetails = {
            "product_id": "",
            "quantity": ""
        };
    }
    ngOnInit() {
        //this.redeem_for = this.sendData.alldata.redeem_for;
        //  history.pushState(null, null, window.location.pathname);
        this.allocationData = this.sendData.alldata;
        console.log("temparray", this.allocationData);
    }
    goToFun(ind, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.slides.toArray().forEach((slider, index) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (ind == index && type == 'next') {
                    yield slider.slideNext();
                }
                else if (ind == index && type == 'prev') {
                    yield slider.slidePrev();
                }
            }));
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.pointsGiftDetails(event);
    }
    close() {
        if (this.allocationData.redeem_for == 'self') {
            this.route.navigate(['./tabs/home']);
        }
        else {
            this.location.back();
        }
    }
    pointsGiftDetails(event) {
        if (event == null) {
            this.apiService.presentLoadingDefault();
        }
        this.apiService.presentLoadingDefault();
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let apiKey = {
                "request_page": "dealer",
                "search_str": "",
                "redeem_for": this.allocationData.redeem_for,
                "request_for": this.allocationData.customer_id,
                "request_user_type": this.allocationData.employee_type,
                "filter": {
                    "category": "",
                    "sub_category": ""
                }
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.ProductListUrl, apiKey).subscribe((result) => {
                if (event == null) {
                    this.apiService.presentLoadingClose();
                }
                else {
                    event.target.complete();
                }
                this.apiService.presentLoadingClose();
                this.temparray = result;
                if (result.success == 1) {
                    this.serverData = result.data;
                    this.errorImage = '';
                }
                else {
                    this.errorImage = result.error_image;
                    // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                this.apiService.presentLoadingClose();
            });
        }));
    }
    purchaseDetails() {
        if (this.allocationData.customer_id != '') {
            this.sendData.alldata = { 'customer_id': this.allocationData.customer_id, 'request_page': 'other', 'employee_type': this.allocationData.employee_type, 'backKey': 'back' };
            this.route.navigate(['./purchasehistory']);
        }
        else {
            // this.sendData.backKey = 'back2';
            this.sendData.alldata = { 'customer_id': '', 'request_page': 'self', 'backKey': 'back2' };
            this.route.navigate(['./purchasehistory']);
        }
        // this.sendData.request_page = 'self';
    }
    gotoitemdetail(item) {
        if (this.allocationData.customer_id != '') {
            this.sendData.itemDetails = { 'auto_id': item.auto_id, 'request_page': this.allocationData.employee_type, 'request_for': this.allocationData.customer_id };
            this.sendData.redeem_for = 'other';
            this.sendData.cart_request = 'customer';
            this.sendData.page_request_type = 'buy';
            //  alert(234);
        }
        else {
            this.sendData.itemDetails = { 'auto_id': item.auto_id, 'request_page': '', 'request_for': '' };
            this.sendData.page_request_type = 'buy';
            this.sendData.cart_request = 'dealer';
            this.sendData.redeem_for = 'self';
            console.log("dfjk:", this.sendData.itemDetails);
        }
        this.route.navigate(['/itemdetail']);
    }
    goToCart() {
        if (this.allocationData.customer_id != '') {
            this.sendData.alldata = { 'customer_id': this.allocationData.customer_id, 'employee_type': this.allocationData.employee_type };
            this.sendData.page_request_type = 'buy';
            this.sendData.redeem_for = 'other';
            this.sendData.itemDetails = [];
            this.sendData.cart_request = "view";
            this.sendData.itemDetails = {
                "product_id": "",
                "quantity": ""
            };
            // this.sendData.cartDetails = result.data;
            this.route.navigate(['./buyitem']);
            //this.route.navigate(['./purchasehistory']);
        }
        else {
            this.sendData.alldata = { 'customer_id': '', 'employee_type': '' };
            this.sendData.page_request_type = 'buy';
            this.sendData.itemDetails = [];
            this.sendData.cart_request = "view";
            this.sendData.redeem_for = 'self';
            this.sendData.itemDetails = {
                "product_id": "",
                "quantity": ""
            };
            this.route.navigate(['./buyitem']);
        }
    }
};
PointsgiftlistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location }
];
PointsgiftlistPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides,] }]
};
PointsgiftlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-pointsgiftlist',
        template: _raw_loader_pointsgiftlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pointsgiftlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PointsgiftlistPage);



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

/***/ 55149:
/*!**************************************************************************!*\
  !*** ./src/app/redemptionModule/pointsgiftlist/pointsgiftlist.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  box-shadow: 1px 1px 1px 2px #EFEAEA;\n}\n\n.table_start {\n  padding-top: 20px;\n}\n\n.pinkBg {\n  background-color: #F2E8E8;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.padd {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\nion-icon {\n  color: var(--headerColor);\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-row {\n  background: #B01D22;\n  color: #fff;\n  font-size: 14px;\n}\n\n.co_ro {\n  border-left: 1px solid #ECEEEF;\n  text-align: center;\n}\n\nion-text {\n  font-size: 12px;\n}\n\n.walletImages {\n  height: 50px;\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.colorWhite {\n  color: #fff;\n}\n\n.accTitle {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n\n.totalBtn {\n  --background: #ec6d72;\n  max-width: 100%;\n  white-space: pre-wrap;\n  font-size: 11px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n}\n\n.fontAcc {\n  font-size: 12px;\n}\n\n.divbtn {\n  border: 1px solid white;\n  padding: 5px;\n  text-align: center;\n  margin-bottom: 5px;\n  border-radius: 16px;\n}\n\n.divbtn p {\n  color: white;\n  margin: 0px;\n  font-size: 11px;\n}\n\n.imgcss {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n\n.grayclass {\n  padding: 2px;\n  box-shadow: gray;\n  height: 100%;\n  background: white;\n  /* box-shadow: inset 0px 0px 8px 0px grey; */\n  /* border: 1px solid #d7d5d5; */\n  border-radius: 10px;\n}\n\n.color_cls {\n  color: white;\n}\n\n.whiteclass p {\n  margin-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n  padding-bottom: 5px;\n  color: black;\n}\n\n.whiteclass .brd {\n  border-top: 1px solid lightgray;\n  border-bottom: 1px solid lightgray;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\n.slide_p {\n  height: 100%;\n}\n\n.walletImage1 {\n  width: 25px;\n}\n\n.col_sss {\n  padding-top: 12px;\n  padding-right: 0px;\n}\n\n.col_ss {\n  padding-left: 0px;\n}\n\n.slabsDiv {\n  padding: 6px;\n  background-color: var(--headerColor);\n  border-radius: 8px;\n}\n\n.slabsPDiv {\n  color: white;\n  font-weight: bold;\n  margin: 0px;\n  font-size: 18px;\n  padding-left: 5px;\n}\n\n.rowReedem {\n  background: #584e4e24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50c2dpZnRsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLG1DQUFBO0FBRVA7O0FBREE7RUFBYSxpQkFBQTtBQUtiOztBQUpBO0VBQVEseUJBQUE7QUFRUjs7QUFQQTtFQUFjLDJCQUFBO0FBV2Q7O0FBVkE7RUFBTSxrQkFBQTtFQUFrQixpQkFBQTtBQWV4Qjs7QUFkQTtFQUFNLHNCQUFBO0VBQXVCLHlCQUFBO0VBQTBCLHdCQUFBO0FBb0J2RDs7QUFuQkE7RUFBUyx5QkFBQTtBQXVCVDs7QUF0QkE7RUFBaUIsNEJBQUE7QUEwQmpCOztBQXpCQTtFQUFzQiw2QkFBQTtBQTZCdEI7O0FBNUJBO0VBQWEsbUJBQUE7RUFBcUIsV0FBQTtFQUFZLGVBQUE7QUFrQzlDOztBQWpDQTtFQUFPLDhCQUFBO0VBQStCLGtCQUFBO0FBc0N0Qzs7QUFyQ0E7RUFBUyxlQUFBO0FBeUNUOztBQXhDRTtFQUFrQixZQUFBO0VBQ2hCLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBNENKOztBQXhDSTtFQUFZLFdBQUE7QUE0Q2hCOztBQTNDSTtFQUFVLGVBQUE7RUFBZ0IsaUJBQUE7QUFnRDlCOztBQS9DSTtFQUFtQiw0QkFBQTtFQUNmLHNCQUFBO0VBQXVCLFlBQUE7RUFDdkIsMkJBQUE7QUFvRFI7O0FBbkRRO0VBQWMscUJBQUE7RUFDVixlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQXVEWjs7QUFyRFE7RUFBUyxlQUFBO0FBeURqQjs7QUF4RFE7RUFBUSx1QkFBQTtFQUNKLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixrQkFBQTtFQUNoQyxtQkFBQTtBQThEWjs7QUE3RFE7RUFBTSxZQUFBO0VBQ0YsV0FBQTtFQUNBLGVBQUE7QUFnRVo7O0FBOURHO0VBQVEsYUFBQTtFQUFjLFdBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0VBQXNCLG1CQUFBO0FBcUUzRDs7QUFwRUc7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUF1RUo7O0FBcEVJO0VBRUUsWUFBQTtBQXNFTjs7QUFoRUE7RUFBRSxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLGVBQUE7RUFBZ0IsbUJBQUE7RUFBb0IsWUFBQTtBQXdFekU7O0FBdkVHO0VBQVMsK0JBQUE7RUFDUixrQ0FBQTtBQTBFSjs7QUF6RUk7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUE0RVI7O0FBMUVNO0VBQ0UsWUFBQTtBQTZFUjs7QUEzRU07RUFDSSxXQUFBO0FBOEVWOztBQTVFTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUErRVI7O0FBN0VNO0VBQ0UsaUJBQUE7QUFnRlI7O0FBOUVNO0VBQVUsWUFBQTtFQUFhLG9DQUFBO0VBQ3JCLGtCQUFBO0FBbUZSOztBQWxGUTtFQUFlLFlBQUE7RUFDYixpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFzRlY7O0FBakZRO0VBQWUscUJBQUE7QUFxRnZCIiwiZmlsZSI6InBvaW50c2dpZnRsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI0VGRUFFQTt9XHJcbi50YWJsZV9zdGFydHtwYWRkaW5nLXRvcDogMjBweDt9XHJcbi5waW5rQmd7YmFja2dyb3VuZC1jb2xvcjogI0YyRThFODt9XHJcbi5oZWFkZXIgLmNvbCB7YmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7fVxyXG4ucGFkZHtwYWRkaW5nLXJpZ2h0OjBweDtwYWRkaW5nLWxlZnQ6MHB4O31cclxuLmNvbCB7Ym9yZGVyOiBzb2xpZCAxcHggZ3JleTtib3JkZXItYm90dG9tLXN0eWxlOiBub25lO2JvcmRlci1yaWdodC1zdHlsZTogbm9uZTt9XHJcbmlvbi1pY29ue2NvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7fVxyXG4uY29sOmxhc3QtY2hpbGQge2JvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7fVxyXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7fVxyXG4uaGVhZGVyLXJvdyB7YmFja2dyb3VuZDogICNCMDFEMjI7Y29sb3I6ICNmZmY7Zm9udC1zaXplOiAxNHB4O31cclxuLmNvX3Jve2JvcmRlci1sZWZ0OiAxcHggc29saWQgI0VDRUVFRjt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG5pb24tdGV4dHtmb250LXNpemU6MTJweDt9XHJcbiAgLndhbGxldEltYWdlc3sgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbn1cclxuICAgIC5jb2xvcldoaXRle2NvbG9yOiAjZmZmO31cclxuICAgIC5hY2NUaXRsZXtmb250LXNpemU6MTRweDsgZm9udC13ZWlnaHQ6Ym9sZDt9XHJcbiAgICAuYmdXYWxsZXRJbWFnZXsgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO3BhZGRpbmc6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fVxyXG4gICAgICAgIC50b3RhbEJ0bnsgICAgLS1iYWNrZ3JvdW5kOiAjZWM2ZDcyO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9udEFjY3tmb250LXNpemU6IDEycHg7fVxyXG4gICAgICAgIC5kaXZidG57Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIHB7ICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDt9fVxyXG5cclxuICAgLmltZ2Nzc3toZWlnaHQ6IDEwMHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvdmVyOyAgICBib3JkZXItcmFkaXVzOiAxMHB4O31cclxuICAgLmdyYXljbGFzc3sgXHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiBncmF5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDhweCAwcHggZ3JleTsgKi9cclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q1ZDU7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgLy8gYmFja2dyb3VuZDogICNCMDFEMjI7fSBcclxuICAgfVxyXG4gICAgLmNvbG9yX2Nsc3tcclxuICAgICAgLy8gYmFja2dyb3VuZDogICNCMDFEMjI7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG4gICAgLy8gLmNvbG9yX2Nsc3Nze1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC8vIH1cclxuICAgLndoaXRlY2xhc3N7ICAgIFxyXG5we21hcmdpbi1ib3R0b206IDBweDttYXJnaW4tdG9wOiA1cHg7Zm9udC1zaXplOiAxMXB4O3BhZGRpbmctYm90dG9tOiA1cHg7Y29sb3I6IGJsYWNrO30gXHJcbiAgIC5icmR7ICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O30gIH0gIFxyXG4gICAgaHIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICAgICAgfSAgIFxyXG4gICAgICAuc2xpZGVfcHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLndhbGxldEltYWdlMXtcclxuICAgICAgICAgIHdpZHRoOjI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbF9zc3N7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb2xfc3N7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNsYWJzRGl2e3BhZGRpbmc6IDZweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7fVxyXG4gICAgICAgIC5zbGFic1BEaXZ7ICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDt9XHJcbiAgICAgICAgLy8gICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAvLyAgfVxyXG5cclxuICAgICAgICAucm93UmVlZGVteyAgICBiYWNrZ3JvdW5kOiAjNTg0ZTRlMjQ7fSJdfQ== */");

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

/***/ 2362:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redemptionModule/pointsgiftlist/pointsgiftlist.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Redeem</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t  </ion-refresher>\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div *ngIf=\"temparray?.success==1\" style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n        <ion-row>\n          <ion-col [size]=\"2\" sizexs=\"2\" size-md=\"2\" size-lg=\"2\">\n            <img [src]=\"temparray?.header_data?.coin_icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"walletImages\">\n          </ion-col>\n          <ion-col [size]=\"6\" sizexs=\"6\" size-md=\"6\" size-lg=\"6\" class=\"\">\n            <p class=\"ion-no-margin colorWhite fontAcc\">{{temparray?.header_data?.bal_text}}</p>\n            <p class=\"ion-no-margin colorWhite\">{{temparray?.header_data?.user_balance}}</p>\n          </ion-col>\n          <ion-col [size]=\"4\" sizexs=\"3\" size-md=\"3\" size-lg=\"3\">\n            <div class=\"divbtn\" ><p>{{temparray?.header_data?.slab_text}}</p>  </div>\n            <div class=\"divbtn\" (click) =\"purchaseDetails()\"><p>{{temparray?.header_data?.history_text}}</p></div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div>\n        <ion-row *ngIf = \"temparray?.header_data?.cart_btn_applicable == true\">\n          <ion-col size = \"9\" class=\"ion-text-right col_sss\">\n            <img [src]=\"temparray?.header_data?.cart_icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"walletImage1\">\n          </ion-col>\n          <ion-col size = \"3\" class=\"col_ss\" (click)=\"goToCart()\">\n            <p>{{temparray?.header_data?.cart_text}}: {{temparray?.header_data?.total_products}}</p>\n          </ion-col>\n        </ion-row>\n       \n        \n      </div>\n      <ion-row class=\"rowReedem\">\n        <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\" *ngFor=\"let item of serverData; let ind=index\">\n        \n          <div class=\"slabsDiv\">\n          <p class=\"ion-no-margin slabsPDiv\">{{item.slabs}}</p>\n        </div>\n          <br>\n          <ion-row>\n            <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"padd autoMargin\">\n              <span (click)=\"goToFun(ind, 'prev')\">\n                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n              </span>\n            </ion-col>\n            <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\" class=\"brd ion-no-padding\" >\n              <!-- <ion-slides  #slidesRef class = \"slide_p\" [options]=\"postSlider\" pager=\"false\"> -->\n                <ion-slides  class = \"slide_p\" [options]=\"postSlider\" pager=\"false\"  >\n                <ion-slide *ngFor=\"let imgdata of item?.products\">\n                  <div class=\"grayclass\" (click)=\"gotoitemdetail(imgdata)\">\n                    <div class=\"whiteclass color_clsss\">\n                      <img [src]=\"imgdata?.cover_image\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"imgcss\">\n                    </div>\n                    <div class=\"whiteclass color_cls\">\n                      <p text-wrap>{{imgdata?.goods_name}}</p>\n                    \n                    </div>\n                    <div class=\"whiteclass color_cls\">\n                      <p>{{imgdata?.product_points}}</p>\n                    </div>\n                   \n                  </div>\n                </ion-slide>\n              </ion-slides>\n            </ion-col>\n            <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"ion-text-right autoMargin\">\n              <!-- nextslide -->\n              <span (click)=\"goToFun(ind, 'next')\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      \n      </ion-row>\n     <div>\n       <img [src]=\"errorImage\"/>\n     </div>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_redemptionModule_pointsgiftlist_pointsgiftlist_module_ts-es2015.js.map