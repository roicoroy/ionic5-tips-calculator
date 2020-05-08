import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';
import { WaiterObjService } from '../waiter-obj.service';
import { WaiterObj, WaitersList } from 'src/app/interfaces/intefaces';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { timestamp } from 'rxjs/operators';
@Component({
  selector: 'app-add-waiter',
  templateUrl: './add-waiter.page.html',
  styleUrls: ['./add-waiter.page.scss'],
})
export class AddWaiterPage implements OnInit {
  waitersList: WaitersList;
  pointsList;
  waitersForm: FormGroup;

  constructor(
    private storage: Storage,
    private router: Router,
    private notifications: NotificationsService,
    private waiterObj: WaiterObjService,
    private formBuilder: FormBuilder,
  ) {
    this.waitersForm = formBuilder.group({
      waitersList: this.formBuilder.array([
        this.initWaiters(),
      ]),
    });
  }
  initWaiters(): FormGroup {
    return this.formBuilder.group({
      waiter: ['4'],
      points_awarded: [''],
      hours_worked: ['20']
    });
  }
  addNewWaitersField(): void {
    const control = this.waitersForm.controls.waitersList as FormArray;
    control.push(this.initWaiters());
  }
  removeWaitersField(i: number): void {
    const control = this.waitersForm.controls.waitersList as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    }
    else {
      // this.handleErrorAlert('You need at least one waiter..');
    }
  }
  get formData() {
    return this.waitersForm.get('waitersList') as FormArray;
  }
  waitersListArray = [];
  submitForm() {
    if (this.waitersForm.valid) {
      console.log(this.waitersForm.value);

      // let points_awardeds = this.waitersForm.value.waiters;
      // let waiters = this.waitersForm.value.waiters
      // // console.log(points_awardeds);

      // let myPoints_awardeds;
      // waiters.forEach(waiter => {
      //   console.log(waiter);

      //   console.log(waiter.points_awarded);
      //   // waiter.map(points => {
      //   //   console.log(points.points_awarded);
      //   //   // return myPoints_awardeds = points.points_awarded;
      //   // });
      // });


      // console.log(myPoints_awardeds);

      // // for (let points of points_awardeds) {
      // //   console.log(points.points_awarded);
      // //   return points.points_awarded;
      // // ;

      // //   console.log(response);
      // // });

      let myArray = this.waitersForm.value.waitersList;
      let myPoints_awarded;
      myArray.forEach(response => {
        console.log(response);

        response.points_awarded.forEach(element => {
          console.log(element);
          let myObj = {
            waiter: response.waiter,
            hours_worked: response.hours_worked,
            points_awardeds: element,
          }
          this.waitersListArray.push(myObj);
        });
      });


      console.log(this.waitersListArray);

      // let myObj = new FormData();
      // myObj.append('waitersList',  JSON.stringify());


      // this.waiterObj.postWaitersForm(myObj)
      //   .subscribe((postWaiterResponse) => {
      //     console.log(postWaiterResponse);
      //   });




      // this.storage.set('waitersList', JSON.stringify(this.waitersForm.value.waitersList))
      //   .then((response) => {
      //     console.log(response);
      //     if (response) {
      //       this.router.navigateByUrl('add-hours');
      //     }
      //   });
    }
  }
  ngOnInit() {
    this.getWaiterList();
    this.getPointsList();
  }
  getWaiterList() {
    this.waiterObj.getWaiterListFromServer().subscribe((waiterObjResponse: WaitersList) => {
      this.waitersList = waiterObjResponse;
      // console.log(this.waitersList);
    })
  }
  getPointsList() {
    this.waiterObj.getPointsListFromServer().subscribe((pointsObjResponse) => {
      this.pointsList = pointsObjResponse;
      // console.log(this.pointsList);
    })
  }
  addWaiter() {
    this.router.navigateByUrl('add-waiter');
  }
  addHours() {
    this.router.navigateByUrl('add-hours');
  }
  resetForm() {
    console.log('reset');
    if (this.waitersForm.valid) {
      this.waitersForm.reset();
    }
  }
}
