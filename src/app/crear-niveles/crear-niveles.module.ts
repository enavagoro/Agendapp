import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearNivelesPageRoutingModule } from './crear-niveles-routing.module';

import { CrearNivelesPage } from './crear-niveles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearNivelesPageRoutingModule
  ],
  declarations: [CrearNivelesPage]
})
export class CrearNivelesPageModule {}
