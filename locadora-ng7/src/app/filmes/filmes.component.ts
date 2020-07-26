import { Component, OnInit } from '@angular/core';
import { Filme } from './filme'

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  filme1 = new Filme(1, '0001', 'O Senhor dos Anéis', 'Ficção', 2);
  filme2 = new Filme(2, '0002', 'Marley e Eu', 'Comédia', 1);
  filme3 = new Filme(3, '0003', 'Missão Impossível', 'Suspense', 5);
  filmes = [this.filme1, this.filme2, this.filme3];

  constructor () {}

  ngOnInit(): void {
  }

}
