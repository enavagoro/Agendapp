import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-crear-asignaturas',
  templateUrl: './crear-asignaturas.page.html',
  styleUrls: ['./crear-asignaturas.page.scss'],
})

export class CrearAsignaturasPage implements OnInit {

  banderaSituacion = 0;

  nivel = 1;

  asignatura = {
                  "id":"0","estado":"0","cod_asignatura":"1","nivel":"0","nombre":"Juan"
                };

  asignaturas = [{
                  "id":"0","estado":"0","cod_asignatura":"2","nivel":"1","nombre":"Pedro"
                },
                {
                  "id":"0","estado":"0","cod_asignatura":"3","nivel":"1","nombre":"Juan"
                },
                {
                  "id":"0","estado":"0","cod_asignatura":"4","nivel":"2","nombre":"Diego"
                },
              ];

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,) { }

  ngOnInit() {
  }

  async opciones(asignatura) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {

        }
      },{
        text: 'Ver Asignaturas',
        icon: 'albums',
        handler: () => {

        }
      },{
        text: 'Modificar Asignatura',
        icon: 'people',
        handler: () => {

        }
      }, {
        text: 'Desactivar',
        role: 'Desactivar',
        icon: 'trash',
        handler: () => {

        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }
}
