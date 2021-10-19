(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_customerRegistrationModule_assign-dealer_assign-dealer_module_ts"], {
    /***/
    18496: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignDealerPageRoutingModule": function AssignDealerPageRoutingModule() {
          return (
            /* binding */
            _AssignDealerPageRoutingModule
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


      var _assign_dealer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assign-dealer.page */
      43774);

      var routes = [{
        path: '',
        component: _assign_dealer_page__WEBPACK_IMPORTED_MODULE_0__.AssignDealerPage
      }];

      var _AssignDealerPageRoutingModule = function AssignDealerPageRoutingModule() {
        _classCallCheck(this, AssignDealerPageRoutingModule);
      };

      _AssignDealerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AssignDealerPageRoutingModule);
      /***/
    },

    /***/
    84866: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignDealerPageModule": function AssignDealerPageModule() {
          return (
            /* binding */
            _AssignDealerPageModule
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


      var _assign_dealer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assign-dealer-routing.module */
      18496);
      /* harmony import */


      var _assign_dealer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assign-dealer.page */
      43774);

      var _AssignDealerPageModule = function AssignDealerPageModule() {
        _classCallCheck(this, AssignDealerPageModule);
      };

      _AssignDealerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _assign_dealer_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssignDealerPageRoutingModule],
        declarations: [_assign_dealer_page__WEBPACK_IMPORTED_MODULE_1__.AssignDealerPage]
      })], _AssignDealerPageModule);
      /***/
    },

    /***/
    43774: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignDealerPage": function AssignDealerPage() {
          return (
            /* binding */
            _AssignDealerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_assign_dealer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./assign-dealer.page.html */
      17611);
      /* harmony import */


      var _assign_dealer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assign-dealer.page.scss */
      13440);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AssignDealerPage = /*#__PURE__*/function () {
        function AssignDealerPage(platform) {
          _classCallCheck(this, AssignDealerPage);

          this.platform = platform;
          this.data = [];
          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          });
        }

        _createClass(AssignDealerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data = [{
              'name': "Rahul",
              "mobile": "878936872",
              "code": "GNE01",
              "Location": "SECTOR 49, Gurugram, Haryana"
            }];
          }
        }]);

        return AssignDealerPage;
      }();

      _AssignDealerPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform
        }];
      };

      _AssignDealerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-assign-dealer',
        template: _raw_loader_assign_dealer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_assign_dealer_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AssignDealerPage);
      /***/
    },

    /***/
    13440: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h5 {\n  color: #B01D22;\n  font-size: 20px;\n}\n\n.seg {\n  padding: 15px;\n}\n\n.asign {\n  padding-left: 31px;\n}\n\n.assign_card {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n  width: 95%;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #c2bfbf47;\n}\n\n.ass_butt {\n  --background: #B01D22;\n  --border-radius: 14px;\n  width: 113px;\n  text-transform: capitalize;\n  height: 30px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbi1kZWFsZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUlKOztBQUZBO0VBRUkscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUoiLCJmaWxlIjoiYXNzaWduLWRlYWxlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcbiAgICBjb2xvcjogI0IwMUQyMjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uc2Vne1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uYXNpZ257XG4gICAgcGFkZGluZy1sZWZ0OiAzMXB4O1xufVxuLmFzc2lnbl9jYXJke1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCAjZWZlYWVhO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYmZiZjQ3O1xufVxuLmFzc19idXR0e1xuICAgIC8vIGNvbG9yOiAjZjVmNmY5O1xuICAgIC0tYmFja2dyb3VuZDogICNCMDFEMjI7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIHdpZHRoOiAxMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9Il19 */";
      /***/
    },

    /***/
    17611: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content [ngClass]=\"{'content-bg':  platform.width()>740}\">\n  <ion-row class=\"ion-justify-content-center abc\">\n    <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"12\" [ngClass]=\"{'boundary1':  platform.width()>740}\">\n      <div class=\"seg\">\n        <ion-row>\n          <ion-col>\n            <h5>Assign Dealer</h5>\n          </ion-col>\n        </ion-row>\n        <div class=\"asign\">\n          <div class=\"assign_card\" *ngFor=\"let item of data\">\n           <ion-row>\n             <ion-col>\n              {{item?.name}}<br>{{item?.mobile}}<br>{{item?.code}}\n             </ion-col>\n             <ion-col size=\"4\">\n               <ion-icon name=\"location\"></ion-icon>\n               {{item?.Location}}\n             </ion-col>\n           </ion-row>\n          </div>\n          <ion-row class=\"seg\">\n            <ion-col class=\"colom\">\n              <ion-button class=\"ass_butt\">Assign</ion-button>\n            </ion-col>\n          </ion-row>\n          \n        </div>\n        </div>\n      </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_customerRegistrationModule_assign-dealer_assign-dealer_module_ts-es5.js.map