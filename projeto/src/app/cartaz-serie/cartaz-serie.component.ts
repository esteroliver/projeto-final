import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { api_img } from 'src/environments/environment';

@Component({
  selector: 'app-cartaz-serie',
  templateUrl: './cartaz-serie.component.html',
  styleUrls: ['./cartaz-serie.component.scss']
})
export class CartazSerieComponent implements OnInit {
  @Input() serie: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.serie['poster_path'] = `${api_img}${this.serie['poster_path']}`
  }

  redirecionar() {
    this.router.navigate(['verSerie'], {queryParams: {id: this.serie['id']}})
  }
}
