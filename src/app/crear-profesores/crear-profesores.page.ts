import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';
import { ProfesorService } from '../_servicios/profesor.service';

@Component({
  selector: 'app-crear-profesores',
  templateUrl: './crear-profesores.page.html',
  styleUrls: ['./crear-profesores.page.scss'],
})
export class CrearProfesoresPage implements OnInit {
  banderaSituacion = 0;

  public profesor  = {id:0,estado:false,nombre:'',rut:''};
  nivel;

  profesores = [];

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,
               private profesorService : ProfesorService) {

                console.log(this.profesores);

                this.profesorService.listar().subscribe(p=>{
                  this.profesores = p;
                  console.log(this.profesores);
                       // this.profesorService = t.filter(this.filtros);
                })


                }

  ngOnInit() {
  }

  async opciones(profesor) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {
          this.profesor = profesor;
          this.banderaSituacion=3;
        }
      },{
        text: 'Actualizar',
        icon: 'albums',
        handler: () => {
          this.profesor = profesor;
          this.banderaSituacion=2;
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

  public guardarProfesor(){

    this.profesor.id = 0 + (this.profesores.length + 1);
    this.profesorService.insertar(this.profesor).subscribe(profesor=>{
      //console.log('entra2');
      this.ngOnInit();
      this.profesor = {id:0,estado:false,nombre:'',rut:''};
    })
  }

  public actualizarProfesor(){
    console.log('vamos a actualizar a este profesor',this.profesor);

    this.profesorService.actualizar(this.profesor.id,this.profesor).subscribe(profesor=>{
      //console.log(cliente);
      this.ngOnInit();
      this.profesor = {id:0,estado:false,nombre:'',rut:''};
    })
  }

  limpiarDatos(){
    this.ngOnInit();
    this.profesor = {id:0,estado:false,nombre:'',rut:''};
  }
}
