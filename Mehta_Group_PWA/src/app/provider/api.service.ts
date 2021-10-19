import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { APP_CONFIG, URLS } from 'src/assets/constant';
import { catchError, mergeMap } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';
import { LocalStorageService } from '../services/local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // public  loading:any;
 loading:any;
  tandc:any;
  isSelected:any;
  constructor(private http:HttpClient, public loadingCtrl: LoadingController, public toastController:ToastController,private localStorage:LocalStorageService ) { }

  apiCallWithLoginToken(url: string, data: Object): Observable<any> {
    console.log("22url==", url);
    return from(this.localStorage.getStorage()).pipe(mergeMap((storedData)=>{
      console.log("Shivanshi local storage data==", storedData);
      data["client_id"] = APP_CONFIG.clientId;
      data["device"] = APP_CONFIG.device;
      data["app_version"]=APP_CONFIG.app_version;
      data["device_id"] = APP_CONFIG.device_id;         
      var loginToken;
      if(storedData && storedData.allStoreData){
        console.log("Shivanshi allStoreData==", storedData.allStoreData);
        data["employee_id"] = storedData.allStoreData.user_id;
        data["user_type"]=storedData.allStoreData.employee_type;
         loginToken=storedData.allStoreData.login_token;
        console.log('Shivanshi login token', loginToken);
      }else{
        loginToken="";
        console.log('login token response', loginToken);
      }
      var httpOptions = {
          headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization:loginToken
        }),
      };
      console.log('Shivanshi request options', httpOptions);
      console.log('Shivanshi request url', URLS.baseUrl+url);
      console.log('Shivanshi request data', data);

      return this.http.post(URLS.baseUrl+url, data, httpOptions)
      .pipe(catchError(this.handleError));
    }) )

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened, please try again later.");
  }
  async showToastMessage(msg, pos, time, bgClassName) {
    console.log("toastMessage color==", bgClassName);
    const toast = await this.toastController.create({
      message: msg,
      position: pos,
      duration: time,
      cssClass:bgClassName
    });
    toast.present();
  }
  async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
			message: '',
			cssClass: 'loader-waiting',
      duration:2000
      
		});
		await this.loading.present();
    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');

	}

  async	presentLoadingClose() {
    await this.loading.dismiss();
    // console.log('Loading dismissed!');
    // await this.loading.getTop().then(loader => {
    //   if (loader) {
    //     loader.dismiss();
    //   }
    // });
	}

  //for media file
    public mediaFileUpload(url, formData) {
      return from(this.localStorage.getStorage()).pipe(mergeMap((storedData)=>{
        console.log("storedData",storedData)
        formData.append('client_id', APP_CONFIG.clientId);
        formData.append('device',APP_CONFIG.device);
        formData.append('device_id', APP_CONFIG.device_id);
        formData.append('app_version', APP_CONFIG.app_version);
        formData.append('employee_id', storedData.allStoreData.user_id);
        formData.append('user_type', storedData.allStoreData.employee_type);
      return this.http.post<any>(URLS.baseUrl+url, formData, {
          reportProgress: true,
          observe: 'events',
        })
      }));
    }
}
