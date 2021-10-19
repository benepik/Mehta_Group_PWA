(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            //   {
            //     path: '',
            //     loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
            // },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../profileModule/profile/profile.module */ 58063)).then(m => m.ProfilePageModule)
            },
            {
                path: 'customer-allocation',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_dealerModule_customer-allocation_customer-allocation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dealerModule/customer-allocation/customer-allocation.module */ 71689)).then(m => m.CustomerAllocationPageModule)
            },
            {
                path: 'orders',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../orderModule/orders/orders.module */ 8844)).then(m => m.OrdersPageModule)
            },
            // {
            //   path: 'communication-list',
            //   loadChildren: () => import('../communicationModule/communication-list/communication-list.module').then( m => m.CommunicationListPageModule)
            // },
            // {
            //   path: 'tab1',
            //   loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
            // },
            // {
            //   path: 'tab2',
            //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
            // },
            // {
            //   path: 'tab3',
            //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
            // },
            // {
            //   path: 'tab4',
            //   loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
            // },
            // {
            //   path: 'tab5',
            //   loadChildren: () => import('../tab5/tab5.module').then( m => m.Tab5PageModule)
            // },
            // {
            //   path: '',
            //   redirectTo: '/tabs/home',
            //   pathMatch: 'full'
            // }
        ]
    },
    {
        path: '',
        redirectTo: '/app/login',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var _profileModule_profile_profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profileModule/profile/profile.page */ 51270);
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data-transfer.service */ 51532);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/local-storage.service */ 18345);




// import { URLS, APP_CONFIG } from '../../../src/assets/constant';




// import { Storage } from "@ionic/storage";
// import { DataTransferService } from '../services/data-transfer.service';



let TabsPage = class TabsPage {
    constructor(zone, router, platform, popoverController, localStorage, apiService, sendData
    // private storage:Storage, private sendData:DataTransferService
    ) {
        // console.log("  this.pageType: ",  this.pageType);
        // this.platform.backButton.subscribeWithPriority(0, () => {
        //   this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        //   });
        // });
        this.zone = zone;
        this.router = router;
        this.platform = platform;
        this.popoverController = popoverController;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.sendData = sendData;
        this.activeTabs = '';
    }
    ionViewWillEnter() {
        console.log('current tabs constructor==> ', this.apiService.isSelected);
        if (this.apiService.isSelected == 'true') {
            if (this.employType == 2) {
                this.router.navigateByUrl('tabs/customer-allocation');
            }
            else {
                this.router.navigateByUrl('tabs/orders');
            }
        }
        else {
            // this.setCurrentTab();
            this.apiService.isSelected = '';
            this.router.navigateByUrl('tabs/home');
        }
        this.forceUpdate();
        this.localStorage.getStorage().then(storedData => {
            this.employType = storedData.allStoreData.employee_type;
        });
    }
    ngOnInit() {
        // this.router.navigateByUrl('tabs/tab3');
        // console.log('current tabs constructor==> ');
    }
    forceUpdate() {
        console.log('force Upadte call');
        this.zone.run(() => {
            let apiKey = {
                "registration_token": "dummy",
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.forceUpdateUrl, apiKey).subscribe((result) => {
                console.log('force Upadte call result', result);
                if (result.success == 1 || result.success == '1') {
                    this.orderShow = result.conditionCheks.order_tab_access;
                    // this.apiService.tandc=result.term_condition_data;
                    if ((result.conditionCheks.app_status == 1 || result.conditionCheks.app_status == '1')
                        && (result.conditionCheks.app_status == 2 || result.conditionCheks.app_status == '2')) {
                        // for forceUpdate and optional upadte
                    }
                    else if (result.conditionCheks.app_status == 0 || result.conditionCheks.app_status == '0') {
                        if (result.conditionCheks.is_down == 1 || result.conditionCheks.is_down == '1') {
                            // for maintance page
                        }
                        else if (result.conditionCheks.is_down == 0 || result.conditionCheks.is_down == '0') {
                            if (result.conditionCheks.tnc_verified == false) {
                                // for redirect to location page
                                this.sendData.alldata = result.conditionCheks.tnc_data;
                                this.router.navigate(['/terms-conditions']);
                                return false;
                            }
                            else if (result.conditionCheks.registration_status.is_uploaded == false) {
                                // for redirect to registration page
                                this.sendData.registrationType = { "request_page": "home" };
                                this.router.navigate(['/registration']);
                                return false;
                            }
                            else if (result.conditionCheks.profile_image_status.is_uploaded == false) {
                                this.sendData.alldata = { "requestFor": '', "requestPage": "home" };
                                // for redirect to profile page
                                this.router.navigate(['/profile-upload']);
                                return false;
                            }
                            else if (result.conditionCheks.user_location_submit.is_uploaded == false) {
                                // for redirect to location page
                                this.sendData.alldata = { "requestFor": '', "requestPage": "home" };
                                this.router.navigate(['/geolocation']);
                                return false;
                            }
                            else if (result.conditionCheks.show_registration_image == true) {
                                // for redirect to location page
                                this.sendData.alldata = result.conditionCheks.registration_image;
                                this.router.navigate(['/admin-approval']);
                                console.log('login data response', this.sendData.alldata);
                                // this.modalCall(event);
                                return false;
                            }
                        }
                    }
                    // this.localStorage.setStorage('allStoreData',result.data);
                    // this.route.navigate(['/tabs']);
                }
                else if ((result.success == 2 || result.success == '2') || (result.success == 0 || result.success == '0')) {
                    this.logOutCall();
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    logOutCall() {
        this.zone.run(() => {
            let apiKey = {};
            console.log('login data response', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.LogOutUrl, apiKey).subscribe((result) => {
                console.log('logout data response', result);
                this.localStorage.remove('allStoreData');
                this.maintance();
                this.router.navigate(['./login']);
                this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    maintance() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.zone.run(() => {
                let apiKey = {};
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.maintanceUrl, apiKey).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    if (result.success == 1 || result.success == '1') {
                        this.maintanceData = result;
                        yield this.localStorage.setStorage('maintainanceData', result);
                        if (result.data.is_down == 1 || result.data.is_down == '1') {
                            //for maintance redirection page
                        }
                    }
                    else {
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }), err => {
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        });
    }
    changeTab(url, event) {
        this.zone.run(() => {
            if (url == 'profile') {
                this.presentPopover(event);
            }
            else if (url == 'communication-list') {
                this.apiService.showToastMessage("Coming Soon!", 'top', 2000, 'redBg');
            }
            else {
                this.router.navigateByUrl('tabs/' + url);
            }
            this.activeTabs = url;
        });
    }
    setCurrentTab() {
        console.log('this.tabRef.getSelected()', this.tabRef.getSelected());
        this.zone.run(() => {
            // if(this.platform?.is('mobile')){
            console.log('current tabs==> ', this.tabRef.getSelected());
            this.activeTabs = this.tabRef.getSelected();
        });
    }
    presentPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _profileModule_profile_profile_page__WEBPACK_IMPORTED_MODULE_4__.ProfilePage,
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true
            });
            yield popover.present();
            // const { role } = await popover.onDidDismiss();
            //  console.log('onDidDismiss resolved with role', role);
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__.DataTransferService }
];
TabsPage.propDecorators = {
    tabRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['tabs', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTabs },] }],
    routerOutlets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRouterOutlet,] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  color: var(--headerColor);\n  border-bottom: 3px solid var(--nonSelectedTabsBorder);\n  background: var(--nonSelectedTabsBg);\n}\n\n.tab-selected {\n  border-bottom: 3px solid var(--headerColor);\n  background: var(--selectedTabBg);\n}\n\n.tab-selected ion-label {\n  font-weight: bold;\n  color: var(--whiteColor);\n  margin: 0;\n}\n\n.tab-selected ion-icon {\n  color: var(--whiteColor);\n}\n\nion-icon {\n  font-size: 25px;\n}\n\n.notificationDiv {\n  position: relative;\n}\n\n.notificationDiv p {\n  position: absolute;\n  margin: 0;\n  font-size: 12px;\n  top: -5px;\n  right: -5px;\n  border-radius: 50%;\n  min-width: 20px;\n  min-height: 20px;\n  background: red;\n  text-align: center;\n  padding: 3px 2px;\n  color: #fff;\n}\n\n.inlineDiv {\n  position: relative;\n  padding: 12px 22px;\n}\n\n.inlineDiv p.navIcon ion-icon {\n  font-size: 1.2em !important;\n  color: #6c7fcc;\n  font-weight: bold;\n}\n\n.inlineDiv p.navText1 {\n  font-size: 13px;\n  color: white;\n}\n\n.activeTab {\n  border-bottom: 3px solid white;\n}\n\n.activeTab p.navIcon ion-icon {\n  font-size: 1.2em !important;\n  color: #fff;\n  font-weight: bold;\n}\n\n.activeTab p.navText {\n  font-size: 13px;\n  color: var(--headerColor);\n}\n\n.b_logo {\n  height: 59px;\n  margin-left: 10px;\n  margin-top: 14px;\n}\n\n.tab_padd {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.transparantBgColor {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUseUJBQUE7RUFBeUIscURBQUE7RUFDcEMsb0NBQUE7QUFHSjs7QUFGQTtFQUFjLDJDQUFBO0VBQTJDLGdDQUFBO0FBT3pEOztBQU5JO0VBQVUsaUJBQUE7RUFBaUIsd0JBQUE7RUFBd0IsU0FBQTtBQVd2RDs7QUFWSTtFQUFTLHdCQUFBO0FBYWI7O0FBWEE7RUFBUyxlQUFBO0FBZVQ7O0FBWEE7RUFBaUIsa0JBQUE7QUFlakI7O0FBZEk7RUFBRSxrQkFBQTtFQUFrQixTQUFBO0VBQVMsZUFBQTtFQUFlLFNBQUE7RUFBUyxXQUFBO0VBQVcsa0JBQUE7RUFBa0IsZUFBQTtFQUM5RSxnQkFBQTtFQUFnQixlQUFBO0VBQWUsa0JBQUE7RUFBa0IsZ0JBQUE7RUFBZ0IsV0FBQTtBQTJCekU7O0FBdkJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQTBCSjs7QUF6QmM7RUFBUywyQkFBQTtFQUE2QixjQUFBO0VBQWUsaUJBQUE7QUE4Qm5FOztBQXpCSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBMkJSOztBQXRCQTtFQUdJLDhCQUFBO0FBdUJKOztBQXpCYztFQUFTLDJCQUFBO0VBQTZCLFdBQUE7RUFBWSxpQkFBQTtBQThCaEU7O0FBN0JJO0VBQVUsZUFBQTtFQUFnQix5QkFBQTtBQWlDOUI7O0FBM0JBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQStCSjs7QUE3QkE7RUFBd0IsdUJBQUE7QUFpQ3hCIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b257Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2JvcmRlci1ib3R0b206M3B4IHNvbGlkIHZhcigtLW5vblNlbGVjdGVkVGFic0JvcmRlcik7XG4gICAgYmFja2dyb3VuZDp2YXIoLS1ub25TZWxlY3RlZFRhYnNCZyk7fVxuLnRhYi1zZWxlY3RlZHtib3JkZXItYm90dG9tOjNweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7YmFja2dyb3VuZDp2YXIoLS1zZWxlY3RlZFRhYkJnKTtcbiAgICBpb24tbGFiZWx7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjp2YXIoLS13aGl0ZUNvbG9yKTttYXJnaW46MDt9XG4gICAgaW9uLWljb257Y29sb3I6dmFyKC0td2hpdGVDb2xvcik7fVxufVxuaW9uLWljb257Zm9udC1zaXplOjI1cHg7fVxuXG5cblxuLm5vdGlmaWNhdGlvbkRpdntwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBwe3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjowO2ZvbnQtc2l6ZToxMnB4O3RvcDotNXB4O3JpZ2h0Oi01cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWluLXdpZHRoOjIwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6MjBweDtiYWNrZ3JvdW5kOnJlZDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjNweCAycHg7Y29sb3I6I2ZmZjtcbiAgICB9XG59XG5cbi5pbmxpbmVEaXZ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEycHggMjJweDtcbiAgICBwLm5hdkljb257aW9uLWljb257Zm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50OyBjb2xvcjogIzZjN2ZjYztmb250LXdlaWdodDogYm9sZDt9fVxuICAgIC8vIHAubmF2VGV4dHtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxM3B4O2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtcbiAgICAvLyAgICAgLy8gZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6IDUwMDtjb2xvcjogIzZjN2ZjYztcbiAgICAvLyB9XG4gICAgcC5uYXZUZXh0MXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgLy8gZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6IDUwMDtjb2xvcjogIzZjN2ZjYztcbiAgICB9XG59XG5cbi5hY3RpdmVUYWJ7XG4gICAgcC5uYXZJY29ue2lvbi1pY29ue2ZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDsgY29sb3I6ICNmZmY7Zm9udC13ZWlnaHQ6IGJvbGQ7fX1cbiAgICBwLm5hdlRleHR7Zm9udC1zaXplOiAxM3B4O2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTt9XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xufVxuLy8gaW9uLXRvb2xiYXJ7XG4vLyAgICAgaGVpZ2h0OiA3MHB4O1xuLy8gfVxuLmJfbG9nb3tcbiAgICBoZWlnaHQ6IDU5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cbi50YWJfcGFkZHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4udHJhbnNwYXJhbnRCZ0NvbG9yeyAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG5cbi8vIC5iYWNrX2ltYWdle1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pY29uL0hlYWRlci5wbmdcIik7XG4vLyAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaWNvbi9IZWFkZXIucG5nXCIpO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyB9XG4vLyAucGxhY2VfbG9nb3tcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbi8vICAgICBwYWRkaW5nLXRvcDogNXB4O1xuLy8gfVxuICAgIl19 */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\" class=\"headerButtons \">\n      <div [ngClass]=\"{'deskDiv1': !platform?.is('mobile')}\">\n        <img class=\"homeBandhanLogo b_logo\" src=\"assets/Bandhan Icon/Bandhan yellow logo.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      </div>\n      <div *ngIf=\"!platform?.is('mobile')\" class=\"ion-text-center inlineDiv ion-activatable ripple-parent\" [ngClass]=\"{'activeTab': activeTabs=='home'}\" (click)=\"changeTab('home', $event)\">\n         <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Home.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Home</span></p>\n         <ion-ripple-effect></ion-ripple-effect>\n      </div>\n      <div *ngIf=\"!platform?.is('mobile')\" class=\"ion-text-center inlineDiv ion-activatable ripple-parent\" [ngClass]=\"{'activeTab': activeTabs=='profile'}\" (click)=\"changeTab('profile',$event)\">\n        <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Profile.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Profile</span>  </p>\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n\n\n      <div *ngIf=\"!platform?.is('mobile') && employType=='2'\" class=\"ion-text-center inlineDiv ion-activatable ripple-parent\" [ngClass]=\"{'activeTab': activeTabs=='customer-allocation'}\" (click)=\"changeTab('customer-allocation', $event)\">\n        <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Customer.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Customer</span> </p>\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n      <div *ngIf=\"!platform?.is('mobile') && orderShow==true\" class=\"ion-text-center inlineDiv ion-activatable ripple-parent\" [ngClass]=\"{'activeTab': activeTabs=='orders'}\" (click)=\"changeTab('orders', $event)\">\n        <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Shop.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Orders</span> </p>\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n     \n     <div *ngIf=\"!platform?.is('mobile')\" class=\"ion-text-center inlineDiv\" >\n      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; \n    </div>\n\n \n    </ion-buttons>\n<!-- \n    <ion-tabs >\n      <ion-tab-bar slot=\"start\" class=\"transparantBgColor\">\n        <ion-tab-button tab=\"home\">\n          <p class=\"ion-no-margin navIcon tab_padd\">\n            <img class=\"homeLogo\" src=\"assets/icon/Home.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n            &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Home</span></p>\n        </ion-tab-button>\n      <ion-tab-button tab=\"profile\" [ngClass]=\"{'activeTab': activeTabs=='profile'}\" (click)=\"changeTab('profile',$event)\">\n        <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Profile.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Profile</span>  </p>\n      </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs> -->\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <img class=\"homeLogo\" src=\"assets/icon/Location.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n        &nbsp;<p class=\"homepDiv1 place_logo\">Gujarat</p>\n      </ion-button>\n      <!-- <ion-button>\n        <img class=\"homeLogo\" src=\"assets/NavbarIcon/Alert.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-tabs #tabs (ionTabsDidChange)=\"setCurrentTab()\" >\n  <ion-tab-bar *ngIf=\"platform?.is('mobile')\" slot=\"bottom\"  style=\"position:relative;\" class=\"headerColor\">\n    <ion-tab-button tab=\"home\">\n      <img class=\"homeLogo\" src=\"assets/NavbarIcon/Home.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      <ion-label class=\"homepDiv\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <img class=\"homeLogo\" src=\"assets/NavbarIcon/Profile.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      <ion-label class=\"homepDiv\">Profile</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"customer-allocation\" *ngIf=\"employType=='2'\">\n      <img class=\"homeLogo\" src=\"assets/NavbarIcon/Customer.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      <ion-label class=\"homepDiv\">Customer</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"orders\" *ngIf=\"orderShow==true\">\n      <img class=\"homeLogo\" src=\"assets/NavbarIcon/Order.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      <ion-label class=\"homepDiv\">Orders</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map