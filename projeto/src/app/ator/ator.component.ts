import { MVDBService } from './../mvdb.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.scss']
})
export class AtorComponent implements OnInit {
  pesquisa: string = '';
  titulo = '';
  private _numPag: number = 1

  listaAtores: [] = []

  constructor(private router: Router, private route: ActivatedRoute, private bdAtor: MVDBService, private changeDetection: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.changeDetection.detectChanges();
    this.route.queryParams.subscribe((value) =>{
      this.pesquisa = value['pesquisa'];
      this.titulo = `Pesquisa de ${this.pesquisa}`
      if (value["numPag"] == undefined || value["numPag"]<1){
        this.numPag = 1
       } else{
        this.numPag = value["numPag"]
       }
       this.pesquisar()
    })
  }

  pesquisar(){
    this.bdAtor.obterAtor(this.pesquisa, this.numPag).subscribe(value =>{
      this.listaAtores = value.results
      console.log(this.listaAtores)
    })
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
