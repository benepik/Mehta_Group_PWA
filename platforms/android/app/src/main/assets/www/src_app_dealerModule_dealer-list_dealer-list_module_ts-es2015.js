(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_dealerModule_dealer-list_dealer-list_module_ts"],{

/***/ 46098:
/*!************************************************************************!*\
  !*** ./src/app/dealerModule/dealer-list/dealer-list-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DealerListPageRoutingModule": function() { return /* binding */ DealerListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dealer_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dealer-list.page */ 20483);




const routes = [
    {
        path: '',
        component: _dealer_list_page__WEBPACK_IMPORTED_MODULE_0__.DealerListPage
    }
];
let DealerListPageRoutingModule = class DealerListPageRoutingModule {
};
DealerListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DealerListPageRoutingModule);



/***/ }),

/***/ 35869:
/*!****************************************************************!*\
  !*** ./src/app/dealerModule/dealer-list/dealer-list.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DealerListPageModule": function() { return /* binding */ DealerListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dealer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dealer-list-routing.module */ 46098);
/* harmony import */ var _dealer_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dealer-list.page */ 20483);







let DealerListPageModule = class DealerListPageModule {
};
DealerListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dealer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.DealerListPageRoutingModule
        ],
        declarations: [_dealer_list_page__WEBPACK_IMPORTED_MODULE_1__.DealerListPage]
    })
], DealerListPageModule);



/***/ }),

/***/ 20483:
/*!**************************************************************!*\
  !*** ./src/app/dealerModule/dealer-list/dealer-list.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DealerListPage": function() { return /* binding */ DealerListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dealer_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dealer-list.page.html */ 14058);
/* harmony import */ var _dealer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dealer-list.page.scss */ 38121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);










let DealerListPage = class DealerListPage {
    constructor(route, platform, zone, apiService, sendData, localStorage, navController) {
        this.route = route;
        this.platform = platform;
        this.zone = zone;
        this.apiService = apiService;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.navController = navController;
        this.userImg = "";
        this.infiniteScroll_call = false;
        this.value = 0;
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
        //  this.allStored = this.sendData.alldata;
    }
    ionViewWillEnter() {
        // this.dealerListShow();
    }
    ngOnInit() {
        if (this.sendData.alldata != undefined) {
            if (this.sendData.alldata.my == 'officer') {
                this.allStored = this.sendData.alldata;
                this.dealerListShow();
            }
            else {
                this.localStorage.getStorage().then(storedData => {
                    this.allStored = storedData.allStoreData;
                    console.log('stored data in dealer list page', this.allStored);
                    this.dealerListShow();
                });
            }
        }
        else {
            this.localStorage.getStorage().then(storedData => {
                this.allStored = storedData.allStoreData;
                console.log('stored data in dealer list page', this.allStored);
                this.dealerListShow();
            });
        }
    }
    close() {
        if (this.sendData.alldata != undefined) {
            if (this.sendData.alldata.my == 'officer') {
                this.route.navigate(['./user-list']);
            }
            else {
                this.route.navigate(['./tabs/home']);
            }
        }
        else {
            this.route.navigate(['./tabs/home']);
        }
        // this.navController.back();
        // this.modalCtrl.dismiss();
    }
    dealerListShow() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "request_user_type": this.allStored.employee_type,
                "search_str": "",
                "value": this.value,
                "request_for": this.allStored.user_id,
                "request_type": "list"
            };
            console.log('dealerListShoow::', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.getUserList, apiKey).subscribe((result) => {
                this.apiService.presentLoadingClose();
                console.log("UserListUrl: ", result);
                this.listHeader = result.tab_data;
                this.header_title = result.header_title;
                if (result.success == 1) {
                    if (this.dealerList == undefined) {
                        this.dealerList = result.data;
                    }
                    else {
                        this.dealerList = this.dealerList.concat(result.data);
                    }
                    this.errorMessage = '';
                }
                else {
                    this.errorMessage = result.message;
                    this.apiService.showToastMessage(result.message, top, 2000, "redBg");
                }
                if (this.infiniteScroll_call == true) {
                    this.stopInfiniteScroll();
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 2000, "redBg");
            });
        });
    }
    view(item) {
        // this.sendData.viewProfilId = id.customer_id;
        // this.sendData.viewProfilType = id.employee_type;
        this.sendData.alldata = item;
        this.route.navigate(['./profile-view']);
        // this.route.navigate(['./customer-details']);
    }
    loadData(event) {
        this.infiniteScroll_call = true;
        this.infiniteScroll_val = event;
        setTimeout(() => {
            this.value = this.dealerList.length;
            this.dealerListShow();
        }, 500);
    }
    stopInfiniteScroll() {
        if (this.infiniteScroll_call == true) {
            this.infiniteScroll_call = false;
            this.infiniteScroll_val.target.complete();
        }
    }
};
DealerListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
DealerListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-dealer-list',
        template: _raw_loader_dealer_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dealer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DealerListPage);



/***/ }),

/***/ 38121:
/*!****************************************************************!*\
  !*** ./src/app/dealerModule/dealer-list/dealer-list.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  color: #B01D22;\n  font-size: 20px;\n}\n\n.seg {\n  padding: 10px;\n}\n\n.act {\n  text-transform: none;\n  text-transform: initial;\n  background: linear-gradient(195deg, #bb2929 57%, var(--headerColor) 33%) !important;\n  border-radius: 8px;\n  padding: 5px;\n  width: 100%;\n  color: #fff;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\n.userImageUpload {\n  border-radius: 50%;\n  border: 2px dotted #b01d22;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile_image {\n  width: 65px;\n  height: 65px;\n}\n\n.name {\n  font-size: 15px;\n}\n\n.phone {\n  font-size: 13px;\n}\n\n.view {\n  --background:transparent;\n  color: #b01d22;\n  text-transform: capitalize;\n  --border-radius:20px;\n  width: 100%;\n  font-size: 12px;\n  background-color: #f1d4d4;\n}\n\n.but-div {\n  padding-top: 24px;\n}\n\n.no {\n  font-size: 23px;\n}\n\n.no_text {\n  font-size: 18px;\n}\n\n.no_text1 {\n  font-size: 15px;\n}\n\n.container1 {\n  width: 100%;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFHLGNBQUE7RUFBZSxlQUFBO0FBR2xCOztBQUZBO0VBQUssYUFBQTtBQU1MOztBQUxBO0VBQUssb0JBQUE7RUFBQSx1QkFBQTtFQUF3QixtRkFBQTtFQUN6QixrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLFdBQUE7QUFhaEQ7O0FBWkE7RUFBSSxzQkFBQTtFQUF1Qix5QkFBQTtFQUEwQiw2QkFBQTtBQWtCckQ7O0FBakJBO0VBQWlCLGtCQUFBO0VBQW1CLDBCQUFBO0VBQTJCLG9CQUFBO0tBQUEsaUJBQUE7QUF1Qi9EOztBQXRCQTtFQUFlLFdBQUE7RUFBWSxZQUFBO0FBMkIzQjs7QUExQkE7RUFBTSxlQUFBO0FBOEJOOztBQTdCQTtFQUFPLGVBQUE7QUFpQ1A7O0FBaENBO0VBQU0sd0JBQUE7RUFBeUIsY0FBQTtFQUFjLDBCQUFBO0VBQTBCLG9CQUFBO0VBQXFCLFdBQUE7RUFBVyxlQUFBO0VBQ25HLHlCQUFBO0FBeUNKOztBQXZDQTtFQUFTLGlCQUFBO0FBMkNUOztBQTFDQTtFQUFJLGVBQUE7QUE4Q0o7O0FBN0NBO0VBQVMsZUFBQTtBQWlEVDs7QUFoREE7RUFBVSxlQUFBO0FBb0RWOztBQW5EQTtFQUFZLFdBQUE7QUF1RFo7O0FBdERBO0VBQWUsNEJBQUE7RUFBNkIsc0JBQUE7RUFBc0IsWUFBQTtFQUFhLDJCQUFBO0FBNkQvRSIsImZpbGUiOiJkZWFsZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtjb2xvcjogI0IwMUQyMjtmb250LXNpemU6IDIwcHg7fVxuLnNlZ3twYWRkaW5nOiAxMHB4O31cbi5hY3R7dGV4dC10cmFuc2Zvcm06IGluaXRpYWw7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5NWRlZywjYmIyOTI5IDU3JSx2YXIoLS1oZWFkZXJDb2xvcikgMzMlKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtwYWRkaW5nOiA1cHg7d2lkdGg6IDEwMCU7Y29sb3I6ICNmZmY7fVxuaHIge3dpZHRoOiAxMDAlICFpbXBvcnRhbnQ7Zm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtib3JkZXI6IDAuNXB4IHNvbGlkIGdhaW5zYm9ybzt9XG4udXNlckltYWdlVXBsb2Fke2JvcmRlci1yYWRpdXM6IDUwJTtib3JkZXI6IDJweCBkb3R0ZWQgI2IwMWQyMjtvYmplY3QtZml0OiBjb3Zlcjt9XG4ucHJvZmlsZV9pbWFnZXt3aWR0aDogNjVweDtoZWlnaHQ6IDY1cHg7fVxuLm5hbWV7Zm9udC1zaXplOiAxNXB4O31cbi5waG9uZXtmb250LXNpemU6IDEzcHg7fVxuLnZpZXd7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOiNiMDFkMjI7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTstLWJvcmRlci1yYWRpdXM6MjBweDt3aWR0aDoxMDAlO2ZvbnQtc2l6ZToxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWQ0ZDQ7XG59XG4uYnV0LWRpdntwYWRkaW5nLXRvcDogMjRweH1cbi5ub3tmb250LXNpemU6IDIzcHg7fVxuLm5vX3RleHR7Zm9udC1zaXplOiAxOHB4O31cbi5ub190ZXh0MXtmb250LXNpemU6IDE1cHg7fVxuLmNvbnRhaW5lcjF7d2lkdGg6IDEwMCU7fVxuLmJnV2FsbGV0SW1hZ2V7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7cGFkZGluZzogNXB4O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9Il19 */");

/***/ }),

/***/ 14058:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealerModule/dealer-list/dealer-list.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{header_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <br>\n  <div class=\"container1\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n      </div>\n     <div class=\"seg\">\n       <ion-row>\n         <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" *ngFor = \"let item of listHeader\">\n           <div class= \"act ion-text-center\">\n                <p class=\"ion-no-margin\" [ngClass]=\"[platform?.is('ios') ? 'no_text1':'no_text' ]\">{{item?.key}}</p>\n                <p class=\"no\"><b>{{item?.value}}</b></p>\n              </div>\n         </ion-col>\n       </ion-row>\n       <!-- <ion-grid> -->\n        <hr>\n         <ion-row *ngFor =\"let item of dealerList\">\n           <ion-col [size]=\"3\" size-xs=\"3\" size-md=\"3\" size-lg=\"3\" class=\"ion-no-padding\">\n            <img *ngIf=\"item?.userImg=='' \" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n            <img *ngIf=\"item?.userImg!='' \"  class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"item?.userImg\"/>\n           </ion-col>\n           <ion-col [size]=\"5\" size-xs=\"5\" size-md=\"6\" size-lg=\"6\" class=\"autoMargin\">\n             <p class=\"name ion-no-margin\"><b>{{item?.full_name}}</b></p>\n             <p class=\"phone ion-no-margin\" *ngIf=\"item?.contact!=''\">{{item?.contact}}</p>\n             <p class=\"phone ion-no-margin\" *ngIf=\"item?.total_customers!=''\">Customer : {{item?.total_customers}}</p>\n             <p class=\"phone ion-no-margin\" *ngIf=\"item?.dealer_code!=''\">{{item?.dealer_code}}</p>\n           </ion-col>\n           <ion-col class=\"but-div\" [size]=\"4\" size-xs=\"4\" size-md=\"3\" size-lg=\"3\" class=\"autoMargin\">\n             <ion-button class=\"view butt\" (click)=\"view(item)\">View Profile</ion-button>\n           </ion-col>\n           <hr>\n         </ion-row>\n         <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n      <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n        \n       <!-- </ion-grid> -->\n     </div>\n    </ion-col>\n  </ion-row>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dealerModule_dealer-list_dealer-list_module_ts-es2015.js.map