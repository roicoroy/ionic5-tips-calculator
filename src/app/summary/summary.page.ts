import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { throwError, Observable, from } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { ModalController, LoadingController } from '@ionic/angular';
import { ResultComponent } from './result/result.component';
const { Storage } = Plugins;
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  summaryList = true;
  waitersList;
  tipsToday;
  loaderToShow;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private storage: StorageService,
    private modalController: ModalController,
    public loadingController: LoadingController
  ) { }
  ionViewWillEnter() {
    this.getWaiters();
    this.getTips();
  }
  ngOnInit() {
  }
  async  openModal() {
    const modal = await this.modalController.create({
      component: ResultComponent,
      componentProps: {
        'tipsToday': this.tipsToday
      }
    });
    return await modal.present();
  }
  calculate() {
     this.openModal();
  }
  async getTips(key: string = 'tipsToday') {
    return await Storage.get({ key }).then((watiersListResponse: any) => {
      this.tipsToday = JSON.parse(watiersListResponse.value);
    });
  }
  async getWaiters(key: string = 'waitersList') {
    return await Storage.get({ key }).then((watiersListResponse: any) => {
      this.waitersList = JSON.parse(watiersListResponse.value);
    });
  }
  back() {
    this.router.navigateByUrl('calculator');
  }
}
