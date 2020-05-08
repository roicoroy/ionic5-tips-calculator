import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WaiterObjService } from '../waiter-obj.service';


@Component({
  selector: 'app-add-hours',
  templateUrl: './add-hours.page.html',
  styleUrls: ['./add-hours.page.scss'],
})
export class AddHoursPage implements OnInit {
  waitersList: any;
  constructor(
    private storage: Storage,
    private router: Router,
    private navCtl: NavController,
    private waiterObjService: WaiterObjService
  ) { }
  ionViewWillEnter() {
    this.waiterObjService.get('waitersList').subscribe((waitersListResponse: any) => {
      this.waitersList = JSON.parse(waitersListResponse);
      console.log(this.waitersList);
    })
  }
  ngOnInit() {
  }
  back() {
    this.navCtl.navigateBack('add-waiter');
  }
  finish() {
    console.log('finijsh');
  }
}