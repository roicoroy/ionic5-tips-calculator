import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { StorageService } from 'src/app/services/storage.service';
const { Storage } = Plugins;
@Component({
  selector: 'add-tips',
  templateUrl: './add-tips.component.html',
  styleUrls: ['./add-tips.component.scss'],
})
export class AddTipsComponent implements OnInit, OnDestroy  {
  waiter = 'waiter';
  tipsForm: FormGroup;
  tipsMadeToday;
  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    private storage: StorageService
  ) {
    this.tipsForm = formBuilder.group({
      tipsToday: [''],
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.tipsForm.valid) {
      Storage.set({
        key: 'tipsToday',
        value: JSON.stringify(this.tipsForm.value.tipsToday),
      }).then(() => {
        this.modalController.dismiss();
        this.tipsForm.reset();
      });
    }
  }
  dismiss() {
    this.modalController.dismiss();
  }
  add() {
    window.localStorage.setItem('waiters', JSON.stringify({ name: 'Jose', points: 3.0, hours: 30 }));
  }
  getItem() {
    window.localStorage.getItem('waiters');
  }
  ngOnDestroy() {
   this.storage.getTipsFromPromise();
  }
}
