(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[8592],{6633:function(t,e,n){"use strict";n.d(e,{c:function(){return r}});var i=n(23150),o=n(52954),s=n(97279);const r=(t,e)=>{let n,r;const c=(t,i,o)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,i);s&&e(s)?s!==n&&(l(),a(s,o)):l()},a=(t,e)=>{n=t,r||(r=n);const o=n;(0,i.c)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,i.c)(()=>e.classList.remove("ion-activated")),t&&r!==n&&n.click(),n=void 0};return(0,s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),(0,o.h)(),r=void 0}})}},77330:function(t,e,n){"use strict";n.d(e,{a:function(){return o},d:function(){return s}});var i=n(52377);const o=async(t,e,n,o,s)=>{if(t)return t.attachViewToDom(e,n,s,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>r.classList.add(t)),s&&Object.assign(r,s),e.appendChild(r),await new Promise(t=>(0,i.c)(r,t)),r},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},52954:function(t,e,n){"use strict";n.d(e,{a:function(){return s},b:function(){return r},c:function(){return o},d:function(){return a},h:function(){return c}});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},s=()=>{i.selectionStart()},r=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},66575:function(t,e,n){"use strict";n.d(e,{s:function(){return i}});const i=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!r()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let i=n.length-1;i>=0;i--){const t=n[i];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const r=s(t);for(let e=0;e<r.length;e++)o(r[e])}});const i=s(e);for(let t=0;t<i.length;t++)o(i[t]);const c=document.createElement("div");c.appendChild(e);const l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(e){return console.error(e),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),i=e.name;if(!c.includes(i.toLowerCase())){t.removeAttribute(i);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=s(t);for(let n=0;n<e.length;n++)o(e[n])},s=t=>null!=t.children?t.children:t.childNodes,r=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},60408:function(t,e,n){"use strict";n.d(e,{S:function(){return i}});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,o=t*i-t+"ms",s=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},61269:function(t,e,n){"use strict";n.d(e,{c:function(){return o},g:function(){return s},h:function(){return i},o:function(){return c}});const i=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}},43018:function(t,e,n){"use strict";n.d(e,{D:function(){return o}});var i=n(88720);let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[]]}),t})()},75176:function(t,e,n){"use strict";n.d(e,{y:function(){return s}});var i=n(88720),o=n(39075);let s=(()=>{class t{constructor(t){this.sanitizer=t}transform(t){return console.log("comming url in safe pipe== ",t),this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.H7,16))},t.\u0275pipe=i.Yjl({name:"safe",type:t,pure:!0}),t})()},68243:function(t,e,n){"use strict";n.r(e),n.d(e,{ProfilePageModule:function(){return d}});var i=n(38583),o=n(90665),s=n(47823),r=n(12234),c=n(51270),a=n(88720);const l=[{path:"",component:c.G}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,o.u5,s.Pc,u]]}),t})()},26023:function(t,e,n){"use strict";n.d(e,{f:function(){return g}});var i=n(64762),o=n(56544),s=n(88720),r=n(47823),c=n(14303),a=n(51532),l=n(12234),u=n(18345),d=n(38583),p=n(90665);const h=function(t,e){return{mobilecss:t,desktopcss:e}};let g=(()=>{class t{constructor(t,e,n,i,o,s,r){this.modalController=t,this.apiServices=e,this.platform=n,this.sendData=i,this.zone=o,this.router=s,this.localStorage=r,this.FirstOtp="",this.SecondOtp="",this.ThirdOtp="",this.FourthOtp="",this.key=0,this.cart_details=this.sendData.cartDetails,this.redeem_for=this.sendData.redeem_for,this.addres_id=this.sendData.address_id,this.req=this.sendData.alldata,this.red=this.sendData.item,this.localStorage.getStorage().then(t=>{this.userTypeAll=t.allStoreData})}ngOnInit(){this.getOtpDetails()}ionViewWillEnter(){this.zone.run(()=>{this.platform.is("mobile")?(this.val=!0,console.log("this.val",this.val)):(this.val=!1,console.log("this.val111",this.val))})}getkey(t,e){console.log("tttt111",e),console.log("tttt111",t),console.log("tttt",this.otpfirts)}getOtpDetails(){this.apiServices.presentLoadingDefault(),this.zone.run(()=>(0,i.mG)(this,void 0,void 0,function*(){this.apiServices.apiCallWithLoginToken(o.n.otpGetUrl,{send_type:"redeem",request_page:"dealer",redeem_for:this.red,request_for:this.req.request_for,request_user_type:this.req.request_user_type}).subscribe(t=>{this.temparray=t.data,this.apiServices.presentLoadingClose(),this.apiServices.showToastMessage(t.message,"top",2e3,1==t.success||"1"==t.success?"greenBg":"redBg")})}))}moveFocus1(t,e,n){console.log("val",e)}moveFocus(t,e,n){console.log("val",e),n<4&&(null==this.SecondOtp||""==this.SecondOtp||null==this.ThirdOtp||""==this.ThirdOtp?t.setFocus():null!=this.FourthOtp&&""!=this.FourthOtp||t.setFocus())}close(){this.modalController.dismiss({dismissed:!0})}checkFocus(t){console.log("otp:",this.FirstOtp),console.log("********",t),1==t?this.FirstOtp="":2==t?this.SecondOtp="":3==t?this.ThirdOtp="":4==t&&(this.FourthOtp=""),console.log("otp:",this.FirstOtp,this.SecondOtp,this.ThirdOtp,this.FourthOtp)}gotohistory(){console.log("otp1223",this.otpfirts),this.zone.run(()=>(0,i.mG)(this,void 0,void 0,function*(){let t={request_page:"dealer",redeem_for:this.redeem_for,address_id:this.addres_id,cart_id:this.cart_details[0].cart_id,otp:this.FirstOtp.trim()+this.SecondOtp.trim()+this.ThirdOtp.trim()+this.FourthOtp.trim(),otp_type:this.temparray.type,request_for:this.req.request_for,request_user_type:this.req.request_user_type};this.apiServices.apiCallWithLoginToken(o.n.BuyUrl,t).subscribe(t=>{1==t.success||"1"==t.success?(this.modalController.dismiss({dismissed:!0}),this.apiServices.showToastMessage(t.message,"top",2e3,"greenBg"),this.sendData.page_request_type="detail",this.sendData.alldata=1==this.userTypeAll.employee_type||""==this.req.request_for?{customer_id:"",request_page:"self",backKey:"back"}:{customer_id:this.req.request_for,request_page:"other",backKey:"back"},this.router.navigate(["/purchasehistory"])):this.apiServices.showToastMessage(t.message,"top",2e3,"redBg")})}))}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(r.IN),s.Y36(c.s),s.Y36(r.t4),s.Y36(a.b),s.Y36(s.R0b),s.Y36(l.F0),s.Y36(u.n))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-redeemotp"]],decls:29,vars:18,consts:[[2,"--background","rgba(255,255,255,0.5)"],[1,"circle"],["name","close",1,"circle_close",3,"click"],[1,"inputfiled",3,"ngClass"],[1,"ion-no-padding",3,"size"],[1,"otpcss"],["type","tel","placeholder","*","maxlength","1",1,"bodBottom",2,"padding","0px !important",3,"ngModel","ionFocus","keyup","ngModelChange"],["otp1",""],["otp2",""],["otp3",""],["otp4",""],[3,"size"],[1,"resend",3,"click"],[1,"txtcentr"],[1,"ionic_btn",3,"click"]],template:function(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"ion-content",0),s.TgZ(1,"ion-row"),s.TgZ(2,"ion-col",1),s.TgZ(3,"ion-icon",2),s.NdJ("click",function(){return e.close()}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(4,"div",3),s.TgZ(5,"ion-row"),s.TgZ(6,"ion-col",4),s.TgZ(7,"p",5),s._uU(8),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"ion-row"),s.TgZ(10,"ion-col",4),s.TgZ(11,"ion-input",6,7),s.NdJ("ionFocus",function(){return e.checkFocus(1)})("keyup",function(){s.CHM(t);const n=s.MAs(15);return e.moveFocus(n,e.FirstOtp,"1")})("ngModelChange",function(t){return e.FirstOtp=t}),s.qZA(),s.qZA(),s.TgZ(13,"ion-col",4),s.TgZ(14,"ion-input",6,8),s.NdJ("ionFocus",function(){return e.checkFocus(2)})("keyup",function(){s.CHM(t);const n=s.MAs(18);return e.moveFocus(n,e.SecondOtp,"2")})("ngModelChange",function(t){return e.SecondOtp=t}),s.qZA(),s.qZA(),s.TgZ(16,"ion-col",4),s.TgZ(17,"ion-input",6,9),s.NdJ("ionFocus",function(){return e.checkFocus(3)})("keyup",function(){s.CHM(t);const n=s.MAs(21);return e.moveFocus(n,e.ThirdOtp,"3")})("ngModelChange",function(t){return e.ThirdOtp=t}),s.qZA(),s.qZA(),s.TgZ(19,"ion-col",4),s.TgZ(20,"ion-input",6,10),s.NdJ("ionFocus",function(){return e.checkFocus(4)})("keyup",function(){s.CHM(t);const n=s.MAs(21);return e.moveFocus(n,e.FourthOtp,"4")})("ngModelChange",function(t){return e.FourthOtp=t}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(22,"ion-row"),s.TgZ(23,"ion-col",11),s.TgZ(24,"p",12),s.NdJ("click",function(){return e.getOtpDetails()}),s._uU(25),s.qZA(),s.qZA(),s.qZA(),s.TgZ(26,"div",13),s.TgZ(27,"ion-button",14),s.NdJ("click",function(){return e.gotohistory()}),s._uU(28),s.qZA(),s.qZA(),s.qZA(),s.qZA()}2&t&&(s.xp6(4),s.Q6J("ngClass",s.WLB(15,h,1==e.val,0==e.val)),s.xp6(2),s.Q6J("size",12),s.xp6(2),s.Oqu(null==e.temparray?null:e.temparray.FirstMsg),s.xp6(2),s.Q6J("size",3),s.xp6(1),s.Q6J("ngModel",e.FirstOtp),s.xp6(2),s.Q6J("size",3),s.xp6(1),s.Q6J("ngModel",e.SecondOtp),s.xp6(2),s.Q6J("size",3),s.xp6(1),s.Q6J("ngModel",e.ThirdOtp),s.xp6(2),s.Q6J("size",3),s.xp6(1),s.Q6J("ngModel",e.FourthOtp),s.xp6(3),s.Q6J("size",12),s.xp6(2),s.AsE("",null==e.temparray?null:e.temparray.ThirdMsg,"\xa0",null==e.temparray?null:e.temparray.resendText,""),s.xp6(3),s.Oqu(null==e.temparray?null:e.temparray.buttonText))},directives:[r.W2,r.Nd,r.wI,r.gu,d.mk,r.pK,r.j9,p.nD,p.JJ,p.On,r.YG],styles:[".inputfiled[_ngcontent-%COMP%]{padding:0 20px}.inputfiled[_ngcontent-%COMP%]   .bodBottom[_ngcontent-%COMP%]{border:2px solid red;border-radius:10px;text-align:center;font-size:18px;font-weight:700;padding-right:10px!important;width:85%;height:50px;margin:auto;color:red}.resendText[_ngcontent-%COMP%]{color:red;font-size:12px;margin:0}.otpcss[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.resend[_ngcontent-%COMP%]{font-size:10px;color:red}.desktopcss[_ngcontent-%COMP%]{background:#fff}.txtcentr[_ngcontent-%COMP%]{text-align:center}.circle[_ngcontent-%COMP%]{text-align:end;padding:0}.circle_close[_ngcontent-%COMP%]{font-size:30px;color:#b01d22}.sure[_ngcontent-%COMP%]{font-size:20px;color:#b01d22}.ok_but[_ngcontent-%COMP%]{--background:#b01d22}"]}),t})()}}]);