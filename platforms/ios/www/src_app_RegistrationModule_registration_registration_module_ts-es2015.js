(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_registration_registration_module_ts"],{

/***/ 29591:
/*!********************************************************************************!*\
  !*** ./src/app/RegistrationModule/registration/registration-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageRoutingModule": function() { return /* binding */ RegistrationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.page */ 62537);




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationPage
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ 61683:
/*!************************************************************************!*\
  !*** ./src/app/RegistrationModule/registration/registration.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageModule": function() { return /* binding */ RegistrationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-routing.module */ 29591);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page */ 62537);







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageRoutingModule
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationPage]
    })
], RegistrationPageModule);



/***/ }),

/***/ 62537:
/*!**********************************************************************!*\
  !*** ./src/app/RegistrationModule/registration/registration.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPage": function() { return /* binding */ RegistrationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration.page.html */ 9442);
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page.scss */ 35570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 59865);
/* harmony import */ var _model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model-camera/model-camera.page */ 39182);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/constant */ 56544);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/local-storage.service */ 18345);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);






// import { WebView } from '@ionic-native/ionic-webview/ngx';










const STORAGE_KEY = 'my_images';
let RegistrationPage = class RegistrationPage {
    constructor(camera, actionSheetController, file, route, platform, filePath, modalCtrl, sendData, toastController, apiService, transfer, zone, localStorage, storage, sanitizer) {
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
        this.onetime = 0;
        // var url =URLS.baseUrl+URLS.imageUploadUrl;
        // console.log("twerer",url)
    }
    removeImage(arr) {
        arr.answer = '';
        // arr.imgArr.splice(index, 1);  
        console.log('arr', arr);
    }
    compareFn(e1, e2) {
        console.log('==> e1', e1);
        console.log('==> e2', e2);
        if (e2 && e2 != undefined && e2 != null) {
            return e1 && e2 ? e1.auto_id == e2 : e1 == e2;
        }
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.RegistrationType = this.sendData.registrationType;
            // console.log('1',this.RegistrationType);
            if (this.RegistrationType.frompage == 'back') {
                this.reId = this.sendData.alldata;
                this.ngOnInit();
            }
        }, 1000);
    }
    ngOnInit() {
        console.log('currentDate ', this.currentDate);
        this.RegistrationType = this.sendData.registrationType;
        console.log('1', this.RegistrationType);
        if (this.RegistrationType.request_page == 'dealer' || this.RegistrationType.request_page == 'officer' || this.RegistrationType.request_page == 'account_detail'
            || this.RegistrationType.request_page == 'pending_customer' || this.RegistrationType.request_page == 'active_customer'
            || this.RegistrationType.request_page == 'block_customer' || this.RegistrationType.request_page == 'rejected_customer') {
            this.reId = this.sendData.alldata;
        }
        else {
            this.reId = '';
        }
        this.localStorage.getStorage().then(storedData => {
            this.LoginStoredType = storedData.type;
            console.log('this.LoginStoredType', this.LoginStoredType);
        });
        this.registaionForm();
        console.log('RegistrationType', this.RegistrationType);
    }
    // checkInput(data, searchString) {
    //   if (data.call_api == 1) {
    //     if (searchString.toString().length >= data.min_value) {
    //       // this.deelarShow = data.request_type;
    //       this.searchApiCall(data, searchString);
    //     } else {
    //       this.searchData = [];
    //     }
    //   }
    // }
    checkInput(data, ev) {
        let searchString = ev;
        console.log('checkInput data==> ', data);
        console.log('checkInput searchString==> ', searchString);
        console.log('ev==> ', ev);
        // if(ev==null ||ev==undefined){
        //   ev="";
        // }
        if (data.call_api == 1) {
            if (searchString.toString().length >= data.min_value) {
                // this.deelarShow = data.request_type
                console.log("checkInput searchData0==", searchString);
                this.searchApiCall(data, searchString, 0);
            }
            else {
                console.log("checkInput searchData1==", searchString);
                this.searchData = [];
            }
        }
    }
    back() {
        this.zone.run(() => {
            if (this.RegistrationType.request_page == 'account_detail' || this.RegistrationType.request_page == 'officer') {
                this.route.navigate(['/tabs/home']);
            }
            else if (this.RegistrationType.request_page == 'dealer') {
                this.route.navigate(['/tabs/customer-allocation']);
                //this.route.navigateByUrl("/tabs/customer-allocation");
            }
            else {
                this.storage.remove('allStoreData');
                this.apiService.generateDeviceId();
                this.apiService.generateFCMToken();
                this.maintance();
                // this.route.navigate(['./login']);
            }
        });
    }
    maintance() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.localStorage.getStorage().then((storedData) => {
                console.log('localStorage storedData storedData000', storedData);
            });
            this.zone.run(() => {
                let apiKey = {};
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.maintanceUrl, apiKey).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    if (result.success == 1 || result.success == '1') {
                        this.maintanceData = result;
                        yield this.localStorage.setStorage('maintainanceData', result);
                        yield this.localStorage.getStorage().then((storedData) => {
                            console.log('localStorage storedData storedData', storedData);
                            if (storedData && storedData.allStoreData != undefined) {
                                // this.route.navigate(['/tabs']);
                                console.log('localStorage storedData', storedData);
                                // window.location.assign('/tabs');
                                this.route.navigateByUrl('tabs');
                            }
                            else {
                                console.log('localStorage storedData maintance', storedData);
                                this.maintanceData = storedData.maintainanceData;
                                this.route.navigate(['/login']);
                            }
                        });
                        if (result.data.is_down == 1 || result.data.is_down == '1') {
                            this.sendData.myParam = result.maintainence_data;
                            this.route.navigate(["/maintenance"]);
                            //for maintance redirection page
                        }
                    }
                    else {
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }), err => {
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        });
    }
    fillDelearName(delearData, data) {
        // this.dealersval=true;
        console.log("checkInput selected delearData==", delearData);
        console.log("checkInput selected data==", data);
        this.zone.run(() => {
            this.showDelearList = false;
            // this.searchselected=delearData.dealer_code;
            if (this.showDelearList == false) {
                // alert(this.showDelearList);
                // this.showSubemitButton=true;
                if (data.request_type == 'dealer') {
                    data.answer = delearData.dealer_code;
                    data.new_answer = delearData.auto_id;
                    console.log(' data.new_answe', data.new_answer);
                }
                else {
                    data.answer = delearData.full_name;
                    data.new_answer = delearData.auto_id;
                    console.log(' data.new_answe', data.new_answer);
                }
            }
            else {
            }
        });
    }
    searchApiCall_pincode(data, searchString, autofill) {
        this.zone.run(() => {
            let apiKey = {
                "search_str": searchString,
                "request_type": data.request_type,
            };
            console.log('searchApiCall_pincode', apiKey.search_str.toString().length);
            this.apiService.apiCallWithLoginToken(data.api_url.trim(), apiKey).subscribe((result) => {
                if (result.success == 1) {
                    this.showDelearList = true;
                    this.searchData = result.data;
                    console.log('searchApiCall_pincode this.searchData==> ', this.searchData);
                    console.log('searchApiCall_pincode this.formData==> ', this.formData);
                    for (let i = 0; i < this.formData.length; i++) {
                        for (let j = 0; j < this.formData[i].data.length; j++) {
                            console.log('searchApiCall_pincode pin type', this.formData[i].data[j].id);
                            if (this.formData[i].data[j].id == 'pin_code') {
                                let index = this.searchData.findIndex(item => item.pin_code === this.formData[i].data[j].answer);
                                // alert("11")
                                console.log('searchApiCall_pincode pin code index ==>', index);
                                if (index >= 0) {
                                    console.log('searchApiCall_pincode searchData ==>', this.searchData[index]);
                                    this.pin_autoid = this.searchData[index].auto_id;
                                    // this.pin_autoid
                                    console.log('searchApiCall_pincode pin_autoid ==>', this.pin_autoid);
                                }
                                else {
                                }
                            }
                            if (this.formData[i].data[j].id == 'dealer_code') {
                                this.showDelearList = false;
                                let index1 = this.searchData.findIndex(item => item.dealer_code === this.formData[i].data[j].answer);
                                console.log('searchApiCall_pincode pin code index ==>', index1);
                                if (index1 >= 0) {
                                    console.log('searchApiCall_pincode searchData ==>', this.searchData[index1]);
                                    this.dealer_autoid = this.searchData[index1].auto_id;
                                    console.log('searchApiCall_pincode pin_autoid ==>', this.pin_autoid);
                                }
                                else {
                                }
                            }
                        }
                    }
                }
                else {
                    this.showDelearList = false;
                    this.searchData = [];
                    // data.answer ='';
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    searchApiCall(data, searchString, autofill) {
        console.log('1122==> ', data);
        console.log('11==> ', JSON.stringify(data.field_api_key));
        console.log('array==> ', this.formData);
        this.zone.run(() => {
            let apiKey = {
                "search_str": searchString,
                "request_type": data.request_type,
            };
            console.log('lengthBABA', apiKey.search_str.toString().length);
            this.apiService.apiCallWithLoginToken(data.api_url.trim(), apiKey).subscribe((result) => {
                if (result.success == 1) {
                    this.showDelearList = true;
                    this.searchData = result.data;
                    console.log('this.searchData==> ', this.searchData);
                    console.log('this.formData==> ', this.formData);
                    // data.answer=this.searchData[0].auto_id;
                    this.zone.run(() => {
                        for (let i = 0; i < this.searchData.length; i++) {
                            for (var property in this.searchData[i]) {
                                console.log('property', property);
                                for (let j = 0; j < this.formData.length; j++) {
                                    for (let k = 0; k < this.formData[j].data.length; k++) {
                                        //  console.log('shi pro val1==> ', this.formData[j].data[k]);
                                        console.log('shi pro==> ', property);
                                        console.log('this.formData[j].data[k].id', this.formData[j].data[k].id);
                                        // if(this.onetime==0){
                                        if ((this.formData[j].data[k].id == property) && property != 'auto_id' && property != 'pin_code') {
                                            console.log('shi pro val==> ', this.searchData[i][property]);
                                            if (this.formData[j].data[k].id != 'dealer_code' && autofill == 0) {
                                                this.formData[j].data[k].answer = this.searchData[i][property];
                                            }
                                            if (this.formData[j].data[k].id == 'dealer_code' && autofill == 1) {
                                                this.formData[j].data[k].answer = this.searchData[i][property];
                                            }
                                        }
                                        if (this.formData[j].data[k].id == 'pin_code' && property == 'pin_code') {
                                            // if(this.formData[j].data[k].id == 'pin_code' && property=='pin_code' ){
                                            console.log('pincode 000000000000 ', this.searchData[i][property]);
                                            // this.formData[j].data[k].showAns=this.searchData[i].auto_id;
                                            this.pin_autoid = this.searchData[i].auto_id;
                                            // }
                                            console.log('pincode ', this.searchData[i][property]);
                                        }
                                        if (this.formData[j].data[k].id == 'dealer_code' && property == 'dealer_code') {
                                            console.log("finalArray0==", this.formData);
                                            console.log("finalArray000==", this.formData[j].data[k].id);
                                            console.log("finalArray1==", this.searchData);
                                            console.log("finalArray2==", this.searchData[i].auto_id);
                                            this.dealer_autoid = this.searchData[i].auto_id;
                                            // alert(9877)
                                            console.log("finalArray3==", this.formData);
                                        }
                                        // }
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
                }
                else {
                    this.showDelearList = false;
                    this.searchData = [];
                    // data.answer ='';
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
        // }
    }
    radioGroupChange(ev, obj, data) {
        console.log('ev==>', ev);
        console.log('obj==>', obj);
        console.log('data==>', data);
        data.answer = obj.value;
        if (data.is_sub_option == '1') {
            data.imgArr = obj.sub_option;
        }
        else {
            data.imgArr = [];
        }
    }
    checkValue(ev, data) {
        console.log('select opt value==> ', ev.target.value);
        // console.log('select opt tagName==> ', ev.target.value.type_name);
        // console.log('select opt is_sub_option==> ', ev.target.value.is_sub_option);
        data.answer = ev.target.value;
        var index = data.option.findIndex(p => p.auto_id == data.answer);
        // console.log('select opt index==> ', index);
        // console.log('select opt index11==> ', data.option[index]);
        if (index >= 0 && data.option[index].type_name == 'Other') {
            this.showOther = data.option[index].is_sub_option;
            this.SubOptionData = data.option[index];
            console.log('select opt showOther==> ', this.SubOptionData);
        }
        else {
            this.showOther = 0;
            this.SubOptionData = [];
        }
        console.log('update select opt data==> ', data);
        return;
        // data.answer = ev.optionId;
        data.answer = ev.target.value;
        if (ev.target.value.type_name == "Other") {
            this.showOther = ev.target.value.is_sub_option;
            this.SubOptionData = ev.target.value;
        }
        else {
            this.showOther = 0;
            this.SubOptionData = [];
        }
        // console.log('form data select opt==> ', this.formData);
        // console.log('select opt==> ', ev.target.value);
        // console.log('select opt val==> ', ev.target.value.auto_id);
    }
    // DataURIToBlob(dataURI: string) {
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
    pickImage(sourceType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // Create options for the Camera Dialog
            const options = {
                quality: 40,
                cameraDirection: 1,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: sourceType,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            // Get the data of an image
            this.camera.getPicture(options).then((imagePath) => {
                console.log("imagePath==", imagePath);
                this.currentName = imagePath;
                let name = this.currentName.split("/"); // code for fetching file name
                this.fileName = name[name.length - 1];
                // this.previewImagePath=this.win.Ionic.WebView.convertFileSrc(imagePath);
                if (this.platform.is("ios")) {
                    let tempImg = this.sanitizer.bypassSecurityTrustResourceUrl(this.win.Ionic.WebView.convertFileSrc(imagePath));
                    console.log("ios imagePath==", tempImg);
                    this.previewImagePath = tempImg;
                    console.log("ios previewImagePath==", this.previewImagePath);
                }
                else {
                    this.previewImagePath = this.win.Ionic.WebView.convertFileSrc(imagePath);
                }
                this.uploadImageonserver();
            }, (err) => {
                console.log("imagePath error==", err);
            });
        });
    }
    uploadImageonserver() {
        // this.apiServices.showLoader();
        this.localStorage.getStorage().then(dataFromStorage => {
            // this.apiServices.getStorege('allStoreData').then(dataFromStorage => {
            // var url =URLS.baseUrl+'Profile/upload_file.php';
            var url = src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.baseUrl + src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.imageUploadUrl;
            console.log("url", url);
            let myheaders = new Headers();
            myheaders.append('Content-Type', 'application/json');
            // myheaders.append('Authorization', dataFromStorage.loginStorage.loginToken);
            var targetPath = this.currentName; // aply only for imagepicker checking
            let options = {
                fileKey: "file",
                fileName: this.fileName,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                // headers: {"Authorization":dataFromStorage.loginStorage.loginToken },
                // params: {"file":targetPath,"flag":"ContactUs","clientId":APP_CONFIG.clientId,
                // "appVersion":APP_CONFIG.appVersion,"device":this.apiServices.device,
                // "employeeId":dataFromStorage.loginStorage.employeeId,"deviceId":dataFromStorage.deviceId}
                params: {
                    'file': targetPath, "client_id": src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.APP_CONFIG.clientId, "device": this.apiService.device, "device_id": dataFromStorage.deviceId,
                    "app_version": src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.APP_CONFIG.app_version, "employee_id": dataFromStorage.allStoreData.user_id,
                    "user_type": dataFromStorage.allStoreData.employee_type,
                    "media_type": '1', "flag_type": this.currentObj.flag_type, "request_for": this.reId, "request_page": this.RegistrationType.request_page
                }
            };
            console.log("options", options);
            console.log("passing key==", JSON.stringify(options));
            // console.log("url==", URLS.baseUrl+''+url);
            // this.apiServices.startLoader().then(()=>{
            const fileTransfer = this.transfer.create();
            fileTransfer.upload(targetPath, url, options).then(res => {
                console.log("server res==", res);
                let data = JSON.parse(res.response);
                console.log("response==", res);
                console.log("response22==", data);
                if (data.success == 1) {
                    // this.apiServices.showToastMessage(data.message, 'top', 3000, 'greenBg');
                    // this.apiServices.hideLoader();
                }
                else {
                    console.log("message key==", data.message);
                    // this.apiServices.showToastMessage(data.message, 'top', 3000, 'redBg');
                    // this.apiServices.hideLoader();
                }
            }, err => {
                console.log("err==", err);
                // this.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                // this.apiServices.hideLoader();
                if (err.http_status == 200) { }
                // this.apiServices.commonToast(JSON.stringify(err)  , 3000, 'top', 'redBgToast');
                // this.apiServices.stopLoader();
            });
            // })
        });
    }
    // async upload(imagepass,nameoffile) {
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
    selectImage(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('selectImage cordova');
            this.currentObj = obj;
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    //  back(){
    //   this.route.navigate(['./mobile']);
    //  }
    Submit(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.emptyFieldFound = 0;
            console.log("this.pin_autoid", this.pin_autoid);
            console.log('field full==> ', this.formData);
            for (let j = 0; j < this.formData.length; j++) {
                for (let k = 0; k < this.formData[j].data.length; k++) {
                    if (this.formData[j].data[k].is_mandatory == 1 && this.formData[j].data[k].answer == "") {
                        this.emptyFieldFound = 1;
                        console.log('field==> ', this.formData[j].data[k]);
                        console.log('field==> ', this.formData[j].data[k].answer);
                    }
                    if (this.formData[j].data[k].is_sub_option == 1) {
                        let index = this.formData[j].data[k].option.findIndex(p => p.value == this.formData[j].data[k].answer);
                        console.log('field1 yoyo index==> ', index);
                        console.log('field1 yoyo==> ', this.formData[j].data[k].option[index]);
                        if (index >= 0) {
                            if (this.formData[j].data[k].option[index].is_mandatory == 1) {
                                this.emptyFieldFound = 1;
                                console.log('field1==> ', this.formData[j].data[k].option[index]);
                                console.log('field1==> ', this.formData[j].data[k].option[index].answer);
                            }
                            if (this.formData[j].data[k].option[index].is_sub_option == 1) {
                                for (let m = 0; m < this.formData[j].data[k].option[index].sub_option.length; m++) {
                                    if (this.formData[j].data[k].option[index].sub_option[m].isMandatory == 1 && this.formData[j].data[k].option[index].sub_option[m].answer == "") {
                                        this.emptyFieldFound = 1;
                                        console.log('field2==> ', this.formData[j].data[k].option[index].sub_option[m]);
                                        console.log('field2==> ', this.formData[j].data[k].option[index].sub_option[m].answer);
                                    }
                                }
                            }
                        }
                        else {
                            for (let l = 0; l < this.formData[j].data[k].option.length; l++) {
                                if (this.formData[j].data[k].option[l].is_mandatory == 1) {
                                    this.emptyFieldFound = 1;
                                    console.log('field else1==> ', this.formData[j].data[k].option[l]);
                                    console.log('field else11==> ', this.formData[j].data[k].option[l].answer);
                                }
                                if (this.formData[j].data[k].option[l].is_sub_option == 1) {
                                    // let index = this.formData[j].data[k].option[l].sub_option.findIndex(p => p.value == this.formData[j].data[k].answer);
                                    for (let m = 0; m < this.formData[j].data[k].option[l].sub_option.length; m++) {
                                        if (this.formData[j].data[k].option[l].sub_option[m].isMandatory == 1 && this.formData[j].data[k].option[l].sub_option[m].answer == "") {
                                            this.emptyFieldFound = 1;
                                            console.log('field else12==> ', this.formData[j].data[k].option[l].sub_option[m]);
                                            console.log('field else12==> ', this.formData[j].data[k].option[l].sub_option[m].answer);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (j == this.formData.length - 1) {
                    console.log('this.emptyFieldFound==> ', this.emptyFieldFound);
                    if (this.emptyFieldFound == 1 || this.searchData == []) {
                        this.apiService.showToastMessage("Please fill all mandatory fields", 'top', 3000, 'redBg');
                        return;
                    }
                    else {
                        for (let j = 0; j < this.formData.length; j++) {
                            for (let k = 0; k < this.formData[j].data.length; k++) {
                                if (this.formData[j].data[k].id == 'pin_code') {
                                    this.formData[j].data[k].answer = this.pin_autoid;
                                }
                                else if (this.formData[j].data[k].id == 'dealer_code') {
                                    console.log("this.dealer_autoid", this.dealer_autoid);
                                    if (this.formData[j].data[k].is_editable == 'false' || this.formData[j].data[k].is_editable == false) {
                                        this.formData[j].data[k].answer = this.formData[j].data[k].auto_dealer_id;
                                    }
                                    else {
                                        this.formData[j].data[k].answer = this.dealer_autoid;
                                    }
                                }
                            }
                        }
                        this.submitFunCall(type);
                        // alert("Shivanshi ma'am api to hit karo, sab fields fill ho gyi h");
                    }
                }
            }
        });
    }
    submitFunCall(type) {
        this.zone.run(() => {
            let apiKey = {
                "save_data": this.formData,
                "request_for": this.reId,
                "request_page": this.RegistrationType.request_page,
                "save_type": type
            };
            console.log('login data response', apiKey);
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.registrationFormSubmitUrl, apiKey).subscribe((result) => {
                console.log('logout data response', result);
                if (result.success == 1) {
                    if (result.request_page == 'dealer') {
                        this.sendData.alldata = {
                            "requestFor": this.reId,
                            "requestPage": result.request_page
                        };
                        this.route.navigate(['/profile-upload']);
                    }
                    else {
                        this.route.navigate(['/tabs']);
                    }
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    openSelectImageOpt(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('selectImage browser');
            this.currentObj = obj;
            if (this.showImgOption == false) {
                this.showImgOption = true;
                let blkankdata = { "nulldata": "blank", flag: obj.flag_type };
                const modal = yield this.modalCtrl.create({
                    component: _model_camera_model_camera_page__WEBPACK_IMPORTED_MODULE_5__.ModelCameraPage,
                    componentProps: { data: blkankdata },
                    cssClass: 'my-custom-class'
                });
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned !== null) {
                        this.dataReturned = dataReturned.data.data;
                        // this.currentObj.answer = this.dataReturned.data;      
                        console.log(" this.dataReturned:", this.dataReturned);
                        // this.userImg = this.dataReturned.data;
                        this.currentObj.answer = this.dataReturned.filebaseUrl;
                        if (this.currentObj.answer == undefined) {
                            this.currentObj.answer = '';
                        }
                        console.log("data:", this.currentObj.answer);
                        //alert('Modal Sent Data :'+ dataReturned);
                    }
                    else {
                        this.currentObj.answer = '';
                    }
                });
                return yield modal.present();
            }
            else {
                this.showImgOption = false;
            }
        });
    }
    captureImg(event) {
        // console.log('event1==>', event);
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
    registaionForm() {
        this.zone.run(() => {
            let apiKey = {
                "request_page": this.RegistrationType.request_page,
                "request_for": this.reId
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.registrationFormUrl, apiKey).subscribe((result) => {
                if (result.success == 1) {
                    this.formValue = result;
                    this.formData = result.data;
                    console.log('this.formValue==> ', this.formValue);
                    console.log('this.formData==> ', this.formData);
                    for (let i = 0; i < this.formData.length; i++) {
                        for (let j = 0; j < this.formData[i].data.length; j++) {
                            if (this.formData[i].data[j].type == 'radio') {
                                for (let k = 0; k < this.formData[i].data[j].option.length; k++) {
                                    if (this.formData[i].data[j].answer == this.formData[i].data[j].option[k].value && this.formData[i].data[j].option[k].is_sub_option == 1) {
                                        this.formData[i].data[j].imgArr = this.formData[i].data[j].option[k].sub_option;
                                    }
                                }
                            }
                            if (this.formData[i].data[j].id == 'pin_code') {
                                if (this.formData[i].data[j].answer != '') {
                                    this.searchApiCall_pincode(this.formData[i].data[j], this.formData[i].data[j].answer, 1);
                                }
                            }
                            //new code added
                            if (this.formData[i].data[j].id == 'dealer_code') {
                                if (this.formData[i].data[j].answer != '') {
                                    this.searchApiCall_pincode(this.formData[i].data[j], this.formData[i].data[j].answer, 1);
                                }
                            }
                        }
                    }
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    // chandan work start
    profileView(id) {
        this.zone.run(() => {
            let apiKey = {
                "request_for": this.reId,
                "request_status": id
            };
            this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__.URLS.UpdateRegistrationUrl, apiKey).subscribe((result) => {
                console.log('UpdateRegistrationUrl : ', result);
                if (result.success == 1) {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.route.navigate(['./customer-reg']);
                    // this.formValue = result;
                    // this.formData = result.data;
                }
                else {
                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__.DataTransferService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__.FileTransfer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer }
];
RegistrationPage.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['input',] }]
};
RegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationPage);



/***/ }),

/***/ 35570:
/*!************************************************************************!*\
  !*** ./src/app/RegistrationModule/registration/registration.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".para {\n  color: var(--headerColor);\n}\n\n.head {\n  background-color: var(--reedeemColor);\n}\n\n.para2 {\n  font-size: 15px;\n}\n\n.dateDiv {\n  padding: 10px 0px 0px 0px;\n  border-bottom: 1px solid rgba(84, 83, 83, 0.6) !important;\n  font-size: 0.9rem !important;\n  font-weight: 500 !important;\n  --padding-bottom: 2px !important;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(84, 83, 83, 0.6) !important;\n  /* margin: 0 0px; */\n  color: var(--text-light2);\n  font-size: 0.9rem !important;\n  font-weight: 500 !important;\n  --padding-bottom: 2px !important;\n}\n\n.boundary {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n  padding: 0;\n  --background: white;\n}\n\n.colu {\n  padding: 15px;\n}\n\n.colum {\n  padding: 13px 80px 0px;\n}\n\n.card {\n  height: 108px;\n  border: dotted;\n  border-color: lightgrey;\n}\n\n.card1 {\n  width: 75%;\n  height: 108px;\n  border: dotted;\n  border-color: lightgrey;\n}\n\n.ionic_btn {\n  display: block;\n  margin: auto;\n  text-transform: none;\n  text-transform: initial;\n  --border-radius: 20px;\n  width: 122px;\n  font-size: 13px;\n  --background: #B01D22;\n  height: 32px;\n}\n\nion-list {\n  padding: 0;\n}\n\n.radioType {\n  font-size: 17px;\n}\n\n.butt1 {\n  padding-top: 8px;\n}\n\n.image-upload > input {\n  display: none;\n}\n\n.rdio {\n  padding: 0px;\n}\n\nion-list {\n  margin-top: -14px;\n  margin-left: -14px;\n}\n\n.categoryName {\n  font-size: 18px;\n  font-weight: bold;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\nion-select .select-icon .select-icon-inner {\n  color: red !important;\n  opacity: 1 !important;\n}\n\nsup {\n  font-size: 15px;\n  color: var(-headerColor);\n  font-weight: bold;\n  color: var(--headerColor);\n  top: -2px !important;\n}\n\n.clsoeIcon {\n  text-align: end;\n  position: absolute;\n  right: 40px;\n  top: 4px;\n  left: 5px;\n  font-size: 24px;\n  /* bottom: 105px; */\n  bottom: 0px;\n}\n\nion-label {\n  color: black;\n}\n\nion-input {\n  color: black;\n}\n\nion-select {\n  color: black;\n  --background:white;\n}\n\nion-datetime {\n  color: black;\n}\n\n.small {\n  width: 100px;\n  height: 50px;\n  text-align: right;\n}\n\n.small_p {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyx5QkFBQTtBQUVQOztBQURBO0VBQU8scUNBQUE7QUFLUDs7QUFKQTtFQUFPLGVBQUE7QUFRUDs7QUFQQTtFQUFTLHlCQUFBO0VBQTRCLHlEQUFBO0VBQTBELDRCQUFBO0VBQzNGLDJCQUFBO0VBQTRCLGdDQUFBO0FBY2hDOztBQWJBO0VBQ0kseURBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FBZ0JKOztBQWRBO0VBQ0ksbUNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFpQko7O0FBZkE7RUFDSSxhQUFBO0FBa0JKOztBQWZBO0VBQ0ksc0JBQUE7QUFrQko7O0FBaEJBO0VBRUksYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWtCSjs7QUFoQkE7RUFDTSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQW1CTjs7QUFqQkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBb0JKOztBQWxCQTtFQUNJLFVBQUE7QUFxQko7O0FBbkJBO0VBQ0ksZUFBQTtBQXNCSjs7QUFwQkE7RUFDSSxnQkFBQTtBQXVCSjs7QUFyQkE7RUFBcUIsYUFBQTtBQXlCckI7O0FBeEJBO0VBQ0ksWUFBQTtBQTJCSjs7QUF6QkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBNEJKOztBQXZCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQTBCSjs7QUF4QkE7RUFBWSxXQUFBO0VBQVksdUJBQUE7QUE2QnhCOztBQTNCUTtFQUFvQixxQkFBQTtFQUF3QixxQkFBQTtBQStCcEQ7O0FBNUJDO0VBQUksZUFBQTtFQUFnQix3QkFBQTtFQUF5QixpQkFBQTtFQUFrQix5QkFBQTtFQUEyQixvQkFBQTtBQW9DM0Y7O0FBN0JBO0VBQWUsZUFBQTtFQUNYLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWlDSjs7QUFoQ0k7RUFDSSxZQUFBO0FBbUNSOztBQWpDSTtFQUNJLFlBQUE7QUFvQ1I7O0FBbENJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBcUNSOztBQW5DSTtFQUNJLFlBQUE7QUFzQ1I7O0FBcENJO0VBQU8sWUFBQTtFQUFjLFlBQUE7RUFBYyxpQkFBQTtBQTBDdkM7O0FBekNJO0VBQVMsWUFBQTtBQTZDYiIsImZpbGUiOiJyZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmF7IGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7fVxuLmhlYWR7IGJhY2tncm91bmQtY29sb3I6dmFyKC0tcmVlZGVlbUNvbG9yKTt9XG4ucGFyYTJ7Zm9udC1zaXplOiAxNXB4O31cbi5kYXRlRGl2e3BhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7ICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg4NCwgODMsIDgzLCAwLjYpICFpbXBvcnRhbnQ7Zm9udC1zaXplOiAwLjkwcmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50Oy0tcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O31cbmlvbi1pbnB1dHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg4NCwgODMsIDgzLCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgLyogbWFyZ2luOiAwIDBweDsgKi9cbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgIGZvbnQtc2l6ZTogMC45MHJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cbi5ib3VuZGFyeXtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI2VmZWFlYTtcbiAgICBwYWRkaW5nOjA7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb2x1e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG59XG4uY29sdW17XG4gICAgcGFkZGluZzogMTNweCA4MHB4IDBweDtcbn1cbi5jYXJke1xuICAvLyAgd2lkdGg6MjUwcHg7XG4gICAgaGVpZ2h0OiAxMDhweDtcbiAgICBib3JkZXI6IGRvdHRlZDtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbn1cbi5jYXJkMXtcbiAgICAgIHdpZHRoOjc1JTtcbiAgICAgIGhlaWdodDogMTA4cHg7XG4gICAgICBib3JkZXI6IGRvdHRlZDtcbiAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xuICB9XG4uaW9uaWNfYnRue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDEyMnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLWJhY2tncm91bmQ6ICNCMDFEMjI7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuaW9uLWxpc3R7XG4gICAgcGFkZGluZzogMDtcbn1cbi5yYWRpb1R5cGV7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmJ1dHQxe1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uaW1hZ2UtdXBsb2FkPmlucHV0IHtkaXNwbGF5OiBub25lO31cbi5yZGlve1xuICAgIHBhZGRpbmc6MHB4O1xufVxuaW9uLWxpc3R7XG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLy8gaW9uLXNlbGVjdHtcbi8vICAgICBtYXJnaW4tdG9wOiAtMzZweDtcbi8vIH1cbi5jYXRlZ29yeU5hbWV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLXNlbGVjdCB7d2lkdGg6IDEwMCU7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLnNlbGVjdC1pY29ueyAgICBcbiAgICAgICAgLnNlbGVjdC1pY29uLWlubmVyIHtjb2xvciA6IHJlZCAhaW1wb3J0YW50OyBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7fVxuICAgIH1cbiAgfVxuIHN1cHtmb250LXNpemU6IDE1cHg7Y29sb3I6IHZhcigtaGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiB2YXIoIC0taGVhZGVyQ29sb3IpO3RvcDogLTJweCAhaW1wb3J0YW50O31cbi8vICAuZGVsZWFyTGlzdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTAwJTtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDo5O3BhZGRpbmc6MCAxMHB4O1xuLy8gICAgIC5kZWxlYXJUZXh0e21hcmdpbjowO1xuLy8gICAgICAgICBwe21hcmdpbjowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIGdhaW5zYm9ybztwYWRkaW5nOjhweCAwO2ZvbnQtc2l6ZToxNHB4O31cbi8vICAgICB9XG4vLyB9XG5cbi5jbHNvZUljb257ICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDQwcHg7XG4gICAgdG9wOiA0cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAvKiBib3R0b206IDEwNXB4OyAqL1xuICAgIGJvdHRvbTogMHB4O31cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGNvbG9yOmJsYWNrOyBcbiAgICB9XG4gICAgaW9uLXNlbGVjdHtcbiAgICAgICAgY29sb3I6YmxhY2s7IFxuICAgICAgICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gICAgfVxuICAgIGlvbi1kYXRldGltZXtcbiAgICAgICAgY29sb3I6YmxhY2s7IFxuICAgIH1cbiAgICAuc21hbGx7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDUwcHg7IHRleHQtYWxpZ246IHJpZ2h0O31cbiAgICAuc21hbGxfcHt3aWR0aDogMTAwcHg7fSJdfQ== */");

/***/ }),

/***/ 9442:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RegistrationModule/registration/registration.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"RegistrationType?.request_page == 'account_detail'\n                || RegistrationType?.request_page == 'pending_customer'\n                || RegistrationType?.request_page == 'active_customer' \n                || RegistrationType?.request_page == 'block_customer' \n                || RegistrationType.request_page == 'rejected_customer'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [ngClass]=\"{'content-bg':  platform?.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"12\" class=\"boundary1\">\n     <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src = \"assets/icon/Bandhan Logo.png\" class=\"small_p\">\n        </ion-col>\n         <ion-col class=\"col ion-text-end\" >\n          <img src = \"assets/icon/abc.png\" class=\"small\">\n         </ion-col>\n      </ion-row>\n      </ion-grid>\n    <ion-row>\n      <ion-col [size]=\"12\" *ngIf=\"formValue?.title\">\n        <p class=\"para ion-text-center\">{{formValue?.title}}</p>\n      </ion-col>\n      <ion-col [size]=\"12\" *ngIf=\"formValue?.sub_title\" class=\"head\" >\n        <p class= \"para2 ion-no-margin ion-text-center\">{{formValue?.sub_title}}</p>\n      </ion-col>\n    </ion-row>\n\n\n\n\n <div *ngFor=\"let formField of formData\" class=\"custom_container\">\n  <ion-row>\n    <ion-col >\n      <p class=\"categoryName\">{{formField?.category_name}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let data of formField?.data\" class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n      <ion-label *ngIf = \"data?.type != 'radio'\">\n       {{data?.label}} <sup *ngIf=\"data?.is_mandatory==1\">*</sup>\n      </ion-label>\n     \n      <ion-input #input *ngIf=\"data?.type=='text'\" id=\"{{data?.id}}\" [disabled]=\"data?.is_editable==0\" type = \"text\"\n       placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.answer\" (ngModelChange)='checkInput(data,data.answer)'></ion-input>\n     \n      <ion-input #input *ngIf=\"data?.type=='number'\" [disabled]=\"data?.is_editable==0\" type = \"tel\" maxlength=\"{{data.min_value}}\"\n      placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.showAns || data.answer\" (ngModelChange)='checkInput(data, $event)'></ion-input>\n      \n      <ion-input #input *ngIf=\"data?.type=='email'\" [disabled]=\"data?.is_editable==0\" type = \"email\" \n      placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.answer\" (ngModelChange)='checkInput(data,data.answer)'></ion-input>\n      <!-- <ion-input *ngIf=\"data?.type=='dob'\" [disabled]=\"data?.is_editable==0\" type =\"date\" placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.answer\" (ngModelChange)='checkInput(data,data.answer)'></ion-input> -->\n      <!-- MMM DD YYYY -->\n      <ion-datetime *ngIf=\"data?.type=='dob'\" class=\"dateDiv\" [disabled]=\"data?.is_editable==0\" max={{currentDate}}\n      displayFormat=\"MMM DD YYYY\" placeholder=\"{{data?.placeholder}}\" [(ngModel)]=\"data.answer\" ></ion-datetime>\n\n\n      <div *ngIf=\"(showDelearList==true) && (data?.type=='text') && (data?.call_api==1) && (data?.request_type=='dealer' || data?.request_type=='officer')\" class=\"themeCard delearList\" >\n        <div class=\"delearText\" *ngFor=\"let delearData of searchData\">\n          <p *ngIf=\"data?.request_type=='dealer'\" tappable (click)=\"fillDelearName(delearData,data)\">{{delearData?.dealer_code}}</p>\n          <p *ngIf=\"data?.request_type=='officer'\" tappable (click)=\"fillDelearName(delearData,data)\">{{delearData?.full_name}}</p>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"showDelearList==true && data?.type=='text' && data.call_api==1 && data.request_type=='officer'\" class=\"themeCard delearList\" >\n        <div class=\"delearText\" *ngFor=\"let item of searchData\">\n          <p tappable (click)=\"fillDelearName(item,data)\">{{item?.full_name}}</p>\n        </div>\n      </div> -->\n      <ion-list *ngIf = \"data?.type == 'radio'\">\n        <!-- [(ngModel)]=\"data.answer\" -->\n        <ion-radio-group [value]=\"data?.answer\">\n          <ion-list-header>\n            <ion-label class = \"radioType\">\n              {{data?.label}} <sup *ngIf=\"data?.is_mandatory==1\">*</sup>\n            </ion-label>\n          </ion-list-header>\n          <ion-item [disabled]=\"data?.is_editable==0\" lines = \"none\" *ngFor = \"let item of data?.option; let subOptInd=index\" \n          (click)=\"radioGroupChange($event, item, data)\">  \n          <!-- [(ngModel)]=\"item.value\"           -->\n            <ion-radio [value]=\"item?.value\" name=\"{{item?.label}}\"  ></ion-radio>\n            <ion-label>&nbsp;{{item?.label}}  </ion-label>\n          </ion-item>\n        </ion-radio-group>\n\n        <ion-row class=\"ion-align-items-center\" >\n          <ion-col *ngFor = \"let img of data?.imgArr;let k=index;\" class=\"ion-text-center ion-padding\" size-xl=\"12\" size-md=\"12\" size-xs=\"12\" >\n            <div *ngIf=\"img?.type=='image'\">\n              <div *ngIf=\"img?.answer==''\" class = \"card\" >   \n                <ion-row>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px;\">\n                      {{img?.label}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <!-- *ngIf=\"!platform?.is('cordova')\" -->\n                     <!--  -->\n                    <!-- <ion-button *ngIf=\"platform?.is('cordova')\" class=\"ionic_btn butt1\" (click)=\"selectImage(img)\">{{img?.btn_text}}</ion-button> -->\n                    <ion-button  class=\"ionic_btn butt1\" (click)=\"openSelectImageOpt(img)\">{{img?.btn_text}}</ion-button>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <br>\n              <div *ngIf=\"img?.answer!=''\"  >\n                <div class=\"clsoeIcon\" *ngIf=\"RegistrationType?.request_page == 'home' || RegistrationType?.request_page == 'dealer' || RegistrationType?.request_page == 'officer'\n                || RegistrationType?.request_page == 'account_detail'\"><ion-icon name=\"close\" (click)=\"removeImage(img)\"></ion-icon> </div>\n                <img [src]=\"img?.answer\" class = \"card1\" >\n              </div>\n            </div>\n            <div *ngIf=\"img?.type=='dob'\">\n              <ion-item>\n                <ion-label position=\"stacked\">{{img?.label}}<sup *ngIf=\"img?.isMandatory==1\">*</sup></ion-label>\n                <ion-datetime displayFormat=\"MMM DD YYYY\"  [disabled]=\"img?.is_editable==0\" placeholder=\"{{img?.placeholder}}\" [(ngModel)]=\"img.answer\"></ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        </ion-list>\n        <!-- [compareWith]=\"compareFn\" -->\n        <ion-item *ngIf = \"data?.type == 'select'\" class=\"w100\">\n          <!-- <ion-select  [disabled]=\"data?.is_editable==0\"  (ionChange)=\"checkValue($event,data )\"   interface=\"popover\" placeholder=\"{{data?.placeholder}}\" class=\"w100\" >\n              <ion-select-option *ngFor=\"let opt of data?.option\" [value]=\"opt\"  class=\"w100\"> {{opt.label}}\n\n              </ion-select-option>\n\n          </ion-select> -->\n\n\n          <ion-select  [disabled]=\"data?.is_editable==0\"  [(ngModel)]=\"data.answer\"   (ionChange)=\"checkValue($event,data )\"  interface=\"popover\" placeholder=\"{{data?.placeholder}}\" class=\"w100\" >\n            <ion-select-option *ngFor=\"let opt of data?.option\" value=\"{{opt.auto_id}}\" >{{opt.label}}\n            </ion-select-option>\n     </ion-select>\n\n\n\n        </ion-item>\n        <ion-row *ngIf=\"data?.type == 'select' && showOther==1\">\n          <ion-col *ngFor=\"let item of SubOptionData?.sub_option\">\n              <ion-input #input *ngIf=\"item?.type=='text'\" [disabled]=\"item?.is_editable==0\" type = \"text\" placeholder=\"{{item?.placeholder}}\" [(ngModel)]=\"item.answer\" (ngModelChange)='checkInput(item,item.answer)'></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- <div >\n        </div> -->\n\n\n  </ion-col>\n  </ion-row>\n\n\n\n\n\n\n </div>\n\n<br>\n   <ion-row *ngIf=\"formData && formData?.length>=1\">\n     <ion-col *ngIf=\"RegistrationType?.request_page == 'home' || RegistrationType?.request_page == 'dealer'\n     || RegistrationType?.request_page == 'account_detail' || RegistrationType?.request_page == 'officer'\">\n       <ion-button class=\"ionic_btn\" tappable (click)=\"back()\">Back</ion-button>\n     </ion-col>\n    <ion-col *ngIf=\"LoginStoredType =='login' && RegistrationType?.request_page != 'dealer' && RegistrationType?.request_page != 'officer'\n    && RegistrationType?.request_page != 'account_detail' && RegistrationType?.request_page != 'pending_customer'\n    && RegistrationType?.request_page != 'active_customer' && RegistrationType?.request_page != 'block_customer' \n    && RegistrationType.request_page != 'rejected_customer' && RegistrationType?.request_page != 'home'\" >\n      <ion-button  class=\"ionic_btn\" tappable (click)=\"submitFunCall('skip')\">skip</ion-button>\n     </ion-col>\n     <ion-col  *ngIf=\"RegistrationType?.request_page == 'home' || RegistrationType?.request_page == 'dealer'\n    || RegistrationType?.request_page == 'account_detail' || RegistrationType?.request_page == 'officer'\">\n      <ion-button  class=\"ionic_btn\" tappable (click)=\"Submit('save')\">Save</ion-button>\n     </ion-col>\n     <ion-col  *ngIf=\"RegistrationType?.request_page == 'pending_customer'\">\n      <ion-button *ngIf=\"RegistrationType?.request_page != 'active_customer'\" class=\"ionic_btn\" tappable (click)=\"profileView('rejected')\">Reject</ion-button>\n       </ion-col>\n       <ion-col  *ngIf=\"RegistrationType?.request_page == 'active_customer'\">\n        <ion-button class=\"ionic_btn\" tappable (click)=\"profileView('block')\">Block</ion-button>\n      </ion-col>\n      <ion-col  *ngIf=\"RegistrationType?.request_page == 'pending_customer' \n      || RegistrationType?.request_page == 'rejected_customer'\">\n        <ion-button class=\"ionic_btn\" tappable (click)=\"profileView('approve')\">Approve</ion-button>\n       </ion-col>\n       <ion-col  *ngIf=\"RegistrationType?.request_page == 'block_customer'\">\n        <ion-button class=\"ionic_btn\" tappable (click)=\"profileView('approve')\">Activate</ion-button>\n       </ion-col>\n  </ion-row>\n      </ion-col>\n  </ion-row>\n    \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_RegistrationModule_registration_registration_module_ts-es2015.js.map