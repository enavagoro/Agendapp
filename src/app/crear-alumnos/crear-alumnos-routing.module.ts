import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAlumnosPage } from './crear-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearAlumnosPageRoutingModule {}
