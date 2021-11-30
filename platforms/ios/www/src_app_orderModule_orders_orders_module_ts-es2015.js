(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_orderModule_orders_orders_module_ts"],{

/***/ 2282:
/*!*************************************************************!*\
  !*** ./src/app/orderModule/orders/orders-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageRoutingModule": function() { return /* binding */ OrdersPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page */ 53593);




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_0__.OrdersPage
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ 8844:
/*!*****************************************************!*\
  !*** ./src/app/orderModule/orders/orders.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageModule": function() { return /* binding */ OrdersPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 2282);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page */ 53593);







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_1__.OrdersPage]
    })
], OrdersPageModule);



/***/ }),

/***/ 53593:
/*!***************************************************!*\
  !*** ./src/app/orderModule/orders/orders.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPage": function() { return /* binding */ OrdersPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./orders.page.html */ 2914);
/* harmony import */ var _orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page.scss */ 71430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);










let OrdersPage = class OrdersPage {
    constructor(route, platform, zone, apiService, sendData, localStorage) {
        this.route = route;
        this.platform = platform;
        this.zone = zone;
        this.apiService = apiService;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.year = new Date().toISOString();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.approveListShow(this.year);
        // alert("11");
    }
    changeData(ev) {
        console.log('ev', ev);
        this.year = this.year.slice(0, 4);
        console.log('ev', this.year);
        this.approveListShow(this.year);
        // this.dealerAllocateShow(this.mnth,this.yr);
    }
    approveListShow(item) {
        // this.apiService.presentLoadingDefault();
        //  alert(this.apiService.isSelected);
        //  this.apiService.isSelected='';
        console.log("this.apiService.isSelected11111", this.apiService.isSelected);
        //  alert(this.apiService.isSelected);
        this.zone.run(() => {
            let apiKey = {
                "year": item
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.ApprovalListUrl, apiKey).subscribe((result) => {
                // this.apiService.presentLoadingClose();
                console.log("ApprovalListUrl: ", result);
                this.listHeader = result.header_data;
                this.listData = result.data;
                if (result.success == '1') { }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 2000, 'redBg');
                }
            }, err => {
                //   this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    listDetails(item) {
        this.year = this.year.slice(0, 4);
        let obj = {
            "item": item,
            "year": this.year,
            //  "customer_type": "all",
        };
        this.sendData.ordersDetails = obj;
        this.route.navigate(['./orderdetails']);
    }
};
OrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService }
];
OrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-orders',
        template: _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrdersPage);



/***/ }),

/***/ 71430:
/*!*****************************************************!*\
  !*** ./src/app/orderModule/orders/orders.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".customerPDiv {\n  color: var(--headerColor);\n}\n\n.container1 {\n  width: 100%;\n  margin: 55px auto 0;\n}\n\n.act {\n  text-transform: none;\n  text-transform: initial;\n  background: linear-gradient(195deg, #bb2929 57%, var(--headerColor) 33%) !important;\n  border-radius: 8px;\n  padding: 10px;\n  width: 100%;\n  color: #fff;\n  height: 95px;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\n.totalCount {\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 5px;\n  letter-spacing: 2px;\n}\n\n.fontTDiv {\n  font-size: 13px;\n  line-height: 18px;\n}\n\n.iconlogo {\n  color: var(--headerColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyx5QkFBQTtBQUVkOztBQURBO0VBQWdCLFdBQUE7RUFDWixtQkFBQTtBQUtKOztBQUhBO0VBQUssb0JBQUE7RUFBQSx1QkFBQTtFQUF3QixtRkFBQTtFQUN6QixrQkFBQTtFQUFtQixhQUFBO0VBQWMsV0FBQTtFQUFZLFdBQUE7RUFBWSxZQUFBO0FBWTdEOztBQVhJO0VBRUcsc0JBQUE7RUFBdUIseUJBQUE7RUFBMkIsNkJBQUE7QUFlekQ7O0FBYk07RUFBWSxpQkFBQTtFQUFrQixlQUFBO0VBQWtCLGVBQUE7RUFBa0IsbUJBQUE7QUFvQnhFOztBQW5CTTtFQUFVLGVBQUE7RUFBb0IsaUJBQUE7QUF3QnBDOztBQXZCTTtFQUNJLHlCQUFBO0FBMEJWIiwiZmlsZSI6Im9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tZXJQRGl2e2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTt9XG4uY29udGFpbmVyMXsgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA1NXB4IGF1dG8gMDtcbn1cbi5hY3R7dGV4dC10cmFuc2Zvcm06IGluaXRpYWw7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5NWRlZywjYmIyOTI5IDU3JSx2YXIoLS1oZWFkZXJDb2xvcikgMzMlKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtwYWRkaW5nOiAxMHB4O3dpZHRoOiAxMDAlO2NvbG9yOiAjZmZmO2hlaWdodDogOTVweDt9XG4gICAgaHIge1xuICAgIC8vICAgICBoZWlnaHQ6NDVweDtcbiAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O2ZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7IGJvcmRlcjogMC41cHggc29saWQgZ2FpbnNib3JvO1xuICAgICAgfVxuICAgICAgLnRvdGFsQ291bnR7Zm9udC13ZWlnaHQ6IGJvbGQ7Zm9udC1zaXplOiAyMHB4OyAgbWFyZ2luLXRvcDogNXB4OyAgbGV0dGVyLXNwYWNpbmc6IDJweDt9XG4gICAgICAuZm9udFREaXZ7Zm9udC1zaXplOiAxM3B4OyAgICBsaW5lLWhlaWdodDogMThweDt9XG4gICAgICAuaWNvbmxvZ297XG4gICAgICAgICAgY29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgfSJdfQ== */");

/***/ }),

/***/ 2914:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderModule/orders/orders.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <br>\n  <div class=\"container1\">\n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding\">\n      <p class=\"customerPDiv\">Redemption Order</p>\n      <ion-row >\n        <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding\">\n          <div class=\"act ion-text-center\">\n            <ion-row>\n              <ion-col size=\"4\" *ngFor = \"let item of listHeader\">\n                <p class=\"ion-no-margin fontTDiv\">{{item?.key}}</p>\n                <p class=\"totalCount ion-no-margin\">{{item?.value}}</p>\n                \n              </ion-col>\n            </ion-row>\n          </div>\n\n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"6\">\n           <ion-item>\n             <!-- <ion-label position=\"stacked\">Change Year</ion-label> -->\n               <ion-datetime [(ngModel)] = \"year\" displayFormat=\"YYYY\" (ionChange) = \"changeData($event)\"></ion-datetime>\n               <ion-icon name=\"chevron-down-outline\"></ion-icon>\n             </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor = \"let id of listData\"  (click) = \"listDetails(id)\">\n          <ion-col size=\"1\" class=\"ion-text-center autoMargin\">\n            <img class=\"homeLogo\" [src] = \"id?.status_icon\">\n          </ion-col>\n          <ion-col size=\"9\">\n            <p>{{id?.name}}:{{id?.order_count}}</p>\n             </ion-col>\n          <ion-col size =\"2\" class=\"ion-text-center autoMargin\">\n            <ion-icon class=\"homelogo iconlogo\" name=\"chevron-forward-outline\"></ion-icon>\n          </ion-col>\n          <hr class=\"ion-no-margin\">\n        </ion-row>\n        </ion-col>\n        </ion-row>\n        </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_orderModule_orders_orders_module_ts-es2015.js.map