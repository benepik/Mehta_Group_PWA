(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_purchasehistory_purchasehistory_module_ts"], {
    /***/
    17966: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PurchasehistoryPageRoutingModule": function PurchasehistoryPageRoutingModule() {
          return (
            /* binding */
            _PurchasehistoryPageRoutingModule
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


      var _purchasehistory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./purchasehistory.page */
      1059);

      var routes = [{
        path: '',
        component: _purchasehistory_page__WEBPACK_IMPORTED_MODULE_0__.PurchasehistoryPage
      }];

      var _PurchasehistoryPageRoutingModule = function PurchasehistoryPageRoutingModule() {
        _classCallCheck(this, PurchasehistoryPageRoutingModule);
      };

      _PurchasehistoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PurchasehistoryPageRoutingModule);
      /***/
    },

    /***/
    9258: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PurchasehistoryPageModule": function PurchasehistoryPageModule() {
          return (
            /* binding */
            _PurchasehistoryPageModule
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


      var _purchasehistory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./purchasehistory-routing.module */
      17966);
      /* harmony import */


      var _purchasehistory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./purchasehistory.page */
      1059);

      var _PurchasehistoryPageModule = function PurchasehistoryPageModule() {
        _classCallCheck(this, PurchasehistoryPageModule);
      };

      _PurchasehistoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _purchasehistory_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasehistoryPageRoutingModule],
        declarations: [_purchasehistory_page__WEBPACK_IMPORTED_MODULE_1__.PurchasehistoryPage]
      })], _PurchasehistoryPageModule);
      /***/
    },

    /***/
    1059: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PurchasehistoryPage": function PurchasehistoryPage() {
          return (
            /* binding */
            _PurchasehistoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_purchasehistory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./purchasehistory.page.html */
      75498);
      /* harmony import */


      var _purchasehistory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./purchasehistory.page.scss */
      40560);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-clipboard */
      50948);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _PurchasehistoryPage = /*#__PURE__*/function () {
        function PurchasehistoryPage(router, sendData, route, _clipboardService, location, apiService, zone) {
          _classCallCheck(this, PurchasehistoryPage);

          this.router = router;
          this.sendData = sendData;
          this.route = route;
          this._clipboardService = _clipboardService;
          this.location = location;
          this.apiService = apiService;
          this.zone = zone;
          this.arrr = [];
          this.value = 0;
          this.infiniteScroll_call = false; // this.request_page=this.sendData.request_page;

          this.allocationData = this.sendData.alldata;
          console.log("all locationData==", this.allocationData);
          this.arrr = []; // history.pushState(null, null, window.location.pathname);

          this.value = 0;
          this.backKey = this.sendData.alldata.backKey;
          console.log("back button key==", this.backKey);
        }

        _createClass(PurchasehistoryPage, [{
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.sendData.itemDetails = {
              "product_id": "",
              "quantity": ""
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.purchaseHIst(null);
          }
        }, {
          key: "copy",
          value: function copy(text) {
            this._clipboardService.copy(text); // this.mymessage="Copied";


            this.apiService.showToastMessage("Copied", "top", 3000, "greenBg");
          }
        }, {
          key: "close",
          value: function close() {
            var _this = this;

            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.route.navigate(['./customer-details']);

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "hometab",
          value: function hometab() {
            var _this2 = this;

            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.route.navigate(['./tabs/home']);

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            var _this3 = this;

            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.location.back(); // this.route.navigate(['./pointsgiftlist']);

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
          key: "modalcall",
          value: function modalcall(item) {
            var _this4 = this;

            console.log('itemss: ', item);
            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.sendData.itemDetails = {
                          'auto_id': item.product_id,
                          'request_page': this.allocationData.employee_type,
                          'request_for': this.allocationData.customer_id
                        };

                        if (this.allocationData.customer_id == '') {
                          this.sendData.redeem_for = 'self';
                          this.sendData.cart_request = 'dealer';
                        } else {
                          this.sendData.redeem_for = 'other';
                          this.sendData.cart_request = 'customer';
                        }

                        console.log("798:", this.sendData.itemDetails);
                        this.sendData.page_request_type = 'detail';
                        this.router.navigate(['/itemdetail']);

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }, {
          key: "purchaseHIst",
          value: function purchaseHIst(event) {
            var _this5 = this;

            if (event == null) {
              this.apiService.presentLoadingDefault();
            }

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _this6 = this;

                var apiKey;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        apiKey = {
                          "value": this.value,
                          "request_page": this.allocationData.request_page,
                          "request_for": this.allocationData.customer_id
                        };
                        this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.PurchaseHistoryUrl, apiKey).subscribe(function (result) {
                          if (event == null) {
                            _this6.apiService.presentLoadingClose();
                          } else {
                            event.target.complete();
                          }

                          _this6.apiService.presentLoadingClose(); // this.arrr = result.data;
                          //  this.arrr=[];


                          _this6.title = result.page_title;

                          if (result.success == 1 || result.success == '1') {
                            if (_this6.arrr == undefined) {
                              _this6.arrr = result.data;
                            } else {
                              _this6.arrr = _this6.arrr.concat(result.data);
                            }

                            _this6.errorMessage = '';
                            _this6.errorImage = '';
                          } else {
                            if (_this6.value == 0) {
                              _this6.errorImage = result.noDataImage;
                            } else {
                              _this6.errorMessage = result.message;
                            } // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');

                          }

                          if (_this6.infiniteScroll_call == true) {
                            _this6.stopInfiniteScroll();
                          }
                        }, function (err) {
                          _this6.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                          if (_this6.infiniteScroll_call == true) {
                            _this6.stopInfiniteScroll();
                          }
                        });

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.purchaseHIst(event);
          }
        }, {
          key: "back",
          value: function back() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.zone.run(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  if (this.allocationData.customer_id != '') {
                                    this.sendData.alldata = {
                                      'customer_id': this.allocationData.customer_id,
                                      'employee_type': this.allocationData.employee_type
                                    };
                                    this.router.navigateByUrl('/pointsgiftlist', {
                                      replaceUrl: true
                                    });
                                  } else {
                                    this.sendData.alldata = {
                                      'customer_id': '',
                                      'employee_type': ''
                                    };
                                    this.router.navigateByUrl('/pointsgiftlist', {
                                      replaceUrl: true
                                    });
                                  }

                                case 1:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this8 = this;

            this.infiniteScroll_call = true;
            this.infiniteScroll_val = event;
            setTimeout(function () {
              _this8.value = _this8.arrr.length;

              _this8.purchaseHIst(null);
            }, 500);
          }
        }, {
          key: "stopInfiniteScroll",
          value: function stopInfiniteScroll() {
            if (this.infiniteScroll_call == true) {
              this.infiniteScroll_call = false;
              this.infiniteScroll_val.target.complete();
            }
          }
        }]);

        return PurchasehistoryPage;
      }();

      _PurchasehistoryPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__.ClipboardService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
        }];
      };

      _PurchasehistoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-purchasehistory',
        template: _raw_loader_purchasehistory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_purchasehistory_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PurchasehistoryPage);
      /***/
    },

    /***/
    40560: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".para {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  font-size: 14px;\n  -webkit-user-select: auto;\n}\n\n.imgcss {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.purch {\n  color: red;\n  font-size: 14px;\n  font-weight: bold;\n  padding-left: 10px;\n}\n\n.bo {\n  font-weight: bold;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxlQUFBO0VBQWUsa0JBQUE7RUFBa0IsZUFBQTtFQUFlLHlCQUFBO0FBS3REOztBQUpBO0VBQVEsYUFBQTtFQUFhLFdBQUE7RUFBVyxzQkFBQTtLQUFBLG1CQUFBO0FBVWhDOztBQVRBO0VBQU8sVUFBQTtFQUFVLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixrQkFBQTtBQWdCakQ7O0FBZkE7RUFBSSxpQkFBQTtBQW1CSjs7QUFsQkE7RUFBZSw0QkFBQTtFQUE2QixzQkFBQTtFQUF1QixZQUFBO0VBQWEsMkJBQUE7QUF5QmhGIiwiZmlsZSI6InB1cmNoYXNlaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYXttYXJnaW4tdG9wOjNweDttYXJnaW4tYm90dG9tOjNweDtmb250LXNpemU6MTRweDstd2Via2l0LXVzZXItc2VsZWN0OmF1dG87fVxyXG4uaW1nY3Nze2hlaWdodDoxMDBweDt3aWR0aDoxMDAlO29iamVjdC1maXQ6Y29udGFpbjt9XHJcbi5wdXJjaHtjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6Ym9sZDtwYWRkaW5nLWxlZnQ6MTBweDt9XHJcbi5ib3tmb250LXdlaWdodDpib2xkO31cclxuLmJnV2FsbGV0SW1hZ2V7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO3BhZGRpbmc6IDVweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fSJdfQ== */";
      /***/
    },

    /***/
    75498: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title> \n    <ion-buttons slot=\"start\">\n      <ion-back-button tappable *ngIf=\"backKey=='home'\" (click)=\"hometab()\"></ion-back-button>\n      <ion-back-button tappable *ngIf=\"backKey=='back2'\" (click)=\"goBack()\"></ion-back-button>\n      <ion-back-button tappable *ngIf=\"backKey=='back1'\" (click)=\"close()\"></ion-back-button>\n      <ion-back-button tappable *ngIf=\"backKey=='back'\" (click)=\"back()\"></ion-back-button>\n    </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t  </ion-refresher>\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n        </div>\n      <!-- <p class=\"purch\">Purchase History</p> -->\n      <ion-row *ngFor=\"let item of arrr; let i = index\" class=\"borderBtmDiv\">\n        <ion-col [size]=\"3\" sizexs=\"3\" size-md=\"3\" size-lg=\"3\">\n          <img [src]=\"item.media\" onerror=\"this.src='assets/watermark/watermark.png'\" class=\"imgcss\" />\n        </ion-col>\n        <ion-col [size]=\"5\" sizexs=\"5\" size-md=\"7\" size-lg=\"7\" class=\"autoMargin\">\n          <p class=\"para bo\">{{item.goods_name}}</p>\n          <p class=\"para\">{{item?.order_txt}}</p>\n          <p class=\"para\">{{item?.quantity_str}}: {{item?.product_quantity}}</p>\n          <p class=\"para\">{{item?.point_str}}: {{item?.product_points}}</p>\n          <p class=\"para\">{{item?.sts_str}}: {{item.status}}</p>\n          <p class=\"para\" *ngIf=\"item?.tracking_val!=''\" >{{item?.tracking_id}}\n            <span tappable (click)=\"copy(item?.tracking_val)\">{{item?.tracking_val}}<ion-icon name=\"copy-outline\"></ion-icon></span></p>\n          <p *ngIf=\"item?.tracking_url!=''\" class=\"para\" style=\"white-space: nowrap;\" [innerHTML]=\"item?.tracking_url\"></p>\n        </ion-col>\n        <ion-col [size]=\"4\" sizexs=\"4\" size-md=\"2\" size-lg=\"2\" class=\"autoMargin ion-text-center\" *ngIf=\"item?.button_applicable=='true'\">\n          <ion-button tappable class=\"ionic_btn\" color=\"danger\"  style=\"width: 92%;font-size: 12px\" (click)=\"modalcall(item)\">{{item.button_text}}</ion-button>\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"errorImage!=''\">\n        <img [src]=\"errorImage\"/>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n  <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_redemptionModule_purchasehistory_purchasehistory_module_ts-es5.js.map