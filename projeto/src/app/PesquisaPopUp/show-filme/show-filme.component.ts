import { MVDBService } from './../../mvdb.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { api_img } from 'src/environments/environment';

@Component({
  selector: 'app-show-filme',
  templateUrl: './show-filme.component.html',
  styleUrls: ['./show-filme.component.scss']
})
export class ShowFilmeComponent implements OnInit {
  filme: any;

  constructor(private route: ActivatedRoute, private bdFilme: MVDBService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((value) => {
      this.pesquisar(value['id'])
    })
    
    this.changeDetection.detectChanges();
  }


  pesquisar(id: number) {
    this.bdFilme.obterFilmePorID(id).subscribe(value => {
      this.filme = value
      console.log(value)
      this.filme['poster_path'] = `${api_img}${this.filme['poster_path']}`
    })
  }
}
