import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitacionService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {

    return this.http.get<any[]>(`${this.url}/citacion/` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  TraerPorId(id){
    return this.http.get<any[]>(`${this.url}/citacion/${id}` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }


  insertar(citacion){
    return this.http.post<any[]>(`${this.url}/citacion/`,citacion , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,citacion){
    delete citacion.__v;
    return this.http.patch<any[]>(`${this.url}/citacion/${id}`,citacion , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(citacion,id){
      citacion.estado = false;
      delete citacion.__v;
      return this.http.patch<any[]>(`${this.url}/citacion/${id}`,citacion, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }

}
