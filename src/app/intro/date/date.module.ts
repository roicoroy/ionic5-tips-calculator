import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatePageRoutingModule } from './date-routing.module';

import { DatePage } from './date.page';
import { CustomComponentsModule } from 'src/app/components/custom-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatePageRoutingModule,
    ReactiveFormsModule,
    CustomComponentsModule
  ],
  declarations: [DatePage]
})
export class DatePageModule {}
