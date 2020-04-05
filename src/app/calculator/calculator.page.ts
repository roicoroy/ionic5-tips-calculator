import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { timingSafeEqual } from 'crypto';
import { throwError } from 'rxjs';
import { DatasService } from '../services/data.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  loggedUser;
  dataTips;
  constructor(
    private auth: AuthService,
    private data: DatasService
  ) {
  }
  ionViewWillEnter() {
    this.auth.getUserData()
      .then(
        (responseUser) => this.loggedUser = responseUser,
        (error) => this.handleError(error),
      );
    this.getTipsData();
  }
  getTipsData() {
    this.data.getTips()
      .subscribe(
        (responseTips) => this.dataTips = responseTips,
        (error) => this.handleError(error),
      );
  }
  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }
  handleError(error) {
    return throwError(error);
  }
}
