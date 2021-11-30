import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForceOptionalUpdatePage } from './force-optional-update.page';

describe('ForceOptionalUpdatePage', () => {
  let component: ForceOptionalUpdatePage;
  let fixture: ComponentFixture<ForceOptionalUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceOptionalUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForceOptionalUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
