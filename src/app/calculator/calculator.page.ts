import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
export interface Waiter {
  name?: string,
  points?: number,
  hours?: number
}
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  waitersForm: FormGroup;
  waiters: Waiter;
  waitersPoints;
  waitersArray: any = [];
  waiter: any = '';
  resultHours;
  waitersDataInit;
  pointsDataInit;
  hoursDataInit;

  constructor(
    private router: Router,
    public alertController: AlertController,
    private pickerController: PickerController,
    private formBuilder: FormBuilder,
    private storage: StorageService
  ) {
    this.waitersForm = formBuilder.group({
      waiterList: this.formBuilder.array([
        this.initWaiters(),
      ]),
    });
    this.waitersDataInit = [
      {
        name: 'Jose',
        points: 1.5,
        hours: 29
      },
      {
        name: 'Ricardo',
        points: 3,
        hours: 37
      },
      {
        name: 'Neuza',
        points: 0.5,
        hours: 14.5
      }
    ]
    this.pointsDataInit = [
      {
        id: 1,
        criteria: 'Speak good English',
        points: 0.5
      },
      {
        id: 2,
        criteria: 'Serve Wine',
        points: 0.5
      },
      {
        id: 3,
        criteria: 'Answer phone',
        points: 0.5
      }
    ];
    this.hoursDataInit = [
      {
        id: 1,
        time: 1
      },
      {
        id: 2,
        time: 2
      },
      {
        id: 3,
        time: 3
      },
      {
        id: 3,
        time: 3
      },
      {
        id: 4,
        time: 4
      },
      {
        id: 5,
        time: 5
      },
      {
        id: 6,
        time: 6
      },
    ];
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      points: [''],
      hours: [''],
    });
  }
  addNewWaiterField(): void {
    const control = this.waitersForm.controls.waiterList as FormArray;
    control.push(this.initWaiters());
  }
  removeWaiterField(i: number): void {
    const control = this.waitersForm.controls.waiterList as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    }
    else {
      this.minWaiterError();
    }
  }
  get formData() {
    return this.waitersForm.get('waiterList') as FormArray;
  }
  ngOnInit() {
  }
  buidlFormData() {

  }
  buildWaitersArray() {
    this.waitersArray = [];
    let waitersList = this.waitersForm.value.waiterList;
    waitersList.forEach(
      waitersList => {
        if (waitersList.points) {
          let pointsTotal = waitersList.points.reduce(function (prev, cur) {
            return prev + cur.points;
          }, 0);
          let myWaiter: Waiter = {
            name: waitersList.name,
            points: pointsTotal,
            hours: waitersList.hours.time,
          }
          this.waitersArray.push(myWaiter);
          this.storage.setItem('waitersList', this.waitersArray).then(() => {
            this.router.navigateByUrl('summary');
          });
        }
        if (!waitersList.name) {
          this.errorHandler(`Waiter doen't name`);
        }
        if (!waitersList.hours) {
          this.errorHandler(`Waiter doen't hours`);
        }
        if (!waitersList.points) {
          this.errorHandler(`Waiter doen't ponits`);
        }
        else {

        }
      },
      error => this.errorHandler(error),
    );
  }
  calculate() {
    if (this.waitersForm.value.waiterList.length >= 1) {
      this.buildWaitersArray();
    }
  }
  clear() {
    if (this.waitersForm.valid) {
      this.waitersForm.reset();
      this.waitersArray = '';
      Storage.clear();
    }
  }
  async minWaiterError() {
    const alert = await this.alertController.create({
      header: 'You need at least one waiter..',
      buttons: ['OK']
    });
    await alert.present();
  }
  async handleErrorAlert(message) {
    const alert = await this.alertController.create({
      header: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  errorHandler(error) { 
    this.handleErrorAlert(error);
  }
}
