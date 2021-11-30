(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_office_report_user-list_user-list_module_ts"],{

/***/ 85772:
/*!*********************************************************************!*\
  !*** ./src/app/office_report/user-list/user-list-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageRoutingModule": function() { return /* binding */ UserListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.page */ 14209);




const routes = [
    {
        path: '',
        component: _user_list_page__WEBPACK_IMPORTED_MODULE_0__.UserListPage
    }
];
let UserListPageRoutingModule = class UserListPageRoutingModule {
};
UserListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserListPageRoutingModule);



/***/ }),

/***/ 20358:
/*!*************************************************************!*\
  !*** ./src/app/office_report/user-list/user-list.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageModule": function() { return /* binding */ UserListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list-routing.module */ 85772);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page */ 14209);







let UserListPageModule = class UserListPageModule {
};
UserListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserListPageRoutingModule
        ],
        declarations: [_user_list_page__WEBPACK_IMPORTED_MODULE_1__.UserListPage]
    })
], UserListPageModule);



/***/ }),

/***/ 14209:
/*!***********************************************************!*\
  !*** ./src/app/office_report/user-list/user-list.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPage": function() { return /* binding */ UserListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-list.page.html */ 60988);
/* harmony import */ var _user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page.scss */ 81403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);










let UserListPage = class UserListPage {
    constructor(route, platform, zone, sendData, localStorage, apiService) {
        this.route = route;
        this.platform = platform;
        this.zone = zone;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.serverData = [];
    }
    ngOnInit() {
        this.localStorage.getStorage().then(storedData => {
            this.allStored = storedData.allStoreData;
            console.log('stored data in dealer list page', this.allStored);
            this.reportShow();
        });
    }
    reportShow() {
        this.zone.run(() => {
            let apiKey = {
                "request_user_type": this.allStored.employee_type,
                "search_str": "",
                "value": "",
                "request_for": this.allStored.user_id,
                "request_type": "list"
            };
            console.log('login data response', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.getUserList, apiKey).subscribe((result) => {
                console.log('login data response', result);
                this.server = result;
                if (result.success == 1) {
                    this.serverData = result.data;
                    this.errorMessage = '';
                }
                else {
                    this.errorMessage = result.message;
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    view(item) {
        this.sendData.alldata = { 'employee_type': item.employee_type, 'user_id': item.officer_id, 'my': 'officer' };
        this.route.navigate(['./dealer-list']);
    }
    close() {
        this.route.navigate(['./tabs/home']);
    }
};
UserListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
UserListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-user-list',
        template: _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserListPage);



/***/ }),

/***/ 81403:
/*!*************************************************************!*\
  !*** ./src/app/office_report/user-list/user-list.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  box-shadow: 1px 1px 1px 2px #EFEAEA;\n}\n\n.pinkBg {\n  background-color: #F2E8E8;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-row {\n  background: #B01D22;\n  color: #fff;\n  font-size: 14px;\n}\n\n.co_ro {\n  border-left: 1px solid #ECEEEF;\n  text-align: center;\n}\n\nion-text {\n  font-size: 12px;\n}\n\n.walletImages {\n  height: 40px;\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: auto;\n  display: block;\n}\n\n.colorWhite {\n  color: #fff;\n}\n\n.accTitle {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.totalBtn {\n  --background:#ec6d72;\n  text-transform: none;\n  text-transform: initial;\n  max-width: 100%;\n  white-space: pre-wrap;\n  font-size: 11px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n}\n\n.fontAcc {\n  font-size: 12px;\n}\n\n.act1 {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: #B01D22 !important;\n  color: #B01D22 !important;\n  border: 1px solid;\n  border-radius: 8px;\n  width: 100%;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxtQ0FBQTtBQUVQOztBQURFO0VBQVEseUJBQUE7QUFLVjs7QUFKRTtFQUFlLDJCQUFBO0FBUWpCOztBQVBBO0VBQU0sc0JBQUE7RUFBdUIseUJBQUE7RUFBMkIsd0JBQUE7QUFheEQ7O0FBWkE7RUFDSSw0QkFBQTtBQWVKOztBQWJBO0VBQ0ksNkJBQUE7QUFnQko7O0FBZEE7RUFBYSxtQkFBQTtFQUFxQixXQUFBO0VBQVksZUFBQTtBQW9COUM7O0FBbkJFO0VBQU8sOEJBQUE7RUFBK0Isa0JBQUE7QUF3QnhDOztBQXZCRTtFQUFVLGVBQUE7QUEyQlo7O0FBMUJFO0VBQWUsWUFBQTtFQUNiLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUE4Qko7O0FBN0JJO0VBQVksV0FBQTtBQWlDaEI7O0FBaENJO0VBQVUsZUFBQTtFQUFnQixpQkFBQTtBQXFDOUI7O0FBcENJO0VBQWUsNEJBQUE7RUFBOEIsc0JBQUE7RUFBd0IsMkJBQUE7QUEwQ3pFOztBQXpDSTtFQUFVLG9CQUFBO0VBQXFCLG9CQUFBO0VBQUEsdUJBQUE7RUFBdUIsZUFBQTtFQUFlLHFCQUFBO0VBQXFCLGVBQUE7RUFDdEYsb0JBQUE7RUFBc0Isa0JBQUE7QUFrRDlCOztBQWpESTtFQUFTLGVBQUE7QUFxRGI7O0FBcERJO0VBQ0ksMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDRSxpQkFBQTtFQUNGLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF1RFIiLCJmaWxlIjoidXNlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI0VGRUFFQTt9XG4gIC5waW5rQmd7YmFja2dyb3VuZC1jb2xvcjogI0YyRThFODt9XG4gIC5oZWFkZXIgLmNvbCB7IGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O31cbi5jb2wge2JvcmRlcjogc29saWQgMXB4IGdyZXk7Ym9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTsgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO31cbi5jb2w6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbn1cbi5oZWFkZXItcm93IHtiYWNrZ3JvdW5kOiAgI0IwMUQyMjtjb2xvcjogI2ZmZjtmb250LXNpemU6IDE0cHg7fVxuICAuY29fcm97Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRUNFRUVGO3RleHQtYWxpZ246IGNlbnRlcjsgfVxuICBpb24tdGV4dHsgZm9udC1zaXplOjEycHg7IH1cbiAgLndhbGxldEltYWdlc3sgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO31cbiAgICAuY29sb3JXaGl0ZXtjb2xvcjogI2ZmZjt9XG4gICAgLmFjY1RpdGxle2ZvbnQtc2l6ZToxNHB4OyBmb250LXdlaWdodDpib2xkO31cbiAgICAuYmdXYWxsZXRJbWFnZXtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fVxuICAgIC50b3RhbEJ0bnstLWJhY2tncm91bmQ6I2VjNmQ3Mjt0ZXh0LXRyYW5zZm9ybTppbml0aWFsO21heC13aWR0aDoxMDAlO3doaXRlLXNwYWNlOnByZS13cmFwO2ZvbnQtc2l6ZToxMXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDsgLS1wYWRkaW5nLWVuZDogNXB4O31cbiAgICAuZm9udEFjY3tmb250LXNpemU6IDEycHg7fVxuICAgIC5hY3Qxe1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIH0iXX0= */");

/***/ }),

/***/ 60988:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office_report/user-list/user-list.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{server?.header_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div class=\"ion-padding\">\n      <ion-row class=\"header-row\">\n          <ion-col class=\"co_ro\" size=\"1\">\n            <ion-text>S.no</ion-text>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"3\">\n            <ion-text>Officer</ion-text>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"3\">\n            <ion-text>Dealer</ion-text>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"3\">\n            <ion-text>Customer</ion-text>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"2\">\n            <ion-text>Details</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of serverData; let i = index;\" [ngClass]=\"{'pinkBg': i%2==0}\">\n          <ion-col class=\"co_ro\" size=\"1\">\n            <ion-text>{{i+1}}</ion-text>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"3\">\n            <ion-text>{{item?.full_name}}</ion-text>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"3\">\n            <ion-text>{{item?.total_dealers}}</ion-text>\n          </ion-col>\n          <ion-col class=\"co_ro\"  size=\"3\">\n            <ion-text>{{item?.total_customers}}</ion-text>\n          </ion-col>\n          <ion-col class=\"co_ro\"  size=\"2\">\n            <ion-button class = \"act1\" (click)=\"view(item)\">view</ion-button>\n          </ion-col>\n        </ion-row>\n        </div>\n      </ion-col>\n      </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_office_report_user-list_user-list_module_ts-es2015.js.map