import { Component, OnInit } from '@angular/core';
import { ModalController ,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  constructor(private navParams : NavParams,private modalCtrl : ModalController) { }

  ngOnInit() {
/*
    var ps = navParams.get("detalle");

    if(ps){
      this.detalle = ps;
    }*/
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }


}
