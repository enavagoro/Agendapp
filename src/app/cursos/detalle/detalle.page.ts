import { Component, OnInit } from '@angular/core';
import { ModalController ,NavParams } from '@ionic/angular';
import { TareasPage } from './tareas/tareas.page';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  public tarea;
  public asignaturas = [];
  public asignatura;

  constructor(private navParams : NavParams,private modalCtrl : ModalController) {
    var tr = navParams.get("tarea");
    var as = navParams.get("asignaturas");
    //console.log(ps);
    if(tr){
      this.tarea = tr;
      console.log('imprimiendo',this.tarea);
    }
    if(as){
      this.asignaturas = as;
      console.log('imprimiendo',this.asignaturas);
    }

    this.obtenerNombre();

 }

  ngOnInit() {

  }

  obtenerNombre(){


    for(let i=0; i< this.asignaturas.length; i++){
      if(this.asignaturas[i].id==this.tarea.asignatura){

        this.asignatura = this.asignaturas[i];
    console.log(this.asignatura);
      }
    }
  }

  async abrirTarea() {

    const modal = await this.modalCtrl.create({
      component: TareasPage,
      cssClass: 'modals',

    });

    modal.onDidDismiss().then(modal=>{
      /*
      if(modal.data){
        console.log("detalle conseguido",modal.data);
        this.detalle = modal.data;
      }
      */
    });

    return await modal.present();
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

}
