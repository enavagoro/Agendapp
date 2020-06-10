import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  hoy = new Date();
  ultimoDia;

  constructor() {
    console.log("Hora del día de hoy:",this.hoy);
    console.log(this.hoy.getDay());
  }

  ngOnInit() {
  }

}
