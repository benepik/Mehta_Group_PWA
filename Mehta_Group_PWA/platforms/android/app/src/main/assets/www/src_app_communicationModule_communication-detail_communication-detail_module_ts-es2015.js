(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_communicationModule_communication-detail_communication-detail_module_ts"],{

/***/ 76215:
/*!*************************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-detail/communication-detail-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationDetailPageRoutingModule": function() { return /* binding */ CommunicationDetailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _communication_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./communication-detail.page */ 38127);




const routes = [
    {
        path: '',
        component: _communication_detail_page__WEBPACK_IMPORTED_MODULE_0__.CommunicationDetailPage
    }
];
let CommunicationDetailPageRoutingModule = class CommunicationDetailPageRoutingModule {
};
CommunicationDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommunicationDetailPageRoutingModule);



/***/ }),

/***/ 26297:
/*!*****************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-detail/communication-detail.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationDetailPageModule": function() { return /* binding */ CommunicationDetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _communication_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./communication-detail-routing.module */ 76215);
/* harmony import */ var _communication_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication-detail.page */ 38127);
/* harmony import */ var pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pipes/pipes.module */ 43018);








let CommunicationDetailPageModule = class CommunicationDetailPageModule {
};
CommunicationDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _communication_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommunicationDetailPageRoutingModule, pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_communication_detail_page__WEBPACK_IMPORTED_MODULE_1__.CommunicationDetailPage]
    })
], CommunicationDetailPageModule);



/***/ }),

/***/ 38127:
/*!***************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-detail/communication-detail.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationDetailPage": function() { return /* binding */ CommunicationDetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_communication_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./communication-detail.page.html */ 86919);
/* harmony import */ var _communication_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication-detail.page.scss */ 1909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);









let CommunicationDetailPage = class CommunicationDetailPage {
    constructor(activeRoute, router, zone, apiService, sendData, localStorgae) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.zone = zone;
        this.apiService = apiService;
        this.sendData = sendData;
        this.localStorgae = localStorgae;
        this.comment = '';
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            spaceBetween: 10,
        };
        this.communicationHomeData = this.sendData.alldata;
        this.localStorgae.getStorage().then(storedData => {
            this.loginAllData = storedData.allStoreData;
            console.log('storedData', storedData);
        });
    }
    ionViewWillEnter() {
        this.communicationDetails();
    }
    ngOnInit() {
        // this.communicationDetails();
    }
    doLike(data) {
        this.zone.run(() => {
            if (data.like_status == 0) {
                data.total_likes = parseInt(data.total_likes) + 1;
                data.like_status = 1;
            }
            else {
                data.total_likes = parseInt(data.total_likes) - 1;
                data.like_status = 0;
            }
            let apiKey = {
                "flag_type": this.communicationHomeData.flag_type,
                "post_id": this.communicationHomeData.post_id
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.DoLike, apiKey).subscribe((result) => {
                console.log("DoLike: ", result);
                if (result.success == 1) {
                    // if (result.message == "Post unliked.") {
                    //   this.community.data.like_status=0;
                    //   if (this.community.data.total_likes != "0") {             
                    //     this.community.data.total_likes =parseInt(this.community.data.total_likes) - 1;          
                    //     console.log("DoLike1: ",  this.community.data.like_status);
                    //   }
                    //   else {
                    //     this.community.data.total_likes = 0;
                    //   }
                    // }else if(result.message == "Post liked."){
                    //   this.community.data.total_likes = parseInt(this.community.data.total_likes) + 1;
                    //   this.community.data.like_status=1;
                    //   console.log("DoLike: ",  this.community.data.like_status);
                    // }
                }
            });
        });
    }
    communicationDetails() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "flag_type": this.communicationHomeData.flag_type,
                "post_id": this.communicationHomeData.post_id
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.PostDetailUrl, apiKey).subscribe((result) => {
                console.log("PostListUrl: ", result);
                this.apiService.presentLoadingClose();
                if (result.success == 1) {
                    this.community = result;
                    this.noComment = this.community.data.total_comments;
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    doComment(text) {
        this.zone.run(() => {
            let apiKey = {
                "flag_type": this.communicationHomeData.flag_type,
                "post_id": this.communicationHomeData.post_id,
                "comment": this.comment
            };
            let obj = {
                "full_name": this.loginAllData.full_name,
                "convert_time": "Just now",
                "comments": text,
                "comment_align": "right"
            };
            if (this.community.data.total_comments == 0) {
                this.noComment = 1;
            }
            this.community.data.comments.unshift(obj);
            this.community.data.total_comments = parseInt(this.community.data.total_comments) + 1;
            console.log('this community', this.community);
            if (apiKey["comment"] != "") {
                console.log(apiKey["comment"]);
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.DoCommentUrl, apiKey).subscribe((result) => {
                    console.log("DoCommentUrl: ", result);
                    if (result.success == 1) {
                        this.comment = "";
                    }
                });
            }
        });
    }
};
CommunicationDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService }
];
CommunicationDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-communication-detail',
        template: _raw_loader_communication_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_communication_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommunicationDetailPage);



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

/***/ 1909:
/*!*****************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-detail/communication-detail.page.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".communicationImage {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.titleDiv {\n  font-size: 16px;\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.contentDiv {\n  font-size: 13px;\n  color: #4a4747;\n  line-height: 15px;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\ninput {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.sendIcon {\n  font-size: 35px;\n  background-color: var(--headerColor);\n  color: white;\n  border-radius: 15px;\n}\n\n.chat_container {\n  padding: 0 18px;\n  flex-wrap: wrap;\n  padding-top: 20px;\n}\n\n.chat_container .chat_box {\n  width: auto !important;\n  margin-bottom: 15px;\n  min-width: 70%;\n  align-items: flex-start;\n}\n\n.chat_container .chat_box .chat {\n  min-width: 90px;\n  border-radius: 7px;\n  max-width: 100%;\n  min-width: 191px;\n  padding: 11px 20px 11px 20px;\n}\n\n.chat_container .chat_box p {\n  margin: 0;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: var(--text-color-white);\n}\n\n.para-name {\n  color: var(--headerColor);\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  line-height: 4px;\n}\n\n.para-time {\n  font-size: 10px;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  color: #a4a2a2;\n  line-height: 4px;\n}\n\n.para-col {\n  box-shadow: 0px 0px 7px 2px #e4e0e0;\n  border-radius: 20px;\n  height: 100%;\n  padding: 10px;\n}\n\n.para_color {\n  background-color: #eaeaea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bmljYXRpb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFvQixXQUFBO0VBQVksYUFBQTtFQUFlLHNCQUFBO0tBQUEsbUJBQUE7QUFJL0M7O0FBSEE7RUFBVSxlQUFBO0VBQWdCLHlCQUFBO0VBQXlCLGlCQUFBO0FBU25EOztBQVJBO0VBQVksZUFBQTtFQUFpQixjQUFBO0VBQWUsaUJBQUE7QUFjNUM7O0FBYkE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFnQko7O0FBZEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBaUJKOztBQWZFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBa0JKOztBQWhCRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFtQko7O0FBakJJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQW1CTjs7QUFoQk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQWtCUjs7QUFoQk07RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDRCxnQkFBQTtFQUNBLDhCQUFBO0FBa0JQOztBQWJFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQWdCLGdCQUFBO0FBaUJwQjs7QUFmRTtFQUFXLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsY0FBQTtFQUFlLGdCQUFBO0FBdUJoRjs7QUFyQkU7RUFDRSxtQ0FBQTtFQUNGLG1CQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUF3Qko7O0FBdEJFO0VBQ0UseUJBQUE7QUF5QkoiLCJmaWxlIjoiY29tbXVuaWNhdGlvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW11bmljYXRpb25JbWFnZXt3aWR0aDogMTAwJTtoZWlnaHQ6IDI1MHB4OyBvYmplY3QtZml0OiBjb250YWluO31cbi50aXRsZURpdntmb250LXNpemU6IDE2cHg7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5jb250ZW50RGl2e2ZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM0YTQ3NDc7bGluZS1oZWlnaHQ6IDE1cHg7fVxuaHIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgfVxuICBpbnB1dHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLnNlbmRJY29ue1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICAuY2hhdF9jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMThweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gXG4gICAgLmNoYXRfYm94IHtcbiAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgbWluLXdpZHRoOiA3MCU7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiBcbiBcbiAgICAgIC5jaGF0IHtcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxOTFweDtcbiAgICAgICAgcGFkZGluZzogMTFweCAyMHB4IDExcHggMjBweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XG4gICAgICAgIC8vIGNvbG9yOiBsaWdodGVuKCR0ZXh0LWxpZ2h0LCAzMCUpOyBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnBhcmEtbmFtZXtcbiAgICBjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtsaW5lLWhlaWdodDogNHB4O1xuICB9XG4gIC5wYXJhLXRpbWV7Zm9udC1zaXplOiAxMHB4O21hcmdpbi1ib3R0b206IDVweDttYXJnaW4tdG9wOiAxMHB4O2NvbG9yOiAjYTRhMmEyO2xpbmUtaGVpZ2h0OiA0cHg7XG4gIH1cbiAgLnBhcmEtY29se1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDJweCAjZTRlMGUwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5wYXJhX2NvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIH1cbiAgIl19 */");

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

/***/ 86919:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/communication-detail/communication-detail.page.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{community?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol whit_Pad whit_pad_top\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" >\n        <ion-slide *ngFor=\"let item of community?.data?.media\">\n          <img *ngIf=\"item?.media_type==1 || item?.media_type=='1'\" [src]=\"item?.media\"  onerror=\"this.src='assets/watermark/watermark.png'\" class=\"communicationImage\">\n          <video *ngIf=\"item?.media_type==2 || item?.media_type=='2'\" [src]=\"item?.media\" width=\"100%\" height=\"250px\" controls [poster]=\"item?.thumb_image\"></video>\n          <iframe *ngIf=\"item?.media_type==3 || item?.media_type=='3'\" [src]=\"item?.media | safe \" width=100% height=\"250px\"></iframe>\n        </ion-slide>\n      </ion-slides>\n     \n      <p class=\"titleDiv\" [innerHTML]=\"community?.data?.title\"></p>\n      <p class=\"contentDiv\" [innerHTML]=\"community?.data?.description\"></p>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-icon *ngIf=\"community?.data?.like_status==0\" name=\"thumbs-up-outline\" (click)=\"doLike(community?.data)\"></ion-icon> \n          <ion-icon *ngIf=\"community?.data?.like_status==1\" name=\"thumbs-up\" (click)=\"doLike(community?.data)\"></ion-icon> \n          {{community?.data?.total_likes}}&nbsp;Likes\n        </ion-col>\n       \n        <ion-col size=\"6\" class=\"ion-text-right\">\n          <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>&nbsp;{{community?.data?.total_comments}}&nbsp;Comments\n        </ion-col>\n\n      </ion-row>\n      <hr>\n        <!-- <ion-row *ngFor = \"let item of community?.data?.comments\">\n          <ion-col class=\"colom1\">{{item?.comments}}</ion-col>\n        </ion-row> -->\n        <div *ngIf=\"noComment == '0'\">\n          <h5 class=\"colom\">{{community?.data?.no_comment_msg}}</h5>\n          <img [src]=\"community?.data?.no_comment_image\" onerror=\"this.src='assets/watermark/watermark.png'\">\n        </div>\n        <div   >\n          <ion-row *ngFor = \"let item of community?.data?.comments\">\n            <ion-col size=\"6\" >    \n              <div class=\"ion-text-right para-col para_color\" *ngIf=\"item?.comment_align=='left'\">\n                <p class=\"para-name\">{{item?.full_name}}</p>\n                <p class=\"para-time\">{{item?.convert_time}}</p>\n                <p class=\"ion-no-margin\" [innerHTML]=\"item?.comments\"></p>\n              </div>     \n                    \n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"ion-text-left para-col\" *ngIf=\"item?.comment_align=='right'\">\n                <p class=\"para-name\">{{item?.full_name}}</p>\n                <p class=\"para-time\">{{item?.convert_time}}</p>\n                <p class=\"ion-no-margin\" [innerHTML]=\"item?.comments\"></p>\n              </div>\n\n          </ion-col>\n          </ion-row>\n         \n        </div>    \n\n    \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n<ion-footer style=\"background-color:#f2f4f5;\"> \n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\">\n      <ion-row>\n        <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"11\" size-lg=\"11\">\n          <input [(ngModel)]=\"comment\" placeholder=\"Type Your Comment Here\">\n        </ion-col>\n        <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"ion-text-center\" *ngIf=\"comment!=''\">\n          <ion-icon name=\"caret-forward-outline\" class=\"sendIcon\" (click)=\"doComment(comment)\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n</ion-footer>\n");

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
//# sourceMappingURL=src_app_communicationModule_communication-detail_communication-detail_module_ts-es2015.js.map