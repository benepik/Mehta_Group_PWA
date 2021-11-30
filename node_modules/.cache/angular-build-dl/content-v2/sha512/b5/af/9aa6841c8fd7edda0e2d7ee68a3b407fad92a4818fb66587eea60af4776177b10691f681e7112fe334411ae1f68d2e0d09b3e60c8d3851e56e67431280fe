(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["default-src_app_profileModule_profile_profile_page_ts"], {
    /***/
    51270: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePage": function ProfilePage() {
          return (
            /* binding */
            _ProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile.page.html */
      73625);
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page.scss */
      35312);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      20138);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _RegistrationModule_model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../RegistrationModule/model-camera/model-camera.page */
      39182);
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      18345);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532); //import { Platform } from '@ionic/angular';


      var _ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(camera, actionSheetController, file, storage, router, platform, sendData, modalCtrl, popoverController, toastController, zone, apiService, alertController) {
          _classCallCheck(this, ProfilePage);

          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.file = file;
          this.storage = storage;
          this.router = router;
          this.platform = platform;
          this.sendData = sendData;
          this.modalCtrl = modalCtrl;
          this.popoverController = popoverController;
          this.toastController = toastController;
          this.zone = zone;
          this.apiService = apiService;
          this.alertController = alertController;
          this.win = window;
          this.userImg = "";
          this.files = [];
          this.croppedImagePath = "";
          this.isLoading = false;
          this.formData = [];
          this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
          };
          this.showImgOption = false;
        }

        _createClass(ProfilePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.apiService.isSelected = '';
            this.profileShow();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "profileShow",
          value: function profileShow() {
            var _this = this;

            this.zone.run(function () {
              var apiKey = {};

              _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.SideMenuUrl, apiKey).subscribe(function (result) {
                console.log("SideMenuUrl: ", result);

                if (result.success == 1) {
                  _this.profileData = result.data;
                } else {}
              }, function (err) {
                _this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "gotoDetail",
          value: function gotoDetail(item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.getTop();

                    case 2:
                      popover = _context.sent;

                      if (!popover) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 6;
                      return popover.dismiss(null);

                    case 6:
                      // this.popoverController.dismiss(null);
                      this.zone.run(function () {
                        if ((item === null || item === void 0 ? void 0 : item.redirect_url) == "logout") {
                          _this2.presentAlertConfirm();
                        } else if (item.redirect_url == "accounts-detail") {
                          if (_this2.profileData.emp_data.employee_type == "1") {
                            _this2.sendData.registrationType = {
                              "request_page": "account_detail"
                            };
                            _this2.sendData.alldata = _this2.profileData.emp_data.employee_type;
                            console.log('registrationType', _this2.sendData.registrationType);

                            _this2.router.navigate(['./registration']);
                          } else {
                            _this2.router.navigate(['./accounts-detail']);
                          }
                        } else {
                          _this2.router.navigateByUrl(item === null || item === void 0 ? void 0 : item.redirect_url);
                        }
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Are you sure, you want to logout?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this3.LogOutFun();

                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "LogOutFun",
          value: function LogOutFun() {
            var _this4 = this;

            this.zone.run(function () {
              var apiKey = {};
              console.log('login data response', apiKey);

              _this4.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.LogOutUrl, apiKey).subscribe(function (result) {
                console.log('logout data response', result); // this.accountData=result.data.account_details;

                _this4.storage.remove('allStoreData');

                _this4.storage.getStorage().then(function (storedData) {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            console.log('this is all stored data', storedData);

                            if (this.platform.is('desktop')) {
                              console.log('not mobile platform');
                              this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
                              setTimeout(function () {
                                window.location.reload();
                              }, 200);
                              this.apiService.generateDeviceId();
                              this.apiService.generateFCMToken();
                              this.maintance();
                              this.router.navigate(['./login']); // this.appCtrl.getRootNav().setRoot(yourcomponent);
                              //  await location.reload();
                              // this.maintance();
                            } else {
                              this.apiService.generateDeviceId();
                              this.apiService.generateFCMToken();
                              this.maintance();
                              this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');
                              this.router.navigate(['./login']);
                              console.log('mobile platform');
                            }

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));
                });
              }, function (err) {
                _this4.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "maintance",
          value: function maintance() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.storage.getStorage().then(function (storedData) {
                        console.log('localStorage storedData storedData000', storedData);
                      });

                    case 2:
                      this.zone.run(function () {
                        var apiKey = {};

                        _this5.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.maintanceUrl, apiKey).subscribe(function (result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    if (!(result.success == 1 || result.success == '1')) {
                                      _context4.next = 7;
                                      break;
                                    }

                                    this.maintanceData = result;
                                    _context4.next = 4;
                                    return this.storage.setStorage('maintainanceData', result);

                                  case 4:
                                    if (result.data.is_down == 1 || result.data.is_down == '1') {//for maintance redirection page
                                    }

                                    _context4.next = 8;
                                    break;

                                  case 7:
                                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');

                                  case 8:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        }, function (err) {
                          _this5.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });
                      });

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openSelectImageOpt",
          value: function openSelectImageOpt(obj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log('selectImage browser'); // this.currentObj=obj;

                      if (!(this.showImgOption == false)) {
                        _context6.next = 12;
                        break;
                      }

                      this.showImgOption = true;
                      _context6.next = 5;
                      return this.modalCtrl.create({
                        component: _RegistrationModule_model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_6__.ModelCameraPage,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          data: ''
                        }
                      });

                    case 5:
                      modal = _context6.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        console.log(dataReturned);

                        if (dataReturned !== null) {
                          _this6.UplaodData = dataReturned.data;
                          _this6.dataReturned = dataReturned.data.data; // this.currentObj.answer = this.dataReturned.data;

                          console.log(" this.dataReturned:", _this6.dataReturned); // this.userImg = this.dataReturned.data;

                          _this6.userImg = _this6.dataReturned.filebaseUrl;

                          if (_this6.userImg == undefined) {
                            _this6.userImg = '';
                          }
                        } else {
                          _this6.userImg = '';
                        }
                      });
                      _context6.next = 9;
                      return modal.present();

                    case 9:
                      return _context6.abrupt("return", _context6.sent);

                    case 12:
                      this.showImgOption = false;

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ProfilePage;
      }();

      _ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__.DataTransferService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }];
      };

      _ProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePage);
      /***/
    },

    /***/
    35312: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profileIcon {\n  height: 20px;\n  width: 100%;\n}\n\n.profileDiv {\n  font-size: 16px;\n  color: black;\n}\n\n.desktitle {\n  font-size: 17px;\n  color: black;\n}\n\n.nameDiv, .deskDiv {\n  color: #fff;\n}\n\n.deskDiv {\n  font-size: 18px;\n  line-height: 22px;\n}\n\n.nameDiv {\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.nameDiv1 {\n  font-size: 14px;\n  line-height: 20px;\n  color: #fff;\n}\n\n.userIconImgDiv {\n  height: 130px;\n  width: 130px;\n  margin: auto;\n  position: relative;\n  color: #fff;\n  padding: 5px;\n  border: 5px solid #fff;\n  border-radius: 50%;\n}\n\n.userIconImgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.userIconImgDiv .posDiv {\n  position: absolute;\n  right: -22px;\n  top: 10px;\n}\n\n.userIconImgDiv .posDiv ion-icon {\n  font-size: 35px;\n}\n\n.forDesktopImgDiv {\n  height: 70px;\n  width: 70px;\n  padding: 3px;\n  border: 3px solid #fff;\n}\n\n.forDesktopImgDiv .posDiv {\n  right: -5px;\n  top: 5px;\n}\n\n.forDesktopImgDiv .posDiv ion-icon {\n  font-size: 20px;\n}\n\n.sidemenu_row {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\nion-content {\n  --background:linear-gradient(#68090354, rgba(243, 242, 242, 0.97));\n}\n\n.act {\n  text-transform: capitalize;\n  --background: transparent !important;\n  border: 1px solid;\n  border-radius: 24px;\n  height: 30px;\n  color: white;\n  width: 100%;\n}\n\n.act_p {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsWUFBQTtFQUFhLFdBQUE7QUFHMUI7O0FBRkE7RUFBWSxlQUFBO0VBQWlCLFlBQUE7QUFPN0I7O0FBTkE7RUFBVyxlQUFBO0VBQ1AsWUFBQTtBQVVKOztBQU5BO0VBQWtCLFdBQUE7QUFVbEI7O0FBVEE7RUFBUyxlQUFBO0VBQWdCLGlCQUFBO0FBY3pCOztBQWJBO0VBQVMsZUFBQTtFQUFnQixpQkFBQTtBQWtCekI7O0FBakJBO0VBQVUsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixXQUFBO0FBdUI1Qzs7QUFwQkE7RUFBZ0IsYUFBQTtFQUFhLFlBQUE7RUFBWSxZQUFBO0VBQVksa0JBQUE7RUFBa0IsV0FBQTtFQUNuRSxZQUFBO0VBQVksc0JBQUE7RUFBc0Isa0JBQUE7QUE4QnRDOztBQTdCSTtFQUFJLFdBQUE7RUFBVyxZQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtFQUFpQixrQkFBQTtBQW1DaEQ7O0FBbENJO0VBQVEsa0JBQUE7RUFBa0IsWUFBQTtFQUFZLFNBQUE7QUF1QzFDOztBQXRDUTtFQUFTLGVBQUE7QUF5Q2pCOztBQXRDQTtFQUFrQixZQUFBO0VBQVksV0FBQTtFQUFXLFlBQUE7RUFBWSxzQkFBQTtBQTZDckQ7O0FBNUNJO0VBQVEsV0FBQTtFQUFXLFFBQUE7QUFnRHZCOztBQS9DUTtFQUFTLGVBQUE7QUFrRGpCOztBQS9DQTtFQUFlLGtCQUFBO0VBQW1CLGVBQUE7QUFvRGxDOztBQW5EQTtFQUVJLGtFQUFBO0FBcURKOztBQXBEQTtFQUNJLDBCQUFBO0VBQ0Esb0NBQUE7RUFHRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBcURIOztBQW5EQTtFQUNJLGVBQUE7QUFzREoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUljb257aGVpZ2h0OiAyMHB4O3dpZHRoOiAxMDAlO31cbi5wcm9maWxlRGl2e2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IGJsYWNrO31cbi5kZXNrdGl0bGV7Zm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgIC8vIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xufVxuXG4ubmFtZURpdiwuZGVza0Rpdntjb2xvcjogI2ZmZjt9XG4uZGVza0Rpdntmb250LXNpemU6IDE4cHg7bGluZS1oZWlnaHQ6IDIycHg7fVxuLm5hbWVEaXZ7Zm9udC1zaXplOiAxNnB4O2xpbmUtaGVpZ2h0OiAyMHB4O31cbi5uYW1lRGl2MXtmb250LXNpemU6IDE0cHg7bGluZS1oZWlnaHQ6IDIwcHg7Y29sb3I6I2ZmZjt9XG5cblxuLnVzZXJJY29uSW1nRGl2e2hlaWdodDoxMzBweDt3aWR0aDoxMzBweDttYXJnaW46YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O2JvcmRlcjo1cHggc29saWQgI2ZmZjtib3JkZXItcmFkaXVzOjUwJTtcbiAgICBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyO2JvcmRlci1yYWRpdXM6NTAlO31cbiAgICAucG9zRGl2e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0yMnB4O3RvcDoxMHB4O1xuICAgICAgICBpb24taWNvbntmb250LXNpemU6MzVweDt9XG4gICAgfVxufVxuLmZvckRlc2t0b3BJbWdEaXZ7aGVpZ2h0OjcwcHg7d2lkdGg6NzBweDtwYWRkaW5nOjNweDtib3JkZXI6M3B4IHNvbGlkICNmZmY7XG4gICAgLnBvc0RpdntyaWdodDotNXB4O3RvcDo1cHg7XG4gICAgICAgIGlvbi1pY29ue2ZvbnQtc2l6ZToyMHB4O31cbiAgICB9XG59XG4uc2lkZW1lbnVfcm93eyBtYXJnaW4tYm90dG9tOiA1cHg7bWFyZ2luLXRvcDogNXB4O31cbmlvbi1jb250ZW50e1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KCM2ODA5MDM1NCwgcmdiYSgyNDMsIDI0MiwgMjQyLCAwLjk3KSl9XG4uYWN0e1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLy8gIC0tYm9yZGVyLWNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICAvLyBjb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgaGVpZ2h0OiAzMHB4O1xuICAgY29sb3I6d2hpdGU7XG4gICB3aWR0aDogMTAwJTtcbn1cbi5hY3RfcHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    73625: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>profile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content >\n  <div [ngClass]=\"{container: platform?.is('mobile')}\">\n        <ion-row class=\"bgDiv\" style=\"background-image: url('assets/Bandhan Icon/Login banner.png');\">\n            <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"3\" >\n              <br *ngIf=\"platform?.is('ios')\">\n              <div class=\"userIconImgDiv\" [ngClass]=\"{'forDesktopImgDiv': platform?.is('desktop')}\">\n                <img *ngIf=\"userImg==''\" [src]=\"profileData?.emp_data?.user_image\"  onerror=\"this.src='assets/watermark/watermark.png'\" \n                [ngClass]=\"[platform?.is('mobile')? 'deskImg' : 'profileImg']\">\n                <img *ngIf=\"userImg !='' \" [src]=\"userImg\"  onerror=\"this.src='assets/watermark/watermark.png'\" \n                [ngClass]=\"[platform?.is('mobile')? 'deskImg' : 'profileImg']\">\n                <!-- [ngClass]=\"[platform?.is('mobile')? 'deskImg' : 'profileImg']\" -->\n                <div class=\"posDiv\">\n                  <!-- <ion-icon name=\"camera\" *ngIf=\"platform?.is('cordova')\" tappable (click) = \"selectImage('img')\"></ion-icon> -->\n                  <!-- <div class=\"overDiv\" *ngIf=\"platform?.is('cordova')\" tappable (click)=\"pickImage()\"></div> -->\n                  <ion-icon name=\"camera\"  tappable (click)=\"openSelectImageOpt('img')\"></ion-icon>\n                  <!-- *ngIf=\"!platform?.is('cordova')\" -->\n                </div>\n              </div>\n            </ion-col>\n            <ion-col  [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" [ngClass]=\"[platform?.is('mobile')? 'ion-text-center' : 'ion-padding-top']\">\n              <p class=\"ion-no-margin\" [ngClass]=\"[platform?.is('mobile')? 'deskDiv' : 'nameDiv']\">\n                {{profileData?.emp_data?.full_name}}\n                <span *ngIf=\"profileData?.emp_data?.customer_type_name!=''\">({{profileData?.emp_data?.customer_type_name}})</span>\n                <span *ngIf=\"profileData?.emp_data?.dealer_code!=''\">({{profileData?.emp_data?.dealer_code}})</span></p>\n              <p class=\"nameDiv ion-no-margin\">{{profileData?.emp_data?.contact}}</p>\n              <p class=\"nameDiv1 ion-no-margin\" *ngIf=\"profileData?.emp_data?.dealers!=''\">Dealers: {{profileData?.emp_data?.dealers}}</p>\n              <!-- [ngClass]=\"{platform?.is('mobile')? 'deskDiv' :'nameDiv'}\" -->\n             \n               \n              \n              \n            </ion-col>\n            <ion-col>\n              <div class= \"act ion-text-center\" *ngIf=\"profileData?.button_info?.isButtonApp ==true\">\n                <p class=\"act_p\">{{profileData?.button_info?.buttonText}}</p></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu_row borderBtmDiv\" *ngFor=\"let item of profileData?.sidemenu_list\" tappable (click)=\"gotoDetail(item)\">\n            <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\">\n              <img [src]=\"item?.icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"profileIcon\">\n            </ion-col>\n            <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\" class=\"autoMargin borderBtmDiv\">\n              <p class=\"ion-no-margin\" [ngClass]=\"[platform?.is('mobile')? 'desktitle' : 'profileDiv']\">{{item?.name}}</p>\n            </ion-col>\n          </ion-row>\n        </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_profileModule_profile_profile_page_ts-es5.js.map