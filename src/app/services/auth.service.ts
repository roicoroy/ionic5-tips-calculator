import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(
        private router: Router,
        public http: HttpClient,
        private storage: StorageService
    ) { }

    loginStrapiUser(loginForm) {
        const body: any = {
            identifier: loginForm.value.identifier,
            password: loginForm.value.password
        };
        const loggedUser: any = {
            identifier: loginForm.value.identifier
        };
        return this.http.post('http://localhost:1337/auth/local/', JSON.stringify(body), { headers: this.headers });
    }
    logout() {
        this.storage.clear().then(() => {
            this.router.navigateByUrl('login').then(() => console.log('logout'));
        });
    }
    // register(onRegisterForm): Observable < any > {
    //     console.log('logout');
    //     return;
    // }
    getUserData(): Promise<any> {
        return this.storage.getItem('user');
    }
}