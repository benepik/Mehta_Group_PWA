(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["default-src_app_RegistrationModule_model-camera_model-camera_page_ts"],{

/***/ 39182:
/*!**********************************************************************!*\
  !*** ./src/app/RegistrationModule/model-camera/model-camera.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelCameraPage": function() { return /* binding */ ModelCameraPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_model_camera_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./model-camera.page.html */ 65877);
/* harmony import */ var _model_camera_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-camera.page.scss */ 29492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);














let ModelCameraPage = class ModelCameraPage {
    constructor(modalController, apiServices, navParam, transfer, platform, file, camera, sanitizer, localStorage) {
        this.modalController = modalController;
        this.apiServices = apiServices;
        this.navParam = navParam;
        this.transfer = transfer;
        this.platform = platform;
        this.file = file;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.localStorage = localStorage;
        this.files = [];
        this.win = window;
        this.RegistrationData = this.navParam.data.data;
        console.log(" this.RegistrationData", this.RegistrationData);
        console.log(" this.RegistrationData", this.navParam.data.data);
        if (this.RegistrationData != undefined || this.RegistrationData != '') {
            if (this.RegistrationData.nulldata) {
                this.flag = this.RegistrationData.flag;
            }
            else if (this.RegistrationData.show_popup) {
                this.pgShow = this.RegistrationData.show_popup;
            }
            else {
                this.flag = "5";
            }
            console.log("1");
            console.log(" this.RegistrationData", this.navParam.data.data);
            this.RequestFor = this.RegistrationData.requestFor;
            this.RequestPage = this.RegistrationData.requestPage;
        }
        else {
            console.log("2");
            this.RequestFor = '';
            this.RequestPage = '';
        }
        console.log('this registrationData from profile upload page', this.RegistrationData);
    }
    ngOnInit() {
    }
    close() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    pickImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log('cordova calling');
            const options = {
                quality: 40,
                cameraDirection: 1,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.CAMERA,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            // Get the data of an image
            this.camera.getPicture(options).then((imagePath) => {
                console.log("imagePath==", imagePath);
                this.currentName = imagePath;
                let name = this.currentName.split("/"); // code for fetching file name
                this.fileName = name[name.length - 1];
                // this.previewImagePath=this.win.Ionic.WebView.convertFileSrc(imagePath);
                if (this.platform.is("ios")) {
                    let tempImg = this.sanitizer.bypassSecurityTrustResourceUrl(this.win.Ionic.WebView.convertFileSrc(imagePath));
                    console.log("ios imagePath==", tempImg);
                    // this.previewImagePath=tempImg;
                    // console.log("ios previewImagePath==", this.previewImagePath);
                }
                else {
                    // this.previewImagePath=this.win.Ionic.WebView.convertFileSrc(imagePath);
                }
                this.uploadImageonserver();
            }, (err) => {
                console.log("imagePath error==", err);
            });
        });
    }
    uploadImageonserver() {
        this.apiServices.presentLoadingDefault();
        this.localStorage.getStorage().then(dataFromStorage => {
            var url = src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.baseUrl + src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.imageUploadUrl;
            console.log("url", url);
            let myheaders = new Headers();
            myheaders.append('Content-Type', 'application/json');
            var targetPath = this.currentName; // aply only for imagepicker checking
            let options = {
                fileKey: "file",
                fileName: this.fileName,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: {
                    'file': targetPath, "client_id": src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.clientId, "device": this.apiServices.device, "device_id": dataFromStorage.deviceId,
                    "app_version": src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.app_version, "employee_id": dataFromStorage.allStoreData.user_id, "request_page": this.RequestPage,
                    "user_type": dataFromStorage.allStoreData.employee_type, "media_type": '1', "flag_type": this.flag, "request_for": this.RequestFor,
                }
            };
            console.log("options", options);
            console.log("passing key==", JSON.stringify(options));
            const fileTransfer = this.transfer.create();
            fileTransfer.upload(targetPath, url, options).then(res => {
                console.log("server res==", res);
                let data = JSON.parse(res.response);
                console.log("response==", res);
                console.log("response22==", data);
                this.apiServices.presentLoadingClose();
                if (data.success == 1) {
                    this.modalController.dismiss({
                        'dismissed': true,
                        'data': data.data
                    });
                    this.apiServices.showToastMessage(data.message, 'top', 3000, 'greenBg');
                }
                else {
                    console.log("message key==", data.message);
                    // this.apiServices.showToastMessage(data.message, 'top', 3000, 'redBg');
                    // this.apiServices.hideLoader();
                }
            }, err => {
                this.apiServices.presentLoadingClose();
                console.log("err==", err);
                this.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
            // })
        });
    }
    captureImg(event) {
        this.apiServices.presentLoadingDefault();
        console.log('event1==>', event);
        var formData = new FormData();
        if (event.target.files) {
            const file = event.target.files[0];
            formData.append('file', file);
            formData.append('flag_type', this.flag);
            formData.append('media_type', "1");
            formData.append('request_for', this.RequestFor);
            formData.append('request_page', this.RequestPage);
            console.log('formData==>', formData);
            this.apiServices.mediaFileUpload(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.imageUploadUrl, formData).subscribe((event) => {
                console.log('Multi File upload res==> ', JSON.stringify(event));
                switch (event.type) {
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpEventType.Sent:
                        console.log('Request has been made!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpEventType.ResponseHeader:
                        console.log('Response header has been received!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpEventType.Response:
                        let result = event.body;
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            console.log(reader.result);
                            formData.append("file", this.files);
                            console.log('this.currentObj==>', this.currentObj);
                            // this.currentObj.answer= reader.result;
                            this.apiServices.presentLoadingClose();
                            this.modalController.dismiss({
                                'dismissed': true,
                                'data': result.data
                            });
                        };
                }
            }, err => {
                this.apiServices.presentLoadingClose();
                this.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                // this.dismissLoading();
            });
        }
    }
    pgShoW(id) {
        this.modalController.dismiss({
            'dismissed': true,
            'data': id
            //'data':result.data
        });
        // this.route.navigate(['/mobile']);
    }
};
ModelCameraPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__.FileTransfer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService }
];
ModelCameraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-model-camera',
        template: _raw_loader_model_camera_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_model_camera_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModelCameraPage);



/***/ }),

/***/ 29492:
/*!************************************************************************!*\
  !*** ./src/app/RegistrationModule/model-camera/model-camera.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-upload > input {\n  display: none;\n}\n\n.iconBorder {\n  font-size: 80px;\n  color: #b01d22;\n}\n\nion-col {\n  text-align: center;\n}\n\n.circle {\n  text-align: right;\n  padding: 0;\n}\n\n.circle_close {\n  font-size: 30px;\n  color: #b01d22;\n}\n\n.back {\n  padding: 0;\n}\n\nion-grid {\n  padding: 0;\n}\n\nh1 {\n  font-size: 40px;\n}\n\n.pgSo {\n  width: 100%;\n  text-transform: capitalize;\n  --border-radius: 10px;\n  --background:#b01d22;\n}\n\n.overDiv {\n  position: absolute;\n  z-index: 9;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLWNhbWVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUIsYUFBQTtBQUVyQjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUpBO0VBQ0ksVUFBQTtBQU9KOztBQUxBO0VBQ0ksVUFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVVKOztBQVBBO0VBQVMsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLE9BQUE7RUFBUSxNQUFBO0VBQU8sU0FBQTtFQUFVLFFBQUE7QUFnQmhFIiwiZmlsZSI6Im1vZGVsLWNhbWVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtdXBsb2FkPmlucHV0IHtkaXNwbGF5OiBub25lO31cbi5pY29uQm9yZGVye1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBjb2xvcjojYjAxZDIyO1xufVxuaW9uLWNvbHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5jaXJjbGV7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMDtcbiAvLyAgIGZvbnQtc2l6ZToyMHB4O1xufVxuLmNpcmNsZV9jbG9zZXtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6I2IwMWQyMjtcbn1cbi5iYWNre1xuICAgIHBhZGRpbmc6MDtcbn1cbmlvbi1ncmlke1xuICAgIHBhZGRpbmc6MDtcbn1cbmgxe1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5wZ1Nve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6I2IwMWQyMjtcbn1cblxuLm92ZXJEaXZ7cG9zaXRpb246IGFic29sdXRlO3otaW5kZXg6IDk7bGVmdDogMDt0b3A6IDA7Ym90dG9tOiAwO3JpZ2h0OiAwO30iXX0= */");

/***/ }),

/***/ 65877:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RegistrationModule/model-camera/model-camera.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\"> -->\n  <ion-content class=\"content-bg\">\n   <ion-row class=\"ion-justify-content-center\">\n    <ion-col class=\"back\">\n     <ion-grid>\n        <ion-row>\n          <ion-col class=\"circle\">\n         <ion-icon name=\"close\" class=\"circle_close\" (click)=\"close()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"!pgShow\">\n          <ion-col>\n            <label class=\"image-upload\">\n             <ion-icon name=\"camera-outline\" class=\"FooterCam iconBorder\"></ion-icon>\n              <p class=\"activityClass\">Take a Snapshot</p>\n              <input *ngIf=\"!platform?.is('cordova')\"  type=\"file\"  multiple accept=\"image/*\" capture (change)=\"captureImg($event)\" >\n             <div class=\"overDiv\" *ngIf=\"platform?.is('cordova')\" tappable (click)=\"pickImage()\"></div>\n            </label>\n\n\n\n          </ion-col>\n          <ion-col size=\"2\">\n            <h1>|</h1>\n          </ion-col>\n          <ion-col>\n            <label class=\"image-upload\">\n              <ion-icon name=\"images-outline\" class=\"FooterCam iconBorder\"></ion-icon>\n              <p class=\"activityClass\">Select Image</p>\n              <input type=\"file\" accept=\"image/*\" (change)=\"captureImg($event)\" >\n              </label>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"pgShow\">\n          <ion-col [size]='6' *ngFor=\"let item of pgShow\">\n            <ion-button class=\"pgSo\" (click)=\"pgShoW(item)\">{{item?.button_text}}</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div [ngClass]=\"{'banner': platform.width()<740}\">\n        <img src = \"assets/icon/Design 1.png\" class=\"banner_bg\">\n        </div>\n      </ion-col>\n    </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_RegistrationModule_model-camera_model-camera_page_ts-es2015.js.map