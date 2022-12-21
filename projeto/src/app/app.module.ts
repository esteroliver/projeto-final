import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { MVDBService } from './mvdb.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './home/sobre/sobre.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmesComponent } from './filmes/filmes.component';
import { CartazComponent } from './cartaz/cartaz.component';
import { FormsModule } from '@angular/forms';
import { AtorComponent } from './ator/ator.component';
import { CartazSerieComponent } from './cartaz-serie/cartaz-serie.component';
import { CartazAtorComponent } from './cartaz-ator/cartaz-ator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmesComponent,
    CartazComponent,
    AtorComponent,
    CartazSerieComponent,
    CartazAtorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    MVDBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
