(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_language_language_module_ts"], {
    /***/
    1952: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguagePageRoutingModule": function LanguagePageRoutingModule() {
          return (
            /* binding */
            _LanguagePageRoutingModule
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


      var _language_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./language.page */
      48668);

      var routes = [{
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_0__.LanguagePage
      }];

      var _LanguagePageRoutingModule = function LanguagePageRoutingModule() {
        _classCallCheck(this, LanguagePageRoutingModule);
      };

      _LanguagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LanguagePageRoutingModule);
      /***/
    },

    /***/
    83224: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguagePageModule": function LanguagePageModule() {
          return (
            /* binding */
            _LanguagePageModule
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


      var _language_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./language-routing.module */
      1952);
      /* harmony import */


      var _language_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./language.page */
      48668);

      var _LanguagePageModule = function LanguagePageModule() {
        _classCallCheck(this, LanguagePageModule);
      };

      _LanguagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _language_routing_module__WEBPACK_IMPORTED_MODULE_0__.LanguagePageRoutingModule],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_1__.LanguagePage]
      })], _LanguagePageModule);
      /***/
    },

    /***/
    48668: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguagePage": function LanguagePage() {
          return (
            /* binding */
            _LanguagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./language.page.html */
      63967);
      /* harmony import */


      var _language_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./language.page.scss */
      68053);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LanguagePage = /*#__PURE__*/function () {
        function LanguagePage(route, platform) {
          _classCallCheck(this, LanguagePage);

          this.route = route;
          this.platform = platform;
          this.isClick = false;
          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          });
        }

        _createClass(LanguagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isClicked",
          value: function isClicked() {
            return this.isClick;
          }
        }, {
          key: "mobile",
          value: function mobile() {
            this.isClick = !this.isClick;
            this.route.navigate(['./login']);
          }
        }]);

        return LanguagePage;
      }();

      _LanguagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
        }];
      };

      _LanguagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-language',
        template: _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LanguagePage);
      /***/
    },

    /***/
    68053: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-page {\n  --background:#7faac0;\n}\n\n.logo {\n  left: 40px;\n  right: 40px;\n  top: 40px;\n  bottom: 40px;\n}\n\n.centered {\n  padding: 31px;\n  box-shadow: 1px 1px 1px 2px #efeaea;\n  border-radius: 5px;\n  height: 80px;\n}\n\n.effect {\n  margin-top: 11px;\n}\n\n.effect :hover {\n  --background: #B01D22;\n  background-color: #B01D22;\n  color: white;\n}\n\n.effect :focus {\n  background-color: #B01D22;\n  color: white;\n}\n\n.col {\n  text-align: end;\n}\n\n.banner_bg {\n  margin-top: -66px;\n  left: 0;\n  width: 100%;\n  display: block;\n  border-radius: 10px;\n}\n\n.butt1 {\n  text-align: center;\n}\n\n.ionic_btn {\n  --background: #c9888a;\n  --border-radius: 14px;\n  width: 113px;\n  text-transform: capitalize;\n  height: 30px;\n  font-size: 14px;\n}\n\nh5 {\n  font-size: 15px;\n  font-weight: bold;\n  font-family: monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0FBQUo7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSEk7RUFHTyxpQkFBQTtFQUNDLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSVo7O0FBRkE7RUFDQSxrQkFBQTtBQUtBOztBQUZBO0VBRUkscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUlKIiwiZmlsZSI6Imxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tcGFnZSB7XG4gICBcbiAgICAtLWJhY2tncm91bmQ6IzdmYWFjMDtcbn1cbi5sb2dve1xuICAgIGxlZnQ6IDQwcHg7XG4gICAgcmlnaHQ6IDQwcHg7XG4gICAgdG9wOiA0MHB4O1xuICAgIGJvdHRvbTogNDBweDtcbn1cbi5jZW50ZXJlZHtcbiAgICBwYWRkaW5nOiAzMXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCAjZWZlYWVhO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIGhlaWdodDogODBweDtcbn1cbi5lZmZlY3R7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbn1cbi5lZmZlY3QgOmhvdmVye1xuICAgIC0tYmFja2dyb3VuZDogI0IwMUQyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNCMDFEMjI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmVmZmVjdCA6Zm9jdXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQjAxRDIyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb2x7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4gICAgLmJhbm5lcl9iZyB7XG4gICAgICAgICAgIC8vIHRvcDogMDtcbiAgICAgICAgICAgXG4gICAgICAgICAgIG1hcmdpbi10b3A6IC02NnB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4uYnV0dDF7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG4vL21hcmdpbi10b3A6IDkwcHg7XG59XG4uaW9uaWNfYnRue1xuICAgIC8vIGNvbG9yOiAjZjVmNmY5O1xuICAgIC0tYmFja2dyb3VuZDogICNjOTg4OGE7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIHdpZHRoOiAxMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5oNSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG4vLyAuYWJje1xuLy8gICAgIHBhZGRpbmc6IDBweDtcbi8vIH1cbiJdfQ== */";
      /***/
    },

    /***/
    63967: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content [ngClass]=\"{'content-bg':  platform.width()>740}\">\n \n  <ion-row class=\"ion-justify-content-center abc\">\n    <ion-col size-xl=\"4\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary':  platform.width()>740}\" >\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <img src = \"assets/icon/logo.svg\" style = \"width: 100px;\">\n        </ion-col>\n        <ion-col class=\"col\">\n          <img src = \"assets/icon/abc.png\" style = \"width: 100px; height: 50px; text-align: right;\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br><br>\n  <div >\n    <ion-row>\n      <ion-col>\n        <h5>Select Language</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xl=\"4\" size-md=\"6\" size-xs=\"12\" class=\"ion-align-self-start effect\" >\n        <div class=\"centered ion-text-center\" >\n          <label><span>English</span></label>\n        </div>\n      </ion-col>\n      \n      <ion-col size-xl=\"4\" size-md=\"6\" size-xs=\"12\" class=\"ion-align-self-center effect\" >\n        <div class=\"centered ion-text-center\">\n          <label><span>हिन्दी</span></label>\n        </div>\n      </ion-col>\n      <ion-col size-xl=\"4\" size-md=\"6\" size-xs=\"12\" class=\"ion-align-self-end effect\">\n        <div class=\"centered ion-text-center\">\n          <label><span>ગુજરાતી</span></label>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n\n  <br><br>\n  <br>\n  <div class = \"butt1\" [ngClass]=\"{'banner':  platform.width()<740}\">\n    <ion-button (click) =\"mobile()\" class=\"ionic_btn effect\" >Save</ion-button>\n \n \n    <img src = \"assets/icon/Design 1.png\"  class=\"banner_bg\">\n    </div>\n  </ion-col>\n  </ion-row>\n \n</ion-content>\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_RegistrationModule_language_language_module_ts-es5.js.map