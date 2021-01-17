import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, RoutesRecognized } from '@angular/router';
import { GestureController, NavController } from '@ionic/angular';
import { IonPages } from './ion-nav-interface';
import { IonNavService } from './ion-nav.service';
import { filter } from "rxjs/internal/operators";
@Component({
  selector: 'app-ion-nav',
  templateUrl: './ion-nav.page.html',
  styleUrls: ['./ion-nav.page.scss'],
})
export class IonNavPage implements OnInit {
  constructor(
  ) {
  }
  ionViewWillEnter() {
  }
  ngOnInit() {
  }

  
}































    // // this.route.queryParams.subscribe((data) => {
    // //   console.log(data);
    // // })
    // this.route.params.subscribe(
    //   data => {
    //     // this.page = this.ionPage.getItemById(data.route);
    //     // console.log({ item: this.page });
    //     // // if item is undefined, go back to home
    //     // if (!this.page) {
    //     //   // this.goBack();
    //     // }
    //   }
    // );