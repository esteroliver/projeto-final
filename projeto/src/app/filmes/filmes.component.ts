import { MVDBService } from './../mvdb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  pesquisa: string = '';
  tipoPesquisa: string = '';
  titulo = '';
  temGenero: boolean = false;
  idGenero: number = 0;

  listaFilmes: [] = []

  constructor(private router: Router, private route: ActivatedRoute, private bdFilme: MVDBService) { }

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      if (this.temGenero === undefined) {
        this.temGenero = false;
        this.tipoPesquisa = value["tipoPesquisa"];
        this.pesquisa = value ["pesquisa"];
        this.pesquisar();
      }
      else {
        this.temGenero = true;
        this.idGenero = value["idGenero"];
        this.titulo = `Gênero ${this.pesquisa}`;
        this.pegarListaGenero();
      }
    })
  }

  pesquisar() {
    if (this.tipoPesquisa == 'filme') {
      this.listaFilmes = this.bdFilme.ObterfilmesPorNome(this.pesquisa)
      console.log(this.listaFilmes)
    }
    else if (this.tipoPesquisa == 'serie'){
      // colocar pesquisa de série
    }
  }

  pegarListaGenero() {
    this.listaFilmes = this.bdFilme.obterFilmePorGenero(this.idGenero)
  }
}
