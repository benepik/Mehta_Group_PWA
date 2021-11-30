(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_helpSupportModule_contact-us_contact-us_module_ts"],{

/***/ 77887:
/*!***************************************************************************!*\
  !*** ./src/app/helpSupportModule/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": function() { return /* binding */ ContactUsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 46561);




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ 67048:
/*!*******************************************************************!*\
  !*** ./src/app/helpSupportModule/contact-us/contact-us.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": function() { return /* binding */ ContactUsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 77887);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 46561);







let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage]
    })
], ContactUsPageModule);



/***/ }),

/***/ 46561:
/*!*****************************************************************!*\
  !*** ./src/app/helpSupportModule/contact-us/contact-us.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": function() { return /* binding */ ContactUsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact-us.page.html */ 81841);
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss */ 15206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let ContactUsPage = class ContactUsPage {
    constructor(zone, router, activeRoute, apiService, sendData, navctrl) {
        this.zone = zone;
        this.router = router;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.sendData = sendData;
        this.navctrl = navctrl;
        this.subject = "";
        this.description = "";
        this.files = [];
        this.userImg = "";
        this.CategoryData = this.sendData.alldata;
        console.log('contact us Data', this.CategoryData);
    }
    ngOnInit() {
        // this.contactShow();
    }
    changeData(ev, data) {
    }
    // contactShow(){
    //   this.activeRoute.queryParams.subscribe(params => {
    //         if(params){
    //           if(params.data){
    //           console.log("data1: ", JSON.parse(params.data));
    //           this.CategoryData= JSON.parse(params.data);
    //           }
    //         }
    //     })
    // }
    submit(subject, description) {
        this.apiService.presentLoadingDefault();
        console.log(subject, description);
        this.zone.run(() => {
            let apiKey = {
                "subject": subject,
                "message": description,
                "attachment": this.attachData,
                "media_type": "1",
                "flag_type": "1"
            };
            console.log("apiKey : ", apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.ContactHelpSupportUrl, apiKey).subscribe((result) => {
                console.log(result);
                this.apiService.presentLoadingClose();
                if (result.success == 1) {
                    this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
                    this.navctrl.pop();
                    this.subject = "";
                    this.description = "";
                    this.attachData = "";
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    attachment(event) {
        console.log('event1==>', event);
        console.log('this.currentObj==>', this.currentObj);
        var formData = new FormData();
        if (event.target.files) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                console.log(reader.result);
                this.attachData = reader.result;
                formData.append("file", this.files);
                console.log("files : ", this.files);
                console.log('this.currentObj==>', this.currentObj);
                // this.currentObj.answer= reader.result;
            };
        }
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__.DataTransferService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactUsPage);



/***/ }),

/***/ 15206:
/*!*******************************************************************!*\
  !*** ./src/app/helpSupportModule/contact-us/contact-us.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  width: 100%;\n  justify-content: center;\n}\nion-select .select-icon .select-icon-inner {\n  color: red !important;\n  opacity: 1 !important;\n}\n.image-upload > input {\n  display: none;\n}\n.contactImage {\n  height: 30px;\n  width: 100%;\n}\n.iconImage {\n  height: 15px;\n  width: 100%;\n}\n.pDiv {\n  font-size: 13px;\n}\n.paddLeft0 {\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksV0FBQTtFQUFZLHVCQUFBO0FBR3hCO0FBRFE7RUFBb0IscUJBQUE7RUFBd0IscUJBQUE7QUFLcEQ7QUFGRTtFQUFxQixhQUFBO0FBTXZCO0FBTEU7RUFBYyxZQUFBO0VBQWEsV0FBQTtBQVU3QjtBQVRFO0VBQVcsWUFBQTtFQUFhLFdBQUE7QUFjMUI7QUFiRTtFQUFNLGVBQUE7QUFpQlI7QUFoQkU7RUFBVyxpQkFBQTtBQW9CYiIsImZpbGUiOiJjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3Qge3dpZHRoOiAxMDAlO2p1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5zZWxlY3QtaWNvbnsgICAgXG4gICAgICAgIC5zZWxlY3QtaWNvbi1pbm5lciB7Y29sb3IgOiByZWQgIWltcG9ydGFudDsgb3BhY2l0eTogMSAhaW1wb3J0YW50O31cbiAgICB9XG4gIH1cbiAgLmltYWdlLXVwbG9hZD5pbnB1dCB7ZGlzcGxheTogbm9uZTt9XG4gIC5jb250YWN0SW1hZ2V7aGVpZ2h0OiAzMHB4O3dpZHRoOiAxMDAlO31cbiAgLmljb25JbWFnZXtoZWlnaHQ6IDE1cHg7d2lkdGg6IDEwMCU7fVxuICAucERpdntmb250LXNpemU6IDEzcHg7fVxuICAucGFkZExlZnQwe3BhZGRpbmctbGVmdDowcHg7fSJdfQ== */");

/***/ }),

/***/ 81841:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helpSupportModule/contact-us/contact-us.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{CategoryData?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" push-md=\"3\" push-lg=\"3\" class=\"whiteCol ion-padding\">\n      <ion-row >\n        <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\">\n          <img [src]=\"CategoryData?.list?.contact_number_icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"contactImage\">\n        </ion-col>\n         <ion-col [size]=\"11\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\">\n           <p class=\"ion-no-margin pDiv\">{{CategoryData?.list?.contact_number}}</p>\n         </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\">\n          <img [src]=\"CategoryData?.list?.mail_id_icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"contactImage\">\n        </ion-col>\n         <ion-col [size]=\"11\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\">\n           <p class=\"ion-no-margin pDiv\">{{CategoryData?.list?.mail_id}}</p>\n         </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p class=\"ion-no-margin pDiv\">{{CategoryData?.list?.write_us}}</p>\n          <br>\n          <!-- <ion-item class=\"borderDiv\">  -->\n            <!-- <ion-select class=\"borderDiv borderRediDiv\" placeholder=\"{{category?.placeholder}}\" interface=\"popover\" [(ngModel)]=\"value\"  (ionChange) =\"changeData($event,value)\">\n              <ion-select-option *ngFor=\"let option of CategoryData\" [value]=\"option\" > \n                  {{option?.text}}\n               </ion-select-option>   \n            </ion-select>  -->\n          <!-- </ion-item> -->\n         \n          <div class=\"borderDiv borderRediDiv\">\n            <ion-input [(ngModel)]=\"subject\" [placeholder]=\"CategoryData?.list?.subject\"></ion-input>\n          </div>\n          <br>\n            <div class=\"borderDiv borderRediDiv\">\n              <ion-textarea [(ngModel)]=\"description\" rows=\"4\" cols=\"20\"  [placeholder]=\"CategoryData?.list?.description\"></ion-textarea>\n            </div>\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\">\n          <img [src]=\"CategoryData?.list?.attachment_icon\"  onerror=\"this.src='assets/watermark/watermark.png'\" class=\"iconImage\">\n         \n        </ion-col>\n         <ion-col [size]=\"11\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\" class=\"paddLeft0\">\n          <label class=\"image-upload\">\n           <p class=\"ion-no-margin pDiv\">{{CategoryData?.list?.attachment}}&nbsp; {{imageFile}}</p>\n           <input  type=\"file\" [(ngModel)] = \"imageFile\" accept=\"image/x-png,image/jpeg\"  (change)=\"attachment($event)\" >\n          </label>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"attachData\">\n        <ion-col sizeLg=\"12\" sizeMd=\"12\" sizeXs=\"12\">\n         <div  class=\"relativeDiv\">\n            <!-- <ion-icon name=\"close-circle\" class=\"absoDiv\" (click)=\"remove(ind)\"></ion-icon> -->\n          <img  [src]=\"attachData\" #imageSrc class=\"imgPreview\">\n         </div>\n         <!-- <div *ngIf=\"data?.mediaType=='2'\"  class=\"relativeDiv\">\n          <ion-icon name=\"close-circle\" class=\"absoDiv\" (click)=\"remove(ind)\"></ion-icon>\n          <video [src]=\"data?.filePath\" width=\"100%\" height=\"200px\" controls [poster]=\"data?.thumbnail\"></video>\n         </div>  -->\n        </ion-col>\n        </ion-row>\n      <br>\n      <ion-row>\n        <ion-col>\n          <ion-button size=\"small\" class=\"nextbtn\" color=\"danger\" shape=\"round\" (click)=\"submit(subject, description)\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-col>\n      </ion-row>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_helpSupportModule_contact-us_contact-us_module_ts-es2015.js.map