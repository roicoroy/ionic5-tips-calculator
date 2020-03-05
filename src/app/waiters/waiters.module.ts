import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitersPageRoutingModule } from './waiters-routing.module';

import { WaitersPage } from './waiters.page';
import { AddTipsComponent } from './add-tips/add-tips.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitersPageRoutingModule
  ],
  entryComponents:[
    AddTipsComponent
  ],
  declarations: [
    WaitersPage,
    AddTipsComponent
  ]
})
export class WaitersPageModule {}
