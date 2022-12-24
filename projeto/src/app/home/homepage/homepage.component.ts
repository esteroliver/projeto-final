import { Component, OnInit } from '@angular/core';
import { MVDBService } from 'src/app/mvdb.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  filmesPopulares: [] = []
  constructor(private filmes: MVDBService) { }

  ngOnInit(): void {
    this.filmes.descobrirFilmesPopulares().subscribe(value =>{
      this.filmesPopulares = value.results
    })
  }

}
