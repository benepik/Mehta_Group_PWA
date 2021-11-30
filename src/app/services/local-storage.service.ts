import { Injectable } from '@angular/core';
// import { Storage } from "@ionic/storage";
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _storage: Storage | null = null;
  constructor(private storage:Storage) { }

  // async setStorage(key, value){
  //   console.log('localStorage storedData storage data key==> ', key);
  //   console.log('localStorage storedData storage data value==> ', value);
  //  await this.storage.get('allStoreData').then(async (storedData)=>{
  //     console.log('call Fcm storage service2==> ', storedData);  
  //     if(storedData){
  //       storedData[key]=value;
  //      await this.storage.set('allStoreData', storedData).then(res=>{
  //         console.log('storage data==> ', res);
  //       });
  //     }else{
  //       console.log('******==> ', storedData);    
  //       console.log('****** key==> ', key);    
  //       console.log('****** value==> ', value);    
  //       let obj={};
  //       obj[key]=value;
  //       await this.storage.set('allStoreData', obj).then(res=>{
  //         console.log('storage data null obj==> ', res);
  //       });
  //     }
  //   });
  // }

  async setStorage(key, value){
    console.log('localStorage storedData storage data key==> ', key);
    console.log('localStorage storedData storage data value==> ', value);
   await this.storage.get('allStoreData').then(async (storedData)=>{
      console.log('call Fcm storage service2==> ', storedData);  
      if(storedData){
        storedData[key]=value;
       await this.storage.set('allStoreData', storedData).then(res=>{
          console.log('storage data==> ', res);
        });
      }else{
        console.log('******==> ', storedData);    
        console.log('****** key==> ', key);    
        console.log('****** value==> ', value);    
        let obj={};
        obj[key]=value;
        await this.storage.set('allStoreData', obj).then(res=>{
          console.log('storage data null obj==> ', res);
        });
      }
    });
  }


  // to get a key/value pair
  async getStorage(): Promise<any> {
    try {
      const result = await this.storage.get('allStoreData');
      if (result != null) {
        return result;
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }



  // remove a single key value:
  remove(key: string){
    this.storage.remove(key);
  }

  //  delete all data from your application:
  clear(){
    this.storage.clear();
  }

  async createDB() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    // await this.storage.create();
    const storage = await this.storage.create();
    this._storage = storage;
  }

}
