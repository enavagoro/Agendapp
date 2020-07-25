import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController} from '@ionic/angular';
import { CursoService } from '../_servicios/curso.service';
import { NivelService } from '../_servicios/nivel.service';
import { AsignaturaService } from '../_servicios/asignatura.service';
import { AlumnoService } from '../_servicios/alumno.service';

@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.page.html',
  styleUrls: ['./crear-cursos.page.scss'],
})
export class CrearCursosPage implements OnInit {
  banderaSituacion = 0;
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
            id:0,codigo:'',nombre:'',estado:false,nivel:0,asignaturas:[],alumnos:[]
          };

  cursos = [];
  niveles = [];
  alumnos = [];
  asignaturas = [];

  constructor( private toastController : ToastController,
               private alertController :AlertController,
               private modalCtrl : ModalController,
               public actionSheetController: ActionSheetController,
               public cursoService : CursoService,
               private nivelService : NivelService,
               private asignaturaService : AsignaturaService,
               private alumnoService: AlumnoService) {

                 this.cursoService.listar().subscribe(c=>{
                   this.cursos = c;
                   console.log(this.cursos);
                      // this.alumnoService = t.filter(this.filtros);
                 })

                 this.nivelService.listar().subscribe(n=>{
                    this.niveles = n;
                    console.log(this.niveles);
                      // this.nivelService = t.filter(this.filtros);
                 })

                 this.alumnoService.listar().subscribe(a=>{
                   this.alumnos = a;
                   console.log(this.alumnos);
                      // this.alumnoService = t.filter(this.filtros);
                 })

                 this.asignaturaService.listar().subscribe(a=>{
                   console.log(a);
                   this.asignaturas = a;
                   console.log(this.asignaturas);
                      // this.asignaturaService = t.filter(this.filtros);
                 })
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
          this.curso = curso;
          this.banderaSituacion=3;
        }
      },{
        text: 'Actualizar',
        icon: 'albums',
        handler: () => {
          this.curso = curso;
          this.banderaSituacion=2;
        }
      },{
        text: 'Agregar Alumno',
        icon: 'albums',
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

  public guardarCurso(){

    this.curso.id = 0 + (this.cursos.length + 1);
    this.cursoService.insertar(this.curso).subscribe(curso=>{
      //console.log('entra2');
      this.ngOnInit();
      this.curso = {id:0,codigo:'',nombre:'',estado:false,nivel:0,asignaturas:[],alumnos:[]};
    })
  }

  public actualizarCurso(){
    console.log('vamos a actualizar a este alumno',this.curso);

    this.cursoService.actualizar(this.curso.id,this.curso).subscribe(alumno=>{
      //console.log(cliente);
      this.ngOnInit();
      this.curso = {id:0,codigo:'',nombre:'',estado:false,nivel:0,asignaturas:[],alumnos:[]};
    })
  }

  limpiarDatos(){
    this.ngOnInit();
    this.curso = {id:0,codigo:'',nombre:'',estado:false,nivel:0,asignaturas:[],alumnos:[]};
  }

}
