(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_change-address_change-address_module_ts"], {
    /***/
    59259: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeAddressPageRoutingModule": function ChangeAddressPageRoutingModule() {
          return (
            /* binding */
            _ChangeAddressPageRoutingModule
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


      var _change_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-address.page */
      18390);

      var routes = [{
        path: '',
        component: _change_address_page__WEBPACK_IMPORTED_MODULE_0__.ChangeAddressPage
      }];

      var _ChangeAddressPageRoutingModule = function ChangeAddressPageRoutingModule() {
        _classCallCheck(this, ChangeAddressPageRoutingModule);
      };

      _ChangeAddressPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChangeAddressPageRoutingModule);
      /***/
    },

    /***/
    51504: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeAddressPageModule": function ChangeAddressPageModule() {
          return (
            /* binding */
            _ChangeAddressPageModule
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


      var _change_address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-address-routing.module */
      59259);
      /* harmony import */


      var _change_address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-address.page */
      18390);

      var _ChangeAddressPageModule = function ChangeAddressPageModule() {
        _classCallCheck(this, ChangeAddressPageModule);
      };

      _ChangeAddressPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _change_address_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeAddressPageRoutingModule],
        declarations: [_change_address_page__WEBPACK_IMPORTED_MODULE_1__.ChangeAddressPage]
      })], _ChangeAddressPageModule);
      /***/
    },

    /***/
    18390: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeAddressPage": function ChangeAddressPage() {
          return (
            /* binding */
            _ChangeAddressPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_change_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./change-address.page.html */
      49730);
      /* harmony import */


      var _change_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-address.page.scss */
      63174);
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

      var _ChangeAddressPage = /*#__PURE__*/function () {
        function ChangeAddressPage(sendData, route, apiService, zone) {
          _classCallCheck(this, ChangeAddressPage);

          this.sendData = sendData;
          this.route = route;
          this.apiService = apiService;
          this.zone = zone;
          this.msg = "";
          this.redeem_for = this.sendData.alldata;
          console.log("this.redeem_for", this.redeem_for);
        }

        _createClass(ChangeAddressPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.chagngeAddress();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "radioGroupChange",
          value: function radioGroupChange(ev, obj) {
            var _this = this;

            console.log('ev==>', ev);
            console.log('obj==>', obj); // console.log('data==>', data);
            //  obj.answer = obj.value;

            if (obj.is_primary == '1') {
              this.imgArr = obj.auto_id;
            } else {
              this.apiService.presentLoadingDefault();
              this.zone.run(function () {
                var apiKey = {
                  "address_fetch_type": "change",
                  "redeem_for": _this.redeem_for.request_page,
                  "request_page": "dealer",
                  "address_id": obj.auto_id,
                  "request_for": "5",
                  "requested_module": "address"
                };

                _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.SkipUrl, apiKey).subscribe(function (result) {
                  console.log("CommonUrl: ", result);

                  _this.apiService.presentLoadingClose();

                  if (result.success == 1) {
                    //this.apiService.showToastMessage(result.message, 'top' , 2000, 'greenBg');
                    _this.route.navigate(['./buyitem']);
                  } else {
                    _this.apiService.showToastMessage(result.message, 'top', 2000, 'redBg');
                  }
                }, function (err) {
                  _this.apiService.presentLoadingClose();

                  _this.apiService.showToastMessage(JSON.stringify(err), 'top', 2000, 'redBg');
                });
              }); //  this.imgArr = obj.auto_id;
            }
          }
        }, {
          key: "chagngeAddress",
          value: function chagngeAddress() {
            var _this2 = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {
                "address_fetch_type": "change",
                "redeem_for": _this2.redeem_for.request_page,
                "request_page": "dealer",
                "request_for": _this2.redeem_for.customer_id || '',
                "request_user_type": _this2.redeem_for.employee_type || ''
              };

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.AddressUrl, apiKey).subscribe(function (result) {
                console.log("AddressUrl: ", result);

                _this2.apiService.presentLoadingClose();

                _this2.addres = result;

                if (result.success == 1) {
                  _this2.msg = '';

                  for (var i = 0; i < _this2.addres.data.data.length; i++) {
                    if (_this2.addres.data.data[i].is_primary == '1' || _this2.addres.data.data[i].is_primary == 1) {
                      _this2.imgArr = _this2.addres.data.data[i].auto_id;
                      console.log("this.imgArr: ", _this2.imgArr);
                    } else {
                      // this.imgArr= '';
                      console.log("this.imgArr: ", _this2.imgArr);
                    }
                  } // for(let i =0; i<this.addres.data.data.length; i++){
                  //   if(this.addres.data.data[i].is_primary == '1' || this.addres.data.data[i].is_primary == 1){
                  //     this.autoid = this.addres.data.data[i].auto_id;
                  //   }
                  //   // else{
                  //   //   this.autoid="";
                  //   // }
                  // }

                } else {
                  _this2.msg = result.message;
                }
              }, function (err) {
                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "addAddress",
          value: function addAddress() {
            var item = {
              "auto_id": '',
              "pin_code": ''
            };
            this.sendData.alldata = {
              "customer": this.redeem_for.customer_id,
              "typee": this.redeem_for.employee_type
            };
            console.log('selecttttt:', this.sendData.alldata);
            this.sendData.addressDetails = item;
            console.log('addressDetails:', this.sendData.addressDetails);
            this.route.navigate(['/select-address']);
          }
        }, {
          key: "edit",
          value: function edit(item) {
            this.sendData.addressDetails = item;
            this.route.navigate(['/select-address']);
          }
        }]);

        return ChangeAddressPage;
      }();

      _ChangeAddressPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
        }];
      };

      _ChangeAddressPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-change-address',
        template: _raw_loader_change_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_change_address_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ChangeAddressPage);
      /***/
    },

    /***/
    63174: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".colu {\n  padding: 15px;\n}\n\n.para {\n  color: red;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-weight: bold;\n}\n\n.para1 {\n  font-size: 16px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.para2 {\n  font-size: 16px;\n  color: red;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.brbottom {\n  border-bottom: 1px solid lightgray;\n}\n\n.ionic_btnic {\n  --background: var(--headerColor);\n  --border-radius: 14px;\n  width: auto;\n  text-transform: capitalize;\n  height: 30px;\n  font-size: 14px;\n}\n\n.txtcentr {\n  text-align: center;\n}\n\n.view {\n  --background: transparent;\n  color: #b01d22;\n  text-transform: capitalize;\n  --border-radius: 20px;\n  width: auto;\n}\n\n.cntr {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLGFBQUE7QUFFTjs7QUFEQTtFQUFNLFVBQUE7RUFBVyxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLGlCQUFBO0FBUXBEOztBQVBBO0VBQU8sZUFBQTtFQUFpQixlQUFBO0VBQWdCLGtCQUFBO0FBYXhDOztBQVpBO0VBQU8sZUFBQTtFQUFpQixVQUFBO0VBQVcsZUFBQTtFQUFnQixrQkFBQTtBQW1CbkQ7O0FBbEJBO0VBQVUsa0NBQUE7QUFzQlY7O0FBckJBO0VBQWEsZ0NBQUE7RUFBa0MscUJBQUE7RUFBdUIsV0FBQTtFQUFhLDBCQUFBO0VBQTRCLFlBQUE7RUFBYyxlQUFBO0FBOEI3SDs7QUE3QkE7RUFBVSxrQkFBQTtBQWlDVjs7QUFoQ0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQW1DSjs7QUFqQ0E7RUFBTSxrQkFBQTtBQXFDTiIsImZpbGUiOiJjaGFuZ2UtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdXtwYWRkaW5nOiAxNXB4O31cbi5wYXJhe2NvbG9yOiByZWQ7bWFyZ2luLXRvcDogNHB4O21hcmdpbi1ib3R0b206IDRweDtmb250LXdlaWdodDogYm9sZDt9IFxuLnBhcmExe2ZvbnQtc2l6ZTogMTZweDs7bWFyZ2luLXRvcDogNHB4O21hcmdpbi1ib3R0b206IDRweDt9XG4ucGFyYTJ7Zm9udC1zaXplOiAxNnB4Oztjb2xvcjogcmVkO21hcmdpbi10b3A6IDRweDttYXJnaW4tYm90dG9tOiA0cHg7fVxuLmJyYm90dG9te2JvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7fVxuLmlvbmljX2J0bmljey0tYmFja2dyb3VuZDogdmFyKC0taGVhZGVyQ29sb3IpOyAtLWJvcmRlci1yYWRpdXM6IDE0cHg7IHdpZHRoOiBhdXRvOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgaGVpZ2h0OiAzMHB4OyBmb250LXNpemU6IDE0cHg7fVxuLnR4dGNlbnRye3RleHQtYWxpZ246Y2VudGVyO31cbi52aWV3e1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNiMDFkMjI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOmF1dG87XG59XG4uY250cnt0ZXh0LWFsaWduOmNlbnRlcjt9Il19 */";
      /***/
    },

    /***/
    49730: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Select Address</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n      <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n          <ion-row *ngIf=\"addres?.data?.title\">\n              <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\" class=\"brbottom\">\n                  <p class=\"para\">{{addres?.data?.title}}</p>\n              </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"addres?.data?.data\">\n              <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\" >\n                <ion-list>\n                  <ion-radio-group [value] = \"imgArr\">\n                    <ion-item  *ngFor =\"let item of addres?.data?.data\" class=\"brbottom\" >\n                      <ion-label class=\"para1\">{{item?.address_line1}}<br>{{item?.address_line2}}<br>\n                        {{item?.city}}-{{item?.pin_code}}</ion-label>\n                        <!-- [value]=\"imgArr\" -->\n                       \n                      <ion-radio [value]=\"item.auto_id\"  slot=\"start\" (click)=\"radioGroupChange($event, item)\" ></ion-radio>\n                      <ion-button class=\"view butt\" (click)=\"edit(item)\">Edit</ion-button>\n                    </ion-item>\n                 </ion-radio-group>\n                 </ion-list>\n              </ion-col>\n          </ion-row>\n          <br>\n          <div class=\"txtcentr\" *ngIf = \"addres?.data?.show_btn == true\">\n              <ion-button class=\"ionic_btnic\" tappable (click)=\"addAddress()\">+ Add Address</ion-button>\n          </div>\n\n          <div *ngIf=\"msg!=''\">\n            <p class=\"cntr\">{{msg}}</p>\n            </div>\n          <br>\n          </ion-col>\n          </ion-row>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_redemptionModule_change-address_change-address_module_ts-es5.js.map