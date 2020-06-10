import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearCursosPage } from './crear-cursos.page';

describe('CrearCursosPage', () => {
  let component: CrearCursosPage;
  let fixture: ComponentFixture<CrearCursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCursosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
