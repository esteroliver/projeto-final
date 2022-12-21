import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH, api_key } from 'src/environments/environment';
import { obterNome, ObterGenero, obterGeneroId, obterFilmeAtor, ObterAtor, obterSerie } from './IMVDB';

@Injectable({
  providedIn: 'root'
})
export class MVDBService {

  constructor(private httpclient: HttpClient) { }


  obterGenero(){
    return this.httpclient.get<obterNome[]>(`${API_PATH}genre/movie/list?api_key=9d9d39faf97f2a006cc70633e3b0fbb9&language=pt-BR`).toPromise();
  }
  
  obterFilmePorGenero(ID: string, pageNum: number):Observable<any>{
    return this.httpclient.get<obterGeneroId[]>(`${API_PATH}discover/movie?api_key=${api_key}&language=pt-BR&with_genres=${ID}&page=${pageNum}`)
    
  }

  ObterfilmesPorNome(NOME: String, pageNum: number):Observable<any>{
    return this.httpclient.get<ObterGenero[]>(`${API_PATH}search/movie?api_key=${api_key}&language=pt-BR&query=${NOME}&page=${pageNum}&include_adult=false`)
    }
  
  obterFilmeAtor(ATOR: string): Observable<any>{
    return this.httpclient.get<obterFilmeAtor>(`${API_PATH}search/person?api_key=${api_key}&language=pt-BR&query=${ATOR}&page=1&include_adult=false`)
  }

  obterAtor(NOMEATOR: string, pageNum: number): Observable<any>{
    return this.httpclient.get<ObterAtor>(`${API_PATH}search/person?api_key=9d9d39faf97f2a006cc70633e3b0fbb9&language=pt-BR&query=${NOMEATOR}&page=${pageNum}&include_adult=false`)
  }

  obterSerie(titulo: string, pageNum: number): Observable<any>{
    return this.httpclient.get<obterSerie[]>(`${API_PATH}search/tv?api_key=9d9d39faf97f2a006cc70633e3b0fbb9&language=pt-BR&page=1&query=${titulo}&page=${pageNum}&include_adult=false`)
  }

}
