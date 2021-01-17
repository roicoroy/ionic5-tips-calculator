import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonNavPageRoutingModule } from './ion-nav-routing.module';

import { IonNavPage } from './ion-nav.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonNavPageRoutingModule,
  ],
  declarations: [
    IonNavPage,
  ],
  entryComponents:[
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class IonNavPageModule {}