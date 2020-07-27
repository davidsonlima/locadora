import { Component, OnInit } from '@angular/core';
// import { Filme } from './filme'
import { DataService } from '../data.service'
import { FirebaseService } from '../firebase.service';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  // Dados mockados
  // filme1 = new Filme(1, '0001', 'O Senhor dos Anéis', 'Ficção', 2, true);
  // filme2 = new Filme(2, '0002', 'Marley e Eu', 'Comédia', 1, false);
  // filme3 = new Filme(3, '0003', 'Missão Impossível', 'Suspense', 5, true);
  // filmes = [this.filme1, this.filme2, this.filme3];

  filmes: Array<any>;

  constructor (
    private data: DataService,
    public firebaseService: FirebaseService,
    private router: Router) {}

  isDisponivel(disponibilidade){
    const msg = this.data.verificaDisponibilidadeService(disponibilidade);
    alert(msg);
  }

  ngOnInit() {
    this.firebaseService.getFilmes()
    .subscribe(resultado => {
      this.filmes = resultado;
    })
  }

}
