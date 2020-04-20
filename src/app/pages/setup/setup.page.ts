import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides, AlertController, PickerController, ModalController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DatasService } from 'src/app/services/data.service';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  @ViewChild('slides', { static: false }) slides: IonSlides;
  page = "0";
  slideOpts = {
    slidesPerView: 1,
    // loop: false,
    // noSwiping: true,
    // noSwipingClass: 'swiper-no-swiping',
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      dynamicMainBullets: 3
    }
  };
  waitersForm: FormGroup;
  waitersNameForm: FormGroup;
  pointsDataInit;
  puntuactions = [];
  waitersName: any = [];
  constructor(
    private storage: Storage,
    private router: Router,
    public alertController: AlertController,
    private pickerController: PickerController,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private dataService: DatasService
  ) {
    this.waitersForm = formBuilder.group({
      waiters: this.formBuilder.array([
        this.initWaiters(),
      ]),
    });
    this.dataService.getPointsFromServer()
      .subscribe((points) => {
        this.pointsDataInit = points;
      });
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      first_name: ['ric'],
      last_name: ['bento'],
      points: [''],
    });
  }
  addNewWaitersField(): void {
    const control = this.waitersForm.controls.waiters as FormArray;
    control.push(this.initWaiters());
  }
  removeWaitersField(i: number): void {
    const control = this.waitersForm.controls.waiters as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    }
    else {
      this.handleErrorAlert('You need at least one waiter..');
    }
  }
  get formData() {
    return this.waitersForm.get('waiters') as FormArray;
  }
  submitWaiters() {
    if (this.waitersForm.valid) {
      console.log(this.waitersForm.value.waiters);
      // this.puntuactions = [];
      // this.waitersName = [];
      // let waiters = this.waitersForm.value.waiterList;
      // waiters.map((waiter) => {
      //   let pointsTotal = waiter.points.reduce(function (prev, cur) {
      //     return prev + cur.points;
      //   }, 0);
      //   // this.waitersName.push({
      //   //   id: index,
      //   //   first_name: waiter.first_name,
      //   //   last_name: waiter.last_name,
      //   //   points: pointsTotal,
      //   // });
      //   // let formData = new FormData();
      //   // formData.append('first_name', this.waitersName.first_name);
      //   // formData.append('last_name', this.waitersName.last_name);
      //   // formData.append('points', this.waitersName.points);

      //   let myPostData: any;
      //   this.waitersName.forEach(element => {
      //     myPostData = {
      //       first_name: element.first_name,
      //       last_name: element.last_name,
      //       points: pointsTotal,
      //     }
      //     console.log(myPostData);
      //     this.dataService.postWaitersForm(myPostData)
      //       .subscribe((response) => {
      //         console.log(response);
      //         this.waitersForm.reset();
      //       });
      //   });
      // });
    }
  }
  async minWaiterError(message) {
    const alert = await this.alertController.create({
      header: message,
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
  // errorHandler(error) {
  //   this.handleErrorAlert(error).then((error) => this.handleErrorAlert(error));
  // }
  ngOnInit() {
  }
  ionViewWillEnter() {
  }
  selectedTab(index) {
    this.slides.slideTo(index);
  }
  async moveButton() {
    let index = await this.slides.getActiveIndex();
    this.page = index.toString();
  }
  // serveUpload() {
  //   this.router.navigateByUrl('serve-upload');
  // }
}
