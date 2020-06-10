import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearNivelesPage } from './crear-niveles.page';

describe('CrearNivelesPage', () => {
  let component: CrearNivelesPage;
  let fixture: ComponentFixture<CrearNivelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearNivelesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearNivelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
