import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-points',
  templateUrl: './add-points.component.html',
  styleUrls: ['./add-points.component.scss'],
})
export class AddPointsComponent implements OnInit {
  public form: any = [
    { criteria: 'Speak English', pountuation: 0.5 },
    { criteria: 'Serve Wine', pountuation: 0.5 },
    { criteria: 'More than 6 months on the job', pountuation: 0.5 }
  ];
  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getPoints();
  }

  getPoints() {
    console.log(this.form);
  }


  dismiss() {
    this.modalController.dismiss();
  }
}
