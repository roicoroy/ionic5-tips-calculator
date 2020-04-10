import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

import { SwipeTabDirective } from '../directives/swipe-tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: 'setup.page.html',
  styleUrls: ['setup.page.scss']
})
export class TabsPage {
  @ViewChild(SwipeTabDirective, { static: false }) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs', { static: false }) tabRef: IonTabs;

  constructor() { 
    
  }

  ionTabsDidChange($event) {
    console.log('[TabsPage] ionTabsDidChange, $event: ', $event);
    this.swipeTabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    console.log('[TabsPage] onTabChange, $event: ', $event);
    console.log(this.tabRef);
    this.tabRef.select($event);
  }
  waiterTab(){
    this.tabRef.select('waiters-setup');
  }
}
