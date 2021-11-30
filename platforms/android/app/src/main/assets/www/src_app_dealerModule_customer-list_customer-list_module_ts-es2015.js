(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_dealerModule_customer-list_customer-list_module_ts"],{

/***/ 40211:
/*!****************************************************************************!*\
  !*** ./src/app/dealerModule/customer-list/customer-list-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListPageRoutingModule": function() { return /* binding */ CustomerListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-list.page */ 86129);




const routes = [
    {
        path: '',
        component: _customer_list_page__WEBPACK_IMPORTED_MODULE_0__.CustomerListPage
    }
];
let CustomerListPageRoutingModule = class CustomerListPageRoutingModule {
};
CustomerListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerListPageRoutingModule);



/***/ }),

/***/ 79440:
/*!********************************************************************!*\
  !*** ./src/app/dealerModule/customer-list/customer-list.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListPageModule": function() { return /* binding */ CustomerListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-list-routing.module */ 40211);
/* harmony import */ var _customer_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list.page */ 86129);







let CustomerListPageModule = class CustomerListPageModule {
};
CustomerListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerListPageRoutingModule
        ],
        declarations: [_customer_list_page__WEBPACK_IMPORTED_MODULE_1__.CustomerListPage]
    })
], CustomerListPageModule);



/***/ }),

/***/ 86129:
/*!******************************************************************!*\
  !*** ./src/app/dealerModule/customer-list/customer-list.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListPage": function() { return /* binding */ CustomerListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer-list.page.html */ 24937);
/* harmony import */ var _customer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list.page.scss */ 93089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);









let CustomerListPage = class CustomerListPage {
    constructor(route, platform, navCtrl, zone, apiService, sendData) {
        this.route = route;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.apiService = apiService;
        this.sendData = sendData;
        this.userImg = "";
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
        this.allocationData = this.sendData.alldata;
    }
    ngOnInit() {
        this.customerListShow();
    }
    customerListShow() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "search_str": "",
                "value": "",
                "request_for": this.allocationData.customer_id,
                "request_user_type": this.allocationData.employee_type,
                "request_type": "list"
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.getUserList, apiKey).subscribe((result) => {
                this.apiService.presentLoadingClose();
                console.log("UserListUrl: ", result);
                if (result.success == '1') {
                    this.customerList = result.data;
                    this.header_title = result.header_title;
                    // this.custmReg = result.data;
                }
                else {
                    this.image = result.no_data_image;
                    // this.apiService.showToastMessage(result.message, top, 2000, "redBg");
                }
            });
        });
    }
    view(item) {
        console.log("id456 : ", item);
        this.sendData.alldata = item;
        this.sendData.itemDetails = this.allocationData.customer_id;
        console.log('123', this.sendData.alldata);
        this.route.navigate(['./customer-details']);
        // this.navCtrl.navigateBack('/customer-details');
    }
};
CustomerListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService }
];
CustomerListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer-list',
        template: _raw_loader_customer_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerListPage);



/***/ }),

/***/ 93089:
/*!********************************************************************!*\
  !*** ./src/app/dealerModule/customer-list/customer-list.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  color: #B01D22;\n  font-size: 20px;\n}\n\n.act {\n  text-transform: none;\n  text-transform: initial;\n  --background: linear-gradient(206deg, red 57%,#e94325 33%) !important;\n  border-radius: 8px;\n  width: 100%;\n  height: 100px;\n  color: white;\n  text-align: center;\n  font-size: 25px;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\n.userImageUpload {\n  border-radius: 50%;\n  border: 3px dotted #b01d22;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile_image {\n  width: 75px;\n  height: 70px;\n}\n\n.view {\n  --background:transparent;\n  color: #b01d22;\n  text-transform: capitalize;\n  --border-radius: 20px;\n}\n\n.but-div {\n  text-align: right;\n}\n\n.no {\n  margin-top: 6px;\n  font-size: 36px;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsY0FBQTtFQUFlLGVBQUE7QUFHbEI7O0FBRkE7RUFBSyxvQkFBQTtFQUFBLHVCQUFBO0VBQXdCLHFFQUFBO0VBQXNFLGtCQUFBO0VBQy9GLFdBQUE7RUFBWSxhQUFBO0VBQWMsWUFBQTtFQUFhLGtCQUFBO0VBQW1CLGVBQUE7QUFZOUQ7O0FBWEE7RUFBRyxzQkFBQTtFQUF1Qix5QkFBQTtFQUEwQiw2QkFBQTtBQWlCcEQ7O0FBaEJBO0VBQWtCLGtCQUFBO0VBQW9CLDBCQUFBO0VBQTRCLG9CQUFBO0tBQUEsaUJBQUE7QUFzQmxFOztBQXJCQztFQUFlLFdBQUE7RUFBVyxZQUFBO0FBMEIzQjs7QUF6QkE7RUFBTSx3QkFBQTtFQUF5QixjQUFBO0VBQWUsMEJBQUE7RUFBMkIscUJBQUE7QUFnQ3pFOztBQS9CQTtFQUFVLGlCQUFBO0FBbUNWOztBQWxDQTtFQUFJLGVBQUE7RUFBZ0IsZUFBQTtBQXVDcEI7O0FBdENBO0VBQWUsNEJBQUE7RUFBNkIsc0JBQUE7RUFBdUIsWUFBQTtFQUFhLDJCQUFBO0FBNkNoRiIsImZpbGUiOiJjdXN0b21lci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1e2NvbG9yOiAjQjAxRDIyO2ZvbnQtc2l6ZTogMjBweDt9XG4uYWN0e3RleHQtdHJhbnNmb3JtOiBpbml0aWFsOy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwNmRlZywgcmVkIDU3JSwjZTk0MzI1IDMzJSkgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDBweDtjb2xvcjogd2hpdGU7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMjVweDt9XG5ocnt3aWR0aDogMTAwJSAhaW1wb3J0YW50O2ZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7Ym9yZGVyOiAwLjVweCBzb2xpZCBnYWluc2Jvcm87fVxuLnVzZXJJbWFnZVVwbG9hZHsgYm9yZGVyLXJhZGl1czogNTAlOyBib3JkZXI6IDNweCBkb3R0ZWQgI2IwMWQyMjsgb2JqZWN0LWZpdDogY292ZXI7fVxuIC5wcm9maWxlX2ltYWdle3dpZHRoOjc1cHg7aGVpZ2h0OjcwcHg7fVxuLnZpZXd7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOiAjYjAxZDIyO3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOy0tYm9yZGVyLXJhZGl1czogMjBweDt9XG4uYnV0LWRpdnsgdGV4dC1hbGlnbjpyaWdodDt9XG4ubm97bWFyZ2luLXRvcDogNnB4O2ZvbnQtc2l6ZTogMzZweDt9XG4uYmdXYWxsZXRJbWFnZXtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7cGFkZGluZzogNXB4O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9Il19 */");

/***/ }),

/***/ 24937:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealerModule/customer-list/customer-list.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{header_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" >\n  <!-- [ngClass]=\"{'content-bg':  platform.width()>740}\" -->\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" push-lg=\"3\" push-md=\"3\"  class=\"whiteCol\" >\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n      </div>\n     <!-- <div class=\"ion-padding\"> -->\n       <!-- <ion-row>\n         <ion-col>\n           <h5>{{header_title}}</h5>\n         </ion-col>\n       </ion-row>-->\n       <div>\n         <img [src]=\"image\">\n       </div>\n         <ion-row *ngFor=\"let item of customerList\">\n           <!-- <ion-col size=\"3\">\n         \n              <div class=\"relativeDiv\">\n                <img *ngIf=\"userImg=='' \" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n                <img *ngIf=\"userImg!='' \"  class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"userImg\"/>\n                \n            </div>\n           </ion-col> -->\n           <ion-col size=\"8\">\n             <p class=\"ion-no-margin\">{{item?.full_name}}</p>\n             <p class=\"ion-no-margin\">{{item?.contact}}</p>\n             <p class=\"ion-no-margin\">{{item?.registration_sts}}{{item?.user_registration_status}}</p> \n           </ion-col>\n           <ion-col class=\"but-div\" size=\"4\" >\n             <ion-button class=\"view butt\" (click)=\"view(item)\">{{item?.view_btn}}</ion-button>\n           </ion-col>\n           <hr>\n         </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dealerModule_customer-list_customer-list_module_ts-es2015.js.map