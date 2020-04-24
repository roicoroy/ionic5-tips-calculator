import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitersPageRoutingModule } from './waiters-routing.module';

import { WaitersPage } from './waiters.page';
import { CustomComponentsModule } from 'src/app/components/custom-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitersPageRoutingModule,
    ReactiveFormsModule,
    CustomComponentsModule
  ],
  declarations: [WaitersPage]
})
export class WaitersPageModule {}
