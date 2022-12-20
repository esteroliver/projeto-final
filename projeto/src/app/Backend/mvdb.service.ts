import { api_key } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { ObterGenero, obterNome, obterGeneroId, obterFilmeAtor } from './IMVDB';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MVDBService {

  constructor(private httpclient: HttpClient) { }


  ObterGenero(){
    return this.httpclient.get<obterNome[]>(`${API_PATH}genre/movie/list?api_key=9d9d39faf97f2a006cc70633e3b0fbb9&language=pt-BR`).toPromise();
  }

  ObterfilmesPorNome(NOME: String):Observable<any>{
    return this.httpclient.get<ObterGenero[]>(`${API_PATH}search/movie?api_key=${api_key}language=pt-BR&query=${NOME}&page=1&include_adult=false`)
    }
  obterGeneroId(ID: number):Observable<any>{
    return this.httpclient.get<obterGeneroId[]>(`${API_PATH}discover/movie?api_key=${api_key}&language=pt-BR&with_genres=${ID}`)
  }
  obterFilmeAtor(ATOR: string): Observable<any>{
    return this.httpclient.get<obterFilmeAtor>(`${API_PATH}search/person?api_key=${api_key}&language=pt-BR&query=${ATOR}&page=1&include_adult=false`)
  }
}
