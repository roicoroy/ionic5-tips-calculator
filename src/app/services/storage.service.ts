import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  async setItem() {
    await Storage.set({
      key: 'name',
      value: 'Max'
    });
  }
  async getItem() {
    const { value } = await Storage.get({ key: 'name' });
    console.log('Got item: ', value);
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
