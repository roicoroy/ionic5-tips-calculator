import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
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
  waiters: any = [];
  test;
  form;
  waiter: any = {};
  resultHours;
  ingredients = [
    { name: 'Jalapenos', isChecked: false },
    { name: 'Pepperoni', isChecked: true },
    { name: 'Sausage', isChecked: false },
    { name: 'Mushrooms', isChecked: false },
  ];
  myGroup;
  constructor(
    private router: Router,
    public alertController: AlertController,
    private pickerController: PickerController,
    private formBuilder: FormBuilder,
  ) {
    this.myGroup = new FormGroup({
      hours: new FormControl()
   });
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   points: new FormControl(''),
    //   hours: new FormControl(''),
    // });
    // this.waiters.push(
    //   {
    //     name: 'Ricardo',
    //     points: 2.5,
    //     hours: 30,
    //   },
    //   {
    //     name: 'Jose',
    //     points: 0.5,
    //     hours: 27,
    //   },
    //   {
    //     name: 'Maria',
    //     points: 1.5,
    //     hours: 35,
    //   }
    // );
  }
  ngOnInit() {
  }
  submitForm() {
    console.log(this.waiter);
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
              // this.resultHours = value.hours.value;
              // this.initHours(value.hours);
              this.resultHours = [
                {
                  hours: value.hours,
                  minutes: value.minutes,
                }
              ];
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
}
