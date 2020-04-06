import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DatasService {
    headersJson = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(
        private http: HttpClient,
    ) { }

    getTips(): Observable<any> {
        return this.http.get(environment.api_url + environment.tips, { headers: this.headersJson });
    }
}
