(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_communicationModule_communication-list_communication-list_module_ts"],{

/***/ 95815:
/*!*********************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-list/communication-list-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationListPageRoutingModule": function() { return /* binding */ CommunicationListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _communication_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./communication-list.page */ 6048);




const routes = [
    {
        path: '',
        component: _communication_list_page__WEBPACK_IMPORTED_MODULE_0__.CommunicationListPage
    }
];
let CommunicationListPageRoutingModule = class CommunicationListPageRoutingModule {
};
CommunicationListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommunicationListPageRoutingModule);



/***/ }),

/***/ 27028:
/*!*************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-list/communication-list.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationListPageModule": function() { return /* binding */ CommunicationListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _communication_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./communication-list-routing.module */ 95815);
/* harmony import */ var _communication_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication-list.page */ 6048);







let CommunicationListPageModule = class CommunicationListPageModule {
};
CommunicationListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _communication_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommunicationListPageRoutingModule
        ],
        declarations: [_communication_list_page__WEBPACK_IMPORTED_MODULE_1__.CommunicationListPage]
    })
], CommunicationListPageModule);



/***/ }),

/***/ 6048:
/*!***********************************************************************************!*\
  !*** ./src/app/communicationModule/communication-list/communication-list.page.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationListPage": function() { return /* binding */ CommunicationListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_communication_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./communication-list.page.html */ 32536);
/* harmony import */ var _communication_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication-list.page.scss */ 7134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);








let CommunicationListPage = class CommunicationListPage {
    constructor(zone, router, activeRoute, apiService, sendData) {
        this.zone = zone;
        this.router = router;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.sendData = sendData;
        this.value = 0;
        this.communityData = [];
        this.infiniteScroll_call = false;
    }
    ngOnInit() {
        this.communicationList();
    }
    communicationList() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "value": this.value,
                "flag_type": "1"
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.PostListUrl, apiKey).subscribe((result) => {
                console.log("PostListUrl: ", result);
                this.apiService.presentLoadingClose();
                this.community = result;
                if (result.success == 1) {
                    if (this.communityData == undefined) {
                        this.communityData = result.data;
                    }
                    else {
                        this.communityData = this.communityData.concat(result.data);
                    }
                    this.errorMessage = '';
                }
                else {
                    this.errorMessage = result.message;
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
                if (this.infiniteScroll_call == true) {
                    this.stopInfiniteScroll();
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                if (this.infiniteScroll_call == true) {
                    this.stopInfiniteScroll();
                }
            });
        });
    }
    gotoDetail(item) {
        this.sendData.alldata = item;
        this.router.navigate(['/communication-detail']);
    }
    loadData(event) {
        this.infiniteScroll_call = true;
        this.infiniteScroll_val = event;
        setTimeout(() => {
            this.value = this.communityData.length;
            this.communicationList();
        }, 500);
    }
    stopInfiniteScroll() {
        if (this.infiniteScroll_call == true) {
            this.infiniteScroll_call = false;
            this.infiniteScroll_val.target.complete();
        }
    }
};
CommunicationListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService }
];
CommunicationListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-communication-list',
        template: _raw_loader_communication_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_communication_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommunicationListPage);



/***/ }),

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

/***/ 7134:
/*!*************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-list/communication-list.page.scss ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".communicationImage {\n  width: 100%;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.titleDiv {\n  font-size: 14px;\n  color: var(--headerColor);\n  font-weight: bold;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contentDiv {\n  font-size: 13px;\n  color: #4a4747;\n  line-height: 15px;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bmljYXRpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBb0IsV0FBQTtFQUFZLGFBQUE7RUFBYyxvQkFBQTtLQUFBLGlCQUFBO0FBQzlDOztBQUFBO0VBQVUsZUFBQTtFQUFnQix5QkFBQTtFQUF5QixpQkFBQTtFQUp2QixvQkFBQTtFQUFxQiw0QkFBQTtFQUM3QyxxQkFHcUY7RUFIeEQsZ0JBQUE7RUFBbUIsdUJBQUE7QUFjcEQ7O0FBVkE7RUFBWSxlQUFBO0VBQWlCLGNBQUE7RUFBZSxpQkFBQTtBQWdCNUM7O0FBYkE7RUFBbUIsNEJBQUE7RUFDakIsc0JBQUE7RUFBdUIsWUFBQTtFQUN2QiwyQkFBQTtBQWtCRiIsImZpbGUiOiJjb21tdW5pY2F0aW9uLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzKSB7IGRpc3BsYXk6LXdlYmtpdC1ib3g7IC13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lczsgIG92ZXJmbG93OiBoaWRkZW47ICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuLmNvbW11bmljYXRpb25JbWFnZXt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMHB4O29iamVjdC1maXQ6IGNvdmVyO31cbi50aXRsZURpdntmb250LXNpemU6IDE0cHg7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO0BpbmNsdWRlIGxpbmUtY2xhbXAoMik7fVxuLmNvbnRlbnREaXZ7Zm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzRhNDc0NztsaW5lLWhlaWdodDogMTVweDtcblxufVxuLmJnV2FsbGV0SW1hZ2V7ICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7cGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fSJdfQ== */");

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

/***/ 32536:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/communication-list/communication-list.page.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{community?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" \n    class=\"whiteCol whit_Pad whit_pad_top\">\n    <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n    </div>\n    <ion-row class=\"borderBtmDiv\" *ngIf = \"community?.noDataImage\">\n      <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"3\"  class=\"autoMargin\">\n        <img [src]=\"community?.noDataImage\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      </ion-col>\n    </ion-row>\n      <ion-row *ngFor=\"let item of communityData \" class=\"borderBtmDiv\">\n        <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"3\"  class=\"autoMargin\">\n          <img class=\"communicationImage borderRediDiv\" [src]=\"item?.cover_image\" onerror=\"this.src='assets/watermark/watermark.png'\">   \n                   \n      </ion-col>\n      <ion-col [size]=\"8\" size-sm=\"8\" size-md=\"9\" size-lg=\"9\" tappable  (click)=\"gotoDetail(item)\">\n        <p class=\"titleDiv ion-no-margin\" [innerHTML]=\"item?.title\"></p>\n        <p class=\"contentDiv\" [innerHTML]=\"sendData?.readMoreHTML(item?.description, 200, '') \"></p>\n        <p class=\"dateP ion-no-margin ion-margin-top ion-text-right\">{{item?.start_date}}</p>   \n        <!-- <p class=\"ion-text-right dateP ion-no-margin ion-margin-top\">Read More</p> -->\n      </ion-col>\n      </ion-row>    \n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n  <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ 47674:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-zoom/image-zoom.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_communicationModule_communication-list_communication-list_module_ts-es2015.js.map