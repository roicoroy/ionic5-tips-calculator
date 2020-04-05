import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Router } from '@angular/router';
import { AddTipsComponent } from './add-tips/add-tips.component';
import { StorageService } from '../services/storage.service';
import { Plugins } from '@capacitor/core';
import { from, Observable } from 'rxjs';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { Waiter, Points } from '../interfaces/intefaces';
import { AddPointsComponent } from './add-points/add-points.component';
const { Storage } = Plugins;

export interface PickerColumn {
  name: string;
  align?: string;
  selectedIndex?: number;
  prevSelected?: number;
  prefix?: string;
  suffix?: string;
  options: PickerColumnOption[];
  cssClass?: string | string[];
  columnWidth?: string;
  prefixWidth?: string;
  suffixWidth?: string;
  optionsWidth?: string;
  refresh?: () => void;
}

export interface PickerColumnOption {
  text?: string;
  value?: any;
  disabled?: boolean;
  duration?: number;
  transform?: string;
  selected?: boolean;
}

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.page.html',
  styleUrls: ['./waiters.page.scss'],
})
export class WaitersPage implements OnInit {
  waiters = [];
  waitersForm: FormGroup;
  customAlertOptions: any = {
    header: 'Choose the waiter\'s ponits',
    translucent: true
  };
  pointsDataInit: any;
  pointsArray: any;
  hours: any;
  myHours;
  resultPoints;
  resultHours;
  customActionSheetOptions: any = {
    header: 'Select the Criteria',
    subHeader: 'For the waiter points'
  };
  pointsChangeVar;
  myFormData;
  constructor(
    public alertController: AlertController,
    private router: Router,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private pickerController: PickerController,
    public formBuilder: FormBuilder,
  ) {
    this.waitersForm = formBuilder.group({
      waiterList: this.formBuilder.array([
        this.initWaiters(),
      ]),
    });
    this.pointsDataInit = [
      {
        criteria: 'Speak good English',
        pontuation: 0.5
      },
      {
        criteria: 'Serve Wine',
        pontuation: 0.5
      }
    ];
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      points: [''],
      hours: [''],
    });
  }
  async addHours() {
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            if (value) {
              this.resultHours = value.hours.value;
              // this.initHours(value.hours);
              // this.hours = [
              //   {
              //     hours: value.hours,
              //     minutes: value.minutes,
              //   }
              // ];
              console.log(this.resultHours);
              return;
            }
          }
        }
      ],
      columns: [
        {
          name: 'hours',
          options: [
            {
              text: '1',
              value: 1
            },
            {
              text: '2',
              value: 2
            },
            {
              text: '3',
              value: 3
            },
          ]
        },
        {
          name: 'minutes',
          options: [
            {
              text: '00',
              value: 0
            },
            {
              text: '25',
              value: 25
            },
            {
              text: '50',
              value: 50
            },
            {
              text: '75',
              value: 75
            },
          ]
        },
      ]
    });
    await picker.present();
  }
  makeHours() {
  }
  makePoints() {
  }
  submitForm() {
    if (this.waitersForm.valid) {
      // console.log(this.waitersForm.value);
      this.buildForm();
    }
  }
  buildForm() {
    this.resultPoints = 2.0;
    let fixedWaiters = [];
    // const fixedWaiters = this.waitersForm.value.waiterList;
    this.waitersForm.value.waiterList.forEach(element => {
      // console.log(element);
      fixedWaiters = element;
    });
    // fixedWaiters.push({
    //   // name: element.name,
    //   // hours: this.resultHours,
    //   // points: element.points
    // });
    //  = this.waitersForm.value.waiterList;
    console.log(fixedWaiters);
    Storage.set({
      key: 'fixedWaiters',
      value: JSON.stringify(fixedWaiters),
    });
  }
  ngOnInit() {
  }
  addNewWaiterField(): void {
    const control = this.waitersForm.controls.waiterList as FormArray;
    control.push(this.initWaiters());
  }
  removeWaiterField(i: number): void {
    const control = this.waitersForm.controls.waiterList as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    } else {
      this.minWaiterError();
    }
  }
  get formData() {
    return this.waitersForm.get('waiterList') as FormArray;
  }
  calculator() {
    this.router.navigateByUrl('calculator');
  }
  // ionViewWillEnter() {
  //   this.getDataObservable().subscribe(responseWaiters => {
  //     this.waiters = responseWaiters;
  //     console.log(this.waiters);
  //   });
  // }
  // async startOver(): Promise<any> {
  //   return Storage.remove({ key: 'waiters' });
  // }
  // getObject(): Promise<any> {
  //   return Storage.get({ key: 'waiters' }).then((waiter: any) => {
  //     const myData = JSON.parse(waiter.value);
  //     console.log(myData);
  //     return myData;
  //   });
  // }
  // getDataObservable(): Observable<any> {
  //   return from(this.getObject());
  // }
  // calculateTipsPage() {
  //   console.log('calculate tips');
  // }

  async minWaiterError() {
    const alert = await this.alertController.create({
      header: 'You need at least one waiter.',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async addPoints() {
    const alert = await this.alertController.create({
      header: 'Waiters performance meter',
      inputs: [
        {
          type: 'checkbox',
          label: 'Waiter can provide exellent wine service',
          value: 0.5
        },
        {
          type: 'checkbox',
          label: 'Waiter is able to answer the phone and take online orders',
          value: 0.5
        },
        {
          type: 'checkbox',
          label: 'Staff has more than six months on the position',
          value: 0.5
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
            console.log(inputs);
          }
        }
      ]
    });
    await alert.present();
  }
}



