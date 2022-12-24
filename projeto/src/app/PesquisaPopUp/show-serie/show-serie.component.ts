import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MVDBService} from 'src/app/mvdb.service'
import { api_img } from 'src/environments/environment'

@Component({
  selector: 'app-show-serie',
  templateUrl: './show-serie.component.html',
  styleUrls: ['./show-serie.component.scss']
})
export class ShowSerieComponent implements OnInit {
  serie: any

  constructor(private route: ActivatedRoute, private bd: MVDBService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((value) => {
      this.pesquisar(value["id"])
    })
    this.changeDetection.detectChanges();
  }

  pesquisar(ID:number){
    this.bd.obterSeriePorID(ID).subscribe(value => {
      console.log(value)
      this.serie = value
      this.serie['poster_path'] = `${api_img}${this.serie['poster_path']}`
    })
  }
}