import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  waiters: any = [];
  constructor(
    private router: Router
  ) {
    this.waiters = [
      {
        name: 'Ricardo',
        points: 2.5
      },
      {
        name: 'Jose',
        points: 0.5
      },
      {
        name: 'Maria',
        points: 1.5
      }
    ];
  }

  ngOnInit() {
  }
  calculateEquation() {
    console.log('Calculated!');
  }
  back() {
    this.router.navigateByUrl('waiters');
  }
}
