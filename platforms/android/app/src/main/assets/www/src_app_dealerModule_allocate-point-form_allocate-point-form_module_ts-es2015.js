(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_dealerModule_allocate-point-form_allocate-point-form_module_ts"],{

/***/ 86393:
/*!****************************************************************************************!*\
  !*** ./src/app/dealerModule/allocate-point-form/allocate-point-form-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocatePointFormPageRoutingModule": function() { return /* binding */ AllocatePointFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _allocate_point_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allocate-point-form.page */ 31061);




const routes = [
    {
        path: '',
        component: _allocate_point_form_page__WEBPACK_IMPORTED_MODULE_0__.AllocatePointFormPage
    }
];
let AllocatePointFormPageRoutingModule = class AllocatePointFormPageRoutingModule {
};
AllocatePointFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllocatePointFormPageRoutingModule);



/***/ }),

/***/ 7926:
/*!********************************************************************************!*\
  !*** ./src/app/dealerModule/allocate-point-form/allocate-point-form.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocatePointFormPageModule": function() { return /* binding */ AllocatePointFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _allocate_point_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allocate-point-form-routing.module */ 86393);
/* harmony import */ var _allocate_point_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allocate-point-form.page */ 31061);







let AllocatePointFormPageModule = class AllocatePointFormPageModule {
};
AllocatePointFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _allocate_point_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllocatePointFormPageRoutingModule
        ],
        declarations: [_allocate_point_form_page__WEBPACK_IMPORTED_MODULE_1__.AllocatePointFormPage]
    })
], AllocatePointFormPageModule);



/***/ }),

/***/ 31061:
/*!******************************************************************************!*\
  !*** ./src/app/dealerModule/allocate-point-form/allocate-point-form.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocatePointFormPage": function() { return /* binding */ AllocatePointFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_allocate_point_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./allocate-point-form.page.html */ 43679);
/* harmony import */ var _allocate_point_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allocate-point-form.page.scss */ 28197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);






// import{RedeemotpPage} from '../../redeemotp/redeemotp.page';



let AllocatePointFormPage = class AllocatePointFormPage {
    constructor(apiService, zone, loadingController, navCtrl, sendData, route, modalCtrl) {
        this.apiService = apiService;
        this.zone = zone;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.sendData = sendData;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.bagsCount = "";
        this.pointAllocatedRes = 0;
        this.btnText = "Submit";
        this.btnDisable = false;
        this.maxBagLimit = 0;
        this.Invoice = '';
        this.dealerHomeData = this.sendData.alldata;
        this.maxBagLimit = parseInt(this.sendData.alldata.max_bag_limit);
        console.log('previousePageData==> ', this.dealerHomeData);
        console.log("bag Count==", this.bagsCount);
    }
    ngOnInit() {
        this.fetchmonthData();
    }
    checkBagCount(ev) {
        console.log('bageCount', ev);
        if (parseInt(ev.detail.value) > this.dealerHomeData.max_bag_limit) {
            this.apiService.showToastMessage('Maximum' + ' ' + this.dealerHomeData.max_bag_limit + ' ' + 'bags allowed', 'top', 2000, 'redBg');
        }
    }
    gotoHomeTab() {
        this.apiService.isSelected = 'true';
        console.log("this.apiService.isSelected000000", this.apiService.isSelected);
        // alert(this.apiService.isSelected)
    }
    fetchmonthData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield this.loading.present();
            let apiKey = {
                "search_str": "",
                "request_type": "brandAllocateMonth",
                "request_user_type": this.dealerHomeData.employee_type
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.searchApiUrl, apiKey).subscribe((result) => {
                console.log('allocatedMonthData', result);
                this.loading.dismiss();
                if (result.success == 1) {
                    this.budgetMonth = result.data;
                }
                else {
                    this.apiService.showToastMessage(JSON.stringify(result.message), 'top', 3000, 'redBg');
                    this.navCtrl.pop();
                }
            }, err => {
                this.loading.dismiss();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    fetchData(productName, count) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                let proName = yield productName;
                let apiKey = {
                    "search_str": "",
                    "request_type": proName,
                    "request_user_type": this.dealerHomeData.employee_type,
                    'dealer_budget_id': this.budgetId
                };
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.searchApiUrl, apiKey).subscribe((result) => {
                    if (count == this.dataList.length - 1) {
                        this.loading.dismiss();
                    }
                    if (result.success == 1) {
                        if (productName == 'product') {
                            this.productList = result.data;
                            console.log('productlist==>', this.productList);
                        }
                        else if (productName == 'brand') {
                            this.brandList = result.data;
                            console.log('brandList==>', this.brandList);
                        }
                    }
                    else {
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                    if (count == this.dataList.length - 1) {
                        this.loading.dismiss();
                    }
                });
            }));
        });
    }
    checkBrandValue(ev, data) {
        console.log('ev', ev);
        console.log('brand data ', data);
        this.brandId = data.auto_id;
    }
    checkProdValue(ev, data) {
        console.log('ev', ev);
        console.log('prouct data ', data);
        this.prodId = data.auto_id;
        this.pointAllocatedRes = data.points_allocated;
    }
    checkBudgetValue(ev, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('ev', ev);
            console.log('prouct data ', data);
            this.minDate = data.min_date;
            this.maxDate = data.max_date;
            this.budgetId = data.auto_id;
            this.dataList = ['product', 'brand'];
            for (let i = 0; i < this.dataList.length; i++) {
                this.fetchData(this.dataList[i], i);
                if (i == 0) {
                    this.loading = yield this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                    });
                    yield this.loading.present();
                }
            }
        });
    }
    gotoSubmit() {
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.btnText = 'Please wait...';
            this.btnDisable = true;
            let apiKey = {
                "allocate_to": this.dealerHomeData.customer_id,
                "brand_id": this.brandId,
                "product_id": this.prodId,
                "sell_date": this.myDate,
                "bag_number": this.bagsCount,
                'budget_id': this.budgetId,
                "invoice_number": this.Invoice
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.pointAllocateApiUrl, apiKey).subscribe((result) => {
                this.btnText = 'Submit';
                this.btnDisable = false;
                if (result.success == 1) {
                    // this.brandId=''
                    //  this.budMonthOpt='';
                    this.myDate = '';
                    // this.budgetMonth=''
                    //  this.budMonthOpt='';
                    // this.productList=[];
                    // this.fetchmonthData();
                    //  this.budgetMonth='';
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.bagsCount = '';
                    //  this.route.navigate(['/tabs/customer-allocation']);
                    // window.history.go(-1);
                    // this.navCtrl.navigateBack('/customer-allocation');
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        }));
    }
};
AllocatePointFormPage.ctorParameters = () => [
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
AllocatePointFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-allocate-point-form',
        template: _raw_loader_allocate_point_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_allocate_point_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AllocatePointFormPage);



/***/ }),

/***/ 28197:
/*!********************************************************************************!*\
  !*** ./src/app/dealerModule/allocate-point-form/allocate-point-form.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p, ion-label {\n  color: var(--headerColor) !important;\n}\n\np.totalPoint {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.container {\n  padding: 1% 5%;\n}\n\n.whiteBg {\n  background-color: #fff;\n  border: 1px solid #cdcdcd;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 10px;\n  box-shadow: 1px 1px 16px 1px #cdcdcd;\n}\n\n.redbgDiv {\n  --background: linear-gradient(195deg, #bb2929 57%, var(--headerColor) 33%) !important;\n  border-radius: 7px;\n}\n\n.fullNamediv {\n  color: white !important;\n  font-weight: bold;\n  margin: 6px 0px 6px 0px;\n}\n\n.BTmmm {\n  width: 60% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbG9jYXRlLXBvaW50LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsb0NBQUE7QUFFYjs7QUFEQTtFQUFhLGVBQUE7RUFBZ0IsaUJBQUE7QUFNN0I7O0FBTEE7RUFBWSxjQUFBO0FBU1o7O0FBUkE7RUFBUyxzQkFBQTtFQUFzQix5QkFBQTtFQUF5QixtQkFBQTtFQUFtQixnQkFBQTtFQUFnQixhQUFBO0VBQWEsb0NBQUE7QUFpQnhHOztBQWhCQTtFQUFVLHFGQUFBO0VBQXNGLGtCQUFBO0FBcUJoRzs7QUFwQkE7RUFBYSx1QkFBQTtFQUF3QixpQkFBQTtFQUFrQix1QkFBQTtBQTBCdkQ7O0FBekJBO0VBQU8scUJBQUE7QUE2QlAiLCJmaWxlIjoiYWxsb2NhdGUtcG9pbnQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLCBpb24tbGFiZWx7Y29sb3I6IHZhcigtLWhlYWRlckNvbG9yKSAhaW1wb3J0YW50O31cbnAudG90YWxQb2ludHtmb250LXNpemU6IDEycHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxuLmNvbnRhaW5lcnsgcGFkZGluZzogMSUgNSU7fVxuLndoaXRlQmd7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NkY2RjZDtib3JkZXItcmFkaXVzOjEwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MTBweDtib3gtc2hhZG93OjFweCAxcHggMTZweCAxcHggI2NkY2RjZDt9XG4ucmVkYmdEaXZ7LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLCAjYmIyOTI5IDU3JSwgdmFyKC0taGVhZGVyQ29sb3IpIDMzJSkgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOiA3cHg7fVxuLmZ1bGxOYW1lZGl2e2NvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OiBib2xkO21hcmdpbjogNnB4IDBweCA2cHggMHB4O31cbi5CVG1tbXt3aWR0aDogNjAlICFpbXBvcnRhbnQ7fSJdfQ== */");

/***/ }),

/***/ 43679:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealerModule/allocate-point-form/allocate-point-form.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Allocate Bags</ion-title>\n    <ion-buttons slot=\"start\" tappable (click)=\"gotoHomeTab()\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding\">\n      <ion-list>\n        <ion-item lines=\"none\" class=redbgDiv>\n          <p  class=\"fullNamediv\">{{dealerHomeData?.full_name}},&nbsp;{{dealerHomeData?.contact}}</p>\n        </ion-item>\n        <ion-item *ngIf=\"budgetMonth && budgetMonth?.length>=1\">\n          <ion-label position=\"stacked\">Month</ion-label>\n          <ion-select [(ngModel)]=\"budMonthOpt\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"checkBudgetValue($event,budMonthOpt )\"  interface=\"popover\">\n            <ion-select-option *ngFor=\"let budMonthOpt of budgetMonth\" [value]=\"budMonthOpt\" class=\"w100\">{{budMonthOpt?.budget_month}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"brandList && brandList?.length>=1\">\n          <ion-label position=\"stacked\">Brands</ion-label>\n          <ion-select [(ngModel)]=\"brandOption\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"checkBrandValue($event,brandOption )\"  interface=\"popover\">\n            <ion-select-option *ngFor=\"let brandOption of brandList\" [value]=\"brandOption\" class=\"w100\">{{brandOption?.brand_name}} </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n  \n  \n        <ion-item  *ngIf=\"productList && productList?.length>=1\">\n          <ion-label position=\"stacked\">Product</ion-label>\n          <ion-select  [(ngModel)]=\"productOption\"  okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"checkProdValue($event,productOption )\"  interface=\"popover\">\n            <ion-select-option *ngFor=\"let productOption of productList\" [value]=\"productOption\" class=\"w100\">  {{productOption?.product_name}} </ion-select-option>\n          </ion-select>\n        </ion-item>\n  <!-- {{minmonth}} -->\n        <ion-item *ngIf=\"brandList && brandList?.length>=1\">\n          <ion-label position=\"stacked\">Date</ion-label>\n          <ion-datetime placeholder=\"Select Allocation Date\"  min={{minDate}} max={{maxDate}} \n          displayFormat=\"MMM/DD/YYYY\" [(ngModel)]=\"myDate\"></ion-datetime>\n          <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" >Invoice No.</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"Invoice\" ></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\" >No. of Bags</ion-label>\n          <!-- <ion-input type=\"tel\" [(ngModel)]=\"bagsCount\" ></ion-input> -->\n          <ion-input type=\"tel\" [(ngModel)]=\"bagsCount\" (ionChange)=\"checkBagCount($event)\"></ion-input>\n        </ion-item>\n        <!-- {{dealerHomeData?.max_bag_limit}} -->\n        <!-- <ion-item *ngIf=\"bagsCount>0\" lines=\"none\">\n          <p class=\"totalPoint\">Points: {{bagsCount}}</p>\n          <p class=\"totalPoint\">Points: {{bagsCount*pointAllocatedRes}}</p>\n        </ion-item> -->\n     \n      </ion-list>\n  <br>\n  <ion-row >\n   <ion-col  class=\" ion-text-center\">\n   <ion-button [disabled]=\"!brandOption || !productOption || bagsCount<=0\n     || btnDisable==true  || !myDate || maxBagLimit<bagsCount\"  class=\"ionic_btn BTmmm\" tappable (click)=\"gotoSubmit()\">{{btnText}}</ion-button>\n   <!-- || bagsCount>maxBagLimit |||| bagsCount<=0-->\n   <!-- bagsCount>0 -->\n  <br>\n  <br>\n    </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n    <!-- <div class=\"whiteBg\"> -->\n  \n<!-- </div> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dealerModule_allocate-point-form_allocate-point-form_module_ts-es2015.js.map