!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[7220],{97220:function(n,i,o){"use strict";o.r(i),o.d(i,{CustomerListPageModule:function(){return _}});var a=o(38583),r=o(90665),s=o(47823),c=o(12234),l=o(56544),u=o(88720),g=o(14303),d=o(51532);function p(t,e){if(1&t){var n=u.EpF();u.TgZ(0,"ion-row"),u.TgZ(1,"ion-col",6),u.TgZ(2,"p",7),u._uU(3),u.qZA(),u.TgZ(4,"p",7),u._uU(5),u.qZA(),u.TgZ(6,"p",7),u._uU(7),u.qZA(),u.qZA(),u.TgZ(8,"ion-col",8),u.TgZ(9,"ion-button",9),u.NdJ("click",function(){var t=u.CHM(n).$implicit;return u.oxw().view(t)}),u._uU(10),u.qZA(),u.qZA(),u._UZ(11,"hr"),u.qZA()}if(2&t){var i=e.$implicit;u.xp6(3),u.Oqu(null==i?null:i.full_name),u.xp6(2),u.Oqu(null==i?null:i.contact),u.xp6(2),u.AsE("",null==i?null:i.registration_sts,"",null==i?null:i.user_registration_status,""),u.xp6(3),u.Oqu(null==i?null:i.view_btn)}}var h,f,m=[{path:"",component:(h=function(){function n(e,i,o,a,r,s){t(this,n),this.route=e,this.platform=i,this.navCtrl=o,this.zone=a,this.apiService=r,this.sendData=s,this.userImg="",i.ready().then(function(){console.log("Width: "+i.width()),console.log("Height: "+i.height())}),this.allocationData=this.sendData.alldata}var i,o,a;return i=n,(o=[{key:"ngOnInit",value:function(){this.customerListShow()}},{key:"customerListShow",value:function(){var t=this;this.apiService.presentLoadingDefault(),this.zone.run(function(){t.apiService.apiCallWithLoginToken(l.n.getUserList,{search_str:"",value:"",request_for:t.allocationData.customer_id,request_user_type:t.allocationData.employee_type,request_type:"list"}).subscribe(function(e){t.apiService.presentLoadingClose(),console.log("UserListUrl: ",e),"1"==e.success?(t.customerList=e.data,t.header_title=e.header_title):t.image=e.no_data_image})})}},{key:"view",value:function(t){console.log("id456 : ",t),this.sendData.alldata=t,this.sendData.itemDetails=this.allocationData.customer_id,console.log("123",this.sendData.alldata),this.route.navigate(["./customer-details"])}}])&&e(i.prototype,o),a&&e(i,a),n}(),h.\u0275fac=function(t){return new(t||h)(u.Y36(c.F0),u.Y36(s.t4),u.Y36(s.SH),u.Y36(u.R0b),u.Y36(g.s),u.Y36(d.b))},h.\u0275cmp=u.Xpm({type:h,selectors:[["app-customer-list"]],decls:13,vars:4,consts:[["slot","start"],[1,"ion-padding"],["size-sm","12","size-md","6","size-lg","6","push-lg","3","push-md","3",1,"whiteCol",3,"size"],[1,"bgWalletImage",2,"background-image","url('assets/Other Icons/Banner.svg')"],[3,"src"],[4,"ngFor","ngForOf"],["size","8"],[1,"ion-no-margin"],["size","4",1,"but-div"],[1,"view","butt",3,"click"]],template:function(t,e){1&t&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-title"),u._uU(3),u.qZA(),u.TgZ(4,"ion-buttons",0),u._UZ(5,"ion-back-button"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"ion-content",1),u.TgZ(7,"ion-row"),u.TgZ(8,"ion-col",2),u._UZ(9,"div",3),u.TgZ(10,"div"),u._UZ(11,"img",4),u.qZA(),u.YNc(12,p,12,5,"ion-row",5),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(3),u.Oqu(e.header_title),u.xp6(5),u.Q6J("size",12),u.xp6(3),u.Q6J("src",e.image,u.LSH),u.xp6(1),u.Q6J("ngForOf",e.customerList))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.oU,s.cs,s.W2,s.Nd,s.wI,a.sg,s.YG],styles:["h5[_ngcontent-%COMP%]{color:#b01d22;font-size:20px}.act[_ngcontent-%COMP%]{text-transform:none;--background:linear-gradient(206deg,red 57%,#e94325 0)!important;border-radius:8px;width:100%;height:100px;color:#fff;text-align:center;font-size:25px}hr[_ngcontent-%COMP%]{width:100%!important;font-size:1em!important;border:.5px solid #dcdcdc}.userImageUpload[_ngcontent-%COMP%]{border-radius:50%;border:3px dotted #b01d22;-o-object-fit:cover;object-fit:cover}.profile_image[_ngcontent-%COMP%]{width:75px;height:70px}.view[_ngcontent-%COMP%]{--background:transparent;color:#b01d22;text-transform:capitalize;--border-radius:20px}.but-div[_ngcontent-%COMP%]{text-align:right}.no[_ngcontent-%COMP%]{margin-top:6px;font-size:36px}.bgWalletImage[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;padding:5px;background-position:50%}"]}),h)}],b=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[c.Bz.forChild(m)],c.Bz]}),e}(),_=((f=function e(){t(this,e)}).\u0275fac=function(t){return new(t||f)},f.\u0275mod=u.oAB({type:f}),f.\u0275inj=u.cJS({imports:[[a.ez,r.u5,s.Pc,b]]}),f)}}])}();