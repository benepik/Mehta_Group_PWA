(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[2715],{32715:function(i,o,e){"use strict";e.r(o),e.d(o,{AppoveRejectReedemptionPageModule:function(){return x}});var n=e(38583),t=e(90665),r=e(47823),s=e(12234),a=e(56544),l=e(88720),c=e(14303),u=e(51532);function p(i,o){if(1&i&&(l.TgZ(0,"ion-col",10),l.TgZ(1,"p",11),l._uU(2),l.qZA(),l.qZA()),2&i){const i=o.$implicit;l.Q6J("size",12),l.xp6(2),l.AsE("",null==i?null:i.key,"\xa0",null==i?null:i.value,"")}}function g(i,o){if(1&i&&(l.TgZ(0,"p",20),l._uU(1),l.qZA()),2&i){const i=l.oxw().$implicit;l.Udp("color",null==i?null:i.color_code)("background-color",null==i?null:i.circle_color),l.xp6(1),l.Oqu(null==i?null:i.value)}}function d(i,o){if(1&i&&l._UZ(0,"img",21),2&i){const i=l.oxw().$implicit;l.Q6J("src",null==i?null:i.value,l.LSH)}}function f(i,o){if(1&i&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",14),l.TgZ(2,"p",15),l._uU(3),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",16),l._uU(5,":"),l.qZA(),l.TgZ(6,"ion-col",17),l.YNc(7,g,2,5,"p",18),l.YNc(8,d,1,1,"img",19),l.qZA(),l.qZA()),2&i){const i=o.$implicit;l.xp6(1),l.Q6J("size",5),l.xp6(2),l.Oqu(null==i?null:i.key),l.xp6(1),l.Q6J("size",1),l.xp6(2),l.Q6J("size",6),l.xp6(1),l.Q6J("ngIf",0==(null==i?null:i.media_type)),l.xp6(1),l.Q6J("ngIf",1==(null==i?null:i.media_type))}}function Z(i,o){if(1&i&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col"),l.TgZ(2,"p",12),l._uU(3),l.qZA(),l.TgZ(4,"div",13),l.YNc(5,f,9,6,"ion-row",8),l.qZA(),l.qZA(),l.qZA()),2&i){const i=o.$implicit;l.xp6(3),l.Oqu(null==i?null:i.key),l.xp6(2),l.Q6J("ngForOf",null==i?null:i.data)}}function h(i,o){if(1&i){const i=l.EpF();l.TgZ(0,"ion-button",23),l.NdJ("click",function(){l.CHM(i);const o=l.oxw().$implicit;return l.oxw().acceptFun(o)}),l._uU(1),l.qZA()}if(2&i){const i=l.oxw().$implicit;l.xp6(1),l.Oqu(null==i?null:i.btn_text)}}function _(i,o){if(1&i&&(l.TgZ(0,"ion-col"),l.YNc(1,h,2,1,"ion-button",22),l.qZA()),2&i){const i=o.$implicit;l.xp6(1),l.Q6J("ngIf",1==i.btn_applicable)}}function m(i,o){if(1&i&&(l.TgZ(0,"div"),l.TgZ(1,"p",24),l._uU(2),l.qZA(),l.qZA()),2&i){const i=l.oxw();l.xp6(2),l.Oqu(i.errorMessage)}}const v=[{path:"",component:(()=>{class i{constructor(i,o,e,n,t){this.apiService=i,this.zone=o,this.route=e,this.location=n,this.sendData=t,this.priviousData=this.sendData.alldata}ngOnInit(){this.orderDetail()}orderDetail(){this.apiService.presentLoadingDefault(),this.zone.run(()=>{this.apiService.apiCallWithLoginToken(a.n.orderDetailUrl,{order_id:this.priviousData.auto_id,is_panel_login:""}).subscribe(i=>{console.log("PostListUrl: ",i),this.apiService.presentLoadingClose(),this.orderData=i,1==i.success||(this.errorMessage=i.message)},i=>{this.apiService.showToastMessage(JSON.stringify(i),"top",3e3,"redBg")})})}close(){this.route.navigate(["/orderdetails"])}acceptFun(i){this.apiService.presentLoadingDefault(),this.zone.run(()=>{this.apiService.apiCallWithLoginToken(a.n.acceptRejectUrl,{order_id:this.priviousData.auto_id,product_price:"",agency_fees:"",courier_charges:"",order_status:i.order_status,approval_status:i.approval_status,request_for:this.priviousData.user_id,utm_source:""}).subscribe(i=>{console.log("PostListUrl: ",i),this.apiService.presentLoadingClose(),1==i.success?(this.location.back(),this.apiService.showToastMessage(i.message,"top",3e3,"greenBg")):this.apiService.showToastMessage(i.message,"top",3e3,"redBg")},i=>{this.apiService.presentLoadingClose(),this.apiService.showToastMessage(JSON.stringify(i),"top",3e3,"redBg")})})}}return i.\u0275fac=function(o){return new(o||i)(l.Y36(c.s),l.Y36(l.R0b),l.Y36(s.F0),l.Y36(n.Ye),l.Y36(u.b))},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-appove-reject-reedemption"]],decls:19,vars:10,consts:[["slot","start"],["tappable","",3,"click"],[1,"ion-padding"],["size-sm","12","size-md","8","size-lg","8","push-lg","2","push-md","2",1,"whiteCol","whit_Pad","whit_pad_top",3,"size"],[3,"size"],[1,"ion-no-margin","headerColor",3,"innerHTML"],[1,"ion-no-margin","boldPDiv",3,"innerHTML"],["class","ion-text-right",3,"size",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"ion-text-right",3,"size"],[1,"ion-no-margin","boldPDiv"],[1,"headerColor"],[1,"borderDiv","orderBgDiv","ion-padding"],["size-sm","5","size-md","5","size-lg","5",3,"size"],[1,"ion-no-margin","fontPDiv"],["size-sm","1","size-md","1","size-lg","1",3,"size"],["size-sm","6","size-md","6","size-lg","6",3,"size"],["class","ion-no-margin fontPDiv borderRadius ion-text-center",3,"color","background-color",4,"ngIf"],["class","imageorder",3,"src",4,"ngIf"],[1,"ion-no-margin","fontPDiv","borderRadius","ion-text-center"],[1,"imageorder",3,"src"],["color","danger ionic_btn btnDiv","tappable","",3,"click",4,"ngIf"],["color","danger ionic_btn btnDiv","tappable","",3,"click"],[1,"ion-text-center"]],template:function(i,o){1&i&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-title"),l._uU(3),l.qZA(),l.TgZ(4,"ion-buttons",0),l.TgZ(5,"ion-back-button",1),l.NdJ("click",function(){return o.close()}),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-content",2),l.TgZ(7,"ion-row"),l.TgZ(8,"ion-col",3),l.TgZ(9,"ion-row"),l.TgZ(10,"ion-col",4),l._UZ(11,"p",5),l.qZA(),l.TgZ(12,"ion-col",4),l._UZ(13,"p",6),l.qZA(),l.YNc(14,p,3,3,"ion-col",7),l.qZA(),l.YNc(15,Z,6,2,"ion-row",8),l.TgZ(16,"ion-row"),l.YNc(17,_,2,1,"ion-col",8),l.qZA(),l.YNc(18,m,3,1,"div",9),l.qZA(),l.qZA(),l.qZA()),2&i&&(l.xp6(3),l.Oqu(null==o.orderData?null:o.orderData.page_title),l.xp6(5),l.Q6J("size",12),l.xp6(2),l.Q6J("size",12),l.xp6(1),l.Q6J("innerHTML",null==o.orderData?null:o.orderData.order_str,l.oJD),l.xp6(1),l.Q6J("size",12),l.xp6(1),l.Q6J("innerHTML",null==o.orderData?null:o.orderData.total_point_str,l.oJD),l.xp6(1),l.Q6J("ngForOf",null==o.orderData?null:o.orderData.Tracking_details),l.xp6(1),l.Q6J("ngForOf",null==o.orderData?null:o.orderData.data),l.xp6(2),l.Q6J("ngForOf",null==o.orderData?null:o.orderData.footer_data),l.xp6(1),l.Q6J("ngIf",""!=o.errorMessage))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.oU,r.cs,r.W2,r.Nd,r.wI,n.sg,n.O5,r.YG],styles:[".headerColor[_ngcontent-%COMP%]{color:var(--headerColor)}.boldPDiv[_ngcontent-%COMP%]{font-weight:700}.orderBgDiv[_ngcontent-%COMP%]{background-color:#f8f8f8}.fontPDiv[_ngcontent-%COMP%]{font-size:13px}.imageorder[_ngcontent-%COMP%]{height:80px;-o-object-fit:contain;object-fit:contain}.btnDiv[_ngcontent-%COMP%]{display:block;margin:auto;width:100px}.borderRadius[_ngcontent-%COMP%]{border-radius:10px;padding:4px}"]}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),i})(),x=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[[n.ez,t.u5,r.Pc,b]]}),i})()}}]);