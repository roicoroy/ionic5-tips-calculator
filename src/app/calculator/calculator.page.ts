import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
  time;
  calculateForm: FormGroup;
  form;
  constructor(
    private router: Router,
    public alertController: AlertController,
    private pickerController: PickerController,
    private formBuilder: FormBuilder,
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


    this.calculateForm = formBuilder.group({
      total_tips: ['', Validators.compose([Validators.required])],
      calculate: this.formBuilder.array([
        this.waiters.forEach(responseWaiter => {
          console.log(responseWaiter);
          this.form = this.formBuilder.group({
            name: [responseWaiter.name],
            points: [responseWaiter.points],
          });
          console.log(this.form);
          return;
        }),
      ]),
    });
  }
  initCalculateForm(): FormGroup {
    return this.waiters.forEach(responseWaiter => {
      console.log(responseWaiter);
      this.form = this.formBuilder.group({
        name: [responseWaiter.name],
        points: [responseWaiter.points],
      });
      console.log(this.form);
      return this.form;
    });
    // console.log(this.waiters);
    // return;
    // return this.formBuilder.group({
    //   name: [''],
    //   points: [''],
    // });
  }
  addNewField(): void {
    const control = this.calculateForm.controls.waiterList as FormArray;
    control.push(this.initCalculateForm());
  }
  removeField(i: number): void {
    const control = this.calculateForm.controls.waiterList as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    } else {
      this.minWaiterError();
    }
  }
  async minWaiterError() {
    const alert = await this.alertController.create({
      message: 'At lest one field.',
      buttons: ['OK']
    });
    await alert.present();
  }
  get formData() {
    return this.calculateForm.get('calculate') as FormArray;
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
              this.time = [
                {
                  hours: value.hours,
                  minutes: value.minutes,
                }
              ];
              console.log(this.time);
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
  ngOnInit() {
  }
  calculateEquation() {
    console.log('Calculated!');
  }
  submitForm() {

  }
  back() {
    this.router.navigateByUrl('waiters');
  }
}
