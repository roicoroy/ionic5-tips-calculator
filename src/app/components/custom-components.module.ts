import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicSelectableModule } from './ionic-selectable/ionic-selectable.module';
import { IonPicker } from './ion-picker/ion-picker';
import { FooterComponent } from '../pages/setup/footer/footer.component';
import { PopoverComponent } from './popover/popover.component';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        IonicSelectableModule
    ],
    declarations: [
        IonPicker,
        FooterComponent,
        PopoverComponent
    ],
    entryComponents: [
        IonPicker,
        FooterComponent,
        PopoverComponent
    ],
    exports: [
        IonicSelectableModule,
        IonPicker,
        FooterComponent,
        PopoverComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CustomComponentsModule {
}