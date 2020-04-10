import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointsSetupPageRoutingModule } from './points-setup-routing.module';

import { PointsSetupPage } from './points-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointsSetupPageRoutingModule
  ],
  declarations: [PointsSetupPage]
})
export class PointsSetupPageModule {}
