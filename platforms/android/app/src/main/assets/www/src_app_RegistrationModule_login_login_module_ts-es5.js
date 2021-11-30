(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_login_login_module_ts"], {
    /***/
    34936: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      68731);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    11933: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      34936);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      68731);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    68731: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      82094);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      84907);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      18345);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(platform, route, sendData, zone, apiService, localStorage, loc) {
          _classCallCheck(this, LoginPage);

          this.platform = platform;
          this.route = route;
          this.sendData = sendData;
          this.zone = zone;
          this.apiService = apiService;
          this.localStorage = localStorage;
          this.loc = loc;
          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          }); //   this.loc.onPopState(() => {
          //     history.pushState(null, null, window.location.pathname);
          // })
        }

        _createClass(LoginPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register(Type) {
            var _this = this;

            console.log('type', Type);
            this.zone.run(function () {
              _this.sendData.loginKey = {
                "type": Type,
                "requestPage": 'user'
              };

              _this.localStorage.setStorage('type', Type);

              _this.route.navigate(['/mobile']);
            });
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__.DataTransferService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.PlatformLocation
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    84907: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".col {\n  text-align: end;\n}\n\n.butto {\n  width: 100%;\n  --background:#B01D22;\n  text-transform: capitalize;\n}\n\n.butt_col {\n  padding: 60px;\n}\n\nhr {\n  width: 100px !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\n.pad1 {\n  padding: 0;\n}\n\n.pad {\n  padding: 0;\n  font-size: 20px;\n}\n\n.small {\n  width: 120px;\n  text-align: right;\n  margin-top: -10px;\n}\n\n.small_p {\n  width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFJRjs7QUFGQTtFQUNDLFVBQUE7QUFLRDs7QUFIQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBTUE7O0FBSkE7RUFBTyxZQUFBO0VBQWUsaUJBQUE7RUFBbUIsaUJBQUE7QUFVekM7O0FBVEE7RUFBUyxZQUFBO0FBYVQiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmJ1dHRve1xuICB3aWR0aDoxMDAlO1xuICAtLWJhY2tncm91bmQ6I0IwMUQyMjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uYnV0dF9jb2x7XG4gIHBhZGRpbmc6IDYwcHg7XG59XG5ociB7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGdhaW5zYm9ybztcbn1cbi5wYWQxe1xuIHBhZGRpbmc6IDA7XG59XG4ucGFke1xucGFkZGluZzogMDtcbmZvbnQtc2l6ZToyMHB4O1xufVxuLnNtYWxse3dpZHRoOiAxMjBweDsgIHRleHQtYWxpZ246IHJpZ2h0OyBtYXJnaW4tdG9wOi0xMHB4O31cbi5zbWFsbF9we3dpZHRoOiAxMjVweDt9XG4vLyAgIC5iYW5uZXJfYmcge1xuLy8gICAgIC8vIHRvcDogMDtcbiAgXG4vLyAgICAgbWFyZ2luLXRvcDogLTY2cHg7XG4vLyAgICAgIGxlZnQ6IDA7XG4vLyAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICB9Il19 */";
      /***/
    },

    /***/
    82094: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"5\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary':  platform.width()>740}\">\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <img src = \"assets/icon/logo.svg\" class=\"small_p\">\n        </ion-col>\n        <ion-col class=\"col\">\n          <img src = \"assets/icon/Hathi & Siddhi.svg\" class=\"small\">\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"butt_col\">\n           <ion-button class=\"butto\" tappable (click)=\"register('login')\">Login</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"pad1\" size=\"5\">\n          <div >\n            <hr>\n          </div>\n        </ion-col>\n        <ion-col class=\"pad colom\" size=\"2\">\n          Or\n        </ion-col>\n        <ion-col class=\"pad1\" size=\"5\">\n          <div >\n            <hr>\n          </div>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"butt_col\">\n           <ion-button class=\"butto\" tappable (click)=\"register('newRegister')\">Click here to join us</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div [ngClass]=\"{'banner': platform.width()<740}\">\n          <img src = \"assets/icon/Design 1.png\" class=\"banner_bg\">\n          </div>\n      </ion-col>\n      </ion-row>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_RegistrationModule_login_login_module_ts-es5.js.map