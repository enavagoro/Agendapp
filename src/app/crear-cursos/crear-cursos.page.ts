import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.page.html',
  styleUrls: ['./crear-cursos.page.scss'],
})
export class CrearCursosPage implements OnInit {

  /*
  Curso{
    id: //id interno para la base de datos
    cod_curso: //codigo
    estado: int, //esto es para borrar
    nivel: int, //esto viene de los niveles creados
    asignaturas: array, //arreglo de entidades
    alumnos: array,  //arreglo de entidades
  }
  */
  nivel = 1;
  curso = {
            "id":"0","cod_curso":"0","estado":"0","nivel":"0","asignaturas":["Million tonne punch","Damage resistance","Superhuman reflexes"],"alumnos":["Million tonne punch","Damage resistance","Superhuman reflexes"]
          };

  cursos = [{
            "nombre":"Primero-A","id":"0","cod_curso":"0","estado":"0","nivel":"1","asignaturas":["Million tonne punch","Damage resistance","Superhuman reflexes"],"alumnos":["Million tonne punch","Damage resistance","Superhuman reflexes"]
            },
            {
              "nombre":"Segundo-B","id":"0","cod_curso":"0","estado":"0","nivel":"2","asignaturas":["Million tonne punch","Damage resistance","Superhuman reflexes"],"alumnos":["Million tonne punch","Damage resistance","Superhuman reflexes"]
            },
            {
              "nombre":"Tercero-C","id":"0","cod_curso":"0","estado":"0","nivel":"3","asignaturas":["Million tonne punch","Damage resistance","Superhuman reflexes"],"alumnos":["Million tonne punch","Damage resistance","Superhuman reflexes"]
            }
           ];

  banderaSituacion = 0;

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,) {
    console.log(this.curso);
    console.log(this.cursos);
  }

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
