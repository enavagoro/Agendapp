import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../_servicios/alumno.service';
import { ApoderadoService } from '../_servicios/apoderado.service';
import { AsignaturaService } from '../_servicios/asignatura.service';
import { CursoService } from '../_servicios/curso.service';
import { NivelService } from '../_servicios/nivel.service';
import { ProfesorService } from '../_servicios/profesor.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
})
export class InicioAdminPage implements OnInit {
  cursos = [];
  niveles = [];
  alumnos = [];
  asignaturas = [];
  profesores = [];


  constructor(public cursoService : CursoService,
              private nivelService : NivelService,
              private asignaturaService : AsignaturaService,
              private alumnoService: AlumnoService,
              private profesorService: ProfesorService,){

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

                this.profesorService.listar().subscribe(p=>{
                  console.log(p);
                  this.profesores = p;
                  console.log(this.profesores);
                     // this.asignaturaService = t.filter(this.filtros);
                })
              }

  ngOnInit() {
  }

}
