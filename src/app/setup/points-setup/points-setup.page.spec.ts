import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PointsSetupPage } from './points-setup.page';

describe('PointsSetupPage', () => {
  let component: PointsSetupPage;
  let fixture: ComponentFixture<PointsSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PointsSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
