import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearProfesoresPage } from './crear-profesores.page';

describe('CrearProfesoresPage', () => {
  let component: CrearProfesoresPage;
  let fixture: ComponentFixture<CrearProfesoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProfesoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearProfesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
