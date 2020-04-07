import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculatorSlidesPage } from './calculator-slides.page';

describe('CalculatorSlidesPage', () => {
  let component: CalculatorSlidesPage;
  let fixture: ComponentFixture<CalculatorSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorSlidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
