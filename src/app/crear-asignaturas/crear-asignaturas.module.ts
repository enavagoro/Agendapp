import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAsignaturasPageRoutingModule } from './crear-asignaturas-routing.module';

import { CrearAsignaturasPage } from './crear-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAsignaturasPageRoutingModule
  ],
  declarations: [CrearAsignaturasPage]
})
export class CrearAsignaturasPageModule {}
