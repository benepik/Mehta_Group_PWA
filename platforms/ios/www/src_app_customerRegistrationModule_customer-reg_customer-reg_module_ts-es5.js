(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_customerRegistrationModule_customer-reg_customer-reg_module_ts"], {
    /***/
    9923: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerRegPageRoutingModule": function CustomerRegPageRoutingModule() {
          return (
            /* binding */
            _CustomerRegPageRoutingModule
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


      var _customer_reg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customer-reg.page */
      11701);

      var routes = [{
        path: '',
        component: _customer_reg_page__WEBPACK_IMPORTED_MODULE_0__.CustomerRegPage
      }];

      var _CustomerRegPageRoutingModule = function CustomerRegPageRoutingModule() {
        _classCallCheck(this, CustomerRegPageRoutingModule);
      };

      _CustomerRegPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CustomerRegPageRoutingModule);
      /***/
    },

    /***/
    68786: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerRegPageModule": function CustomerRegPageModule() {
          return (
            /* binding */
            _CustomerRegPageModule
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


      var _customer_reg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customer-reg-routing.module */
      9923);
      /* harmony import */


      var _customer_reg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./customer-reg.page */
      11701);

      var _CustomerRegPageModule = function CustomerRegPageModule() {
        _classCallCheck(this, CustomerRegPageModule);
      };

      _CustomerRegPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _customer_reg_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRegPageRoutingModule],
        declarations: [_customer_reg_page__WEBPACK_IMPORTED_MODULE_1__.CustomerRegPage]
      })], _CustomerRegPageModule);
      /***/
    },

    /***/
    11701: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerRegPage": function CustomerRegPage() {
          return (
            /* binding */
            _CustomerRegPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_customer_reg_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./customer-reg.page.html */
      67664);
      /* harmony import */


      var _customer_reg_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./customer-reg.page.scss */
      80184);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/constant */
      56544);

      var _CustomerRegPage = /*#__PURE__*/function () {
        function CustomerRegPage(route, platform, navController, zone, apiService, sendData) {
          _classCallCheck(this, CustomerRegPage);

          this.route = route;
          this.platform = platform;
          this.navController = navController;
          this.zone = zone;
          this.apiService = apiService;
          this.sendData = sendData;
          this.userImg = "";
          this.searchString = '';
          this.isItemAvailable = false;
          this.items = [];
          this.buttonData = []; // value:number=0;

          this.infiniteScroll_call = false;
          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          });
          this.buttonData = [{
            auto_id: "1",
            tab_name: "Active Customers",
            employee_type: "3",
            tab_status: "selected_tab"
          }, {
            auto_id: "1",
            tab_name: "Blocked Customers",
            employee_type: "3",
            tab_status: "unselected_tab"
          }];
        }

        _createClass(CustomerRegPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.customerReg();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "searchCustomer",
          value: function searchCustomer(ev) {
            console.log('ev', ev);

            if (ev.detail.value && ev.detail.value != '') {
              this.searchString = ev.detail.value;
            } else {
              this.searchString = '';
            }

            console.log('ev', ev); //this.value=0;
            //this.userData=[];
            // this.showItemList(this.searchString);
          }
        }, {
          key: "close",
          value: function close() {
            this.route.navigate(['./tabs/home']); //this.navController.back();
            // this.modalCtrl.dismiss();
          }
        }, {
          key: "customerReg",
          value: function customerReg() {
            var _this = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {};

              _this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.CustReg, apiKey).subscribe(function (result) {
                console.log("CustReg: ", result);

                _this.apiService.presentLoadingClose();

                if (result.success == 1) {
                  _this.buttData = result.data;

                  _this.showItemList('pending');

                  _this.pageTitle = _this.buttData[0].tab_name;
                } else {}
              }, function (err) {
                _this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                _this.apiService.presentLoadingClose();
              });
            });
          }
        }, {
          key: "showItemList",
          value: function showItemList(id) {
            var _this2 = this;

            if (id == "app") {
              this.tab_status = "selected_tab";
            }

            this.id_item = id;
            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {
                "value": '',
                "search_str": "",
                "selected_tab": id
              };

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.CustRegDataUrl, apiKey).subscribe(function (result) {
                console.log("CustRegDataUrl: ", result);

                _this2.apiService.presentLoadingClose();

                if (result.success == 1) {
                  // if(this.custmReg==undefined){
                  _this2.custmReg = result.data; // }else{
                  //   this.custmReg =this.custmReg.concat(result.data);
                  // }        

                  _this2.showImg = "";
                  _this2.errorMessage = '';
                  console.log("custmReg : ", _this2.custmReg); //  this.showItemList();
                } else {
                  _this2.showImg = result.no_data_image;
                  _this2.errorMessage = result.message;
                } // if(this.infiniteScroll_call==true){
                //   this.stopInfiniteScroll();
                //   }

              }, function (err) {
                _this2.apiService.presentLoadingClose();

                _this2.apiService.showToastMessage(JSON.stringify(err), top, 2000, "redBg");
              });
            });
          }
        }, {
          key: "changedTabs",
          value: function changedTabs(item) {
            var _this3 = this;

            this.zone.run(function () {
              if (item.tab_status != "selected_tab") {
                item.tab_status = "selected_tab";

                if (_this3.pageTitle == "Approved List") {
                  if (item.tab_name == "Active Customers") {
                    item.tab_status = 'selected_tab';

                    _this3.showItemList("active");
                  } else {
                    item.tab_status = 'unselected_tab';

                    _this3.showItemList("block");
                  }
                }

                for (var i = 0; i < _this3.buttonData.length; i++) {
                  if (item.tab_name != _this3.buttonData[i].tab_name) {
                    _this3.buttonData[i].tab_status = "unselected_tab";
                  } else {
                    _this3.buttonData[i].tab_status = "selected_tab";
                  }
                }
              }
            });
          }
        }, {
          key: "changedTab",
          value: function changedTab(item) {
            this.custmReg = [];
            this.showImg = {}; //this.apiService.presentLoadingDefault();

            if (item.tab_status != "selected_tab") {
              item.tab_status = "selected_tab"; // this.apiService.presentLoadingClose();

              this.pageTitle = item.tab_name;

              if (this.pageTitle == "Approved List") {
                this.buttonData[0].tab_status = "selected_tab";
                this.buttonData[1].tab_status = "unselected_tab";
                this.showItemList("active");
              } else if (this.pageTitle == "Rejected List") {
                this.showItemList("rejected");
              } else {
                this.showItemList("pending");
              }

              if (item.show_no_data == "1") {
                this.showImg = item.no_data_image;
              } else {//this.showImg = item.no_data_image;
              } // if(this.buttonData){
              //   for(let i = 0;i<this.buttonData.length; i++ ){
              //     if(item.tab_name != this.buttData[i].tab_name){
              //       this.buttData[i].tab_status = "unselected_tab";
              //     }
              //     else{
              //       this.buttData[i].tab_status = "selected_tab";
              //     }
              //   }
              // }


              for (var i = 0; i < this.buttData.length; i++) {
                if (item.tab_name != this.buttData[i].tab_name) {
                  this.buttData[i].tab_status = "unselected_tab";
                } else {
                  this.buttData[i].tab_status = "selected_tab";
                }
              }

              console.log("this.buttData :", this.buttData);
            } else {
              if (item.show_no_data == "1") {
                this.showImg = item.no_data_image;
              } else {// this.showImg = item.no_data_image;
              }
            }
          }
        }, {
          key: "view",
          value: function view(id) {
            console.log("id36", id); // this.sendData.listType = id;

            if (this.pageTitle == "Pending List") {
              this.sendData.registrationType = {
                request_page: 'pending_customer'
              };
            } else if (this.pageTitle == "Approved List") {
              if (this.id_item == "active") {
                this.sendData.registrationType = {
                  request_page: 'active_customer'
                };
              } else {
                this.sendData.registrationType = {
                  request_page: 'block_customer'
                };
              }
            } else {
              this.sendData.registrationType = {
                request_page: 'rejected_customer'
              };
            }

            this.sendData.alldata = id.customer_id;
            this.route.navigate(['./registration']);
          }
        }]);

        return CustomerRegPage;
      }();

      _CustomerRegPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }];
      };

      _CustomerRegPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer-reg',
        template: _raw_loader_customer_reg_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_customer_reg_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CustomerRegPage);
      /***/
    },

    /***/
    80184: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h5 {\n  color: #B01D22;\n  font-size: 20px;\n}\n\n.act {\n  text-transform: none;\n  text-transform: initial;\n  --border-radius: 20px;\n  --background: #B01D22;\n  width: 100%;\n  font-size: 14px;\n}\n\n.act1 {\n  text-transform: capitalize;\n  --border-radius: 20px !important;\n  --background: transparent !important;\n  color: #B01D22 !important;\n  border: 1px solid #B01D22;\n  width: 100%;\n  border-radius: 20px;\n  font-size: 12px;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\n.userImageUpload {\n  border-radius: 50%;\n  border: 2px dotted #b01d22;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile_image {\n  width: 60px;\n  height: 60px;\n}\n\n.name {\n  font-size: 15px;\n  font-weight: bold;\n  color: black;\n}\n\n.contactDiv {\n  font-size: 13px;\n  color: black;\n}\n\n.phone {\n  font-size: 12px;\n  color: black;\n}\n\n.view {\n  --background: transparent;\n  color: #b01d22;\n  text-transform: capitalize;\n  width: 100%;\n  --border-radius: 20px;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXJlZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxjQUFBO0VBQWUsZUFBQTtBQUdsQjs7QUFGQTtFQUFNLG9CQUFBO0VBQUEsdUJBQUE7RUFBeUIscUJBQUE7RUFBdUIscUJBQUE7RUFBd0IsV0FBQTtFQUFZLGVBQUE7QUFVMUY7O0FBVEE7RUFBTSwwQkFBQTtFQUEyQixnQ0FBQTtFQUFpQyxvQ0FBQTtFQUU5RCx5QkFBQTtFQUEwQix5QkFBQTtFQUEyQixXQUFBO0VBQVcsbUJBQUE7RUFBbUIsZUFBQTtBQWtCdkY7O0FBakJBO0VBQUksc0JBQUE7RUFBdUIseUJBQUE7RUFBMEIsNkJBQUE7QUF1QnJEOztBQXRCQTtFQUFpQixrQkFBQTtFQUFtQiwwQkFBQTtFQUEyQixvQkFBQTtLQUFBLGlCQUFBO0FBNEIvRDs7QUEzQkE7RUFBZSxXQUFBO0VBQVksWUFBQTtBQWdDM0I7O0FBL0JBO0VBQU0sZUFBQTtFQUFnQixpQkFBQTtFQUFtQixZQUFBO0FBcUN6Qzs7QUFwQ0E7RUFBWSxlQUFBO0VBQWlCLFlBQUE7QUF5QzdCOztBQXhDQTtFQUFPLGVBQUE7RUFBaUIsWUFBQTtBQTZDeEI7O0FBNUNBO0VBQU0seUJBQUE7RUFBMEIsY0FBQTtFQUFlLDBCQUFBO0VBQTJCLFdBQUE7RUFBVyxxQkFBQTtBQW9EckY7O0FBbkRBO0VBQWUsNEJBQUE7RUFBNkIsc0JBQUE7RUFBdUIsWUFBQTtFQUFhLDJCQUFBO0FBMERoRiIsImZpbGUiOiJjdXN0b21lci1yZWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDV7Y29sb3I6ICNCMDFEMjI7Zm9udC1zaXplOiAyMHB4O31cbi5hY3R7IHRleHQtdHJhbnNmb3JtOiBpbml0aWFsOyAtLWJvcmRlci1yYWRpdXM6IDIwcHg7IC0tYmFja2dyb3VuZDogICNCMDFEMjI7IHdpZHRoOjEwMCU7IGZvbnQtc2l6ZToxNHB4O31cbi5hY3Qxe3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOy0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50Oy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLy8gIC0tYm9yZGVyLWNvbG9yOiAjQjAxRDIyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNCMDFEMjIgIWltcG9ydGFudDtib3JkZXI6IDFweCBzb2xpZCAjQjAxRDIyOyB3aWR0aDoxMDAlO2JvcmRlci1yYWRpdXM6MjBweDtmb250LXNpemU6MTJweDt9XG5ociB7d2lkdGg6IDEwMCUgIWltcG9ydGFudDtmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O2JvcmRlcjogMC41cHggc29saWQgZ2FpbnNib3JvO31cbi51c2VySW1hZ2VVcGxvYWR7Ym9yZGVyLXJhZGl1czogNTAlO2JvcmRlcjogMnB4IGRvdHRlZCAjYjAxZDIyO29iamVjdC1maXQ6IGNvdmVyO31cbi5wcm9maWxlX2ltYWdle3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDt9XG4ubmFtZXtmb250LXNpemU6IDE1cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOmJsYWNrO31cbi5jb250YWN0RGl2e2ZvbnQtc2l6ZTogMTNweDsgY29sb3I6YmxhY2s7fVxuLnBob25le2ZvbnQtc2l6ZTogMTJweDsgY29sb3I6YmxhY2s7fVxuLnZpZXd7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtjb2xvcjogI2IwMWQyMjt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTt3aWR0aDoxMDAlOy0tYm9yZGVyLXJhZGl1czogMjBweDt9XG4uYmdXYWxsZXRJbWFnZXtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7cGFkZGluZzogNXB4O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9XG4vLyBpb24tYmFjay1idXR0b24ge1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH0iXX0= */";
      /***/
    },

    /***/
    67664: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n     <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf = \"pageTitle\">{{pageTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n      </div>\n       <ion-row >\n         <ion-col size=\"4\" *ngFor=\"let item of buttData\">\n           <ion-button *ngIf=\"item?.tab_status == 'selected_tab'\" class =\"act\" (click) = \"changedTab(item)\">{{item?.tab_name}}</ion-button>\n           <ion-button *ngIf=\"item?.tab_status != 'selected_tab'\" class =\"act1 butt\" (click) = \"changedTab(item)\">{{item?.tab_name}}</ion-button>\n         </ion-col>\n         <hr>\n       </ion-row>\n        <div *ngIf =\"showImg && pageTitle != 'Approved List'\">\n          \n          <!-- <div *ngIf =\"showImg && pageTitle == 'Pending List'\"> -->\n          <img [src] = \"showImg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n        </div>\n      <div *ngIf =\"!showImg && pageTitle == 'Pending List'\">\n        <ion-row *ngFor = \"let id of custmReg\">\n          <ion-col size=\"3\">\n               <img *ngIf = \"!id?.user_image\" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n               <img *ngIf = \"id?.user_image\" class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"id?.user_image\"/>\n          </ion-col>\n          <ion-col size=\"6\" class=\"autoMargin\">\n            <p class=\"name ion-no-margin\">{{id?.full_name}}</p>\n            <p class=\"contactDiv ion-no-margin\">{{id?.contact}}</p>\n           \n            <p class=\"phone ion-no-margin\">{{id?.dealer_name}}</p>\n            <p class=\"phone ion-no-margin\">{{id?.dealer_code}}</p>\n            <p class=\"phone ion-no-margin\">{{id?.registration_sts}}</p>\n          </ion-col>\n          <ion-col class=\"but-div autoMargin\" size=\"3\">\n            <ion-button class=\"view butt\" (click)=\"view(id)\">{{id?.view_btn}}</ion-button>\n          </ion-col>\n          <hr>\n        </ion-row>\n        </div>\n        <div *ngIf =\"showImg && pageTitle == 'Approved List'\">\n          <ion-row >\n            <ion-col size=\"6\" *ngFor=\"let items of buttonData\">\n              <ion-button *ngIf=\"items?.tab_status == 'selected_tab'\" class =\"act\" (click) = \"changedTabs(items)\">{{items?.tab_name}}</ion-button>\n              <ion-button *ngIf=\"items?.tab_status == 'unselected_tab'\" class =\"act1 butt\" (click) = \"changedTabs(items)\">{{items?.tab_name}}</ion-button>\n            </ion-col>\n            <hr>\n          </ion-row>\n          <img [src] = \"showImg\" onerror=\"this.src='assets/watermark/watermark.png'\">\n        </div>\n         <div *ngIf =\"!showImg  && pageTitle == 'Approved List'\">\n         <ion-row >\n          <ion-col size=\"6\" *ngFor=\"let items of buttonData\">\n            <ion-button *ngIf=\"items?.tab_status == 'selected_tab'\" class =\"act\" (click) = \"changedTabs(items)\">{{items?.tab_name}}</ion-button>\n            <ion-button *ngIf=\"items?.tab_status == 'unselected_tab'\" class =\"act1 butt\" (click) = \"changedTabs(items)\">{{items?.tab_name}}</ion-button>\n          </ion-col>\n          <hr>\n        </ion-row>\n        \n        <ion-row *ngFor = \"let id of custmReg\">\n          <ion-col size=\"3\">\n              <img *ngIf = \"!id?.user_image\" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n              <img *ngIf = \"id?.user_image\" class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"id?.user_image\"/>\n          </ion-col>\n          <ion-col size=\"6\" class=\"autoMargin\">\n            <p class=\"name ion-no-margin\">{{id?.full_name}}</p>\n            <p class=\"contactDiv ion-no-margin\">{{id?.contact}}</p>\n            \n            <p class=\"phone ion-no-margin\">{{id?.dealer_name}}</p>\n            <p class=\"phone ion-no-margin\">{{id?.dealer_code}}</p>\n            <p class=\"phone ion-no-margin\">{{id?.registration_sts}}</p>\n          </ion-col>\n          <ion-col class=\"but-div autoMargin\" size=\"3\">\n            <ion-button class=\"view butt\" (click)=\"view(id)\">{{id?.view_btn}}</ion-button>\n          </ion-col>\n          <hr>\n        </ion-row>\n\n      </div>\n\n         <div *ngIf =\"!showImg && pageTitle == 'Rejected List'\">\n          <ion-row *ngFor = \"let id of custmReg\" >\n            <ion-col size=\"3\">\n                <img *ngIf = \"!id?.user_image\" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n                <img *ngIf = \"id?.user_image\" class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"id?.user_image\"/>\n            </ion-col>\n            <ion-col size=\"6\" class=\"autoMargin\">\n              <p class=\"name ion-no-margin\">{{id?.full_name}}</p>\n              <p class=\"contactDiv ion-no-margin\">{{id?.contact}}</p>\n             \n              <p class=\"phone ion-no-margin\">{{id?.dealer_name}}</p>\n              <p class=\"phone ion-no-margin\">{{id?.dealer_code}}</p>\n              <p class=\"phone ion-no-margin\">{{id?.registration_sts}}</p>\n            </ion-col>\n            <ion-col class=\"but-div autoMargin\" size=\"3\">\n              <ion-button class=\"view butt\" (click)=\"view(id)\">{{id?.view_btn}}</ion-button>\n            </ion-col>\n            <hr>\n          </ion-row>\n         </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_customerRegistrationModule_customer-reg_customer-reg_module_ts-es5.js.map