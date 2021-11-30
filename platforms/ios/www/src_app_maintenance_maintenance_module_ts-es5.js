(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_maintenance_maintenance_module_ts"], {
    /***/
    52200: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaintenancePageRoutingModule": function MaintenancePageRoutingModule() {
          return (
            /* binding */
            _MaintenancePageRoutingModule
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


      var _maintenance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maintenance.page */
      66865);

      var routes = [{
        path: '',
        component: _maintenance_page__WEBPACK_IMPORTED_MODULE_0__.MaintenancePage
      }];

      var _MaintenancePageRoutingModule = function MaintenancePageRoutingModule() {
        _classCallCheck(this, MaintenancePageRoutingModule);
      };

      _MaintenancePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MaintenancePageRoutingModule);
      /***/
    },

    /***/
    84099: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaintenancePageModule": function MaintenancePageModule() {
          return (
            /* binding */
            _MaintenancePageModule
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


      var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maintenance-routing.module */
      52200);
      /* harmony import */


      var _maintenance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./maintenance.page */
      66865);

      var _MaintenancePageModule = function MaintenancePageModule() {
        _classCallCheck(this, MaintenancePageModule);
      };

      _MaintenancePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenancePageRoutingModule],
        declarations: [_maintenance_page__WEBPACK_IMPORTED_MODULE_1__.MaintenancePage]
      })], _MaintenancePageModule);
      /***/
    },

    /***/
    66865: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaintenancePage": function MaintenancePage() {
          return (
            /* binding */
            _MaintenancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_maintenance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./maintenance.page.html */
      22346);
      /* harmony import */


      var _maintenance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./maintenance.page.scss */
      14769);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      51532);

      var _MaintenancePage = /*#__PURE__*/function () {
        function MaintenancePage(sendData, platform) {
          _classCallCheck(this, MaintenancePage);

          this.sendData = sendData;
          this.platform = platform;
        }

        _createClass(MaintenancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.alldata = this.sendData.myParam;
            console.log("maintenace data comming form home forceUpdateApi== ", this.alldata);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // this.menu.swipeEnable(true);
            this.unregisterBackButtonAction && this.unregisterBackButtonAction();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // this.menu.swipeEnable(false);
            // this.initializeBackButtonCustomHandler();
            console.log("[1] will enter fired");
          }
        }]);

        return MaintenancePage;
      }();

      _MaintenancePage.ctorParameters = function () {
        return [{
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__.DataTransferService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
        }];
      };

      _MaintenancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-maintenance',
        template: _raw_loader_maintenance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_maintenance_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MaintenancePage);
      /***/
    },

    /***/
    14769: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".maintenanceholder {\n  text-align: center;\n  margin-top: 8%;\n}\n.maintenanceholder .imgicon {\n  height: 50px;\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.maintenanceholder .redText {\n  color: white;\n  font-weight: bold;\n}\n.maintenanceholder .yellowText {\n  color: white;\n  font-weight: 600;\n}\n.maintenanceholder .blackText {\n  color: var(--blackTextColor);\n  font-weight: 600;\n}\n.maintenanceImg {\n  width: 100%;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQixrQkFBQTtFQUFrQixjQUFBO0FBR3JDO0FBRkk7RUFBUyxZQUFBO0VBQVksV0FBQTtFQUFXLHNCQUFBO0tBQUEsbUJBQUE7QUFPcEM7QUFOSTtFQUFTLFlBQUE7RUFBWSxpQkFBQTtBQVV6QjtBQVRJO0VBQVksWUFBQTtFQUFZLGdCQUFBO0FBYTVCO0FBWkk7RUFBVyw0QkFBQTtFQUE0QixnQkFBQTtBQWdCM0M7QUFkQTtFQUVJLFdBQUE7RUFBVyxZQUFBO0FBaUJmIiwiZmlsZSI6Im1haW50ZW5hbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWludGVuYW5jZWhvbGRlcnt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOjglO1xuICAgIC5pbWdpY29ue2hlaWdodDo1MHB4O3dpZHRoOjUwcHg7b2JqZWN0LWZpdDpjb250YWluO31cbiAgICAucmVkVGV4dHtjb2xvcjp3aGl0ZTtmb250LXdlaWdodDpib2xkO31cbiAgICAueWVsbG93VGV4dHtjb2xvcjp3aGl0ZTtmb250LXdlaWdodDo2MDA7fVxuICAgIC5ibGFja1RleHR7Y29sb3I6dmFyKC0tYmxhY2tUZXh0Q29sb3IpO2ZvbnQtd2VpZ2h0OjYwMDt9XG59XG4ubWFpbnRlbmFuY2VJbWd7XG4gICAgLy8gcG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjBweDtyaWdodDowcHg7XG4gICAgd2lkdGg6MTAwJTtwYWRkaW5nOjZweDt9Il19 */";
      /***/
    },

    /***/
    22346: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- alldata?.bgColor -->\n<!-- [style.--background]=\"'var(--headerLightColor)'\" -->\n<ion-content >\n\n  <div *ngIf=\"alldata\">\n    <ion-row >\n      <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\"  [ngClass]=\"{whiteCol: platform?.is('desktop')}\">\n    <div class=\"maintenanceholder\">\n      <img src=\"{{alldata?.icon_img}}\"class=\"imgicon\"/>\n      <h2 class=\"redText\">{{alldata?.title}}</h2>\n      <br>\n      <h4 class=\"yellowText\" [innerHTML]=\"alldata?.sub_title\"></h4> \n      <br>\n      <h5 class=\"blackText\">{{alldata?.maintainence_message}}</h5>\n    </div>\n    <img src=\"{{alldata?.img}}\"class=\"maintenanceImg\"/>\n    </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_maintenance_maintenance_module_ts-es5.js.map