import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';
import { CitacionService } from '../_servicios/citacion.service';
import { AlumnoService } from '../_servicios/alumno.service';

@Component({
  selector: 'app-citaciones',
  templateUrl: './citaciones.page.html',
  styleUrls: ['./citaciones.page.scss'],
})
export class CitacionesPage implements OnInit {
  banderaSituacion = 0;
  banderaUsuario = 3;

  alumnos = [];
  citaciones = [];
  citacion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),alumno:''}

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,
               private citacionService : CitacionService,
              private alumnoService : AlumnoService,
            ) {

    this.citacionService.listar().subscribe(c=>{
      this.citaciones = c;
      console.log('citaciones',this.citaciones);
         // this.alumnoService = t.filter(this.filtros);
    })

    this.alumnoService.listar().subscribe(a=>{
      this.alumnos = a;
      console.log(this.alumnos);
         // this.alumnoService = t.filter(this.filtros);
    })
  }

  ngOnInit() {
  }

  async opciones(citacion) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {
          this.citacion = citacion;
          this.banderaSituacion=3;
        }
      },{
        text: 'Actualizar',
        icon: 'albums',
        handler: () => {
          this.citacion = citacion;
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

  public guardarCitacion(){

    this.citacion.id = 0 + (this.citaciones.length + 1);
    this.citacionService.insertar(this.citacion).subscribe(citacion=>{
      //console.log('entra2');
      this.ngOnInit();
      this.citacion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),alumno:''}
    })
  }

  public actualizarCitacion(){
    console.log('vamos a actualizar a este citacion',this.citacion);

    this.citacionService.actualizar(this.citacion.id,this.citacion).subscribe(citacion=>{
      //console.log(cliente);
      this.ngOnInit();
      this.citacion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),alumno:''}
    })
  }

  limpiarDatos(){
    this.ngOnInit();
    this.citacion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),alumno:''}
  }

}
