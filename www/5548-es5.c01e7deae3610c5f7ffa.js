!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[5548],{75548:function(i,o,t){"use strict";t.r(o),t.d(o,{OrdersPageModule:function(){return y}});var r=t(38583),a=t(90665),s=t(47823),c=t(12234),l=t(56544),u=t(88720),g=t(14303),p=t(51532),h=t(18345);function d(n,e){if(1&n&&(u.TgZ(0,"ion-col",9),u.TgZ(1,"p",10),u._uU(2),u.qZA(),u.TgZ(3,"p",11),u._uU(4),u.qZA(),u.qZA()),2&n){var i=e.$implicit;u.xp6(2),u.Oqu(null==i?null:i.key),u.xp6(2),u.Oqu(null==i?null:i.value)}}function f(n,e){if(1&n){var i=u.EpF();u.TgZ(0,"ion-row",12),u.NdJ("click",function(){var n=u.CHM(i).$implicit;return u.oxw().listDetails(n)}),u.TgZ(1,"ion-col",13),u._UZ(2,"img",14),u.qZA(),u.TgZ(3,"ion-col",15),u.TgZ(4,"p"),u._uU(5),u.qZA(),u.qZA(),u.TgZ(6,"ion-col",16),u._UZ(7,"ion-icon",17),u.qZA(),u._UZ(8,"hr",18),u.qZA()}if(2&n){var o=e.$implicit;u.xp6(2),u.Q6J("src",null==o?null:o.status_icon,u.LSH),u.xp6(3),u.AsE("",null==o?null:o.name,":",null==o?null:o.order_count,"")}}var v,Z,m=[{path:"",component:(v=function(){function i(e,o,t,r,a,s){n(this,i),this.route=e,this.platform=o,this.zone=t,this.apiService=r,this.sendData=a,this.localStorage=s,this.year=(new Date).toISOString()}var o,t,r;return o=i,(t=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.approveListShow(this.year)}},{key:"changeData",value:function(n){console.log("ev",n),this.year=this.year.slice(0,4),console.log("ev",this.year),this.approveListShow(this.year)}},{key:"approveListShow",value:function(n){var e=this;console.log("this.apiService.isSelected11111",this.apiService.isSelected),this.zone.run(function(){e.apiService.apiCallWithLoginToken(l.n.ApprovalListUrl,{year:n}).subscribe(function(n){console.log("ApprovalListUrl: ",n),e.listHeader=n.header_data,e.listData=n.data,"1"==n.success||e.apiService.showToastMessage(n.message,"top",2e3,"redBg")},function(n){e.apiService.showToastMessage(JSON.stringify(n),"top",3e3,"redBg")})})}},{key:"listDetails",value:function(n){this.year=this.year.slice(0,4),this.sendData.ordersDetails={item:n,year:this.year},this.route.navigate(["./orderdetails"])}}])&&e(o.prototype,t),r&&e(o,r),i}(),v.\u0275fac=function(n){return new(n||v)(u.Y36(c.F0),u.Y36(s.t4),u.Y36(u.R0b),u.Y36(g.s),u.Y36(p.b),u.Y36(h.n))},v.\u0275cmp=u.Xpm({type:v,selectors:[["app-orders"]],decls:16,vars:4,consts:[[1,"container1"],["size-sm","12","size-md","8","size-lg","8","push-lg","2","push-md","2",1,"whiteCol","ion-padding",3,"size"],[1,"customerPDiv"],[1,"act","ion-text-center"],["size","4",4,"ngFor","ngForOf"],["size-xl","6","size-md","6","size-xs","6"],["displayFormat","YYYY",3,"ngModel","ngModelChange","ionChange"],["name","chevron-down-outline"],[3,"click",4,"ngFor","ngForOf"],["size","4"],[1,"ion-no-margin","fontTDiv"],[1,"totalCount","ion-no-margin"],[3,"click"],["size","1",1,"ion-text-center","autoMargin"],[1,"homeLogo",3,"src"],["size","9"],["size","2",1,"ion-text-center","autoMargin"],["name","chevron-forward-outline",1,"homelogo","iconlogo"],[1,"ion-no-margin"]],template:function(n,e){1&n&&(u.TgZ(0,"ion-content"),u._UZ(1,"br"),u.TgZ(2,"div",0),u.TgZ(3,"ion-row"),u.TgZ(4,"ion-col",1),u.TgZ(5,"p",2),u._uU(6,"Redemption Order"),u.qZA(),u.TgZ(7,"div",3),u.TgZ(8,"ion-row"),u.YNc(9,d,5,2,"ion-col",4),u.qZA(),u.qZA(),u.TgZ(10,"ion-row"),u.TgZ(11,"ion-col",5),u.TgZ(12,"ion-item"),u.TgZ(13,"ion-datetime",6),u.NdJ("ngModelChange",function(n){return e.year=n})("ionChange",function(n){return e.changeData(n)}),u.qZA(),u._UZ(14,"ion-icon",7),u.qZA(),u.qZA(),u.qZA(),u.YNc(15,f,9,3,"ion-row",8),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&n&&(u.xp6(4),u.Q6J("size",12),u.xp6(5),u.Q6J("ngForOf",e.listHeader),u.xp6(4),u.Q6J("ngModel",e.year),u.xp6(2),u.Q6J("ngForOf",e.listData))},directives:[s.W2,s.Nd,s.wI,r.sg,s.Ie,s.x4,s.QI,a.JJ,a.On,s.gu],styles:[".customerPDiv[_ngcontent-%COMP%]{color:var(--headerColor)}.container1[_ngcontent-%COMP%]{width:100%;margin:55px auto 0}.act[_ngcontent-%COMP%]{text-transform:none;background:linear-gradient(195deg,#bb2929 57%,var(--headerColor) 33%)!important;border-radius:8px;padding:10px;width:100%;color:#fff;height:90px}hr[_ngcontent-%COMP%]{width:100%!important;font-size:1em!important;border:.5px solid #dcdcdc}.totalCount[_ngcontent-%COMP%]{font-weight:700;font-size:20px;margin-top:5px;letter-spacing:2px}.fontTDiv[_ngcontent-%COMP%]{font-size:13px;line-height:18px}.iconlogo[_ngcontent-%COMP%]{color:var(--headerColor)}"]}),v)}],w=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[c.Bz.forChild(m)],c.Bz]}),e}(),y=((Z=function e(){n(this,e)}).\u0275fac=function(n){return new(n||Z)},Z.\u0275mod=u.oAB({type:Z}),Z.\u0275inj=u.cJS({imports:[[r.ez,a.u5,s.Pc,w]]}),Z)}}])}();