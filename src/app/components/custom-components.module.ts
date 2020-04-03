import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicSelectableModule } from './ionic-selectable/ionic-selectable.module';
import { IonPicker } from './ion-picker/ion-picker';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        IonicSelectableModule
    ],
    declarations: [
        IonPicker
    ],
    entryComponents: [
        IonPicker
    ],
    exports: [
        IonicSelectableModule,
        IonPicker
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CustomComponentsModule {
}