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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_communication_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./communication-detail.page.html */ 86919);
/* harmony import */ var _communication_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication-detail.page.scss */ 1909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);










let CommunicationDetailPage = class CommunicationDetailPage {
    constructor(activeRoute, router, zone, platform, apiService, sendData, localStorgae) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.zone = zone;
        this.platform = platform;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService }
];
CommunicationDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-communication-detail',
        template: _raw_loader_communication_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_communication_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommunicationDetailPage);



/***/ }),

/***/ 1909:
/*!*****************************************************************************************!*\
  !*** ./src/app/communicationModule/communication-detail/communication-detail.page.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".communicationImage {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.titleDiv {\n  font-size: 16px;\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.contentDiv {\n  font-size: 13px;\n  color: #4a4747;\n  line-height: 15px;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\ninput {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.sendIcon {\n  font-size: 35px;\n  background-color: var(--headerColor);\n  color: white;\n  border-radius: 15px;\n}\n\n.chat_container {\n  padding: 0 18px;\n  flex-wrap: wrap;\n  padding-top: 20px;\n}\n\n.chat_container .chat_box {\n  width: auto !important;\n  margin-bottom: 15px;\n  min-width: 70%;\n  align-items: flex-start;\n}\n\n.chat_container .chat_box .chat {\n  min-width: 90px;\n  border-radius: 7px;\n  max-width: 100%;\n  min-width: 191px;\n  padding: 11px 20px 11px 20px;\n}\n\n.chat_container .chat_box p {\n  margin: 0;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: var(--text-color-white);\n}\n\n.para-name, .para-nameIOs {\n  color: var(--headerColor);\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 5px;\n  line-height: 15px;\n}\n\n.para-time {\n  font-size: 10px;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  color: #a4a2a2;\n  line-height: 4px;\n}\n\n.para-col {\n  box-shadow: 0px 0px 7px 2px #e4e0e0;\n  border-radius: 20px;\n  height: 100%;\n  padding: 5px;\n}\n\n.para_color {\n  background-color: #eaeaea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bmljYXRpb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFvQixXQUFBO0VBQVksYUFBQTtFQUFlLHNCQUFBO0tBQUEsbUJBQUE7QUFJL0M7O0FBSEE7RUFBVSxlQUFBO0VBQWdCLHlCQUFBO0VBQXlCLGlCQUFBO0FBU25EOztBQVJBO0VBQVksZUFBQTtFQUFpQixjQUFBO0VBQWUsaUJBQUE7QUFjNUM7O0FBYkE7RUFBSSxzQkFBQTtFQUF1Qix5QkFBQTtFQUEwQiw2QkFBQTtBQW1CckQ7O0FBbEJBO0VBQU8sV0FBQTtFQUFZLFlBQUE7RUFBYSxtQkFBQTtBQXdCaEM7O0FBdkJBO0VBQVUsZUFBQTtFQUFnQixvQ0FBQTtFQUFvQyxZQUFBO0VBQWEsbUJBQUE7QUE4QjNFOztBQTdCQTtFQUFrQixlQUFBO0VBQWlCLGVBQUE7RUFBaUIsaUJBQUE7QUFtQ3BEOztBQWxDRTtFQUFZLHNCQUFBO0VBQXdCLG1CQUFBO0VBQXFCLGNBQUE7RUFBZ0IsdUJBQUE7QUF3QzNFOztBQXZDTTtFQUFPLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQiw0QkFBQTtBQThDckY7O0FBN0NNO0VBQUcsU0FBQTtFQUFVLGlCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLDhCQUFBO0FBbURyRDs7QUFoREU7RUFBMEIseUJBQUE7RUFBeUIsZUFBQTtFQUFlLGtCQUFBO0VBQW1CLGVBQUE7RUFBZ0IsaUJBQUE7QUF3RHZHOztBQXRERTtFQUFXLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsY0FBQTtFQUFlLGdCQUFBO0FBOERoRjs7QUE1REU7RUFBVSxtQ0FBQTtFQUFvQyxtQkFBQTtFQUFvQixZQUFBO0VBQWEsWUFBQTtBQW1FakY7O0FBbEVFO0VBQVkseUJBQUE7QUFzRWQiLCJmaWxlIjoiY29tbXVuaWNhdGlvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW11bmljYXRpb25JbWFnZXt3aWR0aDogMTAwJTtoZWlnaHQ6IDI1MHB4OyBvYmplY3QtZml0OiBjb250YWluO31cbi50aXRsZURpdntmb250LXNpemU6IDE2cHg7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5jb250ZW50RGl2e2ZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM0YTQ3NDc7bGluZS1oZWlnaHQ6IDE1cHg7fVxuaHIge3dpZHRoOiAxMDAlICFpbXBvcnRhbnQ7Zm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtib3JkZXI6IDAuNXB4IHNvbGlkIGdhaW5zYm9ybzt9XG5pbnB1dHsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IGJvcmRlci1yYWRpdXM6IDEwcHg7fVxuLnNlbmRJY29ue2ZvbnQtc2l6ZTogMzVweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtjb2xvcjogd2hpdGU7Ym9yZGVyLXJhZGl1czogMTVweDt9XG4uY2hhdF9jb250YWluZXIgeyBwYWRkaW5nOiAwIDE4cHg7IGZsZXgtd3JhcDogd3JhcDsgcGFkZGluZy10b3A6IDIwcHg7XG4gIC5jaGF0X2JveCB7IHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDE1cHg7IG1pbi13aWR0aDogNzAlOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIC5jaGF0IHttaW4td2lkdGg6IDkwcHg7IGJvcmRlci1yYWRpdXM6IDdweDsgbWF4LXdpZHRoOiAxMDAlOyBtaW4td2lkdGg6IDE5MXB4OyBwYWRkaW5nOiAxMXB4IDIwcHggMTFweCAyMHB4OyB9XG4gICAgICBwIHttYXJnaW46IDA7Zm9udC1zaXplOiAuN3JlbTtmb250LXdlaWdodDogNDAwO2NvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTt9XG4gICAgfVxuICB9XG4gIC5wYXJhLW5hbWUsIC5wYXJhLW5hbWVJT3N7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtc2l6ZToxNHB4O21hcmdpbi1ib3R0b206IDBweDttYXJnaW4tdG9wOiA1cHg7bGluZS1oZWlnaHQ6IDE1cHg7fVxuXG4gIC5wYXJhLXRpbWV7Zm9udC1zaXplOiAxMHB4O21hcmdpbi1ib3R0b206IDVweDttYXJnaW4tdG9wOiAxMHB4O2NvbG9yOiAjYTRhMmEyO2xpbmUtaGVpZ2h0OiA0cHg7XG4gIH1cbiAgLnBhcmEtY29se2JveC1zaGFkb3c6IDBweCAwcHggN3B4IDJweCAjZTRlMGUwO2JvcmRlci1yYWRpdXM6IDIwcHg7aGVpZ2h0OiAxMDAlO3BhZGRpbmc6IDVweDt9XG4gIC5wYXJhX2NvbG9ye2JhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7fVxuICAiXX0= */");

/***/ }),

/***/ 86919:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/communication-detail/communication-detail.page.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{community?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol whit_Pad whit_pad_top\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" >\n        <ion-slide *ngFor=\"let item of community?.data?.media\">\n          <img *ngIf=\"item?.media_type==1 || item?.media_type=='1'\" [src]=\"item?.media\"  onerror=\"this.src='assets/watermark/watermark.png'\" class=\"communicationImage\">\n          <video *ngIf=\"item?.media_type==2 || item?.media_type=='2'\" [src]=\"item?.media\" width=\"100%\" height=\"250px\" controls [poster]=\"item?.thumb_image\"></video>\n          <iframe *ngIf=\"item?.media_type==3 || item?.media_type=='3'\" [src]=\"item?.media | safe \" width=100% height=\"250px\"></iframe>\n        </ion-slide>\n      </ion-slides>\n     \n      <p class=\"titleDiv\" [innerHTML]=\"community?.data?.title\"></p>\n      <p class=\"contentDiv\" [innerHTML]=\"community?.data?.description\"></p>\n      <ion-row>\n        <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\">\n          <ion-icon *ngIf=\"community?.data?.like_status==0\" name=\"thumbs-up-outline\" (click)=\"doLike(community?.data)\"></ion-icon> \n          <ion-icon *ngIf=\"community?.data?.like_status==1\" name=\"thumbs-up\" (click)=\"doLike(community?.data)\"></ion-icon> \n          {{community?.data?.total_likes}}&nbsp;Likes\n        </ion-col>\n       \n        <ion-col [size]=\"7\" size-sm=\"7\" size-md=\"7\" size-lg=\"7\" class=\"ion-text-right\">\n          <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>&nbsp;{{community?.data?.total_comments}}&nbsp;Comments\n        </ion-col>\n\n      </ion-row>\n      <hr>\n        <!-- <ion-row *ngFor = \"let item of community?.data?.comments\">\n          <ion-col class=\"colom1\">{{item?.comments}}</ion-col>\n        </ion-row> -->\n        <div *ngIf=\"noComment == '0'\">\n          <h5 class=\"colom\">{{community?.data?.no_comment_msg}}</h5>\n          <img [src]=\"community?.data?.no_comment_image\" onerror=\"this.src='assets/watermark/watermark.png'\">\n        </div>\n        <div   >\n          <ion-row *ngFor = \"let item of community?.data?.comments\">\n            <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" >    \n              <div class=\"ion-text-right para-col para_color\" *ngIf=\"item?.comment_align=='left'\">\n                <p class=\"para-name\">{{item?.full_name}}</p>\n                <p class=\"para-time\">{{item?.convert_time}}</p>\n                <p class=\"ion-no-margin\" [innerHTML]=\"item?.comments\"></p>\n              </div>     \n                    \n            </ion-col>\n            <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n              <div class=\"ion-text-left para-col\" *ngIf=\"item?.comment_align=='right'\">\n                <p class=\"para-name\">{{item?.full_name}}</p>\n                <p class=\"para-time\">{{item?.convert_time}}</p>\n                <p class=\"ion-no-margin\" [innerHTML]=\"item?.comments\"></p>\n              </div>\n\n          </ion-col>\n          </ion-row>\n         \n        </div>    \n\n    \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n<ion-footer style=\"background-color:#f2f4f5;\"> \n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\">\n      <ion-row>\n        <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"11\" size-lg=\"11\">\n          <input [(ngModel)]=\"comment\" placeholder=\"Type Your Comment Here\">\n        </ion-col>\n        <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"ion-text-center\" *ngIf=\"comment!=''\">\n          <ion-icon name=\"caret-forward-outline\" class=\"sendIcon\" (click)=\"doComment(comment)\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_communicationModule_communication-detail_communication-detail_module_ts-es2015.js.map