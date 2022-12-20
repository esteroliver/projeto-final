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
  FilmeAtor: obterFilmeAtor[]


  constructor(private mvdbservice: MVDBService){
    this.FilmesPorNomes = []
    this.obtergeneros = []
    this.FilmeAtor = []
    

  }
  
  
  
  obterTodossgeneros(){
    this.mvdbservice.ObterGenero()
    .then(mvdb => console.log(mvdb) )
    .catch(error => console.error(error));

      
  }
  
  ObterGeneroPorID(ID: number){
    this.mvdbservice.obterGeneroId(ID).subscribe(res =>{
      this.obtergeneros = res.results
      console.log(this.obtergeneros)
    
    })
  }

  ObterfilmesPorNome(nome: string){
    this.mvdbservice.ObterfilmesPorNome(nome).subscribe(res =>{
      this.FilmesPorNomes = res.results
      console.log(this.FilmesPorNomes)
    })

    let filtrarfilmes = this.FilmesPorNomes.filter((valorAtual) => {
      console.log('chamei', valorAtual)
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
