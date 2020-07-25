import { Component, OnInit } from '@angular/core';
import { ReunionService } from '../_servicios/reunion.service';
import { ProfesorService } from '../_servicios/profesor.service';
import { TareaService } from '../_servicios/tarea.service';
import { AsignaturaService } from '../_servicios/asignatura.service';
import { CitacionService } from '../_servicios/citacion.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  banderaSituacion = 0;
  banderaUsuario = 3;

  tareas = [];
  tarea = {id:0,titulo:'',descripcion:'',estado:false,fecha:new Date(),asignatura:''};
  tareasFiltradas = [];

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


  constructor(
                private asignaturaService : AsignaturaService,
                private profesorService : ProfesorService,
                private tareaService : TareaService,
                private reunionService : ReunionService,
                private citacionService : ReunionService) {

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

    this.reunionService.listar().subscribe(r=>{
      this.reuniones = r;
      console.log('reuniones',this.reuniones);
             // this.alumnoService = t.filter(this.filtros);
    })

    this.citacionService.listar().subscribe(c=>{
      this.citaciones = c;
      console.log('citaciones',this.citaciones);
         // this.alumnoService = t.filter(this.filtros);
    })
 }

  ngOnInit() {
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

  filtrarProfesores(profesores,profesor){
    var arregloTemporal = [];

    for (let i = 0; i< profesores.length; i++){
      if(profesores[i].id==this.profesorId){
        this.profesor=profesores[i];
      }
    }
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
}
