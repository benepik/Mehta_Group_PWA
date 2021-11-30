(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_model-camera_model-camera_module_ts"],{

/***/ 42633:
/*!********************************************************************************!*\
  !*** ./src/app/RegistrationModule/model-camera/model-camera-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelCameraPageRoutingModule": function() { return /* binding */ ModelCameraPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _model_camera_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-camera.page */ 39182);




const routes = [
    {
        path: '',
        component: _model_camera_page__WEBPACK_IMPORTED_MODULE_0__.ModelCameraPage
    }
];
let ModelCameraPageRoutingModule = class ModelCameraPageRoutingModule {
};
ModelCameraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModelCameraPageRoutingModule);



/***/ }),

/***/ 67233:
/*!************************************************************************!*\
  !*** ./src/app/RegistrationModule/model-camera/model-camera.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelCameraPageModule": function() { return /* binding */ ModelCameraPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _model_camera_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-camera-routing.module */ 42633);
/* harmony import */ var _model_camera_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-camera.page */ 39182);







let ModelCameraPageModule = class ModelCameraPageModule {
};
ModelCameraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _model_camera_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModelCameraPageRoutingModule
        ],
        declarations: [_model_camera_page__WEBPACK_IMPORTED_MODULE_1__.ModelCameraPage]
    })
], ModelCameraPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_RegistrationModule_model-camera_model-camera_module_ts-es2015.js.map