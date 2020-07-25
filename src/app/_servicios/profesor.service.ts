import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {

    return this.http.get<any[]>(`${this.url}/profesor/` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  TraerPorId(id){
    return this.http.get<any[]>(`${this.url}/profesor/${id}` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }


  insertar(profesor){
    return this.http.post<any[]>(`${this.url}/profesor/`,profesor , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,profesor){
    delete profesor.__v;
    return this.http.patch<any[]>(`${this.url}/profesor/${id}`,profesor , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(profesor,id){
      profesor.estado = false;
      delete profesor.__v;
      return this.http.patch<any[]>(`${this.url}/cliente/${id}`,profesor, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }

}
