import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorSlidesPageRoutingModule } from './calculator-slides-routing.module';

import { CalculatorSlidesPage } from './calculator-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorSlidesPageRoutingModule
  ],
  declarations: [CalculatorSlidesPage]
})
export class CalculatorSlidesPageModule {}
