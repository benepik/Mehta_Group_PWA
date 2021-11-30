(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_quickModule_product-catalogue_product-catalogue_module_ts"],{

/***/ 29708:
/*!***********************************************************************************!*\
  !*** ./src/app/quickModule/product-catalogue/product-catalogue-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCataloguePageRoutingModule": function() { return /* binding */ ProductCataloguePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _product_catalogue_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-catalogue.page */ 23458);




const routes = [
    {
        path: '',
        component: _product_catalogue_page__WEBPACK_IMPORTED_MODULE_0__.ProductCataloguePage
    }
];
let ProductCataloguePageRoutingModule = class ProductCataloguePageRoutingModule {
};
ProductCataloguePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductCataloguePageRoutingModule);



/***/ }),

/***/ 2911:
/*!***************************************************************************!*\
  !*** ./src/app/quickModule/product-catalogue/product-catalogue.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCataloguePageModule": function() { return /* binding */ ProductCataloguePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _product_catalogue_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-catalogue-routing.module */ 29708);
/* harmony import */ var _product_catalogue_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-catalogue.page */ 23458);







let ProductCataloguePageModule = class ProductCataloguePageModule {
};
ProductCataloguePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_catalogue_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductCataloguePageRoutingModule
        ],
        declarations: [_product_catalogue_page__WEBPACK_IMPORTED_MODULE_1__.ProductCataloguePage]
    })
], ProductCataloguePageModule);



/***/ }),

/***/ 23458:
/*!*************************************************************************!*\
  !*** ./src/app/quickModule/product-catalogue/product-catalogue.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCataloguePage": function() { return /* binding */ ProductCataloguePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_product_catalogue_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-catalogue.page.html */ 47953);
/* harmony import */ var _product_catalogue_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-catalogue.page.scss */ 16536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);










let ProductCataloguePage = class ProductCataloguePage {
    constructor(route, platform, zone, apiService, sendData, localStorage) {
        this.route = route;
        this.platform = platform;
        this.zone = zone;
        this.apiService = apiService;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.productBrand = [];
    }
    ngOnInit() {
        this.product_icon();
    }
    product_icon() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {};
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.BrandProductUrl, apiKey).subscribe((result) => {
                this.apiService.presentLoadingClose();
                if (result.success == '1' || result.success == '1') {
                    this.productBrand = result.data;
                }
            });
        });
    }
    product_cs(id) {
        this.sendData.item = id;
        this.route.navigate(['./product-detail']);
    }
};
ProductCataloguePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService }
];
ProductCataloguePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-product-catalogue',
        template: _raw_loader_product_catalogue_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_catalogue_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductCataloguePage);



/***/ }),

/***/ 16536:
/*!***************************************************************************!*\
  !*** ./src/app/quickModule/product-catalogue/product-catalogue.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product_cs {\n  box-shadow: 0px 0px 11px 5px #dedbdb;\n  border-radius: 10px;\n  height: 100%;\n}\n\n.prd_cs_p {\n  font-weight: bold;\n  font-size: 14px;\n  color: #e4a691;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2F0YWxvZ3VlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoicHJvZHVjdC1jYXRhbG9ndWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RfY3N7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IDVweCAjZGVkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG4ucHJkX2NzX3B7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZTRhNjkxO1xufSJdfQ== */");

/***/ }),

/***/ 47953:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quickModule/product-catalogue/product-catalogue.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Product List</ion-title>\n    <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <div class=\"container1\">\n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding\">\n      <ion-row>\n        <ion-col class=\"ion-text-center\" [size]=\"12\" size-lg=\"6\" size-sm=\"12\"  size-md=\"12\" *ngFor=\"let item of productBrand\">\n          <div class=\"product_cs\" (click)=\"product_cs(item)\">\n            <img [src]=\"item?.media\">\n            <p class=\"prd_cs_p\">{{item?.alias_name}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-col>\n      </ion-row>\n      </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_quickModule_product-catalogue_product-catalogue_module_ts-es2015.js.map