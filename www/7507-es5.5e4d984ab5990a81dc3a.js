!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[7507],{77507:function(n,a,i){"use strict";i.r(a),i.d(a,{ContactUsPageModule:function(){return C}});var o=i(38583),l=i(90665),s=i(47823),r=i(12234),c=i(56544),g=i(88720),u=i(14303),p=i(51532);function d(t,e){if(1&t&&(g.TgZ(0,"ion-row"),g.TgZ(1,"ion-col",16),g.TgZ(2,"div",17),g._UZ(3,"img",18,19),g.qZA(),g.qZA(),g.qZA()),2&t){var n=g.oxw();g.xp6(3),g.Q6J("src",n.attachData,g.LSH)}}var Z,h,m=[{path:"",component:(Z=function(){function n(e,a,i,o,l,s){t(this,n),this.zone=e,this.router=a,this.activeRoute=i,this.apiService=o,this.sendData=l,this.navctrl=s,this.subject="",this.description="",this.files=[],this.userImg="",this.CategoryData=this.sendData.alldata,console.log("contact us Data",this.CategoryData)}var a,i,o;return a=n,(i=[{key:"ngOnInit",value:function(){}},{key:"changeData",value:function(t,e){}},{key:"submit",value:function(t,e){var n=this;this.apiService.presentLoadingDefault(),console.log(t,e),this.zone.run(function(){var a={subject:t,message:e,attachment:n.attachData,media_type:"1",flag_type:"1"};console.log("apiKey : ",a),n.apiService.apiCallWithLoginToken(c.n.ContactHelpSupportUrl,a).subscribe(function(t){console.log(t),n.apiService.presentLoadingClose(),1==t.success?(n.apiService.showToastMessage(t.message,"top",2e3,"greenBg"),n.navctrl.pop(),n.subject="",n.description="",n.attachData=""):n.apiService.showToastMessage(t.message,"top",3e3,"redBg")},function(t){n.apiService.presentLoadingClose(),n.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})}},{key:"attachment",value:function(t){var e=this;console.log("event1==>",t),console.log("this.currentObj==>",this.currentObj);var n=new FormData;if(t.target.files){var a=t.target.files[0],i=new FileReader;i.readAsDataURL(a),i.onload=function(){console.log(i.result),e.attachData=i.result,n.append("file",e.files),console.log("files : ",e.files),console.log("this.currentObj==>",e.currentObj)}}}}])&&e(a.prototype,i),o&&e(a,o),n}(),Z.\u0275fac=function(t){return new(t||Z)(g.Y36(g.R0b),g.Y36(r.F0),g.Y36(r.gz),g.Y36(u.s),g.Y36(p.b),g.Y36(s.SH))},Z.\u0275cmp=g.Xpm({type:Z,selectors:[["app-contact-us"]],decls:45,vars:22,consts:[["slot","start"],[1,"ion-padding"],["size-sm","12","size-md","6","size-lg","6","push-md","3","push-lg","3",1,"whiteCol","ion-padding",3,"size"],["size-sm","1","size-md","1","size-lg","1",3,"size"],["onerror","this.src='assets/watermark/watermark.png'",1,"contactImage",3,"src"],["size-sm","11","size-md","11","size-lg","11",3,"size"],[1,"ion-no-margin","pDiv"],[1,"borderDiv","borderRediDiv"],[3,"ngModel","placeholder","ngModelChange"],["rows","4","cols","20",3,"ngModel","placeholder","ngModelChange"],["onerror","this.src='assets/watermark/watermark.png'",1,"iconImage",3,"src"],["size-sm","11","size-md","11","size-lg","11",1,"paddLeft0",3,"size"],[1,"image-upload"],["type","file","accept","image/x-png,image/jpeg",3,"ngModel","ngModelChange","change"],[4,"ngIf"],["size","small","color","danger","shape","round",1,"nextbtn",3,"click"],["sizeLg","12","sizeMd","12","sizeXs","12"],[1,"relativeDiv"],[1,"imgPreview",3,"src"],["imageSrc",""]],template:function(t,e){1&t&&(g.TgZ(0,"ion-header"),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-title"),g._uU(3),g.qZA(),g.TgZ(4,"ion-buttons",0),g._UZ(5,"ion-back-button"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(6,"ion-content",1),g.TgZ(7,"ion-row"),g.TgZ(8,"ion-col",2),g.TgZ(9,"ion-row"),g.TgZ(10,"ion-col",3),g._UZ(11,"img",4),g.qZA(),g.TgZ(12,"ion-col",5),g.TgZ(13,"p",6),g._uU(14),g.qZA(),g.qZA(),g.qZA(),g.TgZ(15,"ion-row"),g.TgZ(16,"ion-col",3),g._UZ(17,"img",4),g.qZA(),g.TgZ(18,"ion-col",5),g.TgZ(19,"p",6),g._uU(20),g.qZA(),g.qZA(),g.qZA(),g.TgZ(21,"ion-row"),g.TgZ(22,"ion-col"),g.TgZ(23,"p",6),g._uU(24),g.qZA(),g._UZ(25,"br"),g.TgZ(26,"div",7),g.TgZ(27,"ion-input",8),g.NdJ("ngModelChange",function(t){return e.subject=t}),g.qZA(),g.qZA(),g._UZ(28,"br"),g.TgZ(29,"div",7),g.TgZ(30,"ion-textarea",9),g.NdJ("ngModelChange",function(t){return e.description=t}),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(31,"ion-row"),g.TgZ(32,"ion-col",3),g._UZ(33,"img",10),g.qZA(),g.TgZ(34,"ion-col",11),g.TgZ(35,"label",12),g.TgZ(36,"p",6),g._uU(37),g.qZA(),g.TgZ(38,"input",13),g.NdJ("ngModelChange",function(t){return e.imageFile=t})("change",function(t){return e.attachment(t)}),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.YNc(39,d,5,1,"ion-row",14),g._UZ(40,"br"),g.TgZ(41,"ion-row"),g.TgZ(42,"ion-col"),g.TgZ(43,"ion-button",15),g.NdJ("click",function(){return e.submit(e.subject,e.description)}),g._uU(44,"Submit"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(3),g.Oqu(null==e.CategoryData?null:e.CategoryData.pageTitle),g.xp6(5),g.Q6J("size",12),g.xp6(2),g.Q6J("size",1),g.xp6(1),g.Q6J("src",null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.contact_number_icon,g.LSH),g.xp6(1),g.Q6J("size",11),g.xp6(2),g.Oqu(null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.contact_number),g.xp6(2),g.Q6J("size",1),g.xp6(1),g.Q6J("src",null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.mail_id_icon,g.LSH),g.xp6(1),g.Q6J("size",11),g.xp6(2),g.Oqu(null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.mail_id),g.xp6(4),g.Oqu(null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.write_us),g.xp6(3),g.Q6J("ngModel",e.subject)("placeholder",null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.subject),g.xp6(3),g.Q6J("ngModel",e.description)("placeholder",null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.description),g.xp6(2),g.Q6J("size",1),g.xp6(1),g.Q6J("src",null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.attachment_icon,g.LSH),g.xp6(1),g.Q6J("size",11),g.xp6(3),g.AsE("",null==e.CategoryData||null==e.CategoryData.list?null:e.CategoryData.list.attachment,"\xa0 ",e.imageFile,""),g.xp6(1),g.Q6J("ngModel",e.imageFile),g.xp6(1),g.Q6J("ngIf",e.attachData))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.oU,s.cs,s.W2,s.Nd,s.wI,s.pK,s.j9,l.JJ,l.On,s.g2,l.Fj,o.O5,s.YG],styles:["ion-select[_ngcontent-%COMP%]{width:100%;justify-content:center}ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]   .select-icon-inner[_ngcontent-%COMP%]{color:red!important;opacity:1!important}.image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.contactImage[_ngcontent-%COMP%]{height:30px;width:100%}.iconImage[_ngcontent-%COMP%]{height:15px;width:100%}.pDiv[_ngcontent-%COMP%]{font-size:13px}.paddLeft0[_ngcontent-%COMP%]{padding-left:0}"]}),Z)}],f=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[r.Bz.forChild(m)],r.Bz]}),e}(),C=((h=function e(){t(this,e)}).\u0275fac=function(t){return new(t||h)},h.\u0275mod=g.oAB({type:h}),h.\u0275inj=g.cJS({imports:[[o.ez,l.u5,s.Pc,f]]}),h)}}])}();