!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[5294],{45294:function(i,e,o){"use strict";o.r(e),o.d(e,{ProductCataloguePageModule:function(){return b}});var c=o(38583),r=o(90665),s=o(47823),a=o(12234),u=o(56544),l=o(88720),p=o(14303),d=o(51532),f=o(18345);function g(n,t){if(1&n){var i=l.EpF();l.TgZ(0,"ion-col",4),l.TgZ(1,"div",5),l.NdJ("click",function(){var n=l.CHM(i).$implicit;return l.oxw().product_cs(n)}),l._UZ(2,"img",6),l.TgZ(3,"p",7),l._uU(4),l.qZA(),l.qZA(),l.qZA()}if(2&n){var e=t.$implicit;l.Q6J("size",12),l.xp6(2),l.Q6J("src",null==e?null:e.media,l.LSH),l.xp6(2),l.Oqu(null==e?null:e.alias_name)}}var h,Z,m=[{path:"",component:(h=function(){function i(t,e,o,c,r,s){n(this,i),this.route=t,this.platform=e,this.zone=o,this.apiService=c,this.sendData=r,this.localStorage=s,this.productBrand=[]}var e,o,c;return e=i,(o=[{key:"ngOnInit",value:function(){this.product_icon()}},{key:"product_icon",value:function(){var n=this;this.apiService.presentLoadingDefault(),this.zone.run(function(){n.apiService.apiCallWithLoginToken(u.n.BrandProductUrl,{}).subscribe(function(t){n.apiService.presentLoadingClose(),"1"!=t.success&&"1"!=t.success||(n.productBrand=t.data)})})}},{key:"product_cs",value:function(n){this.sendData.item=n,this.route.navigate(["./product-detail"])}}])&&t(e.prototype,o),c&&t(e,c),i}(),h.\u0275fac=function(n){return new(n||h)(l.Y36(a.F0),l.Y36(s.t4),l.Y36(l.R0b),l.Y36(p.s),l.Y36(d.b),l.Y36(f.n))},h.\u0275cmp=l.Xpm({type:h,selectors:[["app-product-catalogue"]],decls:13,vars:2,consts:[["slot","start"],[1,"container1"],["size-sm","12","size-md","8","size-lg","8","push-lg","2","push-md","2",1,"whiteCol","ion-padding",3,"size"],["class","ion-text-center","size-lg","6","size-sm","12","size-md","12",3,"size",4,"ngFor","ngForOf"],["size-lg","6","size-sm","12","size-md","12",1,"ion-text-center",3,"size"],[1,"product_cs",3,"click"],[3,"src"],[1,"prd_cs_p"]],template:function(n,t){1&n&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-title"),l._uU(3,"Product List"),l.qZA(),l.TgZ(4,"ion-buttons",0),l._UZ(5,"ion-back-button"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-content"),l._UZ(7,"br"),l.TgZ(8,"div",1),l.TgZ(9,"ion-row"),l.TgZ(10,"ion-col",2),l.TgZ(11,"ion-row"),l.YNc(12,g,5,3,"ion-col",3),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&n&&(l.xp6(10),l.Q6J("size",12),l.xp6(2),l.Q6J("ngForOf",t.productBrand))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.oU,s.cs,s.W2,s.Nd,s.wI,c.sg],styles:[".product_cs[_ngcontent-%COMP%]{box-shadow:0 0 11px 5px #dedbdb;border-radius:10px;height:100%}.prd_cs_p[_ngcontent-%COMP%]{font-weight:700;font-size:14px;color:#e4a691}"]}),h)}],v=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),t}(),b=((Z=function t(){n(this,t)}).\u0275fac=function(n){return new(n||Z)},Z.\u0275mod=l.oAB({type:Z}),Z.\u0275inj=l.cJS({imports:[[c.ez,r.u5,s.Pc,v]]}),Z)}}])}();