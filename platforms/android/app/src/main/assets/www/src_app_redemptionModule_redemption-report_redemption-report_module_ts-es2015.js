(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_redemption-report_redemption-report_module_ts"],{

/***/ 90799:
/*!****************************************************************************************!*\
  !*** ./src/app/redemptionModule/redemption-report/redemption-report-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedemptionReportPageRoutingModule": function() { return /* binding */ RedemptionReportPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _redemption_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redemption-report.page */ 96260);




const routes = [
    {
        path: '',
        component: _redemption_report_page__WEBPACK_IMPORTED_MODULE_0__.RedemptionReportPage
    }
];
let RedemptionReportPageRoutingModule = class RedemptionReportPageRoutingModule {
};
RedemptionReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedemptionReportPageRoutingModule);



/***/ }),

/***/ 51092:
/*!********************************************************************************!*\
  !*** ./src/app/redemptionModule/redemption-report/redemption-report.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedemptionReportPageModule": function() { return /* binding */ RedemptionReportPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _redemption_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redemption-report-routing.module */ 90799);
/* harmony import */ var _redemption_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redemption-report.page */ 96260);







let RedemptionReportPageModule = class RedemptionReportPageModule {
};
RedemptionReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redemption_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedemptionReportPageRoutingModule
        ],
        declarations: [_redemption_report_page__WEBPACK_IMPORTED_MODULE_1__.RedemptionReportPage]
    })
], RedemptionReportPageModule);



/***/ }),

/***/ 96260:
/*!******************************************************************************!*\
  !*** ./src/app/redemptionModule/redemption-report/redemption-report.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedemptionReportPage": function() { return /* binding */ RedemptionReportPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_redemption_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./redemption-report.page.html */ 64565);
/* harmony import */ var _redemption_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redemption-report.page.scss */ 31524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);










let RedemptionReportPage = class RedemptionReportPage {
    constructor(route, platform, zone, sendData, localStorage, apiService) {
        this.route = route;
        this.platform = platform;
        this.zone = zone;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.serverData = [];
        this.allocationHomeData = this.sendData.alldata;
        console.log('allocationHomeData', this.allocationHomeData);
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
    }
    ngOnInit() {
        if (this.allocationHomeData.requestType == 'customer') {
            console.log('this.alll', this.allocationHomeData);
            this.loginData = this.allocationHomeData.item.customer_id;
            this.transectionHistory();
        }
        else {
            this.localStorage.getStorage().then(storedData => {
                console.log('storedData', storedData);
                this.loginData = storedData.allStoreData.user_id;
                this.transectionHistory();
            });
        }
    }
    gotoHomeTab() {
        this.localStorage.getStorage().then(storedData => {
            console.log('storedData', storedData);
            this.employee_type = storedData.allStoreData.employee_type;
            if (this.employee_type == '3' || this.employee_type == '4') {
                this.apiService.isSelected = '';
                console.log('storedData', this.employee_type);
            }
            else if (this.employee_type == '2') {
                this.apiService.isSelected = 'true';
            }
        });
    }
    view() {
        this.route.navigate(['./dealer-allocat']);
    }
    transectionHistory() {
        this.zone.run(() => {
            let apiKey = {
                "request_for": this.loginData,
                "request_type": this.allocationHomeData.requestType,
                "request_user_type": this.allocationHomeData.employee_type,
                "dealer_id": this.allocationHomeData.dealer_id
            };
            console.log('login data response', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.reedemTransectionUrl, apiKey).subscribe((result) => {
                console.log('login data response', result);
                this.server = result;
                if (result.success == 1) {
                    this.serverData = result.data;
                    this.errorMessage = '';
                }
                else {
                    this.errorMessage = result.message;
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
RedemptionReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
RedemptionReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-redemption-report',
        template: _raw_loader_redemption_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_redemption_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RedemptionReportPage);



/***/ }),

/***/ 31524:
/*!********************************************************************************!*\
  !*** ./src/app/redemptionModule/redemption-report/redemption-report.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".act {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: #B01D22 !important;\n  color: #B01D22 !important;\n  border: 1px solid;\n  border-radius: 5px;\n  width: 90%;\n}\n\n.seg {\n  padding: 15px;\n}\n\n.titleDiv, .titleDiv1 {\n  color: #B01D22;\n}\n\n.titleDiv {\n  font-size: 15px;\n}\n\n.titleDiv1 {\n  font-size: 14px;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-row {\n  background: #B01D22;\n  color: #fff;\n  font-size: 14px;\n}\n\n.co_ro {\n  border-left: 1px solid #ECEEEF;\n}\n\n.co_ro p {\n  font-size: 12px;\n}\n\nion-text {\n  font-size: 16px;\n}\n\n.act1 {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: #B01D22 !important;\n  color: #B01D22 !important;\n  border: 1px solid;\n  border-radius: 8px;\n  width: 50%;\n  height: 20px;\n}\n\n.table {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n}\n\n.table_start {\n  padding-top: 20px;\n}\n\n.pinkBg {\n  background-color: #f2e8e8;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVtcHRpb24tcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQTtFQUFjLGVBQUE7QUFJZDs7QUFIQTtFQUFXLGVBQUE7QUFPWDs7QUFOQTtFQUNJLDJCQUFBO0FBU0o7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFTSjs7QUFOQTtFQUNJLDRCQUFBO0FBU0o7O0FBTkE7RUFDSSw2QkFBQTtBQVNKOztBQVBBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVBFO0VBQ0UsOEJBQUE7QUFVSjs7QUFUSTtFQUFFLGVBQUE7QUFZTjs7QUFWRTtFQUNJLGVBQUE7QUFhTjs7QUFYRTtFQUNFLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0UsaUJBQUE7RUFDRixrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkU7RUFDRSxtQ0FBQTtBQWVKOztBQWJFO0VBQ0ksaUJBQUE7QUFnQk47O0FBZEU7RUFBUSx5QkFBQTtBQWtCVjs7QUFqQkU7RUFBbUIsNEJBQUE7RUFDakIsc0JBQUE7RUFBdUIsWUFBQTtFQUN2QiwyQkFBQTtBQXNCSiIsImZpbGUiOiJyZWRlbXB0aW9uLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0e1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOjkwJTtcbn1cbi5zZWd7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi50aXRsZURpdiwudGl0bGVEaXYxe1xuICAgIGNvbG9yOiAjQjAxRDIyO1xuXG59XG4udGl0bGVEaXZ7ICAgIGZvbnQtc2l6ZTogMTVweDt9XG4udGl0bGVEaXYxe2ZvbnQtc2l6ZTogMTRweDt9XG4uaGVhZGVyIC5jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xufVxuXG4uY29sIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbn1cbi5oZWFkZXItcm93IHtcbiAgICBiYWNrZ3JvdW5kOiAgI0IwMUQyMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5jb19yb3tcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFQ0VFRUY7XG4gICAgcHtmb250LXNpemU6IDEycHg7fVxuICB9XG4gIGlvbi10ZXh0e1xuICAgICAgZm9udC1zaXplOjE2cHg7XG4gIH1cbiAgLmFjdDF7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNCMDFEMjIgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC50YWJsZXtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI2VmZWFlYTtcbiAgfVxuICAudGFibGVfc3RhcnR7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAucGlua0Jne2JhY2tncm91bmQtY29sb3I6ICNmMmU4ZTg7fVxuICAuYmdXYWxsZXRJbWFnZXsgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO3BhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fSJdfQ== */");

/***/ }),

/***/ 64565:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redemptionModule/redemption-report/redemption-report.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{server?.header_title}}</ion-title>\n    <ion-buttons slot=\"start\" tappable (click)=\"gotoHomeTab()\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\" class=\"ion-padding\">\n    <ion-row class=\"ion-justify-content-center \">\n      <ion-col *ngIf=\"server?.data\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\"\n      class=\"whiteCol table\" [ngClass]=\"{'boundary1':  platform.width()>740}\">\n      <!-- <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n      </div> -->\n       <div class=\"\" [ngClass]=\"[platform?.is(desktop) ? 'ion-padding' : 'ion-no-padding']\">\n         <ion-row class=\"header-row\">\n          <ion-col class=\"co_ro\" *ngFor=\"let item of server?.header_data\">\n            <p class=\"ion-text-center ion-no-margin\">{{item}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let data of serverData; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n          <ion-col class=\"co_ro\">\n            <p class=\"ion-no-margin ion-text-center\">{{data?.created_date}}</p>\n          </ion-col>\n          <ion-col class=\"co_ro\">\n            <p class=\"ion-no-margin ion-text-center\">{{data?.bill_month}}</p>\n          </ion-col>\n          <ion-col class=\"co_ro\">\n            <p class=\"ion-no-margin ion-text-center\" *ngIf=\"allocationHomeData.requestType!='customer'\">{{data?.description}}</p>\n            <p class=\"ion-no-margin ion-text-center\" *ngIf=\"allocationHomeData.requestType=='customer'\">{{data?.brand_name}}</p>\n          </ion-col>\n          <ion-col class=\"co_ro\">\n            <p class=\"ion-no-margin ion-text-center\" *ngIf=\"allocationHomeData.requestType!='customer'\">{{data?.debit}}</p>\n            <p class=\"ion-no-margin ion-text-center\" *ngIf=\"allocationHomeData.requestType=='customer'\">{{data?.bags}}</p>\n          </ion-col>\n        </ion-row>\n       </div>\n         </ion-col>\n         </ion-row>\n         <div *ngIf=\"errorMessage!=''\">\n          <p class=\"ion-text-center\">{{errorMessage}}</p>\n        </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_redemptionModule_redemption-report_redemption-report_module_ts-es2015.js.map