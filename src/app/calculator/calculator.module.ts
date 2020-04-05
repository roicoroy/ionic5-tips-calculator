import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';
import { CustomComponentsModule } from '../components/custom-components.module';
import { AddTipsComponent } from './add-tips/add-tips.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorPageRoutingModule,
    ReactiveFormsModule,
    CustomComponentsModule
  ],
  declarations: [
    CalculatorPage,
    AddTipsComponent,
    
  ],
  entryComponents: [
    AddTipsComponent,
    
  ]
})
export class CalculatorPageModule { }
