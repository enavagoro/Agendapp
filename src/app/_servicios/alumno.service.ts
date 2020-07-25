import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  listar() {

    return this.http.get<any[]>(`${this.url}/alumno/` , {
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

  insertar(alumno){
    return this.http.post<any[]>(`${this.url}/alumno/`,alumno , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  actualizar(id,alumno){
    delete alumno.__v;
    return this.http.patch<any[]>(`${this.url}/alumno/${id}`,alumno , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }

  eliminar(alumno,id){
      alumno.estado = false;
      delete alumno.__v;
      return this.http.patch<any[]>(`${this.url}/cliente/${id}`,alumno, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }
    //var indice  = this.clientes.indexOf(prod);
    //this.clientes[indice] = prod;
    //console.log(this.clientes[indice]);
}
