import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {

    return this.http.get<any[]>(`${this.url}/reunion/` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  TraerPorId(id){
    return this.http.get<any[]>(`${this.url}/reunion/${id}` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }


  insertar(reunion){
    return this.http.post<any[]>(`${this.url}/reunion/`,reunion , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,reunion){
    delete reunion.__v;
    return this.http.patch<any[]>(`${this.url}/reunion/${id}`,reunion , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(reunion,id){
      reunion.estado = false;
      delete reunion.__v;
      return this.http.patch<any[]>(`${this.url}/reunion/${id}`,reunion, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }

}
