import { Component, OnInit, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ApiService } from 'src/app/provider/api.service';
import { URLS } from 'src/assets/constant';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
declare var google;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  userLocation;
  userCity;
  lat;
  lng;
  loc:any;
  location;
  latLngResult;
  userLocationFromLatLng;
  currentAddress:any;
  profileAddCustomer:any;
  requestIDPage:any;
  requestID:any;
  constructor( public zone: NgZone,private geolocation: Geolocation,private route: Router, public platform:Platform, 
    private nativeGeocoder: NativeGeocoder,public apiService:ApiService,private sendData:DataTransferService,
    private diagnostic: Diagnostic,public alertController:AlertController) {

      this.profileAddCustomer=this.sendData.alldata;
      if(this.profileAddCustomer){
      this.requestID=this.profileAddCustomer.requestFor,
      this.requestIDPage=this.profileAddCustomer.requestPage
      }else{
        this.requestID='';
        this.requestIDPage='';
      }
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });

   }

  ngOnInit() {

  }


  locationAlert(){
    this.alertController.create({
      message: 'Enable Location from device settings',
      backdropDismiss: false,
      buttons: [ {
        text: 'ok',
        handler: () => {
          console.log('Buy clicked');
        }
      }]
    }).then(alert => {
        alert.present();
      });
  }
 async getLocationFun(){
   this.diagnostic.isLocationEnabled().then((enabled) =>{
    // this.diagnostic.requestLocationAuthorization().then((requestLocation=>{}))
    console.log("Location setting is enabled" , enabled);
     if(enabled){
      console.log("Location setting is " + (enabled ? "enabled" : "disabled"));
      console.log("The following enabled ",enabled);
      this.apiService.presentLoadingDefault();
      this.zone.run(async ()=>{
      this.loc='';
      console.log('curr_pos4');
      let curr_pos=await this.geolocation.getCurrentPosition();
      console.log('curr_pos', curr_pos.coords.latitude);
      console.log('curr_pos', curr_pos.coords.longitude);
    this.getGeoLocation(curr_pos.coords.latitude, curr_pos.coords.longitude)
    });
     }else{
      console.log("The following error occurred: ",enabled);
      this.locationAlert();
      return false;
     }
   });
  }
 
  async getGeoLocation(lat: number, lng: number, type?) {
    this.apiService.presentLoadingClose();
    if (navigator.geolocation) {
      console.log('lat', lat);
      console.log('lng', lng);
      this.lat = lat;
      this.lng = lng;
      let geocoder = await new google.maps.Geocoder();
      let latlng = await new google.maps.LatLng(lat, lng);
      let request = { latLng: latlng };

      await geocoder.geocode(request, (results, status) => {
        console.log('main Array',results,status)
        if (status == google.maps.GeocoderStatus.OK) {
          let result = results[0];
          this.userLocation=results[0];
          console.log('current Location',results[0]);
          console.log("loc: ", result['formatted_address']);
          this.loc= result['formatted_address'];
          this.zone.run(() => {
            if (result != null) {
              this.userCity = result.formatted_address;
              if (type === 'reverseGeocode') {
                this.latLngResult = result.formatted_address;
                
              }
            }
          })
        }
      });
    }
  }
  reverseGeocode(lat, lng) {
    if (this.platform.is('cordova')) {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(lat, lng, options)
      .then((result: NativeGeocoderResult[]) => this.userLocationFromLatLng = result[0])
        .catch((error: any) => console.log(error));
    } else {
      this.getGeoLocation(lat, lng, 'reverseGeocode');
    }
  }
  forwardGeocode(address) {
    if (this.platform.is('cordova')) {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.forwardGeocode(address, options).then((result: NativeGeocoderResult[]) => {
        this.zone.run(() => {
          this.lat = result[0].latitude;
          this.lng = result[0].longitude;
        })
      })
      .catch((error: any) => console.log(error));
    } else {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.zone.run(() => {
            this.lat = results[0].geometry.location.lat();
            this.lng = results[0].geometry.location.lng();
          })
        } else {
          alert('Error - ' + results + ' & Status - ' + status)
        }
      });
    }
  }

  // back(){
  //   this.sendData.alldata={'requestPage':this.profileAddCustomer.requestPage}
  //   this.route.navigate(['./profile-upload']);
  // }
  next(){
      this.zone.run(()=>{
        let apiKey={
          "latitude":this.lat ,
          "longitude":this.lng,
          "location_dump":this.userLocation,
          "request_for":this.requestID,
          "request_page":this.requestIDPage,
        }
        this.apiService.apiCallWithLoginToken(URLS.geoLocationUrl,apiKey).subscribe((result) =>{
          if(result.success==1){
            this.route.navigate(['/tabs']);    
          }else{
            this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
          }
        },err =>{
          this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
        });
      }); 
      // this.route.navigate(['./registration']);
    }
  }

