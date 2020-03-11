import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'add-tips',
  templateUrl: './add-tips.component.html',
  styleUrls: ['./add-tips.component.scss'],
})
export class AddTipsComponent implements OnInit {
  waiter = 'waiter';
  waiterForm: FormGroup;
  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder,
  ) {
    this.waiterForm = formBuilder.group({
      // name: ['', Validators.compose([Validators.required])],
      waiter: this.formBuilder.array([
        this.initIngredientsFields(),
      ]),
    });
  }
  initIngredientsFields(): FormGroup {
    return this.formBuilder.group({
      firstName: ['',],
      lastName: ['',],
    });
  }
  addNewInputField(): void {
    const control = this.waiterForm.controls.waiter as FormArray;
    control.push(this.initIngredientsFields());
  }
  removeInputField(i: number): void {
    const control = this.waiterForm.controls.waiter as FormArray;
    if (control.length > 1) {
      control.removeAt(i);
    }
  }
  manage(val: any): void {
    console.dir(val);
  }
  get formData() {
    return this.waiterForm.get('waiter') as FormArray;
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.waiterForm.valid) {
      Storage.set({
        key: 'waiters',
        value: JSON.stringify(this.waiterForm.value.waiter)
      }).then(() => {
        this.modalController.dismiss();
        this.waiterForm.reset();
      });
    }
  }
  dismiss() {
    this.modalController.dismiss();
  }
  add() {
    window.localStorage.setItem('waiters', JSON.stringify({ name: 'Jose', points: 3.0, hours: 30 }));
    // console.log(x);
  }
  getItem() {
    window.localStorage.getItem('waiters');
  }
}
