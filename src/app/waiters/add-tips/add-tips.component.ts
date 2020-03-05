import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'add-tips',
  templateUrl: './add-tips.component.html',
  styleUrls: ['./add-tips.component.scss'],
})
export class AddTipsComponent implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() { }
  dismiss() {
    this.modalController.dismiss();
  }
}
