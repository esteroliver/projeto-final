import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  pesquisa: string = '';
  tipoPesquisa: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  pesquisar(){
    let link: string = this.tipoPesquisa === 'ator' ? 'ator' : 'filme'
    this.router.navigate([link], { queryParams: {pesquisa: this.pesquisa, tipoPesquisa: this.tipoPesquisa}});
  }
}
