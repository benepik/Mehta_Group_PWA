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

/***/ 7134:
/*!*************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-list/communication-list.page.scss ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".communicationImage {\n  width: 100%;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.titleDiv {\n  font-size: 14px;\n  color: var(--headerColor);\n  font-weight: bold;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contentDiv {\n  font-size: 13px;\n  color: #4a4747;\n  line-height: 15px;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bmljYXRpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBb0IsV0FBQTtFQUFZLGFBQUE7RUFBYyxvQkFBQTtLQUFBLGlCQUFBO0FBQzlDOztBQUFBO0VBQVUsZUFBQTtFQUFnQix5QkFBQTtFQUF5QixpQkFBQTtFQUp2QixvQkFBQTtFQUFxQiw0QkFBQTtFQUM3QyxxQkFHcUY7RUFIeEQsZ0JBQUE7RUFBbUIsdUJBQUE7QUFjcEQ7O0FBVkE7RUFBWSxlQUFBO0VBQWlCLGNBQUE7RUFBZSxpQkFBQTtBQWdCNUM7O0FBZkE7RUFBZSw0QkFBQTtFQUE2QixzQkFBQTtFQUF1QixZQUFBO0VBQWEsMkJBQUE7QUFzQmhGIiwiZmlsZSI6ImNvbW11bmljYXRpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHsgZGlzcGxheTotd2Via2l0LWJveDsgLXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzOyAgb3ZlcmZsb3c6IGhpZGRlbjsgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4uY29tbXVuaWNhdGlvbkltYWdle3dpZHRoOiAxMDAlO2hlaWdodDogMTAwcHg7b2JqZWN0LWZpdDogY292ZXI7fVxuLnRpdGxlRGl2e2ZvbnQtc2l6ZTogMTRweDtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC13ZWlnaHQ6IGJvbGQ7QGluY2x1ZGUgbGluZS1jbGFtcCgyKTt9XG4uY29udGVudERpdntmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNGE0NzQ3O2xpbmUtaGVpZ2h0OiAxNXB4O31cbi5iZ1dhbGxldEltYWdle2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtwYWRkaW5nOiA1cHg7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO30iXX0= */");

/***/ }),

/***/ 32536:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/communication-list/communication-list.page.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{community?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" \n    class=\"whiteCol whit_Pad whit_pad_top\">\n    <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n    </div>\n    <ion-row class=\"borderBtmDiv\" *ngIf = \"community?.noDataImage\">\n      <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"3\"  class=\"autoMargin\">\n        <img [src]=\"community?.noDataImage\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      </ion-col>\n    </ion-row>\n      <ion-row *ngFor=\"let item of communityData \" class=\"borderBtmDiv\">\n        <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"3\"  class=\"autoMargin\">\n          <img class=\"communicationImage borderRediDiv\" [src]=\"item?.cover_image\" onerror=\"this.src='assets/watermark/watermark.png'\">   \n                   \n      </ion-col>\n      <ion-col [size]=\"8\" size-sm=\"8\" size-md=\"9\" size-lg=\"9\" tappable  (click)=\"gotoDetail(item)\">\n        <p class=\"titleDiv ion-no-margin\" [innerHTML]=\"item?.title\"></p>\n        <p class=\"contentDiv\" [innerHTML]=\"sendData?.readMoreHTML(item?.description, 200, '') \"></p>\n        <p class=\"dateP ion-no-margin ion-margin-top ion-text-right\">{{item?.start_date}}</p>   \n        <!-- <p class=\"ion-text-right dateP ion-no-margin ion-margin-top\">Read More</p> -->\n      </ion-col>\n      </ion-row>    \n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n  <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_communicationModule_communication-list_communication-list_module_ts-es2015.js.map