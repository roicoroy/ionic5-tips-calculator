import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { TestPipe } from './test.pipe';
import { TotalAPipe } from './totalA.pipe';
import { SumPipe, SumPipeModule } from './sum.pipe';
import { CalculatorComponent } from './calculator.component';
import { RoundPipe } from './round.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SumPipeModule
  ],
  declarations: [
    Tab1Page, 
    TestPipe, 
    TotalAPipe,
    RoundPipe,
    CalculatorComponent
  ],
  schemas:[
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[
    SumPipe
  ]
})
export class Tab1PageModule {}
