import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { throwError, Observable, from } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Storage } = Plugins;
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  summaryList;
  waitersList;
  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getItem();
  }
  async getItem(key: string = 'waitersList') {
    return await Storage.get({ key }).then((watiersListResponse: any) => {
      this.waitersList = JSON.parse(watiersListResponse.value);
      // myList.forEach(element => {
      //   this.waitersList = element;
      //   console.log(element);
      // });
    });
  }
  back() {
    this.router.navigateByUrl('calculator');
  }
}
