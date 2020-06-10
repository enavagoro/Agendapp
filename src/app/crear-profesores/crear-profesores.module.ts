import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearProfesoresPageRoutingModule } from './crear-profesores-routing.module';

import { CrearProfesoresPage } from './crear-profesores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearProfesoresPageRoutingModule
  ],
  declarations: [CrearProfesoresPage]
})
export class CrearProfesoresPageModule {}
