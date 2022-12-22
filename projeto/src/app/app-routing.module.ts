import { ShowAtorComponent } from './PesquisaPopUp/show-ator/show-ator.component';
import { ShowSerieComponent } from './PesquisaPopUp/show-serie/show-serie.component';
import { ShowFilmeComponent } from './PesquisaPopUp/show-filme/show-filme.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AtorComponent } from './ator/ator.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SobreComponent } from './home/sobre/sobre.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'verFilme', component: ShowFilmeComponent},
  {path: 'verSerie', component: ShowSerieComponent},
  {path: 'verAtor', component: ShowAtorComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'mainpage', component: HomepageComponent},
  {path: 'filme', component: FilmesComponent},
  {path: 'ator', component: AtorComponent},
  {path: 'pagenotfound', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'mainpage'},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
