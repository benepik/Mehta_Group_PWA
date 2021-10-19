(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_account-statment_account-statment_module_ts"],{

/***/ 25338:
/*!*********************************************************************!*\
  !*** ./src/app/account-statment/account-statment-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatmentPageRoutingModule": function() { return /* binding */ AccountStatmentPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _account_statment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statment.page */ 53697);




const routes = [
    {
        path: '',
        component: _account_statment_page__WEBPACK_IMPORTED_MODULE_0__.AccountStatmentPage
    }
];
let AccountStatmentPageRoutingModule = class AccountStatmentPageRoutingModule {
};
AccountStatmentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountStatmentPageRoutingModule);



/***/ }),

/***/ 61800:
/*!*************************************************************!*\
  !*** ./src/app/account-statment/account-statment.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatmentPageModule": function() { return /* binding */ AccountStatmentPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _account_statment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statment-routing.module */ 25338);
/* harmony import */ var _account_statment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statment.page */ 53697);







let AccountStatmentPageModule = class AccountStatmentPageModule {
};
AccountStatmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_statment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountStatmentPageRoutingModule
        ],
        declarations: [_account_statment_page__WEBPACK_IMPORTED_MODULE_1__.AccountStatmentPage]
    })
], AccountStatmentPageModule);



/***/ }),

/***/ 53697:
/*!***********************************************************!*\
  !*** ./src/app/account-statment/account-statment.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatmentPage": function() { return /* binding */ AccountStatmentPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_statment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account-statment.page.html */ 99087);
/* harmony import */ var _account_statment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statment.page.scss */ 8528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-transfer.service */ 51532);








let AccountStatmentPage = class AccountStatmentPage {
    constructor(route, zone, apiService, sendData) {
        this.route = route;
        this.zone = zone;
        this.apiService = apiService;
        this.sendData = sendData;
        this.serverData = [];
        this.value = 0;
        this.allData = this.sendData.registrationType;
    }
    ngOnInit() {
        this.accountShow(null);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.accountShow(event);
    }
    accountShow(event) {
        if (event == null) {
            this.apiService.presentLoadingDefault();
        }
        this.apiService.presentLoadingDefault();
        //this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                // "request_type":this.allData.request_Type,
                "request_page": this.allData.request_page,
                "request_for": this.allData.auto_id
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.AccStatementUrl, apiKey).subscribe((result) => {
                console.log("AccStatementUrl: ", result);
                if (event == null) {
                    this.apiService.presentLoadingClose();
                }
                else {
                    event.target.complete();
                }
                this.apiService.presentLoadingClose();
                this.title = result.pageTitle;
                this.serverData = result.data;
                if (result.success == 1) {
                    this.errorMessage = '';
                }
                else {
                    this.errorMessage = result.message;
                }
            }, err => {
            });
        });
    }
};
AccountStatmentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__.DataTransferService }
];
AccountStatmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account-statment',
        template: _raw_loader_account_statment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_statment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountStatmentPage);



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

/***/ 8528:
/*!*************************************************************!*\
  !*** ./src/app/account-statment/account-statment.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  box-shadow: 1px 1px 1px 2px #EFEAEA;\n}\n\n.pinkBg {\n  background-color: #F2E8E8;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-row {\n  background: #B01D22;\n  color: #fff;\n  font-size: 14px;\n}\n\n.co_ro {\n  border-left: 1px solid #ECEEEF;\n  text-align: center;\n}\n\nion-text {\n  font-size: 12px;\n}\n\n.walletImages {\n  height: 40px;\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: auto;\n  display: block;\n}\n\n.colorWhite {\n  color: #fff;\n}\n\n.accTitle {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.totalBtn {\n  --background:#ec6d72;\n  text-transform: none;\n  text-transform: initial;\n  max-width: 100%;\n  white-space: pre-wrap;\n  font-size: 11px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n}\n\n.fontAcc {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc3RhdG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sbUNBQUE7QUFFUDs7QUFERTtFQUFRLHlCQUFBO0FBS1Y7O0FBSkU7RUFBZSwyQkFBQTtBQVFqQjs7QUFQQTtFQUFNLHNCQUFBO0VBQXVCLHlCQUFBO0VBQTJCLHdCQUFBO0FBYXhEOztBQVpBO0VBQ0ksNEJBQUE7QUFlSjs7QUFiQTtFQUNJLDZCQUFBO0FBZ0JKOztBQWRBO0VBQWEsbUJBQUE7RUFBcUIsV0FBQTtFQUFZLGVBQUE7QUFvQjlDOztBQW5CRTtFQUFPLDhCQUFBO0VBQStCLGtCQUFBO0FBd0J4Qzs7QUF2QkU7RUFBVSxlQUFBO0FBMkJaOztBQTFCRTtFQUFlLFlBQUE7RUFDYixXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBOEJKOztBQTdCSTtFQUFZLFdBQUE7QUFpQ2hCOztBQWhDSTtFQUFVLGVBQUE7RUFBZ0IsaUJBQUE7QUFxQzlCOztBQXBDSTtFQUFlLDRCQUFBO0VBQThCLHNCQUFBO0VBQXdCLDJCQUFBO0FBMEN6RTs7QUF6Q0k7RUFBVSxvQkFBQTtFQUFxQixvQkFBQTtFQUFBLHVCQUFBO0VBQXVCLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixlQUFBO0VBQ3RGLG9CQUFBO0VBQXNCLGtCQUFBO0FBa0Q5Qjs7QUFqREk7RUFBUyxlQUFBO0FBcURiIiwiZmlsZSI6ImFjY291bnQtc3RhdG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle2JveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCAjRUZFQUVBO31cbiAgLnBpbmtCZ3tiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFOEU4O31cbiAgLmhlYWRlciAuY29sIHsgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7fVxuLmNvbCB7Ym9yZGVyOiBzb2xpZCAxcHggZ3JleTtib3JkZXItYm90dG9tLXN0eWxlOiBub25lOyBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7fVxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xufVxuLmhlYWRlci1yb3cge2JhY2tncm91bmQ6ICAjQjAxRDIyO2NvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMTRweDt9XG4gIC5jb19yb3tib3JkZXItbGVmdDogMXB4IHNvbGlkICNFQ0VFRUY7dGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIGlvbi10ZXh0eyBmb250LXNpemU6MTJweDsgfVxuICAud2FsbGV0SW1hZ2VzeyBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7fVxuICAgIC5jb2xvcldoaXRle2NvbG9yOiAjZmZmO31cbiAgICAuYWNjVGl0bGV7Zm9udC1zaXplOjE0cHg7IGZvbnQtd2VpZ2h0OmJvbGQ7fVxuICAgIC5iZ1dhbGxldEltYWdle2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9XG4gICAgLnRvdGFsQnRuey0tYmFja2dyb3VuZDojZWM2ZDcyO3RleHQtdHJhbnNmb3JtOmluaXRpYWw7bWF4LXdpZHRoOjEwMCU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7Zm9udC1zaXplOjExcHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4OyAtLXBhZGRpbmctZW5kOiA1cHg7fVxuICAgIC5mb250QWNje2ZvbnQtc2l6ZTogMTJweDt9Il19 */");

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

/***/ 99087:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-statment/account-statment.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t  </ion-refresher>\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"ion-padding bgWalletImage\">\n        <p class=\"colorWhite ion-no-margin accTitle\">{{serverData?.reward_card?.title}}</p>\n        <ion-row>\n          <ion-col [size]=\"1\" sizexs=\"1\" size-md=\"1\" size-lg=\"1\">\n            <img src=\"assets/Other Icons/Wallet.svg\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"walletImages\">\n          </ion-col>\n          <ion-col [size]=\"5\" sizexs=\"5\" size-md=\"7\" size-lg=\"7\" >\n            <p class=\"ion-no-margin colorWhite fontAcc\">{{serverData?.reward_card?.available_balance_text}}</p>\n            <p class=\"ion-no-margin colorWhite\">{{serverData?.reward_card?.available_balance}}</p>\n          </ion-col>\n          <ion-col [size]=\"3\" sizexs=\"3\" size-md=\"2\" size-lg=\"2\" class=\"ion-no-padding\">\n            <ion-button  class=\"totalBtn\">{{serverData?.reward_card?.total_debits_text}}&nbsp;{{serverData?.reward_card?.total_debits}}</ion-button>\n          </ion-col>\n          <ion-col [size]=\"3\" sizexs=\"3\" size-md=\"2\" size-lg=\"2\" class=\"ion-text-right ion-no-padding\">\n            <ion-button class=\"totalBtn\">{{serverData?.reward_card?.total_credits_text}}&nbsp;{{serverData?.reward_card?.total_credits}}</ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <!-- table  -->\n        <div class=\"ion-padding\">\n          <ion-row class=\"header-row\" *ngIf=\"serverData?.account_data?.length>0\">\n          <ion-col class=\"co_ro\" size=\"3\" *ngFor = \"let item of serverData?.header\">\n            <ion-text>{{item?.value}}</ion-text>\n          </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let data of serverData?.account_data; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n            <ion-col  class=\"co_ro\" size=\"3\">\n              <ion-text>{{data?.date}} </ion-text>\n            </ion-col>\n            <ion-col class=\"co_ro\" size=\"3\">\n              <ion-text>{{data?.description}}</ion-text>\n            </ion-col>\n            <ion-col class=\"co_ro\" size=\"3\">\n              <ion-text>{{data?.debit}}</ion-text>\n            </ion-col>\n            <ion-col class=\"co_ro\"  size=\"3\">\n              <ion-text> {{data?.credit}} </ion-text>\n            </ion-col>\n          </ion-row>\n          <div *ngIf=\"errorMessage!=''\">\n            <p class=\"ion-text-center\">{{errorMessage}}</p> \n          </div>\n        </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

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
//# sourceMappingURL=src_app_account-statment_account-statment_module_ts-es2015.js.map