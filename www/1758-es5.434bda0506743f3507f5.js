!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[1758],{81758:function(o,e,i){"use strict";i.r(e),i.d(e,{LoginPageModule:function(){return w}});var r,c,s=i(38583),a=i(90665),l=i(47823),g=i(12234),u=i(88720),p=i(51532),d=i(14303),Z=i(18345),f=function(n){return{"content-bg":n}},h=function(n){return{boundary:n}},m=function(n){return{banner:n}},b=[{path:"",component:(r=function(){function o(t,e,i,r,c,s,a){n(this,o),this.platform=t,this.route=e,this.sendData=i,this.zone=r,this.apiService=c,this.localStorage=s,this.loc=a,t.ready().then(function(){console.log("Width: "+t.width()),console.log("Height: "+t.height())})}var e,i,r;return e=o,(i=[{key:"ionViewWillEnter",value:function(){}},{key:"ngOnInit",value:function(){}},{key:"register",value:function(n){var t=this;console.log("type",n),this.zone.run(function(){t.sendData.loginKey={type:n,requestPage:"user"},t.localStorage.setStorage("type",n),t.route.navigate(["/mobile"])})}}])&&t(e.prototype,i),r&&t(e,r),o}(),r.\u0275fac=function(n){return new(n||r)(u.Y36(l.t4),u.Y36(g.F0),u.Y36(p.b),u.Y36(u.R0b),u.Y36(d.s),u.Y36(Z.n),u.Y36(s.lw))},r.\u0275cmp=u.Xpm({type:r,selectors:[["app-login"]],decls:29,vars:9,consts:[[3,"ngClass"],[1,"ion-justify-content-center"],["size-xl","5","size-md","8","size-xs","12",3,"ngClass"],["src","assets/icon/logo.svg",1,"small_p"],[1,"col"],["src","assets/icon/Hathi & Siddhi.svg",1,"small"],[1,"butt_col"],["tappable","",1,"butto",3,"click"],["size","5",1,"pad1"],["size","2",1,"pad","colom"],["src","assets/icon/Design 1.png",1,"banner_bg"]],template:function(n,t){1&n&&(u.TgZ(0,"ion-content",0),u.TgZ(1,"ion-row",1),u.TgZ(2,"ion-col",2),u.TgZ(3,"ion-grid"),u.TgZ(4,"ion-row"),u.TgZ(5,"ion-col"),u._UZ(6,"img",3),u.qZA(),u.TgZ(7,"ion-col",4),u._UZ(8,"img",5),u.qZA(),u.qZA(),u.qZA(),u.TgZ(9,"ion-grid"),u.TgZ(10,"ion-row"),u.TgZ(11,"ion-col",6),u.TgZ(12,"ion-button",7),u.NdJ("click",function(){return t.register("login")}),u._uU(13,"Login"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(14,"ion-row"),u.TgZ(15,"ion-col",8),u.TgZ(16,"div"),u._UZ(17,"hr"),u.qZA(),u.qZA(),u.TgZ(18,"ion-col",9),u._uU(19," Or "),u.qZA(),u.TgZ(20,"ion-col",8),u.TgZ(21,"div"),u._UZ(22,"hr"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"ion-row"),u.TgZ(24,"ion-col",6),u.TgZ(25,"ion-button",7),u.NdJ("click",function(){return t.register("newRegister")}),u._uU(26,"Click here to join us"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(27,"div",0),u._UZ(28,"img",10),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&n&&(u.Q6J("ngClass",u.VKq(3,f,t.platform.width()<740)),u.xp6(2),u.Q6J("ngClass",u.VKq(5,h,t.platform.width()>740)),u.xp6(25),u.Q6J("ngClass",u.VKq(7,m,t.platform.width()<740)))},directives:[l.W2,s.mk,l.Nd,l.wI,l.jY,l.YG],styles:[".col[_ngcontent-%COMP%]{text-align:end}.butto[_ngcontent-%COMP%]{width:100%;--background:#b01d22;text-transform:capitalize}.butt_col[_ngcontent-%COMP%]{padding:60px}hr[_ngcontent-%COMP%]{width:100px!important;font-size:1em!important;border:.5px solid #dcdcdc}.pad[_ngcontent-%COMP%], .pad1[_ngcontent-%COMP%]{padding:0}.pad[_ngcontent-%COMP%]{font-size:20px}.small[_ngcontent-%COMP%]{width:120px;text-align:right;margin-top:-10px}.small_p[_ngcontent-%COMP%]{width:125px}"]}),r)}],q=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[g.Bz.forChild(b)],g.Bz]}),t}(),w=((c=function t(){n(this,t)}).\u0275fac=function(n){return new(n||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[[s.ez,a.u5,l.Pc,q]]}),c)}}])}();