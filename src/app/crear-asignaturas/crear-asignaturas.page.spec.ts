import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearAsignaturasPage } from './crear-asignaturas.page';

describe('CrearAsignaturasPage', () => {
  let component: CrearAsignaturasPage;
  let fixture: ComponentFixture<CrearAsignaturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAsignaturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearAsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
