import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {

    return this.http.get<any[]>(`${this.url}/tarea/` , {
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

  insertar(tarea){
    return this.http.post<any[]>(`${this.url}/tarea/`,tarea , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,tarea){
    delete tarea.__v;
    return this.http.patch<any[]>(`${this.url}/tarea/${id}`,tarea , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(tarea,id){
      tarea.estado = false;
      delete tarea.__v;
      return this.http.patch<any[]>(`${this.url}/cliente/${id}`,tarea, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }
    //var indice  = this.clientes.indexOf(prod);
    //this.clientes[indice] = prod;
    //console.log(this.clientes[indice]);
}
