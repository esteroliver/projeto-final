import { MVDBService } from './../mvdb.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { query } from '@angular/animations';

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
      if (value["numPag"]== undefined || value["numPag"]<1) {
        this.numPag = 1;
      } else {
        this.numPag = value["numPag"]
      }
    })
  }

  pesquisar() {
    if (this.tipoPesquisa == 'filme') {
      this.bdFilme.ObterfilmesPorNome(this.pesquisa, this.numPag).subscribe(value => {
        this.listaFilmes = value.results
        console.log(this.listaFilmes)
      })
      
    }
    else if (this.tipoPesquisa == 'serie'){
      this.bdFilme.obterSerie(this.pesquisa, this.numPag).subscribe(value =>{
        this.listaFilmes = value.results
      }) 
    }
  }

  pegarListaGenero() {
    this.bdFilme.obterFilmePorGenero(this.idGenero, this.numPag).subscribe(value => {
      this.listaFilmes = value.results
      console.log(this.listaFilmes)
    })
  }

  atributos() {
    console.log(this.pesquisa, this.tipoPesquisa, this.titulo, this.temGenero, this.idGenero, this.numPag)
  }

  subirPag() {
    let queryParameters: Params = { numPag: (this.numPag++)}
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: queryParameters, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  descerPag() {
    let queryParameters: Params = { numPag: (this.numPag-1)}
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: queryParameters, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  set numPag(n: number) {
    if (n<1) {
      this._numPag = 1
    }
    else {
      this._numPag = n;
    }
  }

  get numPag() {
    return this._numPag;
  }
}
