import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Plugins } from '@capacitor/core';
import { from, Observable } from 'rxjs';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { Waiter, Points } from '../interfaces/intefaces';
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
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  calculatorForm: FormGroup;
  name = new FormControl('');
  points = new FormControl('');
  hours = new FormControl('');
  waiter: any = [];
  test;
  customActionSheetOptions: any = {
    header: 'Select the Criteria',
    subHeader: 'For the waiter points'
  };
  customAlertOptions: any = {
    header: 'Choose the waiter\'s ponits',
    translucent: true
  };
  constructor(
    public alertController: AlertController,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private pickerController: PickerController,
    public formBuilder: FormBuilder,
  ) {
    this.calculatorForm = formBuilder.group({
      waiterList: this.formBuilder.array([
        this.initWaiters(),
      ]),
    });
  }
  ngOnInit() {
  }
  submitForm() {
    // this.calculatorForm.value.forEach(element => {
    //   console.log(element);
    // });
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      points: [''],
      hours: [''],
    });
  }
  addNewWaiterField(): void {
    const control = this.calculatorForm.controls.waiterList as FormArray;
    control.push(this.initWaiters());
  }
  removeWaiterField(i: number): void {
    const control = this.calculatorForm.controls.waiterList as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    } else {
      this.minWaiterError();
    }
  }
  get formData() {
    return this.calculatorForm.get('waiterList') as FormArray;
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
              const myValue = value;
              console.log(myValue);
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
  async minWaiterError() {
    const alert = await this.alertController.create({
      header: 'You need at least one waiter.',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
