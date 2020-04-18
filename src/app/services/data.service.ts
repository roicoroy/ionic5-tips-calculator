import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
@Injectable({
    providedIn: 'root'
})
export class DatasService {
    headers_json = new HttpHeaders().set('Content-Type', 'application/json');
    headers_form_data = new HttpHeaders().set('Content-Type', "multipart/form-data");
    headers_url_encoded = new HttpHeaders().set('Content-Type', "application/x-www-form-urlencoded");
    httpOptions = {
        headers: new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        })
    };
    public tipsData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public tipsTodayData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    constructor(
        private http: HttpClient,
    ) { }

    getTips(): Observable<any> {
        this.http.get(environment.api_url + environment.tips, { headers: this.headers_json })
            .subscribe((responseData: any) => {
                this.tipsData.next(responseData);
            });
        return;
    }
    getTipToday(): Observable<any> {
        return this.http.get(environment.api_url + environment.tips_todays, { headers: this.headers_json });
    }
    postTipsToday(tipsTodayForm): Observable<any> {
        console.log(tipsTodayForm);
        let myTipsTodayForm = {
            tipsAmount: tipsTodayForm
        }
        console.log(myTipsTodayForm);
        return this.http.post(environment.api_url + environment.tips_todays, JSON.stringify(myTipsTodayForm), { headers: this.headers_json });
    }
    postTips(tipsForm) {
        let myTipsForm = {

        }
        return this.http.post(environment.api_url + environment.tips, { headers: this.headers_json })
            .subscribe((responseData: any) => {
            });
    }
    postDate(dateForm): Observable<any> {
        console.log(dateForm);
        let date = {
            date: dateForm,
        }
        return this.http.post(environment.api_url + environment.set_dates, JSON.stringify(date), { headers: this.headers_json });
    }
    getPointsFromServer(): Observable<any> {
        return this.http.get(environment.api_url + environment.puntuactions, { headers: this.headers_json });
    }

    postWaitersForm(postData): Observable<any> {
        console.log(postData);
        return this.http.post(environment.api_url + environment.waiters, JSON.stringify(postData), { headers: this.headers_json });
    }
}
