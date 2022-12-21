import { Component, Input, OnInit } from '@angular/core';
import { api_img} from 'src/environments/environment';

@Component({
  selector: 'app-cartaz-ator',
  templateUrl: './cartaz-ator.component.html',
  styleUrls: ['./cartaz-ator.component.scss']
})
export class CartazAtorComponent implements OnInit {
  @Input() ator: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ator)
    this.ator['profile_path'] = `${api_img}${this.ator['profile_path']}`
  }
  }


