import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupPageRoutingModule } from './setup-routing.module';

import { SetupPage } from './setup.page';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupPageRoutingModule,
    ReactiveFormsModule,
    CustomComponentsModule
  ],
  declarations: [
    SetupPage,
    FooterComponent
  ],
  entryComponents:[

  ]
})
export class SetupPageModule {}
