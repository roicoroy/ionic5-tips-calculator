import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorSlidesPageRoutingModule } from './calculator-slides-routing.module';

import { CalculatorSlidesPage } from './calculator-slides.page';
import { CustomComponentsModule } from '../components/custom-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CalculatorSlidesPageRoutingModule,
    ReactiveFormsModule,
    CustomComponentsModule
  ],
  declarations: [CalculatorSlidesPage]
})
export class CalculatorSlidesPageModule {}
