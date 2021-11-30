(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_communicationModule_communication-detail_communication-detail_module_ts"], {
    /***/
    76215: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunicationDetailPageRoutingModule": function CommunicationDetailPageRoutingModule() {
          return (
            /* binding */
            _CommunicationDetailPageRoutingModule
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


      var _communication_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./communication-detail.page */
      38127);

      var routes = [{
        path: '',
        component: _communication_detail_page__WEBPACK_IMPORTED_MODULE_0__.CommunicationDetailPage
      }];

      var _CommunicationDetailPageRoutingModule = function CommunicationDetailPageRoutingModule() {
        _classCallCheck(this, CommunicationDetailPageRoutingModule);
      };

      _CommunicationDetailPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CommunicationDetailPageRoutingModule);
      /***/
    },

    /***/
    26297: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunicationDetailPageModule": function CommunicationDetailPageModule() {
          return (
            /* binding */
            _CommunicationDetailPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _communication_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./communication-detail-routing.module */
      76215);
      /* harmony import */


      var _communication_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./communication-detail.page */
      38127);
      /* harmony import */


      var pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! pipes/pipes.module */
      43018);

      var _CommunicationDetailPageModule = function CommunicationDetailPageModule() {
        _classCallCheck(this, CommunicationDetailPageModule);
      };

      _CommunicationDetailPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _communication_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommunicationDetailPageRoutingModule, pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule],
        declarations: [_communication_detail_page__WEBPACK_IMPORTED_MODULE_1__.CommunicationDetailPage]
      })], _CommunicationDetailPageModule);
      /***/
    },

    /***/
    38127: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunicationDetailPage": function CommunicationDetailPage() {
          return (
            /* binding */
            _CommunicationDetailPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_communication_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./communication-detail.page.html */
      86919);
      /* harmony import */


      var _communication_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./communication-detail.page.scss */
      1909);
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


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      18345);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/constant */
      56544);

      var _CommunicationDetailPage = /*#__PURE__*/function () {
        function CommunicationDetailPage(activeRoute, router, zone, apiService, sendData, localStorgae) {
          var _this = this;

          _classCallCheck(this, CommunicationDetailPage);

          this.activeRoute = activeRoute;
          this.router = router;
          this.zone = zone;
          this.apiService = apiService;
          this.sendData = sendData;
          this.localStorgae = localStorgae;
          this.comment = '';
          this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            spaceBetween: 10
          };
          this.communicationHomeData = this.sendData.alldata;
          this.localStorgae.getStorage().then(function (storedData) {
            _this.loginAllData = storedData.allStoreData;
            console.log('storedData', storedData);
          });
        }

        _createClass(CommunicationDetailPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.communicationDetails();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// this.communicationDetails();
          }
        }, {
          key: "doLike",
          value: function doLike(data) {
            var _this2 = this;

            this.zone.run(function () {
              if (data.like_status == 0) {
                data.total_likes = parseInt(data.total_likes) + 1;
                data.like_status = 1;
              } else {
                data.total_likes = parseInt(data.total_likes) - 1;
                data.like_status = 0;
              }

              var apiKey = {
                "flag_type": _this2.communicationHomeData.flag_type,
                "post_id": _this2.communicationHomeData.post_id
              };

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.DoLike, apiKey).subscribe(function (result) {
                console.log("DoLike: ", result);

                if (result.success == 1) {// if (result.message == "Post unliked.") {
                  //   this.community.data.like_status=0;
                  //   if (this.community.data.total_likes != "0") {             
                  //     this.community.data.total_likes =parseInt(this.community.data.total_likes) - 1;          
                  //     console.log("DoLike1: ",  this.community.data.like_status);
                  //   }
                  //   else {
                  //     this.community.data.total_likes = 0;
                  //   }
                  // }else if(result.message == "Post liked."){
                  //   this.community.data.total_likes = parseInt(this.community.data.total_likes) + 1;
                  //   this.community.data.like_status=1;
                  //   console.log("DoLike: ",  this.community.data.like_status);
                  // }
                }
              });
            });
          }
        }, {
          key: "communicationDetails",
          value: function communicationDetails() {
            var _this3 = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {
                "flag_type": _this3.communicationHomeData.flag_type,
                "post_id": _this3.communicationHomeData.post_id
              };

              _this3.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.PostDetailUrl, apiKey).subscribe(function (result) {
                console.log("PostListUrl: ", result);

                _this3.apiService.presentLoadingClose();

                if (result.success == 1) {
                  _this3.community = result;
                  _this3.noComment = _this3.community.data.total_comments;
                }
              }, function (err) {
                _this3.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "doComment",
          value: function doComment(text) {
            var _this4 = this;

            this.zone.run(function () {
              var apiKey = {
                "flag_type": _this4.communicationHomeData.flag_type,
                "post_id": _this4.communicationHomeData.post_id,
                "comment": _this4.comment
              };
              var obj = {
                "full_name": _this4.loginAllData.full_name,
                "convert_time": "Just now",
                "comments": text,
                "comment_align": "right"
              };

              if (_this4.community.data.total_comments == 0) {
                _this4.noComment = 1;
              }

              _this4.community.data.comments.unshift(obj);

              _this4.community.data.total_comments = parseInt(_this4.community.data.total_comments) + 1;
              console.log('this community', _this4.community);

              if (apiKey["comment"] != "") {
                console.log(apiKey["comment"]);

                _this4.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.DoCommentUrl, apiKey).subscribe(function (result) {
                  console.log("DoCommentUrl: ", result);

                  if (result.success == 1) {
                    _this4.comment = "";
                  }
                });
              }
            });
          }
        }]);

        return CommunicationDetailPage;
      }();

      _CommunicationDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }];
      };

      _CommunicationDetailPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-communication-detail',
        template: _raw_loader_communication_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_communication_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CommunicationDetailPage);
      /***/
    },

    /***/
    1909: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".communicationImage {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.titleDiv {\n  font-size: 16px;\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\n.contentDiv {\n  font-size: 13px;\n  color: #4a4747;\n  line-height: 15px;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\ninput {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.sendIcon {\n  font-size: 35px;\n  background-color: var(--headerColor);\n  color: white;\n  border-radius: 15px;\n}\n\n.chat_container {\n  padding: 0 18px;\n  flex-wrap: wrap;\n  padding-top: 20px;\n}\n\n.chat_container .chat_box {\n  width: auto !important;\n  margin-bottom: 15px;\n  min-width: 70%;\n  align-items: flex-start;\n}\n\n.chat_container .chat_box .chat {\n  min-width: 90px;\n  border-radius: 7px;\n  max-width: 100%;\n  min-width: 191px;\n  padding: 11px 20px 11px 20px;\n}\n\n.chat_container .chat_box p {\n  margin: 0;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: var(--text-color-white);\n}\n\n.para-name {\n  color: var(--headerColor);\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 5px;\n  line-height: 4px;\n}\n\n.para-time {\n  font-size: 10px;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  color: #a4a2a2;\n  line-height: 4px;\n}\n\n.para-col {\n  box-shadow: 0px 0px 7px 2px #e4e0e0;\n  border-radius: 20px;\n  height: 100%;\n  padding: 5px;\n}\n\n.para_color {\n  background-color: #eaeaea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bmljYXRpb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFvQixXQUFBO0VBQVksYUFBQTtFQUFlLHNCQUFBO0tBQUEsbUJBQUE7QUFJL0M7O0FBSEE7RUFBVSxlQUFBO0VBQWdCLHlCQUFBO0VBQXlCLGlCQUFBO0FBU25EOztBQVJBO0VBQVksZUFBQTtFQUFpQixjQUFBO0VBQWUsaUJBQUE7QUFjNUM7O0FBYkE7RUFBSSxzQkFBQTtFQUF1Qix5QkFBQTtFQUEwQiw2QkFBQTtBQW1CckQ7O0FBbEJBO0VBQU8sV0FBQTtFQUFZLFlBQUE7RUFBYSxtQkFBQTtBQXdCaEM7O0FBdkJBO0VBQVUsZUFBQTtFQUFnQixvQ0FBQTtFQUFvQyxZQUFBO0VBQWEsbUJBQUE7QUE4QjNFOztBQTdCQTtFQUFrQixlQUFBO0VBQWlCLGVBQUE7RUFBaUIsaUJBQUE7QUFtQ3BEOztBQWxDRTtFQUFZLHNCQUFBO0VBQXdCLG1CQUFBO0VBQXFCLGNBQUE7RUFBZ0IsdUJBQUE7QUF3QzNFOztBQXZDTTtFQUFPLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQiw0QkFBQTtBQThDckY7O0FBN0NNO0VBQUcsU0FBQTtFQUFVLGlCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLDhCQUFBO0FBbURyRDs7QUFoREU7RUFBVyx5QkFBQTtFQUF5QixlQUFBO0VBQWUsa0JBQUE7RUFBbUIsZUFBQTtFQUFnQixnQkFBQTtBQXdEeEY7O0FBdkRFO0VBQVcsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixnQkFBQTtFQUFpQixjQUFBO0VBQWUsZ0JBQUE7QUErRGhGOztBQTdERTtFQUFVLG1DQUFBO0VBQW9DLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxZQUFBO0FBb0VqRjs7QUFuRUU7RUFBWSx5QkFBQTtBQXVFZCIsImZpbGUiOiJjb21tdW5pY2F0aW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbXVuaWNhdGlvbkltYWdle3dpZHRoOiAxMDAlO2hlaWdodDogMjUwcHg7IG9iamVjdC1maXQ6IGNvbnRhaW47fVxuLnRpdGxlRGl2e2ZvbnQtc2l6ZTogMTZweDtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxuLmNvbnRlbnREaXZ7Zm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzRhNDc0NztsaW5lLWhlaWdodDogMTVweDt9XG5ociB7d2lkdGg6IDEwMCUgIWltcG9ydGFudDtmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O2JvcmRlcjogMC41cHggc29saWQgZ2FpbnNib3JvO31cbmlucHV0eyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLXJhZGl1czogMTBweDt9XG4uc2VuZEljb257Zm9udC1zaXplOiAzNXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2NvbG9yOiB3aGl0ZTtib3JkZXItcmFkaXVzOiAxNXB4O31cbi5jaGF0X2NvbnRhaW5lciB7IHBhZGRpbmc6IDAgMThweDsgZmxleC13cmFwOiB3cmFwOyBwYWRkaW5nLXRvcDogMjBweDtcbiAgLmNoYXRfYm94IHsgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogMTVweDsgbWluLXdpZHRoOiA3MCU7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgLmNoYXQge21pbi13aWR0aDogOTBweDsgYm9yZGVyLXJhZGl1czogN3B4OyBtYXgtd2lkdGg6IDEwMCU7IG1pbi13aWR0aDogMTkxcHg7IHBhZGRpbmc6IDExcHggMjBweCAxMXB4IDIwcHg7IH1cbiAgICAgIHAge21hcmdpbjogMDtmb250LXNpemU6IC43cmVtO2ZvbnQtd2VpZ2h0OiA0MDA7Y29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO31cbiAgICB9XG4gIH1cbiAgLnBhcmEtbmFtZXtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC1zaXplOjE0cHg7bWFyZ2luLWJvdHRvbTogMHB4O21hcmdpbi10b3A6IDVweDtsaW5lLWhlaWdodDogNHB4O31cbiAgLnBhcmEtdGltZXtmb250LXNpemU6IDEwcHg7bWFyZ2luLWJvdHRvbTogNXB4O21hcmdpbi10b3A6IDEwcHg7Y29sb3I6ICNhNGEyYTI7bGluZS1oZWlnaHQ6IDRweDtcbiAgfVxuICAucGFyYS1jb2x7Ym94LXNoYWRvdzogMHB4IDBweCA3cHggMnB4ICNlNGUwZTA7Ym9yZGVyLXJhZGl1czogMjBweDtoZWlnaHQ6IDEwMCU7cGFkZGluZzogNXB4O31cbiAgLnBhcmFfY29sb3J7YmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTt9XG4gICJdfQ== */";
      /***/
    },

    /***/
    86919: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{community?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row >\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol whit_Pad whit_pad_top\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" >\n        <ion-slide *ngFor=\"let item of community?.data?.media\">\n          <img *ngIf=\"item?.media_type==1 || item?.media_type=='1'\" [src]=\"item?.media\"  onerror=\"this.src='assets/watermark/watermark.png'\" class=\"communicationImage\">\n          <video *ngIf=\"item?.media_type==2 || item?.media_type=='2'\" [src]=\"item?.media\" width=\"100%\" height=\"250px\" controls [poster]=\"item?.thumb_image\"></video>\n          <iframe *ngIf=\"item?.media_type==3 || item?.media_type=='3'\" [src]=\"item?.media | safe \" width=100% height=\"250px\"></iframe>\n        </ion-slide>\n      </ion-slides>\n     \n      <p class=\"titleDiv\" [innerHTML]=\"community?.data?.title\"></p>\n      <p class=\"contentDiv\" [innerHTML]=\"community?.data?.description\"></p>\n      <ion-row>\n        <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\">\n          <ion-icon *ngIf=\"community?.data?.like_status==0\" name=\"thumbs-up-outline\" (click)=\"doLike(community?.data)\"></ion-icon> \n          <ion-icon *ngIf=\"community?.data?.like_status==1\" name=\"thumbs-up\" (click)=\"doLike(community?.data)\"></ion-icon> \n          {{community?.data?.total_likes}}&nbsp;Likes\n        </ion-col>\n       \n        <ion-col [size]=\"7\" size-sm=\"7\" size-md=\"7\" size-lg=\"7\" class=\"ion-text-right\">\n          <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>&nbsp;{{community?.data?.total_comments}}&nbsp;Comments\n        </ion-col>\n\n      </ion-row>\n      <hr>\n        <!-- <ion-row *ngFor = \"let item of community?.data?.comments\">\n          <ion-col class=\"colom1\">{{item?.comments}}</ion-col>\n        </ion-row> -->\n        <div *ngIf=\"noComment == '0'\">\n          <h5 class=\"colom\">{{community?.data?.no_comment_msg}}</h5>\n          <img [src]=\"community?.data?.no_comment_image\" onerror=\"this.src='assets/watermark/watermark.png'\">\n        </div>\n        <div   >\n          <ion-row *ngFor = \"let item of community?.data?.comments\">\n            <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" >    \n              <div class=\"ion-text-right para-col para_color\" *ngIf=\"item?.comment_align=='left'\">\n                <p class=\"para-name\">{{item?.full_name}}</p>\n                <p class=\"para-time\">{{item?.convert_time}}</p>\n                <p class=\"ion-no-margin\" [innerHTML]=\"item?.comments\"></p>\n              </div>     \n                    \n            </ion-col>\n            <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n              <div class=\"ion-text-left para-col\" *ngIf=\"item?.comment_align=='right'\">\n                <p class=\"para-name\">{{item?.full_name}}</p>\n                <p class=\"para-time\">{{item?.convert_time}}</p>\n                <p class=\"ion-no-margin\" [innerHTML]=\"item?.comments\"></p>\n              </div>\n\n          </ion-col>\n          </ion-row>\n         \n        </div>    \n\n    \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n<ion-footer style=\"background-color:#f2f4f5;\"> \n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\">\n      <ion-row>\n        <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"11\" size-lg=\"11\">\n          <input [(ngModel)]=\"comment\" placeholder=\"Type Your Comment Here\">\n        </ion-col>\n        <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"1\" size-lg=\"1\" class=\"ion-text-center\" *ngIf=\"comment!=''\">\n          <ion-icon name=\"caret-forward-outline\" class=\"sendIcon\" (click)=\"doComment(comment)\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_communicationModule_communication-detail_communication-detail_module_ts-es5.js.map