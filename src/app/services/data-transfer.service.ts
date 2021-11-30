import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageZoomPage } from '../image-zoom/image-zoom.page';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  myParam:any;
  alldata:any;
  loginKey:any;
  registrationType:any;
  registrationData:any;
  pointData:any;
  month :any;
  year:any; 
  item:any;
  listType:any;
  postId:any;
  viewProfilId:any;
  viewProfilType:any;
  customerId:any;
  customerType:any;
  Flag:any;
  redeem_for:any;
  addressDetails:any;
  itemDetails:any;
  cartDetails:any;
  address_id:any;
  cart_request:any;
  ordersDetails:any;
  page_request_type:any;
  openTabs:any;
  backKey:any;
  request_page:any;
  constructor(public modalController: ModalController,) { }
  async zoomSingleImage(path){
    const modal = await this.modalController.create({
      component: ImageZoomPage,
      cssClass: 'my-custom-class',
      // swipeToClose: true,
      // mode: 'ios', backdropDismiss: true,
      // presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        data: path,
      },
    });
    return await modal.present();
  }
  readMoreHTML(str, max, add){
    console.log('str==> ',str);
    if(str && str.length>max){
    var tempStr = str.substring(0, max);
    var openAtag = tempStr.split("<a ");
    var closeAtag = tempStr.split("</a>");
    // console.log('openAtag== ', openAtag.length);
    // console.log('closeAtag== ', closeAtag.length);
    if (openAtag.length == closeAtag.length) {
      str = tempStr;
      add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
      // console.log("equal== ", str);
      return str + " " + add;
    } else {
      var nextStr = str.substring(max, str.length);
      // console.log("remaining sub string******", nextStr);
      var nextCloseAtagIndex = nextStr.search("</a>");
      // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);
      str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4);
      // console.log("final******", str);
      add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
      // console.log("not equal== ", str);
      return str + " " + add;
    }
    // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
    // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);
  }else{
    return str;
  }
  }
}
