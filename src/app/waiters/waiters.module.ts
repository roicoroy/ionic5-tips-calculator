import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WaitersPageRoutingModule } from './waiters-routing.module';
import { WaitersPage } from './waiters.page';
import { AddTipsComponent } from './add-tips/add-tips.component';
import { AddPointsComponent } from './add-points/add-points.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitersPageRoutingModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddTipsComponent,
    AddPointsComponent
  ],
  declarations: [
    WaitersPage,
    AddTipsComponent,
    AddPointsComponent
  ]
})
export class WaitersPageModule { }
