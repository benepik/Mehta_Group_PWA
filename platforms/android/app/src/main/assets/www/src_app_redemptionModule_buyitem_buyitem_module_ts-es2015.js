(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_buyitem_buyitem_module_ts"],{

/***/ 84176:
/*!********************************************************************!*\
  !*** ./src/app/redemptionModule/buyitem/buyitem-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyitemPageRoutingModule": function() { return /* binding */ BuyitemPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _buyitem_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyitem.page */ 83557);




const routes = [
    {
        path: '',
        component: _buyitem_page__WEBPACK_IMPORTED_MODULE_0__.BuyitemPage
    }
];
let BuyitemPageRoutingModule = class BuyitemPageRoutingModule {
};
BuyitemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyitemPageRoutingModule);



/***/ }),

/***/ 12402:
/*!************************************************************!*\
  !*** ./src/app/redemptionModule/buyitem/buyitem.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyitemPageModule": function() { return /* binding */ BuyitemPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _buyitem_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyitem-routing.module */ 84176);
/* harmony import */ var _buyitem_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyitem.page */ 83557);







let BuyitemPageModule = class BuyitemPageModule {
};
BuyitemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buyitem_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyitemPageRoutingModule
        ],
        declarations: [_buyitem_page__WEBPACK_IMPORTED_MODULE_1__.BuyitemPage]
    })
], BuyitemPageModule);



/***/ }),

/***/ 83557:
/*!**********************************************************!*\
  !*** ./src/app/redemptionModule/buyitem/buyitem.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyitemPage": function() { return /* binding */ BuyitemPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_buyitem_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./buyitem.page.html */ 46645);
/* harmony import */ var _buyitem_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyitem.page.scss */ 68143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _redeemotp_redeemotp_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redeemotp/redeemotp.page */ 26023);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);










let BuyitemPage = class BuyitemPage {
    constructor(modalCtrl, alertController, popoverController, sendData, route, apiService, zone) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.sendData = sendData;
        this.route = route;
        this.apiService = apiService;
        this.zone = zone;
        this.num = 1;
        this.showDonebutt = 0;
        this.cart_detail = [];
    }
    ionViewWillEnter() {
        //  this.cart_details = this.sendData.cartDetails;
        this.cart_req = this.sendData.cart_request;
        this.showAddress();
        this.buyitem(this.item_details);
        // this.cart_details = this.sendData.cartDetails;
        // this.itemDetailsShow();
    }
    ionViewWillLeave() {
        //  if(this.allocationData.customer_id==''){
        //    this.allocationData.request_page='self';
        //  }else{
        //   this.allocationData.request_page='other';
        //  }
    }
    ngOnInit() {
        this.redeem_for = this.sendData.redeem_for;
        console.log('redeem_for', this.redeem_for);
        this.allocationData = this.sendData.alldata;
        this.item_details = this.sendData.itemDetails;
        console.log('this.allocationData', this.allocationData);
        console.log('this.item_details', this.item_details);
        // this.showAddress();
        // this.buyitem(this.item_details);
    }
    minus(item) {
        if (item.quantity != 0) {
            item.quantity = JSON.parse(item.quantity);
            item.quantity = item.quantity - 1;
            this.cart_req = "buy";
            this.showDonebutt = 1;
            //  this.buyitem(item);
        }
    }
    plus(item) {
        // item.quantity = parseInt(item.quantity);
        item.quantity = parseInt(item.quantity) + 1;
        this.cart_req = "buy";
        this.showDonebutt = 1;
        //  this.buyitem(item);
    }
    buyitem(item) {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let apiKey = {
                "request_page": "dealer",
                "redeem_for": this.redeem_for,
                "cart_request": this.cart_req,
                "request_for": this.allocationData.customer_id,
                "request_user_type": this.allocationData.employee_type,
                "product_arr": [{ "product_id": item.product_id, "count": item.quantity }]
            };
            console.log("item.product_id ,item.quantity ", item.quantity, item.quantity);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.CartUrl, apiKey).subscribe((result) => {
                this.apiService.presentLoadingClose();
                //this.temparray = result.data;
                if (result.success == 1) {
                    this.cart_details = result.data;
                    console.log('this is ', this.cart_details);
                    this.msg = '';
                }
                else {
                    this.msg = result.message;
                    // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        }));
    }
    itemDetailsShow() {
        // this.apiService.presentLoadingDefault();
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let apiKey = {
                "request_page": "dealer",
                "redeem_for": this.redeem_for,
                "product_id": this.item_details.auto_id,
                "page_request_type": this.sendData.page_request_type
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.ProductDetailUrl, apiKey).subscribe((result) => {
                // this.apiService.presentLoadingClose();
                this.temparray = result.data;
                if (result.success == 1) {
                    // this.serverData=result.data;
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                //  this.apiService.presentLoadingClose();
            });
        }));
    }
    modalcall() {
        this.sendData.cartDetails = this.cart_details;
        console.log(" this.cart_details", this.cart_detail);
        if (this.addres.data.data.length != 0) {
            this.sendData.address_id = this.addres.data.data[0].auto_id;
            this.presentAlertConfirm();
        }
        else {
            this.apiService.showToastMessage("Address is Required", 'top', 2000, 'redBg');
        }
    }
    callModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _redeemotp_redeemotp_page__WEBPACK_IMPORTED_MODULE_2__.RedeemotpPage,
                cssClass: 'my-custom-class'
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log("data returned after dismiss modal==", dataReturned);
                if (dataReturned !== null) {
                    this.route.navigate(['/purchasehistory']);
                }
                else {
                }
            });
            this.sendData.alldata = { "request_for": this.allocationData.customer_id, "request_user_type": this.allocationData.employee_type };
            this.sendData.item = this.redeem_for;
            return yield modal.present();
        });
    }
    // async presentPopover(ev: any) {
    //   const popover = await this.popoverController.create({
    //     component: redeemotp,
    //     cssClass: 'my-custom-class',
    //     event: ev,
    //     translucent: true
    //   });
    //   await popover.present();
    //  // const { role } = await popover.onDidDismiss();
    // //  console.log('onDidDismiss resolved with role', role);
    // }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Are you sure, you want to buy?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.callModal();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showAddress() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "address_fetch_type": "deliver",
                "redeem_for": this.redeem_for,
                "request_page": "dealer",
                "request_for": this.allocationData.customer_id,
                "request_user_type": this.allocationData.employee_type,
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.AddressUrl, apiKey).subscribe((result) => {
                console.log("AddressUrl: ", result);
                this.apiService.presentLoadingClose();
                this.addres = result;
                if (result.success == 1) {
                }
                else {
                }
            }, err => {
                this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    changeAddress() {
        if (this.allocationData.customer_id == '') {
            this.sendData.alldata = { 'customer_id': '', 'request_page': this.redeem_for, 'employee_type': '' };
            this.route.navigate(['/change-address']);
        }
        else {
            this.sendData.alldata = { 'customer_id': this.allocationData.customer_id, 'request_page': this.redeem_for,
                'employee_type': this.allocationData.employee_type };
            this.route.navigate(['/change-address']);
        }
        // this.route.navigate(['/change-address']);
    }
    doneUpdate() {
        this.apiService.presentLoadingDefault();
        this.cart_detail = [];
        for (let i = 0; i < this.cart_details.length; i++) {
            this.cart_details[i]['count'] = this.cart_details[i].quantity;
            this.cart_detail.push(this.cart_details[i]);
        }
        this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let apiKey = {
                "request_page": "dealer",
                "redeem_for": this.redeem_for,
                "cart_request": this.cart_req,
                "product_arr": this.cart_detail,
                "request_for": this.allocationData.customer_id,
                "request_user_type": this.allocationData.employee_type,
            };
            console.log("apikey : ", apiKey);
            console.log("product_arr:", this.cart_detail);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.CartUrl, apiKey).subscribe((result) => {
                this.apiService.presentLoadingClose();
                //this.temparray = result.data;
                if (result.success == 1) {
                    this.showDonebutt = 0;
                    this.cart_details = result.data;
                    this.msg = '';
                }
                else {
                    this.msg = result.message;
                    this.cart_details = [];
                    // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        }));
    }
};
BuyitemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__.DataTransferService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone }
];
BuyitemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-buyitem',
        template: _raw_loader_buyitem_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buyitem_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BuyitemPage);



/***/ }),

/***/ 68143:
/*!************************************************************!*\
  !*** ./src/app/redemptionModule/buyitem/buyitem.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".para {\n  color: red;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-weight: bold;\n}\n\n.para1 {\n  font-size: 12px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.para2 {\n  font-size: 16px;\n  color: red;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.brbottom {\n  border-bottom: 1px solid lightgray;\n}\n\n.numcss {\n  border: 1px solid red;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 14px;\n  padding-bottom: 1px;\n  padding-top: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.txtend {\n  text-align: end;\n}\n\n.mrauto {\n  margin: auto;\n}\n\n.ionic_btnic {\n  --background: var(--headerColor);\n  --border-radius: 14px;\n  width: auto;\n  text-transform: capitalize;\n  height: 30px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sVUFBQTtFQUFXLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7QUFLcEQ7O0FBSkE7RUFBTyxlQUFBO0VBQWlCLGVBQUE7RUFBZ0Isa0JBQUE7QUFVeEM7O0FBVEE7RUFBTyxlQUFBO0VBQWlCLFVBQUE7RUFBVyxlQUFBO0VBQWdCLGtCQUFBO0FBZ0JuRDs7QUFmQTtFQUFVLGtDQUFBO0FBbUJWOztBQWxCQTtFQUFZLHFCQUFBO0VBQ1IsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFBZ0IsbUJBQUE7RUFDaEIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBdUJKOztBQXRCQTtFQUFRLGVBQUE7QUEwQlI7O0FBekJBO0VBQVMsWUFBQTtBQTZCVDs7QUE1QkE7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUErQkoiLCJmaWxlIjoiYnV5aXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYXtjb2xvcjogcmVkO21hcmdpbi10b3A6IDRweDttYXJnaW4tYm90dG9tOiA0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fSBcclxuLnBhcmExe2ZvbnQtc2l6ZTogMTJweDs7bWFyZ2luLXRvcDogNHB4O21hcmdpbi1ib3R0b206IDRweDt9XHJcbi5wYXJhMntmb250LXNpemU6IDE2cHg7O2NvbG9yOiByZWQ7bWFyZ2luLXRvcDogNHB4O21hcmdpbi1ib3R0b206IDRweDt9XHJcbi5icmJvdHRvbXtib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O31cclxuLm51bWNzc3sgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7fVxyXG4udHh0ZW5ke3RleHQtYWxpZ246IGVuZDt9XHJcbi5tcmF1dG97IG1hcmdpbjogYXV0bzt9ICAgXHJcbi5pb25pY19idG5pY3tcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taGVhZGVyQ29sb3IpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */");

/***/ }),

/***/ 46645:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redemptionModule/buyitem/buyitem.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>Redeem</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-row>\n        <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n            <ion-row  *ngIf=\"addres?.data?.title!=''\">\n                <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\" class=\"brbottom\">\n                    <p class=\"para\">{{addres?.data?.title}}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngFor =\"let item of addres?.data?.data\">\n                <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\" class=\"brbottom\" *ngIf= \"item?.is_primary == '1'\">\n                    <p class=\"para1\">{{item?.address_line1}}</p>\n                    <p class=\"para1\">{{item?.address_line2}}</p>\n                    <p class=\"para1\">{{item?.city}}-{{item?.pin_code}}</p>\n                    <br>\n                 \n                </ion-col>\n            </ion-row>\n            <br>\n            <div class=\"ion-text-center\" *ngIf = \"addres?.data?.show_btn == true\">\n                <ion-button class=\"ionic_btnic\" (click)=\"changeAddress()\">{{addres?.data?.btn_text}}</ion-button>\n                <br>\n            </div>\n            \n            <ion-row *ngIf=\"cart_details?.length>0\">\n                <ion-col [size]=\"12\" size-xs=\"12\" size-md=\"12\" size-lg=\"12\" class=\"brbottom\">\n                    <p class=\"para\">Item purchased</p>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf =\"msg\">\n                <ion-col class=\"ion-text-center\">\n                    <h5 style=\"color: #B01D22;\" class=\"no-margin\">{{msg}}</h5>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"brbottom\" *ngFor = \"let item of cart_details\">\n                <!-- {{cart_details}} -->\n                <ion-col *ngIf=\"msg==''\" [size]=\"3\" sizexs=\"3\" size-md=\"3\" size-lg=\"3\">\n                    <img [src]=\"item?.good_image\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"imgcss\">\n                </ion-col>\n                <ion-col *ngIf=\"msg==''\" [size]=\"5\" sizexs=\"5\" size-md=\"5\" size-lg=\"5\">\n                    <p class=\"para1\">{{item?.goods_name}}</p>\n                    <p class=\"para1\">{{item?.good_point}}</p>\n                    <!-- <p class=\"para2\">Amount 6000</p> -->\n                </ion-col>\n                <ion-col *ngIf=\"msg==''\" [size]=\"4\" sizexs=\"4\" size-md=\"4\" size-lg=\"4\" class=\"mrauto\">\n                    <ion-row >\n                        <ion-col [size]=\"3\" sizexs=\"3\" size-md=\"3\" size-lg=\"3\" class=\"txtend\">\n                            <div>\n                                <ion-icon style=\"color: red;\" name=\"remove-outline\" (click)=minus(item)></ion-icon>\n                            </div>\n                        </ion-col>\n                        <ion-col [size]=\"6\" sizexs=\"6\" size-md=\"3\" size-lg=\"3\" class=\"ion-text-center\">\n                            <span class=\"numcss\">{{item.quantity}}</span>\n                        </ion-col>\n                        <ion-col [size]=\"3\" sizexs=\"3\" size-md=\"3\" size-lg=\"3\">\n                            <div>\n                                <ion-icon style=\"color: red;\" name=\"add-outline\" tappable (click)=\"plus(item)\"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <br>\n            <br>\n            <div class=\"ion-text-center\">\n                <ion-button class=\"ionic_btn\" *ngIf=\"showDonebutt ==1 && !msg\" (click)=\"doneUpdate()\">Done</ion-button>\n                <ion-button class=\"ionic_btn\"  *ngIf=\"showDonebutt ==0 && !msg\" (click)=\"modalcall()\">Buy</ion-button>\n            </div>\n            <br>\n        </ion-col>\n    </ion-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_redemptionModule_buyitem_buyitem_module_ts-es2015.js.map