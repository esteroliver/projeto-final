import { Component, Input, OnInit } from '@angular/core';
import { api_img } from 'src/environments/environment';

@Component({
  selector: 'app-cartaz-serie',
  templateUrl: './cartaz-serie.component.html',
  styleUrls: ['./cartaz-serie.component.scss']
})
export class CartazSerieComponent implements OnInit {
  @Input() serie: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.serie)
    this.serie['poster_path'] = `${api_img}${this.serie['poster_path']}`
  }

}
