(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["default-src_app_dealerModule_customer-allocation_customer-allocation_module_ts"],{

/***/ 68528:
/*!****************************************************************************************!*\
  !*** ./src/app/dealerModule/customer-allocation/customer-allocation-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerAllocationPageRoutingModule": function() { return /* binding */ CustomerAllocationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_allocation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-allocation.page */ 42569);




const routes = [
    {
        path: '',
        component: _customer_allocation_page__WEBPACK_IMPORTED_MODULE_0__.CustomerAllocationPage
    }
];
let CustomerAllocationPageRoutingModule = class CustomerAllocationPageRoutingModule {
};
CustomerAllocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerAllocationPageRoutingModule);



/***/ }),

/***/ 71689:
/*!********************************************************************************!*\
  !*** ./src/app/dealerModule/customer-allocation/customer-allocation.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerAllocationPageModule": function() { return /* binding */ CustomerAllocationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_allocation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-allocation-routing.module */ 68528);
/* harmony import */ var _customer_allocation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-allocation.page */ 42569);







let CustomerAllocationPageModule = class CustomerAllocationPageModule {
};
CustomerAllocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customer_allocation_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerAllocationPageRoutingModule
        ],
        declarations: [_customer_allocation_page__WEBPACK_IMPORTED_MODULE_1__.CustomerAllocationPage]
    })
], CustomerAllocationPageModule);



/***/ }),

/***/ 42569:
/*!******************************************************************************!*\
  !*** ./src/app/dealerModule/customer-allocation/customer-allocation.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerAllocationPage": function() { return /* binding */ CustomerAllocationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_allocation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer-allocation.page.html */ 83544);
/* harmony import */ var _customer_allocation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-allocation.page.scss */ 48347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);









let CustomerAllocationPage = class CustomerAllocationPage {
    constructor(zone, modalCtrl, alertController, apiService, router, platform, sendData) {
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.apiService = apiService;
        this.router = router;
        this.platform = platform;
        this.sendData = sendData;
        this.searchString = '';
        this.userData = [];
        this.infiniteScroll_call = false;
        this.value = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.value = 0;
        this.userData = [];
        this.customerAllocation(this.searchString);
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
        this.userData = [];
        this.customerAllocation(this.searchString);
    }
    customerAllocation(searchdata) {
        this.zone.run(() => {
            let apiKey = {
                "search_str": searchdata,
                "value": this.value
            };
            console.log('login data response', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.customerAllocationUrl, apiKey).subscribe((result) => {
                console.log('login data response', result);
                this.customerData = result;
                if (result.success == 1) {
                    if (this.userData == undefined) {
                        this.userData = result.data;
                    }
                    else {
                        this.userData = this.userData.concat(result.data);
                    }
                    this.errorMessage = '';
                }
                else {
                    this.errorMessage = result.message;
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
    loadData(event) {
        this.infiniteScroll_call = true;
        this.infiniteScroll_val = event;
        setTimeout(() => {
            this.value = this.userData.length;
            this.customerAllocation(this.searchString);
        }, 500);
    }
    stopInfiniteScroll() {
        if (this.infiniteScroll_call == true) {
            this.infiniteScroll_call = false;
            this.infiniteScroll_val.target.complete();
        }
    }
    view(item) {
        this.zone.run(() => {
            this.sendData.alldata = item;
            this.sendData.myParam = 'customerCheck';
            this.router.navigate(['/customer-details']);
        });
    }
    allocated(item) {
        this.zone.run(() => {
            this.sendData.alldata = item;
            this.router.navigate(['/allocate-point-form']);
        });
    }
    transectionHistory() {
        this.zone.run(() => {
            this.sendData.alldata = { "requestType": 'dealer' };
            this.router.navigate(['./redemption-report']);
        });
    }
    addCustomer(allVal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.zone.run(() => {
                this.sendData.alldata = allVal;
                this.sendData.loginKey = {
                    "type": 'Register',
                    "requestPage": 'dealer'
                };
                // this.sendData.itemDetails=dataReturned;
                this.router.navigate(['/mobile']);
            });
        });
    }
};
CustomerAllocationPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService }
];
CustomerAllocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-customer-allocation',
        template: _raw_loader_customer_allocation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_allocation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerAllocationPage);



/***/ }),

/***/ 48347:
/*!********************************************************************************!*\
  !*** ./src/app/dealerModule/customer-allocation/customer-allocation.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".act {\n  text-transform: none;\n  text-transform: initial;\n  background: linear-gradient(195deg, #bb2929 57%, var(--headerColor) 33%) !important;\n  border-radius: 8px;\n  padding: 10px;\n  width: 100%;\n  color: #fff;\n  height: 105px;\n}\n\n.btnCustomer {\n  font-size: 12px;\n  color: #fff;\n  --border-color: #fff;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.totalCount {\n  font-weight: bold;\n  font-size: 25px;\n  letter-spacing: 2px;\n}\n\n.customerPDiv {\n  color: var(--headerColor);\n  margin-top: 0px;\n}\n\n.imgIcon {\n  height: 40px;\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: auto;\n  display: block;\n}\n\nion-icon {\n  color: var(--headerColor);\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.viewButton {\n  color: white;\n  letter-spacing: 0px;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.userImageCss {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n  margin: auto;\n}\n\n.fontDiv {\n  font-size: 13px;\n  line-height: 18px;\n}\n\nion-searchbar {\n  --border-radius: 20px;\n  padding: 2px;\n  --box-shadow: 0px 0px 7px 2px #d6d1d1;\n}\n\n.padd10 {\n  padding: 10px 0px 10px 0px;\n}\n\n.fontTDiv {\n  font-size: 16px;\n}\n\n.container1 {\n  width: 100%;\n  margin: 70px auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWFsbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQUssb0JBQUE7RUFBQSx1QkFBQTtFQUF3QixtRkFBQTtFQUN6QixrQkFBQTtFQUFtQixhQUFBO0VBQWMsV0FBQTtFQUFZLFdBQUE7RUFBWSxhQUFBO0FBT2pFOztBQU5JO0VBQWEsZUFBQTtFQUFnQixXQUFBO0VBQVksb0JBQUE7RUFBcUIsb0JBQUE7RUFBQSx1QkFBQTtBQWFsRTs7QUFaSTtFQUFZLGlCQUFBO0VBQW1CLGVBQUE7RUFBZ0IsbUJBQUE7QUFrQm5EOztBQWpCSTtFQUFjLHlCQUFBO0VBQXlCLGVBQUE7QUFzQjNDOztBQXJCSTtFQUFTLFlBQUE7RUFBYSxXQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtFQUFvQixZQUFBO0VBQWEsY0FBQTtBQTZCdkU7O0FBNUJJO0VBQVMseUJBQUE7RUFBeUIsaUJBQUE7RUFBa0IsZUFBQTtBQWtDeEQ7O0FBakNJO0VBQVksWUFBQTtFQUFZLG1CQUFBO0VBQW9CLG9CQUFBO0VBQUEsdUJBQUE7QUF1Q2hEOztBQXJDSTtFQUFlLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0Isb0JBQUE7S0FBQSxpQkFBQTtFQUFrQixjQUFBO0VBQWUsWUFBQTtBQThDbkc7O0FBN0NJO0VBQVMsZUFBQTtFQUFvQixpQkFBQTtBQWtEakM7O0FBakRJO0VBQWMscUJBQUE7RUFDVixZQUFBO0VBQ0EscUNBQUE7QUFxRFI7O0FBcERJO0VBQVEsMEJBQUE7QUF3RFo7O0FBdkRJO0VBQVUsZUFBQTtBQTJEZDs7QUExREk7RUFBWSxXQUFBO0VBQVksbUJBQUE7QUErRDVCIiwiZmlsZSI6ImN1c3RvbWVyLWFsbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5hY3R7dGV4dC10cmFuc2Zvcm06IGluaXRpYWw7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5NWRlZywjYmIyOTI5IDU3JSx2YXIoLS1oZWFkZXJDb2xvcikgMzMlKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7cGFkZGluZzogMTBweDt3aWR0aDogMTAwJTtjb2xvcjogI2ZmZjtoZWlnaHQ6IDEwNXB4O31cbiAgICAuYnRuQ3VzdG9tZXJ7Zm9udC1zaXplOiAxMnB4O2NvbG9yOiAjZmZmOy0tYm9yZGVyLWNvbG9yOiAjZmZmO3RleHQtdHJhbnNmb3JtOiBpbml0aWFsO31cbiAgICAudG90YWxDb3VudHtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAyNXB4O2xldHRlci1zcGFjaW5nOiAycHg7fVxuICAgIC5jdXN0b21lclBEaXZ7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO21hcmdpbi10b3A6IDBweDt9XG4gICAgLmltZ0ljb257aGVpZ2h0OiA0MHB4O3dpZHRoOiA1MHB4O29iamVjdC1maXQ6IGNvbnRhaW47bWFyZ2luOiBhdXRvO2Rpc3BsYXk6IGJsb2NrO31cbiAgICBpb24taWNvbntjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC13ZWlnaHQ6IGJvbGQ7Zm9udC1zaXplOiAyMHB4O31cbiAgICAudmlld0J1dHRvbntjb2xvcjp3aGl0ZTtsZXR0ZXItc3BhY2luZzogMHB4O3RleHQtdHJhbnNmb3JtOiBpbml0aWFsO31cbiAgICAvLyAudmlld0J1dHRvbjF7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpOy0tYm9yZGVyLWNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7bGV0dGVyLXNwYWNpbmc6IDBweDt3aWR0aDogMTAwJTt0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDt9XG4gICAgLnVzZXJJbWFnZUNzc3sgd2lkdGg6IDQ1cHg7IGhlaWdodDogNDVweDsgYm9yZGVyLXJhZGl1czogNTAlOyBvYmplY3QtZml0OiBjb3ZlcjtkaXNwbGF5OiBibG9jazttYXJnaW46IGF1dG87fVxuICAgIC5mb250RGl2e2ZvbnQtc2l6ZTogMTNweDsgICAgbGluZS1oZWlnaHQ6IDE4cHg7fVxuICAgIGlvbi1zZWFyY2hiYXJ7LS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA3cHggMnB4ICNkNmQxZDE7fVxuICAgIC5wYWRkMTB7cGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7fVxuICAgIC5mb250VERpdntmb250LXNpemU6IDE2cHg7fVxuICAgIC5jb250YWluZXIxe3dpZHRoOiAxMDAlO21hcmdpbjogNzBweCBhdXRvIDA7fSJdfQ== */");

/***/ }),

/***/ 83544:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealerModule/customer-allocation/customer-allocation.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <ion-row *ngIf=\"customerData\" class=\"fixedData\">\n  <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding\">\n  <p [innerHTML]=\"customerData?.header_title\" class=\"customerPDiv\"></p>\n <ion-row >\n   <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" >\n     <div class=\"act ion-text-center\">\n       <p [innerHTML]=\"customerData?.header_arr?.first_div?.title\" class=\"ion-no-margin fontTDiv\"></p>\n       <p [innerHTML]=\"customerData?.header_arr?.first_div?.total_customers\" class=\"totalCount ion-no-margin\"></p>\n       <ion-button *ngIf=\"customerData?.header_arr?.first_div?.button_applicable==true\" fill=\"outline\" \n       class=\"btnCustomer\" shape=\"round\" size=\"small\" tappable (click)=\"addCustomer(customerData?.header_arr?.first_div)\">\n       {{customerData?.header_arr?.first_div?.button_text}}</ion-button>\n     </div>\n\n   </ion-col>\n   <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" >\n     <div class=\"act ion-text-center\">\n       <img [src]=\"customerData?.header_arr?.second_div?.icon\" onerror=\"this.src='./assets/watermark/watermark.png'\" class=\"imgIcon\">\n       <ion-button *ngIf=\"customerData?.header_arr?.second_div?.button_applicable==true\" tappable (click)=\"transectionHistory()\" \n       fill=\"outline\" class=\"btnCustomer\" shape=\"round\" size=\"small\">{{customerData?.header_arr?.second_div?.button_text}}</ion-button>\n     </div>\n\n     \n   </ion-col>\n </ion-row>\n <div class=\"borderBtmDiv padd10\">\n  <ion-searchbar placeholder=\"Search Customer\"  [(ngModel)]=\"searchString\" (ionChange)=\"searchCustomer($event)\"></ion-searchbar>\n</div>\n</ion-col>\n</ion-row> -->\n<ion-content>\n  <div class=\"container1\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding\">\n     <div  class=\"fixedData\"> \n       <p [innerHTML]=\"customerData?.header_title\" class=\"customerPDiv\"></p>\n      <ion-row >\n        <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" >\n          <div class=\"act ion-text-center\">\n            <p [innerHTML]=\"customerData?.header_arr?.first_div?.title\" class=\"ion-no-margin fontTDiv\"></p>\n            <p [innerHTML]=\"customerData?.header_arr?.first_div?.total_customers\" class=\"totalCount ion-no-margin\"></p>\n            <ion-button *ngIf=\"customerData?.header_arr?.first_div?.button_applicable==true\" fill=\"outline\" \n            class=\"btnCustomer\" shape=\"round\" size=\"small\" tappable (click)=\"addCustomer(customerData?.header_arr?.first_div)\">\n            {{customerData?.header_arr?.first_div?.button_text}}</ion-button>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" >\n          <div class=\"act ion-text-center\">\n            <img [src]=\"customerData?.header_arr?.second_div?.icon\" onerror=\"this.src='./assets/watermark/watermark.png'\" class=\"imgIcon\">\n            <ion-button *ngIf=\"customerData?.header_arr?.second_div?.button_applicable==true\" tappable (click)=\"transectionHistory()\" \n            fill=\"outline\" class=\"btnCustomer\" shape=\"round\" size=\"small\"\n            [ngClass]=\"{'widthtotalDiv': platform?.is('mobile')}\" >{{customerData?.header_arr?.second_div?.button_text}}</ion-button>\n            \n          </div>\n\n        </ion-col>\n      </ion-row>\n      <div class=\"borderBtmDiv padd10\">\n        <ion-searchbar placeholder=\"Search Customer\"  [(ngModel)]=\"searchString\" (ionChange)=\"searchCustomer($event)\"></ion-searchbar>\n      </div> \n    </div>\n      <ion-row *ngFor=\"let item of userData\" class=\"borderBtmDiv\">\n        <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\">\n          <img [src]=\"item?.user_image\" onerror=\"this.src='./assets/watermark/watermark.png'\" class=\"userImageCss\">\n        </ion-col>\n        <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n          <p [innerHTML]=\"item?.full_name\" class=\"ion-no-margin fontDiv\"></p>\n          <p [innerHTML]=\"item?.contact\" class=\"ion-no-margin fontDiv\"></p>\n          <p class=\"ion-no-margin fontDiv\">{{item?.registration_sts}}{{item?.user_registration_status}}</p>\n          <p *ngIf=\"item?.remaining_points!=''\" [innerHTML]=\"item?.remaining_points\" class=\"ion-no-margin fontDiv\"></p>\n        </ion-col>\n        <ion-col *ngIf=\"!platform?.is('mobile')\"  size-md=\"2\" size-lg=\"2\" class=\"ion-text-center ion-no-padding autoMargin\">\n          <ion-button *ngIf=\"item?.view_profile_btn_applicable=='1'\" class=\"viewButton\" tappable (click)=\"view(item)\"\n           size=\"small\" color=\"danger\">{{item?.view_profile_btn}}</ion-button>\n          <!-- <ion-button *ngIf=\"item?.allocate_btn_applicable=='1'\" class=\"viewButton\" tappable (click)=\"allocated(item)\"\n          fill=\"outline\" shape=\"round\" size=\"small\">{{item?.allocate_btn}}</ion-button> -->\n        </ion-col>\n        <ion-col *ngIf=\"!platform?.is('mobile')\" size-md=\"2\" size-lg=\"2\" class=\"ion-text-center ion-no-padding autoMargin\">\n          <!-- <ion-button *ngIf=\"item?.view_profile_btn_applicable=='1'\" class=\"viewButton\" tappable (click)=\"view(item)\"\n          fill=\"outline\" shape=\"round\" size=\"small\">{{item?.view_profile_btn}}</ion-button> -->\n          <ion-button *ngIf=\"item?.allocate_btn_applicable=='1'\" class=\"viewButton\" tappable (click)=\"allocated(item)\"\n           size=\"small\" color=\"danger\">{{item?.allocate_btn}}</ion-button>\n        </ion-col>\n        <ion-col *ngIf=\"platform?.is('mobile')\" [size]=\"4\" size-sm=\"4\" size-md=\"2\" size-lg=\"2\" class=\"ion-text-center ion-no-padding\">\n          <ion-button *ngIf=\"item?.view_profile_btn_applicable=='1'\" class=\"viewButton widthtotalDiv\" tappable (click)=\"view(item)\"\n          color=\"danger\" size=\"small\">{{item?.view_profile_btn}}</ion-button>\n          <ion-button *ngIf=\"item?.allocate_btn_applicable=='1'\" class=\"viewButton widthtotalDiv\" tappable (click)=\"allocated(item)\"\n          color=\"danger\" size=\"small\">{{item?.allocate_btn}}</ion-button>\n        </ion-col>\n      </ion-row>\n      <!-- </div> -->\n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n  <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_dealerModule_customer-allocation_customer-allocation_module_ts-es2015.js.map