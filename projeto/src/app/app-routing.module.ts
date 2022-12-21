import { FilmesComponent } from './filmes/filmes.component';
import { SobreComponent } from './home/sobre/sobre.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'sobre', component: SobreComponent},
  {path: 'mainpage', component: HomepageComponent},
  {path: 'filme', component: FilmesComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
