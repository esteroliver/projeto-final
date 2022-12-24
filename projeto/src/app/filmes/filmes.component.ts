import { MVDBService } from './../mvdb.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { query } from '@angular/animations';
import { async, asyncScheduler } from 'rxjs';

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
  idGenero: string = '';
  private _numPag: number = 1
  numPagTotal : number = 1

  listaFilmes: [] = []
  constructor(private router: Router, private route: ActivatedRoute, private bdFilme: MVDBService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.changeDetection.detectChanges();
    this.route.queryParams.subscribe((value) => {
      
      if (value["temGenero"] == undefined) {
        this.temGenero = false;
        this.tipoPesquisa = value["tipoPesquisa"];
        this.pesquisa = value ["pesquisa"];
        this.titulo = `Pesquisa de ${this.pesquisa}`
        this.pesquisar();
      }
      else {
        this.temGenero = true;
        this.idGenero = value["idGenero"];
        this.titulo = `Gênero ${this.pesquisa}`;
        this.pegarListaGenero();
        this.tipoPesquisa = value["tipoPesquisa"]
      }
      this.checarPag(value["numPag"])
    })
  }

  pesquisar() {
    if (this.tipoPesquisa == 'filme') {
      this.bdFilme.ObterfilmesPorNome(this.pesquisa, this.numPag).subscribe(value => {
        this.redirecionarPagNaoEncontrada(value.results, this.pesquisa)
        this.numPagTotal = value.total_pages
        this.listaFilmes = value.results
      })
      
    }
    else if (this.tipoPesquisa == 'serie'){
      this.bdFilme.obterSerie(this.pesquisa, this.numPag).subscribe(value =>{
        this.redirecionarPagNaoEncontrada(value.results, this.tipoPesquisa)
        this.numPagTotal = value.total_pages
        this.listaFilmes = value.results
      }) 
    }
  }

  pegarListaGenero() {
    this.bdFilme.obterFilmePorGenero(this.idGenero, this.numPag).subscribe(value => {
      this.numPagTotal = value.total_pages
      this.listaFilmes = value.results
    })
  }

  subirPag() {
    let queryParameters: Params = { numPag: (++this.numPag)}
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: queryParameters, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  descerPag() {
    let queryParameters: Params = { numPag: (--this.numPag)}
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: queryParameters, 
        queryParamsHandling: 'merge',
      });
  }

  set numPag(n: number) {
    if (n<1) {
      this._numPag = 1
    }
    else if (n > this.numPagTotal) {
      this._numPag = this.numPagTotal
    }
    else {
      this._numPag = n;
    }
  }

  get numPag() {
    return this._numPag;
  }
  redirecionarPagNaoEncontrada(lista: any[], pesquisa: string) {
    if (lista.length == 0) { 
      this.router.navigate(['pagenotfound'], {queryParams: {pesquisa: pesquisa }})
    }
  }

  checarPag(num: number) {
    if (num == undefined || num<1) {
      this.numPag = 1;
    } else {
      this.numPag = num
    }
  }
}