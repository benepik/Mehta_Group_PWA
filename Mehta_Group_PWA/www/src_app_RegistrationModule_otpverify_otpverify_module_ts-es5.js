(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_otpverify_otpverify_module_ts"], {
    /***/
    27222: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpverifyPageRoutingModule": function OtpverifyPageRoutingModule() {
          return (
            /* binding */
            _OtpverifyPageRoutingModule
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


      var _otpverify_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otpverify.page */
      14119);

      var routes = [{
        path: '',
        component: _otpverify_page__WEBPACK_IMPORTED_MODULE_0__.OtpverifyPage
      }];

      var _OtpverifyPageRoutingModule = function OtpverifyPageRoutingModule() {
        _classCallCheck(this, OtpverifyPageRoutingModule);
      };

      _OtpverifyPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OtpverifyPageRoutingModule);
      /***/
    },

    /***/
    10533: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpverifyPageModule": function OtpverifyPageModule() {
          return (
            /* binding */
            _OtpverifyPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _otpverify_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otpverify-routing.module */
      27222);
      /* harmony import */


      var _otpverify_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otpverify.page */
      14119);

      var _OtpverifyPageModule = function OtpverifyPageModule() {
        _classCallCheck(this, OtpverifyPageModule);
      };

      _OtpverifyPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _otpverify_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpverifyPageRoutingModule],
        declarations: [_otpverify_page__WEBPACK_IMPORTED_MODULE_1__.OtpverifyPage]
      })], _OtpverifyPageModule);
      /***/
    },

    /***/
    14119: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpverifyPage": function OtpverifyPage() {
          return (
            /* binding */
            _OtpverifyPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_otpverify_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./otpverify.page.html */
      20867);
      /* harmony import */


      var _otpverify_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otpverify.page.scss */
      51557);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      18345);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/constant */
      56544);

      var _OtpverifyPage = /*#__PURE__*/function () {
        function OtpverifyPage(route, platform, apiService, zone, sendData, localStorage, navCtrl) {
          _classCallCheck(this, OtpverifyPage);

          this.route = route;
          this.platform = platform;
          this.apiService = apiService;
          this.zone = zone;
          this.sendData = sendData;
          this.localStorage = localStorage;
          this.navCtrl = navCtrl;
          this.FirstOtp = "";
          this.SecondOtp = "";
          this.ThirdOtp = "";
          this.FourthOtp = "";
          this.priviousData = this.sendData.alldata;
          this.mobileNumberData = this.priviousData.apiData;
          this.reg = this.sendData.itemDetails;
          console.log('login priviousData', this.priviousData);
          console.log('login reg', this.reg);
          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          });
        }

        _createClass(OtpverifyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "moveFocus",
          value: function moveFocus(nextElement, val, index) {
            if (index < 4) {
              if (this.SecondOtp == undefined || this.SecondOtp == "") {
                nextElement.setFocus();
              } else if (this.ThirdOtp == undefined || this.ThirdOtp == "") {
                nextElement.setFocus();
              } else if (this.FourthOtp == undefined || this.FourthOtp == "") {
                nextElement.setFocus();
              }
            } else {}
          }
        }, {
          key: "checkFocus",
          value: function checkFocus(index) {
            console.log("********", index);

            if (index == 1) {
              this.FirstOtp = "";
            } else if (index == 2) {
              this.SecondOtp = "";
            } else if (index == 3) {
              this.ThirdOtp = "";
            } else if (index == 4) {
              this.FourthOtp = "";
            }
          }
        }, {
          key: "Continue",
          value: function Continue() {
            var _this = this;

            this.zone.run(function () {
              _this.apiService.presentLoadingDefault();

              var apiKey = {
                "contact": _this.priviousData.phonenumber,
                "otp": _this.FirstOtp.trim() + _this.SecondOtp.trim() + _this.ThirdOtp.trim() + _this.FourthOtp.trim(),
                "employee_id": _this.mobileNumberData.user_id,
                "type": _this.mobileNumberData.data.type,
                "dealer_id": _this.priviousData.dealer_id,
                "request_page": _this.priviousData.requestPage,
                "request_for": _this.mobileNumberData.user_id
              };

              _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.otpSubmitUrl, apiKey).subscribe(function (result) {
                _this.apiService.presentLoadingClose();

                if (result.success == 1) {
                  //this.priviousData.phonenumber='';
                  if (result.request_page == 'dealer') {
                    _this.sendData.registrationType = result;
                    _this.sendData.alldata = _this.mobileNumberData.user_id;

                    _this.route.navigate(['/registration']); // if(this.reg.data.data.show_form == true){
                    //   this.route.navigate(['/registration']);
                    // }
                    // else{
                    //   this.route.navigateByUrl("/tabs");
                    // }


                    console.log('1 sendData', _this.sendData.alldata);
                  } else if (result.request_page == 'officer') {
                    result.frompage = 'otp';
                    _this.sendData.registrationType = result;
                    _this.sendData.alldata = _this.mobileNumberData.user_id;

                    if (_this.reg.data.data.show_form == true) {
                      _this.route.navigate(['/registration']);
                    } else {
                      _this.route.navigateByUrl("/tabs");
                    }

                    console.log('2 sendData', _this.sendData.alldata);
                  } else {
                    _this.localStorage.setStorage('allStoreData', result.data);

                    if (result.tnc_verified == 0) {
                      _this.route.navigate(['/terms-conditions']);
                    } else {
                      _this.localStorage.getStorage().then(function (allShiavsnhi) {
                        console.log('2 allShiavsnhi', allShiavsnhi);

                        if (allShiavsnhi) {
                          // this.sendData.registrationType=this.priviousData.requestPage;
                          console.log('2 allShiavsnhi==', allShiavsnhi); // alert(3);

                          _this.route.navigateByUrl("/tabs/home", {
                            replaceUrl: true
                          }); //  this.route.navigate(['./tabs']);
                          //  this.route.navigate(['./home']);

                        }
                      });
                    }
                  }
                } else {
                  _this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this.apiService.presentLoadingClose();

                _this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            }); // this.route.navigate(['./registration']);
          }
        }, {
          key: "SendOtp",
          value: function SendOtp(Sendtype, messageType) {
            var _this2 = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {
                "contact": _this2.priviousData.phonenumber,
                "send_type": Sendtype,
                "message_type": messageType
              };
              _this2.mobileNumberData.data.type = "3";

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.MobileSubmitUrl, apiKey).subscribe(function (result) {
                _this2.apiService.presentLoadingClose();

                if (result.message) {
                  _this2.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                } else {}
              }, function (err) {
                _this2.apiService.presentLoadingClose();

                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "mobileno",
          value: function mobileno() {
            // if(this.priviousData.requestPage=='dealer'){
            // }
            this.route.navigate(['./mobile']);
          }
        }]);

        return OtpverifyPage;
      }();

      _OtpverifyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }];
      };

      _OtpverifyPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-otpverify',
        template: _raw_loader_otpverify_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otpverify_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OtpverifyPage);
      /***/
    },

    /***/
    81343: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageZoomPage": function ImageZoomPage() {
          return (
            /* binding */
            _ImageZoomPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./image-zoom.page.html */
      47674);
      /* harmony import */


      var _image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-zoom.page.scss */
      32968);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/local-storage.service */
      18345);

      var _ImageZoomPage = /*#__PURE__*/function () {
        function ImageZoomPage(navParams, modalCtrl, localStorage) {
          var _this3 = this;

          _classCallCheck(this, ImageZoomPage);

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
          this.localStorage.getStorage().then(function (result) {
            _this3.loginUserData = result.allStoreData;
          });
        }

        _createClass(ImageZoomPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.slides.lockSwipes(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.table(this.navParams);
            this.zoomData = this.navParams.data.data;
            console.log('img==> ', this.zoomData);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
            this.slides.lockSwipes(false);
          }
        }, {
          key: "download",
          value: function download() {}
        }]);

        return ImageZoomPage;
      }();

      _ImageZoomPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService
        }];
      };

      _ImageZoomPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides]
        }]
      };
      _ImageZoomPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ImageZoomPage);
      /***/
    },

    /***/
    51532: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTransferService": function DataTransferService() {
          return (
            /* binding */
            _DataTransferService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../image-zoom/image-zoom.page */
      81343);

      var _DataTransferService = /*#__PURE__*/function () {
        function DataTransferService(modalController) {
          _classCallCheck(this, DataTransferService);

          this.modalController = modalController;
        }

        _createClass(DataTransferService, [{
          key: "zoomSingleImage",
          value: function zoomSingleImage(path) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__.ImageZoomPage,
                        cssClass: 'my-custom-class',
                        // swipeToClose: true,
                        // mode: 'ios', backdropDismiss: true,
                        // presentingElement: this.routerOutlet.nativeEl,
                        componentProps: {
                          data: path
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "readMoreHTML",
          value: function readMoreHTML(str, max, add) {
            console.log('str==> ', str);

            if (str && str.length > max) {
              var tempStr = str.substring(0, max);
              var openAtag = tempStr.split("<a ");
              var closeAtag = tempStr.split("</a>"); // console.log('openAtag== ', openAtag.length);
              // console.log('closeAtag== ', closeAtag.length);

              if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>'; // console.log("equal== ", str);

                return str + " " + add;
              } else {
                var nextStr = str.substring(max, str.length); // console.log("remaining sub string******", nextStr);

                var nextCloseAtagIndex = nextStr.search("</a>"); // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);

                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4); // console.log("final******", str);

                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>'; // console.log("not equal== ", str);

                return str + " " + add;
              } // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
              // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);

            } else {
              return str;
            }
          }
        }]);

        return DataTransferService;
      }();

      _DataTransferService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _DataTransferService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DataTransferService);
      /***/
    },

    /***/
    51557: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".col {\n  text-align: end;\n}\n\n.para {\n  color: #B01D22;\n  font-size: 14px;\n}\n\nion-list {\n  padding-bottom: 15px;\n}\n\nion-list ion-item {\n  border: 0 !important;\n  width: 273px;\n}\n\nion-list ion-item ion-input {\n  border-bottom: 1px solid rgba(204, 204, 204, 0.6) !important;\n  margin: 0 16px;\n  color: var(--text-light2);\n  font-size: 1.95rem !important;\n  font-weight: 500 !important;\n  --padding-bottom: 5px !important;\n}\n\n.butt {\n  text-align: center;\n  margin-top: 90px;\n}\n\n.ionic_btn {\n  --background: #B01D22;\n  border-radius: 8px;\n  width: 85px;\n  height: 32px;\n  font-size: 12px;\n}\n\n.banner_bg {\n  margin-top: -66px;\n  left: 0;\n  width: 100%;\n  display: block;\n}\n\n.butt1 {\n  text-align: center;\n}\n\n.ionic_btn {\n  --background: #B01D22;\n  --border-radius: 14px;\n  width: 113px;\n  text-transform: capitalize;\n  height: 30px;\n  font-size: 14px;\n}\n\n.box {\n  width: 60px;\n  height: 45px;\n  border: 1px solid #B01D22;\n  border-radius: 6px;\n  margin: auto;\n}\n\n.boxInput {\n  text-align: center;\n}\n\n.grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.box ion-input {\n  font-size: 23px;\n}\n\n.small {\n  width: 120px;\n  text-align: right;\n  margin-top: -10px;\n}\n\n.small_p {\n  width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cHZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksb0JBQUE7QUFHSjs7QUFESTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQUdSOztBQURRO0VBQ0ksNERBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFHWjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBSTtFQUVJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjs7QUFBSTtFQUVJLGlCQUFBO0VBQ0MsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRVQ7O0FBQ0k7RUFDSSxrQkFBQTtBQUVSOztBQUFRO0VBRUkscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRVo7O0FBQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBR1o7O0FBRVE7RUFDSSxrQkFBQTtBQUNaOztBQUNRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUVaOztBQUFRO0VBQ0ksZUFBQTtBQUdaOztBQURRO0VBQU8sWUFBQTtFQUFlLGlCQUFBO0VBQW1CLGlCQUFBO0FBT2pEOztBQU5RO0VBQVMsWUFBQTtBQVVqQiIsImZpbGUiOiJvdHB2ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4ucGFyYXtcbiAgICBjb2xvcjogI0IwMUQyMjtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tbGlzdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMjczcHg7XG5cbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4uYnV0dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICB9XG4gICAgLmlvbmljX2J0bntcbiAgICAgICAgLy8gY29sb3I6ICNmNWY2Zjk7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0IwMUQyMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5iYW5uZXJfYmcge1xuICAgICAgICAvLyB0b3A6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC02NnB4O1xuICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIH1cbiAgICAgXG4gICAgLmJ1dHQxe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmlvbmljX2J0bntcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjZjVmNmY5O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjQjAxRDIyO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDExM3B4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJveHtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0IwMUQyMjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAvLyAuYm94MXtcbiAgICAgICAgLy8gICAgIHBhZGRpbmc6MDtcbiAgICAgICAgLy8gfVxuICAgICAgICAuYm94SW5wdXR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWR7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib3ggaW9uLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgfVxuICAgICAgICAuc21hbGx7d2lkdGg6IDEyMHB4OyAgdGV4dC1hbGlnbjogcmlnaHQ7IG1hcmdpbi10b3A6LTEwcHg7fVxuICAgICAgICAuc21hbGxfcHt3aWR0aDogMTI1cHg7fSJdfQ== */";
      /***/
    },

    /***/
    32968: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: none;\n}\n\nion-slides {\n  width: 100%;\n}\n\nion-slide {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.product-zoom-modal {\n  --width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* End Modal css */\n\n/* Global modal transparent*/\n\n.sc-ion-modal-md-h {\n  --background: none;\n}\n\n.sc-ion-modal-ios-h {\n  --background: none;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: #fff;\n  position: absolute;\n  top: 0;\n}\n\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksa0JBQUE7QUFDWjs7QUFBQTtFQUFhLFdBQUE7QUFJYjs7QUFIQTtFQUFhLDhCQUFBO0FBT2I7O0FBTkE7RUFBcUIsV0FBQTtFQUFjLGVBQUE7QUFXbkM7O0FBVkE7RUFBYSxrQkFBQTtFQUFxQixZQUFBO0VBQWdCLGFBQUE7RUFBZSxXQUFBO0FBaUJqRTs7QUFmQTtFQUF1QixhQUFBO0VBQWdCLG9DQUFBO0FBb0J2Qzs7QUFuQkEsa0JBQUE7O0FBQ0EsNEJBQUE7O0FBQ0E7RUFBdUIsa0JBQUE7QUF1QnZCOztBQXRCQTtFQUF3QixrQkFBQTtBQTBCeEI7O0FBdkJBO0VBQWEsZ0RBQUE7RUFDVCxhQUFBO0VBQWdCLGtCQUFBO0VBQXNCLE1BQUE7QUE2QjFDOztBQTVCSTtFQUFTLFdBQUE7QUFnQ2IiLCJmaWxlIjoiaW1hZ2Utem9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHsgIC0tYmFja2dyb3VuZDogbm9uZTt9XG5pb24tc2xpZGVzIHsgd2lkdGg6IDEwMCU7fVxuaW9uLXNsaWRlIHsgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTt9XG4uc3dpcGVyLXNsaWRlIGltZyB7ICB3aWR0aDogMTAwJTsgIG1heC13aWR0aDogMTAwJTt9XG4uem9vbS1ib3ggeyAgcG9zaXRpb246IGFic29sdXRlOyAgaGVpZ2h0OiAxMDAlOyAgIGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO31cblxuLnByb2R1Y3Qtem9vbS1tb2RhbCB7ICAtLXdpZHRoOiAxMDAlOyAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO31cbi8qIEVuZCBNb2RhbCBjc3MgKi9cbi8qIEdsb2JhbCBtb2RhbCB0cmFuc3BhcmVudCovXG4uc2MtaW9uLW1vZGFsLW1kLWggeyAgIC0tYmFja2dyb3VuZDogbm9uZTt9XG4uc2MtaW9uLW1vZGFsLWlvcy1oIHsgICAtLWJhY2tncm91bmQ6IG5vbmU7fVxuXG5cbmlvbi10b29sYmFyIHstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgLS1jb2xvcjogI2ZmZjsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICB0b3A6IDA7ICB9XG4gICAgaW9uLWljb257Y29sb3I6I2ZmZjt9Il19 */";
      /***/
    },

    /***/
    20867: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center abc1\">\n    <ion-col size-xl=\"4\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary': platform.width()>740}\">\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <img src = \"assets/icon/logo.svg\" class=\"small_p\">\n          </ion-col>\n          <ion-col class=\"col\">\n            <img src = \"assets/icon/abc.png\" class=\"small\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <br>\n      <ion-row>\n        <ion-col push-lg=\"1\">\n          <p class=\"ion-no-margin frstmsg\" [innerHTML]=\"mobileNumberData?.data?.FirstMsg\"></p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col push-lg=\"1\">\n        <p tappable (click)=\"mobileno()\" class =\"para\">{{mobileNumberData?.data?.changeNumberText}}&nbsp;{{mobileNumberData?.data?.SecondMsg}}</p>\n      </ion-col>\n    </ion-row>  \n            <!-- <ion-grid class=\"grid\"> -->\n              <ion-row class = \"boxInput\">\n                <ion-col class=\"box1\" [size]=\"3\">\n                 <!-- <div class = \"box\"> -->\n                  <ion-input class = \"box\" maxlength=\"1\" mode=\"md\" placeholder=\"*\" type=\"tel\" (ionFocus)=\"checkFocus(1)\"\n                    #otp1 (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\"></ion-input>\n                  <!-- </div> -->\n                  </ion-col>\n                <ion-col class=\"box1\" [size]=\"3\">\n                  <!-- <div > -->\n                 <ion-input class = \"box\" maxlength=\"1\" mode=\"md\" placeholder=\"*\" type=\"tel\" (ionFocus)=\"checkFocus(2)\"\n                 #otp2  (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\"></ion-input>\n                <!-- </div> -->\n                </ion-col>\n                <ion-col class=\"box1\" [size]=\"3\">\n                  <!-- <div class = \"box\"> -->\n                 <ion-input class = \"box\" maxlength=\"1\" mode=\"md\" placeholder=\"*\" type=\"tel\"  (ionFocus)=\"checkFocus(3)\"\n                 #otp3 (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\"></ion-input>\n                <!-- </div> -->\n                </ion-col>\n                <ion-col class=\"box1\" [size]=\"3\">\n                  <!-- <div class = \"box\"> -->\n                 <ion-input class = \"box\" maxlength=\"1\" mode=\"md\" placeholder=\"*\" type=\"tel\"  \n                 #otp4  (ionFocus)=\"checkFocus(4)\" (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\"></ion-input>\n                <!-- </div> -->\n                </ion-col>\n              </ion-row>\n            <!-- </ion-grid> -->\n  \n  <ion-row>\n    <ion-col push-lg=\"1\">\n      <p class=\"para\" tappable (click)=\"SendOtp('Resend','voice')\" [innerHTML]=\"mobileNumberData?.data?.voiceMsg\"></p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col push-lg=\"1\">\n      <p class=\"para ion-no-margin\">{{mobileNumberData?.data?.ThirdMsg}}&nbsp;\n        <span tappable (click)=\"SendOtp('Resend','sms')\">{{mobileNumberData?.data?.resendText}}</span></p>\n    </ion-col>\n  </ion-row>\n  \n  <div class = \"butt1\" [ngClass]=\"{'banner': platform.width()<740}\">\n    <ion-button [disabled]=\"FirstOtp.trim()=='' || SecondOtp.trim()=='' || ThirdOtp.trim()=='' || FourthOtp.trim()==''\"\n   tappable (click) =\"Continue()\" class=\"ionic_btn\">{{mobileNumberData?.data?.buttonText}}</ion-button>\n    <img src=\"assets/icon/Design 1.png\" class =\"banner_bg\">\n  </div>\n      </ion-col>\n      </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    47674: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_RegistrationModule_otpverify_otpverify_module_ts-es5.js.map