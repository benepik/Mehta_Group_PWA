!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[1924],{81924:function(i,o,e){"use strict";e.r(o),e.d(o,{CommunicationDetailPageModule:function(){return M}});var a=e(38583),l=e(90665),c=e(47823),m=e(12234),u=e(56544),r=e(88720),s=e(14303),p=e(51532),g=e(18345),d=e(75176);function f(n,t){if(1&n&&r._UZ(0,"img",21),2&n){var i=r.oxw().$implicit;r.Q6J("src",null==i?null:i.media,r.LSH)}}function h(n,t){if(1&n&&r._UZ(0,"video",22),2&n){var i=r.oxw().$implicit;r.Q6J("src",null==i?null:i.media,r.LSH)("poster",null==i?null:i.thumb_image,r.LSH)}}function _(n,t){if(1&n&&(r._UZ(0,"iframe",23),r.ALo(1,"safe")),2&n){var i=r.oxw().$implicit;r.Q6J("src",r.lcZ(1,1,null==i?null:i.media),r.uOi)}}function x(n,t){if(1&n&&(r.TgZ(0,"ion-slide"),r.YNc(1,f,1,1,"img",18),r.YNc(2,h,1,2,"video",19),r.YNc(3,_,2,3,"iframe",20),r.qZA()),2&n){var i=t.$implicit;r.xp6(1),r.Q6J("ngIf",1==(null==i?null:i.media_type)||"1"==(null==i?null:i.media_type)),r.xp6(1),r.Q6J("ngIf",2==(null==i?null:i.media_type)||"2"==(null==i?null:i.media_type)),r.xp6(1),r.Q6J("ngIf",3==(null==i?null:i.media_type)||"3"==(null==i?null:i.media_type))}}function Z(n,t){if(1&n){var i=r.EpF();r.TgZ(0,"ion-icon",24),r.NdJ("click",function(){r.CHM(i);var n=r.oxw();return n.doLike(null==n.community?null:n.community.data)}),r.qZA()}}function y(n,t){if(1&n){var i=r.EpF();r.TgZ(0,"ion-icon",25),r.NdJ("click",function(){r.CHM(i);var n=r.oxw();return n.doLike(null==n.community?null:n.community.data)}),r.qZA()}}function v(n,t){if(1&n&&(r.TgZ(0,"div"),r.TgZ(1,"h5",26),r._uU(2),r.qZA(),r._UZ(3,"img",27),r.qZA()),2&n){var i=r.oxw();r.xp6(2),r.Oqu(null==i.community||null==i.community.data?null:i.community.data.no_comment_msg),r.xp6(1),r.Q6J("src",null==i.community||null==i.community.data?null:i.community.data.no_comment_image,r.LSH)}}function w(n,t){if(1&n&&(r.TgZ(0,"div",31),r.TgZ(1,"p",32),r._uU(2),r.qZA(),r.TgZ(3,"p",33),r._uU(4),r.qZA(),r._UZ(5,"p",34),r.qZA()),2&n){var i=r.oxw().$implicit;r.xp6(2),r.Oqu(null==i?null:i.full_name),r.xp6(2),r.Oqu(null==i?null:i.convert_time),r.xp6(1),r.Q6J("innerHTML",null==i?null:i.comments,r.oJD)}}function z(n,t){if(1&n&&(r.TgZ(0,"div",35),r.TgZ(1,"p",32),r._uU(2),r.qZA(),r.TgZ(3,"p",33),r._uU(4),r.qZA(),r._UZ(5,"p",34),r.qZA()),2&n){var i=r.oxw().$implicit;r.xp6(2),r.Oqu(null==i?null:i.full_name),r.xp6(2),r.Oqu(null==i?null:i.convert_time),r.xp6(1),r.Q6J("innerHTML",null==i?null:i.comments,r.oJD)}}function T(n,t){if(1&n&&(r.TgZ(0,"ion-row"),r.TgZ(1,"ion-col",28),r.YNc(2,w,6,3,"div",29),r.qZA(),r.TgZ(3,"ion-col",28),r.YNc(4,z,6,3,"div",30),r.qZA(),r.qZA()),2&n){var i=t.$implicit;r.xp6(1),r.Q6J("size",6),r.xp6(1),r.Q6J("ngIf","left"==(null==i?null:i.comment_align)),r.xp6(1),r.Q6J("size",6),r.xp6(1),r.Q6J("ngIf","right"==(null==i?null:i.comment_align))}}function k(n,t){if(1&n){var i=r.EpF();r.TgZ(0,"ion-col",36),r.TgZ(1,"ion-icon",37),r.NdJ("click",function(){r.CHM(i);var n=r.oxw();return n.doComment(n.comment)}),r.qZA(),r.qZA()}2&n&&r.Q6J("size",2)}var C,J,b=[{path:"",component:(C=function(){function i(t,o,e,a,l,c,m){var u=this;n(this,i),this.activeRoute=t,this.router=o,this.zone=e,this.platform=a,this.apiService=l,this.sendData=c,this.localStorgae=m,this.comment="",this.slideOpts={initialSlide:1,speed:400,spaceBetween:10},this.communicationHomeData=this.sendData.alldata,this.localStorgae.getStorage().then(function(n){u.loginAllData=n.allStoreData,console.log("storedData",n)})}var o,e,a;return o=i,(e=[{key:"ionViewWillEnter",value:function(){this.communicationDetails()}},{key:"ngOnInit",value:function(){}},{key:"doLike",value:function(n){var t=this;this.zone.run(function(){0==n.like_status?(n.total_likes=parseInt(n.total_likes)+1,n.like_status=1):(n.total_likes=parseInt(n.total_likes)-1,n.like_status=0),t.apiService.apiCallWithLoginToken(u.n.DoLike,{flag_type:t.communicationHomeData.flag_type,post_id:t.communicationHomeData.post_id}).subscribe(function(n){console.log("DoLike: ",n)})})}},{key:"communicationDetails",value:function(){var n=this;this.apiService.presentLoadingDefault(),this.zone.run(function(){n.apiService.apiCallWithLoginToken(u.n.PostDetailUrl,{flag_type:n.communicationHomeData.flag_type,post_id:n.communicationHomeData.post_id}).subscribe(function(t){console.log("PostListUrl: ",t),n.apiService.presentLoadingClose(),1==t.success&&(n.community=t,n.noComment=n.community.data.total_comments)},function(t){n.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})}},{key:"doComment",value:function(n){var t=this;this.zone.run(function(){var i={flag_type:t.communicationHomeData.flag_type,post_id:t.communicationHomeData.post_id,comment:t.comment},o={full_name:t.loginAllData.full_name,convert_time:"Just now",comments:n,comment_align:"right"};0==t.community.data.total_comments&&(t.noComment=1),t.community.data.comments.unshift(o),t.community.data.total_comments=parseInt(t.community.data.total_comments)+1,console.log("this community",t.community),""!=i.comment&&(console.log(i.comment),t.apiService.apiCallWithLoginToken(u.n.DoCommentUrl,i).subscribe(function(n){console.log("DoCommentUrl: ",n),1==n.success&&(t.comment="")}))})}}])&&t(o.prototype,e),a&&t(o,a),i}(),C.\u0275fac=function(n){return new(n||C)(r.Y36(m.gz),r.Y36(m.F0),r.Y36(r.R0b),r.Y36(c.t4),r.Y36(s.s),r.Y36(p.b),r.Y36(g.n))},C.\u0275cmp=r.Xpm({type:C,selectors:[["app-communication-detail"]],decls:32,vars:18,consts:[["slot","start"],[1,"ion-padding"],["size-sm","12","size-md","8","size-lg","8","push-lg","2","push-md","2",1,"whiteCol","whit_Pad","whit_pad_top",3,"size"],["pager","true",3,"options"],[4,"ngFor","ngForOf"],[1,"titleDiv",3,"innerHTML"],[1,"contentDiv",3,"innerHTML"],["size-sm","5","size-md","5","size-lg","5",3,"size"],["name","thumbs-up-outline",3,"click",4,"ngIf"],["name","thumbs-up",3,"click",4,"ngIf"],["size-sm","7","size-md","7","size-lg","7",1,"ion-text-right",3,"size"],["name","chatbox-ellipses-outline"],[4,"ngIf"],[2,"background-color","#f2f4f5"],["size-sm","12","size-md","8","size-lg","8","push-lg","2","push-md","2",3,"size"],["size-sm","10","size-md","11","size-lg","11",3,"size"],["placeholder","Type Your Comment Here",3,"ngModel","ngModelChange"],["size-sm","2","size-md","1","size-lg","1","class","ion-text-center",3,"size",4,"ngIf"],["onerror","this.src='assets/watermark/watermark.png'","class","communicationImage",3,"src",4,"ngIf"],["width","100%","height","250px","controls","",3,"src","poster",4,"ngIf"],["width","100%","height","250px",3,"src",4,"ngIf"],["onerror","this.src='assets/watermark/watermark.png'",1,"communicationImage",3,"src"],["width","100%","height","250px","controls","",3,"src","poster"],["width","100%","height","250px",3,"src"],["name","thumbs-up-outline",3,"click"],["name","thumbs-up",3,"click"],[1,"colom"],["onerror","this.src='assets/watermark/watermark.png'",3,"src"],["size-sm","6","size-md","6","size-lg","6",3,"size"],["class","ion-text-right para-col para_color",4,"ngIf"],["class","ion-text-left para-col",4,"ngIf"],[1,"ion-text-right","para-col","para_color"],[1,"para-name"],[1,"para-time"],[1,"ion-no-margin",3,"innerHTML"],[1,"ion-text-left","para-col"],["size-sm","2","size-md","1","size-lg","1",1,"ion-text-center",3,"size"],["name","caret-forward-outline",1,"sendIcon",3,"click"]],template:function(n,t){1&n&&(r.TgZ(0,"ion-header"),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-title"),r._uU(3),r.qZA(),r.TgZ(4,"ion-buttons",0),r._UZ(5,"ion-back-button"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(6,"ion-content",1),r.TgZ(7,"ion-row"),r.TgZ(8,"ion-col",2),r.TgZ(9,"ion-slides",3),r.YNc(10,x,4,3,"ion-slide",4),r.qZA(),r._UZ(11,"p",5),r._UZ(12,"p",6),r.TgZ(13,"ion-row"),r.TgZ(14,"ion-col",7),r.YNc(15,Z,1,0,"ion-icon",8),r.YNc(16,y,1,0,"ion-icon",9),r._uU(17),r.qZA(),r.TgZ(18,"ion-col",10),r._UZ(19,"ion-icon",11),r._uU(20),r.qZA(),r.qZA(),r._UZ(21,"hr"),r.YNc(22,v,4,2,"div",12),r.TgZ(23,"div"),r.YNc(24,T,5,4,"ion-row",4),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(25,"ion-footer",13),r.TgZ(26,"ion-row"),r.TgZ(27,"ion-col",14),r.TgZ(28,"ion-row"),r.TgZ(29,"ion-col",15),r.TgZ(30,"input",16),r.NdJ("ngModelChange",function(n){return t.comment=n}),r.qZA(),r.qZA(),r.YNc(31,k,2,1,"ion-col",17),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&n&&(r.xp6(3),r.Oqu(null==t.community?null:t.community.pageTitle),r.xp6(5),r.Q6J("size",12),r.xp6(1),r.Q6J("options",t.slideOpts),r.xp6(1),r.Q6J("ngForOf",null==t.community||null==t.community.data?null:t.community.data.media),r.xp6(1),r.Q6J("innerHTML",null==t.community||null==t.community.data?null:t.community.data.title,r.oJD),r.xp6(1),r.Q6J("innerHTML",null==t.community||null==t.community.data?null:t.community.data.description,r.oJD),r.xp6(2),r.Q6J("size",5),r.xp6(1),r.Q6J("ngIf",0==(null==t.community||null==t.community.data?null:t.community.data.like_status)),r.xp6(1),r.Q6J("ngIf",1==(null==t.community||null==t.community.data?null:t.community.data.like_status)),r.xp6(1),r.hij(" ",null==t.community||null==t.community.data?null:t.community.data.total_likes,"\xa0Likes "),r.xp6(1),r.Q6J("size",7),r.xp6(2),r.hij("\xa0",null==t.community||null==t.community.data?null:t.community.data.total_comments,"\xa0Comments "),r.xp6(2),r.Q6J("ngIf","0"==t.noComment),r.xp6(2),r.Q6J("ngForOf",null==t.community||null==t.community.data?null:t.community.data.comments),r.xp6(3),r.Q6J("size",12),r.xp6(2),r.Q6J("size",10),r.xp6(1),r.Q6J("ngModel",t.comment),r.xp6(1),r.Q6J("ngIf",""!=t.comment))},directives:[c.Gu,c.sr,c.wd,c.Sm,c.oU,c.cs,c.W2,c.Nd,c.wI,c.Hr,a.sg,a.O5,c.gu,c.fr,l.Fj,l.JJ,l.On,c.A$],pipes:[d.y],styles:[".communicationImage[_ngcontent-%COMP%]{width:100%;height:250px;-o-object-fit:contain;object-fit:contain}.titleDiv[_ngcontent-%COMP%]{font-size:16px;color:var(--headerColor);font-weight:700}.contentDiv[_ngcontent-%COMP%]{font-size:13px;color:#4a4747;line-height:15px}hr[_ngcontent-%COMP%]{width:100%!important;font-size:1em!important;border:.5px solid #dcdcdc}input[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10px}.sendIcon[_ngcontent-%COMP%]{font-size:35px;background-color:var(--headerColor);color:#fff;border-radius:15px}.chat_container[_ngcontent-%COMP%]{flex-wrap:wrap;padding:20px 18px 0}.chat_container[_ngcontent-%COMP%]   .chat_box[_ngcontent-%COMP%]{width:auto!important;margin-bottom:15px;min-width:70%;align-items:flex-start}.chat_container[_ngcontent-%COMP%]   .chat_box[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]{min-width:90px;border-radius:7px;max-width:100%;min-width:191px;padding:11px 20px}.chat_container[_ngcontent-%COMP%]   .chat_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.7rem;font-weight:400;color:var(--text-color-white)}.para-name[_ngcontent-%COMP%], .para-nameIOs[_ngcontent-%COMP%]{color:var(--headerColor);font-size:14px;margin-bottom:0;margin-top:5px;line-height:15px}.para-time[_ngcontent-%COMP%]{font-size:10px;margin-bottom:5px;margin-top:10px;color:#a4a2a2;line-height:4px}.para-col[_ngcontent-%COMP%]{box-shadow:0 0 7px 2px #e4e0e0;border-radius:20px;height:100%;padding:5px}.para_color[_ngcontent-%COMP%]{background-color:#eaeaea}"]}),C)}],q=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[m.Bz.forChild(b)],m.Bz]}),t}(),A=e(43018),M=((J=function t(){n(this,t)}).\u0275fac=function(n){return new(n||J)},J.\u0275mod=r.oAB({type:J}),J.\u0275inj=r.cJS({imports:[[a.ez,l.u5,c.Pc,q,A.D]]}),J)}}])}();