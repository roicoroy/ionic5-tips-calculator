import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { StorageService } from 'src/app/services/storage.service';
import { DatasService } from 'src/app/services/data.service';
const { Storage } = Plugins;
@Component({
  selector: 'add-tips',
  templateUrl: './add-tips.component.html',
  styleUrls: ['./add-tips.component.scss'],
})
export class AddTipsComponent implements OnInit, OnDestroy {
  waiter = 'waiter';
  tipsForm: FormGroup;
  tipsMadeToday;
  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    private storage: StorageService,
    private dataService: DatasService
  ) {
    this.tipsForm = formBuilder.group({
      tipsToday: [''],
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.tipsForm.valid) {
      this.dataService.postTipsToday(this.tipsForm.value.tipsToday)
        .subscribe(
          (responseData: any) => {
            if (responseData) {
              console.log(responseData);
              this.modalController.dismiss().then(() => {
                this.tipsForm.reset();
              });
            }
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }
  dismiss() {
    this.modalController.dismiss();
  }
  ngOnDestroy() {
  }
}
