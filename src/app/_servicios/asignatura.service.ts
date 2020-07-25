import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {

    return this.http.get<any[]>(`${this.url}/asignatura/` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }
  /*
  getcliente(id){
    return this.http.get<any[]>(`${this.url}/cliente/${id}` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization' , this.login.getToken())
      .set('empresaId' , this.login.getEmpresa())
    });
  }
  */

  insertar(asignatura){
    return this.http.post<any[]>(`${this.url}/asignatura/`,asignatura , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,asignatura){
    delete asignatura.__v;
    return this.http.patch<any[]>(`${this.url}/asignatura/${id}`,asignatura , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(asignatura,id){
      asignatura.estado = false;
      delete asignatura.__v;
      return this.http.patch<any[]>(`${this.url}/cliente/${id}`,asignatura, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }

}
