import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, reduce, scan, startWith, tap } from 'rxjs/operators';
import { SumPipe } from './sum.pipe';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  waiters = [
    {
      name: "Ricardo",
      points: 1.5,
      hours: 14.50
    },
    {
      name: "Joe",
      points: 2.5,
      hours: 24.25
    },
    {
      name: "Sarah",
      points: 1.75,
      hours: 20
    },
  ];
  totalA;
  totalB;
  tipsEach;
  waitersArray: any = [];
  tipsMade;
  TipsMadeControl = new FormControl();
  history$: Observable<any[]>;
  newArr = [];
  @ViewChild('userInput') userInputViewChild;
  userInputElement: HTMLInputElement;
  constructor() {
     
    this.TipsMadeControl.valueChanges.pipe(
      debounceTime(500),
      tap(t => {
        this.totalB = t / this.totalA;
      }),
    ).subscribe(res=> this.history$ = res);
  }
  ionViewDidEnter() {
  }
  ngOnInit() {

    this.waiters.forEach(res => {
      let data  = {
        name: res.name,
        points: res.points,
        hours: res.hours,
        totalA: res.points + res.hours
      }
      this.waitersArray.push(data);
    });
    this.waitersArray.forEach(element => {
      let arr = {
        totalA: element.totalA,
      };
      this.newArr.push(arr);
    });
    this.totalASum(this.newArr);
  }
  totalASum(el) {
    this.totalA = el.reduce((accumulator, current) => accumulator + current.totalA, 0);
  }
}
