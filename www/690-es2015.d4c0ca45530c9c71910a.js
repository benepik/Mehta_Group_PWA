(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[690],{40690:function(o,e,t){"use strict";t.r(e),t.d(e,{GeolocationPageModule:function(){return _}});var n=t(38583),i=t(90665),s=t(47823),r=t(12234),c=t(64762),a=t(56544),l=t(88720),g=t(87152),d=t(83046),u=t(14303),h=t(51532),p=t(34255);function Z(o,e){if(1&o&&(l.TgZ(0,"div"),l.TgZ(1,"ion-row"),l.TgZ(2,"ion-col"),l.TgZ(3,"p"),l._uU(4,"Your Location"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(5,"ion-row"),l.TgZ(6,"ion-col",18),l._UZ(7,"ion-icon",19),l.qZA(),l.TgZ(8,"ion-col",20),l._uU(9),l.qZA(),l.qZA(),l.qZA()),2&o){const o=l.oxw();l.xp6(9),l.Oqu(o.loc)}}const f=function(o){return{"content-bg":o}},m=function(o){return{boundary1:o}},q=function(o){return{banner:o}},b=[{path:"",component:(()=>{class o{constructor(o,e,t,n,i,s,r,c,a){this.zone=o,this.geolocation=e,this.route=t,this.platform=n,this.nativeGeocoder=i,this.apiService=s,this.sendData=r,this.diagnostic=c,this.alertController=a,this.profileAddCustomer=this.sendData.alldata,this.profileAddCustomer?(this.requestID=this.profileAddCustomer.requestFor,this.requestIDPage=this.profileAddCustomer.requestPage):(this.requestID="",this.requestIDPage=""),n.ready().then(()=>{console.log("Width: "+n.width()),console.log("Height: "+n.height())})}ngOnInit(){}locationAlert(){this.alertController.create({message:"Enable Location from device settings",backdropDismiss:!1,buttons:[{text:"ok",handler:()=>{console.log("Buy clicked")}}]}).then(o=>{o.present()})}getLocationFun(){return(0,c.mG)(this,void 0,void 0,function*(){this.diagnostic.isLocationEnabled().then(o=>{if(console.log("Location setting is enabled",o),!o)return console.log("The following error occurred: ",o),this.locationAlert(),!1;console.log("Location setting is "+(o?"enabled":"disabled")),console.log("The following enabled ",o),this.apiService.presentLoadingDefault(),this.zone.run(()=>(0,c.mG)(this,void 0,void 0,function*(){this.loc="",console.log("curr_pos4");let o=yield this.geolocation.getCurrentPosition();console.log("curr_pos",o.coords.latitude),console.log("curr_pos",o.coords.longitude),this.getGeoLocation(o.coords.latitude,o.coords.longitude)}))})})}getGeoLocation(o,e,t){return(0,c.mG)(this,void 0,void 0,function*(){if(this.apiService.presentLoadingClose(),navigator.geolocation){console.log("lat",o),console.log("lng",e),this.lat=o,this.lng=e;let n=yield new google.maps.Geocoder,i={latLng:yield new google.maps.LatLng(o,e)};yield n.geocode(i,(o,e)=>{if(console.log("main Array",o,e),e==google.maps.GeocoderStatus.OK){let e=o[0];this.userLocation=o[0],console.log("current Location",o[0]),console.log("loc: ",e.formatted_address),this.loc=e.formatted_address,this.zone.run(()=>{null!=e&&(this.userCity=e.formatted_address,"reverseGeocode"===t&&(this.latLngResult=e.formatted_address))})}})}})}reverseGeocode(o,e){this.platform.is("cordova")?this.nativeGeocoder.reverseGeocode(o,e,{useLocale:!0,maxResults:5}).then(o=>this.userLocationFromLatLng=o[0]).catch(o=>console.log(o)):this.getGeoLocation(o,e,"reverseGeocode")}forwardGeocode(o){this.platform.is("cordova")?this.nativeGeocoder.forwardGeocode(o,{useLocale:!0,maxResults:5}).then(o=>{this.zone.run(()=>{this.lat=o[0].latitude,this.lng=o[0].longitude})}).catch(o=>console.log(o)):(new google.maps.Geocoder).geocode({address:o},(o,e)=>{e==google.maps.GeocoderStatus.OK?this.zone.run(()=>{this.lat=o[0].geometry.location.lat(),this.lng=o[0].geometry.location.lng()}):alert("Error - "+o+" & Status - "+e)})}next(){this.zone.run(()=>{this.apiService.apiCallWithLoginToken(a.n.geoLocationUrl,{latitude:this.lat,longitude:this.lng,location_dump:this.userLocation,request_for:this.requestID,request_page:this.requestIDPage}).subscribe(o=>{1==o.success?this.route.navigate(["/tabs"]):this.apiService.showToastMessage(o.message,"top",3e3,"redBg")},o=>{this.apiService.showToastMessage(JSON.stringify(o),"top",3e3,"redBg")})})}}return o.\u0275fac=function(e){return new(e||o)(l.Y36(l.R0b),l.Y36(g.b),l.Y36(r.F0),l.Y36(s.t4),l.Y36(d.d),l.Y36(u.s),l.Y36(h.b),l.Y36(p.R),l.Y36(s.Br))},o.\u0275cmp=l.Xpm({type:o,selectors:[["app-geolocation"]],decls:36,vars:11,consts:[[3,"ngClass"],[1,"ion-justify-content-center"],["size-xl","6","size-md","8","size-xs","12",3,"ngClass"],["src","assets/icon/logo.svg",2,"width","150px"],[1,"col"],["src","assets/icon/abc.png",2,"width","130px","text-align","right"],[1,"para"],[1,"dev"],["tappable","",3,"click"],[1,"geoBox"],["size","1",1,"autoMargin"],["name","locate-outline",1,"geoIcon"],["size","11",1,"autoMargin"],[1,"detect","ion-no-margin"],[4,"ngIf"],[1,"ion-text-center"],["tappable","",1,"ionic_btn",3,"disabled","click"],["src","assets/icon/Design 1.png",1,"banner_bg"],["size","1"],["name","location-outline"],["size","11"]],template:function(o,e){1&o&&(l.TgZ(0,"ion-content",0),l.TgZ(1,"ion-row",1),l.TgZ(2,"ion-col",2),l.TgZ(3,"ion-grid"),l.TgZ(4,"ion-row"),l.TgZ(5,"ion-col"),l._UZ(6,"img",3),l.qZA(),l.TgZ(7,"ion-col",4),l._UZ(8,"img",5),l.qZA(),l.qZA(),l.qZA(),l.TgZ(9,"ion-row"),l.TgZ(10,"ion-col"),l.TgZ(11,"p",6),l.TgZ(12,"b"),l._uU(13,"Geo Location"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(14,"ion-row"),l.TgZ(15,"ion-col"),l.TgZ(16,"p",7),l._uU(17,"Enable your device location "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(18,"ion-row",8),l.NdJ("click",function(){return e.getLocationFun()}),l.TgZ(19,"ion-col"),l.TgZ(20,"ion-row",9),l.TgZ(21,"ion-col",10),l._UZ(22,"ion-icon",11),l.qZA(),l.TgZ(23,"ion-col",12),l.TgZ(24,"p",13),l._uU(25,"Detect my location"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.YNc(26,Z,10,1,"div",14),l._UZ(27,"br"),l._UZ(28,"br"),l._UZ(29,"br"),l.TgZ(30,"div",0),l.TgZ(31,"ion-row"),l.TgZ(32,"ion-col",15),l.TgZ(33,"ion-button",16),l.NdJ("click",function(){return e.next()}),l._uU(34,"Next"),l.qZA(),l.qZA(),l.qZA(),l._UZ(35,"img",17),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&o&&(l.Q6J("ngClass",l.VKq(5,f,e.platform.width()<740)),l.xp6(2),l.Q6J("ngClass",l.VKq(7,m,e.platform.width()>740)),l.xp6(24),l.Q6J("ngIf",e.loc),l.xp6(4),l.Q6J("ngClass",l.VKq(9,q,e.platform.width()<740)),l.xp6(3),l.Q6J("disabled",!e.loc))},directives:[s.W2,n.mk,s.Nd,s.wI,s.jY,s.gu,n.O5,s.YG],styles:[".col[_ngcontent-%COMP%]{text-align:end}.para[_ngcontent-%COMP%]{margin-bottom:0;font-size:24px}.geoBox[_ngcontent-%COMP%]{border:1px solid var(--headerColor)}.geoIcon[_ngcontent-%COMP%]{font-size:20px}.detect[_ngcontent-%COMP%], .geoIcon[_ngcontent-%COMP%], .para[_ngcontent-%COMP%]{color:var(--headerColor)}.dev[_ngcontent-%COMP%]{font-size:19px}.banner_bg[_ngcontent-%COMP%]{left:0;width:100%;display:block;border-radius:10px}.blank[_ngcontent-%COMP%]{width:100%;height:100px}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[r.Bz.forChild(b)],r.Bz]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[n.ez,i.u5,s.Pc,A]]}),o})()}}]);