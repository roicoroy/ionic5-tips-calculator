import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorSlidesPageRoutingModule } from './calculator-slides-routing.module';

import { CalculatorSlidesPage } from './calculator-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CalculatorSlidesPageRoutingModule
  ],
  declarations: [CalculatorSlidesPage]
})
export class CalculatorSlidesPageModule {}
