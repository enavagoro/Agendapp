import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Servicios

import { AlumnoService } from './_servicios/alumno.service';
import { ApoderadoService } from './_servicios/apoderado.service';
import { AsignaturaService } from './_servicios/asignatura.service';
import { CursoService } from './_servicios/curso.service';
import { NivelService } from './_servicios/nivel.service';
import { ProfesorService } from './_servicios/profesor.service';
import { ReunionService } from './_servicios/reunion.service';
import { CitacionService } from './_servicios/citacion.service';
import { TareaService } from './_servicios/tarea.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlumnoService,
    ApoderadoService,
    AsignaturaService,
    CursoService,
    NivelService,
    ProfesorService,
    ReunionService,
    CitacionService,
    TareaService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
