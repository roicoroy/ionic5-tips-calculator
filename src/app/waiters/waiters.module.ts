import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WaitersPageRoutingModule } from './waiters-routing.module';
import { WaitersPage } from './waiters.page';
import { AddTipsComponent } from './add-tips/add-tips.component';
import { AddPointsComponent } from './add-points/add-points.component';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitersPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  entryComponents: [
    AddTipsComponent,
    AddPointsComponent
  ],
  declarations: [
    WaitersPage,
    AddTipsComponent,
    AddPointsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class WaitersPageModule { }
