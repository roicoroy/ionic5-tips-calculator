import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { throwError, Observable, from } from 'rxjs';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  async setItem(key, value) {
    let myvalue = JSON.stringify(value);
    return await Storage.set({
      key: key,
      value: myvalue
    });
  }
  async getItem(key: any) {
    return await Storage.get({ key });
  }
  async removeItem() {
    await Storage.remove({ key: 'name' });
  }
  async keys() {
    const { keys } = await Storage.keys();
    console.log('Got keys: ', keys);
  }
  async clear() {
    await Storage.clear();
  }
  async getFromPromise(key): Promise<any> {
    Storage.get(key).then(
      (response) => {
        return response;
      },
      (error) => {
        return throwError(error);
      }
    )
  }
  getAsObservable(key): Observable<any> {
    return from(this.getFromPromise(key));
  }
}
