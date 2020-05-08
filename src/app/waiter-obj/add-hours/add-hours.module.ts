import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHoursPageRoutingModule } from './add-hours-routing.module';

import { AddHoursPage } from './add-hours.page';
import { CustomComponentsModule } from 'src/app/components/custom-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHoursPageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [AddHoursPage],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AddHoursPageModule {}
