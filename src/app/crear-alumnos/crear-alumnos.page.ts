import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.page.html',
  styleUrls: ['./crear-alumnos.page.scss'],
})
export class CrearAlumnosPage implements OnInit {
  banderaSituacion = 0;
  nivel = 1;
  alumno = {
            "id":"0","estado":"0","nombre":"Juan","rut":"123123","nivel":"1"
          };



  alumnos = [{
              "id":"0","estado":"0","nombre":"Juan","rut":"123123","nivel":"1"
            },
            {
              "id":"0","estado":"0","nombre":"Pedro","rut":"123123","nivel":"3"
            },
            {
              "id":"0","estado":"0","nombre":"Miguel","rut":"123123","nivel":"2"
            },
            {
              "id":"0","estado":"0","nombre":"Raul","rut":"123123","nivel":"1"
            },
            {
              "id":"0","estado":"0","nombre":"José","rut":"123123","nivel":"1"
            }
           ];

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,) { }

  ngOnInit() {
  }

  async opciones(curso) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {

        }
      },{
        text: 'Editar',
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
