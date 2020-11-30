import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ion-nav',
  templateUrl: './ion-nav.page.html',
  styleUrls: ['./ion-nav.page.scss'],
})
export class IonNavPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  navigate(route) {
    this.router.navigateByUrl(`ion-nav/${route}`);
  }
}
