import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { logging } from 'protractor';
import { Observable, from } from 'rxjs';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  async setItem(key, value) {
    const myvalue = JSON.stringify(value);
    return await Storage.set({
      key,
      value: myvalue,
    });
  }
  async getItem(key: any) {
    const ret = await Storage.get({ key });
    const data = JSON.parse(ret.value);
    return data;
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
  getTokenAsObservable(key): Observable<any> {
    return from(this.getItem(key));
  }
}
