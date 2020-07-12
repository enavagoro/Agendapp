import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController, AlertController,ActionSheetController} from '@ionic/angular';
import { DetallePage } from './detalle/detalle.page';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos = [
    {
      Titulo: 'Asignaturas',
      autor: 'administrador',
      asignaturas: [{"nombre":"Matemáticas",
                      "profesor":"Profesor 1"},

                    {"nombre":"Lenguaje",
                     "profesor":"Profesor 2"},

                    {"nombre":"Historia",
                     "profesor":"Profesor 3"},

                    {"nombre":"Biología",
                     "profesor":"Profesor 3"}]
   }];

  constructor(public actionSheetController: ActionSheetController,
              private toastController : ToastController,
              private alertController :AlertController,
              private modalCtrl : ModalController) {

  }


  ngOnInit() {
  }

  async abrirDetalle() {

    const modal = await this.modalCtrl.create({
      component: DetallePage,
      cssClass: 'modals',
/*
      componentProps:{
        'detalle' : this.detalle
      }
      */
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

  pasoCursos(asignatura){
    console.log(asignatura);
  }
}
