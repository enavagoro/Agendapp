import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitacionesPage } from './citaciones.page';

describe('CitacionesPage', () => {
  let component: CitacionesPage;
  let fixture: ComponentFixture<CitacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
