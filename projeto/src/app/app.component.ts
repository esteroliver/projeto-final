import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { obterNome, obterGeneroId, obterFilmeAtor } from './IMVDB';
import { MVDBService } from './mvdb.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Projeto';
  
  FilmesPorNomes: obterNome[];
  obtergeneros: obterGeneroId[];
  FilmeAtor: obterFilmeAtor[];


  constructor(private mvdbservice: MVDBService){
    this.FilmesPorNomes = []
    this.obtergeneros = []
    this.FilmeAtor = []
    

  }
  
  
  
  obterTodossgeneros(){
    this.mvdbservice.obterGenero()
    .then(mvdb => console.log(mvdb) )
    .catch(error => console.error(error));

      
  }
  
  ObterGeneroPorID(ID: number){
    this.mvdbservice.obterFilmePorGenero(ID).subscribe(res =>{
      this.obtergeneros = res.results
      console.log(this.obtergeneros)
    
    })
  }

  ObterfilmesPorNome(nome: string){
    this.mvdbservice.ObterfilmesPorNome(nome).subscribe(res =>{
      this.FilmesPorNomes = res.results
      
    })

    let filtrarfilmes = this.FilmesPorNomes.filter((valorAtual) => {
      var release = valorAtual.release_date
      var nome = valorAtual.title
      var linkimagem = valorAtual.img
      var resumo = valorAtual.overview

      console.log(resumo)
    })
  }
  
  obterFilmeAtor(ator: string){
    this.mvdbservice.obterFilmeAtor(ator).subscribe(res =>{
      this.FilmeAtor = res.results
      console.log(this.FilmeAtor)
    })
  }

  
  ngOnInit(): void {
    
  }
}
