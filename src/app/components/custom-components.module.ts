import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopoverComponent } from './popover/popover.component';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,

    ],
    declarations: [
        PopoverComponent
    ],
    entryComponents: [
        PopoverComponent
    ],
    exports: [
        PopoverComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CustomComponentsModule {
}