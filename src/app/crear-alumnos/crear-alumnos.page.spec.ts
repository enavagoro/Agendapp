import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearAlumnosPage } from './crear-alumnos.page';

describe('CrearAlumnosPage', () => {
  let component: CrearAlumnosPage;
  let fixture: ComponentFixture<CrearAlumnosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAlumnosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
