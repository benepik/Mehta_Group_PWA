(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_quickModule_polls_polls_module_ts"], {
    /***/
    11175: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PollsPageRoutingModule": function PollsPageRoutingModule() {
          return (
            /* binding */
            _PollsPageRoutingModule
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


      var _polls_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polls.page */
      83890);

      var routes = [{
        path: '',
        component: _polls_page__WEBPACK_IMPORTED_MODULE_0__.PollsPage
      }];

      var _PollsPageRoutingModule = function PollsPageRoutingModule() {
        _classCallCheck(this, PollsPageRoutingModule);
      };

      _PollsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PollsPageRoutingModule);
      /***/
    },

    /***/
    889: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PollsPageModule": function PollsPageModule() {
          return (
            /* binding */
            _PollsPageModule
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


      var _polls_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polls-routing.module */
      11175);
      /* harmony import */


      var _polls_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./polls.page */
      83890);

      var _PollsPageModule = function PollsPageModule() {
        _classCallCheck(this, PollsPageModule);
      };

      _PollsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _polls_routing_module__WEBPACK_IMPORTED_MODULE_0__.PollsPageRoutingModule],
        declarations: [_polls_page__WEBPACK_IMPORTED_MODULE_1__.PollsPage]
      })], _PollsPageModule);
      /***/
    },

    /***/
    83890: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PollsPage": function PollsPage() {
          return (
            /* binding */
            _PollsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_polls_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./polls.page.html */
      82630);
      /* harmony import */


      var _polls_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./polls.page.scss */
      42647);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PollsPage = /*#__PURE__*/function () {
        function PollsPage() {
          _classCallCheck(this, PollsPage);
        }

        _createClass(PollsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PollsPage;
      }();

      _PollsPage.ctorParameters = function () {
        return [];
      };

      _PollsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-polls',
        template: _raw_loader_polls_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_polls_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PollsPage);
      /***/
    },

    /***/
    42647: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".quest_div {\n  box-shadow: 0px 0px 10px 1px #d1cfcf;\n  border-radius: 10px;\n}\n\n.padd10 {\n  padding: 10px;\n}\n\n.quick {\n  padding: 10px;\n  width: 100%;\n}\n\n.poll_para {\n  color: gray;\n  font-size: 12px;\n}\n\n.para_rag {\n  color: var(--headerColor);\n}\n\n.ionic_butt {\n  --background:var(--headerColor);\n  --border-radius:16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUFRLGFBQUE7QUFHUjs7QUFGQTtFQUFPLGFBQUE7RUFBYyxXQUFBO0FBT3JCOztBQU5BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUFVLHlCQUFBO0FBV1Y7O0FBVkE7RUFBWSwrQkFBQTtFQUNSLG9CQUFBO0FBY0oiLCJmaWxlIjoicG9sbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0X2RpdntcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNkMWNmY2Y7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wYWRkMTB7cGFkZGluZzogMTBweDt9XG4ucXVpY2t7cGFkZGluZzogMTBweDt3aWR0aDogMTAwJTt9XG4ucG9sbF9wYXJhe1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYXJhX3JhZ3tjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO31cbi5pb25pY19idXR0ey0tYmFja2dyb3VuZDp2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgLS1ib3JkZXItcmFkaXVzOjE2cHg7fVxuIl19 */";
      /***/
    },

    /***/
    82630: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>polls</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol\">\n     <!-- // <div class=\"padd10 whiteCol borderRediDiv\"> -->\n      <ion-row class=\"quick borderBtmDiv widthtotalDiv\">\n        <ion-col class=\"quest_div\" [size]=\"12\" sizexs=\"12\" size-md=\"10\" size-lg=\"10\" push-md=\"1\" push-lg=\"1\">\n          <ion-row>\n            <ion-col>\n              <p class=\"para_rag\">What do You think of new app ?</p>\n            </ion-col>\n          </ion-row>\n          <ion-row >\n            <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"6\" size-lg=\"12\">\n              <p class=\"ion-no-margin ion-text-center borderRediDiv borderDiv padd10\">Excellent</p>\n            </ion-col>\n            <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"6\" size-lg=\"12\">\n              <p class=\"ion-no-margin ion-text-center borderRediDiv borderDiv padd10\">Very Good</p>\n            </ion-col>\n            </ion-row>\n          <ion-row>\n            <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"6\" size-lg=\"12\">\n              <p class=\"ion-no-margin ion-text-center borderRediDiv borderDiv padd10\">Good</p>\n            </ion-col>\n            <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"6\" size-lg=\"12\">\n              <p class=\"ion-no-margin ion-text-center borderRediDiv borderDiv padd10\">Average</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n           <p class=\"poll_para\">25 Votes . 4 hours ago</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-button class=\"ionic_butt\">Submit</ion-button>\n            </ion-col>\n          </ion-row>\n         </ion-col>\n        </ion-row>\n     \n      </ion-col>\n      </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_quickModule_polls_polls_module_ts-es5.js.map