import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateSetupPageRoutingModule } from './date-setup-routing.module';

import { DateSetupPage } from './date-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateSetupPageRoutingModule
  ],
  declarations: [DateSetupPage]
})
export class DateSetupPageModule {}
