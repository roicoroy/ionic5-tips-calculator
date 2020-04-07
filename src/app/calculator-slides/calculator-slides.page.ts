import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DatasService } from '../services/data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-calculator-slides',
  templateUrl: './calculator-slides.page.html',
  styleUrls: ['./calculator-slides.page.scss'],
})
export class CalculatorSlidesPage implements OnInit {
  showSkip = true;
  calculatorForm: FormGroup;
  dateForm: FormGroup;
  puntuactionForm: FormGroup;
  waitersForm: FormGroup;
  @ViewChild('slides', { static: true }) slides: IonSlides;
  customPickerOptions: any;
  date;
  appDateForm;
  fromDate: boolean = false;
  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private dataService: DatasService
  ) {
    this.calculatorForm = formBuilder.group({
      date: [''],
      time_from: [''],
      time_to: [''],
    });
    this.dateForm = formBuilder.group({
      date: [''],
    });
    this.waitersForm = formBuilder.group({
      waiters: this.formBuilder.array([
        this.initWaiters(),
      ]),
    });
    this.puntuactionForm = formBuilder.group({
      puntuaction: this.formBuilder.array([
        this.initPountuaction(),
      ]),
    });
    this.customPickerOptions = {
      buttons: [
        {
          text: 'Save',
          handler: (value) => {
            let Date: string = `${value.year.text} ${value.month.text} ${value.day.text}`;
            let Data = moment(Date).format("YYYY-MM-DD");
            this.date = Data;
          }
        },
      ]
    }
  }
  nextSlide(){
    console.log('nextSlide');
  }
  submitDate() {
    if (this.date) {
      this.dataService.postDate(this.date)
        .subscribe(
          (responseDate) => {
            if (responseDate) {
              this.date = '';
              this.waitersForm.reset();
              this.fromDate = true;
            }
          },
          (error) => {
            console.error(error);
          }
        );
    }

  }
  submitWaiters() {
    if (this.waitersForm.valid) {
      this.waitersForm.reset();
    }
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      first_name: [''],
      last_name: [''],
    });
  }
  addNewWaiters(): void {
    const control = this.waitersForm.controls.waiters as FormArray;
    control.push(this.initWaiters());
  }
  removeWaiters(i: number): void {
    const control = this.waitersForm.controls.waiters as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    }
    else {
      this.minError();
    }
  }
  get formWaitersData() {
    return this.waitersForm.get('waiters') as FormArray;
  }
  initPountuaction(): FormGroup {
    return this.formBuilder.group({
      criteria: [''],
      points: [''],
    });
  }
  addNewPountuaction(): void {
    const control = this.calculatorForm.controls.puntuaction as FormArray;
    control.push(this.initPountuaction());
  }
  removePountuaction(i: number): void {
    const control = this.calculatorForm.controls.puntuaction as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    }
    else {
      this.minError();
    }
  }
  get formPuntuactionData() {
    return this.calculatorForm.get('puntuaction') as FormArray;
  }
  async minError() {
    const alert = await this.alertController.create({
      header: 'You need at least one waiter..',
      buttons: ['OK']
    });
    await alert.present();
  }
  async alertMessage(message) {
    const alert = await this.alertController.create({
      header: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  ngOnInit() {
  }
  startApp() {
    this.router.navigateByUrl('calculator', { replaceUrl: true }).then(
      () => this.storage.set('app_complete_setup', true),
      (error) => console.log(error),
    );
  }
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
  ionViewWillEnter() {
    this.storage.get('app_complete_setup').then(res => {
      if (res === true) {
        this.router.navigateByUrl('calculator', { replaceUrl: true });
      }
    });
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
