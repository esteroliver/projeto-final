import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ObterGenero, obterNome, obterGeneroId } from './IMVDB';
import { MVDBService } from './mvdb.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1-Projeto';
  FilmesPorNomes: obterNome[];
  obtergeneros: obterGeneroId[]

  constructor(private mvdbservice: MVDBService){
    this.FilmesPorNomes = []
    this.obtergeneros = []
    

  }
  obterTodossgeneros(){
    this.mvdbservice.ObterGenero()
    .then(mvdb => console.log(mvdb) )
    .catch(error => console.error(error));

      
  }
  ObterGerneroPorID(ID: number){
    this.mvdbservice.obterGeneroId(ID).subscribe(res =>{
      this.obtergeneros = res.results
      console.log(this.obtergeneros)
    })
  }

  ObterfilmesPorNome(nome: string){
    this.mvdbservice.ObterfilmesPorNome(nome).subscribe(res =>{
      this.FilmesPorNomes = res.id
      console.log(this.FilmesPorNomes)
    })
  }
}
