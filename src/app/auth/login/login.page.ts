import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage';

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
    private storage: Storage
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
          console.log(response);
          if (response.jwt) {
            this.storage.set('token', response.jwt)
              .then(
                () => this.storage.set('user', response.user),
              ).then(
                () => this.router.navigateByUrl('calculator-slides'),
              ),
              (error) => console.log(error);
          }
        })
    }
    else {
      console.log('Error');
    }
  }
  ngOnInit() {
  }
  register() {
    this.router.navigateByUrl('register');
  }
  add() {
    this.storage.set('test', 'test string').then((response) => console.log('response....', response));
  }
  get() {
    this.storage.get('test').then((response) => console.log('response....', response));
  }
  skipAuth() {
    this.router.navigateByUrl('calculator-slides');
  }
}
