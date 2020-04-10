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
  slideOpts = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      dynamicMainBullets: 3
    }
  };
  pointsData;
  showSkip = true;
  calculatorForm: FormGroup;
  dateForm: FormGroup;
  puntuactionForm: FormGroup;
  waitersForm: FormGroup;
  @ViewChild('slides', { static: false }) slides: IonSlides;
  page = "0";
  customPickerOptions: any;
  date;
  appDateForm;
  fromDate: boolean = false;
  waitersDataInit;
  pointsDataInit;
  hoursDataInit;
  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private dataService: DatasService
  ) {
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

  submitDate() {
    if (this.date) {
      this.dataService.postDate(this.date)
        .subscribe(
          (responseDate) => {
            if (responseDate) {
              this.date = '';
              this.waitersForm.reset();
              this.fromDate = true;
              this.selectedSlide(1);
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
      this.dataService.postWaitersForm(this.waitersForm.value.waiters)
      // .subscribe((response)=>{
      //   console.log(response);
      //   this.waitersForm.reset();
      // });
    }
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      points: [''],
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
  selectedSlide(index) {
    this.slides.slideTo(index);
  }
  async moveButton() {
    let index = await this.slides.getActiveIndex();
    this.page = index.toString();
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
    this.getPointsFromServer();
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
    this.menu.enable(true);
  }
  getPointsFromServer() {
    this.dataService.getPoints().subscribe((pointsData) => {
      this.pointsData = pointsData;
    })
  }
}
