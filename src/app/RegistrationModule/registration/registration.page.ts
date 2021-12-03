import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController, IonInput, ModalController, Platform, ToastController } from '@ionic/angular';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ModelCameraPage } from '../model-camera/model-camera.page';
import { ApiService } from 'src/app/provider/api.service';
import { APP_CONFIG, URLS } from 'src/assets/constant';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  @ViewChild('input') inputElement: IonInput;
  private win: any = window;
  currentDate: String = new Date().toISOString();
  files: any = [];
  croppedImagePath = "";
  imageData: any;
  showOther: number = 0;
  formValue: any;
  annDate: any;
  codeData: any = [];
  codeData1: any = [];
  codeData2: any = [];
  codeData3: any = [];
  codeData4: any = [];
  isLoading = false;
  formData: any = [];
  searchString: any;
  serchApi: any;
  searchData: any;
  RegistrationType: any;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  showImgOption: boolean = false;
  userImage: string | ArrayBuffer;
  currentObj: any;
  dataReturned: any;
  SubOptionData: any = [];
  showDelearList: boolean = false;
  emptyFieldFound: number=0;
  tempAns:any;
  reId:any
  empId: any;
  usrType: any;
  LoginStoredType: any;
  onetime:number=0;
  pin_autoid: any;
  dealer_autoid: any;
  fileName: any;
  currentName: any;
  data1: any;
  data2: string;
  previewImagePath:any;
  maintanceData: any;
  constructor(private camera:Camera,public actionSheetController:ActionSheetController,private storage:LocalStorageService ,
    private route:Router,public platform:Platform,private filePath: FilePath, public modalCtrl:ModalController, 
    private sendData: DataTransferService, public toastController: ToastController, public apiService: ApiService, 
    private transfer: FileTransfer,private zone: NgZone,public localStorage:LocalStorageService,private file:File,
    public sanitizer:DomSanitizer) {
      // var url =URLS.baseUrl+URLS.imageUploadUrl;
      // console.log("twerer",url)
  }

  removeImage(arr){
    arr.answer='';
    // arr.imgArr.splice(index, 1);  
    console.log('arr',arr);

  }

  compareFn(e1: any, e2: any): boolean {
    console.log('==> e1', e1);
    console.log('==> e2', e2);
    if(e2 && e2!=undefined && e2!=null){
      return e1 && e2 ? e1.auto_id == e2 : e1 == e2;
    }
    
  }
  ionViewWillEnter(){
    setTimeout(() => {
      this.RegistrationType = this.sendData.registrationType;
      
      // console.log('1',this.RegistrationType);
      if(this.RegistrationType.frompage=='back'){
        this.reId = this.sendData.alldata;
        this.ngOnInit();
      }

    }, 1000);
  }
  ngOnInit() {
    console.log('currentDate ',this.currentDate);
    this.RegistrationType = this.sendData.registrationType;
    console.log('1',this.RegistrationType);
    if(this.RegistrationType.request_page=='dealer' || this.RegistrationType.request_page=='officer' || this.RegistrationType.request_page=='account_detail' 
    ||this.RegistrationType.request_page=='pending_customer' || this.RegistrationType.request_page=='active_customer' 
    || this.RegistrationType.request_page=='block_customer' || this.RegistrationType.request_page=='rejected_customer'){
      this.reId=this.sendData.alldata;
     }else{
       this.reId='';
     }
  this.localStorage.getStorage().then(storedData=>{
    this.LoginStoredType=storedData.type;
    console.log('this.LoginStoredType',this.LoginStoredType);
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
    let searchString=ev;
    console.log('checkInput data==> ',data );
    console.log('checkInput searchString==> ', searchString);
    console.log('ev==> ', ev );
    // if(ev==null ||ev==undefined){
    //   ev="";
    // }
    if (data.call_api == 1) {
      if (searchString.toString().length >= data.min_value) {
        // this.deelarShow = data.request_type
        console.log("checkInput searchData0==", searchString);

        this.searchApiCall(data, searchString,0);
      } else {
        console.log("checkInput searchData1==", searchString);
        this.searchData = [];
      }
    }
  }

  
  back(){
    this.zone.run(() => {
    if(this.RegistrationType.request_page == 'account_detail' || this.RegistrationType.request_page == 'officer'){
      this.route.navigate(['/tabs/home']);
    } else if(this.RegistrationType.request_page == 'dealer'){
      this.route.navigate(['/tabs/customer-allocation']);
      //this.route.navigateByUrl("/tabs/customer-allocation");
    }else{
      // this.storage.remove('allStoreData');
      // this.apiService.generateDeviceId();
      // this.apiService.generateFCMToken();
      // this.maintance();
      // this.route.navigate(['./login']);
      this.logOutCall();
    }
  });
  
  }


  logOutCall(){
    this.zone.run(()=>{
      let apiKey={}
      console.log('login data response',apiKey);
      this.apiService.apiCallWithLoginToken(URLS.LogOutUrl,apiKey).subscribe((result) =>{
        console.log('logout data response',result);   
        this.localStorage.remove('allStoreData');
        this.apiService.generateDeviceId();
        this.apiService.generateFCMToken();
        this.maintance();
        //  this.router.navigate(['/login']);
        //  window.location.reload();
          this.apiService.showToastMessage(result.message, 'top', 2000, 'greenBg');     
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    }); 
  }

  async maintance(){
    await this.localStorage.getStorage().then((storedData)=>{
      console.log('localStorage storedData storedData000',storedData);
    });
    this.zone.run(()=>{
      let apiKey={}
      this.apiService.apiCallWithLoginToken(URLS.maintanceUrl,apiKey).subscribe(async (result) =>{
        if(result.success==1 || result.success=='1'){
          this.maintanceData=result;
          await this.localStorage.setStorage('maintainanceData', result);
          await this.localStorage.getStorage().then((storedData)=>{
            console.log('localStorage storedData storedData',storedData);
            if(storedData && storedData.allStoreData!=undefined){
              // this.route.navigate(['/tabs']);
              console.log('localStorage storedData',storedData);
              // window.location.assign('/tabs');
              this.route.navigateByUrl('tabs');              
            }else{                        
            console.log('localStorage storedData maintance',storedData);
              this.maintanceData=storedData.maintainanceData;
              this.route.navigate(['/login']);              
            }
          });         
          if(result.data.is_down==1 || result.data.is_down=='1'){
            this.sendData.myParam=result.maintainence_data;
            this.route.navigate(["/maintenance"]);
            //for maintance redirection page
          }
        }else{
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      },err =>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
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
        if(data.request_type=='dealer'){
          data.answer = delearData.dealer_code;
          data.new_answer = delearData.auto_id;
          console.log(' data.new_answe', data.new_answer);
        }else{
          data.answer = delearData.full_name;
          data.new_answer = delearData.auto_id;
           console.log(' data.new_answe',  data.new_answer);
        }

      } else {
        
      }
    });
  }

  searchApiCall_pincode(data, searchString,autofill){
    this.zone.run(() => {
      let apiKey = {
        "search_str": searchString,
        "request_type": data.request_type,
      }
      console.log('searchApiCall_pincode', apiKey.search_str.toString().length);
      this.apiService.apiCallWithLoginToken(data.api_url.trim(), apiKey).subscribe((result) => {
        if (result.success == 1) {
          this.showDelearList = true;
          this.searchData = result.data;
          console.log('searchApiCall_pincode this.searchData==> ', this.searchData);
          console.log('searchApiCall_pincode this.formData==> ', this.formData);
          for (let i = 0; i < this.formData.length; i++) {
            for (let j = 0; j < this.formData[i].data.length; j++) {
              console.log('searchApiCall_pincode pin type',this.formData[i].data[j].id);
              if(this.formData[i].data[j].id=='pin_code'){
                let index = this.searchData.findIndex(item => item.pin_code === this.formData[i].data[j].answer);
// alert("11")
              console.log('searchApiCall_pincode pin code index ==>',index);
              if(index>=0){
              console.log('searchApiCall_pincode searchData ==>',this.searchData[index]);
                this.pin_autoid=this.searchData[index].auto_id;
                // this.pin_autoid
                console.log('searchApiCall_pincode pin_autoid ==>',this.pin_autoid);
              }else{

              }

              }

              if(this.formData[i].data[j].id=='dealer_code'){
                this.showDelearList = false;
                let index1 = this.searchData.findIndex(item => item.dealer_code === this.formData[i].data[j].answer);

              console.log('searchApiCall_pincode pin code index ==>',index1);
              if(index1>=0){

              console.log('searchApiCall_pincode searchData ==>',this.searchData[index1]);
                this.dealer_autoid=this.searchData[index1].auto_id;
                console.log('searchApiCall_pincode pin_autoid ==>',this.pin_autoid);

              }else{
              }
              }

            }
            
          }


        }else {
          this.showDelearList = false;
          this.searchData = [];
         // data.answer ='';
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });

    })



  }

  searchApiCall(data, searchString,autofill) {
    console.log('1122==> ', data);
    console.log('11==> ', JSON.stringify(data.field_api_key));
    console.log('array==> ', this.formData);
    this.zone.run(() => {
      let apiKey = {
        "search_str": searchString,
        "request_type": data.request_type,
      }
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
                    console.log('this.formData[j].data[k].id',this.formData[j].data[k].id);

                    // if(this.onetime==0){
                      if ((this.formData[j].data[k].id == property) && property != 'auto_id' && property != 'pin_code') {
                        console.log('shi pro val==> ', this.searchData[i][property]);
                        if(this.formData[j].data[k].id!='dealer_code' && autofill==0){
                          this.formData[j].data[k].answer = this.searchData[i][property];
                        }
                        if(this.formData[j].data[k].id=='dealer_code' && autofill==1){
                          this.formData[j].data[k].answer = this.searchData[i][property];
                        }
             
                      }

                      if(this.formData[j].data[k].id == 'pin_code' && property=='pin_code' ){
                        // if(this.formData[j].data[k].id == 'pin_code' && property=='pin_code' ){
                          console.log('pincode 000000000000 ', this.searchData[i][property]);
                          // this.formData[j].data[k].showAns=this.searchData[i].auto_id;

                          this.pin_autoid=this.searchData[i].auto_id;
                        // }
                        console.log('pincode ', this.searchData[i][property]);
                      }


                      
                      if(this.formData[j].data[k].id == 'dealer_code' && property=='dealer_code'){
                        console.log("finalArray0==", this.formData);
                        console.log("finalArray000==",this.formData[j].data[k].id);
                        console.log("finalArray1==", this.searchData);
                        console.log("finalArray2==", this.searchData[i].auto_id);
                        this.dealer_autoid=this.searchData[i].auto_id;
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
        } else {
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
    } else {
      data.imgArr = [];
    }
  }
 
  

  checkValue(ev, data) {
    console.log('select opt value==> ', ev.target.value);
    // console.log('select opt tagName==> ', ev.target.value.type_name);
    // console.log('select opt is_sub_option==> ', ev.target.value.is_sub_option);
   
    data.answer=ev.target.value;
    
    var index = data.option.findIndex(p => p.auto_id == data.answer);
    // console.log('select opt index==> ', index);
    // console.log('select opt index11==> ', data.option[index]);

    if(index>=0 && data.option[index].type_name=='Other'){
      this.showOther = data.option[index].is_sub_option;
      this.SubOptionData = data.option[index];

      console.log('select opt showOther==> ', this.SubOptionData);

    }else{
      this.showOther = 0;
      this.SubOptionData = [];
    }
    console.log('update select opt data==> ', data);
return;

    // data.answer = ev.optionId;
      data.answer=ev.target.value;
    if (ev.target.value.type_name == "Other") {
      this.showOther = ev.target.value.is_sub_option;
      this.SubOptionData = ev.target.value;
    } else {
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

  async pickImage(sourceType) {
    // Create options for the Camera Dialog
    const options: CameraOptions = {
      quality: 40,
      cameraDirection: 1,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      console.log("imagePath==", imagePath);
      this.currentName = imagePath;
      let name = this.currentName.split("/");    // code for fetching file name
      this.fileName = name[name.length - 1];
      // this.previewImagePath=this.win.Ionic.WebView.convertFileSrc(imagePath);
      if(this.platform.is("ios")){
        let tempImg = this.sanitizer.bypassSecurityTrustResourceUrl(this.win.Ionic.WebView.convertFileSrc(imagePath));
        console.log("ios imagePath==", tempImg);
        this.previewImagePath=tempImg;
        console.log("ios previewImagePath==", this.previewImagePath);
      }else{
        this.previewImagePath=this.win.Ionic.WebView.convertFileSrc(imagePath);
      }
      this.uploadImageonserver();
    }, (err) => {
      console.log("imagePath error==", err);
    });




      }

  uploadImageonserver(){
      // this.apiServices.showLoader();
      this.localStorage.getStorage().then(dataFromStorage=>{
        // this.apiServices.getStorege('allStoreData').then(dataFromStorage => {
        // var url =URLS.baseUrl+'Profile/upload_file.php';
        
        var url =URLS.baseUrl+URLS.imageUploadUrl;
        console.log("url",url);
        let myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json');
        // myheaders.append('Authorization', dataFromStorage.loginStorage.loginToken);
        var targetPath = this.currentName;   // aply only for imagepicker checking
        let options = {
          fileKey: "file",
          fileName: this.fileName,
          chunkedMode: false,
          mimeType: "multipart/form-data",
          // headers: {"Authorization":dataFromStorage.loginStorage.loginToken },
          // params: {"file":targetPath,"flag":"ContactUs","clientId":APP_CONFIG.clientId,
          // "appVersion":APP_CONFIG.appVersion,"device":this.apiServices.device,
          // "employeeId":dataFromStorage.loginStorage.employeeId,"deviceId":dataFromStorage.deviceId}


          params : {
          'file': targetPath,"client_id":APP_CONFIG.clientId, "device":this.apiService.device, "device_id":dataFromStorage.deviceId,
          "app_version": APP_CONFIG.app_version, "employee_id":dataFromStorage.allStoreData.user_id, 
          "user_type":dataFromStorage.allStoreData.employee_type,
          "media_type":'1',"flag_type":this.currentObj.flag_type,"request_for":this.reId,"request_page":this.RegistrationType.request_page
        }
        }
        console.log("options",options);
        console.log("passing key==", JSON.stringify(options));
        // console.log("url==", URLS.baseUrl+''+url);
        // this.apiServices.startLoader().then(()=>{
        const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.upload(targetPath, url, options).then(res => {
          console.log("server res==", res);
          let data = JSON.parse(res.response);
          console.log("response==", res);
          console.log("response22==", data);
          if (data.success == 1) {
            // this.apiServices.showToastMessage(data.message, 'top', 3000, 'greenBg');
            // this.apiServices.hideLoader();
          } else {
            console.log("message key==", data.message);
            // this.apiServices.showToastMessage(data.message, 'top', 3000, 'redBg');
            // this.apiServices.hideLoader();
          }
        }, err => {
          console.log("err==", err);
          // this.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
          // this.apiServices.hideLoader();
          if (err.http_status == 200) {}
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
    
      
      

  async selectImage(obj) {
    console.log('selectImage cordova');
    this.currentObj = obj;
    const actionSheet = await this.actionSheetController.create({
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
    await actionSheet.present();
  }
  //  back(){
  //   this.route.navigate(['./mobile']);
  //  }
 async Submit(type) {
  this.emptyFieldFound=0;

  console.log("this.pin_autoid",this.pin_autoid);

  console.log('field full==> ', this.formData);
  for (let j = 0; j < this.formData.length; j++) {
    for (let k = 0; k < this.formData[j].data.length; k++) {
      if(this.formData[j].data[k].is_mandatory==1 && this.formData[j].data[k].answer=="" ){
        this.emptyFieldFound=1;
        console.log('field==> ', this.formData[j].data[k]);
        console.log('field==> ', this.formData[j].data[k].answer);
      }

      if(this.formData[j].data[k].is_sub_option==1){
       
        let index = this.formData[j].data[k].option.findIndex(p => p.value == this.formData[j].data[k].answer);
          console.log('field1 yoyo index==> ', index);
          console.log('field1 yoyo==> ', this.formData[j].data[k].option[index]);
          if(index>=0){
            if(this.formData[j].data[k].option[index].is_mandatory==1){
              this.emptyFieldFound=1;
              console.log('field1==> ', this.formData[j].data[k].option[index]);
              console.log('field1==> ', this.formData[j].data[k].option[index].answer);
            }
            if(this.formData[j].data[k].option[index].is_sub_option==1){
  
              for (let m = 0; m < this.formData[j].data[k].option[index].sub_option.length; m++) {
                if(this.formData[j].data[k].option[index].sub_option[m].isMandatory==1 && this.formData[j].data[k].option[index].sub_option[m].answer==""){
                  this.emptyFieldFound=1;
                  console.log('field2==> ', this.formData[j].data[k].option[index].sub_option[m]);
                  console.log('field2==> ', this.formData[j].data[k].option[index].sub_option[m].answer);
                }
              }
  
            }
          }else{

            for (let l = 0; l < this.formData[j].data[k].option.length; l++) {
              if(this.formData[j].data[k].option[l].is_mandatory==1){
                this.emptyFieldFound=1;
                console.log('field else1==> ', this.formData[j].data[k].option[l]);
                console.log('field else11==> ', this.formData[j].data[k].option[l].answer);
              }
              if(this.formData[j].data[k].option[l].is_sub_option==1){
                // let index = this.formData[j].data[k].option[l].sub_option.findIndex(p => p.value == this.formData[j].data[k].answer);


                for (let m = 0; m < this.formData[j].data[k].option[l].sub_option.length; m++) {
                  if(this.formData[j].data[k].option[l].sub_option[m].isMandatory==1 && this.formData[j].data[k].option[l].sub_option[m].answer==""){
                    this.emptyFieldFound=1;
                    console.log('field else12==> ', this.formData[j].data[k].option[l].sub_option[m]);
                    console.log('field else12==> ', this.formData[j].data[k].option[l].sub_option[m].answer);
                  }
                }
    
              }
            }

          }
         
     
      }
  

    }


    if(j==this.formData.length-1){
      console.log('this.emptyFieldFound==> ', this.emptyFieldFound);
      if(this.emptyFieldFound==1 ||  this.searchData==[]){
        this.apiService.showToastMessage("Please fill all mandatory fields", 'top', 3000, 'redBg');
        return;
      }else{


        for (let j = 0; j < this.formData.length; j++) {
          for (let k = 0; k < this.formData[j].data.length; k++) {
            if(this.formData[j].data[k].id=='pin_code'){
            
              this.formData[j].data[k].answer=this.pin_autoid;
            }
           else if(this.formData[j].data[k].id=='dealer_code'){
           console.log("this.dealer_autoid",this.dealer_autoid);
           if(this.formData[j].data[k].is_editable=='false' || this.formData[j].data[k].is_editable==false){
            this.formData[j].data[k].answer= this.formData[j].data[k].auto_dealer_id;
           }
           else{
            this.formData[j].data[k].answer= this.dealer_autoid;
           }
            
            }
           
          }
        }


        this.submitFunCall(type);
// alert("Shivanshi ma'am api to hit karo, sab fields fill ho gyi h");

      }
    }

  }

 }
    submitFunCall(type){
    this.zone.run(() => {
      let apiKey = {
        "save_data": this.formData,
        "request_for":this.reId,
        "request_page":this.RegistrationType.request_page, 
        "save_type":type
      }
      console.log('login data response', apiKey);
      this.apiService.apiCallWithLoginToken(URLS.registrationFormSubmitUrl, apiKey).subscribe((result) => {
        console.log('logout data response', result);
        if (result.success == 1) {
          if(result.request_page=='dealer'){
            this.sendData.alldata={
              "requestFor":this.reId,
              "requestPage":result.request_page
            }
            this.route.navigate(['/profile-upload']);
          }else{
            this.route.navigate(['/tabs']);
          }
          this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
        } else {
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
    
  }


  async openSelectImageOpt(obj) {
    console.log('selectImage browser');
    this.currentObj = obj;
    if (this.showImgOption == false) {
      this.showImgOption = true;

let blkankdata={"nulldata":"blank",flag:obj.flag_type}

      const modal = await this.modalCtrl.create({
        component: ModelCameraPage,
        componentProps:{data:blkankdata},
        cssClass: 'my-custom-class'
      });
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data.data;
          // this.currentObj.answer = this.dataReturned.data;      
          console.log(" this.dataReturned:", this.dataReturned)
          // this.userImg = this.dataReturned.data;
          this.currentObj.answer = this.dataReturned.filebaseUrl;
          if (this.currentObj.answer == undefined) {
            this.currentObj.answer = '';
          }
          console.log("data:", this.currentObj.answer)
          //alert('Modal Sent Data :'+ dataReturned);
        }
        else {
          this.currentObj.answer = '';
        }
      });
      return await modal.present();
    }
    else {
      this.showImgOption = false;
    }

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
        "request_for":this.reId
      }
      this.apiService.apiCallWithLoginToken(URLS.registrationFormUrl, apiKey).subscribe((result) => {
        if (result.success == 1) {
          this.formValue = result;
          this.formData = result.data;
          console.log('this.formValue==> ', this.formValue);
          console.log('this.formData==> ', this.formData);
        

          for(let i=0;i<this.formData.length;i++){
            for(let j=0; j<this.formData[i].data.length;j++){
              if(this.formData[i].data[j].type=='radio'){

                for (let k = 0; k < this.formData[i].data[j].option.length; k++) {
                  if(this.formData[i].data[j].answer==this.formData[i].data[j].option[k].value && this.formData[i].data[j].option[k].is_sub_option==1){
                    this.formData[i].data[j].imgArr = this.formData[i].data[j].option[k].sub_option;
                  }
                  
                }
              }

                if(this.formData[i].data[j].id=='pin_code'){
                  if(this.formData[i].data[j].answer!=''){
                    this.searchApiCall_pincode(this.formData[i].data[j],this.formData[i].data[j].answer,1); 
                  }
                }

//new code added

                if(this.formData[i].data[j].id=='dealer_code'){
                  if(this.formData[i].data[j].answer!=''){
                    this.searchApiCall_pincode(this.formData[i].data[j],this.formData[i].data[j].answer,1); 
                  }
                }
              
            }

          }
        } else {
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
  }


  // chandan work start

  profileView(id){
    this.zone.run(() => {
      let apiKey = {
        "request_for":this.reId,
        "request_status":id
      }
      this.apiService.apiCallWithLoginToken(URLS.UpdateRegistrationUrl, apiKey).subscribe((result) => {
        console.log('UpdateRegistrationUrl : ', result);
        if (result.success == 1) {
          this.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
          this.route.navigate(['./customer-reg']);
          // this.formValue = result;
          // this.formData = result.data;
        } else {
          this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
        }
      }, err => {
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    });
  }
//chandan work end 
}
