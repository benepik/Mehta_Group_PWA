(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_purchasehistory_purchasehistory_module_ts"],{

/***/ 17966:
/*!************************************************************************************!*\
  !*** ./src/app/redemptionModule/purchasehistory/purchasehistory-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasehistoryPageRoutingModule": function() { return /* binding */ PurchasehistoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _purchasehistory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchasehistory.page */ 1059);




const routes = [
    {
        path: '',
        component: _purchasehistory_page__WEBPACK_IMPORTED_MODULE_0__.PurchasehistoryPage
    }
];
let PurchasehistoryPageRoutingModule = class PurchasehistoryPageRoutingModule {
};
PurchasehistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasehistoryPageRoutingModule);



/***/ }),

/***/ 9258:
/*!****************************************************************************!*\
  !*** ./src/app/redemptionModule/purchasehistory/purchasehistory.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasehistoryPageModule": function() { return /* binding */ PurchasehistoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _purchasehistory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchasehistory-routing.module */ 17966);
/* harmony import */ var _purchasehistory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchasehistory.page */ 1059);







let PurchasehistoryPageModule = class PurchasehistoryPageModule {
};
PurchasehistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _purchasehistory_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasehistoryPageRoutingModule
        ],
        declarations: [_purchasehistory_page__WEBPACK_IMPORTED_MODULE_1__.PurchasehistoryPage]
    })
], PurchasehistoryPageModule);



/***/ }),

/***/ 1059:
/*!**************************************************************************!*\
  !*** ./src/app/redemptionModule/purchasehistory/purchasehistory.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasehistoryPage": function() { return /* binding */ PurchasehistoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_purchasehistory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./purchasehistory.page.html */ 75498);
/* harmony import */ var _purchasehistory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchasehistory.page.scss */ 40560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-clipboard */ 50948);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);










let PurchasehistoryPage = class PurchasehistoryPage {
    constructor(router, sendData, route, _clipboardService, location, apiService, zone) {
        this.router = router;
        this.sendData = sendData;
        this.route = route;
        this._clipboardService = _clipboardService;
        this.location = location;
        this.apiService = apiService;
        this.zone = zone;
        this.arrr = [];
        this.value = 0;
        this.infiniteScroll_call = false;
        // this.request_page=this.sendData.request_page;
        this.allocationData = this.sendData.alldata;
        console.log("all locationData==", this.allocationData);
        this.arrr = [];
        // history.pushState(null, null, window.location.pathname);
        this.value = 0;
        this.backKey = this.sendData.alldata.backKey;
        console.log("back button key==", this.backKey);
    }
    // ionViewWillLeave(){
    //   this.sendData.itemDetails = { "product_id":"", "quantity": ""};
    // }
    ngOnInit() {
        this.purchaseHIst(null);
    }
    copy(text) {
        this._clipboardService.copy(text);
        // this.mymessage="Copied";
        this.apiService.showToastMessage("Copied", "top", 3000, "greenBg");
    }
    close() {
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.route.navigate(['./customer-details']);
        }));
    }
    hometab() {
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.route.navigate(['./tabs/home']);
        }));
    }
    goBack() {
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.location.back();
            // this.route.navigate(['./pointsgiftlist']);
        }));
    }
    modalcall(item) {
        console.log('itemss: ', item);
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.sendData.itemDetails = { 'auto_id': item.product_id, 'request_page': this.allocationData.employee_type,
                'request_for': this.allocationData.customer_id };
            if (this.allocationData.customer_id == '') {
                this.sendData.redeem_for = 'self';
                this.sendData.cart_request = 'dealer';
            }
            else {
                this.sendData.redeem_for = 'other';
                this.sendData.cart_request = 'customer';
            }
            console.log("798:", this.sendData.itemDetails);
            this.sendData.page_request_type = 'detail';
            this.router.navigate(['/itemdetail']);
        }));
    }
    purchaseHIst(event) {
        if (event == null) {
            this.apiService.presentLoadingDefault();
        }
        this.apiService.presentLoadingDefault();
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let apiKey = {
                "value": this.value,
                "request_page": this.allocationData.request_page,
                "request_for": this.allocationData.customer_id
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.PurchaseHistoryUrl, apiKey).subscribe((result) => {
                if (event == null) {
                    this.apiService.presentLoadingClose();
                }
                else {
                    event.target.complete();
                }
                this.apiService.presentLoadingClose();
                // this.arrr = result.data;
                //  this.arrr=[];
                this.title = result.page_title;
                if (result.success == 1 || result.success == '1') {
                    if (this.arrr == undefined) {
                        this.arrr = result.data;
                    }
                    else {
                        this.arrr = this.arrr.concat(result.data);
                    }
                    this.errorMessage = '';
                    this.errorImage = '';
                }
                else {
                    if (this.value == 0) {
                        this.errorImage = result.noDataImage;
                    }
                    else {
                        this.errorMessage = result.message;
                    }
                    // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
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
        }));
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.purchaseHIst(event);
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (this.allocationData.customer_id != '') {
                    this.sendData.alldata = { 'customer_id': this.allocationData.customer_id, 'employee_type': this.allocationData.employee_type };
                    this.router.navigateByUrl('/pointsgiftlist', { replaceUrl: true });
                }
                else {
                    this.sendData.alldata = { 'customer_id': '', 'employee_type': '' };
                    this.router.navigateByUrl('/pointsgiftlist', { replaceUrl: true });
                }
            }));
        });
    }
    loadData(event) {
        this.infiniteScroll_call = true;
        this.infiniteScroll_val = event;
        setTimeout(() => {
            this.value = this.arrr.length;
            this.purchaseHIst(null);
        }, 500);
    }
    stopInfiniteScroll() {
        if (this.infiniteScroll_call == true) {
            this.infiniteScroll_call = false;
            this.infiniteScroll_val.target.complete();
        }
    }
};
PurchasehistoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__.ClipboardService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone }
];
PurchasehistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-purchasehistory',
        template: _raw_loader_purchasehistory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_purchasehistory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PurchasehistoryPage);



/***/ }),

/***/ 40560:
/*!****************************************************************************!*\
  !*** ./src/app/redemptionModule/purchasehistory/purchasehistory.page.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".para {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  font-size: 14px;\n  -webkit-user-select: auto;\n}\n\n.imgcss {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.purch {\n  color: red;\n  font-size: 14px;\n  font-weight: bold;\n  padding-left: 10px;\n}\n\n.bo {\n  font-weight: bold;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxlQUFBO0VBQWUsa0JBQUE7RUFBa0IsZUFBQTtFQUFlLHlCQUFBO0FBS3REOztBQUpBO0VBQVEsYUFBQTtFQUFhLFdBQUE7RUFBVyxzQkFBQTtLQUFBLG1CQUFBO0FBVWhDOztBQVRBO0VBQU8sVUFBQTtFQUFVLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixrQkFBQTtBQWdCakQ7O0FBZkE7RUFBSSxpQkFBQTtBQW1CSjs7QUFsQkE7RUFBZSw0QkFBQTtFQUE2QixzQkFBQTtFQUF1QixZQUFBO0VBQWEsMkJBQUE7QUF5QmhGIiwiZmlsZSI6InB1cmNoYXNlaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYXttYXJnaW4tdG9wOjNweDttYXJnaW4tYm90dG9tOjNweDtmb250LXNpemU6MTRweDstd2Via2l0LXVzZXItc2VsZWN0OmF1dG87fVxyXG4uaW1nY3Nze2hlaWdodDoxMDBweDt3aWR0aDoxMDAlO29iamVjdC1maXQ6Y29udGFpbjt9XHJcbi5wdXJjaHtjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6Ym9sZDtwYWRkaW5nLWxlZnQ6MTBweDt9XHJcbi5ib3tmb250LXdlaWdodDpib2xkO31cclxuLmJnV2FsbGV0SW1hZ2V7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO3BhZGRpbmc6IDVweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fSJdfQ== */");

/***/ }),

/***/ 75498:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redemptionModule/purchasehistory/purchasehistory.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title> \n    <ion-buttons slot=\"start\">\n      <ion-back-button tappable *ngIf=\"backKey=='home'\" (click)=\"hometab()\"></ion-back-button>\n      <ion-back-button tappable *ngIf=\"backKey=='back2'\" (click)=\"goBack()\"></ion-back-button>\n      <ion-back-button tappable *ngIf=\"backKey=='back1'\" (click)=\"close()\"></ion-back-button>\n      <ion-back-button tappable *ngIf=\"backKey=='back'\" (click)=\"back()\"></ion-back-button>\n    </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t  </ion-refresher>\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <!-- <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">   </div>-->\n        <div class=\"underLineBorder\"></div>\n      <!-- <p class=\"purch\">Purchase History</p> -->\n      <ion-row *ngFor=\"let item of arrr; let i = index\" class=\"borderBtmDiv\">\n        <ion-col [size]=\"3\" sizexs=\"3\" size-md=\"3\" size-lg=\"3\">\n          <img [src]=\"item.media\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"imgcss\" />\n        </ion-col>\n        <ion-col [size]=\"5\" sizexs=\"5\" size-md=\"7\" size-lg=\"7\" class=\"autoMargin\">\n          <p class=\"para bo\">{{item.goods_name}}</p>\n          <p class=\"para\">{{item?.order_txt}}</p>\n          <p class=\"para\">{{item?.quantity_str}}: {{item?.product_quantity}}</p>\n          <p class=\"para\">{{item?.point_str}}: {{item?.product_points}}</p>\n          <p class=\"para\">{{item?.sts_str}}: {{item.status}}</p>\n          <p class=\"para\" *ngIf=\"item?.tracking_val!=''\" >{{item?.tracking_id}}\n            <span tappable (click)=\"copy(item?.tracking_val)\">{{item?.tracking_val}}<ion-icon name=\"copy-outline\"></ion-icon></span></p>\n          <p *ngIf=\"item?.tracking_url!=''\" class=\"para\" style=\"white-space: nowrap;\" [innerHTML]=\"item?.tracking_url\"></p>\n        </ion-col>\n        <ion-col [size]=\"4\" sizexs=\"4\" size-md=\"2\" size-lg=\"2\" class=\"autoMargin ion-text-center\" *ngIf=\"item?.button_applicable=='true'\">\n          <ion-button tappable class=\"ionic_btn\" color=\"danger\"  style=\"width: 92%;font-size: 12px\" (click)=\"modalcall(item)\">{{item.button_text}}</ion-button>\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"errorImage!=''\">\n        <img [src]=\"errorImage\"/>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n  <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_redemptionModule_purchasehistory_purchasehistory_module_ts-es2015.js.map