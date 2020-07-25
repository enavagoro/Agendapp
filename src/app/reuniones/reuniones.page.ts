import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';
import { ReunionService } from '../_servicios/reunion.service';
import { CursoService } from '../_servicios/curso.service';

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.page.html',
  styleUrls: ['./reuniones.page.scss'],
})
export class ReunionesPage implements OnInit {
  banderaSituacion = 0;
  banderaUsuario = 3;

  reuniones = [];
  reunion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date()}

  cursos = [];

/*
titulo : String,
descripcion : String,
estado : Boolean,
fecha : Date,
*/
  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,
               private reunionService : ReunionService,
               private cursoService : CursoService,
            ) {
    this.reunionService.listar().subscribe(r=>{
      this.reuniones = r;
      console.log('reuniones',this.reuniones);
             // this.alumnoService = t.filter(this.filtros);
    })

  }

  ngOnInit() {
  }

  async opciones(reunion) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {
          this.reunion = reunion;
          this.banderaSituacion=3;
        }
      },{
        text: 'Actualizar',
        icon: 'albums',
        handler: () => {
          this.reunion = reunion;
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

  public guardarReunion(){

    this.reunion.id = 0 + (this.reuniones.length + 1);
    this.reunionService.insertar(this.reunion).subscribe(reunion=>{
      //console.log('entra2');
      this.ngOnInit();
      this.reunion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date()}
    })
  }

  public actualizarReunion(){
    console.log('vamos a actualizar a este reunion',this.reunion);

    this.reunionService.actualizar(this.reunion.id,this.reunion).subscribe(reunion=>{
      //console.log(cliente);
      this.ngOnInit();
      this.reunion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date()}
    })
  }

  limpiarDatos(){
    this.ngOnInit();
    this.reunion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date()}
  }
}
