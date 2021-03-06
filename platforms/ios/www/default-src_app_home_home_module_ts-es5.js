(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["default-src_app_home_home_module_ts"], {
    /***/
    56300: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsModule": function ComponentsModule() {
          return (
            /* binding */
            _ComponentsModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./spinner/spinner.component */
      48762);

      var _ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      _ComponentsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
        exports: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent]
      })], _ComponentsModule);
      /***/
    },

    /***/
    48762: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpinnerComponent": function SpinnerComponent() {
          return (
            /* binding */
            _SpinnerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./spinner.component.html */
      51595);
      /* harmony import */


      var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./spinner.component.scss */
      50395);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent() {
          _classCallCheck(this, SpinnerComponent);

          this.message = '';
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpinnerComponent;
      }();

      _SpinnerComponent.ctorParameters = function () {
        return [];
      };

      _SpinnerComponent.propDecorators = {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _SpinnerComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SpinnerComponent);
      /***/
    },

    /***/
    52003: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
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


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    3467: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      52003);
      /* harmony import */


      var _componentModule_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../componentModule/components.module */
      56300);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, _componentModule_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    62267: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.page.html */
      49764);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      2610);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _profileModule_profile_profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../profileModule/profile/profile.page */
      51270);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/local-storage.service */
      18345);
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      51532);
      /* harmony import */


      var _RegistrationModule_model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../RegistrationModule/model-camera/model-camera.page */
      39182);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(platform, zone, router, popoverController, localStorage, sendData, apiService, modalCtrl) {
          _classCallCheck(this, HomePage);

          this.platform = platform;
          this.zone = zone;
          this.router = router;
          this.popoverController = popoverController;
          this.localStorage = localStorage;
          this.sendData = sendData;
          this.apiService = apiService;
          this.modalCtrl = modalCtrl;
          this.promotedfeedData = [];
          this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            spaceBetween: 10
          };
          this.changeContainerClass = false;
        }

        _createClass(HomePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.apiService.isSelected = '';
            this.forceUpdate();
            this.localStorage.getStorage().then(function (allShiavsnhi) {
              _this.storageData = allShiavsnhi;

              _this.homePageShow();

              _this.promotedFeed();

              if (_this.platform.is("mobile")) {
                _this.changeContainerClass = false;
              } else {
                _this.changeContainerClass = true;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {//  this.reloder();
          }
        }, {
          key: "redeemDetails",
          value: function redeemDetails(id) {
            console.log('1234', this.storageData.allStoreData);

            if (this.storageData.allStoreData.employee_type == 1) {
              this.sendData.alldata = {
                'customer_id': '',
                'employee_type': '',
                'redeem_for': id,
                'request_page': 'customer'
              };
            } else if (this.storageData.allStoreData.employee_type == 2) {
              this.sendData.alldata = {
                'customer_id': '',
                'employee_type': '',
                'redeem_for': id,
                'request_page': 'dealer'
              };
            }

            this.router.navigate(['/pointsgiftlist']);
          }
        }, {
          key: "reloder",
          value: function reloder() {
            setTimeout(function () {
              window.location.reload();
            }, 200);
          }
        }, {
          key: "promotedFeed",
          value: function promotedFeed() {
            var _this2 = this;

            this.zone.run(function () {
              var apiKey = {};

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.PromotedFeedUrl, apiKey).subscribe(function (result) {
                console.log("promotedfeed: ", result);

                if (result.success == 1) {
                  _this2.promotedfeedData = result.data;
                } else {
                  _this2.promotedfeedData.banner_image = result.noDataImage;
                }
              }, function (err) {
                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "homePageShow",
          value: function homePageShow() {
            var _this3 = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {};

              _this3.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.HomeUrl, apiKey).subscribe(function (result) {
                console.log("home: ", result);

                _this3.apiService.presentLoadingClose();

                if (result.success == 1) {
                  _this3.Reedem = result.data.reward_card;
                  _this3.QuickAccess = result.data.quick_access;
                  _this3.Communication = result.data.post_list;
                  _this3.userDetail = result.data.user_details; // setTimeout(() => {
                  //   window.location.reload()
                  // }, 200);
                } else {}
              }, function (err) {
                _this3.apiService.presentLoadingClose();

                _this3.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "gotoCommnunication",
          value: function gotoCommnunication(item) {
            if (item.flag_type == 1) {
              this.sendData.alldata = item;
              this.router.navigate(['/communication-detail']);
            }
          }
        }, {
          key: "ViewMore",
          value: function ViewMore() {
            this.router.navigate(['/communication-list']);
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover, _yield$popover$onDidD, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _profileModule_profile_profile_page__WEBPACK_IMPORTED_MODULE_2__.ProfilePage,
                        cssClass: 'my-custom-class',
                        event: ev,
                        translucent: true // componentProps: {
                        //   onclick: () => {
                        //     popover.dismiss();
                        //   },
                        // },

                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      _context.next = 7;
                      return popover.onDidDismiss();

                    case 7:
                      _yield$popover$onDidD = _context.sent;
                      role = _yield$popover$onDidD.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "gotoQuickAccess",
          value: function gotoQuickAccess(id) {
            var _this4 = this;

            this.zone.run(function () {
              console.log('1 waah==', id); // if(id.redirect_url =="account-statment" || id.redirect_url =="purchasehistory" || id.redirect_url =="product-catalogue"){

              if (id.redirect_url == "polls") {
                _this4.apiService.showToastMessage("Coming Soon!", 'top', 2000, 'redBg');
              } else if (id.redirect_url == "mobile") {
                _this4.addCustomer(id); //this.sendData.alldata=id;
                //this.sendData.loginKey={"type":'Register',"requestPage":'officer'}

              } else {
                _this4.sendData.registrationType = {
                  'auto_id': '',
                  'request_page': 'self'
                };
                _this4.sendData.alldata = {
                  'customer_id': '',
                  'employee_type': '',
                  'request_page': 'self',
                  'backKey': 'home'
                }; //this.sendData.alldata=id,

                _this4.router.navigateByUrl(id.redirect_url);
              }
            });
          }
        }, {
          key: "gotoCustomer",
          value: function gotoCustomer(item) {
            if (item.redirect_url == "redemption-report") {
              this.apiService.showToastMessage("Coming Soon!", 'top', 2000, "redBg");
            } else {
              this.router.navigateByUrl(item.redirect_url);
            }
          }
        }, {
          key: "forceUpdate",
          value: function forceUpdate() {
            var _this5 = this;

            console.log('force Upadte call');
            this.zone.run(function () {
              _this5.localStorage.getStorage().then(function (storedData) {
                var newFcmToken = storedData.fcmToken;
                console.log("finally get new fcm token on tabs page==", newFcmToken);
                var apiKey = {
                  "registration_token": newFcmToken || _this5.apiService.fcmToken || ""
                };

                _this5.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.forceUpdateUrl, apiKey).subscribe(function (result) {
                  console.log('force Upadte call result', result); // alert('force Upadte call result'+JSON.stringify(result));

                  if (result.success == 1 || result.success == '1') {
                    _this5.orderShow = result.conditionCheks.order_tab_access;

                    if (result.conditionCheks.app_status == 1 || result.conditionCheks.app_status == '1') {
                      // for forceUpdate 
                      _this5.sendData.alldata = result.conditionCheks.app_status;
                      _this5.sendData.myParam = result.force_update_data;

                      _this5.router.navigate(["/force-optional-update"]);
                    } else if (result.conditionCheks.app_status == 2 || result.conditionCheks.app_status == '2') {
                      // for optional upadte
                      if (_this5.apiService.forceUpdateCount == 1) {
                        _this5.sendData.alldata = result.conditionCheks.app_status;
                        _this5.sendData.myParam = result.force_update_data;
                        _this5.apiService.forceUpdateCount = _this5.apiService.forceUpdateCount + 1;

                        _this5.router.navigate(["/force-optional-update"]);
                      }
                    } else if (result.conditionCheks.app_status == 0 || result.conditionCheks.app_status == '0') {
                      if (result.conditionCheks.is_down == 1 || result.conditionCheks.is_down == '1') {
                        // for maintance page
                        _this5.sendData.myParam = result.maintainence_data;

                        _this5.router.navigate(["/maintenance"]);
                      } else if (result.conditionCheks.is_down == 0 || result.conditionCheks.is_down == '0') {
                        if (result.conditionCheks.tnc_verified == false) {
                          // for redirect to location page
                          _this5.sendData.alldata = result.conditionCheks.tnc_data;

                          _this5.router.navigate(['/terms-conditions']);

                          return false;
                        } else if (result.conditionCheks.registration_status.is_uploaded == false) {
                          // for redirect to registration page
                          _this5.sendData.registrationType = {
                            "request_page": "home"
                          };

                          _this5.router.navigate(['/registration']);

                          return false;
                        } else if (result.conditionCheks.profile_image_status.is_uploaded == false) {
                          _this5.sendData.alldata = {
                            "requestFor": '',
                            "requestPage": "home"
                          }; // for redirect to profile page

                          _this5.router.navigate(['/profile-upload']);

                          return false;
                        } else if (result.conditionCheks.user_location_submit.is_uploaded == false) {
                          // for redirect to location page
                          _this5.sendData.alldata = {
                            "requestFor": '',
                            "requestPage": "home"
                          };

                          _this5.router.navigate(['/geolocation']);

                          return false;
                        } else if (result.conditionCheks.show_registration_image == true) {
                          // for redirect to location page
                          _this5.sendData.alldata = result.conditionCheks.registration_image;

                          _this5.router.navigate(['/admin-approval']);

                          console.log('login data response', _this5.sendData.alldata); // this.modalCall(event);

                          return false;
                        }
                      }
                    } // this.localStorage.setStorage('allStoreData',result.data);
                    // this.route.navigate(['/tabs']);

                  } else if (result.success == 2 || result.success == '2' || result.success == 0 || result.success == '0') {
                    _this5.logOutCall();
                  }
                }, function (err) {
                  _this5.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "logOutCall",
          value: function logOutCall() {
            var _this6 = this;

            this.zone.run(function () {
              var apiKey = {};
              console.log('login data response', apiKey);

              _this6.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.LogOutUrl, apiKey).subscribe(function (result) {
                console.log('logout data response', result);

                _this6.localStorage.remove('allStoreData');

                _this6.apiService.generateDeviceId();

                _this6.apiService.generateFCMToken();

                _this6.maintance();

                _this6.router.navigate(['/login']); //  window.location.reload();


                _this6.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
              }, function (err) {
                _this6.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "maintance",
          value: function maintance() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.localStorage.getStorage().then(function (storedData) {
                        console.log('localStorage storedData storedData000', storedData);
                      });

                    case 2:
                      this.zone.run(function () {
                        var apiKey = {};

                        _this7.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.maintanceUrl, apiKey).subscribe(function (result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    if (!(result.success == 1 || result.success == '1')) {
                                      _context2.next = 7;
                                      break;
                                    }

                                    this.maintanceData = result;
                                    _context2.next = 4;
                                    return this.localStorage.setStorage('maintainanceData', result);

                                  case 4:
                                    if (result.data.is_down == 1 || result.data.is_down == '1') {
                                      this.sendData.myParam = result.maintainence_data;
                                      this.router.navigate(["/maintenance"]);
                                    }

                                    _context2.next = 8;
                                    break;

                                  case 7:
                                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');

                                  case 8:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        }, function (err) {
                          _this7.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addCustomer",
          value: function addCustomer(allVal) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this8 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.sendData.alldata = allVal;
                      _context4.next = 3;
                      return this.modalCtrl.create({
                        component: _RegistrationModule_model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_7__.ModelCameraPage,
                        componentProps: {
                          data: allVal
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 3:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          console.log('dataReturned:', dataReturned);
                          _this8.sendData.itemDetails = dataReturned;

                          if (dataReturned.data.data.button_text == "New Customer") {
                            _this8.sendData.loginKey = {
                              "type": 'Register',
                              "requestPage": 'officer'
                            };

                            _this8.router.navigate(['/mobile']);
                          } else {
                            _this8.sendData.loginKey = {
                              "type": 'Existing',
                              "requestPage": 'officer'
                            };

                            _this8.router.navigate(['/mobile']);
                          }
                        } else {}
                      });
                      _context4.next = 7;
                      return modal.present();

                    case 7:
                      return _context4.abrupt("return", _context4.sent);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__.DataTransferService
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomePage);
      /***/
    },

    /***/
    50395: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#loader {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader .dot {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n\n#loader .dot::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0);\n  width: 87.5px;\n}\n\n#loader .dot:nth-child(7n+1) {\n  transform: rotate(45deg);\n}\n\n#loader .dot:nth-child(7n+1)::before {\n  -webkit-animation: 0.8s linear 0.1s normal none infinite running load;\n          animation: 0.8s linear 0.1s normal none infinite running load;\n  background: #00ff80 none repeat scroll 0 0;\n}\n\n#loader .dot:nth-child(7n+2) {\n  transform: rotate(90deg);\n}\n\n#loader .dot:nth-child(7n+2)::before {\n  -webkit-animation: 0.8s linear 0.2s normal none infinite running load;\n          animation: 0.8s linear 0.2s normal none infinite running load;\n  background: #00ffea none repeat scroll 0 0;\n}\n\n#loader .dot:nth-child(7n+3) {\n  transform: rotate(135deg);\n}\n\n#loader .dot:nth-child(7n+3)::before {\n  -webkit-animation: 0.8s linear 0.3s normal none infinite running load;\n          animation: 0.8s linear 0.3s normal none infinite running load;\n  background: #00aaff none repeat scroll 0 0;\n}\n\n#loader .dot:nth-child(7n+4) {\n  transform: rotate(180deg);\n}\n\n#loader .dot:nth-child(7n+4)::before {\n  -webkit-animation: 0.8s linear 0.4s normal none infinite running load;\n          animation: 0.8s linear 0.4s normal none infinite running load;\n  background: #0040ff none repeat scroll 0 0;\n}\n\n#loader .dot:nth-child(7n+5) {\n  transform: rotate(225deg);\n}\n\n#loader .dot:nth-child(7n+5)::before {\n  -webkit-animation: 0.8s linear 0.5s normal none infinite running load;\n          animation: 0.8s linear 0.5s normal none infinite running load;\n  background: #2a00ff none repeat scroll 0 0;\n}\n\n#loader .dot:nth-child(7n+6) {\n  transform: rotate(270deg);\n}\n\n#loader .dot:nth-child(7n+6)::before {\n  -webkit-animation: 0.8s linear 0.6s normal none infinite running load;\n          animation: 0.8s linear 0.6s normal none infinite running load;\n  background: #9500ff none repeat scroll 0 0;\n}\n\n#loader .dot:nth-child(7n+7) {\n  transform: rotate(315deg);\n}\n\n#loader .dot:nth-child(7n+7)::before {\n  -webkit-animation: 0.8s linear 0.7s normal none infinite running load;\n          animation: 0.8s linear 0.7s normal none infinite running load;\n  background: magenta none repeat scroll 0 0;\n}\n\n#loader .dot:nth-child(7n+8) {\n  transform: rotate(360deg);\n}\n\n#loader .dot:nth-child(7n+8)::before {\n  -webkit-animation: 0.8s linear 0.8s normal none infinite running load;\n          animation: 0.8s linear 0.8s normal none infinite running load;\n  background: #ff0095 none repeat scroll 0 0;\n}\n\n#loader .loading {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n\n@-webkit-keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n.spinner-message {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBRko7O0FBS0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLRTtFQUNFLHdCQUFBO0FBRko7O0FBS0U7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLRTtFQUNFLHdCQUFBO0FBRko7O0FBS0U7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBS0U7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBS0U7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBS0U7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBS0U7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBS0U7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBS0U7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLRTtFQUNFLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQUZKO0FBQ0Y7O0FBRkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQUZKO0FBQ0Y7O0FBS0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQUhKO0FBQ0Y7O0FBTUU7RUFDRSxrQkFBQTtBQUpKIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEBpbXBvcnQgXCJ+c3R5bGVzL3NwaW5uZXJcIjtcblxuI2xvYWRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbiAgXG4gICNsb2FkZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE3NXB4O1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Qge1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogODcuNXB4O1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6OmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogODcuNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHdpZHRoOiA4Ny41cHg7XG4gIH1cbiAgXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisxKTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMwMGZmODAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisyKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzIpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC4ycyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzAwZmZlYSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC4zcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzAwYWFmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC40cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzAwNDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC41cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzJhMDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC42cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzk1MDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC43cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogbWFnZW50YSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC44cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogI2ZmMDA5NSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5sb2FkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm90dG9tOiAtNDBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxvYWQge1xuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxvYWQge1xuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICAuc3Bpbm5lci1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    2610: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".homeBandhanLogo {\n  height: 40px;\n}\n\n.homeLogo {\n  height: 15px;\n}\n\n.homeLogo, .homeBandhanLogo {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.homepDiv {\n  font-size: 18px;\n  color: var(--headerColor);\n}\n\n.userDetailsDiv {\n  background-image: linear-gradient(0deg, var(--headerColor), rgba(176, 29, 34, 0.72));\n  padding: 10px 10px;\n  border: 1px solid #cacfd2;\n  height: 110px;\n}\n\n.userDetailsDiv .userDetailImage {\n  height: 50px;\n  width: 100%;\n  padding: 10px;\n}\n\n.userDetailsDiv .userDiv {\n  border: 1px solid #fff;\n  height: 30px;\n  border-radius: 11px;\n  position: relative;\n}\n\n.userDetailsDiv .userDiv .userTypeP {\n  font-size: 12px;\n  color: #fff;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translate(0px, -50%);\n}\n\n.titleDiv {\n  color: white;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.quickAccessImg {\n  height: 40px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  display: block;\n  margin: auto;\n}\n\n.quickAccessP {\n  font-size: 12px;\n  color: black;\n}\n\n.communicationImage {\n  height: 68px;\n  width: 100%;\n  border-radius: 3px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.marginTop {\n  margin-top: 5px;\n}\n\n.reedemImage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.avalpointsColor, .totalAmmountDiv {\n  color: var(--reedeemColor);\n}\n\n.avalpointsColor {\n  font-size: 13px;\n  font-size: 15px;\n}\n\n.Reedeembtn {\n  color: var(--reedeemColor);\n  border: 3px solid var(--reedeemColor);\n  border-radius: 16px;\n  min-width: 30%;\n  font-weight: bold;\n  margin-top: 11px;\n  font-size: 16px;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.reedeemIcon {\n  height: 15px;\n  width: 15px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.TotalE {\n  margin-bottom: 7px;\n  font-size: 18px;\n}\n\n.TotalR {\n  margin-bottom: 5px;\n  font-size: 30px;\n}\n\nion-slides.promoted .sliderImage {\n  width: 100% !important;\n  height: 100% !important;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.redeem_point {\n  margin-top: 12px;\n}\n\n.quick {\n  padding: 10px;\n  width: 100%;\n}\n\n.autopadd {\n  padding: 14px;\n}\n\n.quickAccessImg_col {\n  padding-top: 12px;\n}\n\n.blurDiv {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-position: center;\n  background-size: 100%;\n  filter: blur(7px);\n  z-index: -1;\n}\n\n.relativeDiv1 {\n  position: relative;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  height: 200px;\n}\n\n.padd10 {\n  padding: 10px;\n}\n\n.doubleBorder {\n  border-right-color: #d6d6d6;\n  border-right-width: 0.02em;\n  border-right-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQWlCLFlBQUE7QUFBakI7O0FBQ0E7RUFBVSxZQUFBO0FBR1Y7O0FBRkE7RUFBNEIsc0JBQUE7S0FBQSxtQkFBQTtBQU01Qjs7QUFMQTtFQUFVLGVBQUE7RUFBZ0IseUJBQUE7QUFVMUI7O0FBVEE7RUFBZ0Isb0ZBQUE7RUFBa0Ysa0JBQUE7RUFDOUYseUJBQUE7RUFBMEIsYUFBQTtBQWU5Qjs7QUFkSTtFQUFpQixZQUFBO0VBQWEsV0FBQTtFQUFZLGFBQUE7QUFtQjlDOztBQWxCSTtFQUFTLHNCQUFBO0VBQXVCLFlBQUE7RUFBYSxtQkFBQTtFQUFvQixrQkFBQTtBQXdCckU7O0FBdkJRO0VBQVcsZUFBQTtFQUFnQixXQUFBO0VBVlIsb0JBQUE7RUFBb0IsNEJBQUE7RUFBNEIscUJBVVI7RUFWa0MsZ0JBQUE7RUFDakcsdUJBQUE7RUFTa0Usa0JBQUE7RUFBbUIsT0FBQTtFQUFTLFFBQUE7RUFBUyxRQUFBO0VBQ2hHLCtCQUFBO0FBb0NYOztBQWpDQTtFQUFVLFlBQUE7RUFBWSxlQUFBO0VBQWdCLGlCQUFBO0FBdUN0Qzs7QUF0Q0E7RUFBZ0IsWUFBQTtFQUFhLHNCQUFBO0tBQUEsbUJBQUE7RUFBb0IsY0FBQTtFQUFlLFlBQUE7QUE2Q2hFOztBQTVDQTtFQUFjLGVBQUE7RUFBaUIsWUFBQTtBQWlEL0I7O0FBaERBO0VBQW9CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBbUIsb0JBQUE7S0FBQSxpQkFBQTtBQXVEaEU7O0FBdERBO0VBQVcsZUFBQTtBQTBEWDs7QUF6REE7RUFBYSxrQkFBQTtFQUFrQixNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxTQUFBO0VBQVMsV0FBQTtFQUFXLHNCQUFBO0VBQXNCLFlBQUE7RUFBWSxXQUFBO0FBcUUxRzs7QUFwRUE7RUFBa0MsMEJBQUE7QUF3RWxDOztBQXZFQTtFQUFpQixlQUFBO0VBQWlCLGVBQUE7QUE0RWxDOztBQTNFQTtFQUFZLDBCQUFBO0VBQTBCLHFDQUFBO0VBQXFDLG1CQUFBO0VBQW1CLGNBQUE7RUFDMUYsaUJBQUE7RUFBa0IsZ0JBQUE7RUFBaUIsZUFBQTtFQUFnQixvQkFBQTtFQUFBLHVCQUFBO0FBcUZ2RDs7QUFwRkE7RUFBYSxZQUFBO0VBQVksV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUEwRnJDOztBQXpGQTtFQUFRLGtCQUFBO0VBQW9CLGVBQUE7QUE4RjVCOztBQTdGQTtFQUFRLGtCQUFBO0VBQW1CLGVBQUE7QUFrRzNCOztBQWhHSTtFQUFhLHNCQUFBO0VBQXVCLHVCQUFBO0VBQXdCLHNCQUFBO0tBQUEsbUJBQUE7QUFzR2hFOztBQXJHSTtFQUFjLGdCQUFBO0FBeUdsQjs7QUF4R0k7RUFBTyxhQUFBO0VBQWMsV0FBQTtBQTZHekI7O0FBNUdJO0VBQVcsYUFBQTtBQWdIZjs7QUEvR0k7RUFBcUIsaUJBQUE7QUFtSHpCOztBQWxISTtFQUFTLGtCQUFBO0VBQWtCLE1BQUE7RUFBTSxTQUFBO0VBQVMsT0FBQTtFQUFPLFFBQUE7RUFBUSwyQkFBQTtFQUEyQixxQkFBQTtFQUFxQixpQkFBQTtFQUFpQixXQUFBO0FBOEg5SDs7QUE3SEk7RUFBYyxrQkFBQTtFQUFtQixXQUFBO0VBQVksbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsYUFBQTtBQXFJeEY7O0FBcElJO0VBQVEsYUFBQTtBQXdJWjs7QUF2SUk7RUFBYywyQkFBQTtFQUEyQiwwQkFBQTtFQUEyQix5QkFBQTtBQTZJeEUiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHtkaXNwbGF5Oi13ZWJraXQtYm94Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWxpbmUtY2xhbXA6JGxpbmVzO292ZXJmbG93OmhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO31cbi5ob21lQmFuZGhhbkxvZ297aGVpZ2h0OiA0MHB4O31cbi5ob21lTG9nb3toZWlnaHQ6IDE1cHg7fVxuLmhvbWVMb2dvLCAuaG9tZUJhbmRoYW5Mb2dve29iamVjdC1maXQ6IGNvbnRhaW47fVxuLmhvbWVwRGl2e2ZvbnQtc2l6ZTogMThweDtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7fVxuLnVzZXJEZXRhaWxzRGl2e2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB2YXIoLS1oZWFkZXJDb2xvciksIHJnYigxNzYgMjkgMzQgLyA3MiUpKTtwYWRkaW5nOiAxMHB4IDEwcHg7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNmZDI7aGVpZ2h0OiAxMTBweDtcbiAgICAudXNlckRldGFpbEltYWdle2hlaWdodDogNTBweDt3aWR0aDogMTAwJTtwYWRkaW5nOiAxMHB4O31cbiAgICAudXNlckRpdntib3JkZXI6IDFweCBzb2xpZCAjZmZmO2hlaWdodDogMzBweDtib3JkZXItcmFkaXVzOiAxMXB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnVzZXJUeXBlUHtmb250LXNpemU6IDEycHg7Y29sb3I6ICNmZmY7QGluY2x1ZGUgbGluZS1jbGFtcCgyKTtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDsgcmlnaHQ6IDA7dG9wOiA1MCU7XG4gICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7fVxuICAgIH1cbn1cbi50aXRsZURpdntjb2xvcjp3aGl0ZTtmb250LXNpemU6IDE1cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxuLnF1aWNrQWNjZXNzSW1ne2hlaWdodDogNDBweDtvYmplY3QtZml0OiBjb250YWluO2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogYXV0bzt9XG4ucXVpY2tBY2Nlc3NQe2ZvbnQtc2l6ZTogMTJweDsgY29sb3I6YmxhY2s7fVxuLmNvbW11bmljYXRpb25JbWFnZXtoZWlnaHQ6IDY4cHg7d2lkdGg6IDEwMCU7Ym9yZGVyLXJhZGl1czogM3B4O29iamVjdC1maXQ6IGNvdmVyO31cbi5tYXJnaW5Ub3B7bWFyZ2luLXRvcDogNXB4O31cbi5yZWVkZW1JbWFnZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt6LWluZGV4Oi0xO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO31cbi5hdmFscG9pbnRzQ29sb3IsLnRvdGFsQW1tb3VudERpdntjb2xvcjogdmFyKC0tcmVlZGVlbUNvbG9yKTt9XG4uYXZhbHBvaW50c0NvbG9ye2ZvbnQtc2l6ZTogMTNweDsgZm9udC1zaXplOiAxNXB4O31cbi5SZWVkZWVtYnRue2NvbG9yOnZhcigtLXJlZWRlZW1Db2xvcik7Ym9yZGVyOjNweCBzb2xpZCB2YXIoLS1yZWVkZWVtQ29sb3IpO2JvcmRlci1yYWRpdXM6MTZweDttaW4td2lkdGg6MzAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO21hcmdpbi10b3A6IDExcHg7Zm9udC1zaXplOiAxNnB4O3RleHQtdHJhbnNmb3JtOiBpbml0aWFsO31cbi5yZWVkZWVtSWNvbntoZWlnaHQ6MTVweDt3aWR0aDogMTVweDtvYmplY3QtZml0OiBjb250YWluO31cbi5Ub3RhbEV7bWFyZ2luLWJvdHRvbTogN3B4OyBmb250LXNpemU6IDE4cHg7fVxuLlRvdGFsUnttYXJnaW4tYm90dG9tOiA1cHg7Zm9udC1zaXplOiAzMHB4O31cbmlvbi1zbGlkZXMucHJvbW90ZWR7XG4gICAgLnNsaWRlckltYWdle3dpZHRoOiAxMDAlICFpbXBvcnRhbnQ7aGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7b2JqZWN0LWZpdDogY29udGFpbjt9fVxuICAgIC5yZWRlZW1fcG9pbnR7bWFyZ2luLXRvcDoxMnB4O31cbiAgICAucXVpY2t7cGFkZGluZzogMTBweDt3aWR0aDogMTAwJTt9XG4gICAgLmF1dG9wYWRkeyBwYWRkaW5nOjE0cHg7fVxuICAgIC5xdWlja0FjY2Vzc0ltZ19jb2x7IHBhZGRpbmctdG9wOiAxMnB4O31cbiAgICAuYmx1ckRpdntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJTtmaWx0ZXI6Ymx1cig3cHgpO3otaW5kZXg6LTE7fVxuICAgIC5yZWxhdGl2ZURpdjF7cG9zaXRpb246IHJlbGF0aXZlO3dpZHRoOiAxMDAlO2JvcmRlci1yYWRpdXM6IDEwcHg7IG92ZXJmbG93OiBoaWRkZW47IGhlaWdodDogMjAwcHg7fVxuICAgIC5wYWRkMTB7cGFkZGluZzoxMHB4O31cbiAgICAuZG91YmxlQm9yZGVye2JvcmRlci1yaWdodC1jb2xvcjojZDZkNmQ2O2JvcmRlci1yaWdodC13aWR0aDogLjAyZW07IGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7fVxuICAgIC8vIC5kb3VibGVCb3JkZXI6bnRoLWxhc3QtY2hpbGQoMSl7Ym9yZGVyOiBub25lO31cbiJdfQ== */";
      /***/
    },

    /***/
    51595: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div >\n  <div class=\"row\">\n    <div id=\"loader\">\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"loading\"></div>\n    </div>\n\n    <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\n      {{message}}\n    </p>\n  </div>\n</div>";
      /***/
    },

    /***/
    49764: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  \n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\" [ngClass]=\"{'ion-padding': changeContainerClass==true}\">\n  <div [ngClass]=\"[platform?.is('ios') ? 'containerIos': 'container']\">\n    <ion-row >\n      <ion-col [size]=\"12\">\n        <ion-row>\n          <ion-col [size]=\"12\"  size-sm=\"12\" size-md=\"6\" size-lg=\"6\" [ngClass]=\"{'increasePadding': changeContainerClass==true}\">\n            <br *ngIf=\"platform.width()>740\">\n            <div class=\"differentPagerDiv\">\n              <ion-slides *ngIf=\"promotedfeedData\" pager=\"true\" [options]=\"slideOpts\" \n              class=\"promoted boxShodowDiv borderRediDiv \">\n                <ion-slide *ngFor=\"let item of promotedfeedData\">       \n                <div class=\"relativeDiv1\" tappable (click)=\"gotoCommnunication(item)\">\n                  <img  class=\" sliderImage borderRediDiv\" [src]=\"item?.banner_image\" onerror=\"this.src='assets/watermark/watermark.png'\"> \n                  <div [style.background-image]=\"'url(' + item?.banner_image + ')'\" class=\"blurDiv\"></div>\n                </div>\n                </ion-slide>\n              </ion-slides>\n            </div>\n   \n            <br *ngIf=\"Reedem\">\n            <br *ngIf=\"platform.width()>740\">\n            <ion-row *ngIf=\"userDetail\">\n              <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\n                <p class=\" titleDiv ion-no-margin ion-margin-top\">{{userDetail?.title}}</p>\n              </ion-col>\n              <ion-col [size]=\"6\" size-sm=\"4\" size-md=\"3\" size-lg=\"3\" *ngFor=\"let item of userDetail?.cards\">\n                <div class=\"userDetailsDiv borderRediDiv\">\n                  <img class=\"userDetailImage\" [src]=\"item?.icon\" onerror=\"this.src='assets/watermark/watermark.png'\">\n                  <div class=\"userDiv\" (click)=\"gotoCustomer(item)\">\n                    <p class=\"userTypeP ion-text-center ion-no-margin\">{{item?.type}}</p>\n                  </div>               \n                </div>\n              \n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"Reedem\" >\n              <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"relativeDiv boxShodowDiv borderRediDiv\">\n                <img [src]=\"Reedem?.redeem_background\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"reedemImage\">\n                <div class=\"ion-padding-horizontal\">\n                  <p class=\"totalAmmountDiv TotalE\">{{Reedem?.title}}</p>\n                  <h3 class=\"totalAmmountDiv ion-no-margin TotalR\"><b>{{Reedem?.total_points}}</b></h3>\n                  <ion-button size=\"small\" class=\"Reedeembtn\" color=\"danger\" shape=\"round\" tappable (click)=\"redeemDetails('self')\">\n                  <img [src]=\"Reedem?.redeem_icon\" onerror=\"this.src='assets/watermark/watermark.png'\" \n                  class=\"reedeemIcon\">&nbsp;<p class=\"totalAmmountDiv\">{{Reedem?.redeem_text}}</p></ion-button>\n                  <ion-row class=\"redeem_point\">\n                    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"5\" size-lg=\"5\" class=\"ion-text-left\">\n                      <p class=\"avalpointsColor \" [ngClass]=\"{'ion-no-margin': platform.is('mobile')}\">{{Reedem?.available_point_text}} :{{Reedem?.available_points}}</p>\n                    </ion-col>\n                    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"7\" size-lg=\"7\" class=\"ion-text-left\">\n                      <p class=\"avalpointsColor\" [ngClass]=\"{'ion-no-margin': platform.is('mobile')}\">{{Reedem?.points_redeem_text}}  {{Reedem?.points_redeemed}}</p>\n                    </ion-col>\n                  </ion-row>\n                </div>\n\n              </ion-col>\n            </ion-row>\n\n          </ion-col>\n\n\n\n\n\n          <ion-col [size]=\"12\"  size-sm=\"12\" size-md=\"6\" size-lg=\"6\" [ngClass]=\"{increasePadding: changeContainerClass==true}\">\n          <ion-row >\n            <ion-col [size]=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\" class=\"ion-no-padding\">\n              <p class=\" titleDiv \">{{QuickAccess?.title}}</p>\n            </ion-col>\n            <ion-col hidden [size]=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-no-padding\">\n              <p class=\"ViewMoreBtn ion-text-right \">{{QuickAccess?.buttonText}}</p>\n            </ion-col>\n            <ion-row  class=\"whiteCol borderRediDiv widthtotalDiv \" >\n              <ion-col class=\"quickAccessImg_col\" [size]=\"6\" size-sm=\"3\" size-md=\"3\" size-lg=\"3\" *ngFor=\"let item of QuickAccess?.menu_list\">\n              <div class=doubleBorder tappable (click)=\"gotoQuickAccess(item)\">\n                <img class=\"quickAccessImg\" [src]=\"item?.icon\" onerror=\"this.src='assets/watermark/watermark.png'\">\n                <p class=\"quickAccessP ion-text-center\">{{item?.name}}</p> \n              </div>\n              \n            </ion-col>\n            </ion-row>\n\n\n          </ion-row>\n          <ion-row>\n            <ion-col [size]=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\">\n              <p class=\" titleDiv  marginTop \">{{Communication?.title}}</p>\n            </ion-col>\n            <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\n              <p class=\"ViewMoreBtn ion-text-right ion-no-margin marginTop\" tappable (click)=\"ViewMore()\">{{Communication?.buttonText}}</p>\n            </ion-col>\n            </ion-row>\n            <div class=\"padd10 whiteCol borderRediDiv \" *ngIf=\"Communication\">\n              <ion-row  class=\"quick borderBtmDiv widthtotalDiv\" *ngFor=\"let item of Communication?.list\">\n                <ion-col [size]=\"4\" size-sm=\"2\" size-md=\"3\" size-lg=\"2\"  class=\"autoMargin ion-no-padding \">\n                  <img class=\"communicationImage\" [src]=\"item?.cover_image\" onerror=\"this.src='assets/watermark/watermark.png'\">                \n              </ion-col>\n              <ion-col class=\"autopadd\" [size]=\"8\" size-sm=\"10\" size-md=\"9\" size-lg=\"10\" tappable (click)=\"gotoCommnunication(item)\">\n                <p class=\"titleP ion-no-margin\">{{item?.title}}</p>\n                <p class=\"dateP \">{{item?.start_date}}</p>\n              </ion-col>\n              </ion-row>\n            </div>\n        \n\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n  </div>\n<!-- <app-spinner></app-spinner> -->\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_home_home_module_ts-es5.js.map