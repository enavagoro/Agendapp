import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitacionesPageRoutingModule } from './citaciones-routing.module';

import { CitacionesPage } from './citaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitacionesPageRoutingModule
  ],
  declarations: [CitacionesPage]
})
export class CitacionesPageModule {}
