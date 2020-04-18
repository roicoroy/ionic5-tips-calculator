import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitersSetupPage } from './waiters-setup.page';

describe('WaitersSetupPage', () => {
  let component: WaitersSetupPage;
  let fixture: ComponentFixture<WaitersSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitersSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitersSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
