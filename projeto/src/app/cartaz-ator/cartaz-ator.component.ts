import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api_img} from 'src/environments/environment';

@Component({
  selector: 'app-cartaz-ator',
  templateUrl: './cartaz-ator.component.html',
  styleUrls: ['./cartaz-ator.component.scss']
})
export class CartazAtorComponent implements OnInit {
  @Input() ator: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.ator['profile_path'] = `${api_img}${this.ator['profile_path']}`
  }

  redirecionar() {
    this.router.navigate(['verAtor'], {queryParams: {id: this.ator['id']}})
  }
  }


