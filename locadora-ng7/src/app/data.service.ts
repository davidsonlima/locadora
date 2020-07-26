import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  verificaDisponibilidade(disponibilidade){
    return console.log(disponibilidade ? "Está disponível" : "Não está disponível");
  }

}
