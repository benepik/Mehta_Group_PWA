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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_geolocation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./geolocation.page.html */ 67487);
/* harmony import */ var _geolocation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.page.scss */ 60680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);











let GeolocationPage = class GeolocationPage {
    constructor(zone, geolocation, route, platform, nativeGeocoder, apiService, sendData) {
        this.zone = zone;
        this.geolocation = geolocation;
        this.route = route;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.apiService = apiService;
        this.sendData = sendData;
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
    getLocationFun() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.apiService.presentLoadingDefault();
            this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                this.loc = '';
                console.log('curr_pos4');
                let curr_pos = yield this.geolocation.getCurrentPosition();
                console.log('curr_pos', curr_pos.coords.latitude);
                console.log('curr_pos', curr_pos.coords.longitude);
                // if (this.platform.is('cordova')) {
                //   let options: NativeGeocoderOptions = {
                //     useLocale: true,
                //     maxResults: 5
                //   };
                //   this.nativeGeocoder.reverseGeocode(curr_pos.coords.latitude, curr_pos.coords.longitude, options)
                //     .then((result: any) => {
                //       this.apiService.presentLoadingClose();
                //       console.log(result);
                //       this.lat = curr_pos.coords.latitude;
                //       this.lng = curr_pos.coords.longitude;
                //       this.userLocation = result[0]
                //       console.log(this.userLocation);
                //       console.log("loc: ", this.userLocation[0]);
                //     })
                //     .catch((error: any) => console.log(error));
                // }else{
                this.getGeoLocation(curr_pos.coords.latitude, curr_pos.coords.longitude);
                // }
                // if (this.platform.is('cordova')) {
                //   let options: NativeGeocoderOptions = {
                //     useLocale: true,
                //     maxResults: 5
                //   };
                //   let nativeGeocoder_res=await this.nativeGeocoder.reverseGeocode(curr_pos.coords.latitude, curr_pos.coords.longitude, options);
                //   console.log('nativeGeocoder_res==> ', nativeGeocoder_res);
                //   // console.log('nativeGeocoder_res==> ', nativeGeocoder_res);
                //   // console.log('nativeGeocoder_res==> ', nativeGeocoder_res);
                // }
            }));
        });
    }
    // getLocationFun1(){
    //   this.loc='';
    //   console.log('getLocationFun clicked');
    //   this.geolocation.getCurrentPosition().then((resp) => {
    //     // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
    //     if (this.platform.is('cordova')) {
    //       let options: NativeGeocoderOptions = {
    //         useLocale: true,
    //         maxResults: 5
    //       };
    //       this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
    //         .then((result: any) => {
    //           console.log(result);
    //           this.lat = resp.coords.latitude;
    //           this.lng = resp.coords.longitude;
    //           this.userLocation = result[0]
    //           console.log(this.userLocation);
    //           console.log("loc: ", this.userLocation[0]);
    //         })
    //         .catch((error: any) => console.log(error));
    //     } else {
    //       this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
    //     }
    //   }).catch((error) => { 
    //     console.log("getLocationFun error:=> ", this.userLocation[0]);
    //   });
    //   let watch = this.geolocation.watchPosition();
    //   watch.subscribe((data) => {
    //     console.log("getLocationFun watch.subscribe:=> ",data);
    //     // data can be a set of coordinates, or an error (if an error occurred).
    //     // data.coords.latitude
    //     // data.coords.longitude
    //     let options: NativeGeocoderOptions = {
    //       useLocale: true,
    //       maxResults: 5
    //     };
    //     if (this.platform.is('cordova')) {
    //       let options: NativeGeocoderOptions = {
    //         useLocale: true,
    //         maxResults: 5
    //       };
    //       this.nativeGeocoder.reverseGeocode(data['coords']['latitude'], data['coords']['longitude'], options)
    //         .then((result: NativeGeocoderResult[]) => {
    //           console.log(result)
    //           this.userLocation = result[0]
    //           console.log(this.userLocation);
    //           console.log("loc: ", this.userLocation[0]);
    //         })
    //         .catch((error: any) => console.log(error));
    //     } else {
    //       console.log('not cordove')
    //       this.getGeoLocation(data['coords']['latitude'], data['coords']['longitude'])
    //     }
    //   });
    // }
    getGeoLocation(lat, lng, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__.DataTransferService }
];
GeolocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-geolocation',
        template: _raw_loader_geolocation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_geolocation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GeolocationPage);



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

/***/ 60680:
/*!**********************************************************************!*\
  !*** ./src/app/RegistrationModule/geolocation/geolocation.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\n  text-align: end;\n}\n\n.para {\n  margin-bottom: 0px;\n  font-size: 24px;\n}\n\n.geoBox {\n  border: 1px solid var(--headerColor);\n}\n\n.geoIcon {\n  font-size: 20px;\n}\n\n.detect, .geoIcon, .para {\n  color: var(--headerColor);\n}\n\n.dev {\n  font-size: 19px;\n}\n\n.banner_bg {\n  left: 0;\n  width: 100%;\n  display: block;\n  border-radius: 10px;\n}\n\n.blank {\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUFNLGtCQUFBO0VBQW1CLGVBQUE7QUFHekI7O0FBRkM7RUFBUSxvQ0FBQTtBQU1UOztBQUxDO0VBQVUsZUFBQTtBQVNYOztBQVJDO0VBQXdCLHlCQUFBO0FBWXpCOztBQVhDO0VBQU0sZUFBQTtBQWVQOztBQWRDO0VBSUcsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFjSjs7QUFaQTtFQUNHLFdBQUE7RUFDQSxhQUFBO0FBZUgiLCJmaWxlIjoiZ2VvbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29se1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cbi5wYXJhe21hcmdpbi1ib3R0b206IDBweDtmb250LXNpemU6IDI0cHg7fVxuIC5nZW9Cb3h7Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpOyB9XG4gLmdlb0ljb257IGZvbnQtc2l6ZTogMjBweDt9XG4gLmRldGVjdCwuZ2VvSWNvbiwucGFyYXsgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTt9XG4gLmRldnsgZm9udC1zaXplOiAxOXB4O31cbiAuYmFubmVyX2JnIHtcbiAgIC8vIHRvcDogMDtcbiAgIFxuICAgLy8gbWFyZ2luLXRvcDogLTY2cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmJsYW5re1xuICAgd2lkdGg6MTAwJTtcbiAgIGhlaWdodDogMTAwcHg7XG59Il19 */");

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

/***/ 67487:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RegistrationModule/geolocation/geolocation.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary1':  platform.width()>740}\">\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <img src = \"assets/icon/logo.svg\" style = \"width: 150px;\">\n        </ion-col>\n        <ion-col class=\"col\">\n          <img src = \"assets/icon/abc.png\" style = \"width: 130px;  text-align: right;\">\n        </ion-col>\n      </ion-row>\n     \n    </ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"para\"><b>Geo Location</b></p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class=\"dev\">Enable your device location </p>\n      </ion-col>\n    </ion-row>\n    <ion-row tappable (click)=\"getLocationFun()\">\n      <ion-col>\n        <ion-row class =\"geoBox\" >\n          <ion-col size=\"1\" class=\"autoMargin\"><ion-icon class =\"geoIcon\" name=\"locate-outline\"></ion-icon></ion-col>\n          <ion-col size=\"11\" class=\"autoMargin\"><p class =\"detect ion-no-margin\">Detect my location</p></ion-col>\n        </ion-row>\n      \n\n      </ion-col>\n    </ion-row>\n    <div *ngIf = \"loc\">\n      <ion-row>\n        <ion-col> <p>Your Location</p></ion-col>\n      </ion-row>  \n      <ion-row>\n        <ion-col size =\"1\"><ion-icon name=\"location-outline\"></ion-icon></ion-col>\n        <ion-col size=\"11\">{{loc}}</ion-col>\n      </ion-row>\n    </div>\n\n    <br>\n    <br>\n  <br>\n   \n    <div [ngClass]=\"{'banner': platform.width()<740}\">\n      <ion-row>\n       <!-- <ion-col class=\"ion-text-right\">\n        <ion-button class=\"ionic_btn butt\" (click) = \"back()\">Back</ion-button>\n        </ion-col> -->\n       <ion-col class=\"ion-text-center\">\n       <ion-button [disabled]=\"!loc\" class=\"ionic_btn\" tappable (click) = \"next()\">Next</ion-button>\n        </ion-col>\n        </ion-row>\n        <img src = \"assets/icon/Design 1.png\" class=\"banner_bg\">\n        </div>\n       \n    </ion-col>\n    </ion-row>\n</ion-content>\n");

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
//# sourceMappingURL=src_app_RegistrationModule_geolocation_geolocation_module_ts-es2015.js.map