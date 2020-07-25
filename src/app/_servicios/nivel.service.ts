import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NivelService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {

    return this.http.get<any[]>(`${this.url}/nivel/` , {
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

  insertar(nivel){
    return this.http.post<any[]>(`${this.url}/nivel/`,nivel , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,nivel){
    delete nivel.__v;
    return this.http.patch<any[]>(`${this.url}/nivel/${id}`,nivel , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(nivel,id){
      nivel.estado = false;
      delete nivel.__v;
      return this.http.patch<any[]>(`${this.url}/cliente/${id}`,nivel, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }

}
