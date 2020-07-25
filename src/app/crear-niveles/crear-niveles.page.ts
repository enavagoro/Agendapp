import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';
import { NivelService } from '../_servicios/nivel.service';

@Component({
  selector: 'app-crear-niveles',
  templateUrl: './crear-niveles.page.html',
  styleUrls: ['./crear-niveles.page.scss'],
})
export class CrearNivelesPage implements OnInit {

  banderaSituacion = 0;

  public nivel = {id:0,codigo:'',estado:false,nivel:0};
  niveles = [];

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,
               private nivelService : NivelService) {
                 this.nivelService.listar().subscribe(a=>{
                   this.niveles = a;
                   console.log(this.niveles);
                      // this.nivelService = t.filter(this.filtros);
                 })
                }

  ngOnInit() {
  }

  async opciones(nivel) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {
          this.nivel = nivel;
          this.banderaSituacion=3;
        }
      },{
        text: 'Actualizar',
        icon: 'albums',
        handler: () => {
          this.nivel = nivel;
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

  public guardarNivel(){

    this.nivel.id = 0 + (this.niveles.length + 1);
    this.nivelService.insertar(this.nivel).subscribe(nivel=>{
      //console.log('entra2');
      this.ngOnInit();
      this.nivel = {id:0,codigo:'',estado:false,nivel:0};;
    })
  }

  public actualizarNivel(){
    console.log('vamos a actualizar a este nivel',this.nivel);

    this.nivelService.actualizar(this.nivel.id,this.nivel).subscribe(nivel=>{
      //console.log(cliente);
      this.ngOnInit();
      this.nivel = {id:0,codigo:'',estado:false,nivel:0};;
    })
  }

  limpiarDatos(){
    this.ngOnInit();
    this.nivel = {id:0,codigo:'',estado:false,nivel:0};;
  }
}
