import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AddTipsComponent } from './add-tips/add-tips.component';
@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.page.html',
  styleUrls: ['./waiters.page.scss'],
})
export class WaitersPage implements OnInit {
  waiters = [];
  constructor(
    public alertController: AlertController,
    private router: Router,
    public modalController: ModalController
  ) {
    
  }

  ngOnInit() {
  }
  // addWaiter() {
  //   const data = {
  //     name: 'Jose',
  //     points: 3.0,
  //     hours: 30
  //   };
  //   this.waiters.push(data);
  //   console.log('add waiter, open component', this.waiters);
  // }
  calculateTipsPage() {
    console.log('calculate tips');

  }
  async addWaiter() {
    const modal = await this.modalController.create({
      component: AddTipsComponent
    });
    return await modal.present();
  }
  async seeWaiters() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
