(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_dealerModule_customer-details_customer-details_module_ts"],{

/***/ 78305:
/*!**********************************************************************************!*\
  !*** ./src/app/dealerModule/customer-details/customer-details-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsPageRoutingModule": function() { return /* binding */ CustomerDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details.page */ 67668);




const routes = [
    {
        path: '',
        component: _customer_details_page__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailsPage
    }
];
let CustomerDetailsPageRoutingModule = class CustomerDetailsPageRoutingModule {
};
CustomerDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerDetailsPageRoutingModule);



/***/ }),

/***/ 64358:
/*!**************************************************************************!*\
  !*** ./src/app/dealerModule/customer-details/customer-details.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsPageModule": function() { return /* binding */ CustomerDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details-routing.module */ 78305);
/* harmony import */ var _customer_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.page */ 67668);







let CustomerDetailsPageModule = class CustomerDetailsPageModule {
};
CustomerDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customer_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailsPageRoutingModule
        ],
        declarations: [_customer_details_page__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailsPage]
    })
], CustomerDetailsPageModule);



/***/ }),

/***/ 67668:
/*!************************************************************************!*\
  !*** ./src/app/dealerModule/customer-details/customer-details.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsPage": function() { return /* binding */ CustomerDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer-details.page.html */ 86774);
/* harmony import */ var _customer_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.page.scss */ 49172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);









let CustomerDetailsPage = class CustomerDetailsPage {
    constructor(apiService, zone, loadingController, platform, route, sendData) {
        this.apiService = apiService;
        this.zone = zone;
        this.loadingController = loadingController;
        this.platform = platform;
        this.route = route;
        this.sendData = sendData;
        this.allocationData = this.sendData.alldata;
        this.checkredirect = this.sendData.myParam;
        this.deelarId = this.sendData.itemDetails;
        console.log(' this.deelarId: ', this.deelarId);
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
    }
    ngOnInit() {
        this.fetchData();
    }
    ionViewWillEnter() {
        // this.allocationData= this.sendData.alldata;
        // this.fetchData();
    }
    fetchData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield this.loading.present();
            this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                let apiKey = {
                    "search_str": "",
                    "request_for": this.allocationData.customer_id,
                    "request_user_type": this.allocationData.employee_type,
                    "request_type": "detail",
                    //   "dealer_id":this.sendData.itemDetails,
                    "value": "0"
                };
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.getUserList, apiKey).subscribe((result) => {
                    this.loading.dismiss();
                    this.allocatedPointsRes = result;
                    if (result.success == 1) {
                    }
                    else {
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                    this.loading.dismiss();
                });
            }));
        });
    }
    gotoHomeTab() {
        if (this.checkredirect == 'customerCheck') {
            this.apiService.isSelected = 'true';
            console.log("this.apiService.isSelected000000", this.apiService.isSelected);
        }
        // alert(this.apiService.isSelected)
    }
    redemption_report(item) {
        this.sendData.alldata = { "item": item, "requestType": 'customer', 'employee_type': this.allocationData.employee_type,
            'dealer_id': this.sendData.itemDetails };
        this.route.navigate(['/redemption-report']);
    }
    customer_list() {
        // this.sendData.viewProfilId = item
        //this.sendData.alldata
        this.route.navigate(['/customer-list']);
    }
    goToRedeem(item) {
        if (item.redirect_url == 'purchasehistory') {
            this.sendData.alldata = { 'customer_id': this.allocationData.customer_id,
                'request_page': 'customer', 'backKey': 'back1', 'employee_type': this.allocationData.employee_type, };
        }
        else {
            this.sendData.alldata = { 'customer_id': this.allocationData.customer_id, 'employee_type': this.allocationData.employee_type,
                'request_page': 'dealer', 'backKey': 'back1', 'redeem_for': 'other' };
            console.log('2345678:', this.sendData.alldata);
            // this.sendData.redeem_for = 'other';
        }
        // this.sendData.request_page = 'customer';
        // this.sendData.alldata = this.allocationData;
        this.route.navigateByUrl(item === null || item === void 0 ? void 0 : item.redirect_url);
    }
};
CustomerDetailsPage.ctorParameters = () => [
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService }
];
CustomerDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-customer-details',
        template: _raw_loader_customer_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerDetailsPage);



/***/ }),

/***/ 49172:
/*!**************************************************************************!*\
  !*** ./src/app/dealerModule/customer-details/customer-details.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card_car {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n  border-radius: 12px;\n}\n\n.view {\n  text-transform: capitalize;\n  --border-radius: 20px;\n  width: 135px;\n  height: 35px;\n}\n\n.act {\n  text-transform: capitalize;\n  --border-radius:20px;\n  --background:#B01D22;\n  padding: 5px;\n  width: 180px;\n  height: 50px;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n\n.col_img {\n  font-size: 75px;\n}\n\n.col_text {\n  color: white;\n}\n\n.col_P {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.butt_col {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: white !important;\n  color: white !important;\n  border: 1px solid;\n  border-radius: 13px;\n  width: 80%;\n  min-height: 30px;\n}\n\n.hedaerBackgroundImage {\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\n.viewButton {\n  color: #fff;\n  --border-color:#fff;\n  letter-spacing: -1px;\n  width: 100%;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.redemDiv {\n  font-size: 14px;\n}\n\n.image {\n  width: 24px;\n  height: 20px;\n}\n\n.col_pDiv {\n  color: #B01D22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQVUsbUNBQUE7RUFBb0MsbUJBQUE7QUFHbEQ7O0FBRkk7RUFBTSwwQkFBQTtFQUEwQixxQkFBQTtFQUFzQixZQUFBO0VBQWEsWUFBQTtBQVN2RTs7QUFSSTtFQUFNLDBCQUFBO0VBQTBCLG9CQUFBO0VBQXFCLG9CQUFBO0VBQXFCLFlBQUE7RUFBWSxZQUFBO0VBQVksWUFBQTtBQWlCdEc7O0FBaEJJO0VBQUssV0FBQTtFQUFZLFlBQUE7QUFxQnJCOztBQXBCSTtFQUFTLGVBQUE7QUF3QmI7O0FBdkJJO0VBQVUsWUFBQTtBQTJCZDs7QUExQkk7RUFBTyxlQUFBO0VBQWdCLGlCQUFBO0FBK0IzQjs7QUE5Qkk7RUFBVSwwQkFBQTtFQUEyQixvQ0FBQTtFQUFxQyxnQ0FBQTtFQUFpQyx1QkFBQTtFQUMzRyxpQkFBQTtFQUFrQixtQkFBQTtFQUFvQixVQUFBO0VBQVcsZ0JBQUE7QUF3Q3JEOztBQXZDSTtFQUF1Qiw0QkFBQTtFQUE2QiwwQkFBQTtBQTRDeEQ7O0FBM0NJO0VBQVksV0FBQTtFQUFXLG1CQUFBO0VBQW9CLG9CQUFBO0VBQXFCLFdBQUE7RUFBWSxvQkFBQTtFQUFBLHVCQUFBO0FBbURoRjs7QUFsREk7RUFBVSxlQUFBO0FBc0RkOztBQXJESTtFQUFRLFdBQUE7RUFBYSxZQUFBO0FBMER6Qjs7QUF6REk7RUFBVyxjQUFBO0FBNkRmIiwiZmlsZSI6ImN1c3RvbWVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jYXJkX2Nhcntib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI2VmZWFlYTtib3JkZXItcmFkaXVzOjEycHg7fVxuICAgIC52aWV3e3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7LS1ib3JkZXItcmFkaXVzOiAyMHB4O3dpZHRoOiAxMzVweDtoZWlnaHQ6IDM1cHg7fVxuICAgIC5hY3R7IHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7LS1ib3JkZXItcmFkaXVzOjIwcHg7LS1iYWNrZ3JvdW5kOiNCMDFEMjI7cGFkZGluZzo1cHg7d2lkdGg6MTgwcHg7aGVpZ2h0OjUwcHg7fVxuICAgIC5pbWd7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO31cbiAgICAuY29sX2ltZ3tmb250LXNpemU6NzVweDt9XG4gICAgLmNvbF90ZXh0e2NvbG9yOndoaXRlOyB9XG4gICAgLmNvbF9Qe2ZvbnQtc2l6ZTogMjVweDtmb250LXdlaWdodDogYm9sZDsgfVxuICAgIC5idXR0X2NvbHt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LS1ib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7Ym9yZGVyLXJhZGl1czogMTNweDt3aWR0aDogODAlO21pbi1oZWlnaHQ6IDMwcHg7fVxuICAgIC5oZWRhZXJCYWNrZ3JvdW5kSW1hZ2V7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTt9XG4gICAgLnZpZXdCdXR0b257Y29sb3I6I2ZmZjstLWJvcmRlci1jb2xvcjojZmZmO2xldHRlci1zcGFjaW5nOiAtMXB4O3dpZHRoOiAxMDAlO3RleHQtdHJhbnNmb3JtOiBpbml0aWFsO31cbiAgICAucmVkZW1EaXZ7Zm9udC1zaXplOiAxNHB4O31cbiAgICAuaW1hZ2V7IHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDIwcHg7fVxuICAgIC5jb2xfcERpdnsgY29sb3I6I0IwMUQyMjt9Il19 */");

/***/ }),

/***/ 86774:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealerModule/customer-details/customer-details.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allocatedPointsRes?.header_title}}</ion-title>\n    <ion-buttons slot=\"start\" tappable (click)=\"gotoHomeTab()\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-row *ngIf=\"allocatedPointsRes\" class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"12\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url({{allocatedPointsRes?.header_bg}});\" class=\"hedaerBackgroundImage ion-padding\">\n        <ion-row *ngFor=\"let item of allocatedPointsRes?.user_data\" >\n          <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"3\" size-lg=\"4\"  push-lg=\"1\" push-md=\"1\">\n            <h6 class=\"ion-no-margin \">{{item?.key}}</h6>\n          </ion-col>\n          <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\">\n            <h6 class=\"ion-no-margin ion-text-center\">:</h6>\n          </ion-col>\n          <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"3\" size-lg=\"4\"  push-lg=\"1\" push-md=\"1\">\n            <h6 class=\"ion-no-margin\">{{item.value}}</h6>\n          </ion-col>\n        </ion-row>\n        <br>\n        <ion-row *ngIf=\"allocatedPointsRes?.footer\" (click)=\"customer_list()\">\n          <ion-col size=\"5\" class=\"ion-text-right\">\n            <img [src]=\"allocatedPointsRes?.footer?.icon\" class=\"image\" />\n          </ion-col>\n          <ion-col size=\"7\" class=\"col_pDiv\"><p class=\"ion-no-margin\" >{{allocatedPointsRes?.footer?.text}}</p></ion-col>\n        </ion-row>\n      </div>\n      <br>\n        <ion-row  *ngIf=\"allocatedPointsRes?.point_data\">\n          <ion-col>\n            <div style=\"background-image: url({{allocatedPointsRes?.point_data?.background_image}});\" class=\"hedaerBackgroundImage\">\n              <!-- <ion-grid> -->\n               <ion-row >\n                 <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\"  class=\"col_img\">\n                   <img [src]=\"allocatedPointsRes?.point_data?.coin_icon\" class=\"img\">\n                 </ion-col>\n                 <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" class=\"col_text\">\n                   <p style=\"margin-bottom:0px;\">{{allocatedPointsRes?.point_data?.available_balance_string}}</p>                \n                  <p class=\"col_P ion-no-margin\">{{allocatedPointsRes?.point_data?.available_balance}}</p>\n                </ion-col>\n                <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" class=\"colom1\">\n                  <ion-row *ngFor=\"let ki of allocatedPointsRes?.point_data?.other_arr\">\n                    <ion-col class=\"ion-no-padding\" *ngIf = \"ki?.btn_applicable == true\">\n                      <ion-button fill=\"outline\" shape=\"round\" size=\"small\" class=\"viewButton\" (click)=\"goToRedeem(ki)\">{{ki?.btn_text}}</ion-button>\n                    </ion-col>\n                  </ion-row>\n                  <!-- <ion-button fill=\"outline\" shape=\"round\" size=\"small\" class=\"viewButton\">Purchase History</ion-button> -->\n                  <!-- <ion-button fill=\"outline\" shape=\"round\" size=\"small\" class=\"viewButton\">Redeem</ion-button> -->\n                </ion-col>\n               </ion-row>\n               <ion-row class=\"col_text\">\n                 <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" class=\"ion-text-center\"><p class=\"ion-no-margin redemDiv\">\n                   {{allocatedPointsRes?.point_data?.debit_string}}&nbsp;{{allocatedPointsRes?.point_data?.total_debits}}</p></ion-col>\n                 <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" class=\"ion-text-center\">|</ion-col>\n                <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\"><p class=\"ion-no-margin redemDiv\">\n                  {{allocatedPointsRes?.point_data?.total_balance_string}}&nbsp;{{allocatedPointsRes?.point_data?.total_credits}}</p>\n                </ion-col>\n               </ion-row>\n              <!-- </ion-grid> -->\n            </div>\n          </ion-col>\n        </ion-row>\n     \n        <ion-row *ngIf=\"allocatedPointsRes?.statement?.show_statement_btn==true\">\n          <ion-col class=\"colom\">\n            <ion-button class=\"act\" tappable (click) = \"redemption_report(allocationData)\">{{allocatedPointsRes?.statement?.statement_text}}</ion-button>\n          </ion-col>\n        </ion-row>\n     \n      <!-- </div> -->\n      </ion-col>\n      </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dealerModule_customer-details_customer-details_module_ts-es2015.js.map