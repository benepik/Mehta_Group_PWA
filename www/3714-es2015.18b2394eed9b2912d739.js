(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[3714],{43714:function(t,e,i){"use strict";i.r(e),i.d(e,{BuyitemPageModule:function(){return A}});var s=i(38583),o=i(90665),n=i(47823),a=i(12234),r=i(64762),l=i(26023),c=i(56544),d=i(88720),u=i(51532),g=i(14303);function p(t,e){if(1&t&&(d.TgZ(0,"ion-row"),d.TgZ(1,"ion-col",9),d.TgZ(2,"p",10),d._uU(3),d.qZA(),d.qZA(),d.qZA()),2&t){const t=d.oxw();d.xp6(1),d.Q6J("size",12),d.xp6(2),d.Oqu(null==t.addres||null==t.addres.data?null:t.addres.data.title)}}function h(t,e){if(1&t&&(d.TgZ(0,"ion-col",9),d.TgZ(1,"p",12),d._uU(2),d.qZA(),d.TgZ(3,"p",12),d._uU(4),d.qZA(),d.TgZ(5,"p",12),d._uU(6),d.qZA(),d._UZ(7,"br"),d.qZA()),2&t){const t=d.oxw().$implicit;d.Q6J("size",12),d.xp6(2),d.Oqu(null==t?null:t.address_line1),d.xp6(2),d.Oqu(null==t?null:t.address_line2),d.xp6(2),d.AsE("",null==t?null:t.city,"-",null==t?null:t.pin_code,"")}}function m(t,e){if(1&t&&(d.TgZ(0,"ion-row"),d.YNc(1,h,8,5,"ion-col",11),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.Q6J("ngIf","1"==(null==t?null:t.is_primary))}}function _(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"div",7),d.TgZ(1,"ion-button",13),d.NdJ("click",function(){return d.CHM(t),d.oxw().changeAddress()}),d._uU(2),d.qZA(),d._UZ(3,"br"),d.qZA()}if(2&t){const t=d.oxw();d.xp6(2),d.Oqu(null==t.addres||null==t.addres.data?null:t.addres.data.btn_text)}}function f(t,e){1&t&&(d.TgZ(0,"ion-row"),d.TgZ(1,"ion-col",14),d.TgZ(2,"p",10),d._uU(3,"Item redeemed"),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(1),d.Q6J("size",12))}function q(t,e){if(1&t&&(d.TgZ(0,"ion-row"),d.TgZ(1,"ion-col",7),d.TgZ(2,"h5",15),d._uU(3),d.qZA(),d.qZA(),d.qZA()),2&t){const t=d.oxw();d.xp6(3),d.Oqu(t.msg)}}function y(t,e){if(1&t&&(d.TgZ(0,"ion-col",21),d._UZ(1,"img",22),d.qZA()),2&t){const t=d.oxw().$implicit;d.Q6J("size",3),d.xp6(1),d.Q6J("src",null==t?null:t.good_image,d.LSH)}}function b(t,e){if(1&t&&(d.TgZ(0,"ion-col",23),d.TgZ(1,"p",12),d._uU(2),d.qZA(),d.TgZ(3,"p",12),d._uU(4),d.qZA(),d.qZA()),2&t){const t=d.oxw().$implicit;d.Q6J("size",8),d.xp6(2),d.Oqu(null==t?null:t.goods_name),d.xp6(2),d.Oqu(null==t?null:t.good_point)}}function x(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"ion-row",16),d.YNc(1,y,2,2,"ion-col",17),d.YNc(2,b,5,3,"ion-col",18),d.TgZ(3,"ion-col",19),d.TgZ(4,"ion-icon",20),d.NdJ("click",function(){const e=d.CHM(t).$implicit;return d.oxw().closeBtn(e)}),d.qZA(),d.qZA(),d.qZA()}if(2&t){const t=d.oxw();d.xp6(1),d.Q6J("ngIf",""==t.msg),d.xp6(1),d.Q6J("ngIf",""==t.msg),d.xp6(1),d.Q6J("size",1)}}function Z(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"ion-button",24),d.NdJ("click",function(){return d.CHM(t),d.oxw().doneUpdate()}),d._uU(1,"Done"),d.qZA()}}function z(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"ion-button",24),d.NdJ("click",function(){return d.CHM(t),d.oxw().modalcall()}),d._uU(1,"Redeem"),d.qZA()}}const w=[{path:"",component:(()=>{class t{constructor(t,e,i,s,o,n,a){this.modalCtrl=t,this.alertController=e,this.popoverController=i,this.sendData=s,this.route=o,this.apiService=n,this.zone=a,this.num=1,this.showDonebutt=0,this.cart_detail=[]}ionViewWillEnter(){this.cart_req=this.sendData.cart_request,this.showAddress(),this.buyitem(this.item_details)}ngOnInit(){this.redeem_for=this.sendData.redeem_for,console.log("redeem_for",this.redeem_for),this.allocationData=this.sendData.alldata,this.item_details=this.sendData.itemDetails,console.log("this.allocationData",this.allocationData),console.log("this.item_details",this.item_details)}ionViewWillLeave(){}minus(t){0!=t.quantity&&(t.quantity=JSON.parse(t.quantity),t.quantity=t.quantity-1,this.cart_req="buy",this.showDonebutt=1)}closeBtn(t){0!=t.quantity&&(t.quantity=JSON.parse(t.quantity),t.quantity=t.quantity-1,this.cart_req="buy",this.alertRemoveProduct())}alertRemoveProduct(){return(0,r.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",message:"Are you sure?",buttons:[{text:"No",role:"cancel",cssClass:"secondary",handler:t=>{console.log("Confirm Cancel: blah")}},{text:"Yes",handler:()=>{this.doneUpdate(),console.log("Confirm Okay")}}]});yield t.present()})}plus(t){t.quantity=parseInt(t.quantity)+1,this.cart_req="buy",this.showDonebutt=1}buyitem(t){this.zone.run(()=>(0,r.mG)(this,void 0,void 0,function*(){let e={request_page:"dealer",redeem_for:this.redeem_for,cart_request:this.cart_req,request_for:this.allocationData.customer_id,request_user_type:this.allocationData.employee_type,product_arr:[{product_id:t.product_id,count:t.quantity}]};console.log("item.product_id ,item.quantity ",t.quantity,t.quantity),this.apiService.apiCallWithLoginToken(c.n.CartUrl,e).subscribe(t=>{1==t.success?(this.cart_details=t.data,console.log("this is ",this.cart_details),this.msg=""):this.msg=t.message},t=>{this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})}))}itemDetailsShow(){this.zone.run(()=>(0,r.mG)(this,void 0,void 0,function*(){this.apiService.apiCallWithLoginToken(c.n.ProductDetailUrl,{request_page:"dealer",redeem_for:this.redeem_for,product_id:this.item_details.auto_id,page_request_type:this.sendData.page_request_type}).subscribe(t=>{this.temparray=t.data,1==t.success||this.apiService.showToastMessage(t.message,"top",3e3,"redBg")},t=>{this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})}))}modalcall(){this.sendData.cartDetails=this.cart_details,console.log(" this.cart_details",this.cart_detail),0!=this.addres.data.data.length?(this.sendData.address_id=this.addres.data.data[0].auto_id,this.presentAlertConfirm()):this.apiService.showToastMessage("Address is Required","top",2e3,"redBg")}callModal(){return(0,r.mG)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:l.f,cssClass:"my-custom-class"});return t.onDidDismiss().then(t=>{console.log("data returned after dismiss modal==",t),null!==t&&this.route.navigate(["/purchasehistory"])}),this.sendData.alldata={request_for:this.allocationData.customer_id,request_user_type:this.allocationData.employee_type},this.sendData.item=this.redeem_for,yield t.present()})}presentAlertConfirm(){return(0,r.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",message:"Are you sure, you want to redeem?",buttons:[{text:"No",role:"cancel",cssClass:"secondary",handler:t=>{console.log("Confirm Cancel: blah")}},{text:"Yes",handler:()=>{this.callModal(),console.log("Confirm Okay")}}]});yield t.present()})}showAddress(){this.apiService.presentLoadingDefault(),this.zone.run(()=>{this.apiService.apiCallWithLoginToken(c.n.AddressUrl,{address_fetch_type:"deliver",redeem_for:this.redeem_for,request_page:"dealer",request_for:this.allocationData.customer_id,request_user_type:this.allocationData.employee_type}).subscribe(t=>{console.log("AddressUrl: ",t),this.apiService.presentLoadingClose(),this.addres=t},t=>{this.apiService.presentLoadingClose(),this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})}changeAddress(){""==this.allocationData.customer_id?(this.sendData.alldata={customer_id:"",request_page:this.redeem_for,employee_type:""},this.route.navigate(["/change-address"])):(this.sendData.alldata={customer_id:this.allocationData.customer_id,request_page:this.redeem_for,employee_type:this.allocationData.employee_type},this.route.navigate(["/change-address"]))}doneUpdate(){this.apiService.presentLoadingDefault(),this.cart_detail=[];for(let t=0;t<this.cart_details.length;t++)this.cart_details[t].count=this.cart_details[t].quantity,this.cart_detail.push(this.cart_details[t]);this.zone.run(()=>(0,r.mG)(this,void 0,void 0,function*(){let t={request_page:"dealer",redeem_for:this.redeem_for,cart_request:this.cart_req,product_arr:this.cart_detail,request_for:this.allocationData.customer_id,request_user_type:this.allocationData.employee_type};console.log("apikey : ",t),console.log("product_arr:",this.cart_detail),this.apiService.apiCallWithLoginToken(c.n.CartUrl,t).subscribe(t=>{this.apiService.presentLoadingClose(),1==t.success?(this.showDonebutt=0,this.cart_details=t.data,this.msg=""):(this.msg=t.message,this.cart_details=[])},t=>{this.apiService.presentLoadingClose(),this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})}))}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(n.IN),d.Y36(n.Br),d.Y36(n.Dh),d.Y36(u.b),d.Y36(a.F0),d.Y36(g.s),d.Y36(d.R0b))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-buyitem"]],decls:21,vars:9,consts:[["slot","start"],[1,"ion-padding"],["sizexs","12","size-md","8","size-lg","8","push-md","2","push-lg","2",1,"whiteCol","ion-no-padding",3,"size"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","ion-text-center",4,"ngIf"],["class","brbottom",4,"ngFor","ngForOf"],[1,"ion-text-center"],["class","ionic_btn1",3,"click",4,"ngIf"],["sizexs","12","size-md","12","size-lg","12",1,"brbottom",3,"size"],[1,"para"],["sizexs","12","size-md","12","size-lg","12","class","brbottom",3,"size",4,"ngIf"],[1,"para1"],[1,"ionic_btnic",3,"click"],["size-xs","12","size-md","12","size-lg","12",1,"brbottom",3,"size"],[1,"no-margin",2,"color","#B01D22"],[1,"brbottom"],["sizexs","3","size-md","3","size-lg","3",3,"size",4,"ngIf"],["sizexs","8","size-md","8","size-lg","8",3,"size",4,"ngIf"],["sizexs","1","size-md","1","size-lg","1",1,"autoMargin",3,"size"],["name","close",1,"circle_close",3,"click"],["sizexs","3","size-md","3","size-lg","3",3,"size"],["onerror","this.src='assets/watermark/watermark.png'",1,"imgcss",3,"src"],["sizexs","8","size-md","8","size-lg","8",3,"size"],[1,"ionic_btn1",3,"click"]],template:function(t,e){1&t&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-title"),d._uU(3,"Redeem"),d.qZA(),d.TgZ(4,"ion-buttons",0),d._UZ(5,"ion-back-button"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(6,"ion-content",1),d.TgZ(7,"ion-row"),d.TgZ(8,"ion-col",2),d.YNc(9,p,4,2,"ion-row",3),d.YNc(10,m,2,1,"ion-row",4),d._UZ(11,"br"),d.YNc(12,_,4,1,"div",5),d.YNc(13,f,4,1,"ion-row",3),d.YNc(14,q,4,1,"ion-row",3),d.YNc(15,x,5,3,"ion-row",6),d._UZ(16,"br"),d.TgZ(17,"div",7),d.YNc(18,Z,2,0,"ion-button",8),d.YNc(19,z,2,0,"ion-button",8),d.qZA(),d._UZ(20,"br"),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(8),d.Q6J("size",12),d.xp6(1),d.Q6J("ngIf",""!=(null==e.addres||null==e.addres.data?null:e.addres.data.title)),d.xp6(1),d.Q6J("ngForOf",null==e.addres||null==e.addres.data?null:e.addres.data.data),d.xp6(2),d.Q6J("ngIf",1==(null==e.addres||null==e.addres.data?null:e.addres.data.show_btn)),d.xp6(1),d.Q6J("ngIf",(null==e.cart_details?null:e.cart_details.length)>0),d.xp6(1),d.Q6J("ngIf",e.msg),d.xp6(1),d.Q6J("ngForOf",e.cart_details),d.xp6(3),d.Q6J("ngIf",1==e.showDonebutt&&!e.msg),d.xp6(1),d.Q6J("ngIf",0==e.showDonebutt&&!e.msg))},directives:[n.Gu,n.sr,n.wd,n.Sm,n.oU,n.cs,n.W2,n.Nd,n.wI,s.O5,s.sg,n.YG,n.gu],styles:[".para[_ngcontent-%COMP%]{color:gray;font-weight:700;font-size:17px}.para[_ngcontent-%COMP%], .para1[_ngcontent-%COMP%]{margin-top:4px;margin-bottom:4px}.para1[_ngcontent-%COMP%]{font-size:12px}.para2[_ngcontent-%COMP%]{font-size:16px;color:red;margin-top:4px;margin-bottom:4px}.brbottom[_ngcontent-%COMP%]{border-bottom:1px solid #d3d3d3}.numcss[_ngcontent-%COMP%]{border:1px solid red;border-radius:10px;text-align:center;font-size:14px;padding:1px 15px}.txtend[_ngcontent-%COMP%]{text-align:end}.mrauto[_ngcontent-%COMP%]{margin:auto}.ionic_btnic[_ngcontent-%COMP%]{--background:#f7d716;--border-radius:5px;width:auto;text-transform:capitalize}.ionic_btn1[_ngcontent-%COMP%], .ionic_btnic[_ngcontent-%COMP%]{height:30px;font-size:14px;color:#000;font-weight:700}.ionic_btn1[_ngcontent-%COMP%]{--background:#9ff1ff;--border-radius:5px;width:30%;text-transform:none}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[a.Bz.forChild(w)],a.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[s.ez,o.u5,n.Pc,C]]}),t})()}}]);