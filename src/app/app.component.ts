import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public banderaUsuario = 3;

  public appAlumno = [
    {
      title: 'Inicio',
      url: 'resumen',
      icon: 'home'
    },
    {
      title: 'Tareas',
      url: 'cursos',
      icon: 'library'
    },
    {
      title: 'Reuniones',
      url: 'reuniones',
      icon: 'people'
    },
    {
      title: 'Citaciones',
      url: 'citaciones',
      icon: 'clipboard'
    }
    /*,
    {
      title: 'Calendario',
      url: 'calendario',
      icon: 'calendar'
    }
    */
  ];

  public appProfesor = [
    {
      title: 'Inicio',
      url: 'resumen',
      icon: 'home'
    },
    {
      title: 'Tareas',
      url: 'cursos',
      icon: 'library'
    },
    {
      title: 'Reuniones',
      url: 'reuniones',
      icon: 'people'
    },
    {
      title: 'Citaciones',
      url: 'citaciones',
      icon: 'clipboard'
    }
    /*,
    {
      title: 'Calendario',
      url: 'calendario',
      icon: 'calendar'
    }
    */
  ];

  public appAdministrador = [
    {
      title: 'Inicio',
      url: 'inicio-admin',
      icon: 'home'
    },
    {
      title: 'Niveles',
      url: 'crear-niveles',
      icon: 'list'
    },
    {
      title: 'Cursos',
      url: 'crear-cursos',
      icon: 'library'
    },
    {
      title: 'Alumnos',
      url: 'crear-alumnos',
      icon: 'people'
    },
    {
      title: 'Profesores',
      url: 'crear-profesores',
      icon: 'school'
    },
    {
      title: 'Asignaturas',
      url: 'crear-asignaturas',
      icon: 'calculator'
    },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appAlumno.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
