import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router,
  ) { }

  ngOnInit() { }

  addWaiter() {
    this.router.navigateByUrl('add-waiter');
  }
  addHours() {
    this.router.navigateByUrl('add-hours');
  }
}