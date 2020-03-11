import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  async setItem(key, value) {
    // let myvalue = JSON.parse(value);
    return await Storage.set({
      key: key,
      value: value
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
}
