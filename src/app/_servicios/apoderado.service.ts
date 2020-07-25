import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApoderadoService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {

    return this.http.get<any[]>(`${this.url}/apoderado/` , {
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

  insertar(apoderado){
    return this.http.post<any[]>(`${this.url}/apoderado/`,apoderado , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,apoderado){
    delete apoderado.__v;
    return this.http.patch<any[]>(`${this.url}/apoderado/${id}`,apoderado , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(apoderado,id){
      apoderado.estado = false;
      delete apoderado.__v;
      return this.http.patch<any[]>(`${this.url}/cliente/${id}`,apoderado, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }

}
