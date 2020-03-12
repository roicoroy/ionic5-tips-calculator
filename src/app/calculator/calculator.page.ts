import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  waiters: any = [];
  constructor(
    private router: Router,
    private selector: WheelSelector,
    public alertController: AlertController
  ) {
    this.waiters = [
      {
        name: 'Ricardo',
        points: 2.5
      },
      {
        name: 'Jose',
        points: 0.5
      },
      {
        name: 'Maria',
        points: 1.5
      }
    ];
  }
  ngOnInit() {
  }
  async addHours() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          type: 'checkbox',
          label: '1',
          value: 1
        },
        {
          type: 'checkbox',
          label: '2',
          value: 2
        },
        {
          type: 'checkbox',
          label: '3',
          value: 3
        },
        {
          type: 'checkbox',
          label: '4',
          value: 4
        },
        {
          type: 'checkbox',
          label: '5',
          value: 5
        },
        {
          type: 'checkbox',
          label: '6',
          value: 6
        },
        {
          type: 'checkbox',
          label: '7',
          value: 7
        },
        {
          type: 'checkbox',
          label: '8',
          value: 8
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
        },
        {
          text: 'Ok',
          handler: (inputs) => {
            console.log('Confirm Ok', inputs);
          }
        }
      ]
    });

    await alert.present();
  }
  calculateEquation() {
    console.log('Calculated!');
  }
  back() {
    this.router.navigateByUrl('waiters');
  }
}
