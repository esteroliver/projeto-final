import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api_img } from 'src/environments/environment';

@Component({
  selector: 'app-cartaz',
  templateUrl: './cartaz.component.html',
  styleUrls: ['./cartaz.component.scss']
})
export class CartazComponent implements OnInit {
  @Input() filme: any;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.filme['poster_path'] = `${api_img}${this.filme['poster_path']}`;
  }

  redirecionar() {
    this.router.navigate(['verFilme'], {queryParams: {id: this.filme['id']}})
  }
}
