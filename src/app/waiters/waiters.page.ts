import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AddTipsComponent } from './add-tips/add-tips.component';
import { StorageService } from '../services/storage.service';
import { Plugins } from '@capacitor/core';
import { from, Observable } from 'rxjs';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { Waiter, Points } from '../interfaces/intefaces';
import { AddPointsComponent } from './add-points/add-points.component';
const { Storage } = Plugins;
@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.page.html',
  styleUrls: ['./waiters.page.scss'],
})
export class WaitersPage implements OnInit {
  waiters;
  waitersForm: FormGroup;

  customAlertOptions: any = {
    header: "Choose the waiter's ponits",
    translucent: true
  };
  points: any;

  constructor(
    public alertController: AlertController,
    private router: Router,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private formBuilder: FormBuilder,
  ) {
    this.waitersForm = formBuilder.group({
      waiterList: this.formBuilder.array([
        this.initWaiters(),
      ]),
    });
    this.points = [
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
      // points: [''],
    });``
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
  submitForm() {
    if (this.waitersForm.valid) {
      console.log(this.waitersForm);
    }
  }
  ngOnInit() {
  }
  optionsFn(pontuation) {
    console.log(pontuation);
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
  async addPoints() {
    const modal = await this.modalController.create({
      component: AddPointsComponent
    });
    return await modal.present();
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
  // async addPoints() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Albums',

  //     //       inputs: [
  //     //   {
  //     //     type: 'checkbox',
  //     //     label: 'Waiter can provide exellent wine service',
  //     //     value: 0.5
  //     //   },
  //     //   {
  //     //     type: 'checkbox',
  //     //     label: 'Waiter is able to answer the phone and take online orders',
  //     //     value: 0.5
  //     //   },
  //     //   {
  //     //     type: 'checkbox',
  //     //     label: 'Staff has more than six months on the position',
  //     //     value: 0.5
  //     //   },
  //     // ],
  //     // buttons: [{
  //     //   text: 'Delete',
  //     //   role: 'destructive',
  //     //   icon: 'trash',
  //     //   handler: () => {
  //     //     console.log('Delete clicked');
  //     //   }
  //     // }, {
  //     //   text: 'Share',
  //     //   icon: 'share',
  //     //   handler: () => {
  //     //     console.log('Share clicked');
  //     //   }
  //     // }, {
  //     //   text: 'Play (open modal)',
  //     //   icon: 'arrow-dropright-circle',
  //     //   handler: () => {
  //     //     console.log('Play clicked');
  //     //   }
  //     // }, {
  //     //   text: 'Favorite',
  //     //   icon: 'heart',
  //     //   handler: () => {
  //     //     console.log('Favorite clicked');
  //     //   }
  //     // }, {
  //     //   text: 'Cancel',
  //     //   icon: 'close',
  //     //   role: 'cancel',
  //     //   handler: () => {
  //     //     console.log('Cancel clicked');
  //     //   }
  //     // }]
  //   });
  //   await actionSheet.present();
  // }
  // async addPoints() {
  //   const alert = await this.alertController.create({
  //     header: 'Waiters performance meter',
  //     inputs: [
  //       {
  //         type: 'checkbox',
  //         label: 'Waiter can provide exellent wine service',
  //         value: 0.5
  //       },
  //       {
  //         type: 'checkbox',
  //         label: 'Waiter is able to answer the phone and take online orders',
  //         value: 0.5
  //       },
  //       {
  //         type: 'checkbox',
  //         label: 'Staff has more than six months on the position',
  //         value: 0.5
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: (inputs) => {
  //           console.log(inputs);
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }
}
