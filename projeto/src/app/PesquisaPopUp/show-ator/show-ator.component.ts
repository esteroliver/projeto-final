import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { MVDBService } from 'src/app/mvdb.service';
import { api_img } from 'src/environments/environment';
@Component({
  selector: 'app-show-ator',
  templateUrl: './show-ator.component.html',
  styleUrls: ['./show-ator.component.scss']
})
export class ShowAtorComponent implements OnInit {
  Ator: any;

  constructor(private route: ActivatedRoute, private bdAtor: MVDBService ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((value) =>{
      console.log(value)
      this.pesquisar(value["id"])
    })
  }

    pesquisar(ID:number){
      this.bdAtor.obterAtorPorID(ID).subscribe(value =>{
        this.Ator = value
        console.log(value)
        this.Ator['profile_path'] = `${api_img}${this.Ator['profile_path']}`
      })
    }
}
