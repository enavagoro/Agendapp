import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';
import { AsignaturaService } from '../_servicios/asignatura.service';
import { NivelService } from '../_servicios/nivel.service';
import { ProfesorService } from '../_servicios/profesor.service';

@Component({
  selector: 'app-crear-asignaturas',
  templateUrl: './crear-asignaturas.page.html',
  styleUrls: ['./crear-asignaturas.page.scss'],
})

export class CrearAsignaturasPage implements OnInit {

  banderaSituacion = 0;

  public asignatura  = {id:0,estado:false,codigo:'',nivel:0,nombre:'',profesor:'',tareas:[]};

  asignaturas = [];
  profesores = [];
  public profesor  = {id:0,estado:false,nombre:'',rut:''};

  niveles = [];

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,
               public asignaturaService: AsignaturaService,
               public nivelService : NivelService,
               public profesorService : ProfesorService) {
                 console.log(this.asignaturas);

                  this.asignaturaService.listar().subscribe(a=>{
                    console.log(a);
                    this.asignaturas = a;
                    console.log(this.asignaturas);
                       // this.asignaturaService = t.filter(this.filtros);
                  })

                  this.nivelService.listar().subscribe(n=>{
                     this.niveles = n;
                     console.log(this.niveles);
                       // this.nivelService = t.filter(this.filtros);
                  })

                  this.profesorService.listar().subscribe(p=>{
                    console.log(p);
                    this.profesores = p;
                    console.log(this.profesores);
                       // this.asignaturaService = t.filter(this.filtros);
                  })
                }

  ngOnInit() {

  }

  async opciones(asignatura) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {
          this.asignatura = asignatura;
          this.banderaSituacion=3;
        }
      },{
        text: 'Actualizar',
        icon: 'albums',
        handler: () => {
          this.asignatura = asignatura;
          this.banderaSituacion=2;
        }
      },{
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

  public guardarAsignatura(){

    this.asignatura.id = 0 + (this.asignaturas.length + 1);
    this.asignaturaService.insertar(this.asignatura).subscribe(asignatura=>{
      //console.log('entra2');
      this.ngOnInit();
      this.asignatura = {id:0,estado:false,codigo:'',nivel:0,nombre:'',profesor:'',tareas:[]};
    })
  }

  public actualizarAsignatura(){
    console.log('vamos a actualizar a este asignatura',this.asignatura);

    this.asignaturaService.actualizar(this.asignatura.id,this.asignatura).subscribe(asignatura=>{
      //console.log(cliente);
      this.ngOnInit();
      this.asignatura = {id:0,estado:false,codigo:'',nivel:0,nombre:'',profesor:'',tareas:[]};
    })
  }

  limpiarDatos(){
    this.ngOnInit();
    this.asignatura = {id:0,estado:false,codigo:'',nivel:0,nombre:'',profesor:'',tareas:[]};
  }

}
