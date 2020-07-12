import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-crear-niveles',
  templateUrl: './crear-niveles.page.html',
  styleUrls: ['./crear-niveles.page.scss'],
})
export class CrearNivelesPage implements OnInit {


  nivel= {
            "id":"0","cod_nivel":"0","estado":"0","nivel":"1"
          };

  niveles = [{
              "id":"0","cod_nivel":"0","estado":"0","nivel":"1"
            },
            {
              "id":"0","cod_nivel":"0","estado":"0","nivel":"2"
            },
            {
              "id":"0","cod_nivel":"0","estado":"0","nivel":"3"
            }
           ];

  banderaSituacion = 0;

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,) { }

  ngOnInit() {
  }

  async opciones(nivel) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {

        }
      },{
        text: 'Modificar Asignaturas',
        icon: 'albums',
        handler: () => {

        }
      },{
        text: 'Agregar Alumno',
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
