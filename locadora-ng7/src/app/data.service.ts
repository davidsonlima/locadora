import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  verificaDisponibilidadeService(disponibilidade){
    return disponibilidade ? "Está disponível" : "Não está disponível";
  }

  // messageBox(texto){
  //   return alert(texto);
  // }

}
