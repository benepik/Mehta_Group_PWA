(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_tabs_tabs_module_ts"], {
    /***/
    80530: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageRoutingModule": function TabsPageRoutingModule() {
          return (
            /* binding */
            _TabsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs.page */
      7942);

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [//   {
        //     path: '',
        //     loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        // },
        {
          path: 'home',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "default-src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../home/home.module */
            3467)).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "common").then(__webpack_require__.bind(__webpack_require__,
            /*! ../profileModule/profile/profile.module */
            58063)).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'customer-allocation',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_dealerModule_customer-allocation_customer-allocation_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../dealerModule/customer-allocation/customer-allocation.module */
            71689)).then(function (m) {
              return m.CustomerAllocationPageModule;
            });
          }
        }, {
          path: 'orders',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_orderModule_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../orderModule/orders/orders.module */
            8844)).then(function (m) {
              return m.OrdersPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/home',
          pathMatch: 'full'
        }]
      } // {
      //   path: '',
      //   redirectTo: '/app/login',
      //   pathMatch: 'full'
      // }
      ];

      var _TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      _TabsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TabsPageRoutingModule);
      /***/
    },

    /***/
    15564: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageModule": function TabsPageModule() {
          return (
            /* binding */
            _TabsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-routing.module */
      80530);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page */
      7942);

      var _TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      _TabsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
      })], _TabsPageModule);
      /***/
    },

    /***/
    7942: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPage": function TabsPage() {
          return (
            /* binding */
            _TabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs.page.html */
      97665);
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page.scss */
      24427);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var _profileModule_profile_profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../profileModule/profile/profile.page */
      51270);
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      51532);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/local-storage.service */
      18345); // import { Storage } from "@ionic/storage";


      var _TabsPage = /*#__PURE__*/function () {
        function TabsPage(zone, router, platform, popoverController, localStorage, apiService, sendData) {
          _classCallCheck(this, TabsPage);

          // this.forceUpdate();
          this.zone = zone;
          this.router = router;
          this.platform = platform;
          this.popoverController = popoverController;
          this.localStorage = localStorage;
          this.apiService = apiService;
          this.sendData = sendData;
          this.activeTabs = '';
        }

        _createClass(TabsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.localStorage.getStorage().then(function (storedData) {
              _this.employType = storedData.allStoreData.employee_type;
            });
            console.log('current tabs constructor==> ', this.apiService.isSelected);

            if (this.apiService.isSelected == 'true') {
              if (this.employType == 2) {
                this.router.navigateByUrl('tabs/customer-allocation');
              } else {
                this.router.navigateByUrl('tabs/orders');
              }
            } else {
              // this.setCurrentTab();
              this.apiService.isSelected = '';
              this.router.navigateByUrl('/tabs/home');
            }

            this.forceUpdate();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// this.router.navigateByUrl('tabs/tab3');
            // console.log('current tabs constructor==> ');
          }
        }, {
          key: "forceUpdate",
          value: function forceUpdate() {
            var _this2 = this;

            console.log('force Upadte call');
            this.zone.run(function () {
              _this2.localStorage.getStorage().then(function (storedData) {
                var newFcmToken = storedData.fcmToken;
                console.log("finally get new fcm token on tabs page==", newFcmToken);
                var apiKey = {
                  "registration_token": newFcmToken || _this2.apiService.fcmToken || ""
                };

                _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.forceUpdateUrl, apiKey).subscribe(function (result) {
                  console.log('force Upadte call result', result); // alert('force Upadte call result1'+JSON.stringify(result));

                  if (result.success == 1 || result.success == '1') {
                    _this2.orderShow = result.conditionCheks.order_tab_access; // this.apiService.tandc=result.term_condition_data;

                    if (result.conditionCheks.app_status == 1 || result.conditionCheks.app_status == '1') {
                      // for forceUpdate and optional upadte
                      _this2.sendData.alldata = result.conditionCheks.app_status;
                      _this2.sendData.myParam = result.force_update_data;

                      _this2.router.navigate(["/force-optional-update"]);
                    } else if (result.conditionCheks.app_status == 2 || result.conditionCheks.app_status == '2') {
                      // for optional upadte
                      if (_this2.apiService.forceUpdateCount == 1) {
                        _this2.sendData.alldata = result.conditionCheks.app_status;
                        _this2.sendData.myParam = result.force_update_data;
                        _this2.apiService.forceUpdateCount = _this2.apiService.forceUpdateCount + 1;

                        _this2.router.navigate(["/force-optional-update"]);
                      }
                    } else if (result.conditionCheks.app_status == 0 || result.conditionCheks.app_status == '0') {
                      if (result.conditionCheks.is_down == 1 || result.conditionCheks.is_down == '1') {
                        // for maintance page
                        _this2.sendData.myParam = result.maintainence_data;

                        _this2.router.navigate(["/maintenance"]);
                      } else if (result.conditionCheks.is_down == 0 || result.conditionCheks.is_down == '0') {
                        if (result.conditionCheks.tnc_verified == false) {
                          // for redirect to location page
                          _this2.sendData.alldata = result.conditionCheks.tnc_data;

                          _this2.router.navigate(['/terms-conditions']);

                          return false;
                        } else if (result.conditionCheks.registration_status.is_uploaded == false) {
                          // for redirect to registration page
                          _this2.sendData.registrationType = {
                            "request_page": "home"
                          };

                          _this2.router.navigate(['/registration']);

                          return false;
                        } else if (result.conditionCheks.profile_image_status.is_uploaded == false) {
                          _this2.sendData.alldata = {
                            "requestFor": '',
                            "requestPage": "home"
                          }; // for redirect to profile page

                          _this2.router.navigate(['/profile-upload']);

                          return false;
                        } else if (result.conditionCheks.user_location_submit.is_uploaded == false) {
                          // for redirect to location page
                          _this2.sendData.alldata = {
                            "requestFor": '',
                            "requestPage": "home"
                          };

                          _this2.router.navigate(['/geolocation']);

                          return false;
                        } else if (result.conditionCheks.show_registration_image == true) {
                          // for redirect to location page
                          _this2.sendData.alldata = result.conditionCheks.registration_image;

                          _this2.router.navigate(['/admin-approval']);

                          console.log('login data response', _this2.sendData.alldata); // this.modalCall(event);

                          return false;
                        }
                      }
                    } // this.localStorage.setStorage('allStoreData',result.data);
                    // this.route.navigate(['/tabs']);

                  } else if (result.success == 2 || result.success == '2' || result.success == 0 || result.success == '0') {
                    _this2.logOutCall();
                  }
                }, function (err) {
                  _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "logOutCall",
          value: function logOutCall() {
            var _this3 = this;

            this.zone.run(function () {
              var apiKey = {};
              console.log('login data response', apiKey);

              _this3.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.LogOutUrl, apiKey).subscribe(function (result) {
                console.log('logout data response', result);

                _this3.localStorage.remove('allStoreData');

                _this3.apiService.generateDeviceId();

                _this3.apiService.generateFCMToken();

                _this3.maintance();

                _this3.router.navigate(['/login']); //  window.location.reload();


                _this3.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
              }, function (err) {
                _this3.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "maintance",
          value: function maintance() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.localStorage.getStorage().then(function (storedData) {
                        console.log('localStorage storedData storedData000', storedData);
                      });

                    case 2:
                      this.zone.run(function () {
                        var apiKey = {};

                        _this4.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.maintanceUrl, apiKey).subscribe(function (result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!(result.success == 1 || result.success == '1')) {
                                      _context.next = 7;
                                      break;
                                    }

                                    this.maintanceData = result;
                                    _context.next = 4;
                                    return this.localStorage.setStorage('maintainanceData', result);

                                  case 4:
                                    if (result.data.is_down == 1 || result.data.is_down == '1') {
                                      this.sendData.myParam = result.maintainence_data;
                                      this.router.navigate(["/maintenance"]); //for maintance redirection page
                                    }

                                    _context.next = 8;
                                    break;

                                  case 7:
                                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');

                                  case 8:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        }, function (err) {
                          _this4.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "changeTab",
          value: function changeTab(url, event) {
            var _this5 = this;

            this.zone.run(function () {
              if (url == 'profile') {
                _this5.presentPopover(event);
              } else if (url == 'communication-list') {
                _this5.apiService.showToastMessage("Coming Soon!", 'top', 2000, 'redBg');
              } else {
                _this5.router.navigateByUrl('tabs/' + url);
              }

              _this5.activeTabs = url;
            });
          }
        }, {
          key: "setCurrentTab",
          value: function setCurrentTab() {
            var _this6 = this;

            console.log('this.tabRef.getSelected()', this.tabRef.getSelected());
            this.zone.run(function () {
              // if(this.platform?.is('mobile')){
              console.log('current tabs==> ', _this6.tabRef.getSelected());
              _this6.activeTabs = _this6.tabRef.getSelected();
            });
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverController.create({
                        component: _profileModule_profile_profile_page__WEBPACK_IMPORTED_MODULE_4__.ProfilePage,
                        cssClass: 'my-custom-class',
                        event: ev,
                        translucent: true
                      });

                    case 2:
                      popover = _context3.sent;
                      _context3.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return TabsPage;
      }();

      _TabsPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__.DataTransferService
        }];
      };

      _TabsPage.propDecorators = {
        tabRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
          args: ['openTabs', {
            read: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTabs
          }]
        }],
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChildren,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRouterOutlet]
        }]
      };
      _TabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsPage);
      /***/
    },

    /***/
    24427: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-button {\n  color: var(--headerColor);\n  border-bottom: 3px solid var(--nonSelectedTabsBorder);\n  background: var(--nonSelectedTabsBg);\n}\n\n.tab-selected {\n  border-bottom: 3px solid var(--headerColor);\n  background: var(--selectedTabBg);\n}\n\n.tab-selected ion-label {\n  font-weight: bold;\n  color: var(--whiteColor);\n  margin: 0;\n}\n\n.tab-selected ion-icon {\n  color: var(--whiteColor);\n}\n\nion-icon {\n  font-size: 25px;\n}\n\n.notificationDiv {\n  position: relative;\n}\n\n.notificationDiv p {\n  position: absolute;\n  margin: 0;\n  font-size: 12px;\n  top: -5px;\n  right: -5px;\n  border-radius: 50%;\n  min-width: 20px;\n  min-height: 20px;\n  background: red;\n  text-align: center;\n  padding: 3px 2px;\n  color: #fff;\n}\n\n.inlineDiv {\n  position: relative;\n  padding: 12px 22px;\n}\n\n.inlineDiv p.navIcon ion-icon {\n  font-size: 1.2em !important;\n  color: #6c7fcc;\n  font-weight: bold;\n}\n\n.inlineDiv p.navText1 {\n  font-size: 13px;\n  color: white;\n}\n\n.activeTab {\n  border-bottom: 3px solid white;\n}\n\n.activeTab p.navIcon ion-icon {\n  font-size: 1.2em !important;\n  color: #fff;\n  font-weight: bold;\n}\n\n.activeTab p.navText {\n  font-size: 13px;\n  color: var(--headerColor);\n}\n\n.b_logo {\n  height: 53px;\n  margin-left: 10px;\n  margin-top: 14px;\n}\n\n.b_logoIos {\n  height: 53px;\n  margin-left: 10px;\n  margin-top: 8px;\n}\n\n.tab_padd {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.transparantBgColor {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUseUJBQUE7RUFBeUIscURBQUE7RUFDcEMsb0NBQUE7QUFHSjs7QUFGQTtFQUFjLDJDQUFBO0VBQTJDLGdDQUFBO0FBT3pEOztBQU5JO0VBQVUsaUJBQUE7RUFBaUIsd0JBQUE7RUFBd0IsU0FBQTtBQVd2RDs7QUFWSTtFQUFTLHdCQUFBO0FBYWI7O0FBWEE7RUFBUyxlQUFBO0FBZVQ7O0FBWEE7RUFBaUIsa0JBQUE7QUFlakI7O0FBZEk7RUFBRSxrQkFBQTtFQUFrQixTQUFBO0VBQVMsZUFBQTtFQUFlLFNBQUE7RUFBUyxXQUFBO0VBQVcsa0JBQUE7RUFBa0IsZUFBQTtFQUM5RSxnQkFBQTtFQUFnQixlQUFBO0VBQWUsa0JBQUE7RUFBa0IsZ0JBQUE7RUFBZ0IsV0FBQTtBQTJCekU7O0FBdkJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQTBCSjs7QUF6QmM7RUFBUywyQkFBQTtFQUE2QixjQUFBO0VBQWUsaUJBQUE7QUE4Qm5FOztBQXpCSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBMkJSOztBQXRCQTtFQUV3RCw4QkFBQTtBQXdCeEQ7O0FBekJjO0VBQVMsMkJBQUE7RUFBNkIsV0FBQTtFQUFZLGlCQUFBO0FBOEJoRTs7QUE3Qkk7RUFBVSxlQUFBO0VBQWdCLHlCQUFBO0FBaUM5Qjs7QUE3QkE7RUFBUSxZQUFBO0VBQWMsaUJBQUE7RUFBa0IsZ0JBQUE7QUFtQ3hDOztBQWxDQTtFQUFXLFlBQUE7RUFBYSxpQkFBQTtFQUFrQixlQUFBO0FBd0MxQzs7QUF2Q0E7RUFBVyxnQkFBQTtFQUFrQixtQkFBQTtBQTRDN0I7O0FBM0NBO0VBQXdCLHVCQUFBO0FBK0N4QiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYnV0dG9ue2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtib3JkZXItYm90dG9tOjNweCBzb2xpZCB2YXIoLS1ub25TZWxlY3RlZFRhYnNCb3JkZXIpO1xuICAgIGJhY2tncm91bmQ6dmFyKC0tbm9uU2VsZWN0ZWRUYWJzQmcpO31cbi50YWItc2VsZWN0ZWR7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO2JhY2tncm91bmQ6dmFyKC0tc2VsZWN0ZWRUYWJCZyk7XG4gICAgaW9uLWxhYmVse2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6dmFyKC0td2hpdGVDb2xvcik7bWFyZ2luOjA7fVxuICAgIGlvbi1pY29ue2NvbG9yOnZhcigtLXdoaXRlQ29sb3IpO31cbn1cbmlvbi1pY29ue2ZvbnQtc2l6ZToyNXB4O31cblxuXG5cbi5ub3RpZmljYXRpb25EaXZ7cG9zaXRpb246cmVsYXRpdmU7XG4gICAgcHtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46MDtmb250LXNpemU6MTJweDt0b3A6LTVweDtyaWdodDotNXB4O2JvcmRlci1yYWRpdXM6NTAlO21pbi13aWR0aDoyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OjIwcHg7YmFja2dyb3VuZDpyZWQ7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzozcHggMnB4O2NvbG9yOiNmZmY7XG4gICAgfVxufVxuXG4uaW5saW5lRGl2e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMnB4IDIycHg7XG4gICAgcC5uYXZJY29ue2lvbi1pY29ue2ZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDsgY29sb3I6ICM2YzdmY2M7Zm9udC13ZWlnaHQ6IGJvbGQ7fX1cbiAgICAvLyBwLm5hdlRleHR7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMTNweDtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgLy8gICAgIC8vIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICM2YzdmY2M7XG4gICAgLy8gfVxuICAgIHAubmF2VGV4dDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICM2YzdmY2M7XG4gICAgfVxufVxuXG4uYWN0aXZlVGFie1xuICAgIHAubmF2SWNvbntpb24taWNvbntmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7IGNvbG9yOiAjZmZmO2ZvbnQtd2VpZ2h0OiBib2xkO319XG4gICAgcC5uYXZUZXh0e2ZvbnQtc2l6ZTogMTNweDtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7fWJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTt9XG4vLyBpb24tdG9vbGJhcntcbi8vICAgICBoZWlnaHQ6IDcwcHg7XG4vLyB9XG4uYl9sb2dve2hlaWdodDogNTNweDsgbWFyZ2luLWxlZnQ6IDEwcHg7bWFyZ2luLXRvcDogMTRweDt9XG4uYl9sb2dvSW9ze2hlaWdodDogNTNweDttYXJnaW4tbGVmdDogMTBweDttYXJnaW4tdG9wOiA4cHg7fVxuLnRhYl9wYWRkeyBwYWRkaW5nLXRvcDogNXB4OyBwYWRkaW5nLWJvdHRvbTogNXB4O31cbi50cmFuc3BhcmFudEJnQ29sb3J7ICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O31cblxuLy8gLmJhY2tfaW1hZ2V7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ljb24vSGVhZGVyLnBuZ1wiKTtcbi8vICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pY29uL0hlYWRlci5wbmdcIik7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vIH1cbi8vIC5wbGFjZV9sb2dve1xuLy8gICAgIHBhZGRpbmctbGVmdDogN3B4O1xuLy8gICAgIHBhZGRpbmctdG9wOiA1cHg7XG4vLyB9XG4gICAiXX0= */";
      /***/
    },

    /***/
    97665: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\" class=\"headerButtons \">\n      <div [ngClass]=\"{'deskDiv1': !platform?.is('mobile')}\">\n        <img class=\"homeBandhanLogo\" [ngClass]=\"[platform?.is('ios') ? 'b_logoIos': 'b_logo']\"\n        src=\"assets/Bandhan Icon/Bandhan yellow logo.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      </div>\n      <div *ngIf=\"!platform?.is('mobile')\" class=\"ion-text-center inlineDiv ion-activatable ripple-parent\" [ngClass]=\"{'activeTab': activeTabs=='home'}\" (click)=\"changeTab('home', $event)\">\n         <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Home.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Home</span></p>\n         <ion-ripple-effect></ion-ripple-effect>\n      </div>\n      <div *ngIf=\"!platform?.is('mobile')\" class=\"ion-text-center inlineDiv ion-activatable ripple-parent\" [ngClass]=\"{'activeTab': activeTabs=='profile'}\" (click)=\"changeTab('profile',$event)\">\n        <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Profile.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Profile</span>  </p>\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n\n\n      <div *ngIf=\"!platform?.is('mobile') && employType=='2'\" class=\"ion-text-center inlineDiv ion-activatable ripple-parent\" [ngClass]=\"{'activeTab': activeTabs=='customer-allocation'}\" (click)=\"changeTab('customer-allocation', $event)\">\n        <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Customer.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Customer</span> </p>\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n      <div *ngIf=\"!platform?.is('mobile') && orderShow==true\" class=\"ion-text-center inlineDiv ion-activatable ripple-parent\" [ngClass]=\"{'activeTab': activeTabs=='orders'}\" (click)=\"changeTab('orders', $event)\">\n        <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Shop.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Orders</span> </p>\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n     \n     <div *ngIf=\"!platform?.is('mobile')\" class=\"ion-text-center inlineDiv\" >\n      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; \n    </div>\n\n \n    </ion-buttons>\n<!-- \n    <ion-tabs >\n      <ion-tab-bar slot=\"start\" class=\"transparantBgColor\">\n        <ion-tab-button tab=\"home\">\n          <p class=\"ion-no-margin navIcon tab_padd\">\n            <img class=\"homeLogo\" src=\"assets/icon/Home.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n            &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Home</span></p>\n        </ion-tab-button>\n      <ion-tab-button tab=\"profile\" [ngClass]=\"{'activeTab': activeTabs=='profile'}\" (click)=\"changeTab('profile',$event)\">\n        <p class=\"ion-no-margin navIcon tab_padd\">\n          <img class=\"homeLogo\" src=\"assets/icon/Profile.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n          &nbsp;<span class=\"ion-no-margin navText1 homepDiv1\">Profile</span>  </p>\n      </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs> -->\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <img class=\"homeLogo\" src=\"assets/icon/Location.png\" onerror=\"this.src='assets/watermark/watermark.png'\">\n        &nbsp;<p class=\"homepDiv1 place_logo\">Gujarat</p>\n      </ion-button> -->\n      <!-- <ion-button>\n        <img class=\"homeLogo\" src=\"assets/NavbarIcon/Alert.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      </ion-button> -->\n    <!-- </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-tabs #openTabs (ionTabsDidChange)=\"setCurrentTab()\" >\n  <ion-tab-bar *ngIf=\"platform?.is('mobile')\" slot=\"bottom\"  style=\"position:relative;\" class=\"headerColor\">\n    <ion-tab-button tab=\"home\">\n      <img class=\"homeLogo\" src=\"assets/NavbarIcon/Home.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      <ion-label class=\"homepDiv\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <img class=\"homeLogo\" src=\"assets/NavbarIcon/Profile.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      <ion-label class=\"homepDiv\">Profile</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"customer-allocation\" *ngIf=\"employType=='2'\">\n      <img class=\"homeLogo\" src=\"assets/NavbarIcon/Customer.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      <ion-label class=\"homepDiv\">Customer</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"orders\" *ngIf=\"orderShow==true\">\n      <img class=\"homeLogo\" src=\"assets/NavbarIcon/Order.svg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n      <ion-label class=\"homepDiv\">Orders</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es5.js.map