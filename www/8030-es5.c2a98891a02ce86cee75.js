!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[8030],{88030:function(o,n,i){"use strict";i.r(n),i.d(n,{UserListPageModule:function(){return q}});var r=i(38583),a=i(90665),c=i(47823),s=i(12234),l=i(56544),g=i(88720),u=i(51532),p=i(18345),d=i(14303),f=function(e){return{pinkBg:e}};function Z(e,t){if(1&e){var o=g.EpF();g.TgZ(0,"ion-row",9),g.TgZ(1,"ion-col",5),g.TgZ(2,"ion-text"),g._uU(3),g.qZA(),g.qZA(),g.TgZ(4,"ion-col",6),g.TgZ(5,"ion-text"),g._uU(6),g.qZA(),g.qZA(),g.TgZ(7,"ion-col",6),g.TgZ(8,"ion-text"),g._uU(9),g.qZA(),g.qZA(),g.TgZ(10,"ion-col",6),g.TgZ(11,"ion-text"),g._uU(12),g.qZA(),g.qZA(),g.TgZ(13,"ion-col",7),g.TgZ(14,"ion-button",10),g.NdJ("click",function(){var e=g.CHM(o).$implicit;return g.oxw().view(e)}),g._uU(15,"view"),g.qZA(),g.qZA(),g.qZA()}if(2&e){var n=t.$implicit,i=t.index;g.Q6J("ngClass",g.VKq(5,f,i%2==0)),g.xp6(3),g.Oqu(i+1),g.xp6(3),g.Oqu(null==n?null:n.full_name),g.xp6(3),g.Oqu(null==n?null:n.total_dealers),g.xp6(3),g.Oqu(null==n?null:n.total_customers)}}var h,_,x=[{path:"",component:(h=function(){function o(t,n,i,r,a,c){e(this,o),this.route=t,this.platform=n,this.zone=i,this.sendData=r,this.localStorage=a,this.apiService=c,this.serverData=[]}var n,i,r;return n=o,(i=[{key:"ngOnInit",value:function(){var e=this;this.localStorage.getStorage().then(function(t){e.allStored=t.allStoreData,console.log("stored data in dealer list page",e.allStored),e.reportShow()})}},{key:"reportShow",value:function(){var e=this;this.zone.run(function(){var t={request_user_type:e.allStored.employee_type,search_str:"",value:"",request_for:e.allStored.user_id,request_type:"list"};console.log("login data response",t),e.apiService.apiCallWithLoginToken(l.n.getUserList,t).subscribe(function(t){console.log("login data response",t),e.server=t,1==t.success?(e.serverData=t.data,e.errorMessage=""):(e.errorMessage=t.message,e.apiService.showToastMessage(t.message,"top",3e3,"redBg"))},function(t){e.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})}},{key:"view",value:function(e){this.sendData.alldata={employee_type:e.employee_type,user_id:e.officer_id,my:"officer"},this.route.navigate(["./dealer-list"])}},{key:"close",value:function(){this.route.navigate(["./tabs/home"])}}])&&t(n.prototype,i),r&&t(n,r),o}(),h.\u0275fac=function(e){return new(e||h)(g.Y36(s.F0),g.Y36(c.t4),g.Y36(g.R0b),g.Y36(u.b),g.Y36(p.n),g.Y36(d.s))},h.\u0275cmp=g.Xpm({type:h,selectors:[["app-user-list"]],decls:27,vars:3,consts:[["slot","start"],[3,"click"],[1,"ion-padding"],["sizexs","12","size-md","8","size-lg","8","push-md","2","push-lg","2",1,"whiteCol","ion-no-padding",3,"size"],[1,"header-row"],["size","1",1,"co_ro"],["size","3",1,"co_ro"],["size","2",1,"co_ro"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"act1",3,"click"]],template:function(e,t){1&e&&(g.TgZ(0,"ion-header"),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-buttons",0),g.TgZ(3,"ion-back-button",1),g.NdJ("click",function(){return t.close()}),g.qZA(),g.qZA(),g.TgZ(4,"ion-title"),g._uU(5),g.qZA(),g.qZA(),g.qZA(),g.TgZ(6,"ion-content",2),g.TgZ(7,"ion-row"),g.TgZ(8,"ion-col",3),g.TgZ(9,"div",2),g.TgZ(10,"ion-row",4),g.TgZ(11,"ion-col",5),g.TgZ(12,"ion-text"),g._uU(13,"S.no"),g.qZA(),g.qZA(),g.TgZ(14,"ion-col",6),g.TgZ(15,"ion-text"),g._uU(16,"Officer"),g.qZA(),g.qZA(),g.TgZ(17,"ion-col",6),g.TgZ(18,"ion-text"),g._uU(19,"Dealer"),g.qZA(),g.qZA(),g.TgZ(20,"ion-col",6),g.TgZ(21,"ion-text"),g._uU(22,"Customer"),g.qZA(),g.qZA(),g.TgZ(23,"ion-col",7),g.TgZ(24,"ion-text"),g._uU(25,"Details"),g.qZA(),g.qZA(),g.qZA(),g.YNc(26,Z,16,7,"ion-row",8),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&e&&(g.xp6(5),g.Oqu(null==t.server?null:t.server.header_title),g.xp6(3),g.Q6J("size",12),g.xp6(18),g.Q6J("ngForOf",t.serverData))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.wd,c.W2,c.Nd,c.wI,c.yW,r.sg,r.mk,c.YG],styles:[".table[_ngcontent-%COMP%]{box-shadow:1px 1px 1px 2px #efeaea}.pinkBg[_ngcontent-%COMP%]{background-color:#f2e8e8}.header[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{background-color:#d3d3d3}.col[_ngcontent-%COMP%]{border-color:grey;border-style:solid none none solid;border-width:1px}.col[_ngcontent-%COMP%]:last-child{border-right:1px solid grey}.row[_ngcontent-%COMP%]:last-child   .col[_ngcontent-%COMP%]{border-bottom:1px solid grey}.header-row[_ngcontent-%COMP%]{background:#b01d22;color:#fff;font-size:14px}.co_ro[_ngcontent-%COMP%]{border-left:1px solid #eceeef;text-align:center}ion-text[_ngcontent-%COMP%]{font-size:12px}.walletImages[_ngcontent-%COMP%]{height:40px;width:50px;-o-object-fit:contain;object-fit:contain;margin:auto;display:block}.colorWhite[_ngcontent-%COMP%]{color:#fff}.accTitle[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.bgWalletImage[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;background-position:50%}.totalBtn[_ngcontent-%COMP%]{--background:#ec6d72;text-transform:none;max-width:100%;white-space:pre-wrap;font-size:11px;--padding-start:5px;--padding-end:5px}.fontAcc[_ngcontent-%COMP%]{font-size:12px}.act1[_ngcontent-%COMP%]{text-transform:capitalize;--background:transparent!important;--border-color:#b01d22!important;color:#b01d22!important;border:1px solid;border-radius:8px;width:100%;height:20px}"]}),h)}],b=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[s.Bz.forChild(x)],s.Bz]}),t}(),q=((_=function t(){e(this,t)}).\u0275fac=function(e){return new(e||_)},_.\u0275mod=g.oAB({type:_}),_.\u0275inj=g.cJS({imports:[[r.ez,a.u5,c.Pc,b]]}),_)}}])}();