import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonSlides } from '@ionic/angular';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.page.html',
  styleUrls: ['./image-zoom.page.scss'],
})
export class ImageZoomPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    zoom: {
      minRatio: 1,
      maxRatio: 3,
      toggle: true,
      containerClass :'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  };
  zoomData: any;
  loginUserData: any;
  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,private localStorage:LocalStorageService,
  ) {
    this.localStorage.getStorage().then(result => {
      this.loginUserData=result.allStoreData;
    });
 }
 ionViewWillEnter(){
  this.slides.lockSwipes(true);
 }
ngOnInit() {
  console.table(this.navParams);
  this.zoomData=this.navParams.data.data;
  console.log('img==> ',this.zoomData);
}
dismiss() {
  this.modalCtrl.dismiss();
  this.slides.lockSwipes(false)
}
download(){

}
}