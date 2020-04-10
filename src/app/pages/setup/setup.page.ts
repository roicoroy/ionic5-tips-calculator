import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  @ViewChild('slides', { static: false }) slides: IonSlides;
  page = "0";
  constructor(
    private storage: Storage,
    private router: Router
  ) { }
  ngOnInit() {
  }
  ionViewWillEnter() {
  }
  selectedTab(index) {
    this.slides.slideTo(index);
  }
  async moveButton() {
    let index = await this.slides.getActiveIndex();
    this.page = index.toString();
  }
  // serveUpload() {
  //   this.router.navigateByUrl('serve-upload');
  // }
}
