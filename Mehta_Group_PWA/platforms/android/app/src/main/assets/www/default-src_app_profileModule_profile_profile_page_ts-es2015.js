(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["default-src_app_profileModule_profile_profile_page_ts"],{

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

/***/ 51270:
/*!*******************************************************!*\
  !*** ./src/app/profileModule/profile/profile.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 73625);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 35312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 59865);
/* harmony import */ var _RegistrationModule_model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../RegistrationModule/model-camera/model-camera.page */ 39182);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);





//import { Platform } from '@ionic/angular';





// import { NavigationExtras, Router } from '@angular/router';




let ProfilePage = class ProfilePage {
    constructor(camera, actionSheetController, file, storage, router, platform, filePath, sendData, modalCtrl, popoverController, toastController, zone, apiService, alertController) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.storage = storage;
        this.router = router;
        this.platform = platform;
        this.filePath = filePath;
        this.sendData = sendData;
        this.modalCtrl = modalCtrl;
        this.popoverController = popoverController;
        this.toastController = toastController;
        this.zone = zone;
        this.apiService = apiService;
        this.alertController = alertController;
        this.win = window;
        this.userImg = "";
        this.files = [];
        this.croppedImagePath = "";
        this.isLoading = false;
        this.formData = [];
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
        this.showImgOption = false;
    }
    ionViewWillEnter() {
        this.apiService.isSelected = '';
        this.profileShow();
    }
    ngOnInit() {
    }
    profileShow() {
        this.zone.run(() => {
            let apiKey = {};
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.SideMenuUrl, apiKey).subscribe((result) => {
                console.log("SideMenuUrl: ", result);
                if (result.success == 1) {
                    this.profileData = result.data;
                }
                else {
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    gotoDetail(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.getTop();
            if (popover)
                yield popover.dismiss(null);
            // this.popoverController.dismiss(null);
            this.zone.run(() => {
                if ((item === null || item === void 0 ? void 0 : item.redirect_url) == "logout") {
                    this.presentAlertConfirm();
                }
                else if (item.redirect_url == "accounts-detail") {
                    if (this.profileData.emp_data.employee_type == "1") {
                        this.sendData.registrationType = { "request_page": "account_detail" };
                        this.sendData.alldata = this.profileData.emp_data.employee_type;
                        console.log('registrationType', this.sendData.registrationType);
                        this.router.navigate(['./registration']);
                    }
                    else {
                        this.router.navigate(['./accounts-detail']);
                    }
                }
                else {
                    this.router.navigateByUrl(item === null || item === void 0 ? void 0 : item.redirect_url);
                }
            });
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Are you sure, you want to logout?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.LogOutFun();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    LogOutFun() {
        this.zone.run(() => {
            let apiKey = {};
            console.log('login data response', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.LogOutUrl, apiKey).subscribe((result) => {
                console.log('logout data response', result);
                // this.accountData=result.data.account_details;
                this.storage.remove('allStoreData');
                this.storage.getStorage().then((storedData) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('this is all stored data', storedData);
                    if (!this.platform.is('mobile')) {
                        console.log('not mobile platform');
                        this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
                        this.router.navigate(['./login']);
                        setTimeout(() => {
                            window.location.reload();
                        }, 200);
                        // this.appCtrl.getRootNav().setRoot(yourcomponent);
                        //  await location.reload();
                        // this.maintance();
                    }
                    else {
                        this.maintance();
                        this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
                        this.router.navigate(['./login']);
                        console.log('mobile platform');
                    }
                }));
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    maintance() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.zone.run(() => {
                let apiKey = {};
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.maintanceUrl, apiKey).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    if (result.success == 1 || result.success == '1') {
                        this.maintanceData = result;
                        yield this.storage.setStorage('maintainanceData', result);
                        if (result.data.is_down == 1 || result.data.is_down == '1') {
                            //for maintance redirection page
                        }
                    }
                    else {
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }), err => {
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        });
    }
    pickImage(sourceType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                sourceType: sourceType,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            const tempImage = yield this.camera.getPicture(options);
            const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
            const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);
            const newBaseFilesystemPath = this.file.dataDirectory;
            yield this.file.copyFile(tempBaseFilesystemPath, tempFilename, newBaseFilesystemPath, tempFilename);
            const storedPhoto = newBaseFilesystemPath + tempFilename;
            const displayImage = this.win.ionic.webview.convertFileSrc(storedPhoto);
        });
    }
    selectImage(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log('selectImage cordova');
            this.currentObj = obj;
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openSelectImageOpt(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log('selectImage browser');
            // this.currentObj=obj;
            if (this.showImgOption == false) {
                this.showImgOption = true;
                const modal = yield this.modalCtrl.create({
                    component: _RegistrationModule_model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_7__.ModelCameraPage,
                    cssClass: 'my-custom-class',
                    componentProps: { data: '' }
                });
                modal.onDidDismiss().then((dataReturned) => {
                    console.log(dataReturned);
                    if (dataReturned !== null) {
                        this.UplaodData = dataReturned.data;
                        this.dataReturned = dataReturned.data.data;
                        // this.currentObj.answer = this.dataReturned.data;
                        console.log(" this.dataReturned:", this.dataReturned);
                        // this.userImg = this.dataReturned.data;
                        this.userImg = this.dataReturned.filebaseUrl;
                        if (this.userImg == undefined) {
                            this.userImg = '';
                        }
                    }
                    else {
                        this.userImg = '';
                    }
                });
                return yield modal.present();
            }
            else {
                this.showImgOption = false;
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__.FilePath },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_9__.DataTransferService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



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

/***/ 35312:
/*!*********************************************************!*\
  !*** ./src/app/profileModule/profile/profile.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profileIcon {\n  height: 20px;\n  width: 100%;\n}\n\n.profileDiv {\n  font-size: 16px;\n  color: black;\n}\n\n.desktitle {\n  font-size: 17px;\n  color: black;\n}\n\n.nameDiv, .deskDiv {\n  color: #fff;\n}\n\n.deskDiv {\n  font-size: 18px;\n  line-height: 22px;\n}\n\n.nameDiv {\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.userIconImgDiv {\n  height: 130px;\n  width: 130px;\n  margin: auto;\n  position: relative;\n  color: #fff;\n  padding: 5px;\n  border: 5px solid #fff;\n  border-radius: 50%;\n}\n\n.userIconImgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.userIconImgDiv .posDiv {\n  position: absolute;\n  right: -22px;\n  top: 10px;\n}\n\n.userIconImgDiv .posDiv ion-icon {\n  font-size: 35px;\n}\n\n.forDesktopImgDiv {\n  height: 70px;\n  width: 70px;\n  padding: 3px;\n  border: 3px solid #fff;\n}\n\n.forDesktopImgDiv .posDiv {\n  right: -5px;\n  top: 5px;\n}\n\n.forDesktopImgDiv .posDiv ion-icon {\n  font-size: 20px;\n}\n\n.sidemenu_row {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\nion-content {\n  --background:linear-gradient(#68090354, rgba(243, 242, 242, 0.97));\n}\n\n.act {\n  text-transform: capitalize;\n  --background: transparent !important;\n  border: 1px solid;\n  border-radius: 24px;\n  height: 30px;\n  color: white;\n  width: 100%;\n}\n\n.act_p {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsWUFBQTtFQUFhLFdBQUE7QUFHMUI7O0FBRkE7RUFBWSxlQUFBO0VBQWlCLFlBQUE7QUFPN0I7O0FBTkE7RUFBVyxlQUFBO0VBQ1AsWUFBQTtBQVVKOztBQU5BO0VBQWtCLFdBQUE7QUFVbEI7O0FBVEE7RUFBUyxlQUFBO0VBQWdCLGlCQUFBO0FBY3pCOztBQWJBO0VBQVMsZUFBQTtFQUFnQixpQkFBQTtBQWtCekI7O0FBZkE7RUFBZ0IsYUFBQTtFQUFhLFlBQUE7RUFBWSxZQUFBO0VBQVksa0JBQUE7RUFBa0IsV0FBQTtFQUNuRSxZQUFBO0VBQVksc0JBQUE7RUFBc0Isa0JBQUE7QUF5QnRDOztBQXhCSTtFQUFJLFdBQUE7RUFBVyxZQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtFQUFpQixrQkFBQTtBQThCaEQ7O0FBN0JJO0VBQVEsa0JBQUE7RUFBa0IsWUFBQTtFQUFZLFNBQUE7QUFrQzFDOztBQWpDUTtFQUFTLGVBQUE7QUFvQ2pCOztBQWpDQTtFQUFrQixZQUFBO0VBQVksV0FBQTtFQUFXLFlBQUE7RUFBWSxzQkFBQTtBQXdDckQ7O0FBdkNJO0VBQVEsV0FBQTtFQUFXLFFBQUE7QUEyQ3ZCOztBQTFDUTtFQUFTLGVBQUE7QUE2Q2pCOztBQTFDQTtFQUFlLGtCQUFBO0VBQW1CLGVBQUE7QUErQ2xDOztBQTlDQTtFQUVJLGtFQUFBO0FBZ0RKOztBQS9DQTtFQUNJLDBCQUFBO0VBQ0Esb0NBQUE7RUFHRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZ0RIOztBQTlDQTtFQUNJLGVBQUE7QUFpREoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUljb257aGVpZ2h0OiAyMHB4O3dpZHRoOiAxMDAlO31cbi5wcm9maWxlRGl2e2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IGJsYWNrO31cbi5kZXNrdGl0bGV7Zm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgIC8vIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xufVxuXG4ubmFtZURpdiwuZGVza0Rpdntjb2xvcjogI2ZmZjt9XG4uZGVza0Rpdntmb250LXNpemU6IDE4cHg7bGluZS1oZWlnaHQ6IDIycHg7fVxuLm5hbWVEaXZ7Zm9udC1zaXplOiAxNnB4O2xpbmUtaGVpZ2h0OiAyMHB4O31cblxuXG4udXNlckljb25JbWdEaXZ7aGVpZ2h0OjEzMHB4O3dpZHRoOjEzMHB4O21hcmdpbjphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7Ym9yZGVyOjVweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6NTAlO1xuICAgIGltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29iamVjdC1maXQ6Y292ZXI7Ym9yZGVyLXJhZGl1czo1MCU7fVxuICAgIC5wb3NEaXZ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTIycHg7dG9wOjEwcHg7XG4gICAgICAgIGlvbi1pY29ue2ZvbnQtc2l6ZTozNXB4O31cbiAgICB9XG59XG4uZm9yRGVza3RvcEltZ0RpdntoZWlnaHQ6NzBweDt3aWR0aDo3MHB4O3BhZGRpbmc6M3B4O2JvcmRlcjozcHggc29saWQgI2ZmZjtcbiAgICAucG9zRGl2e3JpZ2h0Oi01cHg7dG9wOjVweDtcbiAgICAgICAgaW9uLWljb257Zm9udC1zaXplOjIwcHg7fVxuICAgIH1cbn1cbi5zaWRlbWVudV9yb3d7IG1hcmdpbi1ib3R0b206IDVweDttYXJnaW4tdG9wOiA1cHg7fVxuaW9uLWNvbnRlbnR7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoIzY4MDkwMzU0LCByZ2JhKDI0MywgMjQyLCAyNDIsIDAuOTcpKX1cbi5hY3R7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAvLyAgLS1ib3JkZXItY29sb3I6ICNCMDFEMjIgIWltcG9ydGFudDtcbiAgIC8vIGNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICBib3JkZXI6IDFweCBzb2xpZDtcbiAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICBoZWlnaHQ6IDMwcHg7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIHdpZHRoOiAxMDAlO1xufVxuLmFjdF9we1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuIl19 */");

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

/***/ 73625:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profileModule/profile/profile.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>profile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content >\n  <div [ngClass]=\"{container: platform?.is('mobile')}\">\n        <ion-row class=\"bgDiv\" style=\"background-image: url('assets/Bandhan Icon/Login banner.png');\">\n            <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"3\" >\n              <div class=\"userIconImgDiv\" [ngClass]=\"{'forDesktopImgDiv': platform?.is('desktop')}\">\n                <img *ngIf=\"userImg==''\" [src]=\"profileData?.emp_data?.user_image\"  onerror=\"this.src='assets/watermark/watermark.png'\" \n                [ngClass]=\"[platform?.is('mobile')? 'deskImg' : 'profileImg']\">\n                <img *ngIf=\"userImg !='' \" [src]=\"userImg\"  onerror=\"this.src='assets/watermark/watermark.png'\" \n                [ngClass]=\"[platform?.is('mobile')? 'deskImg' : 'profileImg']\">\n                <!-- [ngClass]=\"[platform?.is('mobile')? 'deskImg' : 'profileImg']\" -->\n                <div class=\"posDiv\">\n                  <ion-icon name=\"camera\" *ngIf=\"platform?.is('cordova')\" (click) = \"selectImage('img')\"></ion-icon>\n                  <ion-icon name=\"camera\" *ngIf=\"!platform?.is('cordova')\" tappable (click)=\"openSelectImageOpt('img')\"></ion-icon>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col  [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" [ngClass]=\"[platform?.is('mobile')? 'ion-text-center' : 'ion-padding-top']\">\n              <p class=\"ion-no-margin\" [ngClass]=\"[platform?.is('mobile')? 'deskDiv' : 'nameDiv']\">\n                {{profileData?.emp_data?.full_name}}\n                <span *ngIf=\"profileData?.emp_data?.customer_type_name!=''\">({{profileData?.emp_data?.customer_type_name}})</span>\n                <span *ngIf=\"profileData?.emp_data?.dealer_code!=''\">({{profileData?.emp_data?.dealer_code}})</span></p>\n              <p class=\"nameDiv ion-no-margin\">{{profileData?.emp_data?.contact}}</p>\n              <!-- [ngClass]=\"{platform?.is('mobile')? 'deskDiv' :'nameDiv'}\" -->\n             \n               \n              \n              \n            </ion-col>\n            <ion-col>\n              <div class= \"act ion-text-center\" *ngIf=\"profileData?.button_info?.isButtonApp ==true\">\n                <p class=\"act_p\">{{profileData?.button_info?.buttonText}}</p></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu_row borderBtmDiv\" *ngFor=\"let item of profileData?.sidemenu_list\" tappable (click)=\"gotoDetail(item)\">\n            <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\">\n              <img [src]=\"item?.icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"profileIcon\">\n            </ion-col>\n            <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\" class=\"autoMargin borderBtmDiv\">\n              <p class=\"ion-no-margin\" [ngClass]=\"[platform?.is('mobile')? 'desktitle' : 'profileDiv']\">{{item?.name}}</p>\n            </ion-col>\n          </ion-row>\n        </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_profileModule_profile_profile_page_ts-es2015.js.map