

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { Waiter } from './interfaces';
import { DatasService } from 'src/app/services/data.service';
@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.page.html',
  styleUrls: ['./waiters.page.scss'],
})
export class WaitersPage implements OnInit {

  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };


  waitersForm: FormGroup;
  pointsDataInit: any;
  waitersArray = [];
  constructor(
    private router: Router,
    public alertController: AlertController,
    private pickerController: PickerController,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private dataService: DatasService
  ) {
    this.waitersForm = formBuilder.group({
      waiterList: this.formBuilder.array([this.initWaiters()]),
    });
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
  }
  ngOnInit() {
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      points: [''],
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
    } else {
      this.minWaiterError();
    }
  }
  get formData() {
    return this.waitersForm.get('waiterList') as FormArray;
  }
  submitWaiters() {
    if (this.waitersForm.value.waiterList.length >= 1) {
      this.waitersArray = [];
      const waitersList = this.waitersForm.value.waiterList;
      waitersList.forEach(
        waitersList => {
          if (waitersList.points) {
            const concatArray = [...waitersList.points];
            // console.log(concatArray);
            // tslint:disable-next-line: only-arrow-functions
            const pointsTotal = concatArray.reduce(function (prev, cur) {
              return prev + cur;
            }, 0);
            // console.log(pointsTotal);
            const myWaiter: any = [
              {
                name: waitersList.name,
                points: pointsTotal
              }
            ];
            this.waitersArray.push(myWaiter);
            console.log(myWaiter);

            let formData = new FormData()
            formData.append('waiterList', myWaiter);


            // let myData: any;
            // postData.forEach(element => {
            //     console.log(element);
            //     myData = {
            //         first_name: element.first_name,
            //         last_name: element.last_name,
            //     };
            //     console.log(myData);
            // });


            this.dataService.postWaitersForm(formData).subscribe((response) => console.log(response));
          }
        },
        error => this.errorHandler(error),
      );
      console.log(this.waitersArray);
      // this.router.navigateByUrl('summary');
    }
  }
  clearForm() {
    if (this.waitersForm.valid) {
      this.waitersForm.reset();
    }
  }
  // Erro Handling
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
  goAddHoursWaiters() {

  }
}
