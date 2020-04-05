import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-add-points',
  templateUrl: './add-points.component.html',
  styleUrls: ['./add-points.component.scss'],
})
export class AddPointsComponent implements OnInit {
  public points: any = [
    { criteria: 'Speak English' },
    { criteria: 'Serve Wine' },
    { criteria: 'More than 6 months on the job' }
  ];
  public pointsPassed: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder,
  ) { }
  ngOnInit() {
  }
  getPoints() {
  }
  savePoints(): Observable<any> {
    console.log(this.points);
    this.pointsPassed.next(this.points) ;
    // return this.pointsPassed;
    this.dismiss();
    return;
  }
  dismiss() {
    this.modalController.dismiss();
  }
  onPointsChange() {
    console.log(this.points);
  }
}
