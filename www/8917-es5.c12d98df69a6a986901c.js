!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[8917],{98917:function(i,e,o){"use strict";o.r(e),o.d(e,{AlertListPageModule:function(){return b}});var a=o(38583),l=o(90665),r=o(47823),s=o(12234),c=o(56544),u=o(88720),g=o(14303),p=o(51532);function f(n,t){if(1&n){var i=u.EpF();u.TgZ(0,"ion-row",9),u.NdJ("click",function(){var n=u.CHM(i).$implicit;return u.oxw(2).alertDetail(n)}),u.TgZ(1,"ion-col",10),u._UZ(2,"img",11),u.qZA(),u.TgZ(3,"ion-col",10),u._UZ(4,"p",12),u.TgZ(5,"p",13),u._uU(6),u.qZA(),u.qZA(),u.qZA()}if(2&n){var e=t.$implicit;u.xp6(1),u.Q6J("size",3),u.xp6(1),u.s9C("src",null==e?null:e.title_icon,u.LSH),u.xp6(1),u.Q6J("size",9),u.xp6(1),u.Q6J("innerHTML",e.description,u.oJD),u.xp6(2),u.Oqu(null==e?null:e.created_date)}}function d(n,t){if(1&n&&(u.TgZ(0,"div",6),u.TgZ(1,"div",7),u.YNc(2,f,7,5,"ion-row",8),u.qZA(),u.qZA()),2&n){var i=u.oxw();u.xp6(2),u.Q6J("ngForOf",null==i.alertList?null:i.alertList.alert_notification)}}function h(n,t){if(1&n&&(u.TgZ(0,"div"),u.TgZ(1,"p",14),u._uU(2),u.qZA(),u.qZA()),2&n){var i=u.oxw();u.xp6(2),u.Oqu(i.errorMessage)}}function m(n,t){if(1&n){var i=u.EpF();u.TgZ(0,"ion-infinite-scroll",15),u.NdJ("ionInfinite",function(n){return u.CHM(i),u.oxw().loadData(n)}),u._UZ(1,"ion-infinite-scroll-content",16),u.qZA()}}var v,x,Z=[{path:"",component:(v=function(){function i(t,e,o,a){n(this,i),this.zone=t,this.router=e,this.apiServices=o,this.sendData=a,this.value=0,this.infiniteScroll_call=!1}var e,o,a;return e=i,(o=[{key:"ngOnInit",value:function(){this.alertListFun()}},{key:"alertListFun",value:function(){var n=this;this.zone.run(function(){console.log("shivi fun called==");var t={limit:n.value};console.log("brand pending api keys==",t),n.apiServices.apiCallWithLoginToken(c.n.alertListApi,t).subscribe(function(t){console.log("brand pending Api Result==",t),n.alertData=t,1==t.success?(n.alertList=null==n.alertList?t.data:n.alertList.concat(t.data),n.errorMessage=""):n.errorMessage=t.message,1==n.infiniteScroll_call&&n.stopInfiniteScroll()},function(t){n.apiServices.showToastMessage(JSON.stringify(t),"top",3e3,"redBg"),0==n.infiniteScroll_call&&n.stopInfiniteScroll()})})}},{key:"alertDetail",value:function(n){var t=this;this.zone.run(function(){""!=n.fron_end_page_name&&(t.sendData.alldata=n,console.log("alertDat",t.sendData.alldata),t.router.navigate([n.fron_end_page_name]))})}},{key:"stopInfiniteScroll",value:function(){1==this.infiniteScroll_call&&(this.infiniteScroll_call=!1,this.infiniteScroll_val.target.complete())}},{key:"loadData",value:function(n){var t=this;this.infiniteScroll_call=!0,this.infiniteScroll_val=n,setTimeout(function(){t.value=t.alertList.length,t.alertListFun()},500)}}])&&t(e.prototype,o),a&&t(e,a),i}(),v.\u0275fac=function(n){return new(n||v)(u.Y36(u.R0b),u.Y36(s.F0),u.Y36(g.s),u.Y36(p.b))},v.\u0275cmp=u.Xpm({type:v,selectors:[["app-alert-list"]],decls:12,vars:5,consts:[["slot","start"],[1,"ion-padding"],["sizexs","12","size-md","8","size-lg","8","push-md","2","push-lg","2",1,"whiteCol","ion-no-padding",3,"size"],["class","moduleAligment",4,"ngIf"],[4,"ngIf"],["threshold","100px",3,"ionInfinite",4,"ngIf"],[1,"moduleAligment"],[1,"dataContainer"],["class","alertlist","tappable","",3,"click",4,"ngFor","ngForOf"],["tappable","",1,"alertlist",3,"click"],[3,"size"],["onerror","this.src='./assets/watermark/watermark.png'",1,"modIcons",3,"src"],[1,"modTitle",3,"innerHTML"],[1,"time","autoMargin"],[1,"ion-text-center"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."]],template:function(n,t){1&n&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-title"),u._uU(3),u.qZA(),u.TgZ(4,"ion-buttons",0),u._UZ(5,"ion-back-button"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"ion-content",1),u.TgZ(7,"ion-row"),u.TgZ(8,"ion-col",2),u.YNc(9,d,3,1,"div",3),u.YNc(10,h,3,1,"div",4),u.YNc(11,m,2,0,"ion-infinite-scroll",5),u.qZA(),u.qZA(),u.qZA()),2&n&&(u.xp6(3),u.Oqu(null==t.alertData?null:t.alertData.pageTitle),u.xp6(5),u.Q6J("size",12),u.xp6(1),u.Q6J("ngIf",t.alertList),u.xp6(1),u.Q6J("ngIf",t.errorMessage),u.xp6(1),u.Q6J("ngIf",""==t.errorMessage))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.oU,r.cs,r.W2,r.Nd,r.wI,a.O5,a.sg,r.ju,r.MB],styles:[".moduleAligment[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.dataContainer[_ngcontent-%COMP%]{padding-top:10px}.dataContainer[_ngcontent-%COMP%]   img.modIcons[_ngcontent-%COMP%]{border-radius:50%;width:60px;height:60px;-o-object-fit:contain;object-fit:contain;border:1px solid #d6d4d4;display:block;margin:auto}.dataContainer[_ngcontent-%COMP%]   p.modTitle[_ngcontent-%COMP%]{margin:5px auto;line-height:1.5;font-size:14px;color:#444;font-weight:700}.dataContainer[_ngcontent-%COMP%]   .alertlist[_ngcontent-%COMP%]{border:1px solid #ececec;border-radius:5px;margin-bottom:5px;box-shadow:0 2px 5px #f1f1f1;background:#fff}.dataContainer[_ngcontent-%COMP%]   p.date[_ngcontent-%COMP%]{font-weight:700;color:#000;font-size:18px;margin-bottom:3px}.dataContainer[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%]{font-size:13px;color:gray}"]}),v)}],_=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),t}(),b=((x=function t(){n(this,t)}).\u0275fac=function(n){return new(n||x)},x.\u0275mod=u.oAB({type:x}),x.\u0275inj=u.cJS({imports:[[a.ez,l.u5,r.Pc,_]]}),x)}}])}();