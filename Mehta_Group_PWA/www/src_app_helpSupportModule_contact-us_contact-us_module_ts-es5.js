(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_helpSupportModule_contact-us_contact-us_module_ts"], {
    /***/
    77887: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactUsPageRoutingModule": function ContactUsPageRoutingModule() {
          return (
            /* binding */
            _ContactUsPageRoutingModule
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


      var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact-us.page */
      46561);

      var routes = [{
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
      }];

      var _ContactUsPageRoutingModule = function ContactUsPageRoutingModule() {
        _classCallCheck(this, ContactUsPageRoutingModule);
      };

      _ContactUsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ContactUsPageRoutingModule);
      /***/
    },

    /***/
    67048: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactUsPageModule": function ContactUsPageModule() {
          return (
            /* binding */
            _ContactUsPageModule
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


      var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact-us-routing.module */
      77887);
      /* harmony import */


      var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact-us.page */
      46561);

      var _ContactUsPageModule = function ContactUsPageModule() {
        _classCallCheck(this, ContactUsPageModule);
      };

      _ContactUsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage]
      })], _ContactUsPageModule);
      /***/
    },

    /***/
    46561: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactUsPage": function ContactUsPage() {
          return (
            /* binding */
            _ContactUsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./contact-us.page.html */
      81841);
      /* harmony import */


      var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact-us.page.scss */
      15206);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ContactUsPage = /*#__PURE__*/function () {
        function ContactUsPage(zone, router, activeRoute, apiService, sendData, navctrl) {
          _classCallCheck(this, ContactUsPage);

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

        _createClass(ContactUsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.contactShow();
          }
        }, {
          key: "changeData",
          value: function changeData(ev, data) {} // contactShow(){
          //   this.activeRoute.queryParams.subscribe(params => {
          //         if(params){
          //           if(params.data){
          //           console.log("data1: ", JSON.parse(params.data));
          //           this.CategoryData= JSON.parse(params.data);
          //           }
          //         }
          //     })
          // }

        }, {
          key: "submit",
          value: function submit(subject, description) {
            var _this = this;

            this.apiService.presentLoadingDefault();
            console.log(subject, description);
            this.zone.run(function () {
              var apiKey = {
                "subject": subject,
                "message": description,
                "attachment": _this.attachData,
                "media_type": "1",
                "flag_type": "1"
              };
              console.log("apiKey : ", apiKey);

              _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_3__.URLS.ContactHelpSupportUrl, apiKey).subscribe(function (result) {
                console.log(result);

                _this.apiService.presentLoadingClose();

                if (result.success == 1) {
                  _this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');

                  _this.navctrl.pop();

                  _this.subject = "";
                  _this.description = "";
                  _this.attachData = "";
                } else {
                  _this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this.apiService.presentLoadingClose();

                _this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "attachment",
          value: function attachment(event) {
            var _this2 = this;

            console.log('event1==>', event);
            console.log('this.currentObj==>', this.currentObj);
            var formData = new FormData();

            if (event.target.files) {
              var file = event.target.files[0];
              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                console.log(reader.result);
                _this2.attachData = reader.result;
                formData.append("file", _this2.files);
                console.log("files : ", _this2.files);
                console.log('this.currentObj==>', _this2.currentObj); // this.currentObj.answer= reader.result;
              };
            }
          }
        }]);

        return ContactUsPage;
      }();

      _ContactUsPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__.DataTransferService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }];
      };

      _ContactUsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ContactUsPage);
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
    15206: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-select {\n  width: 100%;\n  justify-content: center;\n}\nion-select .select-icon .select-icon-inner {\n  color: red !important;\n  opacity: 1 !important;\n}\n.image-upload > input {\n  display: none;\n}\n.contactImage {\n  height: 30px;\n  width: 100%;\n}\n.iconImage {\n  height: 15px;\n  width: 100%;\n}\n.pDiv {\n  font-size: 13px;\n}\n.paddLeft0 {\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksV0FBQTtFQUFZLHVCQUFBO0FBR3hCO0FBRFE7RUFBb0IscUJBQUE7RUFBd0IscUJBQUE7QUFLcEQ7QUFGRTtFQUFxQixhQUFBO0FBTXZCO0FBTEU7RUFBYyxZQUFBO0VBQWEsV0FBQTtBQVU3QjtBQVRFO0VBQVcsWUFBQTtFQUFhLFdBQUE7QUFjMUI7QUFiRTtFQUFNLGVBQUE7QUFpQlI7QUFoQkU7RUFBVyxpQkFBQTtBQW9CYiIsImZpbGUiOiJjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3Qge3dpZHRoOiAxMDAlO2p1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5zZWxlY3QtaWNvbnsgICAgXG4gICAgICAgIC5zZWxlY3QtaWNvbi1pbm5lciB7Y29sb3IgOiByZWQgIWltcG9ydGFudDsgb3BhY2l0eTogMSAhaW1wb3J0YW50O31cbiAgICB9XG4gIH1cbiAgLmltYWdlLXVwbG9hZD5pbnB1dCB7ZGlzcGxheTogbm9uZTt9XG4gIC5jb250YWN0SW1hZ2V7aGVpZ2h0OiAzMHB4O3dpZHRoOiAxMDAlO31cbiAgLmljb25JbWFnZXtoZWlnaHQ6IDE1cHg7d2lkdGg6IDEwMCU7fVxuICAucERpdntmb250LXNpemU6IDEzcHg7fVxuICAucGFkZExlZnQwe3BhZGRpbmctbGVmdDowcHg7fSJdfQ== */";
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
    81841: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{CategoryData?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" push-md=\"3\" push-lg=\"3\" class=\"whiteCol ion-padding\">\n      <ion-row >\n        <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\">\n          <img [src]=\"CategoryData?.list?.contact_number_icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"contactImage\">\n        </ion-col>\n         <ion-col [size]=\"11\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\">\n           <p class=\"ion-no-margin pDiv\">{{CategoryData?.list?.contact_number}}</p>\n         </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\">\n          <img [src]=\"CategoryData?.list?.mail_id_icon\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"contactImage\">\n        </ion-col>\n         <ion-col [size]=\"11\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\">\n           <p class=\"ion-no-margin pDiv\">{{CategoryData?.list?.mail_id}}</p>\n         </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p class=\"ion-no-margin pDiv\">{{CategoryData?.list?.write_us}}</p>\n          <br>\n          <!-- <ion-item class=\"borderDiv\">  -->\n            <!-- <ion-select class=\"borderDiv borderRediDiv\" placeholder=\"{{category?.placeholder}}\" interface=\"popover\" [(ngModel)]=\"value\"  (ionChange) =\"changeData($event,value)\">\n              <ion-select-option *ngFor=\"let option of CategoryData\" [value]=\"option\" > \n                  {{option?.text}}\n               </ion-select-option>   \n            </ion-select>  -->\n          <!-- </ion-item> -->\n         \n          <div class=\"borderDiv borderRediDiv\">\n            <ion-input [(ngModel)]=\"subject\" [placeholder]=\"CategoryData?.list?.subject\"></ion-input>\n          </div>\n          <br>\n            <div class=\"borderDiv borderRediDiv\">\n              <ion-textarea [(ngModel)]=\"description\" rows=\"4\" cols=\"20\"  [placeholder]=\"CategoryData?.list?.description\"></ion-textarea>\n            </div>\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col [size]=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\">\n          <img [src]=\"CategoryData?.list?.attachment_icon\"  onerror=\"this.src='assets/watermark/watermark.png'\" class=\"iconImage\">\n         \n        </ion-col>\n         <ion-col [size]=\"11\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\" class=\"paddLeft0\">\n          <label class=\"image-upload\">\n           <p class=\"ion-no-margin pDiv\">{{CategoryData?.list?.attachment}}&nbsp; {{imageFile}}</p>\n           <input  type=\"file\" [(ngModel)] = \"imageFile\" accept=\"image/x-png,image/jpeg\"  (change)=\"attachment($event)\" >\n          </label>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"attachData\">\n        <ion-col sizeLg=\"12\" sizeMd=\"12\" sizeXs=\"12\">\n         <div  class=\"relativeDiv\">\n            <!-- <ion-icon name=\"close-circle\" class=\"absoDiv\" (click)=\"remove(ind)\"></ion-icon> -->\n          <img  [src]=\"attachData\" #imageSrc class=\"imgPreview\">\n         </div>\n         <!-- <div *ngIf=\"data?.mediaType=='2'\"  class=\"relativeDiv\">\n          <ion-icon name=\"close-circle\" class=\"absoDiv\" (click)=\"remove(ind)\"></ion-icon>\n          <video [src]=\"data?.filePath\" width=\"100%\" height=\"200px\" controls [poster]=\"data?.thumbnail\"></video>\n         </div>  -->\n        </ion-col>\n        </ion-row>\n      <br>\n      <ion-row>\n        <ion-col>\n          <ion-button size=\"small\" class=\"nextbtn\" color=\"danger\" shape=\"round\" (click)=\"submit(subject, description)\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-col>\n      </ion-row>\n\n\n</ion-content>\n";
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
//# sourceMappingURL=src_app_helpSupportModule_contact-us_contact-us_module_ts-es5.js.map