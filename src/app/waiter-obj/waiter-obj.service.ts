import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { classToPlain, plainToClass } from "class-transformer";
import { Observable } from "rxjs/Observable";
import { WaiterObj } from '../interfaces/intefaces';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WaiterObjService {
  headers_json = new HttpHeaders().set('Content-Type', 'application/json');
  headers_form_data = new HttpHeaders().set('Content-Type', "multipart/form-data");
  headers_url_encoded = new HttpHeaders().set('Content-Type', "application/x-www-form-urlencoded");
  public tipsData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public tipsTodayData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(
    public storage: Storage,
    private http: HttpClient,

  ) { }
  getWaiterListFromServer(): Observable<any> {
    return this.http.get(environment.api_url + environment.waiters, { headers: this.headers_json });
  }
  getPointsListFromServer(): Observable<any> {
    return this.http.get(environment.api_url + environment.points_awarded, { headers: this.headers_json });
  }
  postWaitersForm(postData): Observable<any> {
    console.log(postData);
    return this.http.post(environment.api_url + environment.waiters_lists, postData, { headers: this.headers_url_encoded });
  }
  public get(key): Observable<Array<WaiterObj>> {
    return Observable.create(observer => {
      this.storage.get(key)
        .then(data => {
          if (data) {
            observer.next(data);
          } else {
            observer.next([]);
          }
          observer.complete();
        }).catch(error => {
          observer.error(error);
          observer.complete();
        });
    });
  }
  public save(waiterObj?: WaiterObj) {
    this.storage.set('waiterObj', waiterObj);
    console.log('saved!', waiterObj);
  }
}
