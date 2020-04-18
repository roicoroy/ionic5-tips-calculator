import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitersSetupPageRoutingModule } from './waiters-setup-routing.module';

import { WaitersSetupPage } from './waiters-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitersSetupPageRoutingModule
  ],
  declarations: [WaitersSetupPage]
})
export class WaitersSetupPageModule {}
