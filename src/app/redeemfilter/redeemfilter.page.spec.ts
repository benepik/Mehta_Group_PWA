import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedeemfilterPage } from './redeemfilter.page';

describe('RedeemfilterPage', () => {
  let component: RedeemfilterPage;
  let fixture: ComponentFixture<RedeemfilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemfilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemfilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
