import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateSetupPage } from './date-setup.page';

describe('DateSetupPage', () => {
  let component: DateSetupPage;
  let fixture: ComponentFixture<DateSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
