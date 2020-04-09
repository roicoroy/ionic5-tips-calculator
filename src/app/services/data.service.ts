import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
@Injectable({
    providedIn: 'root'
})
export class DatasService {
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers_json = new HttpHeaders().set('Content-Type', 'application/json');
    headers_form_data = new HttpHeaders().set('Content-Type', "multipart/form-data");
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
        this.http.get(environment.api_url + environment.tips, { headers: this.headers })
            .subscribe((responseData: any) => {
                this.tipsData.next(responseData);
            });
        return;
    }
    getTipToday(): Observable<any> {
        return this.http.get(environment.api_url + environment.tips_todays, { headers: this.headers });
    }
    postTipsToday(tipsTodayForm): Observable<any> {
        console.log(tipsTodayForm);
        let myTipsTodayForm = {
            tipsAmount: tipsTodayForm
        }
        console.log(myTipsTodayForm);
        return this.http.post(environment.api_url + environment.tips_todays, JSON.stringify(myTipsTodayForm), { headers: this.headers });
    }
    postTips(tipsForm) {
        let myTipsForm = {

        }
        return this.http.post(environment.api_url + environment.tips, { headers: this.headers })
            .subscribe((responseData: any) => {
            });
    }
    postDate(dateForm): Observable<any> {
        console.log(dateForm);
        let date = {
            date: dateForm,
        }
        return this.http.post(environment.api_url + environment.set_dates, JSON.stringify(date), { headers: this.headers });
    }
    getPoints() {
        return this.http.get(environment.api_url + environment.puntuactions, { headers: this.headers });
    }
    postWaitersForm(waitersForm): Observable<any> {
        console.log(waitersForm);
        let waiters = waitersForm.points;
        for (let waiter of waiters) { waiter = waiter };
        // let points = waitersForm.points;
        // for (let point of points) { point.id = point.id.id };
        let formData = new FormData();
        // formData.append('first_name', waitersForm.first_name);
        // formData.append('last_name', waitersForm.last_name);
        formData.append('waiters', JSON.stringify(waiters));
        // let myWaiter = {
        //     first_name: waitersForm.first_name,
        //     last_name: waitersForm.last_name,
        // }
        // console.log(myWaiter);
        return this.http.post(environment.api_url + environment.waiters, formData, this.httpOptions);
    }
}
