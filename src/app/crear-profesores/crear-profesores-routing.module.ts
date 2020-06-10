import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearProfesoresPage } from './crear-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: CrearProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearProfesoresPageRoutingModule {}
