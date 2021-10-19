(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_customerRegistrationModule_customer-reg_customer-reg_module_ts"],{

/***/ 9923:
/*!****************************************************************************************!*\
  !*** ./src/app/customerRegistrationModule/customer-reg/customer-reg-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRegPageRoutingModule": function() { return /* binding */ CustomerRegPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_reg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-reg.page */ 11701);




const routes = [
    {
        path: '',
        component: _customer_reg_page__WEBPACK_IMPORTED_MODULE_0__.CustomerRegPage
    }
];
let CustomerRegPageRoutingModule = class CustomerRegPageRoutingModule {
};
CustomerRegPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerRegPageRoutingModule);



/***/ }),

/***/ 68786:
/*!********************************************************************************!*\
  !*** ./src/app/customerRegistrationModule/customer-reg/customer-reg.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRegPageModule": function() { return /* binding */ CustomerRegPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_reg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-reg-routing.module */ 9923);
/* harmony import */ var _customer_reg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-reg.page */ 11701);







let CustomerRegPageModule = class CustomerRegPageModule {
};
CustomerRegPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customer_reg_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRegPageRoutingModule
        ],
        declarations: [_customer_reg_page__WEBPACK_IMPORTED_MODULE_1__.CustomerRegPage]
    })
], CustomerRegPageModule);



/***/ }),

/***/ 11701:
/*!******************************************************************************!*\
  !*** ./src/app/customerRegistrationModule/customer-reg/customer-reg.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRegPage": function() { return /* binding */ CustomerRegPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_reg_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer-reg.page.html */ 67664);
/* harmony import */ var _customer_reg_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-reg.page.scss */ 80184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);









let CustomerRegPage = class CustomerRegPage {
    constructor(route, platform, navController, zone, apiService, sendData) {
        this.route = route;
        this.platform = platform;
        this.navController = navController;
        this.zone = zone;
        this.apiService = apiService;
        this.sendData = sendData;
        this.userImg = "";
        this.searchString = '';
        this.isItemAvailable = false;
        this.items = [];
        this.buttonData = [];
        // value:number=0;
        this.infiniteScroll_call = false;
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
        this.buttonData = [{ auto_id: "1", tab_name: "Active Customers", employee_type: "3", tab_status: "selected_tab" },
            { auto_id: "1", tab_name: "Blocked Customers", employee_type: "3", tab_status: "unselected_tab" }];
    }
    ionViewWillEnter() {
        this.customerReg();
    }
    ngOnInit() {
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
        //this.value=0;
        //this.userData=[];
        // this.showItemList(this.searchString);
    }
    close() {
        this.route.navigate(['./tabs/home']);
        //this.navController.back();
        // this.modalCtrl.dismiss();
    }
    customerReg() {
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {};
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.CustReg, apiKey).subscribe((result) => {
                console.log("CustReg: ", result);
                this.apiService.presentLoadingClose();
                if (result.success == 1) {
                    this.buttData = result.data;
                    this.showItemList('pending');
                    this.pageTitle = this.buttData[0].tab_name;
                }
                else {
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                this.apiService.presentLoadingClose();
            });
        });
    }
    showItemList(id) {
        if (id == "app") {
            this.tab_status = "selected_tab";
        }
        this.id_item = id;
        this.apiService.presentLoadingDefault();
        this.zone.run(() => {
            let apiKey = {
                "value": '',
                "search_str": "",
                "selected_tab": id
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.CustRegDataUrl, apiKey).subscribe((result) => {
                console.log("CustRegDataUrl: ", result);
                this.apiService.presentLoadingClose();
                if (result.success == 1) {
                    // if(this.custmReg==undefined){
                    this.custmReg = result.data;
                    // }else{
                    //   this.custmReg =this.custmReg.concat(result.data);
                    // }        
                    this.showImg = "";
                    this.errorMessage = '';
                    console.log("custmReg : ", this.custmReg);
                    //  this.showItemList();
                }
                else {
                    this.showImg = result.no_data_image;
                    this.errorMessage = result.message;
                }
                // if(this.infiniteScroll_call==true){
                //   this.stopInfiniteScroll();
                //   }
            }, err => {
                this.apiService.presentLoadingClose();
                this.apiService.showToastMessage(JSON.stringify(err), top, 2000, "redBg");
            });
        });
    }
    changedTabs(item) {
        this.zone.run(() => {
            if (item.tab_status != "selected_tab") {
                item.tab_status = "selected_tab";
                if (this.pageTitle == "Approved List") {
                    if (item.tab_name == "Active Customers") {
                        item.tab_status = 'selected_tab';
                        this.showItemList("active");
                    }
                    else {
                        item.tab_status = 'unselected_tab';
                        this.showItemList("block");
                    }
                }
                for (let i = 0; i < this.buttonData.length; i++) {
                    if (item.tab_name != this.buttonData[i].tab_name) {
                        this.buttonData[i].tab_status = "unselected_tab";
                    }
                    else {
                        this.buttonData[i].tab_status = "selected_tab";
                    }
                }
            }
        });
    }
    changedTab(item) {
        //this.apiService.presentLoadingDefault();
        if (item.tab_status != "selected_tab") {
            item.tab_status = "selected_tab";
            // this.apiService.presentLoadingClose();
            this.pageTitle = item.tab_name;
            if (this.pageTitle == "Approved List") {
                this.buttonData[0].tab_status = "selected_tab";
                this.buttonData[1].tab_status = "unselected_tab";
                this.showItemList("active");
            }
            else if (this.pageTitle == "Rejected List") {
                this.showItemList("rejected");
            }
            else {
                this.showItemList("pending");
            }
            if (item.show_no_data == "1") {
                this.showImg = item.no_data_image;
            }
            else {
                //this.showImg = item.no_data_image;
            }
            // if(this.buttonData){
            //   for(let i = 0;i<this.buttonData.length; i++ ){
            //     if(item.tab_name != this.buttData[i].tab_name){
            //       this.buttData[i].tab_status = "unselected_tab";
            //     }
            //     else{
            //       this.buttData[i].tab_status = "selected_tab";
            //     }
            //   }
            // }
            for (let i = 0; i < this.buttData.length; i++) {
                if (item.tab_name != this.buttData[i].tab_name) {
                    this.buttData[i].tab_status = "unselected_tab";
                }
                else {
                    this.buttData[i].tab_status = "selected_tab";
                }
            }
            console.log("this.buttData :", this.buttData);
        }
        else {
            if (item.show_no_data == "1") {
                this.showImg = item.no_data_image;
            }
            else {
                // this.showImg = item.no_data_image;
            }
        }
    }
    view(id) {
        console.log("id36", id);
        // this.sendData.listType = id;
        if (this.pageTitle == "Pending List") {
            this.sendData.registrationType = { request_page: 'pending_customer' };
        }
        else if (this.pageTitle == "Approved List") {
            if (this.id_item == "active") {
                this.sendData.registrationType = { request_page: 'active_customer' };
            }
            else {
                this.sendData.registrationType = { request_page: 'block_customer' };
            }
        }
        else {
            this.sendData.registrationType = { request_page: 'rejected_customer' };
        }
        this.sendData.alldata = id.customer_id;
        this.route.navigate(['./registration']);
    }
};
CustomerRegPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService }
];
CustomerRegPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer-reg',
        template: _raw_loader_customer_reg_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_reg_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerRegPage);



/***/ }),

/***/ 81343:
/*!***********************************************!*\
  !*** ./src/app/image-zoom/image-zoom.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageZoomPage": function() { return /* binding */ ImageZoomPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-zoom.page.html */ 47674);
/* harmony import */ var _image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-zoom.page.scss */ 32968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 18345);






let ImageZoomPage = class ImageZoomPage {
    constructor(navParams, modalCtrl, localStorage) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.localStorage = localStorage;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            zoom: {
                minRatio: 1,
                maxRatio: 3,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        };
        this.localStorage.getStorage().then(result => {
            this.loginUserData = result.allStoreData;
        });
    }
    ionViewWillEnter() {
        this.slides.lockSwipes(true);
    }
    ngOnInit() {
        console.table(this.navParams);
        this.zoomData = this.navParams.data.data;
        console.log('img==> ', this.zoomData);
    }
    dismiss() {
        this.modalCtrl.dismiss();
        this.slides.lockSwipes(false);
    }
    download() {
    }
};
ImageZoomPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
ImageZoomPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides,] }]
};
ImageZoomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImageZoomPage);



/***/ }),

/***/ 51532:
/*!***************************************************!*\
  !*** ./src/app/services/data-transfer.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTransferService": function() { return /* binding */ DataTransferService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image-zoom/image-zoom.page */ 81343);




let DataTransferService = class DataTransferService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    zoomSingleImage(path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__.ImageZoomPage,
                cssClass: 'my-custom-class',
                // swipeToClose: true,
                // mode: 'ios', backdropDismiss: true,
                // presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    data: path,
                },
            });
            return yield modal.present();
        });
    }
    readMoreHTML(str, max, add) {
        console.log('str==> ', str);
        if (str && str.length > max) {
            var tempStr = str.substring(0, max);
            var openAtag = tempStr.split("<a ");
            var closeAtag = tempStr.split("</a>");
            // console.log('openAtag== ', openAtag.length);
            // console.log('closeAtag== ', closeAtag.length);
            if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                // console.log("equal== ", str);
                return str + " " + add;
            }
            else {
                var nextStr = str.substring(max, str.length);
                // console.log("remaining sub string******", nextStr);
                var nextCloseAtagIndex = nextStr.search("</a>");
                // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);
                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4);
                // console.log("final******", str);
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                // console.log("not equal== ", str);
                return str + " " + add;
            }
            // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
            // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);
        }
        else {
            return str;
        }
    }
};
DataTransferService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
DataTransferService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DataTransferService);



/***/ }),

/***/ 80184:
/*!********************************************************************************!*\
  !*** ./src/app/customerRegistrationModule/customer-reg/customer-reg.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  color: #B01D22;\n  font-size: 20px;\n}\n\n.act {\n  text-transform: none;\n  text-transform: initial;\n  --border-radius: 20px;\n  --background: #B01D22;\n  width: 100%;\n  font-size: 14px;\n}\n\n.act1 {\n  text-transform: capitalize;\n  --border-radius: 20px !important;\n  --background: transparent !important;\n  color: #B01D22 !important;\n  border: 1px solid #B01D22;\n  width: 100%;\n  border-radius: 20px;\n  font-size: 12px;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\n.userImageUpload {\n  border-radius: 50%;\n  border: 2px dotted #b01d22;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile_image {\n  width: 70px;\n  height: 70px;\n}\n\n.name {\n  font-size: 15px;\n  font-weight: bold;\n  color: black;\n}\n\n.contactDiv {\n  font-size: 13px;\n  color: black;\n}\n\n.phone {\n  font-size: 12px;\n  color: black;\n}\n\n.view {\n  --background: transparent;\n  color: #b01d22;\n  text-transform: capitalize;\n  width: 100%;\n  --border-radius: 20px;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXJlZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQU0sb0JBQUE7RUFBQSx1QkFBQTtFQUF5QixxQkFBQTtFQUF1QixxQkFBQTtFQUF3QixXQUFBO0VBQVksZUFBQTtBQU8xRjs7QUFOQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUVBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFTSjs7QUFQRTtFQUVFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBU0o7O0FBUEM7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJDO0VBQU0sZUFBQTtFQUFnQixpQkFBQTtFQUFtQixZQUFBO0FBYzFDOztBQWJDO0VBQVksZUFBQTtFQUFpQixZQUFBO0FBa0I5Qjs7QUFqQkE7RUFBTyxlQUFBO0VBQWlCLFlBQUE7QUFzQnhCOztBQXJCQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBd0JKOztBQXRCQTtFQUFtQiw0QkFBQTtFQUNqQixzQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLDJCQUFBO0FBMkJGIiwiZmlsZSI6ImN1c3RvbWVyLXJlZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcbiAgICBjb2xvcjogI0IwMUQyMjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uYWN0eyB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDsgLS1ib3JkZXItcmFkaXVzOiAyMHB4OyAtLWJhY2tncm91bmQ6ICAjQjAxRDIyOyB3aWR0aDoxMDAlOyBmb250LXNpemU6MTRweDt9XG4uYWN0MXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC8vICAtLWJvcmRlci1jb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0IwMUQyMjtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICBmb250LXNpemU6MTJweDtcbn1cbmhyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBnYWluc2Jvcm87XG4gIH1cbiAgLnVzZXJJbWFnZVVwbG9hZHtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgI2IwMWQyMjtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiB9XG4gLnByb2ZpbGVfaW1hZ2V7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuIH1cbiAubmFtZXtmb250LXNpemU6IDE1cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOmJsYWNrO31cbiAuY29udGFjdERpdntmb250LXNpemU6IDEzcHg7IGNvbG9yOmJsYWNrO31cbi5waG9uZXtmb250LXNpemU6IDEycHg7IGNvbG9yOmJsYWNrO31cbi52aWV3e1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNiMDFkMjI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uYmdXYWxsZXRJbWFnZXsgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9XG4vLyBpb24tYmFjay1idXR0b24ge1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH0iXX0= */");

/***/ }),

/***/ 32968:
/*!*************************************************!*\
  !*** ./src/app/image-zoom/image-zoom.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: none;\n}\n\nion-slides {\n  width: 100%;\n}\n\nion-slide {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.product-zoom-modal {\n  --width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* End Modal css */\n\n/* Global modal transparent*/\n\n.sc-ion-modal-md-h {\n  --background: none;\n}\n\n.sc-ion-modal-ios-h {\n  --background: none;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: #fff;\n  position: absolute;\n  top: 0;\n}\n\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksa0JBQUE7QUFDWjs7QUFBQTtFQUFhLFdBQUE7QUFJYjs7QUFIQTtFQUFhLDhCQUFBO0FBT2I7O0FBTkE7RUFBcUIsV0FBQTtFQUFjLGVBQUE7QUFXbkM7O0FBVkE7RUFBYSxrQkFBQTtFQUFxQixZQUFBO0VBQWdCLGFBQUE7RUFBZSxXQUFBO0FBaUJqRTs7QUFmQTtFQUF1QixhQUFBO0VBQWdCLG9DQUFBO0FBb0J2Qzs7QUFuQkEsa0JBQUE7O0FBQ0EsNEJBQUE7O0FBQ0E7RUFBdUIsa0JBQUE7QUF1QnZCOztBQXRCQTtFQUF3QixrQkFBQTtBQTBCeEI7O0FBdkJBO0VBQWEsZ0RBQUE7RUFDVCxhQUFBO0VBQWdCLGtCQUFBO0VBQXNCLE1BQUE7QUE2QjFDOztBQTVCSTtFQUFTLFdBQUE7QUFnQ2IiLCJmaWxlIjoiaW1hZ2Utem9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHsgIC0tYmFja2dyb3VuZDogbm9uZTt9XG5pb24tc2xpZGVzIHsgd2lkdGg6IDEwMCU7fVxuaW9uLXNsaWRlIHsgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTt9XG4uc3dpcGVyLXNsaWRlIGltZyB7ICB3aWR0aDogMTAwJTsgIG1heC13aWR0aDogMTAwJTt9XG4uem9vbS1ib3ggeyAgcG9zaXRpb246IGFic29sdXRlOyAgaGVpZ2h0OiAxMDAlOyAgIGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO31cblxuLnByb2R1Y3Qtem9vbS1tb2RhbCB7ICAtLXdpZHRoOiAxMDAlOyAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO31cbi8qIEVuZCBNb2RhbCBjc3MgKi9cbi8qIEdsb2JhbCBtb2RhbCB0cmFuc3BhcmVudCovXG4uc2MtaW9uLW1vZGFsLW1kLWggeyAgIC0tYmFja2dyb3VuZDogbm9uZTt9XG4uc2MtaW9uLW1vZGFsLWlvcy1oIHsgICAtLWJhY2tncm91bmQ6IG5vbmU7fVxuXG5cbmlvbi10b29sYmFyIHstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgLS1jb2xvcjogI2ZmZjsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICB0b3A6IDA7ICB9XG4gICAgaW9uLWljb257Y29sb3I6I2ZmZjt9Il19 */");

/***/ }),

/***/ 67664:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerRegistrationModule/customer-reg/customer-reg.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n     <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf = \"pageTitle\">{{pageTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n      </div>\n       <ion-row >\n         <ion-col size=\"4\" *ngFor=\"let item of buttData\">\n           <ion-button *ngIf=\"item?.tab_status == 'selected_tab'\" class =\"act\" (click) = \"changedTab(item)\">{{item?.tab_name}}</ion-button>\n           <ion-button *ngIf=\"item?.tab_status != 'selected_tab'\" class =\"act1 butt\" (click) = \"changedTab(item)\">{{item?.tab_name}}</ion-button>\n         </ion-col>\n         <hr>\n       </ion-row>\n        <div *ngIf =\"showImg && pageTitle != 'Approved List'\">\n          <img [src] = \"showImg\">\n        </div>\n      <div *ngIf =\"!showImg && pageTitle == 'Pending List'\">\n        <ion-row *ngFor = \"let id of custmReg\">\n          <ion-col size=\"3\">\n               <img *ngIf = \"!id?.user_image\" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n               <img *ngIf = \"id?.user_image\" class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"id?.user_image\"/>\n          </ion-col>\n          <ion-col size=\"6\" class=\"autoMargin\">\n            <p class=\"name ion-no-margin\">{{id?.full_name}}</p>\n            <p class=\"contactDiv ion-no-margin\">{{id?.contact}}</p>\n           \n            <p class=\"phone ion-no-margin\">{{id?.dealer_name}}</p>\n            <p class=\"phone ion-no-margin\">{{id?.dealer_code}}</p>\n            <p class=\"phone ion-no-margin\">{{id?.registration_sts}}</p>\n          </ion-col>\n          <ion-col class=\"but-div autoMargin\" size=\"3\">\n            <ion-button class=\"view butt\" (click)=\"view(id)\">{{id?.view_btn}}</ion-button>\n          </ion-col>\n          <hr>\n        </ion-row>\n        </div>\n        <div *ngIf =\"showImg && pageTitle == 'Approved List'\">\n          <ion-row >\n            <ion-col size=\"6\" *ngFor=\"let items of buttonData\">\n              <ion-button *ngIf=\"items?.tab_status == 'selected_tab'\" class =\"act\" (click) = \"changedTabs(items)\">{{items?.tab_name}}</ion-button>\n              <ion-button *ngIf=\"items?.tab_status == 'unselected_tab'\" class =\"act1 butt\" (click) = \"changedTabs(items)\">{{items?.tab_name}}</ion-button>\n            </ion-col>\n            <hr>\n          </ion-row>\n          <img [src] = \"showImg\">\n        </div>\n         <div *ngIf =\"!showImg  && pageTitle == 'Approved List'\">\n         <ion-row >\n          <ion-col size=\"6\" *ngFor=\"let items of buttonData\">\n            <ion-button *ngIf=\"items?.tab_status == 'selected_tab'\" class =\"act\" (click) = \"changedTabs(items)\">{{items?.tab_name}}</ion-button>\n            <ion-button *ngIf=\"items?.tab_status == 'unselected_tab'\" class =\"act1 butt\" (click) = \"changedTabs(items)\">{{items?.tab_name}}</ion-button>\n          </ion-col>\n          <hr>\n        </ion-row>\n        \n        <ion-row *ngFor = \"let id of custmReg\">\n          <ion-col size=\"3\">\n              <img *ngIf = \"!id?.user_image\" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n              <img *ngIf = \"id?.user_image\" class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"id?.user_image\"/>\n          </ion-col>\n          <ion-col size=\"6\" class=\"autoMargin\">\n            <p class=\"name ion-no-margin\">{{id?.full_name}}</p>\n            <p class=\"contactDiv ion-no-margin\">{{id?.contact}}</p>\n            \n            <p class=\"phone ion-no-margin\">{{id?.dealer_name}}</p>\n            <p class=\"phone ion-no-margin\">{{id?.dealer_code}}</p>\n            <p class=\"phone ion-no-margin\">{{id?.registration_sts}}</p>\n          </ion-col>\n          <ion-col class=\"but-div autoMargin\" size=\"3\">\n            <ion-button class=\"view butt\" (click)=\"view(id)\">{{id?.view_btn}}</ion-button>\n          </ion-col>\n          <hr>\n        </ion-row>\n\n      </div>\n\n         <div *ngIf =\"!showImg && pageTitle == 'Rejected List'\">\n          <ion-row *ngFor = \"let id of custmReg\" >\n            <ion-col size=\"3\">\n                <img *ngIf = \"!id?.user_image\" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n                <img *ngIf = \"id?.user_image\" class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"id?.user_image\"/>\n            </ion-col>\n            <ion-col size=\"6\" class=\"autoMargin\">\n              <p class=\"name ion-no-margin\">{{id?.full_name}}</p>\n              <p class=\"contactDiv ion-no-margin\">{{id?.contact}}</p>\n             \n              <p class=\"phone ion-no-margin\">{{id?.dealer_name}}</p>\n              <p class=\"phone ion-no-margin\">{{id?.dealer_code}}</p>\n              <p class=\"phone ion-no-margin\">{{id?.registration_sts}}</p>\n            </ion-col>\n            <ion-col class=\"but-div autoMargin\" size=\"3\">\n              <ion-button class=\"view butt\" (click)=\"view(id)\">{{id?.view_btn}}</ion-button>\n            </ion-col>\n            <hr>\n          </ion-row>\n         </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ 47674:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-zoom/image-zoom.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_customerRegistrationModule_customer-reg_customer-reg_module_ts-es2015.js.map