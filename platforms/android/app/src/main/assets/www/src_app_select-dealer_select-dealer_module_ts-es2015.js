(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_select-dealer_select-dealer_module_ts"],{

/***/ 90143:
/*!***************************************************************!*\
  !*** ./src/app/select-dealer/select-dealer-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDealerPageRoutingModule": function() { return /* binding */ SelectDealerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _select_dealer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-dealer.page */ 72442);




const routes = [
    {
        path: '',
        component: _select_dealer_page__WEBPACK_IMPORTED_MODULE_0__.SelectDealerPage
    }
];
let SelectDealerPageRoutingModule = class SelectDealerPageRoutingModule {
};
SelectDealerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectDealerPageRoutingModule);



/***/ }),

/***/ 72639:
/*!*******************************************************!*\
  !*** ./src/app/select-dealer/select-dealer.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDealerPageModule": function() { return /* binding */ SelectDealerPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _select_dealer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-dealer-routing.module */ 90143);
/* harmony import */ var _select_dealer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-dealer.page */ 72442);







let SelectDealerPageModule = class SelectDealerPageModule {
};
SelectDealerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_dealer_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectDealerPageRoutingModule
        ],
        declarations: [_select_dealer_page__WEBPACK_IMPORTED_MODULE_1__.SelectDealerPage]
    })
], SelectDealerPageModule);



/***/ }),

/***/ 72442:
/*!*****************************************************!*\
  !*** ./src/app/select-dealer/select-dealer.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDealerPage": function() { return /* binding */ SelectDealerPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_select_dealer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./select-dealer.page.html */ 35682);
/* harmony import */ var _select_dealer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-dealer.page.scss */ 84502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/api.service */ 14303);
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);









let SelectDealerPage = class SelectDealerPage {
    constructor(sendData, zone, apiService, navCntrl, route) {
        this.sendData = sendData;
        this.zone = zone;
        this.apiService = apiService;
        this.navCntrl = navCntrl;
        this.route = route;
        this.searchString = '';
        this.imgArr = '';
        this.ischecked = false;
        this.bp = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.obj = this.sendData.alldata;
        this.itemss = this.sendData.item;
        console.log("qwew: ", this.obj);
        this.loginPageData = this.sendData.loginKey;
        this.dealerList = this.sendData.itemDetails;
    }
    back() {
        this.navCntrl.back();
    }
    checkValue(ev) {
        console.log('select opt value==> ', ev);
        this.selcetdItem = ev.target.value;
        console.log('select opt value==> ', this.selcetdItem);
        this.ischecked = true;
    }
    continue() {
        // this.sendData.alldata = this.obj;
        // this.sendData.item = this.itemss;
        //this.route.navigate(['./otpverify']);
        if (this.selcetdItem) {
            this.zone.run(() => {
                this.bp = [];
                for (let i = 0; i < this.selcetdItem.length; i++) {
                    this.bp.push(this.selcetdItem[i].dealer_id);
                    this.bp.toString();
                    console.log("bp :", this.bp.toString());
                }
                let apiKey = {
                    "contact": this.obj.contact,
                    "send_type": this.obj.send_type,
                    "message_type": 'sms',
                    "dealer_id": this.bp.toString()
                };
                console.log('login data response', apiKey);
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.MobileSubmitUrl, apiKey).subscribe((result) => {
                    console.log('login data response', result);
                    // this.apiService.presentLoadingClose();
                    if (result.success == 1) {
                        this.mobileSubmitData = result;
                        let object = {
                            "apiData": this.mobileSubmitData,
                            "phonenumber": this.obj.contact,
                            "send_type": this.obj.send_type,
                            "dealer_id": this.bp.toString(),
                            "requestPage": this.loginPageData.requestPage
                        };
                        this.sendData.alldata = object;
                        this.obj.contact = '';
                        console.log('login data response', this.sendData);
                        this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
                        this.sendData.itemDetails = this.itemss;
                        this.route.navigate(['./otpverify']);
                        // }else{
                        //   this.phonenumber = '';
                        //   this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                        // }
                    }
                }, err => {
                    this.apiService.presentLoadingClose();
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        }
        else {
            this.apiService.showToastMessage('Please Select Dealer', 'top', 3000, 'redBg');
        }
    }
};
SelectDealerPage.ctorParameters = () => [
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
SelectDealerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-select-dealer',
        template: _raw_loader_select_dealer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_select_dealer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectDealerPage);



/***/ }),

/***/ 84502:
/*!*******************************************************!*\
  !*** ./src/app/select-dealer/select-dealer.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padd10 {\n  padding: 10px 0px 10px 0px;\n}\n\n.ionic_btnic {\n  --background: var(--headerColor);\n  --border-radius: 14px;\n  width: auto;\n  text-transform: capitalize;\n  height: 30px;\n  font-size: 14px;\n}\n\n.txtcentr {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1kZWFsZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsMEJBQUE7QUFFUjs7QUFEQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQVUsa0JBQUE7QUFNViIsImZpbGUiOiJzZWxlY3QtZGVhbGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkMTB7cGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7fVxuLmlvbmljX2J0bmlje1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnR4dGNlbnRye3RleHQtYWxpZ246Y2VudGVyO30iXX0= */");

/***/ }),

/***/ 35682:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-dealer/select-dealer.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Select Dealer</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"back()\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n      <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n          <ion-row>\n              <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\" >\n                <ion-list>\n                    <!-- <ion-item  class=\"brbottom\" *ngFor =\"let item of dealerList?.data\">\n                      <ion-label class=\"para1\">{{item?.full_name}}<br>{{item?.dealer_code}}</ion-label>\n                        [value]=\"imgArr\" -->\n                       \n                      <!-- <ion-radio [value]=\"item.auto_id\"  slot=\"start\" (click)=\"radioGroupChange($event, item)\" ></ion-radio> -->\n                      <!-- <ion-checkbox slot=\"end\" [(ngModel)]= \"item.ischecked\"></ion-checkbox>\n                    </ion-item>  --> \n                    <ion-select  placeholder=\"Select Dealer\" (ionChange)=\"checkValue($event)\" multiple=\"true\">\n                      <ion-select-option *ngFor = \"let id of dealerList?.data\" [value]=\"id\" >{{id?.full_name}}<br>{{id?.dealer_code}}</ion-select-option>\n                    </ion-select>\n                    <ion-item *ngFor=\"let item of selcetdItem\">\n                      <ion-label>\n                        {{item?.full_name}}&nbsp;({{item?.dealer_code}})\n                      </ion-label>\n                    </ion-item>\n                 </ion-list>\n              </ion-col>\n          </ion-row>\n          <br>\n          <div class=\"txtcentr\" *ngIf = \"dealerList?.continue_process?.btn_applicable == true\">\n              <ion-button class=\"ionic_btnic\" tappable (click)=\"continue()\">{{dealerList?.continue_process?.btn_text}}</ion-button>\n          </div>\n          <br>\n          </ion-col>\n          </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_select-dealer_select-dealer_module_ts-es2015.js.map