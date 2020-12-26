import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ion-nav',
  templateUrl: './ion-nav.page.html',
  styleUrls: ['./ion-nav.page.scss'],
})
export class IonNavPage implements OnInit {
  public active;
  selectedPage = 'tab1';
  constructor(
    private router: Router
  ) { }
  ionViewWillEnter() {
    this.navigate(this.selectedPage);

  }
  ngOnInit() {
  }
  navigate(route) {
    this.router.navigateByUrl(`ion-nav/${route}`).then(() => {
      this.active = route;
    });
  }
  // onClick() {
  //   this.active = !this.active;
  // }
  // onFocus($event) {
  //   console.log($event);
  // }
}
