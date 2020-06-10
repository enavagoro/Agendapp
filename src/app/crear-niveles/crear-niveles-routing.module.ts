import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearNivelesPage } from './crear-niveles.page';

const routes: Routes = [
  {
    path: '',
    component: CrearNivelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearNivelesPageRoutingModule {}
