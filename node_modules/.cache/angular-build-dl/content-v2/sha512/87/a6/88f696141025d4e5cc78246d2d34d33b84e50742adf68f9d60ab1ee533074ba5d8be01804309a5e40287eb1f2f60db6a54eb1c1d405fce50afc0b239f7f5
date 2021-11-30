(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_geolocation_geolocation_module_ts"],{

/***/ 96185:
/*!******************************************************************************!*\
  !*** ./src/app/RegistrationModule/geolocation/geolocation-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPageRoutingModule": function() { return /* binding */ GeolocationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation.page */ 14807);




const routes = [
    {
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_0__.GeolocationPage
    }
];
let GeolocationPageRoutingModule = class GeolocationPageRoutingModule {
};
GeolocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeolocationPageRoutingModule);



/***/ }),

/***/ 45967:
/*!**********************************************************************!*\
  !*** ./src/app/RegistrationModule/geolocation/geolocation.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPageModule": function() { return /* binding */ GeolocationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation-routing.module */ 96185);
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.page */ 14807);







let GeolocationPageModule = class GeolocationPageModule {
};
GeolocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeolocationPageRoutingModule
        ],
        declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_1__.GeolocationPage]
    })
], GeolocationPageModule);



/***/ }),

/***/ 14807:
/*!********************************************************************!*\
  !*** ./src/app/RegistrationModule/geolocation/geolocation.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPage": function() { return /* binding */ GeolocationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_geolocation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./geolocation.page.html */ 67487);
/* harmony import */ var _geolocation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.page.scss */ 60680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 34255);












let GeolocationPage = class GeolocationPage {
    constructor(zone, geolocation, route, platform, nativeGeocoder, apiService, sendData, diagnostic, alertController) {
        this.zone = zone;
        this.geolocation = geolocation;
        this.route = route;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.apiService = apiService;
        this.sendData = sendData;
        this.diagnostic = diagnostic;
        this.alertController = alertController;
        this.profileAddCustomer = this.sendData.alldata;
        if (this.profileAddCustomer) {
            this.requestID = this.profileAddCustomer.requestFor,
                this.requestIDPage = this.profileAddCustomer.requestPage;
        }
        else {
            this.requestID = '';
            this.requestIDPage = '';
        }
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
    }
    ngOnInit() {
    }
    locationAlert() {
        this.alertController.create({
            message: 'Enable Location from device settings',
            backdropDismiss: false,
            buttons: [{
                    text: 'ok',
                    handler: () => {
                        console.log('Buy clicked');
                    }
                }]
        }).then(alert => {
            alert.present();
        });
    }
    getLocationFun() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.diagnostic.isLocationEnabled().then((enabled) => {
                // this.diagnostic.requestLocationAuthorization().then((requestLocation=>{}))
                console.log("Location setting is enabled", enabled);
                if (enabled) {
                    console.log("Location setting is " + (enabled ? "enabled" : "disabled"));
                    console.log("The following enabled ", enabled);
                    this.apiService.presentLoadingDefault();
                    this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        this.loc = '';
                        console.log('curr_pos4');
                        let curr_pos = yield this.geolocation.getCurrentPosition();
                        console.log('curr_pos', curr_pos.coords.latitude);
                        console.log('curr_pos', curr_pos.coords.longitude);
                        this.getGeoLocation(curr_pos.coords.latitude, curr_pos.coords.longitude);
                    }));
                }
                else {
                    console.log("The following error occurred: ", enabled);
                    this.locationAlert();
                    return false;
                }
            });
        });
    }
    getGeoLocation(lat, lng, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.apiService.presentLoadingClose();
            if (navigator.geolocation) {
                console.log('lat', lat);
                console.log('lng', lng);
                this.lat = lat;
                this.lng = lng;
                let geocoder = yield new google.maps.Geocoder();
                let latlng = yield new google.maps.LatLng(lat, lng);
                let request = { latLng: latlng };
                yield geocoder.geocode(request, (results, status) => {
                    console.log('main Array', results, status);
                    if (status == google.maps.GeocoderStatus.OK) {
                        let result = results[0];
                        this.userLocation = results[0];
                        console.log('current Location', results[0]);
                        console.log("loc: ", result['formatted_address']);
                        this.loc = result['formatted_address'];
                        this.zone.run(() => {
                            if (result != null) {
                                this.userCity = result.formatted_address;
                                if (type === 'reverseGeocode') {
                                    this.latLngResult = result.formatted_address;
                                }
                            }
                        });
                    }
                });
            }
        });
    }
    reverseGeocode(lat, lng) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lat, lng, options)
                .then((result) => this.userLocationFromLatLng = result[0])
                .catch((error) => console.log(error));
        }
        else {
            this.getGeoLocation(lat, lng, 'reverseGeocode');
        }
    }
    forwardGeocode(address) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.forwardGeocode(address, options).then((result) => {
                this.zone.run(() => {
                    this.lat = result[0].latitude;
                    this.lng = result[0].longitude;
                });
            })
                .catch((error) => console.log(error));
        }
        else {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    this.zone.run(() => {
                        this.lat = results[0].geometry.location.lat();
                        this.lng = results[0].geometry.location.lng();
                    });
                }
                else {
                    alert('Error - ' + results + ' & Status - ' + status);
                }
            });
        }
    }
    // back(){
    //   this.sendData.alldata={'requestPage':this.profileAddCustomer.requestPage}
    //   this.route.navigate(['./profile-upload']);
    // }
    next() {
        this.zone.run(() => {
            let apiKey = {
                "latitude": this.lat,
                "longitude": this.lng,
                "location_dump": this.userLocation,
                "request_for": this.requestID,
                "request_page": this.requestIDPage,
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.geoLocationUrl, apiKey).subscribe((result) => {
                if (result.success == 1) {
                    this.route.navigate(['/tabs']);
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
        // this.route.navigate(['./registration']);
    }
};
GeolocationPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__.DataTransferService },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__.Diagnostic },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController }
];
GeolocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-geolocation',
        template: _raw_loader_geolocation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_geolocation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GeolocationPage);



/***/ }),

/***/ 60680:
/*!**********************************************************************!*\
  !*** ./src/app/RegistrationModule/geolocation/geolocation.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\n  text-align: end;\n}\n\n.para {\n  margin-bottom: 0px;\n  font-size: 24px;\n}\n\n.geoBox {\n  border: 1px solid var(--headerColor);\n}\n\n.geoIcon {\n  font-size: 20px;\n}\n\n.detect, .geoIcon, .para {\n  color: var(--headerColor);\n}\n\n.dev {\n  font-size: 19px;\n}\n\n.banner_bg {\n  left: 0;\n  width: 100%;\n  display: block;\n  border-radius: 10px;\n}\n\n.blank {\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUFNLGtCQUFBO0VBQW1CLGVBQUE7QUFHekI7O0FBRkM7RUFBUSxvQ0FBQTtBQU1UOztBQUxDO0VBQVUsZUFBQTtBQVNYOztBQVJDO0VBQXdCLHlCQUFBO0FBWXpCOztBQVhDO0VBQU0sZUFBQTtBQWVQOztBQWRDO0VBSUcsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFjSjs7QUFaQTtFQUNHLFdBQUE7RUFDQSxhQUFBO0FBZUgiLCJmaWxlIjoiZ2VvbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29se1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cbi5wYXJhe21hcmdpbi1ib3R0b206IDBweDtmb250LXNpemU6IDI0cHg7fVxuIC5nZW9Cb3h7Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpOyB9XG4gLmdlb0ljb257IGZvbnQtc2l6ZTogMjBweDt9XG4gLmRldGVjdCwuZ2VvSWNvbiwucGFyYXsgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTt9XG4gLmRldnsgZm9udC1zaXplOiAxOXB4O31cbiAuYmFubmVyX2JnIHtcbiAgIC8vIHRvcDogMDtcbiAgIFxuICAgLy8gbWFyZ2luLXRvcDogLTY2cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmJsYW5re1xuICAgd2lkdGg6MTAwJTtcbiAgIGhlaWdodDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ 67487:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RegistrationModule/geolocation/geolocation.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary1':  platform.width()>740}\">\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <img src = \"assets/icon/logo.svg\" style = \"width: 150px;\">\n        </ion-col>\n        <ion-col class=\"col\">\n          <img src = \"assets/icon/abc.png\" style = \"width: 130px;  text-align: right;\">\n        </ion-col>\n      </ion-row>\n     \n    </ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"para\"><b>Geo Location</b></p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class=\"dev\">Enable your device location </p>\n      </ion-col>\n    </ion-row>\n    <ion-row tappable (click)=\"getLocationFun()\">\n      <ion-col>\n        <ion-row class =\"geoBox\" >\n          <ion-col size=\"1\" class=\"autoMargin\"><ion-icon class =\"geoIcon\" name=\"locate-outline\"></ion-icon></ion-col>\n          <ion-col size=\"11\" class=\"autoMargin\"><p class =\"detect ion-no-margin\">Detect my location</p></ion-col>\n        </ion-row>\n      \n\n      </ion-col>\n    </ion-row>\n    <div *ngIf = \"loc\">\n      <ion-row>\n        <ion-col> <p>Your Location</p></ion-col>\n      </ion-row>  \n      <ion-row>\n        <ion-col size =\"1\"><ion-icon name=\"location-outline\"></ion-icon></ion-col>\n        <ion-col size=\"11\">{{loc}}</ion-col>\n      </ion-row>\n    </div>\n\n    <br>\n    <br>\n  <br>\n   \n    <div [ngClass]=\"{'banner': platform.width()<740}\">\n      <ion-row>\n       <!-- <ion-col class=\"ion-text-right\">\n        <ion-button class=\"ionic_btn butt\" (click) = \"back()\">Back</ion-button>\n        </ion-col> -->\n       <ion-col class=\"ion-text-center\">\n       <ion-button [disabled]=\"!loc\" class=\"ionic_btn\" tappable (click) = \"next()\">Next</ion-button>\n        </ion-col>\n        </ion-row>\n        <img src = \"assets/icon/Design 1.png\" class=\"banner_bg\">\n        </div>\n       \n    </ion-col>\n    </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_RegistrationModule_geolocation_geolocation_module_ts-es2015.js.map