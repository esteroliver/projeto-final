import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { obterNome, obterGeneroId, obterFilmeAtor, obterSerie } from './IMVDB';
import { MVDBService } from './mvdb.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Projeto';
  
  FilmesPorNomes: obterNome[];
  SeriesPorNomes: obterSerie[];
  obtergeneros: obterGeneroId[];
  FilmeAtor: obterFilmeAtor[];


  constructor(private mvdbservice: MVDBService){
    this.FilmesPorNomes = []
    this.SeriesPorNomes = []
    this.obtergeneros = []
    this.FilmeAtor = []
    

  }
  
  
  
  /* obterTodossgeneros(){
    this.mvdbservice.obterGenero()
    .then(mvdb => console.log(mvdb) )
    .catch(error => console.error(error));

      
  }
  
    ObterGeneroPorID(ID: number, pagenum: number){
    this.mvdbservice.obterFilmePorGenero(ID, pagenum).subscribe(res =>{
      this.obtergeneros = res.results
      console.log(this.obtergeneros)
    })
  }

  ObterfilmesPorNome(nome: string, pagenum: number){
    this.mvdbservice.ObterfilmesPorNome(nome, pagenum).subscribe(res =>{
      this.FilmesPorNomes = res.results
      console.log(this.FilmesPorNomes)
    })
  }
  
  obterFilmeAtor(ator: string){
    this.mvdbservice.obterFilmeAtor(ator).subscribe(res =>{
      this.FilmeAtor = res.results.known_for
      console.log(this.FilmeAtor)
    })
  }

  obterAtor(nomeAtor: string, pagenum: number){
    this.mvdbservice.obterAtor(nomeAtor, pagenum).subscribe(res =>{
      this.FilmeAtor = res.results
      console.log(this.FilmeAtor)
    })
  }

  obterSerie(nomeSerie: string, pagenum: number){
    this.mvdbservice.obterSerie(nomeSerie, pagenum).subscribe(res => {
      this.SeriesPorNomes = res.results
      console.log(this.SeriesPorNomes) 
    })
  } */
  
  ngOnInit(): void {
    
  }
}
