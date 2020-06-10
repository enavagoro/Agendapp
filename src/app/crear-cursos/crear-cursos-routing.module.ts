import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCursosPage } from './crear-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCursosPageRoutingModule {}
