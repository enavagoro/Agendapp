import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'resumen',
    loadChildren: () => import('./resumen/resumen.module').then( m => m.ResumenPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'reuniones',
    loadChildren: () => import('./reuniones/reuniones.module').then( m => m.ReunionesPageModule)
  },
  {
    path: 'citaciones',
    loadChildren: () => import('./citaciones/citaciones.module').then( m => m.CitacionesPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'crear-cursos',
    loadChildren: () => import('./crear-cursos/crear-cursos.module').then( m => m.CrearCursosPageModule)
  },
  {
    path: 'crear-alumnos',
    loadChildren: () => import('./crear-alumnos/crear-alumnos.module').then( m => m.CrearAlumnosPageModule)
  },
  {
    path: 'crear-profesores',
    loadChildren: () => import('./crear-profesores/crear-profesores.module').then( m => m.CrearProfesoresPageModule)
  },
  {
    path: 'crear-niveles',
    loadChildren: () => import('./crear-niveles/crear-niveles.module').then( m => m.CrearNivelesPageModule)
  },
  {
    path: 'inicio-admin',
    loadChildren: () => import('./inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
  {
    path: 'crear-asignaturas',
    loadChildren: () => import('./crear-asignaturas/crear-asignaturas.module').then( m => m.CrearAsignaturasPageModule)
  },
  {
    path: 'crear-apoderado',
    loadChildren: () => import('./crear-apoderado/crear-apoderado.module').then( m => m.CrearApoderadoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
