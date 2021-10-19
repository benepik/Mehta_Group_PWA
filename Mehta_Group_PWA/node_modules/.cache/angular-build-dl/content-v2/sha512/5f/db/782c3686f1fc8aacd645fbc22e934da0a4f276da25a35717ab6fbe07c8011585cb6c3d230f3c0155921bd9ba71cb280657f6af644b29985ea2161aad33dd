(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_itemdetail_itemdetail_module_ts"],{

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

/***/ 62755:
/*!**************************************************************************!*\
  !*** ./src/app/redemptionModule/itemdetail/itemdetail-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemdetailPageRoutingModule": function() { return /* binding */ ItemdetailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _itemdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemdetail.page */ 90484);




const routes = [
    {
        path: '',
        component: _itemdetail_page__WEBPACK_IMPORTED_MODULE_0__.ItemdetailPage
    }
];
let ItemdetailPageRoutingModule = class ItemdetailPageRoutingModule {
};
ItemdetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemdetailPageRoutingModule);



/***/ }),

/***/ 43723:
/*!******************************************************************!*\
  !*** ./src/app/redemptionModule/itemdetail/itemdetail.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemdetailPageModule": function() { return /* binding */ ItemdetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _itemdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemdetail-routing.module */ 62755);
/* harmony import */ var _itemdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemdetail.page */ 90484);







let ItemdetailPageModule = class ItemdetailPageModule {
};
ItemdetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _itemdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemdetailPageRoutingModule
        ],
        declarations: [_itemdetail_page__WEBPACK_IMPORTED_MODULE_1__.ItemdetailPage]
    })
], ItemdetailPageModule);



/***/ }),

/***/ 90484:
/*!****************************************************************!*\
  !*** ./src/app/redemptionModule/itemdetail/itemdetail.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemdetailPage": function() { return /* binding */ ItemdetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_itemdetail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./itemdetail.page.html */ 19363);
/* harmony import */ var _itemdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemdetail.page.scss */ 49354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);



// import { Component, OnInit } from '@angular/core';





let ItemdetailPage = class ItemdetailPage {
    constructor(router, sendData, apiService, zone) {
        this.router = router;
        this.sendData = sendData;
        this.apiService = apiService;
        this.zone = zone;
        this.temparray = [];
        this.faqs = [];
        this.visible = false;
        this.currentItemindex = 0;
        this.postSlider = { speed: "500", initialSlide: 0, slidesPerView: 1, spaceBetween: 7 };
        this.item_details = this.sendData.itemDetails;
        this.page_request_type = this.sendData.page_request_type;
        this.redeem_for = this.sendData.redeem_for;
        console.log('99999:', this.item_details);
        if (this.sendData.itemDetails.product_id) {
            this.item_details.auto_id = this.sendData.itemDetails.product_id;
        }
        else {
            console.log("546789:", this.sendData.itemDetails);
            this.item_details = this.sendData.itemDetails;
        }
        console.log(" this.item_details : ", this.item_details);
    }
    ionViewWillEnter() {
    }
    ngOnInit() {
        this.itemDetailsShow();
    }
    itemDetailsShow() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let apiKey = {
                "request_page": this.sendData.cart_request,
                "redeem_for": this.redeem_for,
                "page_request_type": this.page_request_type,
                "product_id": this.item_details.auto_id,
                "request_for": this.item_details.request_for,
                "request_user_type": this.item_details.request_page
            };
            console.log("aaaaaaaaa:", apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.ProductDetailUrl, apiKey).subscribe((result) => {
                this.apiService.presentLoadingClose();
                this.temparray = result.data;
                this.tempButt = result.buy_data;
                if (result.success == 1) {
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                this.apiService.presentLoadingClose();
            });
        }));
    }
    showArrow(item, index) {
        this.currentItemindex = index;
        console.log(item, index);
        if (item.show_div) {
            item.show_div = item.show_div == true ? false : true;
        }
        else {
            item.show_div = true;
        }
    }
    buyitem() {
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.sendData.page_request_type = 'buy';
            this.sendData.cart_request = this.tempButt.cart_request;
            if (this.tempButt.buy_btn_text == "Add To Cart") {
                // this.sendData.count = "1";
                this.sendData.itemDetails = {
                    "product_id": this.item_details.auto_id,
                    "quantity": 1
                };
            }
            else {
                this.sendData.itemDetails = {
                    "product_id": "",
                    "quantity": ""
                };
            }
            this.router.navigate(['/buyitem']);
        }));
    }
    nextslide() {
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.slidesRef.slideNext();
        }));
    }
    privslide() {
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.slidesRef.slidePrev();
        }));
    }
};
ItemdetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone }
];
ItemdetailPage.propDecorators = {
    slidesRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['slidesRef',] }]
};
ItemdetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-itemdetail',
        template: _raw_loader_itemdetail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_itemdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemdetailPage);



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

/***/ 49354:
/*!******************************************************************!*\
  !*** ./src/app/redemptionModule/itemdetail/itemdetail.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgcss {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.padd {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.whiteclass {\n  padding: 2px;\n}\n\n.cntr {\n  text-align: center;\n}\n\n.para {\n  color: red;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-weight: bold;\n}\n\n.arrowIcon {\n  height: 20px;\n  width: 100%;\n  margin: auto;\n}\n\n.boxS {\n  box-shadow: 1px 0px 4px 1px #d2d2d2;\n  margin-bottom: 10px;\n}\n\n.mainTitle {\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.SettingTitle {\n  font-size: 13px;\n}\n\nion-icon {\n  color: var(--headerColor);\n}\n\n.txtcolor {\n  color: var(--headerColor);\n}\n\n.para1 {\n  font-size: 13px;\n}\n\n.textend {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsWUFBQTtFQUFZLFdBQUE7RUFBVyxvQkFBQTtLQUFBLGlCQUFBO0FBSS9COztBQUhBO0VBQU0sa0JBQUE7RUFBa0IsaUJBQUE7QUFReEI7O0FBUEE7RUFBWSxZQUFBO0FBV1o7O0FBVkE7RUFBTSxrQkFBQTtBQWNOOztBQWJBO0VBQU0sVUFBQTtFQUFXLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7QUFvQnBEOztBQWxCQTtFQUFXLFlBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQXdCckM7O0FBdkJBO0VBQU0sbUNBQUE7RUFBb0MsbUJBQUE7QUE0QjFDOztBQTNCQTtFQUFXLHlCQUFBO0VBQXlCLGlCQUFBO0FBZ0NwQzs7QUEvQkE7RUFBYyxlQUFBO0FBbUNkOztBQWpDQTtFQUFTLHlCQUFBO0FBcUNUOztBQXBDQTtFQUFVLHlCQUFBO0FBd0NWOztBQXZDQTtFQUFPLGVBQUE7QUEyQ1A7O0FBMUNBO0VBQVMsZUFBQTtBQThDVCIsImZpbGUiOiJpdGVtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdjc3N7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvYmplY3QtZml0OmNvdmVyO31cclxuLnBhZGR7cGFkZGluZy1yaWdodDowcHg7cGFkZGluZy1sZWZ0OjBweDt9XHJcbi53aGl0ZWNsYXNze3BhZGRpbmc6MnB4O30gXHJcbi5jbnRye3RleHQtYWxpZ246IGNlbnRlcjt9IFxyXG4ucGFyYXtjb2xvcjogcmVkO21hcmdpbi10b3A6IDRweDttYXJnaW4tYm90dG9tOiA0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fSAgIFxyXG5cclxuLmFycm93SWNvbntoZWlnaHQ6IDIwcHg7d2lkdGg6IDEwMCU7IG1hcmdpbjogYXV0bzt9XHJcbi5ib3hTe2JveC1zaGFkb3c6IDFweCAwcHggNHB4IDFweCAjZDJkMmQyO21hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4ubWFpblRpdGxle2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtmb250LXdlaWdodDogYm9sZDt9XHJcbi5TZXR0aW5nVGl0bGV7Zm9udC1zaXplOiAxM3B4O31cclxuLy8gaW9uLWljb257bWFyZ2luOiBhdXRvOyBkaXNwbGF5OiBibG9jaztjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO31cclxuaW9uLWljb257Y29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTt9XHJcbi50eHRjb2xvcntjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpfVxyXG4ucGFyYTF7Zm9udC1zaXplOiAxM3B4O31cclxuLnRleHRlbmR7dGV4dC1hbGlnbjogZW5kO30iXX0= */");

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

/***/ 19363:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redemptionModule/itemdetail/itemdetail.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Detail</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <ion-row>\n        <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"6\" size-lg=\"6\">\n          <ion-row>\n            <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" class=\"brd\">\n              <!-- (click)=gotoitemdetail(imgdata) -->\n              <div class=\"borderDiv\">\n                <ion-row class=\"ion-text-center\">\n                  <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"padd autoMargin\">\n                    <span (click)=\"privslide()\">\n                      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                    </span>\n                  </ion-col>\n                  <ion-col [size]=\"8\" size-sm=\"8\" size-md=\"10\" size-lg=\"10\" class=\"padd\">\n                    <ion-slides #slidesRef [options]=\"postSlider\" pager=\"true\">\n                      <ion-slide *ngFor = \"let img of temparray?.media_arr\">\n                        <ion-row class=\"fullFidth\">\n                          <ion-col [size]=\"12\" class=\"ion-no-padding\">\n                            <img [src]=\"img?.good_image\"  onerror=\"this.src='assets/watermark/watermark.png'\" class=\"imgcss\">\n                          </ion-col>\n                        </ion-row>\n                        <!-- </div> -->\n                      </ion-slide>\n                    </ion-slides>\n                  </ion-col>\n                  <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"padd autoMargin\">\n                    <span (click)=\"nextslide()\">\n                      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                    </span>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"cntr\" *ngIf = \"tempButt?.show_buy_button == true\">\n            <ion-button tappable class=\"ionic_btn\" (click)=\"buyitem()\">{{tempButt?.buy_btn_text}}</ion-button>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"6\" size-lg=\"6\">\n          <ion-row>\n            <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\">\n              <p class=\"para\">{{temparray?.goods_name}}</p>\n              <p class=\"para\">{{temparray?.product_points}}</p>\n              <div class=\"para1\" [innerHTML]=\"temparray?.description\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row [ngClass]=\"item?.show_div ? 'active' : '' \" *ngFor=\"let item of temparray?.display_arr; let i = index\" class=\"boxS\" (click)=\"showArrow(item, i)\">\n            <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\">\n              <p class=\"SettingTitle  ion-no-margin txtcolor\" >{{item?.key}}</p>\n            </ion-col>\n            <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" class=\"autoMargin textend\" tappable>\n              <ion-icon [name]=\"item?.show_div? 'chevron-up-outline' :'chevron-down-outline'\"></ion-icon>\n            </ion-col>\n            <ion-row *ngIf=\"item?.show_div\">\n              <ion-col>\n                <p class=\"discriptionDiv ion-no-margin\" [innerHTML]=\"item?.value\"></p>\n              </ion-col>\n            </ion-row>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_redemptionModule_itemdetail_itemdetail_module_ts-es2015.js.map