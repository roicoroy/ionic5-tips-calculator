import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'add-tips',
  templateUrl: './add-tips.component.html',
  styleUrls: ['./add-tips.component.scss'],
})
export class AddTipsComponent implements OnInit {
  const = 'waiter';

  constructor(
    private modalController: ModalController,
  ) {
  }

  ngOnInit() { }
  dismiss() {
    this.modalController.dismiss();
  }
  add() {
    window.localStorage.setItem('waiters', JSON.stringify({ name: 'Jose', points: 3.0, hours: 30 }));
    // console.log(x);
  }
  getItem() {
    window.localStorage.getItem('waiters')
  }
}
