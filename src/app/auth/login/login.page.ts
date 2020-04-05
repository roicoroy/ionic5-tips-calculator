import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TestObject } from 'protractor/built/driverProviders';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  logo = 'assets/logo.svg';
  constructor(
    public formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private storage: StorageService
  ) {
    this.loginForm = formBuilder.group({
      identifier: ['roicoroy@yahoo.com.br'],
      password: ['Rwbento123'],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.loginStrapiUser(this.loginForm)
        .subscribe((response: any) => {
          if (response.jwt) {
            this.storage.setItem('token', response.jwt)
              .then(
                () => this.storage.setItem('user', response.user),
              ).then(
                () => this.router.navigateByUrl('calculator'),
              ),
              // tslint:disable-next-line: no-unused-expression
              (error) => throwError(error);
          }
        })
    } else {
      console.log('Error');
    }
  }
  ngOnInit() {
  }
  register() {
    this.router.navigateByUrl('register');
  }
}
