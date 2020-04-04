import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryPageRoutingModule } from './summary-routing.module';

import { SummaryPage } from './summary.page';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryPageRoutingModule
  ],
  declarations: [
    SummaryPage,
    ResultComponent
  ],
  entryComponents:[
    ResultComponent
  ]
})
export class SummaryPageModule {}
