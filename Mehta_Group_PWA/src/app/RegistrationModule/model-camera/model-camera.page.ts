import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { ApiService } from 'src/app/provider/api.service';
import { APP_CONFIG, URLS } from 'src/assets/constant';
import { Platform } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-model-camera',
  templateUrl: './model-camera.page.html',
  styleUrls: ['./model-camera.page.scss'],
})
export class ModelCameraPage implements OnInit {
  files:any=[];
  userImage: string | ArrayBuffer;
  currentObj: any;
  RegistrationData:any;
  RequestPage:any;
  RequestFor:any;
  flag: string;
  pgShow:any;
  private win: any = window;
  fileName: any;
  currentName: any;
  constructor(public modalController: ModalController,public apiServices:ApiService ,public navParam:NavParams, 
    private transfer: FileTransfer,public platform:Platform,private file:File,private camera:Camera,
    public sanitizer:DomSanitizer,public localStorage:LocalStorageService, ) {
    this.RegistrationData=this.navParam.data.data;
    console.log(" this.RegistrationData",this.RegistrationData);
    console.log(" this.RegistrationData",this.navParam.data.data);
    if(this.RegistrationData!=undefined || this.RegistrationData!=''){
      if(this.RegistrationData.nulldata){
        this.flag=this.RegistrationData.flag;
      }
      else if(this.RegistrationData.show_popup){
        this.pgShow=this.RegistrationData.show_popup;
      }
        else{
        this.flag="5";
      }
      console.log("1");
      console.log(" this.RegistrationData",this.navParam.data.data)
      this.RequestFor=this.RegistrationData.requestFor;
      this.RequestPage=this.RegistrationData.requestPage;
      
    }else{
      console.log("2");
      this.RequestFor='';
      this.RequestPage='';
      
    }
    console.log('this registrationData from profile upload page',this.RegistrationData);
   }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  async pickImage() {
    console.log('cordova calling')
    const options: CameraOptions = {
      quality: 40,
      cameraDirection: 1,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
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
        // this.previewImagePath=tempImg;
        // console.log("ios previewImagePath==", this.previewImagePath);
      }else{
        // this.previewImagePath=this.win.Ionic.WebView.convertFileSrc(imagePath);
      }
      this.uploadImageonserver();
    }, (err) => {
      console.log("imagePath error==", err);
    });




      }

  uploadImageonserver(){
    this.apiServices.presentLoadingDefault();
      this.localStorage.getStorage().then(dataFromStorage=>{
        var url =URLS.baseUrl+URLS.imageUploadUrl;
        console.log("url",url);
        let myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json');
        var targetPath = this.currentName;   // aply only for imagepicker checking
        let options = {
          fileKey: "file",
          fileName: this.fileName,
          chunkedMode: false,
          mimeType: "multipart/form-data",
          params : {
          'file': targetPath,"client_id":APP_CONFIG.clientId,"device":APP_CONFIG.device, "device_id":APP_CONFIG.device_id,
          "app_version": APP_CONFIG.app_version, "employee_id":dataFromStorage.allStoreData.user_id,"request_page":this.RequestPage,
          "user_type":dataFromStorage.allStoreData.employee_type,"media_type":'1',"flag_type":this.flag,"request_for":this.RequestFor,
          
        }
        }
        console.log("options",options);
        console.log("passing key==", JSON.stringify(options));
        const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.upload(targetPath, url, options).then(res => {
          console.log("server res==", res);
          let data = JSON.parse(res.response);
          console.log("response==", res);
          console.log("response22==", data);
          this.apiServices.presentLoadingClose();
          if (data.success == 1) {
            this.modalController.dismiss({
              'dismissed': true,
              'data':data.data
            });
            this.apiServices.showToastMessage(data.message, 'top', 3000, 'greenBg');
          } else {
            console.log("message key==", data.message);
            // this.apiServices.showToastMessage(data.message, 'top', 3000, 'redBg');
            // this.apiServices.hideLoader();
          }
        }, err => {
          this.apiServices.presentLoadingClose();
          console.log("err==", err);
          this.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        });
        // })
      });
  }

  captureImg(event) {
    this.apiServices.presentLoadingDefault();
    console.log('event1==>', event);
    var formData = new FormData();
    if(event.target.files){
      const file = event.target.files[0];
      formData.append('file', file);
      formData.append('flag_type',this.flag);
      formData.append('media_type', "1");
      formData.append('request_for',this.RequestFor);
      formData.append('request_page', this.RequestPage);
      console.log('formData==>', formData);
      this.apiServices.mediaFileUpload(URLS.imageUploadUrl, formData).subscribe((event: HttpEvent<any>) => {
        console.log('Multi File upload res==> ', JSON.stringify(event));
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.Response:
            let result=event.body    
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          console.log(reader.result);
          formData.append("file", this.files);
         console.log('this.currentObj==>', this.currentObj);
        // this.currentObj.answer= reader.result;
        this.apiServices.presentLoadingClose();
         this.modalController.dismiss({
          'dismissed': true,
          'data':result.data
        });
      };
    }
    },err=>{
      this.apiServices.presentLoadingClose();
      this.apiServices.showToastMessage(JSON.stringify(err),'top',3000,'redBg');
      // this.dismissLoading();
    });
  }

  }
  pgShoW(id){
    this.modalController.dismiss({
      'dismissed': true,
      'data':id
      //'data':result.data
    });
     // this.route.navigate(['/mobile']);
  } 

}
