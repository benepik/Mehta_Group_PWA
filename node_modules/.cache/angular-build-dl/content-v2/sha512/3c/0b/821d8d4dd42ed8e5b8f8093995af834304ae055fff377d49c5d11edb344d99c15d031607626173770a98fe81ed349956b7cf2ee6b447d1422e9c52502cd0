(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_transaction-hist_transaction-hist_module_ts"], {
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
          var _this = this;

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
            _this.loginUserData = result.allStoreData;
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
    75694: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionHistPageRoutingModule": function TransactionHistPageRoutingModule() {
          return (
            /* binding */
            _TransactionHistPageRoutingModule
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


      var _transaction_hist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./transaction-hist.page */
      77422);

      var routes = [{
        path: '',
        component: _transaction_hist_page__WEBPACK_IMPORTED_MODULE_0__.TransactionHistPage
      }];

      var _TransactionHistPageRoutingModule = function TransactionHistPageRoutingModule() {
        _classCallCheck(this, TransactionHistPageRoutingModule);
      };

      _TransactionHistPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TransactionHistPageRoutingModule);
      /***/
    },

    /***/
    52860: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionHistPageModule": function TransactionHistPageModule() {
          return (
            /* binding */
            _TransactionHistPageModule
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


      var _transaction_hist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./transaction-hist-routing.module */
      75694);
      /* harmony import */


      var _transaction_hist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./transaction-hist.page */
      77422);

      var _TransactionHistPageModule = function TransactionHistPageModule() {
        _classCallCheck(this, TransactionHistPageModule);
      };

      _TransactionHistPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _transaction_hist_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionHistPageRoutingModule],
        declarations: [_transaction_hist_page__WEBPACK_IMPORTED_MODULE_1__.TransactionHistPage]
      })], _TransactionHistPageModule);
      /***/
    },

    /***/
    77422: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionHistPage": function TransactionHistPage() {
          return (
            /* binding */
            _TransactionHistPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_transaction_hist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./transaction-hist.page.html */
      92461);
      /* harmony import */


      var _transaction_hist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./transaction-hist.page.scss */
      88552);
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

      var _TransactionHistPage = /*#__PURE__*/function () {
        function TransactionHistPage(route, platform, zone, sendData, localStorage, apiService) {
          _classCallCheck(this, TransactionHistPage);

          this.route = route;
          this.platform = platform;
          this.zone = zone;
          this.sendData = sendData;
          this.localStorage = localStorage;
          this.apiService = apiService;
          this.serverData = [];
          this.buttReg = [];
          this.requestType = "customer";
        }

        _createClass(TransactionHistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.redemptionShow();
            this.showButt();
          }
        }, {
          key: "showButt",
          value: function showButt() {
            this.buttReg = [{
              auto_id: "1",
              tab_name: "Customer Report",
              tab_status: "selected_tab",
              requestType: 'customer'
            }, {
              auto_id: "2",
              tab_name: "Dealer Report",
              tab_status: "unselected_tab",
              requestType: 'dealer'
            }];
          }
        }, {
          key: "close",
          value: function close() {
            this.route.navigate(['./tabs/home']);
          }
        }, {
          key: "redemptionShow",
          value: function redemptionShow() {
            var _this2 = this;

            this.zone.run(function () {
              var apiKey = {
                "request_type": _this2.requestType,
                "search_str": "",
                "value": ""
              };
              console.log('login data response', apiKey);

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.RedemptionUrl, apiKey).subscribe(function (result) {
                console.log('login data response', result);
                _this2.server = result;

                if (result.success == 1) {
                  _this2.serverData = result.data;
                  _this2.errorMessage = '';
                } else {
                  _this2.errorMessage = result.message; // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "active",
          value: function active(id) {
            if (id.tab_status != "selected_tab") {
              id.tab_status = "selected_tab";

              for (var i = 0; i < this.buttReg.length; i++) {
                if (id.tab_name != this.buttReg[i].tab_name) {
                  this.buttReg[i].tab_status = "unselected_tab";
                } else {
                  this.buttReg[i].tab_status = "selected_tab";
                }
              }
            }

            this.requestType = id === null || id === void 0 ? void 0 : id.requestType;
            this.redemptionShow(); // 
            // if(id.tab_status != "selected_tab"){
            //  id.tab_status = "selected_tab";
            // }
            // 
          }
        }, {
          key: "view",
          value: function view(item) {
            this.sendData.registrationType = {
              'auto_id': item.auto_id,
              'request_Type': this.requestType,
              'request_page': 'other'
            };
            this.route.navigate(['./account-statment']);
          }
        }]);

        return TransactionHistPage;
      }();

      _TransactionHistPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _TransactionHistPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-transaction-hist',
        template: _raw_loader_transaction_hist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_transaction_hist_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TransactionHistPage);
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
    88552: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".act {\n  text-transform: none;\n  text-transform: initial;\n  --border-radius: 20px;\n  width: 100%;\n  --background: #B01D22;\n  width: 100%;\n  font-size: 14px;\n}\n\n.act2 {\n  text-transform: capitalize;\n  --border-radius: 20px !important;\n  --background: transparent !important;\n  color: #B01D22 !important;\n  border: 1px solid #B01D22;\n  width: 100%;\n  border-radius: 20px;\n  font-size: 14px;\n}\n\n.seg {\n  padding: 15px;\n}\n\n.titleDiv, .titleDiv1 {\n  color: #B01D22;\n}\n\n.titleDiv {\n  font-size: 15px;\n}\n\n.titleDiv1 {\n  font-size: 14px;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-row {\n  background: #B01D22;\n  color: #fff;\n  font-size: 14px;\n}\n\n.co_ro {\n  border-left: 1px solid #ECEEEF;\n}\n\n.co_ro p {\n  font-size: 12px;\n}\n\nion-text {\n  font-size: 16px;\n}\n\n.act1 {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: #B01D22 !important;\n  color: #B01D22 !important;\n  border: 1px solid;\n  border-radius: 8px;\n  width: 100%;\n  height: 20px;\n}\n\n.table {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n}\n\n.table_start {\n  padding-top: 20px;\n}\n\n.pinkBg {\n  background-color: #f2e8e8;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWhpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sb0JBQUE7RUFBQSx1QkFBQTtFQUF5QixxQkFBQTtFQUF3QixXQUFBO0VBQVkscUJBQUE7RUFBd0IsV0FBQTtFQUFZLGVBQUE7QUFPdkc7O0FBTkE7RUFDSSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFFQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksYUFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtBQVVKOztBQVBBO0VBQWMsZUFBQTtBQVdkOztBQVZBO0VBQVcsZUFBQTtBQWNYOztBQWJBO0VBQ0ksMkJBQUE7QUFnQko7O0FBYkE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFnQko7O0FBYkE7RUFDSSw0QkFBQTtBQWdCSjs7QUFiQTtFQUNJLDZCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWlCSjs7QUFkRTtFQUNFLDhCQUFBO0FBaUJKOztBQWhCSTtFQUFNLGVBQUE7QUFtQlY7O0FBZkU7RUFDSSxlQUFBO0FBa0JOOztBQWhCRTtFQUNFLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0UsaUJBQUE7RUFDRixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbUJKOztBQWpCRTtFQUNFLG1DQUFBO0FBb0JKOztBQWxCRTtFQUNJLGlCQUFBO0FBcUJOOztBQW5CRTtFQUFRLHlCQUFBO0FBdUJWOztBQXRCRTtFQUFtQiw0QkFBQTtFQUNqQixzQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLDJCQUFBO0FBMkJKIiwiZmlsZSI6InRyYW5zYWN0aW9uLWhpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdHsgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7IC0tYm9yZGVyLXJhZGl1czogMjBweDsgIHdpZHRoOjEwMCU7IC0tYmFja2dyb3VuZDogICNCMDFEMjI7IHdpZHRoOjEwMCU7IGZvbnQtc2l6ZToxNHB4O31cbi5hY3Qye1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLy8gIC0tYm9yZGVyLWNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNCMDFEMjIgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjAxRDIyO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIGZvbnQtc2l6ZToxNHB4O1xufVxuLnNlZ3tcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLnRpdGxlRGl2LC50aXRsZURpdjF7XG4gICAgY29sb3I6ICNCMDFEMjI7XG5cbn1cbi50aXRsZURpdnsgICAgZm9udC1zaXplOiAxNXB4O31cbi50aXRsZURpdjF7Zm9udC1zaXplOiAxNHB4O31cbi5oZWFkZXIgLmNvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XG59XG5cbi5jb2wge1xuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xufVxuLmhlYWRlci1yb3cge1xuICAgIGJhY2tncm91bmQ6ICAjQjAxRDIyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmNvX3Jve1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0VDRUVFRjtcbiAgICBweyAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgLy9mb250LWZhbWlseTptb25vc3BhY2U7XG4gIH1cbiAgaW9uLXRleHR7XG4gICAgICBmb250LXNpemU6MTZweDtcbiAgfVxuICAuYWN0MXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICNCMDFEMjIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0IwMUQyMiAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC50YWJsZXtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI2VmZWFlYTtcbiAgfVxuICAudGFibGVfc3RhcnR7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAucGlua0Jne2JhY2tncm91bmQtY29sb3I6ICNmMmU4ZTg7fVxuICAuYmdXYWxsZXRJbWFnZXsgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO3BhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fSJdfQ== */";
      /***/
    },

    /***/
    47674: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    92461: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{server?.header_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\" class=\"ion-padding\">\n    <ion-row class=\"ion-justify-content-center \">\n      <ion-col *ngIf=\"server?.data\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\"\n      class=\"whiteCol table\" [ngClass]=\"{'boundary1':  platform.width()>740}\">\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n      </div>\n       <div>\n         <ion-row>\n           <ion-col size-xs=\"6\" size-xl=\"6\" *ngFor = \"let id of buttReg\">\n             <ion-button *ngIf=\"id?.tab_status == 'selected_tab'\" class= \"act\" (click) = \"active(id)\">{{id?.tab_name}}</ion-button>\n             <ion-button *ngIf=\"id?.tab_status != 'selected_tab'\" class= \"act2\" (click) = \"active(id)\">{{id?.tab_name}}</ion-button>\n           </ion-col>\n         </ion-row>\n         <ion-row class=\"header-row\">\n          <ion-col class=\"co_ro\" size=\"2.3\" *ngFor=\"let item of server?.header_arr\">\n            <p class=\"ion-text-center ion-no-margin\">{{item}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let data of serverData; let ind=index\" [ngClass]=\"{'pinkBg': ind%2==0}\">\n          <ion-col class=\"co_ro\" size=\"2\">\n            <p class=\"ion-no-margin ion-text-center\">{{data?.serial_number}}</p>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"2.4\">\n            <p class=\"ion-no-margin ion-text-center\">{{data?.full_name}}</p>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"2.5\">\n            <p class=\"ion-no-margin ion-text-center\" >{{data?.contact}}</p>\n          </ion-col>\n          <ion-col class=\"co_ro\" size=\"2.3\">\n            <p class=\"ion-no-margin ion-text-center\" >{{data?.authority_name}}</p>\n          </ion-col>\n          <ion-col class=\"co_ro ion-text-center\" size=\"2.3\">\n            <ion-button *ngIf=\"data?.btn_applicable == '1'\" class = \"act1\" (click)=\"view(data)\">{{data?.detail_btn}}</ion-button>\n          </ion-col>\n        </ion-row>\n       </div>\n         </ion-col>\n         </ion-row>\n         <div *ngIf=\"errorMessage!=''\">\n          <p class=\"ion-text-center\">{{errorMessage}}</p>\n        </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_transaction-hist_transaction-hist_module_ts-es5.js.map