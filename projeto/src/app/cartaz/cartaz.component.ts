import { Component, Input, OnInit } from '@angular/core';
import { api_img } from 'src/environments/environment';

@Component({
  selector: 'app-cartaz',
  templateUrl: './cartaz.component.html',
  styleUrls: ['./cartaz.component.scss']
})
export class CartazComponent implements OnInit {
  @Input() filme: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.filme)
    this.filme['poster_path'] = `${api_img}${this.filme['poster_path']}`
  }

}
