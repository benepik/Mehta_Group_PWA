(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[8940],{78940:function(t,n,e){"use strict";e.r(n),e.d(n,{DealerAllocatPageModule:function(){return Z}});var o=e(38583),i=e(90665),r=e(47823),a=e(12234),s=e(64762),c=e(56544),l=e(88720),d=e(14303),g=e(51532);function h(t,n){if(1&t&&(l.TgZ(0,"td",15),l._uU(1),l.qZA()),2&t){const t=n.$implicit;l.xp6(1),l.Oqu(t)}}const p=function(t){return{pinkBg:t}};function u(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"tr",16),l.TgZ(1,"td",15),l._uU(2),l.qZA(),l.TgZ(3,"td",15),l._uU(4),l._UZ(5,"br"),l.TgZ(6,"p",17),l._uU(7),l.qZA(),l.qZA(),l.TgZ(8,"td",15),l._uU(9),l.qZA(),l.TgZ(10,"td",15),l.TgZ(11,"ion-button",18),l.NdJ("click",function(){const n=l.CHM(t).$implicit;return l.oxw().view(n)}),l._uU(12,"View"),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=n.$implicit,e=n.index;l.Q6J("ngClass",l.VKq(5,p,e%2==0)),l.xp6(2),l.hij(" ",e+1,""),l.xp6(2),l.Oqu(null==t?null:t.full_name),l.xp6(3),l.Oqu(null==t?null:t.dealer_code),l.xp6(2),l.Oqu(null==t?null:t.bags_sold)}}function m(t,n){if(1&t&&(l.TgZ(0,"h1",19),l._uU(1),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Oqu(t.message)}}const b=[{path:"",component:(()=>{class t{constructor(t,n,e,o,i){this.route=t,this.platform=n,this.apiService=e,this.zone=o,this.sendData=i,this.serverData=[],this.month=(new Date).toISOString(),this.mnth="",this.yr="",n.ready().then(()=>{console.log("Width: "+n.width()),console.log("Height: "+n.height())})}ngOnInit(){this.dealerAllocateShow(this.mnth,this.yr)}changeData(t){console.log("ev",t),this.mnth=this.month.slice(5,7),this.yr=this.month.slice(0,4),console.log("ev",this.mnth),console.log("ev",this.yr),this.dealerAllocateShow(this.mnth,this.yr)}dealerAllocateShow(t,n){this.apiService.presentLoadingDefault(),this.zone.run(()=>(0,s.mG)(this,void 0,void 0,function*(){this.apiService.apiCallWithLoginToken(c.n.DealerAllocationUrl,{month:t,year:n,request_page:"dealer",request_for:""}).subscribe(t=>{this.apiService.presentLoadingClose(),this.serverData=t,this.message=1==t.success?"":t.message},t=>{this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg"),this.apiService.presentLoadingClose()})}))}close(){this.route.navigate(["./tabs/home"])}view(t){this.sendData.pointData=t,this.sendData.month=this.mnth,this.sendData.year=this.yr,console.log("month: ",this.yr),this.route.navigate(["./point-statement"])}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(a.F0),l.Y36(r.t4),l.Y36(d.s),l.Y36(l.R0b),l.Y36(g.b))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-dealer-allocat"]],decls:22,vars:6,consts:[["slot","start"],[3,"click"],[1,"ion-padding"],["sizexs","12","size-md","8","size-lg","8","push-md","2","push-lg","2",1,"whiteCol","ion-no-padding",3,"size"],[1,"underLineBorder"],[1,"seg"],["size-xl","6","size-md","6","size-xs","6"],["lines","none"],["displayFormat","MMM  YYYY",3,"ngModel","ngModelChange","ionChange"],["name","chevron-down-outline"],[1,"dataTable",2,"width","100%","overflow","auto"],[1,"header-row"],["class","ion-text-center",4,"ngFor","ngForOf"],["class","body-row",3,"ngClass",4,"ngFor","ngForOf"],["class","headr_col",4,"ngIf"],[1,"ion-text-center"],[1,"body-row",3,"ngClass"],[1,"ion-no-margin"],[1,"act1",3,"click"],[1,"headr_col"]],template:function(t,n){1&t&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-title"),l._uU(3),l.qZA(),l.TgZ(4,"ion-buttons",0),l.TgZ(5,"ion-back-button",1),l.NdJ("click",function(){return n.close()}),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-content",2),l.TgZ(7,"ion-row"),l.TgZ(8,"ion-col",3),l._UZ(9,"div",4),l.TgZ(10,"div",5),l.TgZ(11,"ion-row"),l.TgZ(12,"ion-col",6),l.TgZ(13,"ion-item",7),l.TgZ(14,"ion-datetime",8),l.NdJ("ngModelChange",function(t){return n.month=t})("ionChange",function(t){return n.changeData(t)}),l.qZA(),l._UZ(15,"ion-icon",9),l.qZA(),l.qZA(),l.qZA(),l.TgZ(16,"div",10),l.TgZ(17,"table"),l.TgZ(18,"tr",11),l.YNc(19,h,2,1,"td",12),l.qZA(),l.YNc(20,u,13,7,"tr",13),l.qZA(),l.qZA(),l.YNc(21,m,2,1,"h1",14),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(3),l.Oqu(null==n.serverData?null:n.serverData.header_title),l.xp6(5),l.Q6J("size",12),l.xp6(6),l.Q6J("ngModel",n.month),l.xp6(5),l.Q6J("ngForOf",null==n.serverData?null:n.serverData.header_data),l.xp6(1),l.Q6J("ngForOf",null==n.serverData?null:n.serverData.data),l.xp6(1),l.Q6J("ngIf",""!=n.message))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.oU,r.cs,r.W2,r.Nd,r.wI,r.Ie,r.x4,r.QI,i.JJ,i.On,r.gu,o.sg,o.O5,o.mk,r.YG],styles:[".act[_ngcontent-%COMP%]{text-transform:capitalize;--background:transparent!important;--border-color:#b01d22!important;color:#b01d22!important;border:1px solid;border-radius:5px;width:90%}.seg[_ngcontent-%COMP%]{padding:15px}h5[_ngcontent-%COMP%]{color:#b01d22;font-size:20px}.header[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{background-color:#d3d3d3}.col[_ngcontent-%COMP%]{border-color:grey;border-style:solid none none solid;border-width:1px}.col[_ngcontent-%COMP%]:last-child{border-right:1px solid grey}.row[_ngcontent-%COMP%]:last-child   .col[_ngcontent-%COMP%]{border-bottom:1px solid grey}.header-row[_ngcontent-%COMP%]{background:#b01d22;color:#fff}.co_ro[_ngcontent-%COMP%]{border-left:1px solid #eceeef;text-align:center}ion-text[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:14px}.headr_col[_ngcontent-%COMP%]{text-align:center}.act1[_ngcontent-%COMP%], .headr_col[_ngcontent-%COMP%]{color:#b01d22!important}.act1[_ngcontent-%COMP%]{text-transform:capitalize;--background:transparent!important;--border-color:#b01d22!important;border:1px solid;border-radius:8px;width:100%;height:20px}.table[_ngcontent-%COMP%]{box-shadow:1px 1px 1px 2px #efeaea}.table_start[_ngcontent-%COMP%]{padding-top:20px}.pinkBg[_ngcontent-%COMP%]{background-color:#f2e8e8}.bgWalletImage[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;padding:5px;background-position:50%}.dataTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.dataTable[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;border-right:1px solid #fff}.dataTable[_ngcontent-%COMP%]   tr.body-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;white-space:nowrap;padding:10px 5px;border-right:1px solid #eceeef;font-size:13px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[a.Bz.forChild(b)],a.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,i.u5,r.Pc,f]]}),t})()}}]);