import { Component, OnInit } from '@angular/core';
import { ModalController ,NavParams } from '@ionic/angular';
import { TareasPage } from './tareas/tareas.page';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(private navParams : NavParams,private modalCtrl : ModalController) {

 }

  ngOnInit() {
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
