(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_geolocation_geolocation_module_ts"], {
    /***/
    96185: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GeolocationPageRoutingModule": function GeolocationPageRoutingModule() {
          return (
            /* binding */
            _GeolocationPageRoutingModule
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


      var _geolocation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./geolocation.page */
      14807);

      var routes = [{
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_0__.GeolocationPage
      }];

      var _GeolocationPageRoutingModule = function GeolocationPageRoutingModule() {
        _classCallCheck(this, GeolocationPageRoutingModule);
      };

      _GeolocationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _GeolocationPageRoutingModule);
      /***/
    },

    /***/
    45967: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GeolocationPageModule": function GeolocationPageModule() {
          return (
            /* binding */
            _GeolocationPageModule
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


      var _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./geolocation-routing.module */
      96185);
      /* harmony import */


      var _geolocation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./geolocation.page */
      14807);

      var _GeolocationPageModule = function GeolocationPageModule() {
        _classCallCheck(this, GeolocationPageModule);
      };

      _GeolocationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeolocationPageRoutingModule],
        declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_1__.GeolocationPage]
      })], _GeolocationPageModule);
      /***/
    },

    /***/
    14807: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GeolocationPage": function GeolocationPage() {
          return (
            /* binding */
            _GeolocationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_geolocation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./geolocation.page.html */
      67487);
      /* harmony import */


      var _geolocation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./geolocation.page.scss */
      60680);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      83046);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      34255);

      var _GeolocationPage = /*#__PURE__*/function () {
        function GeolocationPage(zone, geolocation, route, platform, nativeGeocoder, apiService, sendData, diagnostic, alertController) {
          _classCallCheck(this, GeolocationPage);

          this.zone = zone;
          this.geolocation = geolocation;
          this.route = route;
          this.platform = platform;
          this.nativeGeocoder = nativeGeocoder;
          this.apiService = apiService;
          this.sendData = sendData;
          this.diagnostic = diagnostic;
          this.alertController = alertController;
          this.profileAddCustomer = this.sendData.alldata;

          if (this.profileAddCustomer) {
            this.requestID = this.profileAddCustomer.requestFor, this.requestIDPage = this.profileAddCustomer.requestPage;
          } else {
            this.requestID = '';
            this.requestIDPage = '';
          }

          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          });
        }

        _createClass(GeolocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "locationAlert",
          value: function locationAlert() {
            this.alertController.create({
              message: 'Enable Location from device settings',
              backdropDismiss: false,
              buttons: [{
                text: 'ok',
                handler: function handler() {
                  console.log('Buy clicked');
                }
              }]
            }).then(function (alert) {
              alert.present();
            });
          }
        }, {
          key: "getLocationFun",
          value: function getLocationFun() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.platform.is('cordova')) {
                        this.diagnostic.isLocationEnabled().then(function (enabled) {
                          // this.diagnostic.requestLocationAuthorization().then((requestLocation=>{}))
                          console.log("Location setting is enabled", enabled);

                          if (enabled) {
                            console.log("Location setting is " + (enabled ? "enabled" : "disabled"));
                            console.log("The following enabled ", enabled);

                            _this.apiService.presentLoadingDefault();

                            _this.zone.run(function () {
                              return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                var curr_pos;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        this.loc = '';
                                        console.log('curr_pos4');
                                        _context.next = 4;
                                        return this.geolocation.getCurrentPosition();

                                      case 4:
                                        curr_pos = _context.sent;
                                        console.log('curr_pos', curr_pos.coords.latitude);
                                        console.log('curr_pos', curr_pos.coords.longitude);
                                        this.getGeoLocation(curr_pos.coords.latitude, curr_pos.coords.longitude);

                                      case 8:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee, this);
                              }));
                            });
                          } else {
                            console.log("The following error occurred: ", enabled);

                            _this.locationAlert();

                            return false;
                          }
                        });
                      } else {
                        this.apiService.presentLoadingDefault();
                        this.zone.run(function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var curr_pos;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    this.loc = '';
                                    console.log('curr_pos4');
                                    _context2.next = 4;
                                    return this.geolocation.getCurrentPosition();

                                  case 4:
                                    curr_pos = _context2.sent;
                                    console.log('curr_pos', curr_pos.coords.latitude);
                                    console.log('curr_pos', curr_pos.coords.longitude);
                                    this.getGeoLocation(curr_pos.coords.latitude, curr_pos.coords.longitude);

                                  case 8:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        });
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getGeoLocation",
          value: function getGeoLocation(lat, lng, type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var geocoder, latlng, request;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.apiService.presentLoadingClose();

                      if (!navigator.geolocation) {
                        _context4.next = 15;
                        break;
                      }

                      console.log('lat', lat);
                      console.log('lng', lng);
                      this.lat = lat;
                      this.lng = lng;
                      _context4.next = 8;
                      return new google.maps.Geocoder();

                    case 8:
                      geocoder = _context4.sent;
                      _context4.next = 11;
                      return new google.maps.LatLng(lat, lng);

                    case 11:
                      latlng = _context4.sent;
                      request = {
                        latLng: latlng
                      };
                      _context4.next = 15;
                      return geocoder.geocode(request, function (results, status) {
                        console.log('main Array', results, status);

                        if (status == google.maps.GeocoderStatus.OK) {
                          var result = results[0];
                          _this2.userLocation = results[0];
                          console.log('current Location', results[0]);
                          console.log("loc: ", result['formatted_address']);
                          _this2.loc = result['formatted_address'];

                          _this2.zone.run(function () {
                            if (result != null) {
                              _this2.userCity = result.formatted_address;

                              if (type === 'reverseGeocode') {
                                _this2.latLngResult = result.formatted_address;
                              }
                            }
                          });
                        }
                      });

                    case 15:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "reverseGeocode",
          value: function reverseGeocode(lat, lng) {
            var _this3 = this;

            if (this.platform.is('cordova')) {
              var options = {
                useLocale: true,
                maxResults: 5
              };
              this.nativeGeocoder.reverseGeocode(lat, lng, options).then(function (result) {
                return _this3.userLocationFromLatLng = result[0];
              })["catch"](function (error) {
                return console.log(error);
              });
            } else {
              this.getGeoLocation(lat, lng, 'reverseGeocode');
            }
          }
        }, {
          key: "forwardGeocode",
          value: function forwardGeocode(address) {
            var _this4 = this;

            if (this.platform.is('cordova')) {
              var options = {
                useLocale: true,
                maxResults: 5
              };
              this.nativeGeocoder.forwardGeocode(address, options).then(function (result) {
                _this4.zone.run(function () {
                  _this4.lat = result[0].latitude;
                  _this4.lng = result[0].longitude;
                });
              })["catch"](function (error) {
                return console.log(error);
              });
            } else {
              var geocoder = new google.maps.Geocoder();
              geocoder.geocode({
                'address': address
              }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  _this4.zone.run(function () {
                    _this4.lat = results[0].geometry.location.lat();
                    _this4.lng = results[0].geometry.location.lng();
                  });
                } else {
                  alert('Error - ' + results + ' & Status - ' + status);
                }
              });
            }
          } // back(){
          //   this.sendData.alldata={'requestPage':this.profileAddCustomer.requestPage}
          //   this.route.navigate(['./profile-upload']);
          // }

        }, {
          key: "next",
          value: function next() {
            var _this5 = this;

            this.zone.run(function () {
              var apiKey = {
                "latitude": _this5.lat,
                "longitude": _this5.lng,
                "location_dump": _this5.userLocation,
                "request_for": _this5.requestID,
                "request_page": _this5.requestIDPage
              };

              _this5.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.geoLocationUrl, apiKey).subscribe(function (result) {
                if (result.success == 1) {
                  _this5.route.navigate(['/tabs']);
                } else {
                  _this5.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this5.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            }); // this.route.navigate(['./registration']);
          }
        }]);

        return GeolocationPage;
      }();

      _GeolocationPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__.DataTransferService
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__.Diagnostic
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }];
      };

      _GeolocationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-geolocation',
        template: _raw_loader_geolocation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_geolocation_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _GeolocationPage);
      /***/
    },

    /***/
    60680: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".col {\n  text-align: end;\n}\n\n.para {\n  margin-bottom: 0px;\n  font-size: 24px;\n}\n\n.geoBox {\n  border: 1px solid var(--headerColor);\n}\n\n.geoIcon {\n  font-size: 20px;\n}\n\n.detect, .geoIcon, .para {\n  color: var(--headerColor);\n}\n\n.dev {\n  font-size: 19px;\n}\n\n.banner_bg {\n  left: 0;\n  width: 100%;\n  display: block;\n  border-radius: 10px;\n}\n\n.blank {\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUFNLGtCQUFBO0VBQW1CLGVBQUE7QUFHekI7O0FBRkM7RUFBUSxvQ0FBQTtBQU1UOztBQUxDO0VBQVUsZUFBQTtBQVNYOztBQVJDO0VBQXdCLHlCQUFBO0FBWXpCOztBQVhDO0VBQU0sZUFBQTtBQWVQOztBQWRDO0VBSUcsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFjSjs7QUFaQTtFQUNHLFdBQUE7RUFDQSxhQUFBO0FBZUgiLCJmaWxlIjoiZ2VvbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29se1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cbi5wYXJhe21hcmdpbi1ib3R0b206IDBweDtmb250LXNpemU6IDI0cHg7fVxuIC5nZW9Cb3h7Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpOyB9XG4gLmdlb0ljb257IGZvbnQtc2l6ZTogMjBweDt9XG4gLmRldGVjdCwuZ2VvSWNvbiwucGFyYXsgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTt9XG4gLmRldnsgZm9udC1zaXplOiAxOXB4O31cbiAuYmFubmVyX2JnIHtcbiAgIC8vIHRvcDogMDtcbiAgIFxuICAgLy8gbWFyZ2luLXRvcDogLTY2cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmJsYW5re1xuICAgd2lkdGg6MTAwJTtcbiAgIGhlaWdodDogMTAwcHg7XG59Il19 */";
      /***/
    },

    /***/
    67487: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary1':  platform.width()>740}\">\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <img src = \"assets/icon/logo.svg\" style = \"width: 150px;\">\n        </ion-col>\n        <ion-col class=\"col\">\n          <img src = \"assets/icon/abc.png\" style = \"width: 130px;  text-align: right;\">\n        </ion-col>\n      </ion-row>\n     \n    </ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"para\"><b>Geo Location</b></p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class=\"dev\">Enable your device location </p>\n      </ion-col>\n    </ion-row>\n    <ion-row tappable (click)=\"getLocationFun()\">\n      <ion-col>\n        <ion-row class =\"geoBox\" >\n          <ion-col size=\"1\" class=\"autoMargin\"><ion-icon class =\"geoIcon\" name=\"locate-outline\"></ion-icon></ion-col>\n          <ion-col size=\"11\" class=\"autoMargin\"><p class =\"detect ion-no-margin\">Detect my location</p></ion-col>\n        </ion-row>\n      \n\n      </ion-col>\n    </ion-row>\n    <div *ngIf = \"loc\">\n      <ion-row>\n        <ion-col> <p>Your Location</p></ion-col>\n      </ion-row>  \n      <ion-row>\n        <ion-col size =\"1\"><ion-icon name=\"location-outline\"></ion-icon></ion-col>\n        <ion-col size=\"11\">{{loc}}</ion-col>\n      </ion-row>\n    </div>\n\n    <br>\n    <br>\n  <br>\n   \n    <div [ngClass]=\"{'banner': platform.width()<740}\">\n      <ion-row>\n       <!-- <ion-col class=\"ion-text-right\">\n        <ion-button class=\"ionic_btn butt\" (click) = \"back()\">Back</ion-button>\n        </ion-col> -->\n       <ion-col class=\"ion-text-center\">\n       <ion-button [disabled]=\"!loc\" class=\"ionic_btn\" tappable (click) = \"next()\">Next</ion-button>\n        </ion-col>\n        </ion-row>\n        <img src = \"assets/icon/Design 1.png\" class=\"banner_bg\">\n        </div>\n       \n    </ion-col>\n    </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_RegistrationModule_geolocation_geolocation_module_ts-es5.js.map