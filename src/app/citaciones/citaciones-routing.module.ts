import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitacionesPage } from './citaciones.page';

const routes: Routes = [
  {
    path: '',
    component: CitacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitacionesPageRoutingModule {}
