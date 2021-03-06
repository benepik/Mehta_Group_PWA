(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_itemdetail_itemdetail_module_ts"], {
    /***/
    62755: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemdetailPageRoutingModule": function ItemdetailPageRoutingModule() {
          return (
            /* binding */
            _ItemdetailPageRoutingModule
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


      var _itemdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./itemdetail.page */
      90484);

      var routes = [{
        path: '',
        component: _itemdetail_page__WEBPACK_IMPORTED_MODULE_0__.ItemdetailPage
      }];

      var _ItemdetailPageRoutingModule = function ItemdetailPageRoutingModule() {
        _classCallCheck(this, ItemdetailPageRoutingModule);
      };

      _ItemdetailPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ItemdetailPageRoutingModule);
      /***/
    },

    /***/
    43723: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemdetailPageModule": function ItemdetailPageModule() {
          return (
            /* binding */
            _ItemdetailPageModule
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


      var _itemdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./itemdetail-routing.module */
      62755);
      /* harmony import */


      var _itemdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./itemdetail.page */
      90484);

      var _ItemdetailPageModule = function ItemdetailPageModule() {
        _classCallCheck(this, ItemdetailPageModule);
      };

      _ItemdetailPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _itemdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemdetailPageRoutingModule],
        declarations: [_itemdetail_page__WEBPACK_IMPORTED_MODULE_1__.ItemdetailPage]
      })], _ItemdetailPageModule);
      /***/
    },

    /***/
    90484: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemdetailPage": function ItemdetailPage() {
          return (
            /* binding */
            _ItemdetailPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_itemdetail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./itemdetail.page.html */
      19363);
      /* harmony import */


      var _itemdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./itemdetail.page.scss */
      49354);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/constant */
      56544); // import { Component, OnInit } from '@angular/core';


      var _ItemdetailPage = /*#__PURE__*/function () {
        function ItemdetailPage(router, sendData, apiService, zone) {
          _classCallCheck(this, ItemdetailPage);

          this.router = router;
          this.sendData = sendData;
          this.apiService = apiService;
          this.zone = zone;
          this.temparray = [];
          this.faqs = [];
          this.visible = false;
          this.currentItemindex = 0;
          this.postSlider = {
            speed: "500",
            initialSlide: 0,
            slidesPerView: 1,
            spaceBetween: 7
          };
          this.item_details = this.sendData.itemDetails;
          this.page_request_type = this.sendData.page_request_type;
          this.redeem_for = this.sendData.redeem_for;
          console.log('99999:', this.item_details);

          if (this.sendData.itemDetails.product_id) {
            this.item_details.auto_id = this.sendData.itemDetails.product_id;
          } else {
            console.log("546789:", this.sendData.itemDetails);
            this.item_details = this.sendData.itemDetails;
          }

          console.log(" this.item_details : ", this.item_details);
        }

        _createClass(ItemdetailPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.itemDetailsShow();
          }
        }, {
          key: "itemDetailsShow",
          value: function itemDetailsShow() {
            var _this = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var apiKey;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        apiKey = {
                          "request_page": this.sendData.cart_request,
                          "redeem_for": this.redeem_for,
                          "page_request_type": this.page_request_type,
                          "product_id": this.item_details.auto_id,
                          "request_for": this.item_details.request_for,
                          "request_user_type": this.item_details.request_page
                        };
                        console.log("aaaaaaaaa:", apiKey);
                        this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.ProductDetailUrl, apiKey).subscribe(function (result) {
                          _this2.apiService.presentLoadingClose();

                          _this2.temparray = result.data;
                          _this2.tempButt = result.buy_data;

                          if (result.success == 1) {} else {
                            _this2.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                          }
                        }, function (err) {
                          _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                          _this2.apiService.presentLoadingClose();
                        });

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "showArrow",
          value: function showArrow(item, index) {
            this.currentItemindex = index;
            console.log(item, index);

            if (item.show_div) {
              item.show_div = item.show_div == true ? false : true;
            } else {
              item.show_div = true;
            }
          }
        }, {
          key: "buyitemFun",
          value: function buyitemFun() {
            var _this3 = this;

            // alert('1')
            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.sendData.page_request_type = 'buy';
                        this.sendData.cart_request = this.tempButt.cart_request;
                        this.sendData.alldata = {
                          'customer_id': this.item_details.request_for,
                          'employee_type': this.item_details.request_page
                        };

                        if (this.tempButt.buy_btn_text == "Add To Cart") {
                          // this.sendData.count = "1";
                          this.sendData.itemDetails = {
                            "product_id": this.item_details.auto_id,
                            "quantity": 1
                          };
                        } else {
                          this.sendData.itemDetails = {
                            "product_id": "",
                            "quantity": ""
                          };
                        }

                        this.router.navigate(['/buyitem']);

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "nextslide",
          value: function nextslide() {
            var _this4 = this;

            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.slidesRef.slideNext();

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "privslide",
          value: function privslide() {
            var _this5 = this;

            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.slidesRef.slidePrev();

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }]);

        return ItemdetailPage;
      }();

      _ItemdetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
        }];
      };

      _ItemdetailPage.propDecorators = {
        slidesRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
          args: ['slidesRef']
        }]
      };
      _ItemdetailPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-itemdetail',
        template: _raw_loader_itemdetail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_itemdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ItemdetailPage);
      /***/
    },

    /***/
    49354: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".imgcss {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.padd {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.whiteclass {\n  padding: 2px;\n}\n\n.cntr {\n  text-align: center;\n}\n\n.para {\n  color: red;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-weight: bold;\n}\n\n.arrowIcon {\n  height: 20px;\n  width: 100%;\n  margin: auto;\n}\n\n.boxS {\n  box-shadow: 1px 0px 4px 1px #d2d2d2;\n  margin-bottom: 10px;\n}\n\n.mainTitle {\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.SettingTitle {\n  font-size: 13px;\n}\n\nion-icon {\n  color: var(--headerColor);\n}\n\n.txtcolor {\n  color: var(--headerColor);\n}\n\n.para1 {\n  font-size: 13px;\n}\n\n.textend {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsWUFBQTtFQUFZLFdBQUE7RUFBVyxvQkFBQTtLQUFBLGlCQUFBO0FBSS9COztBQUhBO0VBQU0sa0JBQUE7RUFBa0IsaUJBQUE7QUFReEI7O0FBUEE7RUFBWSxZQUFBO0FBV1o7O0FBVkE7RUFBTSxrQkFBQTtBQWNOOztBQWJBO0VBQU0sVUFBQTtFQUFXLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7QUFvQnBEOztBQW5CQTtFQUFXLFlBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQXlCckM7O0FBeEJBO0VBQU0sbUNBQUE7RUFBb0MsbUJBQUE7QUE2QjFDOztBQTVCQTtFQUFXLHlCQUFBO0VBQXlCLGlCQUFBO0FBaUNwQzs7QUFoQ0E7RUFBYyxlQUFBO0FBb0NkOztBQW5DQTtFQUFTLHlCQUFBO0FBdUNUOztBQXRDQTtFQUFVLHlCQUFBO0FBMENWOztBQXpDQTtFQUFPLGVBQUE7QUE2Q1A7O0FBNUNBO0VBQVMsZUFBQTtBQWdEVCIsImZpbGUiOiJpdGVtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdjc3N7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvYmplY3QtZml0OmNvdmVyO31cclxuLnBhZGR7cGFkZGluZy1yaWdodDowcHg7cGFkZGluZy1sZWZ0OjBweDt9XHJcbi53aGl0ZWNsYXNze3BhZGRpbmc6MnB4O30gXHJcbi5jbnRye3RleHQtYWxpZ246IGNlbnRlcjt9IFxyXG4ucGFyYXtjb2xvcjogcmVkO21hcmdpbi10b3A6IDRweDttYXJnaW4tYm90dG9tOiA0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fSAgIFxyXG4uYXJyb3dJY29ue2hlaWdodDogMjBweDt3aWR0aDogMTAwJTsgbWFyZ2luOiBhdXRvO31cclxuLmJveFN7Ym94LXNoYWRvdzogMXB4IDBweCA0cHggMXB4ICNkMmQyZDI7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbi5tYWluVGl0bGV7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cclxuLlNldHRpbmdUaXRsZXtmb250LXNpemU6IDEzcHg7fVxyXG5pb24taWNvbntjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO31cclxuLnR4dGNvbG9ye2NvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcil9XHJcbi5wYXJhMXtmb250LXNpemU6IDEzcHg7fVxyXG4udGV4dGVuZHt0ZXh0LWFsaWduOiBlbmQ7fSJdfQ== */";
      /***/
    },

    /***/
    19363: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Detail</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <ion-row>\n        <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"6\" size-lg=\"6\">\n          <ion-row *ngIf=\"temparray?.media_arr?.length>0\"> \n            <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" class=\"brd\">\n              <!-- (click)=gotoitemdetail(imgdata) -->\n              <div class=\"borderDiv\">\n                <ion-row class=\"ion-text-center\">\n                  <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"padd autoMargin\">\n                    <span (click)=\"privslide()\">\n                      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                    </span>\n                  </ion-col>\n                  <ion-col  [size]=\"8\" size-sm=\"8\" size-md=\"10\" size-lg=\"10\" class=\"padd\" >\n                    <ion-slides #slidesRef [options]=\"postSlider\" pager=\"true\">\n                      <ion-slide *ngFor =\"let img of temparray?.media_arr\">\n                        <ion-row class=\"fullFidth\">\n                          <ion-col [size]=\"12\" class=\"ion-no-padding\">\n                            <img [src]=\"img?.good_image\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"imgcss\">\n                          </ion-col>\n                        </ion-row>\n\n                      </ion-slide>\n                    </ion-slides>\n                  </ion-col>\n                  <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"padd autoMargin\">\n                    <span (click)=\"nextslide()\">\n                      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                    </span>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"cntr\" *ngIf = \"tempButt?.show_buy_button == true\">\n            <ion-button tappable class=\"ionic_btn\" tappable (click)=\"buyitemFun()\">{{tempButt?.buy_btn_text}}</ion-button>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"6\" size-lg=\"6\">\n          <ion-row>\n            <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"12\" size-lg=\"12\">\n              <p class=\"para\">{{temparray?.goods_name}}</p>\n              <p class=\"para\">{{temparray?.product_points}}</p>\n              <div class=\"para1\" [innerHTML]=\"temparray?.description\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row [ngClass]=\"item?.show_div ? 'active' : '' \" *ngFor=\"let item of temparray?.display_arr; let i = index\" class=\"boxS\" (click)=\"showArrow(item, i)\">\n            <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\">\n              <p class=\"SettingTitle  ion-no-margin txtcolor\" >{{item?.key}}</p>\n            </ion-col>\n            <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" class=\"autoMargin textend\" tappable>\n              <ion-icon [name]=\"item?.show_div? 'chevron-up-outline' :'chevron-down-outline'\"></ion-icon>\n            </ion-col>\n            <ion-row *ngIf=\"item?.show_div\">\n              <ion-col>\n                <p class=\"discriptionDiv ion-no-margin\" [innerHTML]=\"item?.value\"></p>\n              </ion-col>\n            </ion-row>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_redemptionModule_itemdetail_itemdetail_module_ts-es5.js.map