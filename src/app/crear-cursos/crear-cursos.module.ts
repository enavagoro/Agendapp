import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCursosPageRoutingModule } from './crear-cursos-routing.module';

import { CrearCursosPage } from './crear-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCursosPageRoutingModule
  ],
  declarations: [CrearCursosPage]
})
export class CrearCursosPageModule {}
