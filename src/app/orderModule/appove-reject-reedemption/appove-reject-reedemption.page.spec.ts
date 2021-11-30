import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppoveRejectReedemptionPage } from './appove-reject-reedemption.page';

describe('AppoveRejectReedemptionPage', () => {
  let component: AppoveRejectReedemptionPage;
  let fixture: ComponentFixture<AppoveRejectReedemptionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoveRejectReedemptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppoveRejectReedemptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
