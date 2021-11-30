(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_profile-upload_profile-upload_module_ts"],{

/***/ 66427:
/*!************************************************************************************!*\
  !*** ./src/app/RegistrationModule/profile-upload/profile-upload-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUploadPageRoutingModule": function() { return /* binding */ ProfileUploadPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_upload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-upload.page */ 87427);




const routes = [
    {
        path: '',
        component: _profile_upload_page__WEBPACK_IMPORTED_MODULE_0__.ProfileUploadPage
    }
];
let ProfileUploadPageRoutingModule = class ProfileUploadPageRoutingModule {
};
ProfileUploadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileUploadPageRoutingModule);



/***/ }),

/***/ 78140:
/*!****************************************************************************!*\
  !*** ./src/app/RegistrationModule/profile-upload/profile-upload.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUploadPageModule": function() { return /* binding */ ProfileUploadPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-upload-routing.module */ 66427);
/* harmony import */ var _profile_upload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-upload.page */ 87427);







let ProfileUploadPageModule = class ProfileUploadPageModule {
};
ProfileUploadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileUploadPageRoutingModule
        ],
        declarations: [_profile_upload_page__WEBPACK_IMPORTED_MODULE_1__.ProfileUploadPage]
    })
], ProfileUploadPageModule);



/***/ }),

/***/ 87427:
/*!**************************************************************************!*\
  !*** ./src/app/RegistrationModule/profile-upload/profile-upload.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUploadPage": function() { return /* binding */ ProfileUploadPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_upload_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-upload.page.html */ 47214);
/* harmony import */ var _profile_upload_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-upload.page.scss */ 89422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 59865);
/* harmony import */ var _model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model-camera/model-camera.page */ 39182);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);














// import { WebView } from '@ionic-native/ionic-webview/ngx';
let ProfileUploadPage = class ProfileUploadPage {
    constructor(camera, actionSheetController, file, zone, location, 
    // private webview: WebView,
    route, platform, filePath, apiService, modalCtrl, sendData, toastController) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.zone = zone;
        this.location = location;
        this.route = route;
        this.platform = platform;
        this.filePath = filePath;
        this.apiService = apiService;
        this.modalCtrl = modalCtrl;
        this.sendData = sendData;
        this.toastController = toastController;
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
        this.registrationData = this.sendData.alldata;
        if (this.registrationData.requestPage == 'dealer') {
            this.registrationData.requestFor = this.registrationData.requestFor;
        }
        else {
            this.registrationData.requestFor = '';
        }
        console.log('1', this.registrationData);
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
    }
    ngOnInit() {
    }
    next() {
        if (this.registrationData.requestPage == 'dealer') {
            this.sendData.alldata = this.registrationData;
            this.route.navigate(['/geolocation']);
        }
        else {
            this.route.navigate(['/tabs']);
        }
    }
    skip() {
        this.zone.run(() => {
            let apiKey = {
                "request_page": this.registrationData.requestPage,
                "requested_module": "profile",
                "request_for": this.registrationData.requestFor
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_8__.URLS.SkipUrl, apiKey).subscribe((result) => {
                if (result.success == 1) {
                    if (this.registrationData.requestPage == 'dealer') {
                        this.sendData.alldata = this.registrationData;
                        this.route.navigate(['/geolocation']);
                    }
                    else {
                        console.log('gotoHome');
                        this.route.navigateByUrl('/tabs');
                    }
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    back() {
        let obj = {
            'request_page': this.registrationData.requestPage,
            'frompage': 'back'
        };
        this.sendData.alldata = this.registrationData.requestFor;
        this.sendData.registrationType = obj;
        setTimeout(() => {
            // this.route.navigate(['./registration']);
            this.location.back();
        }, 1000);
    }
    pickImage(sourceType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('selectImage browser');
            this.currentObj = obj;
            if (this.showImgOption == false) {
                this.showImgOption = true;
                const modal = yield this.modalCtrl.create({
                    component: _model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_5__.ModelCameraPage,
                    componentProps: { data: this.registrationData },
                    cssClass: 'my-custom-class'
                });
                modal.onDidDismiss().then((dataReturned) => {
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
                        console.log("data:", this.userImg);
                        //alert('Modal Sent Data :'+ dataReturned);
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
ProfileUploadPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__.DataTransferService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
ProfileUploadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-profile-upload',
        template: _raw_loader_profile_upload_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_upload_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileUploadPage);



/***/ }),

/***/ 89422:
/*!****************************************************************************!*\
  !*** ./src/app/RegistrationModule/profile-upload/profile-upload.page.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\n  text-align: end;\n}\n\n.para {\n  font-weight: bold;\n  color: #B01D22;\n}\n\n.para1 {\n  text-align: end;\n  color: #B01D22;\n}\n\n.profile {\n  width: 140px;\n  height: 150px;\n  padding: 15px;\n  position: relative;\n  border: dotted;\n  border-radius: 71px;\n  border-color: #B01D22;\n}\n\n.banner_bg {\n  margin-top: -66px;\n  left: 0;\n  width: 100%;\n  display: block;\n}\n\n.profile_image {\n  width: 150px;\n}\n\n.simple {\n  padding: 0px;\n  padding-left: 12px;\n}\n\n.simple1 {\n  padding: 0px;\n  padding-right: 8px;\n}\n\n.plushIcon {\n  margin-top: -21px;\n  color: #b01d22;\n  font-size: 3rem;\n  border: dotted;\n  border-radius: 30px;\n}\n\n.userImageUpload {\n  border-radius: 50%;\n  height: 150px;\n  border: 3px dotted #b01d22;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.hiddenDiv {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ssZUFBQTtFQUNBLGNBQUE7QUFDTDs7QUFDQztFQUNHLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFTQTtFQUVJLGlCQUFBO0VBQ0MsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBUEw7O0FBU0M7RUFDRyxZQUFBO0FBTko7O0FBUUM7RUFDRyxZQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFPQztFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUpIOztBQU1DO0VBRUcsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1DO0VBRUcsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBSko7O0FBTUM7RUFBVyx3QkFBQTtBQUZaIiwiZmlsZSI6InByb2ZpbGUtdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4ucGFyYXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0IwMUQyMjtcbiAgICBcbn1cbi5wYXJhMXtcbiAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICBjb2xvcjogI0IwMUQyMjtcbiB9XG4gLnByb2ZpbGV7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBkb3R0ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNzFweDtcbiAgICBib3JkZXItY29sb3I6ICNCMDFEMjI7XG4gfVxuLy8gIC5pb25pY19idG57XG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICAgIHdpZHRoOiAxMjJweDtcbi8vICAgICBmb250LXNpemU6IDEzcHg7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjQjAxRDIyO1xuLy8gICAgIGhlaWdodDogMzJweDtcbi8vIH1cblxuLmJhbm5lcl9iZyB7XG4gICAgLy8gdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IC02NnB4O1xuICAgICBsZWZ0OiAwO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gfVxuIC5wcm9maWxlX2ltYWdle1xuICAgIHdpZHRoOiAxNTBweDtcbiB9XG4gLnNpbXBsZXtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gfVxuIC5zaW1wbGUxe1xuICAgcGFkZGluZzogMHB4O1xuICAgcGFkZGluZy1yaWdodDo4cHg7XG4gfVxuIC5wbHVzaEljb257XG5cbiAgICBtYXJnaW4tdG9wOiAtMjFweDtcbiAgICBjb2xvcjogI2IwMWQyMjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYm9yZGVyOiBkb3R0ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiB9XG4gLnVzZXJJbWFnZVVwbG9hZHtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlcjogM3B4IGRvdHRlZCAjYjAxZDIyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuIH1cbiAuaGlkZGVuRGl2e2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudDt9Il19 */");

/***/ }),

/***/ 47214:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RegistrationModule/profile-upload/profile-upload.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary1':  platform.width()>740}\">\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <img src = \"assets/icon/Bandhan Logo.png\" style = \"width: 150px;\">\n        </ion-col>\n        <ion-col class=\"col\">\n          <img src = \"assets/icon/abc.png\" style = \"width: 130px;  text-align: right;\">\n        </ion-col>\n      </ion-row>\n      <br>\n    </ion-grid>\n    <ion-row>\n      <ion-col class=\"simple\" size=\"8\">\n        <p class=\"para\">Upload Profile Picture</p>\n      </ion-col>\n      <ion-col class=\"simple1\" size=\"4\"> \n        <p class=\"para1\" (click)=\"skip()\">Skip</p>\n      </ion-col>\n    </ion-row>\n    <br>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <div class=\"relativeDiv\">\n        <img *ngIf=\"userImg=='' \" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n        <img *ngIf=\"userImg!='' \" class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"userImg\"/>\n        <!-- <ion-icon name=\"add-circle\" class=\"plushIcon centerData\" *ngIf=\"platform?.is('cordova')\" (click) = \"selectImage('img')\"></ion-icon> -->\n        <ion-icon name=\"add-circle\" class=\"plushIcon centerData\" tappable (click) = \"openSelectImageOpt('img')\"></ion-icon>\n        </div>\n      </ion-col>\n      \n    </ion-row>\n    <br>\n    <br>\n   <br>\n   <br>\n\n   \n    <div [ngClass]=\"{'banner': platform.width()<740}\">\n      <ion-row>\n        <ion-col style=\"text-align: right; padding:20px;\">\n          <ion-button class=\"ionic_btn butt\" (click) = \"back()\">Back</ion-button>\n        </ion-col>\n        <ion-col  style=\"text-align: left; padding:20px;\">\n          <ion-button [disabled]=\"userImg==''\" class=\"ionic_btn\" (click) = \"next()\">Next</ion-button>\n        </ion-col>\n      </ion-row>\n      <img src = \"assets/icon/Design 1.png\" class=\"banner_bg\">\n    </div>\n    \n    <!-- <img src = \"assets/icon/Design 1.png\" class=\"banner_bg\"> -->\n    </ion-col>\n    </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_RegistrationModule_profile-upload_profile-upload_module_ts-es2015.js.map