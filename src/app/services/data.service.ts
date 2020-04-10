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
    getPoints() {
        return this.http.get(environment.api_url + environment.puntuactions, { headers: this.headers_json });
    }
    puntuactions = [];
    waitersName: any = [];
    postWaitersForm(waitersForm): Observable<any> {
        // console.log(waitersForm);
        this.puntuactions = [];
        this.waitersName = [];
        let waiters = waitersForm;
        waiters.forEach(waiter => {
            
            // console.log(waiter.first_name, waiter.last_name);
            
            this.waitersName.push({
                first_name: waiter.first_name,
                last_name: waiter.last_name,
            });
            console.log(this.waitersName);

            waiter.points.map(point => {
                console.log(point);
                this.puntuactions.push({
                    id: point.id,
                    criteria: point.criteria,
                    points: point.points,
                });
            });


            // let myPostData;
            // myPostData = {
            //     first_name: waiter.first_name,
            //     last_name: waiter.last_name,
            //     puntuactions: this.puntuactions,
            // }
            // console.log(myPostData);
        });
        // for (let waiter of waiters) {

        // };
        // console.log(this.puntuactions);
        // let formData = new FormData();
        // formData.append('first_name', points.first_name);
        // formData.append('last_name', points.last_name);
        // formData.append('puntuactions', JSON.stringify(puntuactions));

        // return this.http.post(environment.api_url + environment.waiters, myPostData, { headers: this.headers_json });
        return;
    }
}
