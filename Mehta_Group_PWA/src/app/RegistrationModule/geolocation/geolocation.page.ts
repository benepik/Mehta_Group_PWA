import { Component, OnInit, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ApiService } from 'src/app/provider/api.service';
import { URLS } from 'src/assets/constant';
import { DataTransferService } from 'src/app/services/data-transfer.service';
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
  constructor( public zone: NgZone, private geolocation: Geolocation,  private route: Router, 
    public platform:Platform, private nativeGeocoder: NativeGeocoder,public apiService:ApiService,
    private sendData:DataTransferService) {

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


 async getLocationFun(){
   this.apiService.presentLoadingDefault();
this.zone.run(async ()=>{
  this.loc='';
  console.log('curr_pos4');
let curr_pos=await this.geolocation.getCurrentPosition();
console.log('curr_pos', curr_pos.coords.latitude);
console.log('curr_pos', curr_pos.coords.longitude);
// if (this.platform.is('cordova')) {

//   let options: NativeGeocoderOptions = {
//     useLocale: true,
//     maxResults: 5
//   };
//   this.nativeGeocoder.reverseGeocode(curr_pos.coords.latitude, curr_pos.coords.longitude, options)
//     .then((result: any) => {
//       this.apiService.presentLoadingClose();
//       console.log(result);
//       this.lat = curr_pos.coords.latitude;
//       this.lng = curr_pos.coords.longitude;
//       this.userLocation = result[0]
//       console.log(this.userLocation);
//       console.log("loc: ", this.userLocation[0]);
    
//     })
//     .catch((error: any) => console.log(error));
// }else{
this.getGeoLocation(curr_pos.coords.latitude, curr_pos.coords.longitude)
// }
// if (this.platform.is('cordova')) {
//   let options: NativeGeocoderOptions = {
//     useLocale: true,
//     maxResults: 5
//   };
//   let nativeGeocoder_res=await this.nativeGeocoder.reverseGeocode(curr_pos.coords.latitude, curr_pos.coords.longitude, options);
//   console.log('nativeGeocoder_res==> ', nativeGeocoder_res);
//   // console.log('nativeGeocoder_res==> ', nativeGeocoder_res);
//   // console.log('nativeGeocoder_res==> ', nativeGeocoder_res);
// }
});


  }
  
  // getLocationFun1(){
  //   this.loc='';
  //   console.log('getLocationFun clicked');
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
  //     if (this.platform.is('cordova')) {
  //       let options: NativeGeocoderOptions = {
  //         useLocale: true,
  //         maxResults: 5
  //       };
  //       this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
  //         .then((result: any) => {
  //           console.log(result);
  //           this.lat = resp.coords.latitude;
  //           this.lng = resp.coords.longitude;
  //           this.userLocation = result[0]
  //           console.log(this.userLocation);
  //           console.log("loc: ", this.userLocation[0]);
          
  //         })
  //         .catch((error: any) => console.log(error));
  //     } else {
  //       this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
  //     }
  //   }).catch((error) => { 
      
  //     console.log("getLocationFun error:=> ", this.userLocation[0]);
  //   });

  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //     console.log("getLocationFun watch.subscribe:=> ",data);

  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     // data.coords.latitude
  //     // data.coords.longitude
  //     let options: NativeGeocoderOptions = {
  //       useLocale: true,
  //       maxResults: 5
  //     };
  //     if (this.platform.is('cordova')) {
  //       let options: NativeGeocoderOptions = {
  //         useLocale: true,
  //         maxResults: 5
  //       };
  //       this.nativeGeocoder.reverseGeocode(data['coords']['latitude'], data['coords']['longitude'], options)
  //         .then((result: NativeGeocoderResult[]) => {
  //           console.log(result)
  //           this.userLocation = result[0]
  //           console.log(this.userLocation);
  //           console.log("loc: ", this.userLocation[0]);
  //         })
  //         .catch((error: any) => console.log(error));
  //     } else {
  //       console.log('not cordove')
  //       this.getGeoLocation(data['coords']['latitude'], data['coords']['longitude'])
  //     }
  //   });
  // }
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

