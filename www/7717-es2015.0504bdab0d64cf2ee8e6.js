(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[7717],{17717:function(t,n,e){"use strict";e.r(n),e.d(n,{TransactionHistPageModule:function(){return C}});var o=e(38583),i=e(90665),a=e(47823),r=e(12234),s=e(56544),c=e(88720),l=e(51532),u=e(18345),d=e(14303);function g(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"ion-button",16),c.NdJ("click",function(){c.CHM(t);const n=c.oxw().$implicit;return c.oxw(2).active(n)}),c._uU(1),c.qZA()}if(2&t){const t=c.oxw().$implicit;c.xp6(1),c.Oqu(null==t?null:t.tab_name)}}function p(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"ion-button",17),c.NdJ("click",function(){c.CHM(t);const n=c.oxw().$implicit;return c.oxw(2).active(n)}),c._uU(1),c.qZA()}if(2&t){const t=c.oxw().$implicit;c.xp6(1),c.Oqu(null==t?null:t.tab_name)}}function b(t,n){if(1&t&&(c.TgZ(0,"ion-col",13),c.YNc(1,g,2,1,"ion-button",14),c.YNc(2,p,2,1,"ion-button",15),c.qZA()),2&t){const t=n.$implicit;c.xp6(1),c.Q6J("ngIf","selected_tab"==(null==t?null:t.tab_status)),c.xp6(1),c.Q6J("ngIf","selected_tab"!=(null==t?null:t.tab_status))}}function f(t,n){if(1&t&&(c.TgZ(0,"td",18),c._uU(1),c.qZA()),2&t){const t=n.$implicit;c.xp6(1),c.Oqu(t)}}function h(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"ion-button",24),c.NdJ("click",function(){c.CHM(t);const n=c.oxw().$implicit;return c.oxw(2).view(n)}),c._uU(1),c.qZA()}if(2&t){const t=c.oxw().$implicit;c.xp6(1),c.Oqu(null==t?null:t.detail_btn)}}const x=function(t){return{pinkBg:t}};function m(t,n){if(1&t&&(c.TgZ(0,"tr",19),c.TgZ(1,"td",18),c._uU(2),c.qZA(),c.TgZ(3,"td",18),c.TgZ(4,"p",20),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"td",18),c.TgZ(7,"p",21),c._uU(8),c.qZA(),c.qZA(),c.TgZ(9,"td",18),c.TgZ(10,"p",22),c._uU(11),c.qZA(),c.qZA(),c.TgZ(12,"td",18),c.YNc(13,h,2,1,"ion-button",23),c.qZA(),c.qZA()),2&t){const t=n.$implicit;c.Q6J("ngClass",c.VKq(6,x,n.index%2==0)),c.xp6(2),c.Oqu(null==t?null:t.serial_number),c.xp6(3),c.Oqu(null==t?null:t.full_name),c.xp6(3),c.Oqu(null==t?null:t.contact),c.xp6(3),c.Oqu(null==t?null:t.authority_name),c.xp6(2),c.Q6J("ngIf","1"==(null==t?null:t.btn_applicable))}}const _=function(t){return{boundary1:t}};function w(t,n){if(1&t&&(c.TgZ(0,"ion-col",6),c._UZ(1,"div",7),c.TgZ(2,"div"),c.TgZ(3,"ion-row"),c.YNc(4,b,3,2,"ion-col",8),c.qZA(),c.TgZ(5,"div",9),c.TgZ(6,"table"),c.TgZ(7,"tr",10),c.YNc(8,f,2,1,"td",11),c.qZA(),c.YNc(9,m,14,8,"tr",12),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.Q6J("ngClass",c.VKq(4,_,t.platform.width()>740)),c.xp6(4),c.Q6J("ngForOf",t.buttReg),c.xp6(4),c.Q6J("ngForOf",null==t.server?null:t.server.header_arr),c.xp6(1),c.Q6J("ngForOf",t.serverData)}}function Z(t,n){if(1&t&&(c.TgZ(0,"div"),c.TgZ(1,"p",18),c._uU(2),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(2),c.Oqu(t.errorMessage)}}const q=function(t){return{"content-bg":t}},T=[{path:"",component:(()=>{class t{constructor(t,n,e,o,i,a){this.route=t,this.platform=n,this.zone=e,this.sendData=o,this.localStorage=i,this.apiService=a,this.serverData=[],this.buttReg=[],this.requestType="customer"}ngOnInit(){this.redemptionShow(),this.showButt()}showButt(){this.buttReg=[{auto_id:"1",tab_name:"Customer Report",tab_status:"selected_tab",requestType:"customer"},{auto_id:"2",tab_name:"Dealer Report",tab_status:"unselected_tab",requestType:"dealer"}]}close(){this.route.navigate(["./tabs/home"])}redemptionShow(){this.zone.run(()=>{let t={request_type:this.requestType,search_str:"",value:""};console.log("login data response",t),this.apiService.apiCallWithLoginToken(s.n.RedemptionUrl,t).subscribe(t=>{console.log("login data response",t),this.server=t,1==t.success?(this.serverData=t.data,this.errorMessage=""):this.errorMessage=t.message},t=>{this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})}active(t){if("selected_tab"!=t.tab_status){t.tab_status="selected_tab";for(let n=0;n<this.buttReg.length;n++)this.buttReg[n].tab_status=t.tab_name!=this.buttReg[n].tab_name?"unselected_tab":"selected_tab"}this.requestType=null==t?void 0:t.requestType,this.redemptionShow()}view(t){this.sendData.alldata={customer_id:t.auto_id,employee_type:"",request_page:"other",backKey:"back2"},this.route.navigate(["/purchasehistory"])}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(r.F0),c.Y36(a.t4),c.Y36(c.R0b),c.Y36(l.b),c.Y36(u.n),c.Y36(d.s))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-transaction-hist"]],decls:10,vars:6,consts:[["slot","start"],[3,"click"],[1,"ion-padding",3,"ngClass"],[1,"ion-justify-content-center"],["size-xl","6","size-md","6","size-xs","12","class","whiteCol table",3,"ngClass",4,"ngIf"],[4,"ngIf"],["size-xl","6","size-md","6","size-xs","12",1,"whiteCol","table",3,"ngClass"],[1,"bgWalletImage",2,"background-image","url('assets/Other Icons/Banner.svg')"],["size-xs","6","size-xl","6",4,"ngFor","ngForOf"],[1,"dataTable",2,"width","100%","overflow","auto"],[1,"header-row"],["class","ion-text-center",4,"ngFor","ngForOf"],["class","body-row",3,"ngClass",4,"ngFor","ngForOf"],["size-xs","6","size-xl","6"],["class","act",3,"click",4,"ngIf"],["class","act2",3,"click",4,"ngIf"],[1,"act",3,"click"],[1,"act2",3,"click"],[1,"ion-text-center"],[1,"body-row",3,"ngClass"],[1,"nameText","autoMargin"],[1,"mobileText","autoMargin"],[1,"officerText","autoMargin"],["class","act1",3,"click",4,"ngIf"],[1,"act1",3,"click"]],template:function(t,n){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c._uU(3),c.qZA(),c.TgZ(4,"ion-buttons",0),c.TgZ(5,"ion-back-button",1),c.NdJ("click",function(){return n.close()}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content",2),c.TgZ(7,"ion-row",3),c.YNc(8,w,10,6,"ion-col",4),c.qZA(),c.YNc(9,Z,3,1,"div",5),c.qZA()),2&t&&(c.xp6(3),c.Oqu(null==n.server?null:n.server.header_title),c.xp6(3),c.Q6J("ngClass",c.VKq(4,q,n.platform.width()<740)),c.xp6(2),c.Q6J("ngIf",null==n.server?null:n.server.data),c.xp6(1),c.Q6J("ngIf",""!=n.errorMessage))},directives:[a.Gu,a.sr,a.wd,a.Sm,a.oU,a.cs,a.W2,o.mk,a.Nd,o.O5,a.wI,o.sg,a.YG],styles:[".act[_ngcontent-%COMP%]{text-transform:none;--border-radius:20px;--background:#b01d22}.act[_ngcontent-%COMP%], .act2[_ngcontent-%COMP%]{width:100%;font-size:14px}.act2[_ngcontent-%COMP%]{text-transform:capitalize;--border-radius:20px!important;--background:transparent!important;color:#b01d22!important;border:1px solid #b01d22;border-radius:20px}.col[_ngcontent-%COMP%]{border-color:grey;border-style:solid none none solid;border-width:1px}.col[_ngcontent-%COMP%]:last-child{border-right:1px solid grey}.row[_ngcontent-%COMP%]:last-child   .col[_ngcontent-%COMP%]{border-bottom:1px solid grey}ion-text[_ngcontent-%COMP%]{font-size:16px}.act1[_ngcontent-%COMP%]{text-transform:capitalize;--background:transparent!important;--border-color:#b01d22!important;color:#b01d22!important;border:1px solid;border-radius:8px;width:100%;height:20px}.table[_ngcontent-%COMP%]{box-shadow:1px 1px 1px 2px #efeaea}.pinkBg[_ngcontent-%COMP%]{background-color:#f2e8e8}.bgWalletImage[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;padding:5px;background-position:50%}.dataTable[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]{background:#b01d22;color:#fff;font-size:14px}.dataTable[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;border-right:1px solid #fff}.dataTable[_ngcontent-%COMP%]   tr.body-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:100%;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;white-space:nowrap;padding:10px 5px;border-right:1px solid #eceeef;font-size:13px}.nameText[_ngcontent-%COMP%]{width:200px}.mobileText[_ngcontent-%COMP%], .nameText[_ngcontent-%COMP%]{min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:-webkit-fill-available}.mobileText[_ngcontent-%COMP%]{width:100px}.officerText[_ngcontent-%COMP%]{width:150px;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:-webkit-fill-available}"]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(T)],r.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,i.u5,a.Pc,O]]}),t})()}}]);