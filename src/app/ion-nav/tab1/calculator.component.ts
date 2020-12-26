import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sizer',
    template: `
        <div>
            <ion-button (click)="dec()" title="smaller">-</ion-button>
            <ion-button (click)="inc()" title="bigger">+</ion-button>
            <ion-label [style.font-size.px]="size">FontSize: {{size}}px</ion-label>
        </div>
` 
})
export class CalculatorComponent {

    @Input() size: number | string;
    @Output() sizeChange = new EventEmitter<number>();

    dec() { this.resize(-1); }
    inc() { this.resize(+1); }

    resize(delta: number) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    }
}