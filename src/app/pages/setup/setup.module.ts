import { CustomComponentsModule } from 'src/app/components/custom-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SetupPageRoutingModule } from './setup-routing.module';
import { SetupPage } from './setup.page';
import { TooltipsModule } from 'src/app/components/ionic4-tooltips/src/tooltips.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupPageRoutingModule,
    ReactiveFormsModule,
    CustomComponentsModule,
    TooltipsModule
  ],
  declarations: [SetupPage]
})
export class SetupPageModule {}
