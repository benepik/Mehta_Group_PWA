(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[5548],{75548:function(e,n,o){"use strict";o.r(n),o.d(n,{OrdersPageModule:function(){return m}});var t=o(38583),i=o(90665),r=o(47823),s=o(12234),a=o(56544),c=o(88720),l=o(14303),g=o(51532),p=o(18345);function h(e,n){if(1&e&&(c.TgZ(0,"ion-col",9),c.TgZ(1,"p",10),c._uU(2),c.qZA(),c.TgZ(3,"p",11),c._uU(4),c.qZA(),c.qZA()),2&e){const e=n.$implicit;c.xp6(2),c.Oqu(null==e?null:e.key),c.xp6(2),c.Oqu(null==e?null:e.value)}}function u(e,n){if(1&e){const e=c.EpF();c.TgZ(0,"ion-row",12),c.NdJ("click",function(){const n=c.CHM(e).$implicit;return c.oxw().listDetails(n)}),c.TgZ(1,"ion-col",13),c._UZ(2,"img",14),c.qZA(),c.TgZ(3,"ion-col",15),c.TgZ(4,"p"),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"ion-col",16),c._UZ(7,"ion-icon",17),c.qZA(),c._UZ(8,"hr",18),c.qZA()}if(2&e){const e=n.$implicit;c.xp6(2),c.Q6J("src",null==e?null:e.status_icon,c.LSH),c.xp6(3),c.AsE("",null==e?null:e.name,":",null==e?null:e.order_count,"")}}const d=[{path:"",component:(()=>{class e{constructor(e,n,o,t,i,r){this.route=e,this.platform=n,this.zone=o,this.apiService=t,this.sendData=i,this.localStorage=r,this.year=(new Date).toISOString()}ngOnInit(){}ionViewWillEnter(){this.approveListShow(this.year)}changeData(e){console.log("ev",e),this.year=this.year.slice(0,4),console.log("ev",this.year),this.approveListShow(this.year)}approveListShow(e){console.log("this.apiService.isSelected11111",this.apiService.isSelected),this.zone.run(()=>{this.apiService.apiCallWithLoginToken(a.n.ApprovalListUrl,{year:e}).subscribe(e=>{console.log("ApprovalListUrl: ",e),this.listHeader=e.header_data,this.listData=e.data,"1"==e.success||this.apiService.showToastMessage(e.message,"top",2e3,"redBg")},e=>{this.apiService.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})})}listDetails(e){this.year=this.year.slice(0,4),this.sendData.ordersDetails={item:e,year:this.year},this.route.navigate(["./orderdetails"])}}return e.\u0275fac=function(n){return new(n||e)(c.Y36(s.F0),c.Y36(r.t4),c.Y36(c.R0b),c.Y36(l.s),c.Y36(g.b),c.Y36(p.n))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-orders"]],decls:16,vars:4,consts:[[1,"container1"],["size-sm","12","size-md","8","size-lg","8","push-lg","2","push-md","2",1,"whiteCol","ion-padding",3,"size"],[1,"customerPDiv"],[1,"act","ion-text-center"],["size","4",4,"ngFor","ngForOf"],["size-xl","6","size-md","6","size-xs","6"],["displayFormat","YYYY",3,"ngModel","ngModelChange","ionChange"],["name","chevron-down-outline"],[3,"click",4,"ngFor","ngForOf"],["size","4"],[1,"ion-no-margin","fontTDiv"],[1,"totalCount","ion-no-margin"],[3,"click"],["size","1",1,"ion-text-center","autoMargin"],[1,"homeLogo",3,"src"],["size","9"],["size","2",1,"ion-text-center","autoMargin"],["name","chevron-forward-outline",1,"homelogo","iconlogo"],[1,"ion-no-margin"]],template:function(e,n){1&e&&(c.TgZ(0,"ion-content"),c._UZ(1,"br"),c.TgZ(2,"div",0),c.TgZ(3,"ion-row"),c.TgZ(4,"ion-col",1),c.TgZ(5,"p",2),c._uU(6,"Redemption Order"),c.qZA(),c.TgZ(7,"div",3),c.TgZ(8,"ion-row"),c.YNc(9,h,5,2,"ion-col",4),c.qZA(),c.qZA(),c.TgZ(10,"ion-row"),c.TgZ(11,"ion-col",5),c.TgZ(12,"ion-item"),c.TgZ(13,"ion-datetime",6),c.NdJ("ngModelChange",function(e){return n.year=e})("ionChange",function(e){return n.changeData(e)}),c.qZA(),c._UZ(14,"ion-icon",7),c.qZA(),c.qZA(),c.qZA(),c.YNc(15,u,9,3,"ion-row",8),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(4),c.Q6J("size",12),c.xp6(5),c.Q6J("ngForOf",n.listHeader),c.xp6(4),c.Q6J("ngModel",n.year),c.xp6(2),c.Q6J("ngForOf",n.listData))},directives:[r.W2,r.Nd,r.wI,t.sg,r.Ie,r.x4,r.QI,i.JJ,i.On,r.gu],styles:[".customerPDiv[_ngcontent-%COMP%]{color:var(--headerColor)}.container1[_ngcontent-%COMP%]{width:100%;margin:55px auto 0}.act[_ngcontent-%COMP%]{text-transform:none;background:linear-gradient(195deg,#bb2929 57%,var(--headerColor) 33%)!important;border-radius:8px;padding:10px;width:100%;color:#fff;height:90px}hr[_ngcontent-%COMP%]{width:100%!important;font-size:1em!important;border:.5px solid #dcdcdc}.totalCount[_ngcontent-%COMP%]{font-weight:700;font-size:20px;margin-top:5px;letter-spacing:2px}.fontTDiv[_ngcontent-%COMP%]{font-size:13px;line-height:18px}.iconlogo[_ngcontent-%COMP%]{color:var(--headerColor)}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[t.ez,i.u5,r.Pc,Z]]}),e})()}}]);