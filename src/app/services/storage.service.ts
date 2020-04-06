import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { throwError, Observable, from, BehaviorSubject } from 'rxjs';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public tipsData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
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
  async getTipsFromPromise(): Promise<any> {
    await Storage.get({ key: 'tipsToday' })
      .then(
        (response: any) => {
          console.log(response.value);
          return this.tipsData.next(JSON.parse(response.value));
        },
        (error) => {
          return throwError(error);
        }
      );
  }
  async getFromPromise(key): Promise<any> {
    await Storage.get({ key })
      .then(
        (response) => {
          return response.value;
        },
        (error) => {
          return throwError(error);
        }
      );
  }
  getAsObservable(key): Observable<any> {
    return from(this.getFromPromise(key));
  }
}
