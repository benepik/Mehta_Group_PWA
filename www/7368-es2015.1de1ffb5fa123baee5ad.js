(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[7368],{87368:function(e,t,i){"use strict";i.r(t),i.d(t,{ModelCameraPageModule:function(){return p}});var o=i(38583),n=i(90665),s=i(47823),a=i(12234),r=i(39182),c=i(88720);const l=[{path:"",component:r.b}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,n.u5,s.Pc,g]]}),e})()},39182:function(e,t,i){"use strict";i.d(t,{b:function(){return S}});var o=i(64762),n=i(91841),s=i(56544),a=i(88720),r=i(47823),c=i(14303),l=i(97905),g=i(20138),p=i(84267),d=i(39075),u=i(18345),h=i(38583);function f(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"input",16),a.NdJ("change",function(t){return a.CHM(e),a.oxw(2).captureImg(t)}),a.qZA()}}function m(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div",17),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).pickImage()}),a.qZA()}}function Z(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"ion-row"),a.TgZ(1,"ion-col"),a.TgZ(2,"label",8),a._UZ(3,"ion-icon",9),a.TgZ(4,"p",10),a._uU(5,"Take a Snapshot"),a.qZA(),a.YNc(6,f,1,0,"input",11),a.YNc(7,m,1,0,"div",12),a.qZA(),a.qZA(),a.TgZ(8,"ion-col",13),a.TgZ(9,"h1"),a._uU(10,"|"),a.qZA(),a.qZA(),a.TgZ(11,"ion-col"),a.TgZ(12,"label",8),a._UZ(13,"ion-icon",14),a.TgZ(14,"p",10),a._uU(15,"Select Image"),a.qZA(),a.TgZ(16,"input",15),a.NdJ("change",function(t){return a.CHM(e),a.oxw().captureImg(t)}),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=a.oxw();a.xp6(6),a.Q6J("ngIf",!(null!=e.platform&&e.platform.is("cordova"))),a.xp6(1),a.Q6J("ngIf",null==e.platform?null:e.platform.is("cordova"))}}function v(e,t){1&e&&a._UZ(0,"br")}function b(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"ion-col",19),a.TgZ(1,"ion-button",20),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw(2).pgShoW(t)}),a._uU(2),a.qZA(),a.qZA()}if(2&e){const e=t.$implicit;a.Q6J("size",6),a.xp6(2),a.Oqu(null==e?null:e.button_text)}}function _(e,t){if(1&e&&(a.TgZ(0,"ion-row"),a.YNc(1,b,3,2,"ion-col",18),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngForOf",e.pgShow)}}function q(e,t){1&e&&a._UZ(0,"br")}function y(e,t){1&e&&(a.TgZ(0,"div",21),a._UZ(1,"img",22),a.qZA())}function w(e,t){1&e&&(a.TgZ(0,"div",23),a._UZ(1,"img",24),a.qZA())}let S=(()=>{class e{constructor(e,t,i,o,n,s,a,r,c){this.modalController=e,this.apiServices=t,this.navParam=i,this.transfer=o,this.platform=n,this.file=s,this.camera=a,this.sanitizer=r,this.localStorage=c,this.files=[],this.win=window,this.RegistrationData=this.navParam.data.data,console.log(" this.RegistrationData",this.RegistrationData),console.log(" this.RegistrationData",this.navParam.data.data),null!=this.RegistrationData||""!=this.RegistrationData?(this.RegistrationData.nulldata?this.flag=this.RegistrationData.flag:this.RegistrationData.show_popup?this.pgShow=this.RegistrationData.show_popup:this.flag="5",console.log("1"),console.log(" this.RegistrationData",this.navParam.data.data),this.RequestFor=this.RegistrationData.requestFor,this.RequestPage=this.RegistrationData.requestPage):(console.log("2"),this.RequestFor="",this.RequestPage=""),console.log("this registrationData from profile upload page",this.RegistrationData)}ngOnInit(){}close(){this.modalController.dismiss({dismissed:!0})}pickImage(){return(0,o.mG)(this,void 0,void 0,function*(){console.log("cordova calling"),this.camera.getPicture({quality:40,cameraDirection:1,correctOrientation:!0,destinationType:this.camera.DestinationType.FILE_URI,sourceType:this.camera.PictureSourceType.CAMERA,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then(e=>{console.log("imagePath==",e),this.currentName=e;let t=this.currentName.split("/");if(this.fileName=t[t.length-1],this.platform.is("ios")){let t=this.sanitizer.bypassSecurityTrustResourceUrl(this.win.Ionic.WebView.convertFileSrc(e));console.log("ios imagePath==",t)}this.uploadImageonserver()},e=>{console.log("imagePath error==",e)})})}uploadImageonserver(){this.apiServices.presentLoadingDefault(),this.localStorage.getStorage().then(e=>{var t=s.n.baseUrl+s.n.imageUploadUrl;console.log("url",t),(new Headers).append("Content-Type","application/json");var i=this.currentName;let o={fileKey:"file",fileName:this.fileName,chunkedMode:!1,mimeType:"multipart/form-data",params:{file:i,client_id:s.q.clientId,device:this.apiServices.device,device_id:e.deviceId,app_version:s.q.app_version,employee_id:e.allStoreData.user_id,request_page:this.RequestPage,user_type:e.allStoreData.employee_type,media_type:"1",flag_type:this.flag,request_for:this.RequestFor}};console.log("options",o),console.log("passing key==",JSON.stringify(o)),this.transfer.create().upload(i,t,o).then(e=>{console.log("server res==",e);let t=JSON.parse(e.response);console.log("response==",e),console.log("response22==",t),this.apiServices.presentLoadingClose(),1==t.success?(this.modalController.dismiss({dismissed:!0,data:t.data}),this.apiServices.showToastMessage(t.message,"top",3e3,"greenBg")):console.log("message key==",t.message)},e=>{this.apiServices.presentLoadingClose(),console.log("err==",e),this.apiServices.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})})}captureImg(e){this.apiServices.presentLoadingDefault(),console.log("event1==>",e);var t=new FormData;if(e.target.files){const i=e.target.files[0];t.append("file",i),t.append("flag_type",this.flag),t.append("media_type","1"),t.append("request_for",this.RequestFor),t.append("request_page",this.RequestPage),console.log("formData==>",t),this.apiServices.mediaFileUpload(s.n.imageUploadUrl,t).subscribe(e=>{switch(console.log("Multi File upload res==> ",JSON.stringify(e)),e.type){case n.dt.Sent:console.log("Request has been made!");break;case n.dt.ResponseHeader:console.log("Response header has been received!");break;case n.dt.Response:let o=e.body;const s=new FileReader;s.readAsDataURL(i),s.onload=()=>{console.log(s.result),t.append("file",this.files),console.log("this.currentObj==>",this.currentObj),this.apiServices.presentLoadingClose(),this.modalController.dismiss({dismissed:!0,data:o.data})}}},e=>{this.apiServices.presentLoadingClose(),this.apiServices.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})}}pgShoW(e){this.modalController.dismiss({dismissed:!0,data:e})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(r.IN),a.Y36(c.s),a.Y36(r.X1),a.Y36(l.K),a.Y36(r.t4),a.Y36(g.$),a.Y36(p.V1),a.Y36(d.H7),a.Y36(u.n))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-model-camera"]],decls:13,vars:6,consts:[[1,"content-bg"],[1,"ion-justify-content-center"],[1,"back"],[4,"ngIf"],[1,"circle"],["name","close",1,"circle_close",3,"click"],["class","banner",4,"ngIf"],["slot","fixed","style","bottom:0px;",4,"ngIf"],[1,"image-upload"],["name","camera-outline",1,"FooterCam","iconBorder"],[1,"activityClass","ion-no-margin"],["type","file","multiple","","accept","image/*","capture","",3,"change",4,"ngIf"],["class","overDiv","tappable","",3,"click",4,"ngIf"],["size","2"],["name","images-outline",1,"FooterCam","iconBorder"],["type","file","accept","image/*",3,"change"],["type","file","multiple","","accept","image/*","capture","",3,"change"],["tappable","",1,"overDiv",3,"click"],[3,"size",4,"ngFor","ngForOf"],[3,"size"],[1,"pgSo",3,"click"],[1,"banner"],["src","./assets/icon/Design 1.png"],["slot","fixed",2,"bottom","0px"],["src","./assets/icon/Design 1.png",1,"banner_bg"]],template:function(e,t){1&e&&(a.TgZ(0,"ion-content",0),a.TgZ(1,"ion-row",1),a.TgZ(2,"ion-col",2),a.TgZ(3,"ion-grid"),a.YNc(4,Z,17,2,"ion-row",3),a.YNc(5,v,1,0,"br",3),a.YNc(6,_,2,1,"ion-row",3),a.YNc(7,q,1,0,"br",3),a.TgZ(8,"ion-row"),a.TgZ(9,"ion-col",4),a.TgZ(10,"ion-icon",5),a.NdJ("click",function(){return t.close()}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(11,y,2,0,"div",6),a.YNc(12,w,2,0,"div",7),a.qZA()),2&e&&(a.xp6(4),a.Q6J("ngIf",!t.pgShow),a.xp6(1),a.Q6J("ngIf",t.pgShow),a.xp6(1),a.Q6J("ngIf",t.pgShow),a.xp6(1),a.Q6J("ngIf",t.pgShow),a.xp6(4),a.Q6J("ngIf",null==t.platform?null:t.platform.is("desktop")),a.xp6(1),a.Q6J("ngIf",null==t.platform?null:t.platform.is("mobile")))},directives:[r.W2,r.Nd,r.wI,r.jY,h.O5,r.gu,h.sg,r.YG],styles:[".image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.iconBorder[_ngcontent-%COMP%]{font-size:70px;color:#b01d22}.circle[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%]{text-align:center}.circle_close[_ngcontent-%COMP%]{font-size:40px;color:#b01d22;border:2px solid #b01d22;border-radius:50%}ion-grid[_ngcontent-%COMP%]{padding:0}h1[_ngcontent-%COMP%]{font-size:40px}.pgSo[_ngcontent-%COMP%]{width:100%;text-transform:capitalize;--border-radius:10px;--background:#b01d22}.overDiv[_ngcontent-%COMP%]{position:absolute;z-index:9;left:0;top:0;bottom:0;right:0}.banner_bg[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;height:auto;width:100%}"]}),e})()}}]);