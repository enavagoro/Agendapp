import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var menu = document.querySelector('ion-menu');
    menu.hidden = true;
  }

}
