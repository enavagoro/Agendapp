import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAlumnosPageRoutingModule } from './crear-alumnos-routing.module';

import { CrearAlumnosPage } from './crear-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAlumnosPageRoutingModule
  ],
  declarations: [CrearAlumnosPage]
})
export class CrearAlumnosPageModule {}
