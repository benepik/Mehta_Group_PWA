(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_select-address_select-address_module_ts"], {
    /***/
    39231: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SelectAddressPageRoutingModule": function SelectAddressPageRoutingModule() {
          return (
            /* binding */
            _SelectAddressPageRoutingModule
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


      var _select_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./select-address.page */
      30692);

      var routes = [{
        path: '',
        component: _select_address_page__WEBPACK_IMPORTED_MODULE_0__.SelectAddressPage
      }];

      var _SelectAddressPageRoutingModule = function SelectAddressPageRoutingModule() {
        _classCallCheck(this, SelectAddressPageRoutingModule);
      };

      _SelectAddressPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SelectAddressPageRoutingModule);
      /***/
    },

    /***/
    38423: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SelectAddressPageModule": function SelectAddressPageModule() {
          return (
            /* binding */
            _SelectAddressPageModule
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


      var _select_address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./select-address-routing.module */
      39231);
      /* harmony import */


      var _select_address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./select-address.page */
      30692);

      var _SelectAddressPageModule = function SelectAddressPageModule() {
        _classCallCheck(this, SelectAddressPageModule);
      };

      _SelectAddressPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _select_address_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectAddressPageRoutingModule],
        declarations: [_select_address_page__WEBPACK_IMPORTED_MODULE_1__.SelectAddressPage]
      })], _SelectAddressPageModule);
      /***/
    },

    /***/
    30692: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SelectAddressPage": function SelectAddressPage() {
          return (
            /* binding */
            _SelectAddressPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_select_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./select-address.page.html */
      73466);
      /* harmony import */


      var _select_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./select-address.page.scss */
      21600);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _SelectAddressPage = /*#__PURE__*/function () {
        function SelectAddressPage(sendData, route, apiService, zone, platform) {
          _classCallCheck(this, SelectAddressPage);

          this.sendData = sendData;
          this.route = route;
          this.apiService = apiService;
          this.zone = zone;
          this.platform = platform;
          this.formData = [];
          this.addid = 0;
          this.searchData = [];
          this.redeem_for = this.sendData.redeem_for;
          this.addressDetail = this.sendData.addressDetails;
          console.log("this.redeem_for : ", this.addressDetail);

          if (this.addressDetail.auto_id == '') {
            this.pin = this.addressDetail.pin_code; // console.log("this.redeem_for :123 ",this.addressDetail);
          } else {
            this.add1 = this.addressDetail.address_line1;
            this.add2 = this.addressDetail.address_line2;
            this.pin = this.addressDetail.pin_code;
            this.city = this.addressDetail.city;
            this.state = this.addressDetail.state;
            console.log("this.redeem_for :12 ", this.req); // this.addressDetail.auto_id='';
            // console.log("this ",this.addressDetail.auto_id);
          }
        }

        _createClass(SelectAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //  this.searchApiCall(this.pin) ;
            if (this.pin != '') {
              this.searchApiCall(this.pin);
            }

            this.req = this.sendData.alldata;
          } // ionViewWillLeave(){
          //   this.addressDetail={};
          // }

        }, {
          key: "checkInput",
          value: function checkInput(event) {
            console.log('1', event);

            if (event.length == 6) {
              this.searchApiCall(event);
            } else {
              this.searchData = [];
            }
          }
        }, {
          key: "searchApiCall",
          value: function searchApiCall(searchString) {
            var _this = this;

            this.zone.run(function () {
              var apiKey = {
                "search_str": searchString,
                "request_type": "pin"
              }; // console.log('lengthBABA', apiKey.search_str.toString().length);

              _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.searchApiUrl, apiKey).subscribe(function (result) {
                if (result.success == 1) {
                  _this.searchData = result.data;
                  console.log('   this.searchData', _this.searchData);

                  for (var i = 0; i < _this.searchData.length; i++) {
                    _this.city = _this.searchData[i].city;
                    _this.state = _this.searchData[i].state;
                    _this.addressDetail.pin_id = _this.searchData[i].auto_id;
                  }
                } else {
                  // this.addressDetail.auto_id
                  _this.searchData = [];
                  console.log('   this.searchData', _this.searchData); // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            }); // }
          }
        }, {
          key: "checkingFilled",
          value: function checkingFilled() {
            if (this.add1 == undefined || this.add1 == '') {
              this.apiService.showToastMessage('Please fill the Address line 1', 'top', 2000, 'redBg');
            } else if (this.add2 == undefined || this.add2 == '') {
              this.apiService.showToastMessage('Please fill the Address line 2', 'top', 2000, 'redBg');
            } else if (this.addressDetail.pin_id == undefined || this.addressDetail.pin_id == '') {
              if (this.searchData == undefined || this.searchData.length == 0) {
                this.apiService.showToastMessage('Please fill the pincode', 'top', 2000, 'redBg');
              } else {
                this.apiService.showToastMessage('Please fill the correct pincode', 'top', 2000, 'redBg');
              }
            } else {
              if (this.searchData.length == 0) {
                this.apiService.showToastMessage('Please fill the correct Pincode', 'top', 2000, 'redBg');
              } else {
                this.addressDetails();
              } // if(this.searchData.length>0){
              // }else{
              // this.apiService.showToastMessage('Please fill the correct Pincode','top',2000,'redBg');
              // }

            }
          } //AddAddressUrl

        }, {
          key: "addressDetails",
          value: function addressDetails() {
            var _this2 = this;

            // if(this.addressDetail.auto_id==undefined || this.addressDetail.auto_id=='')
            // {
            //   this.addressDetail.auto_id='';
            // }
            console.log("this.redeem_for : ", this.addressDetail.auto_id);
            this.zone.run(function () {
              var apiKey = {
                "address_line1": _this2.add1,
                "address_line2": _this2.add2,
                "address_id": _this2.addressDetail.auto_id,
                "pin_id": _this2.addressDetail.pin_id,
                "redeem_for": _this2.redeem_for,
                "request_for": _this2.req.customer,
                "request_user_type": _this2.req.typee,
                "request_page": "dealer"
              }; //console.log('apiiikkker', apiKey)

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.AddAddressUrl, apiKey).subscribe(function (result) {
                console.log("AddAddressUrl:", result); // this.addres = result;

                if (result.success == 1) {
                  _this2.route.navigate(['./change-address']);
                } else {//  this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.route.navigate(['./change-address']);
          }
        }]);

        return SelectAddressPage;
      }();

      _SelectAddressPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }];
      };

      _SelectAddressPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-select-address',
        template: _raw_loader_select_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_address_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SelectAddressPage);
      /***/
    },

    /***/
    21600: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".colu {\n  padding: 15px;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(84, 83, 83, 0.6) !important;\n  /* margin: 0 0px; */\n  color: var(--text-light2);\n  font-size: 0.9rem !important;\n  font-weight: 500 !important;\n  --padding-bottom: 2px !important;\n}\n\n.categoryName {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.ionic_btn {\n  display: block;\n  margin: auto;\n  text-transform: capitalize;\n  --border-radius: 20px;\n  width: 122px;\n  font-size: 13px;\n  --background: #B01D22;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUdKIiwiZmlsZSI6InNlbGVjdC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG59XG5pb24taW5wdXR7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoODQsIDgzLCA4MywgMC42KSAhaW1wb3J0YW50O1xuICAgIC8qIG1hcmdpbjogMCAwcHg7ICovXG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICBmb250LXNpemU6IDAuOTByZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnlOYW1le1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb25pY19idG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMTIycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tYmFja2dyb3VuZDogI0IwMUQyMjtcbiAgICBoZWlnaHQ6IDMycHg7XG59Il19 */";
      /***/
    },

    /***/
    73466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Add New Address</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'content-bg':  platform?.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"12\" class=\"boundary1\">\n      <div  class=\"custom_container\">\n        <ion-row>\n          <ion-col >\n            <p class=\"categoryName\">Address Details</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n            <ion-label> Address Line 1<sup>*</sup></ion-label>\n            <ion-input #input  type = \"text\" [(ngModel)]=\"add1\" ></ion-input>\n          </ion-col>\n            <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n              <ion-label> Address Line 2 <sup>*</sup> </ion-label>\n               <ion-input #input  type = \"text\" [(ngModel)]=\"add2\" ></ion-input>\n  \n              </ion-col>\n              <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n                <ion-label>Pin Code<sup>*</sup> </ion-label>\n                 <ion-input (ngModelChange)='checkInput($event)' #input  maxlength = \"6\" type = \"tel\" \n                  [(ngModel)]=\"pin\"></ion-input>\n                </ion-col>\n                <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n                  <ion-label> City<sup>*</sup> </ion-label>\n                   <ion-input #input  type = \"text\" [(ngModel)]=\"city\" disabled></ion-input>\n                    <!-- {{searchData?.city}} {{addressDetail?.city}} -->\n                  </ion-col>\n                  <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n                    <ion-label> State<sup>*</sup> </ion-label>\n                     <ion-input #input  type = \"text\" [(ngModel)]=\"state\" disabled></ion-input>\n                       <!-- {{searchData?.state}}{{addressDetail?.state}} -->\n                  \n        \n                    </ion-col>\n        </ion-row>\n        <br>\n       <br>\n        <ion-row>\n          <ion-col>\n            <ion-button class=\"ionic_btn\" tappable (click)=\"checkingFilled() \">Add</ion-button>\n           </ion-col>\n           <ion-col>\n            <ion-button class=\"ionic_btn\" tappable (click)=\"back()\">Back</ion-button>\n           </ion-col>\n        </ion-row>\n        <br>\n        </div>\n      </ion-col>\n      </ion-row>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_redemptionModule_select-address_select-address_module_ts-es5.js.map