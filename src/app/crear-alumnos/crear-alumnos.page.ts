import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';
import { AlumnoService } from '../_servicios/alumno.service';
import { NivelService } from '../_servicios/nivel.service';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.page.html',
  styleUrls: ['./crear-alumnos.page.scss'],
})
export class CrearAlumnosPage implements OnInit {
  banderaSituacion = 0;
  /* Modelo en Api

    nombre : String,
    rut : String,
    estado : Boolean,
    nivel :Number,
  */

  public alumno  = {id:0,estado:false,nombre:'',rut:'',nivel:0};


  alumnos = [];
  niveles = [];
  nivel;

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,
               private alumnoService : AlumnoService,
               private nivelService : NivelService
             ) {
                console.log(this.alumnos);

                 this.alumnoService.listar().subscribe(a=>{
                   this.alumnos = a;
                   console.log(this.alumnos);
                      // this.alumnoService = t.filter(this.filtros);
                 })

                 this.nivelService.listar().subscribe(n=>{
                    this.niveles = n;
                    console.log(this.niveles);
                      // this.nivelService = t.filter(this.filtros);
                 })
               }

  ngOnInit() {
  }

  async opciones(alumno) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {
          this.alumno = alumno;
          this.banderaSituacion=3;
        }
      },{
        text: 'Actualizar',
        icon: 'albums',
        handler: () => {
          this.alumno = alumno;
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

  public guardarAlumno(){

    this.alumno.id = 0 + (this.alumnos.length + 1);
    this.alumnoService.insertar(this.alumno).subscribe(alumno=>{
      //console.log('entra2');
      this.ngOnInit();
      this.alumno = {id:0,estado:false,nombre:'',rut:'',nivel:0};
    })
  }

  public actualizarAlumno(){
    console.log('vamos a actualizar a este alumno',this.alumno);

    this.alumnoService.actualizar(this.alumno.id,this.alumno).subscribe(alumno=>{
      //console.log(cliente);
      this.ngOnInit();
      this.alumno = {id:0,estado:false,nombre:'',rut:'',nivel:0};
    })
  }

  limpiarDatos(){
    this.ngOnInit();
    this.alumno = {id:0,estado:false,nombre:'',rut:'',nivel:0};
  }

  leer(){
    console.log(this.nivel);
  }
}
