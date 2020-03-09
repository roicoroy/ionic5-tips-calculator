import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AddTipsComponent } from './add-tips/add-tips.component';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.page.html',
  styleUrls: ['./waiters.page.scss'],
})
export class WaitersPage implements OnInit {
  waiters = [];
  data = {
    name: 'Ricardo',
    points: 3.0
  };
  constructor(
    public alertController: AlertController,
    private router: Router,
    public modalController: ModalController,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.storageService.getItem();
  }
  ionViewWillEnter() {
    console.log('will enter');
  }
  addMockData() {
    const data = {
      name: 'Jose',
      points: 3.0,
      hours: 30
    };
    this.waiters.push(data);
    console.log('add waiter, open component', this.waiters);
  }
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
  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (inputs) => {
            console.log(inputs[0]);
            this.storageService.setItem();
          }
        }
      ]
    });
    await alert.present();
    console.log(alert);
  }

}
