(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[7220],{97220:function(t,e,i){"use strict";i.r(e),i.d(e,{CustomerListPageModule:function(){return h}});var n=i(38583),o=i(90665),s=i(47823),r=i(12234),a=i(56544),c=i(88720),l=i(14303),u=i(51532);function d(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"ion-row"),c.TgZ(1,"ion-col",6),c.TgZ(2,"p",7),c._uU(3),c.qZA(),c.TgZ(4,"p",7),c._uU(5),c.qZA(),c.TgZ(6,"p",7),c._uU(7),c.qZA(),c.qZA(),c.TgZ(8,"ion-col",8),c.TgZ(9,"ion-button",9),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().view(e)}),c._uU(10),c.qZA(),c.qZA(),c._UZ(11,"hr"),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(3),c.Oqu(null==t?null:t.full_name),c.xp6(2),c.Oqu(null==t?null:t.contact),c.xp6(2),c.AsE("",null==t?null:t.registration_sts,"",null==t?null:t.user_registration_status,""),c.xp6(3),c.Oqu(null==t?null:t.view_btn)}}const g=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o,s){this.route=t,this.platform=e,this.navCtrl=i,this.zone=n,this.apiService=o,this.sendData=s,this.userImg="",e.ready().then(()=>{console.log("Width: "+e.width()),console.log("Height: "+e.height())}),this.allocationData=this.sendData.alldata}ngOnInit(){this.customerListShow()}customerListShow(){this.apiService.presentLoadingDefault(),this.zone.run(()=>{this.apiService.apiCallWithLoginToken(a.n.getUserList,{search_str:"",value:"",request_for:this.allocationData.customer_id,request_user_type:this.allocationData.employee_type,request_type:"list"}).subscribe(t=>{this.apiService.presentLoadingClose(),console.log("UserListUrl: ",t),"1"==t.success?(this.customerList=t.data,this.header_title=t.header_title):this.image=t.no_data_image})})}view(t){console.log("id456 : ",t),this.sendData.alldata=t,this.sendData.itemDetails=this.allocationData.customer_id,console.log("123",this.sendData.alldata),console.log("1234",this.sendData.itemDetails),this.route.navigate(["/customer-details"])}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(r.F0),c.Y36(s.t4),c.Y36(s.SH),c.Y36(c.R0b),c.Y36(l.s),c.Y36(u.b))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-customer-list"]],decls:13,vars:4,consts:[["slot","start"],[1,"ion-padding"],["size-sm","12","size-md","6","size-lg","6","push-lg","3","push-md","3",1,"whiteCol",3,"size"],[1,"underLineBorder"],[3,"src"],[4,"ngFor","ngForOf"],["size","8"],[1,"ion-no-margin"],["size","4",1,"but-div"],[1,"view","butt",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c._uU(3),c.qZA(),c.TgZ(4,"ion-buttons",0),c._UZ(5,"ion-back-button"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content",1),c.TgZ(7,"ion-row"),c.TgZ(8,"ion-col",2),c._UZ(9,"div",3),c.TgZ(10,"div"),c._UZ(11,"img",4),c.qZA(),c.YNc(12,d,12,5,"ion-row",5),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(3),c.Oqu(e.header_title),c.xp6(5),c.Q6J("size",12),c.xp6(3),c.Q6J("src",e.image,c.LSH),c.xp6(1),c.Q6J("ngForOf",e.customerList))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.oU,s.cs,s.W2,s.Nd,s.wI,n.sg,s.YG],styles:["h5[_ngcontent-%COMP%]{color:#b01d22;font-size:20px}.act[_ngcontent-%COMP%]{text-transform:none;--background:linear-gradient(206deg,red 57%,#e94325 0)!important;border-radius:8px;width:100%;height:100px;color:#fff;text-align:center;font-size:25px}hr[_ngcontent-%COMP%]{width:100%!important;font-size:1em!important;border:.5px solid #dcdcdc}.userImageUpload[_ngcontent-%COMP%]{border-radius:50%;border:3px dotted #b01d22;-o-object-fit:cover;object-fit:cover}.profile_image[_ngcontent-%COMP%]{width:75px;height:70px}.view[_ngcontent-%COMP%]{--background:transparent;color:#b01d22;text-transform:capitalize;--border-radius:20px}.but-div[_ngcontent-%COMP%]{text-align:right}.no[_ngcontent-%COMP%]{margin-top:6px;font-size:36px}.bgWalletImage[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;padding:5px;background-position:50%}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(g)],r.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,o.u5,s.Pc,p]]}),t})()}}]);