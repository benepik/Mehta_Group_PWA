!function(){function i(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function n(i,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[3325],{43325:function(t,e,o){"use strict";o.r(e),o.d(e,{CommunicationListPageModule:function(){return x}});var a=o(38583),r=o(90665),l=o(47823),c=o(12234),s=o(56544),u=o(88720),g=o(14303),m=o(51532);function p(i,n){if(1&i){var t=u.EpF();u.TgZ(0,"ion-row",8),u.TgZ(1,"ion-col",9),u._UZ(2,"img",10),u.qZA(),u.TgZ(3,"ion-col",11),u.NdJ("click",function(){var i=u.CHM(t).$implicit;return u.oxw().gotoDetail(i)}),u._UZ(4,"p",12),u._UZ(5,"p",13),u.TgZ(6,"p",14),u._uU(7),u.qZA(),u.qZA(),u.qZA()}if(2&i){var e=n.$implicit,o=u.oxw();u.xp6(1),u.Q6J("size",4),u.xp6(1),u.Q6J("src",null==e?null:e.cover_image,u.LSH),u.xp6(1),u.Q6J("size",8),u.xp6(1),u.Q6J("innerHTML",null==e?null:e.title,u.oJD),u.xp6(1),u.Q6J("innerHTML",null==o.sendData?null:o.sendData.readMoreHTML(null==e?null:e.description,200,""),u.oJD),u.xp6(2),u.Oqu(null==e?null:e.start_date)}}function f(i,n){if(1&i&&(u.TgZ(0,"ion-row",8),u.TgZ(1,"ion-col",9),u._UZ(2,"img",15),u.qZA(),u.qZA()),2&i){var t=u.oxw();u.xp6(1),u.Q6J("size",4),u.xp6(1),u.Q6J("src",null==t.community?null:t.community.noDataImage,u.LSH)}}function d(i,n){if(1&i&&(u.TgZ(0,"div"),u.TgZ(1,"p",16),u._uU(2),u.qZA(),u.qZA()),2&i){var t=u.oxw();u.xp6(2),u.Oqu(t.errorMessage)}}function h(i,n){if(1&i){var t=u.EpF();u.TgZ(0,"ion-infinite-scroll",17),u.NdJ("ionInfinite",function(i){return u.CHM(t),u.oxw().loadData(i)}),u._UZ(1,"ion-infinite-scroll-content",18),u.qZA()}}var v,Z,b=[{path:"",component:(v=function(){function t(n,e,o,a,r){i(this,t),this.zone=n,this.router=e,this.activeRoute=o,this.apiService=a,this.sendData=r,this.value=0,this.communityData=[],this.infiniteScroll_call=!1}var e,o,a;return e=t,(o=[{key:"ngOnInit",value:function(){this.communicationList()}},{key:"communicationList",value:function(){var i=this;this.apiService.presentLoadingDefault(),this.zone.run(function(){i.apiService.apiCallWithLoginToken(s.n.PostListUrl,{value:i.value,flag_type:"1"}).subscribe(function(n){console.log("PostListUrl: ",n),i.apiService.presentLoadingClose(),i.community=n,1==n.success?(i.communityData=null==i.communityData?n.data:i.communityData.concat(n.data),i.errorMessage=""):(i.errorMessage=n.message,i.apiService.showToastMessage(n.message,"top",3e3,"redBg")),1==i.infiniteScroll_call&&i.stopInfiniteScroll()},function(n){i.apiService.showToastMessage(JSON.stringify(n),"top",3e3,"redBg"),1==i.infiniteScroll_call&&i.stopInfiniteScroll()})})}},{key:"gotoDetail",value:function(i){this.sendData.alldata=i,this.router.navigate(["/communication-detail"])}},{key:"loadData",value:function(i){var n=this;this.infiniteScroll_call=!0,this.infiniteScroll_val=i,setTimeout(function(){n.value=n.communityData.length,n.communicationList()},500)}},{key:"stopInfiniteScroll",value:function(){1==this.infiniteScroll_call&&(this.infiniteScroll_call=!1,this.infiniteScroll_val.target.complete())}}])&&n(e.prototype,o),a&&n(e,a),t}(),v.\u0275fac=function(i){return new(i||v)(u.Y36(u.R0b),u.Y36(c.F0),u.Y36(c.gz),u.Y36(g.s),u.Y36(m.b))},v.\u0275cmp=u.Xpm({type:v,selectors:[["app-communication-list"]],decls:14,vars:6,consts:[["slot","start"],[1,"ion-padding"],["size-sm","12","size-md","8","size-lg","8","push-lg","2","push-md","2",1,"whiteCol","ion-no-padding",3,"size"],[1,"underLineBorder"],["class","borderBtmDiv",4,"ngFor","ngForOf"],["class","borderBtmDiv",4,"ngIf"],[4,"ngIf"],["threshold","100px",3,"ionInfinite",4,"ngIf"],[1,"borderBtmDiv"],["size-sm","4","size-md","3","size-lg","3",1,"autoMargin",3,"size"],["onerror","this.src='assets/watermark/watermark.png'",1,"communicationImage","borderRediDiv",3,"src"],["size-sm","8","size-md","9","size-lg","9","tappable","",3,"size","click"],[1,"titleDiv","ion-no-margin",3,"innerHTML"],[1,"contentDiv",3,"innerHTML"],[1,"dateP","ion-no-margin","ion-margin-top","ion-text-right"],["onerror","this.src='assets/watermark/watermark.png'",3,"src"],[1,"ion-text-center"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."]],template:function(i,n){1&i&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-title"),u._uU(3),u.qZA(),u.TgZ(4,"ion-buttons",0),u._UZ(5,"ion-back-button"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"ion-content",1),u.TgZ(7,"ion-row"),u.TgZ(8,"ion-col",2),u._UZ(9,"div",3),u.YNc(10,p,8,6,"ion-row",4),u.YNc(11,f,3,2,"ion-row",5),u.qZA(),u.qZA(),u.YNc(12,d,3,1,"div",6),u.YNc(13,h,2,0,"ion-infinite-scroll",7),u.qZA()),2&i&&(u.xp6(3),u.Oqu(null==n.community?null:n.community.pageTitle),u.xp6(5),u.Q6J("size",12),u.xp6(2),u.Q6J("ngForOf",n.communityData),u.xp6(1),u.Q6J("ngIf",null==n.community?null:n.community.noDataImage),u.xp6(1),u.Q6J("ngIf",""!=n.errorMessage),u.xp6(1),u.Q6J("ngIf",""==n.errorMessage))},directives:[l.Gu,l.sr,l.wd,l.Sm,l.oU,l.cs,l.W2,l.Nd,l.wI,a.sg,a.O5,l.ju,l.MB],styles:[".communicationImage[_ngcontent-%COMP%]{width:100%;height:100px;-o-object-fit:cover;object-fit:cover}.titleDiv[_ngcontent-%COMP%]{font-size:14px;color:var(--headerColor);font-weight:700;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis}.contentDiv[_ngcontent-%COMP%]{font-size:13px;color:#4a4747;line-height:15px}.bgWalletImage[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;padding:5px;background-position:50%}"]}),v)}],w=function(){var n=function n(){i(this,n)};return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[c.Bz.forChild(b)],c.Bz]}),n}(),x=((Z=function n(){i(this,n)}).\u0275fac=function(i){return new(i||Z)},Z.\u0275mod=u.oAB({type:Z}),Z.\u0275inj=u.cJS({imports:[[a.ez,r.u5,l.Pc,w]]}),Z)}}])}();