import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-crear-profesores',
  templateUrl: './crear-profesores.page.html',
  styleUrls: ['./crear-profesores.page.scss'],
})
export class CrearProfesoresPage implements OnInit {
  banderaSituacion = 0;

  profesor = {
                "id":"0","estado":"0","nombre":"Juan","rut":"123123"
              };



  profesores = [{
                  "id":"0","estado":"0","nombre":"Juan","rut":"123123"
                },
                {
                  "id":"0","estado":"0","nombre":"Pedro","rut":"123123"
                },
                {
                  "id":"0","estado":"0","nombre":"Miguel","rut":"123123"
                },
                {
                  "id":"0","estado":"0","nombre":"Raul","rut":"123123"
                },
                {
                  "id":"0","estado":"0","nombre":"José","rut":"123123"
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
