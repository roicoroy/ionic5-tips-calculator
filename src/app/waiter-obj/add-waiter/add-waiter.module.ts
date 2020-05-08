import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWaiterPageRoutingModule } from './add-waiter-routing.module';

import { AddWaiterPage } from './add-waiter.page';
import { CustomComponentsModule } from 'src/app/components/custom-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWaiterPageRoutingModule,
    CustomComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [AddWaiterPage],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AddWaiterPageModule {}
