(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_orderModule_orderdetails_orderdetails_module_ts"],{

/***/ 2922:
/*!*************************************************************************!*\
  !*** ./src/app/orderModule/orderdetails/orderdetails-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPageRoutingModule": function() { return /* binding */ OrderdetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _orderdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderdetails.page */ 58984);




const routes = [
    {
        path: '',
        component: _orderdetails_page__WEBPACK_IMPORTED_MODULE_0__.OrderdetailsPage
    }
];
let OrderdetailsPageRoutingModule = class OrderdetailsPageRoutingModule {
};
OrderdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderdetailsPageRoutingModule);



/***/ }),

/***/ 74590:
/*!*****************************************************************!*\
  !*** ./src/app/orderModule/orderdetails/orderdetails.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPageModule": function() { return /* binding */ OrderdetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderdetails-routing.module */ 2922);
/* harmony import */ var _orderdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderdetails.page */ 58984);







let OrderdetailsPageModule = class OrderdetailsPageModule {
};
OrderdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderdetailsPageRoutingModule
        ],
        declarations: [_orderdetails_page__WEBPACK_IMPORTED_MODULE_1__.OrderdetailsPage]
    })
], OrderdetailsPageModule);



/***/ }),

/***/ 58984:
/*!***************************************************************!*\
  !*** ./src/app/orderModule/orderdetails/orderdetails.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPage": function() { return /* binding */ OrderdetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_orderdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./orderdetails.page.html */ 40983);
/* harmony import */ var _orderdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderdetails.page.scss */ 24996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);











let OrderdetailsPage = class OrderdetailsPage {
    constructor(route, location, platform, zone, popoverController, apiService, sendData, localStorage) {
        this.route = route;
        this.location = location;
        this.platform = platform;
        this.zone = zone;
        this.popoverController = popoverController;
        this.apiService = apiService;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.value = 0;
        this.month = new Date().toISOString();
        this.infiniteScroll_call = false;
        this.searchString = '';
        this.mnth = '';
        this.customerT = '';
        this.callapicheck = 0;
    }
    ionViewWillEnter() {
        this.apiDetails = this.sendData.ordersDetails;
        this.mnth = this.month.slice(5, 7);
        this.value = 0;
        this.listData = [];
        this.customerT = '1,2';
        this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
    }
    ngOnInit() {
    }
    gotoHomeTab() {
        console.log("this.apiService.isSelected000000", this.apiService.isSelected);
    }
    close() {
        this.apiService.isSelected = 'true';
        this.route.navigate(['./tabs']);
    }
    changeData(ev) {
        if (this.callapicheck != 0) {
            this.listData = [];
            this.value = 0;
            console.log('ev', ev);
            this.mnth = this.month.slice(5, 7);
            console.log('ev', this.mnth);
            this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
        }
    }
    checkValue(ev) {
        console.log('select opt value==> ', ev);
        this.customerT = ev.target.value;
        this.listData = [];
        this.value = 0;
        this.mnth = this.month.slice(5, 7);
        this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
    }
    orderDetailsShow(string, Month, customerType) {
        console.log('val');
        this.zone.run(() => {
            let apiKey = {
                "year": this.apiDetails.year,
                "month": Month,
                "order_status": this.apiDetails.item.order_status,
                "customer_type": customerType,
                "search_str": string,
                "value": this.value
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.OrderDetailListUrl, apiKey).subscribe((result) => {
                // this.apiService.presentLoadingClose();
                console.log("OrderDetailListUrl: ", result);
                this.listType = result.filter.data;
                this.callapicheck = 1;
                if (result.success == 1) {
                    if (this.listData == undefined) {
                        this.listData = result.data;
                    }
                    else {
                        this.listData = this.listData.concat(result.data);
                    }
                    this.errorMessage = '';
                    this.errorImage = '';
                }
                else {
                    if (this.value == 0) {
                        this.errorImage = result.error_image;
                    }
                    else {
                        this.errorMessage = result.message;
                    }
                    // this.listData=[];
                    // this.apiService.showToastMessage(result.message, 'top', 2000, 'redBg');
                }
                if (this.infiniteScroll_call == true) {
                    this.stopInfiniteScroll();
                }
            }, err => {
                //   this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                if (this.infiniteScroll_call == true) {
                    this.stopInfiniteScroll();
                }
            });
        });
    }
    gotoViewOrder(item) {
        this.sendData.alldata = item;
        this.route.navigate(['/appove-reject-reedemption']);
    }
    searchCustomer(ev) {
        console.log('ev', ev);
        if (ev.detail.value && ev.detail.value != '') {
            this.searchString = ev.detail.value;
        }
        else {
            this.searchString = '';
        }
        console.log('ev', ev);
        this.value = 0;
        this.listData = [];
        this.mnth = this.month.slice(5, 7);
        this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
    }
    loadData(event) {
        this.infiniteScroll_call = true;
        this.infiniteScroll_val = event;
        setTimeout(() => {
            this.value = this.listData.length;
            this.mnth = this.month.slice(5, 7);
            this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
        }, 500);
    }
    stopInfiniteScroll() {
        if (this.infiniteScroll_call == true) {
            this.infiniteScroll_call = false;
            this.infiniteScroll_val.target.complete();
        }
    }
    verifyFun(item, key) {
        console.log("item::::::", item);
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "order_id": item.auto_id,
                "product_price": '',
                "agency_fees": '',
                "courier_charges": '',
                "order_status": key.order_status,
                "approval_status": key.approval_status,
                "request_for": item.user_id,
                "utm_source": '',
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.acceptRejectUrl, apiKey).subscribe((result) => {
                console.log("PostListUrl: ", result);
                this.apiService.presentLoadingClose();
                if (result.success == 1) {
                    this.mnth = this.month.slice(5, 7);
                    this.value = 0;
                    this.listData = [];
                    this.customerT = '1,2';
                    this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
                    // this.location.back();
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
OrderdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService }
];
OrderdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-orderdetails',
        template: _raw_loader_orderdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_orderdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderdetailsPage);



/***/ }),

/***/ 24996:
/*!*****************************************************************!*\
  !*** ./src/app/orderModule/orderdetails/orderdetails.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container1 {\n  width: 100%;\n  margin: 60px auto 0;\n}\n\n.orderPDiv {\n  font-size: 13px;\n}\n\n.orderPDiv1 {\n  font-size: 12px;\n  color: var(--headerColor);\n}\n\n.orderPDiv2 {\n  font-size: 16px;\n  color: var(--headerColor);\n}\n\n.margin10Div {\n  margin-bottom: 10px;\n}\n\nion-searchbar {\n  --border-radius: 20px;\n  padding: 2px;\n  --box-shadow: 0px 0px 7px 2px #D6D1D1;\n}\n\n.butt_ion {\n  --border-radius: 15px;\n  height: 30px;\n}\n\n.ionic_btn1 {\n  --background:var(--headerColor);\n  --border-radius:14px;\n  width: 100%;\n  text-transform: none;\n  text-transform: initial;\n  height: 30px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZ0IsV0FBQTtFQUNaLG1CQUFBO0FBRUo7O0FBQUE7RUFBZSxlQUFBO0FBSWY7O0FBREE7RUFBZ0IsZUFBQTtFQUFnQix5QkFBQTtBQU1oQzs7QUFIQTtFQUFnQixlQUFBO0VBQWdCLHlCQUFBO0FBUWhDOztBQUxBO0VBQWlCLG1CQUFBO0FBU2pCOztBQVJBO0VBQWMscUJBQUE7RUFDVixZQUFBO0VBQ0EscUNBQUE7QUFZSjs7QUFYSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQWNSOztBQVpJO0VBQVksK0JBQUE7RUFBZ0Msb0JBQUE7RUFBcUIsV0FBQTtFQUFXLG9CQUFBO0VBQUEsdUJBQUE7RUFBdUIsWUFBQTtFQUMvRixlQUFBO0FBb0JSIiwiZmlsZSI6Im9yZGVyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMXsgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gMDtcbn1cbi5vcmRlclBEaXZ7ICAgIGZvbnQtc2l6ZTogMTNweDtcblxufVxuLm9yZGVyUERpdjF7ICAgIGZvbnQtc2l6ZTogMTJweDtjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xuXG59XG4ub3JkZXJQRGl2MnsgICAgZm9udC1zaXplOiAxNnB4O2NvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG5cbn1cbi5tYXJnaW4xMERpdnsgICAgbWFyZ2luLWJvdHRvbTogMTBweDt9XG5pb24tc2VhcmNoYmFyey0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDdweCAycHggI0Q2RDFEMTt9XG4gICAgLmJ1dHRfaW9ue1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLmlvbmljX2J0bjF7LS1iYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTstLWJvcmRlci1yYWRpdXM6MTRweDt3aWR0aDoxMDAlO3RleHQtdHJhbnNmb3JtOmluaXRpYWw7aGVpZ2h0OjMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDt9Il19 */");

/***/ }),

/***/ 40983:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderModule/orderdetails/orderdetails.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{apiDetails?.item?.name}}&nbsp;Orders</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-padding\">\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding borderRediDiv quick widthtotalDiv\">\n        <ion-searchbar placeholder=\"Search Customer\"  [(ngModel)]=\"searchString\" (ionChange)=\"searchCustomer($event)\"></ion-searchbar>\n      <ion-row>\n        <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"6\">\n         <ion-item lines=\"none\">\n           <!-- <ion-label position=\"stacked\">Change Year</ion-label> -->\n             <ion-datetime [(ngModel)] = \"month\" displayFormat=\"MMMM\" placeholder=\"Month\" (ionChange)=\"changeData($event)\"></ion-datetime>\n             <ion-icon name=\"chevron-down-outline\"></ion-icon>\n           </ion-item>\n        </ion-col>\n        <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"6\" class=\"autoMargin\">\n            <!-- <ion-label position=\"stacked\">Customer Type &nbsp;<ion-icon name=\"chevron-down-outline\"></ion-icon></ion-label> -->\n            <ion-select  placeholder=\"Customer Type\"  (ionChange)=\"checkValue($event)\">\n              <ion-select-option *ngFor = \"let id of listType\" [value]=\"id?.value\" >{{id?.key}}</ion-select-option>\n            </ion-select>\n            <!-- </ion-item> -->\n         </ion-col>\n      </ion-row>\n      <div class=\"ion-padding borderRediDiv borderDiv margin10Div\" *ngFor = \"let item of listData\">\n        <ion-row>\n          <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"9\" size-lg=\"9\">\n            <p class=\"ion-no-margin orderPDiv\">{{item?.full_name}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.type_name}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.contact}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.officer_name}}</p> \n          </ion-col>\n          <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"3\" size-lg=\"3\" class=\"ion-text-right\">\n            <p class=\"ion-no-margin orderPDiv\">{{item?.order_id_str}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.buy_date}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.tat_days}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\n            <p class=\"ion-no-margin orderPDiv1\">{{item?.good_str}}</p>\n            <p class=\"ion-no-margin orderPDiv1\">{{item?.points_str}}</p>\n          </ion-col>\n          <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"5\" size-lg=\"5\" >\n            <ion-row>\n              <ion-col *ngFor=\"let kick of item?.footer_data\">\n                <ion-button *ngIf=\"kick?.btn_applicable==true\" color=\"danger ionic_btn1 btnDiv\" \n                tappable (click)=\"verifyFun(item, kick)\">{{kick?.btn_text}}</ion-button>\n              </ion-col>\n            </ion-row>\n           \n          </ion-col>\n          <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"3\">\n            <p *ngIf=\"item?.btn_applicable==true\" class=\"ion-no-margin orderPDiv2 ion-text-right\" tappable (click)=\"gotoViewOrder(item)\">{{item?.btn_text}}</p>\n        <!-- <p *ngIf=\"item.btn_applicable==true\" color=\"danger btnDiv\" \n        tappable (click)=\"gotoViewOrder(item)\">{{item?.btn_text}}</p> -->\n      </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\n            <p class=\"ion-no-margin orderPDiv\">{{item?.tracking_id}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n      <div *ngIf=\"errorImage!=''\">\n        <img [src]=\"errorImage\"/>\n      </div>\n      <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      </ion-col>\n      </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_orderModule_orderdetails_orderdetails_module_ts-es2015.js.map