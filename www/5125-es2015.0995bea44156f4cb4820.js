(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[5125],{25125:function(e,t,i){"use strict";i.r(t),i.d(t,{DealerListPageModule:function(){return v}});var n=i(38583),o=i(90665),s=i(47823),l=i(12234),r=i(56544),a=i(88720),c=i(14303),g=i(51532),d=i(18345);const u=function(e){return[e]};function p(e,t){if(1&e&&(a.TgZ(0,"ion-col",11),a.TgZ(1,"div",12),a.TgZ(2,"p",13),a._uU(3),a.qZA(),a.TgZ(4,"p",14),a.TgZ(5,"b"),a._uU(6),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e){const e=t.$implicit,i=a.oxw();a.Q6J("size",6),a.xp6(2),a.Q6J("ngClass",a.VKq(4,u,null!=i.platform&&i.platform.is("ios")?"no_text1":"no_text")),a.xp6(1),a.Oqu(null==e?null:e.key),a.xp6(3),a.Oqu(null==e?null:e.value)}}function h(e,t){1&e&&a._UZ(0,"img",23)}function f(e,t){if(1&e&&a._UZ(0,"img",24),2&e){const e=a.oxw().$implicit;a.Q6J("src",null==e?null:e.userImg,a.LSH)}}function m(e,t){if(1&e&&(a.TgZ(0,"p",25),a._uU(1),a.qZA()),2&e){const e=a.oxw().$implicit;a.xp6(1),a.Oqu(null==e?null:e.contact)}}function Z(e,t){if(1&e&&(a.TgZ(0,"p",25),a._uU(1),a.qZA()),2&e){const e=a.oxw().$implicit;a.xp6(1),a.hij("Customer : ",null==e?null:e.total_customers,"")}}function _(e,t){if(1&e&&(a.TgZ(0,"p",25),a._uU(1),a.qZA()),2&e){const e=a.oxw().$implicit;a.xp6(1),a.Oqu(null==e?null:e.dealer_code)}}function x(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"ion-row"),a.TgZ(1,"ion-col",15),a.YNc(2,h,1,0,"img",16),a.YNc(3,f,1,1,"img",17),a.qZA(),a.TgZ(4,"ion-col",18),a.TgZ(5,"p",19),a.TgZ(6,"b"),a._uU(7),a.qZA(),a.qZA(),a.YNc(8,m,2,1,"p",20),a.YNc(9,Z,2,1,"p",20),a.YNc(10,_,2,1,"p",20),a.qZA(),a.TgZ(11,"ion-col",21),a.TgZ(12,"ion-button",22),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw().view(t)}),a._uU(13,"View Profile"),a.qZA(),a.qZA(),a._UZ(14,"hr"),a.qZA()}if(2&e){const e=t.$implicit;a.xp6(1),a.Q6J("size",3),a.xp6(1),a.Q6J("ngIf",""==(null==e?null:e.userImg)),a.xp6(1),a.Q6J("ngIf",""!=(null==e?null:e.userImg)),a.xp6(1),a.Q6J("size",5),a.xp6(3),a.Oqu(null==e?null:e.full_name),a.xp6(1),a.Q6J("ngIf",""!=(null==e?null:e.contact)),a.xp6(1),a.Q6J("ngIf",""!=(null==e?null:e.total_customers)),a.xp6(1),a.Q6J("ngIf",""!=(null==e?null:e.dealer_code)),a.xp6(1),a.Q6J("size",4)}}function z(e,t){if(1&e&&(a.TgZ(0,"div"),a.TgZ(1,"p",26),a._uU(2),a.qZA(),a.qZA()),2&e){const e=a.oxw();a.xp6(2),a.Oqu(e.errorMessage)}}function b(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"ion-infinite-scroll",27),a.NdJ("ionInfinite",function(t){return a.CHM(e),a.oxw().loadData(t)}),a._UZ(1,"ion-infinite-scroll-content",28),a.qZA()}}const q=[{path:"",component:(()=>{class e{constructor(e,t,i,n,o,s,l){this.route=e,this.platform=t,this.zone=i,this.apiService=n,this.sendData=o,this.localStorage=s,this.navController=l,this.userImg="",this.infiniteScroll_call=!1,this.value=0,t.ready().then(()=>{console.log("Width: "+t.width()),console.log("Height: "+t.height())})}ionViewWillEnter(){}ngOnInit(){null!=this.sendData.alldata&&"officer"==this.sendData.alldata.my?(this.allStored=this.sendData.alldata,this.dealerListShow()):this.localStorage.getStorage().then(e=>{this.allStored=e.allStoreData,console.log("stored data in dealer list page",this.allStored),this.dealerListShow()})}close(){this.route.navigate(null!=this.sendData.alldata&&"officer"==this.sendData.alldata.my?["./user-list"]:["./tabs/home"])}dealerListShow(){this.apiService.presentLoadingDefault(),this.zone.run(()=>{let e={request_user_type:this.allStored.employee_type,search_str:"",value:this.value,request_for:this.allStored.user_id,request_type:"list"};console.log("dealerListShoow::",e),this.apiService.apiCallWithLoginToken(r.n.getUserList,e).subscribe(e=>{this.apiService.presentLoadingClose(),console.log("UserListUrl: ",e),this.listHeader=e.tab_data,this.header_title=e.header_title,1==e.success?(this.dealerList=null==this.dealerList?e.data:this.dealerList.concat(e.data),this.errorMessage=""):(this.errorMessage=e.message,this.apiService.showToastMessage(e.message,top,2e3,"redBg")),1==this.infiniteScroll_call&&this.stopInfiniteScroll()},e=>{this.apiService.showToastMessage(JSON.stringify(e),"top",2e3,"redBg")})})}view(e){this.sendData.alldata=e,this.route.navigate(["./profile-view"])}loadData(e){this.infiniteScroll_call=!0,this.infiniteScroll_val=e,setTimeout(()=>{this.value=this.dealerList.length,this.dealerListShow()},500)}stopInfiniteScroll(){1==this.infiniteScroll_call&&(this.infiniteScroll_call=!1,this.infiniteScroll_val.target.complete())}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(l.F0),a.Y36(s.t4),a.Y36(a.R0b),a.Y36(c.s),a.Y36(g.b),a.Y36(d.n),a.Y36(s.SH))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-dealer-list"]],decls:19,vars:6,consts:[["slot","start"],[3,"click"],[1,"ion-padding"],[1,"container1"],["sizexs","12","size-md","8","size-lg","8","push-md","2","push-lg","2",1,"whiteCol","ion-no-padding",3,"size"],[1,"bgWalletImage",2,"background-image","url('assets/Other Icons/Banner.svg')"],[1,"seg"],["size-sm","6","size-md","6","size-lg","6",3,"size",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[4,"ngIf"],["threshold","100px",3,"ionInfinite",4,"ngIf"],["size-sm","6","size-md","6","size-lg","6",3,"size"],[1,"act","ion-text-center"],[1,"ion-no-margin",3,"ngClass"],[1,"no"],["size-xs","3","size-md","3","size-lg","3",1,"ion-no-padding",3,"size"],["class","profile_image centerData","src","assets/icon/Group 14078.png",4,"ngIf"],["class","profile_image centerData dottedBorder userImageUpload",3,"src",4,"ngIf"],["size-xs","5","size-md","6","size-lg","6",1,"autoMargin",3,"size"],[1,"name","ion-no-margin"],["class","phone ion-no-margin",4,"ngIf"],["size-xs","4","size-md","3","size-lg","3",1,"autoMargin",3,"size"],[1,"view","butt",3,"click"],["src","assets/icon/Group 14078.png",1,"profile_image","centerData"],[1,"profile_image","centerData","dottedBorder","userImageUpload",3,"src"],[1,"phone","ion-no-margin"],[1,"ion-text-center"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."]],template:function(e,t){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-title"),a._uU(3),a.qZA(),a.TgZ(4,"ion-buttons",0),a.TgZ(5,"ion-back-button",1),a.NdJ("click",function(){return t.close()}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content",2),a._UZ(7,"br"),a.TgZ(8,"div",3),a.TgZ(9,"ion-row"),a.TgZ(10,"ion-col",4),a._UZ(11,"div",5),a.TgZ(12,"div",6),a.TgZ(13,"ion-row"),a.YNc(14,p,7,6,"ion-col",7),a.qZA(),a._UZ(15,"hr"),a.YNc(16,x,15,9,"ion-row",8),a.YNc(17,z,3,1,"div",9),a.YNc(18,b,2,0,"ion-infinite-scroll",10),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(3),a.Oqu(t.header_title),a.xp6(7),a.Q6J("size",12),a.xp6(4),a.Q6J("ngForOf",t.listHeader),a.xp6(2),a.Q6J("ngForOf",t.dealerList),a.xp6(1),a.Q6J("ngIf",""!=t.errorMessage),a.xp6(1),a.Q6J("ngIf",""==t.errorMessage))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.oU,s.cs,s.W2,s.Nd,s.wI,n.sg,n.O5,n.mk,s.YG,s.ju,s.MB],styles:["h5[_ngcontent-%COMP%]{color:#b01d22;font-size:20px}.seg[_ngcontent-%COMP%]{padding:10px}.act[_ngcontent-%COMP%]{text-transform:none;background:linear-gradient(195deg,#bb2929 57%,var(--headerColor) 33%)!important;border-radius:8px;padding:5px;width:100%;color:#fff}hr[_ngcontent-%COMP%]{width:100%!important;font-size:1em!important;border:.5px solid #dcdcdc}.userImageUpload[_ngcontent-%COMP%]{border-radius:50%;border:2px dotted #b01d22;-o-object-fit:cover;object-fit:cover}.profile_image[_ngcontent-%COMP%]{width:65px;height:65px}.name[_ngcontent-%COMP%]{font-size:15px}.phone[_ngcontent-%COMP%]{font-size:13px}.view[_ngcontent-%COMP%]{--background:transparent;color:#b01d22;text-transform:capitalize;--border-radius:20px;width:100%;font-size:12px;background-color:#f1d4d4}.but-div[_ngcontent-%COMP%]{padding-top:24px}.no[_ngcontent-%COMP%]{font-size:23px}.no_text[_ngcontent-%COMP%]{font-size:18px}.no_text1[_ngcontent-%COMP%]{font-size:15px}.container1[_ngcontent-%COMP%]{width:100%}.bgWalletImage[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;padding:5px;background-position:50%}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[l.Bz.forChild(q)],l.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.ez,o.u5,s.Pc,w]]}),e})()}}]);