(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[1270],{39182:function(e,t,i){"use strict";i.d(t,{b:function(){return w}});var o=i(64762),n=i(91841),a=i(56544),s=i(88720),r=i(47823),l=i(14303),c=i(97905),p=i(20138),g=i(84267),u=i(39075),d=i(18345),m=i(38583);function f(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"input",16),s.NdJ("change",function(t){return s.CHM(e),s.oxw(2).captureImg(t)}),s.qZA()}}function h(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",17),s.NdJ("click",function(){return s.CHM(e),s.oxw(2).pickImage()}),s.qZA()}}function v(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"ion-row"),s.TgZ(1,"ion-col"),s.TgZ(2,"label",8),s._UZ(3,"ion-icon",9),s.TgZ(4,"p",10),s._uU(5,"Take a Snapshot"),s.qZA(),s.YNc(6,f,1,0,"input",11),s.YNc(7,h,1,0,"div",12),s.qZA(),s.qZA(),s.TgZ(8,"ion-col",13),s.TgZ(9,"h1"),s._uU(10,"|"),s.qZA(),s.qZA(),s.TgZ(11,"ion-col"),s.TgZ(12,"label",8),s._UZ(13,"ion-icon",14),s.TgZ(14,"p",10),s._uU(15,"Select Image"),s.qZA(),s.TgZ(16,"input",15),s.NdJ("change",function(t){return s.CHM(e),s.oxw().captureImg(t)}),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=s.oxw();s.xp6(6),s.Q6J("ngIf",!(null!=e.platform&&e.platform.is("cordova"))),s.xp6(1),s.Q6J("ngIf",null==e.platform?null:e.platform.is("cordova"))}}function _(e,t){1&e&&s._UZ(0,"br")}function D(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"ion-col",19),s.TgZ(1,"ion-button",20),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw(2).pgShoW(t)}),s._uU(2),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit;s.Q6J("size",6),s.xp6(2),s.Oqu(null==e?null:e.button_text)}}function x(e,t){if(1&e&&(s.TgZ(0,"ion-row"),s.YNc(1,D,3,2,"ion-col",18),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngForOf",e.pgShow)}}function Z(e,t){1&e&&s._UZ(0,"br")}function b(e,t){1&e&&(s.TgZ(0,"div",21),s._UZ(1,"img",22),s.qZA())}function C(e,t){1&e&&(s.TgZ(0,"div",23),s._UZ(1,"img",24),s.qZA())}let w=(()=>{class e{constructor(e,t,i,o,n,a,s,r,l){this.modalController=e,this.apiServices=t,this.navParam=i,this.transfer=o,this.platform=n,this.file=a,this.camera=s,this.sanitizer=r,this.localStorage=l,this.files=[],this.win=window,this.RegistrationData=this.navParam.data.data,console.log(" this.RegistrationData",this.RegistrationData),console.log(" this.RegistrationData",this.navParam.data.data),null!=this.RegistrationData||""!=this.RegistrationData?(this.RegistrationData.nulldata?this.flag=this.RegistrationData.flag:this.RegistrationData.show_popup?this.pgShow=this.RegistrationData.show_popup:this.flag="5",console.log("1"),console.log(" this.RegistrationData",this.navParam.data.data),this.RequestFor=this.RegistrationData.requestFor,this.RequestPage=this.RegistrationData.requestPage):(console.log("2"),this.RequestFor="",this.RequestPage=""),console.log("this registrationData from profile upload page",this.RegistrationData)}ngOnInit(){}close(){this.modalController.dismiss({dismissed:!0})}pickImage(){return(0,o.mG)(this,void 0,void 0,function*(){console.log("cordova calling"),this.camera.getPicture({quality:40,cameraDirection:1,correctOrientation:!0,destinationType:this.camera.DestinationType.FILE_URI,sourceType:this.camera.PictureSourceType.CAMERA,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then(e=>{console.log("imagePath==",e),this.currentName=e;let t=this.currentName.split("/");if(this.fileName=t[t.length-1],this.platform.is("ios")){let t=this.sanitizer.bypassSecurityTrustResourceUrl(this.win.Ionic.WebView.convertFileSrc(e));console.log("ios imagePath==",t)}this.uploadImageonserver()},e=>{console.log("imagePath error==",e)})})}uploadImageonserver(){this.apiServices.presentLoadingDefault(),this.localStorage.getStorage().then(e=>{var t=a.n.baseUrl+a.n.imageUploadUrl;console.log("url",t),(new Headers).append("Content-Type","application/json");var i=this.currentName;let o={fileKey:"file",fileName:this.fileName,chunkedMode:!1,mimeType:"multipart/form-data",params:{file:i,client_id:a.q.clientId,device:this.apiServices.device,device_id:e.deviceId,app_version:a.q.app_version,employee_id:e.allStoreData.user_id,request_page:this.RequestPage,user_type:e.allStoreData.employee_type,media_type:"1",flag_type:this.flag,request_for:this.RequestFor}};console.log("options",o),console.log("passing key==",JSON.stringify(o)),this.transfer.create().upload(i,t,o).then(e=>{console.log("server res==",e);let t=JSON.parse(e.response);console.log("response==",e),console.log("response22==",t),this.apiServices.presentLoadingClose(),1==t.success?(this.modalController.dismiss({dismissed:!0,data:t.data}),this.apiServices.showToastMessage(t.message,"top",3e3,"greenBg")):console.log("message key==",t.message)},e=>{this.apiServices.presentLoadingClose(),console.log("err==",e),this.apiServices.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})})}captureImg(e){this.apiServices.presentLoadingDefault(),console.log("event1==>",e);var t=new FormData;if(e.target.files){const i=e.target.files[0];t.append("file",i),t.append("flag_type",this.flag),t.append("media_type","1"),t.append("request_for",this.RequestFor),t.append("request_page",this.RequestPage),console.log("formData==>",t),this.apiServices.mediaFileUpload(a.n.imageUploadUrl,t).subscribe(e=>{switch(console.log("Multi File upload res==> ",JSON.stringify(e)),e.type){case n.dt.Sent:console.log("Request has been made!");break;case n.dt.ResponseHeader:console.log("Response header has been received!");break;case n.dt.Response:let o=e.body;const a=new FileReader;a.readAsDataURL(i),a.onload=()=>{console.log(a.result),t.append("file",this.files),console.log("this.currentObj==>",this.currentObj),this.apiServices.presentLoadingClose(),this.modalController.dismiss({dismissed:!0,data:o.data})}}},e=>{this.apiServices.presentLoadingClose(),this.apiServices.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})}}pgShoW(e){this.modalController.dismiss({dismissed:!0,data:e})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.IN),s.Y36(l.s),s.Y36(r.X1),s.Y36(c.K),s.Y36(r.t4),s.Y36(p.$),s.Y36(g.V1),s.Y36(u.H7),s.Y36(d.n))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-model-camera"]],decls:13,vars:6,consts:[[1,"content-bg"],[1,"ion-justify-content-center"],[1,"back"],[4,"ngIf"],[1,"circle"],["name","close",1,"circle_close",3,"click"],["class","banner",4,"ngIf"],["slot","fixed","style","bottom:0px;",4,"ngIf"],[1,"image-upload"],["name","camera-outline",1,"FooterCam","iconBorder"],[1,"activityClass","ion-no-margin"],["type","file","multiple","","accept","image/*","capture","",3,"change",4,"ngIf"],["class","overDiv","tappable","",3,"click",4,"ngIf"],["size","2"],["name","images-outline",1,"FooterCam","iconBorder"],["type","file","accept","image/*",3,"change"],["type","file","multiple","","accept","image/*","capture","",3,"change"],["tappable","",1,"overDiv",3,"click"],[3,"size",4,"ngFor","ngForOf"],[3,"size"],[1,"pgSo",3,"click"],[1,"banner"],["src","./assets/icon/Design 1.png"],["slot","fixed",2,"bottom","0px"],["src","./assets/icon/Design 1.png",1,"banner_bg"]],template:function(e,t){1&e&&(s.TgZ(0,"ion-content",0),s.TgZ(1,"ion-row",1),s.TgZ(2,"ion-col",2),s.TgZ(3,"ion-grid"),s.YNc(4,v,17,2,"ion-row",3),s.YNc(5,_,1,0,"br",3),s.YNc(6,x,2,1,"ion-row",3),s.YNc(7,Z,1,0,"br",3),s.TgZ(8,"ion-row"),s.TgZ(9,"ion-col",4),s.TgZ(10,"ion-icon",5),s.NdJ("click",function(){return t.close()}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(11,b,2,0,"div",6),s.YNc(12,C,2,0,"div",7),s.qZA()),2&e&&(s.xp6(4),s.Q6J("ngIf",!t.pgShow),s.xp6(1),s.Q6J("ngIf",t.pgShow),s.xp6(1),s.Q6J("ngIf",t.pgShow),s.xp6(1),s.Q6J("ngIf",t.pgShow),s.xp6(4),s.Q6J("ngIf",null==t.platform?null:t.platform.is("desktop")),s.xp6(1),s.Q6J("ngIf",null==t.platform?null:t.platform.is("mobile")))},directives:[r.W2,r.Nd,r.wI,r.jY,m.O5,r.gu,m.sg,r.YG],styles:[".image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.iconBorder[_ngcontent-%COMP%]{font-size:70px;color:#b01d22}.circle[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%]{text-align:center}.circle_close[_ngcontent-%COMP%]{font-size:40px;color:#b01d22;border:2px solid #b01d22;border-radius:50%}ion-grid[_ngcontent-%COMP%]{padding:0}h1[_ngcontent-%COMP%]{font-size:40px}.pgSo[_ngcontent-%COMP%]{width:100%;text-transform:capitalize;--border-radius:10px;--background:#b01d22}.overDiv[_ngcontent-%COMP%]{position:absolute;z-index:9;left:0;top:0;bottom:0;right:0}.banner_bg[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;height:auto;width:100%}"]}),e})()},51270:function(e,t,i){"use strict";i.d(t,{G:function(){return T}});var o=i(64762),n=i(56544),a=i(39182),s=i(88720),r=i(84267),l=i(47823),c=i(20138),p=i(18345),g=i(12234),u=i(51532),d=i(14303),m=i(38583);function f(e,t){1&e&&s._UZ(0,"br")}const h=function(e){return[e]};function v(e,t){if(1&e&&s._UZ(0,"img",14),2&e){const e=s.oxw();s.Q6J("src",null==e.profileData||null==e.profileData.emp_data?null:e.profileData.emp_data.user_image,s.LSH)("ngClass",s.VKq(2,h,null!=e.platform&&e.platform.is("mobile")?"deskImg":"profileImg"))}}function _(e,t){if(1&e&&s._UZ(0,"img",14),2&e){const e=s.oxw();s.Q6J("src",e.userImg,s.LSH)("ngClass",s.VKq(2,h,null!=e.platform&&e.platform.is("mobile")?"deskImg":"profileImg"))}}function D(e,t){if(1&e&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("(",null==e.profileData||null==e.profileData.emp_data?null:e.profileData.emp_data.customer_type_name,")")}}function x(e,t){if(1&e&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("(",null==e.profileData||null==e.profileData.emp_data?null:e.profileData.emp_data.dealer_code,")")}}function Z(e,t){if(1&e&&(s.TgZ(0,"p",15),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("Dealers: ",null==e.profileData||null==e.profileData.emp_data?null:e.profileData.emp_data.dealers,"")}}function b(e,t){if(1&e&&(s.TgZ(0,"div",16),s.TgZ(1,"p",17),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Oqu(null==e.profileData||null==e.profileData.button_info?null:e.profileData.button_info.buttonText)}}function C(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"ion-row",18),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().gotoDetail(t)}),s.TgZ(1,"ion-col",19),s._UZ(2,"img",20),s.qZA(),s.TgZ(3,"ion-col",21),s.TgZ(4,"p",9),s._uU(5),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit,i=s.oxw();s.xp6(1),s.Q6J("size",2),s.xp6(1),s.Q6J("src",null==e?null:e.icon,s.LSH),s.xp6(1),s.Q6J("size",10),s.xp6(1),s.Q6J("ngClass",s.VKq(5,h,null!=i.platform&&i.platform.is("mobile")?"desktitle":"profileDiv")),s.xp6(1),s.Oqu(null==e?null:e.name)}}const w=function(e){return{container:e}},I=function(e){return{forDesktopImgDiv:e}};let T=(()=>{class e{constructor(e,t,i,o,n,a,s,r,l,c,p,g,u){this.camera=e,this.actionSheetController=t,this.file=i,this.storage=o,this.router=n,this.platform=a,this.sendData=s,this.modalCtrl=r,this.popoverController=l,this.toastController=c,this.zone=p,this.apiService=g,this.alertController=u,this.win=window,this.userImg="",this.files=[],this.croppedImagePath="",this.isLoading=!1,this.formData=[],this.imagePickerOptions={maximumImagesCount:1,quality:50},this.showImgOption=!1}ionViewWillEnter(){this.apiService.isSelected="",this.profileShow()}ngOnInit(){}profileShow(){this.zone.run(()=>{this.apiService.apiCallWithLoginToken(n.n.SideMenuUrl,{}).subscribe(e=>{console.log("SideMenuUrl: ",e),1==e.success&&(this.profileData=e.data)},e=>{this.apiService.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})})}gotoDetail(e){return(0,o.mG)(this,void 0,void 0,function*(){const t=yield this.popoverController.getTop();t&&(yield t.dismiss(null)),this.zone.run(()=>{"logout"==(null==e?void 0:e.redirect_url)?this.presentAlertConfirm():"accounts-detail"==e.redirect_url?"1"==this.profileData.emp_data.employee_type?(this.sendData.registrationType={request_page:"account_detail"},this.sendData.alldata=this.profileData.emp_data.employee_type,console.log("registrationType",this.sendData.registrationType),this.router.navigate(["./registration"])):this.router.navigate(["./accounts-detail"]):this.router.navigateByUrl(null==e?void 0:e.redirect_url)})})}presentAlertConfirm(){return(0,o.mG)(this,void 0,void 0,function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",message:"Are you sure, you want to logout?",buttons:[{text:"No",role:"cancel",cssClass:"secondary",handler:e=>{console.log("Confirm Cancel: blah")}},{text:"Yes",handler:()=>{this.LogOutFun(),console.log("Confirm Okay")}}]});yield e.present()})}LogOutFun(){this.zone.run(()=>{let e={};console.log("login data response",e),this.apiService.apiCallWithLoginToken(n.n.LogOutUrl,e).subscribe(e=>{console.log("logout data response",e),this.storage.remove("allStoreData"),this.storage.getStorage().then(t=>(0,o.mG)(this,void 0,void 0,function*(){console.log("this is all stored data",t),this.platform.is("desktop")?(console.log("not mobile platform"),this.apiService.showToastMessage(e.message,"top",2e3,"greenBg"),setTimeout(()=>{window.location.reload()},200),this.apiService.generateDeviceId(),this.apiService.generateFCMToken(),this.maintance(),this.router.navigate(["./login"])):(this.apiService.generateDeviceId(),this.apiService.generateFCMToken(),this.maintance(),this.apiService.showToastMessage(e.message,"top",2e3,"greenBg"),this.router.navigate(["./login"]),console.log("mobile platform"))}))},e=>{this.apiService.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})})}maintance(){return(0,o.mG)(this,void 0,void 0,function*(){yield this.storage.getStorage().then(e=>{console.log("localStorage storedData storedData000",e)}),this.zone.run(()=>{this.apiService.apiCallWithLoginToken(n.n.maintanceUrl,{}).subscribe(e=>(0,o.mG)(this,void 0,void 0,function*(){1==e.success||"1"==e.success?(this.maintanceData=e,yield this.storage.setStorage("maintainanceData",e)):this.apiService.showToastMessage(e.message,"top",3e3,"redBg")}),e=>{this.apiService.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})})})}openSelectImageOpt(e){return(0,o.mG)(this,void 0,void 0,function*(){if(console.log("selectImage browser"),0==this.showImgOption){this.showImgOption=!0;const e=yield this.modalCtrl.create({component:a.b,cssClass:"my-custom-class",componentProps:{data:""}});return e.onDidDismiss().then(e=>{console.log(e),null!==e?(this.UplaodData=e.data,this.dataReturned=e.data.data,console.log(" this.dataReturned:",this.dataReturned),this.userImg=this.dataReturned.filebaseUrl,null==this.userImg&&(this.userImg="")):this.userImg=""}),yield e.present()}this.showImgOption=!1})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.V1),s.Y36(l.BX),s.Y36(c.$),s.Y36(p.n),s.Y36(g.F0),s.Y36(l.t4),s.Y36(u.b),s.Y36(l.IN),s.Y36(l.Dh),s.Y36(l.yF),s.Y36(s.R0b),s.Y36(d.s),s.Y36(l.Br))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-profile"]],decls:21,vars:24,consts:[[3,"ngClass"],[1,"bgDiv",2,"background-image","url('assets/Bandhan Icon/Login banner.png')"],["size-sm","12","size-md","4","size-lg","3",3,"size"],[4,"ngIf"],[1,"userIconImgDiv",3,"ngClass"],["onerror","this.src='assets/watermark/watermark.png'",3,"src","ngClass",4,"ngIf"],[1,"posDiv"],["name","camera","tappable","",3,"click"],["size-sm","12","size-md","8","size-lg","8",3,"size","ngClass"],[1,"ion-no-margin",3,"ngClass"],[1,"nameDiv","ion-no-margin"],["class","nameDiv1 ion-no-margin",4,"ngIf"],["class","act ion-text-center",4,"ngIf"],["class","sidemenu_row borderBtmDiv","tappable","",3,"click",4,"ngFor","ngForOf"],["onerror","this.src='assets/watermark/watermark.png'",3,"src","ngClass"],[1,"nameDiv1","ion-no-margin"],[1,"act","ion-text-center"],[1,"act_p"],["tappable","",1,"sidemenu_row","borderBtmDiv",3,"click"],["size-sm","2","size-md","2","size-lg","2",3,"size"],["onerror","this.src='assets/watermark/watermark.png'",1,"profileIcon",3,"src"],["size-sm","10","size-md","10","size-lg","10",1,"autoMargin","borderBtmDiv",3,"size"]],template:function(e,t){1&e&&(s.TgZ(0,"ion-content"),s.TgZ(1,"div",0),s.TgZ(2,"ion-row",1),s.TgZ(3,"ion-col",2),s.YNc(4,f,1,0,"br",3),s.TgZ(5,"div",4),s.YNc(6,v,1,4,"img",5),s.YNc(7,_,1,4,"img",5),s.TgZ(8,"div",6),s.TgZ(9,"ion-icon",7),s.NdJ("click",function(){return t.openSelectImageOpt("img")}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"ion-col",8),s.TgZ(11,"p",9),s._uU(12),s.YNc(13,D,2,1,"span",3),s.YNc(14,x,2,1,"span",3),s.qZA(),s.TgZ(15,"p",10),s._uU(16),s.qZA(),s.YNc(17,Z,2,1,"p",11),s.qZA(),s.TgZ(18,"ion-col"),s.YNc(19,b,3,1,"div",12),s.qZA(),s.qZA(),s.YNc(20,C,6,7,"ion-row",13),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("ngClass",s.VKq(16,w,null==t.platform?null:t.platform.is("mobile"))),s.xp6(2),s.Q6J("size",12),s.xp6(1),s.Q6J("ngIf",null==t.platform?null:t.platform.is("ios")),s.xp6(1),s.Q6J("ngClass",s.VKq(18,I,null==t.platform?null:t.platform.is("desktop"))),s.xp6(1),s.Q6J("ngIf",""==t.userImg),s.xp6(1),s.Q6J("ngIf",""!=t.userImg),s.xp6(3),s.Q6J("size",12)("ngClass",s.VKq(20,h,null!=t.platform&&t.platform.is("mobile")?"ion-text-center":"ion-padding-top")),s.xp6(1),s.Q6J("ngClass",s.VKq(22,h,null!=t.platform&&t.platform.is("mobile")?"deskDiv":"nameDiv")),s.xp6(1),s.hij(" ",null==t.profileData||null==t.profileData.emp_data?null:t.profileData.emp_data.full_name," "),s.xp6(1),s.Q6J("ngIf",""!=(null==t.profileData||null==t.profileData.emp_data?null:t.profileData.emp_data.customer_type_name)),s.xp6(1),s.Q6J("ngIf",""!=(null==t.profileData||null==t.profileData.emp_data?null:t.profileData.emp_data.dealer_code)),s.xp6(2),s.Oqu(null==t.profileData||null==t.profileData.emp_data?null:t.profileData.emp_data.contact),s.xp6(1),s.Q6J("ngIf",""!=(null==t.profileData||null==t.profileData.emp_data?null:t.profileData.emp_data.dealers)),s.xp6(2),s.Q6J("ngIf",1==(null==t.profileData||null==t.profileData.button_info?null:t.profileData.button_info.isButtonApp)),s.xp6(1),s.Q6J("ngForOf",null==t.profileData?null:t.profileData.sidemenu_list))},directives:[l.W2,m.mk,l.Nd,l.wI,m.O5,l.gu,m.sg],styles:[".profileIcon[_ngcontent-%COMP%]{height:20px;width:100%}.profileDiv[_ngcontent-%COMP%]{font-size:16px;color:#000}.desktitle[_ngcontent-%COMP%]{font-size:17px;color:#000}.deskDiv[_ngcontent-%COMP%], .nameDiv[_ngcontent-%COMP%]{color:#fff}.deskDiv[_ngcontent-%COMP%]{font-size:18px;line-height:22px}.nameDiv[_ngcontent-%COMP%]{font-size:16px;line-height:20px}.nameDiv1[_ngcontent-%COMP%]{font-size:14px;line-height:20px;color:#fff}.userIconImgDiv[_ngcontent-%COMP%]{height:130px;width:130px;margin:auto;position:relative;color:#fff;padding:5px;border:5px solid #fff;border-radius:50%}.userIconImgDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:50%}.userIconImgDiv[_ngcontent-%COMP%]   .posDiv[_ngcontent-%COMP%]{position:absolute;right:-22px;top:10px}.userIconImgDiv[_ngcontent-%COMP%]   .posDiv[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:35px}.forDesktopImgDiv[_ngcontent-%COMP%]{height:70px;width:70px;padding:3px;border:3px solid #fff}.forDesktopImgDiv[_ngcontent-%COMP%]   .posDiv[_ngcontent-%COMP%]{right:-5px;top:5px}.forDesktopImgDiv[_ngcontent-%COMP%]   .posDiv[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}.sidemenu_row[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:5px}ion-content[_ngcontent-%COMP%]{--background:linear-gradient(#68090354,hsla(0,4%,95%,0.97))}.act[_ngcontent-%COMP%]{text-transform:capitalize;--background:transparent!important;border:1px solid;border-radius:24px;height:30px;color:#fff;width:100%}.act_p[_ngcontent-%COMP%]{margin-top:5px}"]}),e})()}}]);