import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearApoderadoPageRoutingModule } from './crear-apoderado-routing.module';

import { CrearApoderadoPage } from './crear-apoderado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearApoderadoPageRoutingModule
  ],
  declarations: [CrearApoderadoPage]
})
export class CrearApoderadoPageModule {}
