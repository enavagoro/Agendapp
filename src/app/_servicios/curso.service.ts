import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {
    return this.http.get<any[]>(`${this.url}/curso/` , {
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

  insertar(curso){
    return this.http.post<any[]>(`${this.url}/curso/`,curso , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,curso){
    delete curso.__v;
    return this.http.patch<any[]>(`${this.url}/curso/${id}`,curso , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(curso,id){
      curso.estado = false;
      delete curso.__v;
      return this.http.patch<any[]>(`${this.url}/cliente/${id}`,curso, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }

}
