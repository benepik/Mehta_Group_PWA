(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_registration_registration_module_ts"], {
    /***/
    29591: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPageRoutingModule": function RegistrationPageRoutingModule() {
          return (
            /* binding */
            _RegistrationPageRoutingModule
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


      var _registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registration.page */
      62537);

      var routes = [{
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationPage
      }];

      var _RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      _RegistrationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegistrationPageRoutingModule);
      /***/
    },

    /***/
    61683: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPageModule": function RegistrationPageModule() {
          return (
            /* binding */
            _RegistrationPageModule
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


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registration-routing.module */
      29591);
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registration.page */
      62537);

      var _RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      _RegistrationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageRoutingModule],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationPage]
      })], _RegistrationPageModule);
      /***/
    },

    /***/
    62537: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPage": function RegistrationPage() {
          return (
            /* binding */
            _RegistrationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./registration.page.html */
      9442);
      /* harmony import */


      var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registration.page.scss */
      35570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      20138);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      59865);
      /* harmony import */


      var _model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../model-camera/model-camera.page */
      39182);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      18345);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      97905); // import { WebView } from '@ionic-native/ionic-webview/ngx';


      var STORAGE_KEY = 'my_images';

      var _RegistrationPage = /*#__PURE__*/function () {
        function RegistrationPage(camera, actionSheetController, file, route, platform, filePath, modalCtrl, sendData, toastController, apiService, transfer, zone, localStorage, storage, sanitizer) {
          _classCallCheck(this, RegistrationPage);

          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.file = file;
          this.route = route;
          this.platform = platform;
          this.filePath = filePath;
          this.modalCtrl = modalCtrl;
          this.sendData = sendData;
          this.toastController = toastController;
          this.apiService = apiService;
          this.transfer = transfer;
          this.zone = zone;
          this.localStorage = localStorage;
          this.storage = storage;
          this.sanitizer = sanitizer;
          this.win = window;
          this.currentDate = new Date().toISOString();
          this.files = [];
          this.croppedImagePath = "";
          this.showOther = 0;
          this.codeData = [];
          this.codeData1 = [];
          this.codeData2 = [];
          this.codeData3 = [];
          this.codeData4 = [];
          this.isLoading = false;
          this.formData = [];
          this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
          };
          this.showImgOption = false;
          this.SubOptionData = [];
          this.showDelearList = false;
          this.emptyFieldFound = 0;
          this.onetime = 0; // var url =URLS.baseUrl+URLS.imageUploadUrl;
          // console.log("twerer",url)
        }

        _createClass(RegistrationPage, [{
          key: "removeImage",
          value: function removeImage(arr) {
            arr.answer = ''; // arr.imgArr.splice(index, 1);  

            console.log('arr', arr);
          }
        }, {
          key: "compareFn",
          value: function compareFn(e1, e2) {
            console.log('==> e1', e1);
            console.log('==> e2', e2);

            if (e2 && e2 != undefined && e2 != null) {
              return e1 && e2 ? e1.auto_id == e2 : e1 == e2;
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            setTimeout(function () {
              _this.RegistrationType = _this.sendData.registrationType; // console.log('1',this.RegistrationType);

              if (_this.RegistrationType.frompage == 'back') {
                _this.reId = _this.sendData.alldata;

                _this.ngOnInit();
              }
            }, 1000);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log('currentDate ', this.currentDate);
            this.RegistrationType = this.sendData.registrationType;
            console.log('1', this.RegistrationType);

            if (this.RegistrationType.request_page == 'dealer' || this.RegistrationType.request_page == 'officer' || this.RegistrationType.request_page == 'account_detail' || this.RegistrationType.request_page == 'pending_customer' || this.RegistrationType.request_page == 'active_customer' || this.RegistrationType.request_page == 'block_customer' || this.RegistrationType.request_page == 'rejected_customer') {
              this.reId = this.sendData.alldata;
            } else {
              this.reId = '';
            }

            this.localStorage.getStorage().then(function (storedData) {
              _this2.LoginStoredType = storedData.type;
              console.log('this.LoginStoredType', _this2.LoginStoredType);
            });
            this.registaionForm();
            console.log('RegistrationType', this.RegistrationType);
          } // checkInput(data, searchString) {
          //   if (data.call_api == 1) {
          //     if (searchString.toString().length >= data.min_value) {
          //       // this.deelarShow = data.request_type;
          //       this.searchApiCall(data, searchString);
          //     } else {
          //       this.searchData = [];
          //     }
          //   }
          // }

        }, {
          key: "checkInput",
          value: function checkInput(data, ev) {
            var searchString = ev; // data.answer=data.auto_id;

            console.log('checkInput data==> ', data);
            console.log('checkInput searchString==> ', searchString);
            console.log('ev==> ', ev); // if(ev==null ||ev==undefined){
            //   ev="";
            // }

            if (data.call_api == 1) {
              if (searchString.toString().length >= data.min_value) {
                // this.deelarShow = data.request_type
                console.log("checkInput searchData0==", searchString);
                this.searchApiCall(data, searchString, 0);
              } else {
                console.log("checkInput searchData1==", searchString);
                this.searchData = [];
              }
            }
          }
        }, {
          key: "back",
          value: function back() {
            var _this3 = this;

            this.zone.run(function () {
              if (_this3.RegistrationType.request_page == 'account_detail' || _this3.RegistrationType.request_page == 'officer') {
                _this3.route.navigate(['/tabs/home']);
              } else if (_this3.RegistrationType.request_page == 'dealer') {
                _this3.route.navigate(['/tabs/customer-allocation']); //this.route.navigateByUrl("/tabs/customer-allocation");

              } else {
                _this3.storage.remove('allStoreData');

                _this3.maintance(); // this.route.navigate(['./login']);

              }
            });
          }
        }, {
          key: "maintance",
          value: function maintance() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.zone.run(function () {
                        var apiKey = {};

                        _this4.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.maintanceUrl, apiKey).subscribe(function (result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _this5 = this;

                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!(result.success == 1 || result.success == '1')) {
                                      _context.next = 9;
                                      break;
                                    }

                                    this.maintanceData = result;
                                    _context.next = 4;
                                    return this.localStorage.setStorage('maintainanceData', result);

                                  case 4:
                                    _context.next = 6;
                                    return this.localStorage.getStorage().then(function (storedData) {
                                      console.log('localStorage storedData storedData', storedData);

                                      if (storedData && storedData.allStoreData != undefined) {
                                        // this.route.navigate(['/tabs']);
                                        console.log('localStorage storedData', storedData); // window.location.assign('/tabs');

                                        // window.location.assign('/tabs');
                                        _this5.route.navigateByUrl('tabs');
                                      } else {
                                        console.log('localStorage storedData maintance', storedData);
                                        _this5.maintanceData = storedData.maintainanceData;

                                        _this5.route.navigate(['/login']);
                                      }
                                    });

                                  case 6:
                                    if (result.data.is_down == 1 || result.data.is_down == '1') {//for maintance redirection page
                                    }

                                    _context.next = 10;
                                    break;

                                  case 9:
                                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');

                                  case 10:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        }, function (err) {
                          _this4.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "fillDelearName",
          value: function fillDelearName(delearData, data) {
            var _this6 = this;

            // this.dealersval=true;
            console.log("checkInput selected delearData==", delearData);
            console.log("checkInput selected data==", data);
            this.zone.run(function () {
              _this6.showDelearList = false; // this.searchselected=delearData.dealer_code;

              if (_this6.showDelearList == false) {
                // alert(this.showDelearList);
                // this.showSubemitButton=true;
                if (data.request_type == 'dealer') {
                  data.answer = delearData.dealer_code;
                  data.new_answer = delearData.auto_id;
                  console.log(' data.new_answe', data.new_answer);
                } else {
                  data.answer = delearData.full_name;
                  data.new_answer = delearData.auto_id;
                  console.log(' data.new_answe', data.new_answer);
                }
              } else {}
            });
          }
        }, {
          key: "searchApiCall",
          value: function searchApiCall(data, searchString, autofill) {
            var _this7 = this;

            console.log('1122==> ', data);
            console.log('11==> ', JSON.stringify(data.field_api_key));
            console.log('array==> ', this.formData);
            this.zone.run(function () {
              var apiKey = {
                "search_str": searchString,
                "request_type": data.request_type
              };
              console.log('lengthBABA', apiKey.search_str.toString().length);

              _this7.apiService.apiCallWithLoginToken(data.api_url.trim(), apiKey).subscribe(function (result) {
                if (result.success == 1) {
                  _this7.showDelearList = true;
                  _this7.searchData = result.data; // data.answer=this.searchData[0].auto_id;

                  _this7.zone.run(function () {
                    for (var i = 0; i < _this7.searchData.length; i++) {
                      for (var property in _this7.searchData[i]) {
                        console.log('property', property);

                        for (var j = 0; j < _this7.formData.length; j++) {
                          for (var k = 0; k < _this7.formData[j].data.length; k++) {
                            //  console.log('shi pro val1==> ', this.formData[j].data[k]);
                            console.log('shi pro==> ', property);
                            console.log('this.formData[j].data[k].id', _this7.formData[j].data[k].id);
                            console.log('this.formData[j].property && property', property && property);
                            console.log('shi pro==> ', property);
                            console.log("finalArray11==", _this7.formData[j].data[k].id);
                            console.log("finalArray22==", property); // if(this.onetime==0){

                            if (_this7.formData[j].data[k].id == property && property != 'auto_id' && property != 'pin_code') {
                              console.log('shi pro val==> ', _this7.searchData[i][property]);

                              if (_this7.formData[j].data[k].id != 'dealer_code' && autofill == 0) {
                                _this7.formData[j].data[k].answer = _this7.searchData[i][property];
                              }

                              if (_this7.formData[j].data[k].id == 'dealer_code' && autofill == 1) {
                                _this7.formData[j].data[k].answer = _this7.searchData[i][property];
                              }
                            }

                            if (_this7.formData[j].data[k].id == 'pin_code' && property == 'pin_code') {
                              // if(this.formData[j].data[k].id == 'pin_code' && property=='pin_code' ){
                              console.log('pincode 000000000000 ', _this7.searchData[i][property]); // this.formData[j].data[k].showAns=this.searchData[i].auto_id;

                              _this7.pin_autoid = _this7.searchData[i].auto_id; // }

                              console.log('pincode ', _this7.searchData[i][property]);
                            }

                            if (_this7.formData[j].data[k].id == 'dealer_code' && property == 'dealer_code') {
                              console.log("finalArray0==", _this7.formData);
                              console.log("finalArray000==", _this7.formData[j].data[k].id);
                              console.log("finalArray1==", _this7.searchData);
                              console.log("finalArray2==", _this7.searchData[i].auto_id);
                              _this7.dealer_autoid = _this7.searchData[i].auto_id; // alert(9877)

                              console.log("finalArray3==", _this7.formData);
                            } // }
                            // if(k==this.formData[j].data.length-1){
                            //   this.onetime==1;
                            // }
                            // if((this.formData[j].data[k].id == property) && this.onetime==1){
                            //   this.formData[j].data[k].answer = this.searchData[i].auto_id;
                            //   console.log(" this.formData[j].data[k].answer", this.formData[j].data[k].answer);
                            // }
                            // if (this.formData[j].data[k].id == 'pin_code' && property == 'auto_id') {
                            //   console.log('shi pro val12==> -----', this.searchData[i][property]);
                            //   // this.formData[j].data[k].answer = this.searchData[i][property];
                            //   // this.formData[j].data[k].answer = this.searchData[i].auto_id;
                            //   this.formData[j].data[k].showAns = this.searchData[i].pin_code;
                            // }

                          }
                        }
                      }
                    }
                  });
                } else {
                  _this7.showDelearList = false;
                  _this7.searchData = []; // data.answer ='';

                  _this7.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this7.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            }); // }
          }
        }, {
          key: "radioGroupChange",
          value: function radioGroupChange(ev, obj, data) {
            console.log('ev==>', ev);
            console.log('obj==>', obj);
            console.log('data==>', data);
            data.answer = obj.value;

            if (data.is_sub_option == '1') {
              data.imgArr = obj.sub_option;
            } else {
              data.imgArr = [];
            }
          }
        }, {
          key: "checkValue",
          value: function checkValue(ev, data) {
            console.log('select opt value==> ', ev.target.value); // console.log('select opt tagName==> ', ev.target.value.type_name);
            // console.log('select opt is_sub_option==> ', ev.target.value.is_sub_option);

            data.answer = ev.target.value;
            var index = data.option.findIndex(function (p) {
              return p.auto_id == data.answer;
            }); // console.log('select opt index==> ', index);
            // console.log('select opt index11==> ', data.option[index]);

            if (index >= 0 && data.option[index].type_name == 'Other') {
              this.showOther = data.option[index].is_sub_option;
              this.SubOptionData = data.option[index];
              console.log('select opt showOther==> ', this.SubOptionData);
            } else {
              this.showOther = 0;
              this.SubOptionData = [];
            }

            console.log('update select opt data==> ', data);
            return; // data.answer = ev.optionId;

            data.answer = ev.target.value;

            if (ev.target.value.type_name == "Other") {
              this.showOther = ev.target.value.is_sub_option;
              this.SubOptionData = ev.target.value;
            } else {
              this.showOther = 0;
              this.SubOptionData = [];
            } // console.log('form data select opt==> ', this.formData);
            // console.log('select opt==> ', ev.target.value);
            // console.log('select opt val==> ', ev.target.value.auto_id);

          } // DataURIToBlob(dataURI: string) {
          //   // let contentType ='image/jpg';
          //   const splitDataURI = dataURI.split(',')
          //   const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[0]) : decodeURI(splitDataURI[0])
          //   const mimeString = splitDataURI[0].split(':')[1].split(';')[0].split("/")
          //   console.log('splitDataURI',splitDataURI);
          //   console.log('byteString',byteString);
          //   console.log('minString',mimeString);
          //   alert('minString'+mimeString);
          //   const ia = new Uint8Array(byteString.length)
          //   for (let i = 0; i < byteString.length; i++)
          //       ia[i] = byteString.charCodeAt(i)
          //   // return new Blob([ia], { type: mimeString })
          //   console.log('Blob',Blob);
          //   return new Blob([ia], { type: "image/png" })
          // }

        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              var options;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // Create options for the Camera Dialog
                      options = {
                        quality: 40,
                        cameraDirection: 1,
                        correctOrientation: true,
                        destinationType: this.camera.DestinationType.FILE_URI,
                        sourceType: sourceType,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE
                      }; // Get the data of an image

                      this.camera.getPicture(options).then(function (imagePath) {
                        console.log("imagePath==", imagePath);
                        _this8.currentName = imagePath;

                        var name = _this8.currentName.split("/"); // code for fetching file name


                        _this8.fileName = name[name.length - 1]; // this.previewImagePath=this.win.Ionic.WebView.convertFileSrc(imagePath);

                        if (_this8.platform.is("ios")) {
                          var tempImg = _this8.sanitizer.bypassSecurityTrustResourceUrl(_this8.win.Ionic.WebView.convertFileSrc(imagePath));

                          console.log("ios imagePath==", tempImg);
                          _this8.previewImagePath = tempImg;
                          console.log("ios previewImagePath==", _this8.previewImagePath);
                        } else {
                          _this8.previewImagePath = _this8.win.Ionic.WebView.convertFileSrc(imagePath);
                        }

                        _this8.uploadImageonserver();
                      }, function (err) {
                        console.log("imagePath error==", err);
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "uploadImageonserver",
          value: function uploadImageonserver() {
            var _this9 = this;

            // this.apiServices.showLoader();
            this.localStorage.getStorage().then(function (dataFromStorage) {
              // this.apiServices.getStorege('allStoreData').then(dataFromStorage => {
              // var url =URLS.baseUrl+'Profile/upload_file.php';
              var url = src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.baseUrl + src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.imageUploadUrl;
              console.log("url", url);
              var myheaders = new Headers();
              myheaders.append('Content-Type', 'application/json'); // myheaders.append('Authorization', dataFromStorage.loginStorage.loginToken);

              var targetPath = _this9.currentName; // aply only for imagepicker checking

              var options = {
                fileKey: "file",
                fileName: _this9.fileName,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                // headers: {"Authorization":dataFromStorage.loginStorage.loginToken },
                // params: {"file":targetPath,"flag":"ContactUs","clientId":APP_CONFIG.clientId,
                // "appVersion":APP_CONFIG.appVersion,"device":this.apiServices.device,
                // "employeeId":dataFromStorage.loginStorage.employeeId,"deviceId":dataFromStorage.deviceId}
                params: {
                  'file': targetPath,
                  "client_id": src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.APP_CONFIG.clientId,
                  "device": src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.APP_CONFIG.device,
                  "device_id": src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.APP_CONFIG.device_id,
                  "app_version": src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.APP_CONFIG.app_version,
                  "employee_id": dataFromStorage.allStoreData.user_id,
                  "user_type": dataFromStorage.allStoreData.employee_type,
                  "media_type": '1',
                  "flag_type": _this9.currentObj.flag_type,
                  "request_for": _this9.reId,
                  "request_page": _this9.RegistrationType.request_page
                }
              };
              console.log("options", options);
              console.log("passing key==", JSON.stringify(options)); // console.log("url==", URLS.baseUrl+''+url);
              // this.apiServices.startLoader().then(()=>{

              var fileTransfer = _this9.transfer.create();

              fileTransfer.upload(targetPath, url, options).then(function (res) {
                console.log("server res==", res);
                var data = JSON.parse(res.response);
                console.log("response==", res);
                console.log("response22==", data);

                if (data.success == 1) {// this.apiServices.showToastMessage(data.message, 'top', 3000, 'greenBg');
                  // this.apiServices.hideLoader();
                } else {
                  console.log("message key==", data.message); // this.apiServices.showToastMessage(data.message, 'top', 3000, 'redBg');
                  // this.apiServices.hideLoader();
                }
              }, function (err) {
                console.log("err==", err); // this.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                // this.apiServices.hideLoader();

                if (err.http_status == 200) {} // this.apiServices.commonToast(JSON.stringify(err)  , 3000, 'top', 'redBgToast');
                // this.apiServices.stopLoader();

              }); // })
            });
          } // async upload(imagepass,nameoffile) {
          //   this.localStorage.getStorage().then(storedData=>{
          //    var targetPath=imagepass; // aply only for imagepicker check ing
          //    console.log("targetPath", targetPath);
          //    console.log("imagepass", imagepass);
          //   var options = {
          //     fileKey: "file",
          //     fileName: nameoffile,
          //     chunkedMode: false,
          //     mimeType: "multipart/form-data",
          //     // headers: {'Authorization':this.login_token},
          //     params : {
          //       'file': targetPath,"client_id":APP_CONFIG.clientId,"device":APP_CONFIG.device,  "device_id":APP_CONFIG.device_id,
          //       "app_version": APP_CONFIG.app_version, "employee_id":storedData.allStoreData.user_id, 
          //       "user_type":storedData.allStoreData.employee_type,
          //       "media_type":'1',"flag_type":this.currentObj.flag_type,"request_for":this.reId,"request_page":this.RegistrationType.request_page
          //     }
          //   };
          //   console.log("optionsasd", JSON.stringify(options));
          //   console.log("optionsasd1", options);
          //   const fileTransfer: FileTransferObject = this.transfer.create();
          //   const serverImgProcess= await fileTransfer.upload(targetPath, URLS.imageUploadUrl, options).then(data => {
          //     console.log("data",data);
          //     this.data1=JSON.parse(data.response);
          //     console.log("this.data1",this.data1);
          //     if (this.data1.success == 1) {
          //       this.zone.run(() => { 
          //     this.data2=JSON.stringify(this.data1);
          //     console.log("1",this.data1.data);
          //     console.log("2",this.data1.data.filebaseUrl);
          //     this.currentObj.answer=this.data1.data.filebaseUrl;
          //       });
          //   }  else {
          //   }
          //   }, err => {
          //     console.log('err',err);
          //   });
          // });
          // }    

        }, {
          key: "selectImage",
          value: function selectImage(obj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this10 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('selectImage cordova');
                      this.currentObj = obj;
                      _context4.next = 4;
                      return this.actionSheetController.create({
                        header: "Select Image source",
                        buttons: [{
                          text: 'Load from Library',
                          handler: function handler() {
                            _this10.pickImage(_this10.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            _this10.pickImage(_this10.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 4:
                      actionSheet = _context4.sent;
                      _context4.next = 7;
                      return actionSheet.present();

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //  back(){
          //   this.route.navigate(['./mobile']);
          //  }

        }, {
          key: "Submit",
          value: function Submit(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this11 = this;

              var _loop, j, _ret;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.emptyFieldFound = 0;
                      console.log("this.pin_autoid", this.pin_autoid);
                      console.log('field full==> ', this.formData);

                      _loop = function _loop(j) {
                        var _loop2 = function _loop2(k) {
                          if (_this11.formData[j].data[k].is_mandatory == 1 && _this11.formData[j].data[k].answer == "") {
                            _this11.emptyFieldFound = 1;
                            console.log('field==> ', _this11.formData[j].data[k]);
                            console.log('field==> ', _this11.formData[j].data[k].answer);
                          }

                          if (_this11.formData[j].data[k].is_sub_option == 1) {
                            var index = _this11.formData[j].data[k].option.findIndex(function (p) {
                              return p.value == _this11.formData[j].data[k].answer;
                            });

                            console.log('field1 yoyo index==> ', index);
                            console.log('field1 yoyo==> ', _this11.formData[j].data[k].option[index]);

                            if (index >= 0) {
                              if (_this11.formData[j].data[k].option[index].is_mandatory == 1) {
                                _this11.emptyFieldFound = 1;
                                console.log('field1==> ', _this11.formData[j].data[k].option[index]);
                                console.log('field1==> ', _this11.formData[j].data[k].option[index].answer);
                              }

                              if (_this11.formData[j].data[k].option[index].is_sub_option == 1) {
                                for (var m = 0; m < _this11.formData[j].data[k].option[index].sub_option.length; m++) {
                                  if (_this11.formData[j].data[k].option[index].sub_option[m].isMandatory == 1 && _this11.formData[j].data[k].option[index].sub_option[m].answer == "") {
                                    _this11.emptyFieldFound = 1;
                                    console.log('field2==> ', _this11.formData[j].data[k].option[index].sub_option[m]);
                                    console.log('field2==> ', _this11.formData[j].data[k].option[index].sub_option[m].answer);
                                  }
                                }
                              }
                            } else {
                              for (var l = 0; l < _this11.formData[j].data[k].option.length; l++) {
                                if (_this11.formData[j].data[k].option[l].is_mandatory == 1) {
                                  _this11.emptyFieldFound = 1;
                                  console.log('field else1==> ', _this11.formData[j].data[k].option[l]);
                                  console.log('field else11==> ', _this11.formData[j].data[k].option[l].answer);
                                }

                                if (_this11.formData[j].data[k].option[l].is_sub_option == 1) {
                                  // let index = this.formData[j].data[k].option[l].sub_option.findIndex(p => p.value == this.formData[j].data[k].answer);
                                  for (var _m = 0; _m < _this11.formData[j].data[k].option[l].sub_option.length; _m++) {
                                    if (_this11.formData[j].data[k].option[l].sub_option[_m].isMandatory == 1 && _this11.formData[j].data[k].option[l].sub_option[_m].answer == "") {
                                      _this11.emptyFieldFound = 1;
                                      console.log('field else12==> ', _this11.formData[j].data[k].option[l].sub_option[_m]);
                                      console.log('field else12==> ', _this11.formData[j].data[k].option[l].sub_option[_m].answer);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        };

                        for (var k = 0; k < _this11.formData[j].data.length; k++) {
                          _loop2(k);
                        }

                        if (j == _this11.formData.length - 1) {
                          console.log('this.emptyFieldFound==> ', _this11.emptyFieldFound);

                          if (_this11.emptyFieldFound == 1 || _this11.searchData == []) {
                            _this11.apiService.showToastMessage("Please fill all mandatory fields", 'top', 3000, 'redBg');

                            return {
                              v: void 0
                            };
                          } else {
                            for (var _j = 0; _j < _this11.formData.length; _j++) {
                              for (var _k = 0; _k < _this11.formData[_j].data.length; _k++) {
                                if (_this11.formData[_j].data[_k].id == 'pin_code') {
                                  _this11.formData[_j].data[_k].answer = _this11.pin_autoid;
                                } else if (_this11.formData[_j].data[_k].id == 'dealer_code') {
                                  console.log("this.dealer_autoid", _this11.dealer_autoid);

                                  if (_this11.formData[_j].data[_k].is_editable == 'false' || _this11.formData[_j].data[_k].is_editable == false) {
                                    _this11.formData[_j].data[_k].answer = _this11.formData[_j].data[_k].auto_dealer_id;
                                  } else {
                                    _this11.formData[_j].data[_k].answer = _this11.dealer_autoid;
                                  }
                                }
                              }
                            }

                            _this11.submitFunCall(type); // alert("Shivanshi ma'am api to hit karo, sab fields fill ho gyi h");

                          }
                        }
                      };

                      j = 0;

                    case 5:
                      if (!(j < this.formData.length)) {
                        _context5.next = 12;
                        break;
                      }

                      _ret = _loop(j);

                      if (!(typeof _ret === "object")) {
                        _context5.next = 9;
                        break;
                      }

                      return _context5.abrupt("return", _ret.v);

                    case 9:
                      j++;
                      _context5.next = 5;
                      break;

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "submitFunCall",
          value: function submitFunCall(type) {
            var _this12 = this;

            this.zone.run(function () {
              var apiKey = {
                "save_data": _this12.formData,
                "request_for": _this12.reId,
                "request_page": _this12.RegistrationType.request_page,
                "save_type": type
              };
              console.log('login data response', apiKey);

              _this12.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.registrationFormSubmitUrl, apiKey).subscribe(function (result) {
                console.log('logout data response', result);

                if (result.success == 1) {
                  if (result.request_page == 'dealer') {
                    _this12.sendData.alldata = {
                      "requestFor": _this12.reId,
                      "requestPage": result.request_page
                    };

                    _this12.route.navigate(['/profile-upload']);
                  } else {
                    _this12.route.navigate(['/tabs']);
                  }

                  _this12.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                } else {
                  _this12.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this12.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "openSelectImageOpt",
          value: function openSelectImageOpt(obj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this13 = this;

              var blkankdata, modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log('selectImage browser');
                      this.currentObj = obj;

                      if (!(this.showImgOption == false)) {
                        _context6.next = 14;
                        break;
                      }

                      this.showImgOption = true;
                      blkankdata = {
                        "nulldata": "blank",
                        flag: obj.flag_type
                      };
                      _context6.next = 7;
                      return this.modalCtrl.create({
                        component: _model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_5__.ModelCameraPage,
                        componentProps: {
                          data: blkankdata
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 7:
                      modal = _context6.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this13.dataReturned = dataReturned.data.data; // this.currentObj.answer = this.dataReturned.data;      

                          console.log(" this.dataReturned:", _this13.dataReturned); // this.userImg = this.dataReturned.data;

                          _this13.currentObj.answer = _this13.dataReturned.filebaseUrl;

                          if (_this13.currentObj.answer == undefined) {
                            _this13.currentObj.answer = '';
                          }

                          console.log("data:", _this13.currentObj.answer); //alert('Modal Sent Data :'+ dataReturned);
                        } else {
                          _this13.currentObj.answer = '';
                        }
                      });
                      _context6.next = 11;
                      return modal.present();

                    case 11:
                      return _context6.abrupt("return", _context6.sent);

                    case 14:
                      this.showImgOption = false;

                    case 15:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "captureImg",
          value: function captureImg(event) {// console.log('event1==>', event);
            // console.log('this.currentObj==>', this.currentObj);
            // var formData = new FormData();
            // if(event.target.files){
            //   const file = event.target.files[0];
            //   const reader = new FileReader();
            //   reader.readAsDataURL(file);
            //   reader.onload = () => {
            //       console.log(reader.result);
            //       formData.append("file", this.files);
            //      console.log('this.currentObj==>', this.currentObj);
            //      this.currentObj.answer= reader.result;
            //   };
            // }
          }
        }, {
          key: "registaionForm",
          value: function registaionForm() {
            var _this14 = this;

            this.zone.run(function () {
              var apiKey = {
                "request_page": _this14.RegistrationType.request_page,
                "request_for": _this14.reId
              };

              _this14.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.registrationFormUrl, apiKey).subscribe(function (result) {
                if (result.success == 1) {
                  _this14.formValue = result;
                  _this14.formData = result.data;

                  for (var i = 0; i < _this14.formData.length; i++) {
                    for (var j = 0; j < _this14.formData[i].data.length; j++) {
                      if (_this14.formData[i].data[j].type == 'radio') {
                        for (var k = 0; k < _this14.formData[i].data[j].option.length; k++) {
                          if (_this14.formData[i].data[j].answer == _this14.formData[i].data[j].option[k].value && _this14.formData[i].data[j].option[k].is_sub_option == 1) {
                            _this14.formData[i].data[j].imgArr = _this14.formData[i].data[j].option[k].sub_option;
                          }
                        }
                      }

                      if (_this14.formData[i].data[j].id == 'pin_code') {
                        if (_this14.formData[i].data[j].answer != '') {
                          _this14.searchApiCall(_this14.formData[i].data[j], _this14.formData[i].data[j].answer, 1);
                        }
                      }
                    }
                  }
                } else {
                  _this14.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this14.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          } // chandan work start

        }, {
          key: "profileView",
          value: function profileView(id) {
            var _this15 = this;

            this.zone.run(function () {
              var apiKey = {
                "request_for": _this15.reId,
                "request_status": id
              };

              _this15.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.UpdateRegistrationUrl, apiKey).subscribe(function (result) {
                console.log('UpdateRegistrationUrl : ', result);

                if (result.success == 1) {
                  _this15.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');

                  _this15.route.navigate(['./customer-reg']); // this.formValue = result;
                  // this.formData = result.data;

                } else {
                  _this15.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this15.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return RegistrationPage;
      }();

      _RegistrationPage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__.DataTransferService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__.FileTransfer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer
        }];
      };

      _RegistrationPage.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: ['input']
        }]
      };
      _RegistrationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegistrationPage);
      /***/
    },

    /***/
    81343: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageZoomPage": function ImageZoomPage() {
          return (
            /* binding */
            _ImageZoomPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./image-zoom.page.html */
      47674);
      /* harmony import */


      var _image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-zoom.page.scss */
      32968);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/local-storage.service */
      18345);

      var _ImageZoomPage = /*#__PURE__*/function () {
        function ImageZoomPage(navParams, modalCtrl, localStorage) {
          var _this16 = this;

          _classCallCheck(this, ImageZoomPage);

          this.navParams = navParams;
          this.modalCtrl = modalCtrl;
          this.localStorage = localStorage;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            zoom: {
              minRatio: 1,
              maxRatio: 3,
              toggle: true,
              containerClass: 'swiper-zoom-container',
              zoomedSlideClass: 'swiper-slide-zoomed'
            }
          };
          this.localStorage.getStorage().then(function (result) {
            _this16.loginUserData = result.allStoreData;
          });
        }

        _createClass(ImageZoomPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.slides.lockSwipes(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.table(this.navParams);
            this.zoomData = this.navParams.data.data;
            console.log('img==> ', this.zoomData);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
            this.slides.lockSwipes(false);
          }
        }, {
          key: "download",
          value: function download() {}
        }]);

        return ImageZoomPage;
      }();

      _ImageZoomPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService
        }];
      };

      _ImageZoomPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides]
        }]
      };
      _ImageZoomPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ImageZoomPage);
      /***/
    },

    /***/
    51532: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTransferService": function DataTransferService() {
          return (
            /* binding */
            _DataTransferService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../image-zoom/image-zoom.page */
      81343);

      var _DataTransferService = /*#__PURE__*/function () {
        function DataTransferService(modalController) {
          _classCallCheck(this, DataTransferService);

          this.modalController = modalController;
        }

        _createClass(DataTransferService, [{
          key: "zoomSingleImage",
          value: function zoomSingleImage(path) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalController.create({
                        component: _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__.ImageZoomPage,
                        cssClass: 'my-custom-class',
                        // swipeToClose: true,
                        // mode: 'ios', backdropDismiss: true,
                        // presentingElement: this.routerOutlet.nativeEl,
                        componentProps: {
                          data: path
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      _context7.next = 5;
                      return modal.present();

                    case 5:
                      return _context7.abrupt("return", _context7.sent);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "readMoreHTML",
          value: function readMoreHTML(str, max, add) {
            console.log('str==> ', str);

            if (str && str.length > max) {
              var tempStr = str.substring(0, max);
              var openAtag = tempStr.split("<a ");
              var closeAtag = tempStr.split("</a>"); // console.log('openAtag== ', openAtag.length);
              // console.log('closeAtag== ', closeAtag.length);

              if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>'; // console.log("equal== ", str);

                return str + " " + add;
              } else {
                var nextStr = str.substring(max, str.length); // console.log("remaining sub string******", nextStr);

                var nextCloseAtagIndex = nextStr.search("</a>"); // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);

                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4); // console.log("final******", str);

                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>'; // console.log("not equal== ", str);

                return str + " " + add;
              } // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
              // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);

            } else {
              return str;
            }
          }
        }]);

        return DataTransferService;
      }();

      _DataTransferService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _DataTransferService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DataTransferService);
      /***/
    },

    /***/
    35570: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".para {\n  color: var(--headerColor);\n}\n\n.head {\n  background-color: var(--reedeemColor);\n}\n\n.para2 {\n  font-size: 15px;\n}\n\n.dateDiv {\n  padding: 10px 0px 0px 0px;\n  border-bottom: 1px solid rgba(84, 83, 83, 0.6) !important;\n  font-size: 0.9rem !important;\n  font-weight: 500 !important;\n  --padding-bottom: 2px !important;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(84, 83, 83, 0.6) !important;\n  /* margin: 0 0px; */\n  color: var(--text-light2);\n  font-size: 0.9rem !important;\n  font-weight: 500 !important;\n  --padding-bottom: 2px !important;\n}\n\n.boundary {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n  padding: 0;\n  --background: white;\n}\n\n.colu {\n  padding: 15px;\n}\n\n.colum {\n  padding: 13px 80px 0px;\n}\n\n.card {\n  height: 108px;\n  border: dotted;\n  border-color: lightgrey;\n}\n\n.card1 {\n  width: 75%;\n  height: 108px;\n  border: dotted;\n  border-color: lightgrey;\n}\n\n.ionic_btn {\n  display: block;\n  margin: auto;\n  text-transform: none;\n  text-transform: initial;\n  --border-radius: 20px;\n  width: 122px;\n  font-size: 13px;\n  --background: #B01D22;\n  height: 32px;\n}\n\nion-list {\n  padding: 0;\n}\n\n.radioType {\n  font-size: 17px;\n}\n\n.butt1 {\n  padding-top: 8px;\n}\n\n.image-upload > input {\n  display: none;\n}\n\n.rdio {\n  padding: 0px;\n}\n\nion-list {\n  margin-top: -14px;\n  margin-left: -14px;\n}\n\n.categoryName {\n  font-size: 18px;\n  font-weight: bold;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\nion-select .select-icon .select-icon-inner {\n  color: red !important;\n  opacity: 1 !important;\n}\n\nsup {\n  font-size: 15px;\n  color: var(-headerColor);\n  font-weight: bold;\n  color: var(--headerColor);\n  top: -2px !important;\n}\n\n.clsoeIcon {\n  text-align: end;\n  position: absolute;\n  right: 40px;\n  top: 4px;\n  left: 5px;\n  font-size: 24px;\n  /* bottom: 105px; */\n  bottom: 0px;\n}\n\nion-label {\n  color: black;\n}\n\nion-input {\n  color: black;\n}\n\nion-select {\n  color: black;\n  --background:white;\n}\n\nion-datetime {\n  color: black;\n}\n\n.small {\n  width: 100px;\n  height: 50px;\n  text-align: right;\n}\n\n.small_p {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyx5QkFBQTtBQUVQOztBQURBO0VBQU8scUNBQUE7QUFLUDs7QUFKQTtFQUFPLGVBQUE7QUFRUDs7QUFQQTtFQUFTLHlCQUFBO0VBQTRCLHlEQUFBO0VBQTBELDRCQUFBO0VBQzNGLDJCQUFBO0VBQTRCLGdDQUFBO0FBY2hDOztBQWJBO0VBQ0kseURBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FBZ0JKOztBQWRBO0VBQ0ksbUNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFpQko7O0FBZkE7RUFDSSxhQUFBO0FBa0JKOztBQWZBO0VBQ0ksc0JBQUE7QUFrQko7O0FBaEJBO0VBRUksYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWtCSjs7QUFoQkE7RUFDTSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQW1CTjs7QUFqQkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBb0JKOztBQWxCQTtFQUNJLFVBQUE7QUFxQko7O0FBbkJBO0VBQ0ksZUFBQTtBQXNCSjs7QUFwQkE7RUFDSSxnQkFBQTtBQXVCSjs7QUFyQkE7RUFBcUIsYUFBQTtBQXlCckI7O0FBeEJBO0VBQ0ksWUFBQTtBQTJCSjs7QUF6QkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBNEJKOztBQXZCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQTBCSjs7QUF4QkE7RUFBWSxXQUFBO0VBQVksdUJBQUE7QUE2QnhCOztBQTNCUTtFQUFvQixxQkFBQTtFQUF3QixxQkFBQTtBQStCcEQ7O0FBNUJDO0VBQUksZUFBQTtFQUFnQix3QkFBQTtFQUF5QixpQkFBQTtFQUFrQix5QkFBQTtFQUEyQixvQkFBQTtBQW9DM0Y7O0FBN0JBO0VBQWUsZUFBQTtFQUNYLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWlDSjs7QUFoQ0k7RUFDSSxZQUFBO0FBbUNSOztBQWpDSTtFQUNJLFlBQUE7QUFvQ1I7O0FBbENJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBcUNSOztBQW5DSTtFQUNJLFlBQUE7QUFzQ1I7O0FBcENJO0VBQU8sWUFBQTtFQUFjLFlBQUE7RUFBYyxpQkFBQTtBQTBDdkM7O0FBekNJO0VBQVMsWUFBQTtBQTZDYiIsImZpbGUiOiJyZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmF7IGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7fVxuLmhlYWR7IGJhY2tncm91bmQtY29sb3I6dmFyKC0tcmVlZGVlbUNvbG9yKTt9XG4ucGFyYTJ7Zm9udC1zaXplOiAxNXB4O31cbi5kYXRlRGl2e3BhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7ICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg4NCwgODMsIDgzLCAwLjYpICFpbXBvcnRhbnQ7Zm9udC1zaXplOiAwLjkwcmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50Oy0tcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O31cbmlvbi1pbnB1dHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg4NCwgODMsIDgzLCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgLyogbWFyZ2luOiAwIDBweDsgKi9cbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgIGZvbnQtc2l6ZTogMC45MHJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cbi5ib3VuZGFyeXtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI2VmZWFlYTtcbiAgICBwYWRkaW5nOjA7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb2x1e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG59XG4uY29sdW17XG4gICAgcGFkZGluZzogMTNweCA4MHB4IDBweDtcbn1cbi5jYXJke1xuICAvLyAgd2lkdGg6MjUwcHg7XG4gICAgaGVpZ2h0OiAxMDhweDtcbiAgICBib3JkZXI6IGRvdHRlZDtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbn1cbi5jYXJkMXtcbiAgICAgIHdpZHRoOjc1JTtcbiAgICAgIGhlaWdodDogMTA4cHg7XG4gICAgICBib3JkZXI6IGRvdHRlZDtcbiAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xuICB9XG4uaW9uaWNfYnRue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDEyMnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLWJhY2tncm91bmQ6ICNCMDFEMjI7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuaW9uLWxpc3R7XG4gICAgcGFkZGluZzogMDtcbn1cbi5yYWRpb1R5cGV7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmJ1dHQxe1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uaW1hZ2UtdXBsb2FkPmlucHV0IHtkaXNwbGF5OiBub25lO31cbi5yZGlve1xuICAgIHBhZGRpbmc6MHB4O1xufVxuaW9uLWxpc3R7XG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLy8gaW9uLXNlbGVjdHtcbi8vICAgICBtYXJnaW4tdG9wOiAtMzZweDtcbi8vIH1cbi5jYXRlZ29yeU5hbWV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLXNlbGVjdCB7d2lkdGg6IDEwMCU7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLnNlbGVjdC1pY29ueyAgICBcbiAgICAgICAgLnNlbGVjdC1pY29uLWlubmVyIHtjb2xvciA6IHJlZCAhaW1wb3J0YW50OyBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7fVxuICAgIH1cbiAgfVxuIHN1cHtmb250LXNpemU6IDE1cHg7Y29sb3I6IHZhcigtaGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiB2YXIoIC0taGVhZGVyQ29sb3IpO3RvcDogLTJweCAhaW1wb3J0YW50O31cbi8vICAuZGVsZWFyTGlzdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTAwJTtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDo5O3BhZGRpbmc6MCAxMHB4O1xuLy8gICAgIC5kZWxlYXJUZXh0e21hcmdpbjowO1xuLy8gICAgICAgICBwe21hcmdpbjowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIGdhaW5zYm9ybztwYWRkaW5nOjhweCAwO2ZvbnQtc2l6ZToxNHB4O31cbi8vICAgICB9XG4vLyB9XG5cbi5jbHNvZUljb257ICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDQwcHg7XG4gICAgdG9wOiA0cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAvKiBib3R0b206IDEwNXB4OyAqL1xuICAgIGJvdHRvbTogMHB4O31cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGNvbG9yOmJsYWNrOyBcbiAgICB9XG4gICAgaW9uLXNlbGVjdHtcbiAgICAgICAgY29sb3I6YmxhY2s7IFxuICAgICAgICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gICAgfVxuICAgIGlvbi1kYXRldGltZXtcbiAgICAgICAgY29sb3I6YmxhY2s7IFxuICAgIH1cbiAgICAuc21hbGx7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDUwcHg7IHRleHQtYWxpZ246IHJpZ2h0O31cbiAgICAuc21hbGxfcHt3aWR0aDogMTAwcHg7fSJdfQ== */";
      /***/
    },

    /***/
    32968: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: none;\n}\n\nion-slides {\n  width: 100%;\n}\n\nion-slide {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.product-zoom-modal {\n  --width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* End Modal css */\n\n/* Global modal transparent*/\n\n.sc-ion-modal-md-h {\n  --background: none;\n}\n\n.sc-ion-modal-ios-h {\n  --background: none;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: #fff;\n  position: absolute;\n  top: 0;\n}\n\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksa0JBQUE7QUFDWjs7QUFBQTtFQUFhLFdBQUE7QUFJYjs7QUFIQTtFQUFhLDhCQUFBO0FBT2I7O0FBTkE7RUFBcUIsV0FBQTtFQUFjLGVBQUE7QUFXbkM7O0FBVkE7RUFBYSxrQkFBQTtFQUFxQixZQUFBO0VBQWdCLGFBQUE7RUFBZSxXQUFBO0FBaUJqRTs7QUFmQTtFQUF1QixhQUFBO0VBQWdCLG9DQUFBO0FBb0J2Qzs7QUFuQkEsa0JBQUE7O0FBQ0EsNEJBQUE7O0FBQ0E7RUFBdUIsa0JBQUE7QUF1QnZCOztBQXRCQTtFQUF3QixrQkFBQTtBQTBCeEI7O0FBdkJBO0VBQWEsZ0RBQUE7RUFDVCxhQUFBO0VBQWdCLGtCQUFBO0VBQXNCLE1BQUE7QUE2QjFDOztBQTVCSTtFQUFTLFdBQUE7QUFnQ2IiLCJmaWxlIjoiaW1hZ2Utem9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHsgIC0tYmFja2dyb3VuZDogbm9uZTt9XG5pb24tc2xpZGVzIHsgd2lkdGg6IDEwMCU7fVxuaW9uLXNsaWRlIHsgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTt9XG4uc3dpcGVyLXNsaWRlIGltZyB7ICB3aWR0aDogMTAwJTsgIG1heC13aWR0aDogMTAwJTt9XG4uem9vbS1ib3ggeyAgcG9zaXRpb246IGFic29sdXRlOyAgaGVpZ2h0OiAxMDAlOyAgIGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO31cblxuLnByb2R1Y3Qtem9vbS1tb2RhbCB7ICAtLXdpZHRoOiAxMDAlOyAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO31cbi8qIEVuZCBNb2RhbCBjc3MgKi9cbi8qIEdsb2JhbCBtb2RhbCB0cmFuc3BhcmVudCovXG4uc2MtaW9uLW1vZGFsLW1kLWggeyAgIC0tYmFja2dyb3VuZDogbm9uZTt9XG4uc2MtaW9uLW1vZGFsLWlvcy1oIHsgICAtLWJhY2tncm91bmQ6IG5vbmU7fVxuXG5cbmlvbi10b29sYmFyIHstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgLS1jb2xvcjogI2ZmZjsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICB0b3A6IDA7ICB9XG4gICAgaW9uLWljb257Y29sb3I6I2ZmZjt9Il19 */";
      /***/
    },

    /***/
    9442: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"RegistrationType?.request_page == 'account_detail'\n                || RegistrationType?.request_page == 'pending_customer'\n                || RegistrationType?.request_page == 'active_customer' \n                || RegistrationType?.request_page == 'block_customer' \n                || RegistrationType.request_page == 'rejected_customer'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [ngClass]=\"{'content-bg':  platform?.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"12\" class=\"boundary1\">\n     <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src = \"assets/icon/Bandhan Logo.png\" class=\"small_p\">\n        </ion-col>\n         <ion-col class=\"col ion-text-end\" >\n          <img src = \"assets/icon/abc.png\" class=\"small\">\n         </ion-col>\n      </ion-row>\n      </ion-grid>\n    <ion-row>\n      <ion-col [size]=\"12\" *ngIf=\"formValue?.title\">\n        <p class=\"para ion-text-center\">{{formValue?.title}}</p>\n      </ion-col>\n      <ion-col [size]=\"12\" *ngIf=\"formValue?.sub_title\" class=\"head\" >\n        <p class= \"para2 ion-no-margin ion-text-center\">{{formValue?.sub_title}}</p>\n      </ion-col>\n    </ion-row>\n\n\n\n\n <div *ngFor=\"let formField of formData\" class=\"custom_container\">\n  <ion-row>\n    <ion-col >\n      <p class=\"categoryName\">{{formField?.category_name}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let data of formField?.data\" class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n      <ion-label *ngIf = \"data?.type != 'radio'\">\n       {{data?.label}} <sup *ngIf=\"data?.is_mandatory==1\">*</sup>\n      </ion-label>\n     \n      <ion-input #input *ngIf=\"data?.type=='text'\" id=\"{{data?.id}}\" [disabled]=\"data?.is_editable==0\" type = \"text\"\n       placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.answer\" (ngModelChange)='checkInput(data,data.answer)'></ion-input>\n     \n      <ion-input #input *ngIf=\"data?.type=='number'\" [disabled]=\"data?.is_editable==0\" type = \"tel\" maxlength=\"{{data.min_value}}\"\n      placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.showAns || data.answer\" (ngModelChange)='checkInput(data, $event)'></ion-input>\n      \n      <ion-input #input *ngIf=\"data?.type=='email'\" [disabled]=\"data?.is_editable==0\" type = \"email\" \n      placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.answer\" (ngModelChange)='checkInput(data,data.answer)'></ion-input>\n      <!-- <ion-input *ngIf=\"data?.type=='dob'\" [disabled]=\"data?.is_editable==0\" type =\"date\" placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.answer\" (ngModelChange)='checkInput(data,data.answer)'></ion-input> -->\n      <!-- MMM DD YYYY -->\n      <ion-datetime *ngIf=\"data?.type=='dob'\" class=\"dateDiv\" [disabled]=\"data?.is_editable==0\" max={{currentDate}}\n      displayFormat=\"MMM DD YYYY\" placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.answer\" ></ion-datetime>\n\n\n      <div *ngIf=\"(showDelearList==true) && (data?.type=='text') && (data?.call_api==1) && (data?.request_type=='dealer' || data?.request_type=='officer')\" class=\"themeCard delearList\" >\n        <div class=\"delearText\" *ngFor=\"let delearData of searchData\">\n          <p *ngIf=\"data?.request_type=='dealer'\" tappable (click)=\"fillDelearName(delearData,data)\">{{delearData?.dealer_code}}</p>\n          <p *ngIf=\"data?.request_type=='officer'\" tappable (click)=\"fillDelearName(delearData,data)\">{{delearData?.full_name}}</p>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"showDelearList==true && data?.type=='text' && data.call_api==1 && data.request_type=='officer'\" class=\"themeCard delearList\" >\n        <div class=\"delearText\" *ngFor=\"let item of searchData\">\n          <p tappable (click)=\"fillDelearName(item,data)\">{{item?.full_name}}</p>\n        </div>\n      </div> -->\n      <ion-list *ngIf = \"data?.type == 'radio'\">\n        <!-- [(ngModel)]=\"data.answer\" -->\n        <ion-radio-group [value]=\"data?.answer\">\n          <ion-list-header>\n            <ion-label class = \"radioType\">\n              {{data?.label}} <sup *ngIf=\"data?.is_mandatory==1\">*</sup>\n            </ion-label>\n          </ion-list-header>\n          <ion-item [disabled]=\"data?.is_editable==0\" lines = \"none\" *ngFor = \"let item of data?.option; let subOptInd=index\" \n          (click)=\"radioGroupChange($event, item, data)\">  \n          <!-- [(ngModel)]=\"item.value\"           -->\n            <ion-radio [value]=\"item?.value\" name=\"{{item?.label}}\"  ></ion-radio>\n            <ion-label>&nbsp;{{item?.label}}  </ion-label>\n          </ion-item>\n        </ion-radio-group>\n\n        <ion-row class=\"ion-align-items-center\" >\n          <ion-col *ngFor = \"let img of data?.imgArr;let k=index;\" class=\"ion-text-center ion-padding\" size-xl=\"12\" size-md=\"12\" size-xs=\"12\" >\n            <div *ngIf=\"img?.type=='image'\">\n              <div *ngIf=\"img?.answer==''\" class = \"card\" >   \n                <ion-row>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px;\">\n                      {{img?.label}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <!-- *ngIf=\"!platform?.is('cordova')\" -->\n                     <!--  -->\n                    <!-- <ion-button *ngIf=\"platform?.is('cordova')\" class=\"ionic_btn butt1\" (click)=\"selectImage(img)\">{{img?.btn_text}}</ion-button> -->\n                    <ion-button  class=\"ionic_btn butt1\" (click)=\"openSelectImageOpt(img)\">{{img?.btn_text}}</ion-button>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <br>\n              <div *ngIf=\"img?.answer!=''\"  >\n                <div class=\"clsoeIcon\" *ngIf=\"RegistrationType?.request_page == 'home' || RegistrationType?.request_page == 'dealer' || RegistrationType?.request_page == 'officer'\n                || RegistrationType?.request_page == 'account_detail'\"><ion-icon name=\"close\" (click)=\"removeImage(img)\"></ion-icon> </div>\n                <img [src]=\"img?.answer\" class = \"card1\" >\n              </div>\n            </div>\n            <div *ngIf=\"img?.type=='dob'\">\n              <ion-item>\n                <ion-label position=\"stacked\">{{img?.label}}<sup *ngIf=\"img?.isMandatory==1\">*</sup></ion-label>\n                <ion-datetime displayFormat=\"MMM DD YYYY\"  [disabled]=\"img?.is_editable==0\" placeholder=\"{{img?.placeholder}}\" [(ngModel)]=\"img.answer\"></ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        </ion-list>\n        <!-- [compareWith]=\"compareFn\" -->\n        <ion-item *ngIf = \"data?.type == 'select'\" class=\"w100\">\n          <!-- <ion-select  [disabled]=\"data?.is_editable==0\"  (ionChange)=\"checkValue($event,data )\"   interface=\"popover\" placeholder=\"{{data?.placeholder}}\" class=\"w100\" >\n              <ion-select-option *ngFor=\"let opt of data?.option\" [value]=\"opt\"  class=\"w100\"> {{opt.label}}\n\n              </ion-select-option>\n\n          </ion-select> -->\n\n\n          <ion-select  [disabled]=\"data?.is_editable==0\"  [(ngModel)]=\"data.answer\"   (ionChange)=\"checkValue($event,data )\"  interface=\"popover\" placeholder=\"{{data?.placeholder}}\" class=\"w100\" >\n            <ion-select-option *ngFor=\"let opt of data?.option\" value=\"{{opt.auto_id}}\" >{{opt.label}}\n            </ion-select-option>\n     </ion-select>\n\n\n\n        </ion-item>\n        <ion-row *ngIf=\"data?.type == 'select' && showOther==1\">\n          <ion-col *ngFor=\"let item of SubOptionData?.sub_option\">\n              <ion-input #input *ngIf=\"item?.type=='text'\" [disabled]=\"item?.is_editable==0\" type = \"text\" placeholder=\"{{item?.placeholder}}\" [(ngModel)]=\"item.answer\" (ngModelChange)='checkInput(item,item.answer)'></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- <div >\n        </div> -->\n\n\n  </ion-col>\n  </ion-row>\n\n\n\n\n\n\n </div>\n\n<br>\n   <ion-row *ngIf=\"formData && formData?.length>=1\">\n     <ion-col *ngIf=\"RegistrationType?.request_page == 'home' || RegistrationType?.request_page == 'dealer'\n     || RegistrationType?.request_page == 'account_detail' || RegistrationType?.request_page == 'officer'\">\n       <ion-button class=\"ionic_btn\" tappable (click)='back()'>Back</ion-button>\n     </ion-col>\n    <ion-col *ngIf=\"LoginStoredType =='login' && RegistrationType?.request_page != 'dealer' && RegistrationType?.request_page != 'officer'\n    && RegistrationType?.request_page != 'account_detail' && RegistrationType?.request_page != 'pending_customer'\n    && RegistrationType?.request_page != 'active_customer' && RegistrationType?.request_page != 'block_customer' \n    && RegistrationType.request_page != 'rejected_customer' && RegistrationType?.request_page != 'home'\" >\n      <ion-button  class=\"ionic_btn\" tappable (click)=\"submitFunCall('skip')\">skip</ion-button>\n     </ion-col>\n     <ion-col  *ngIf=\"RegistrationType?.request_page == 'home' || RegistrationType?.request_page == 'dealer'\n    || RegistrationType?.request_page == 'account_detail' || RegistrationType?.request_page == 'officer'\">\n      <ion-button  class=\"ionic_btn\" tappable (click)=\"Submit('save')\">Save</ion-button>\n     </ion-col>\n     <ion-col  *ngIf=\"RegistrationType?.request_page == 'pending_customer'\">\n      <ion-button *ngIf=\"RegistrationType?.request_page != 'active_customer'\" class=\"ionic_btn\" tappable (click)=\"profileView('rejected')\">Reject</ion-button>\n       </ion-col>\n       <ion-col  *ngIf=\"RegistrationType?.request_page == 'active_customer'\">\n        <ion-button class=\"ionic_btn\" tappable (click)=\"profileView('block')\">Block</ion-button>\n      </ion-col>\n      <ion-col  *ngIf=\"RegistrationType?.request_page == 'pending_customer' \n      || RegistrationType?.request_page == 'rejected_customer'\">\n        <ion-button class=\"ionic_btn\" tappable (click)=\"profileView('approve')\">Approve</ion-button>\n       </ion-col>\n       <ion-col  *ngIf=\"RegistrationType?.request_page == 'block_customer'\">\n        <ion-button class=\"ionic_btn\" tappable (click)=\"profileView('approve')\">Activate</ion-button>\n       </ion-col>\n  </ion-row>\n      </ion-col>\n  </ion-row>\n    \n</ion-content>\n";
      /***/
    },

    /***/
    47674: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_RegistrationModule_registration_registration_module_ts-es5.js.map