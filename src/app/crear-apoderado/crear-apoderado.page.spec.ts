import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearApoderadoPage } from './crear-apoderado.page';

describe('CrearApoderadoPage', () => {
  let component: CrearApoderadoPage;
  let fixture: ComponentFixture<CrearApoderadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearApoderadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearApoderadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
