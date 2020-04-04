import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  // Data passed in by componentProps
  @Input() tipsToday: string;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {  }
  ngOnInit() { 
    this.tipsToday = this.navParams.get('tipsToday');
    console.log(this.tipsToday);
  }
  dismiss() {
    this.modalController.dismiss();
  }
}
