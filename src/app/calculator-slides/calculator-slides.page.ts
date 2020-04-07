import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-calculator-slides',
  templateUrl: './calculator-slides.page.html',
  styleUrls: ['./calculator-slides.page.scss'],
})
export class CalculatorSlidesPage implements OnInit {
  showSkip = true;
  calculatorForm: FormGroup;
  puntuactionForm: FormGroup;
  waitersForm: FormGroup;
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
  ) {
    this.calculatorForm = formBuilder.group({
      date: [''],
      time_from: [''],
      time_to: [''],
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
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      first_name: [''],
      Last_name: [''],
    });
  }
  initPountuaction(): FormGroup {
    return this.formBuilder.group({
      criteria: [''],
      points: [''],
    });
  }
  addNewWaiters(): void {
    const control = this.calculatorForm.controls.waiters as FormArray;
    control.push(this.initWaiters());
  }
  removeWaiters(i: number): void {
    const control = this.calculatorForm.controls.waiters as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    }
    else {
      this.minError();
    }
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
  get formWaitersData() {
    return this.calculatorForm.get('waiters') as FormArray;
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
  ngOnInit() {
  }
  startApp() {
    this.router.navigateByUrl('calculator', { replaceUrl: true })
      .then(
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
