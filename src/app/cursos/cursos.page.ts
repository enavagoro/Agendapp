import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController, AlertController,ActionSheetController} from '@ionic/angular';
import { DetallePage } from './detalle/detalle.page';
import { AsignaturaService } from '../_servicios/asignatura.service';
import { CursoService } from '../_servicios/curso.service';
import { ProfesorService } from '../_servicios/profesor.service';
import { TareaService } from '../_servicios/tarea.service';
import { AlumnoService } from '../_servicios/alumno.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  banderaSituacion = 0;
  banderaUsuario = 3;

  tareas = [];
  tarea = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),asignatura:''};

  asignaturas = [];
  asignaturasFiltradas = [];

  profesores = [];
  profesoresFiltras = [];

  public profesor  = {id:0,estado:false,nombre:'',rut:''};
  profesorId = '5f0e36cd60105f2adcba6bfb';
  //5f0e36cd60105f2adcba6bfb , 5f0e441c60105f2adcba6c02  , 5f0e442e60105f2adcba6c03  {{}}

  reuniones = [];
  reunion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date()}

  citaciones = [];
  citacion = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),alumno:''}


  constructor(public actionSheetController: ActionSheetController,
              private toastController : ToastController,
              private alertController :AlertController,
              private modalCtrl : ModalController,
              private asignaturaService : AsignaturaService,
              private cursoService : CursoService,
              private profesorService : ProfesorService,
              private tareaService : TareaService,
              private alumnoService : AlumnoService){

                this.cursoService.listar().subscribe(c=>{
                  this.cursos = c;
                  console.log('curso',this.cursos);
                     // this.alumnoService = t.filter(this.filtros);
                })

                this.asignaturaService.listar().subscribe(a=>{
                  this.asignaturas = a;
                  console.log('asignaturas',this.asignaturas);
                  this.filtrarAsignaturas(this.asignaturas,this.profesorId);
                  console.log(this.asignaturasFiltradas);
                     // this.asignaturaService = t.filter(this.filtros);
                })

                this.profesorService.listar().subscribe(p=>{
                  this.profesores = p;
                  this.filtrarProfesores(this.profesores,this.profesorId);
                  console.log('profesores',this.profesores);
                       // this.profesorService = t.filter(this.filtros);
                })

                this.tareaService.listar().subscribe(t=>{
                  this.tareas = t;
                  console.log('tareas',this.tareas);
                       // this.profesorService = t.filter(this.filtros);
                  this.filtrarTareas();
                })

                this.alumnoService.listar().subscribe(a=>{
                  this.alumnos = a;
                  console.log('alumnos',this.alumnos);
                       // this.profesorService = t.filter(this.filtros);

                })

  }

  ngOnInit() {
  }

  async abrirDetalle(tarea) {

    const modal = await this.modalCtrl.create({
      component: DetallePage,
      cssClass: 'modals',
      componentProps:{
        'tarea' : tarea,
        'asignaturas' : this.asignaturas,
      }
    });

    modal.onDidDismiss().then(modal=>{
      /*
      if(modal.data){
        console.log("detalle conseguido",modal.data);
        this.detalle = modal.data;
      }
      */
    });

    return await modal.present();
  }

  pasoCursos(asignatura){

  }

  filtrarAsignaturas(asignaturas,profesor){
    console.log('asignatura filtro',asignaturas);
    console.log('profesor filtro',profesor);
    var arregloTemporal = [];

    for (let i = 0; i< asignaturas.length; i++){
      if(asignaturas[i].profesor==this.profesorId){
        arregloTemporal.push(asignaturas[i]);
      }

      this.asignaturasFiltradas = arregloTemporal;
    }
  }

  filtrarProfesores(profesores,profesor){
    var arregloTemporal = [];

    for (let i = 0; i< profesores.length; i++){
      if(profesores[i].id==this.profesorId){
        this.profesor=profesores[i];
      }
    }
  }

  async opciones(tarea) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {
          this.tarea = tarea;
          this.banderaSituacion=3;
        }
      },{
        text: 'Actualizar',
        icon: 'albums',
        handler: () => {
          this.tarea = tarea;
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

  public guardarTarea(){

    this.tarea.id = 0 + (this.tareas.length + 1);
    this.tareaService.insertar(this.tarea).subscribe(tarea=>{
      //console.log('entra2');
      this.ngOnInit();
      this.tarea = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),asignatura:''};
    })
  }

  public actualizarTarea(){
    console.log('vamos a actualizar a este tarea',this.tarea);

    this.tareaService.actualizar(this.tarea.id,this.tarea).subscribe(tarea=>{
      //console.log(cliente);
      this.ngOnInit();
      this.tarea = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),asignatura:''};
    })
  }

  limpiarDatos(){
    this.ngOnInit();
    this.tarea = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),asignatura:''};
  }

  filtrarTareas(){
    var arregloTemporal = [];
    console.log('tarea',this.tareas);

      for(let i = 0; i<this.tareas.length; i++){
        console.log('entro');
          for(let j = 0; j<this.asignaturas.length; j++){
          if( (this.tareas[i].asignatura == this.asignaturas[j].id) && this.tareas[i].asignatura=="5f0e376e60105f2adcba6c00" || this.tareas[i].asignatura=="5f0e450f60105f2adcba6c06" ){
            arregloTemporal.push(this.tareas[i]);
            console.log('arregloTemporal',arregloTemporal);
          }
      }
    }
    this.tareasFiltradas=arregloTemporal;
  }

  traerAlumno(){
    var alumno;
    for(let i = 0; i < this.cursos.length; i++){

    }
    return alumno;
  }
}
