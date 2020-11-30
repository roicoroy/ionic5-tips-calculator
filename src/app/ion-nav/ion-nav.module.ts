import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonNavPageRoutingModule } from './ion-nav-routing.module';

import { IonNavPage } from './ion-nav.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonNavPageRoutingModule,
    MaterialModule
  ],
  declarations: [IonNavPage]
})
export class IonNavPageModule {}