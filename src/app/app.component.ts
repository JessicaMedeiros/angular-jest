import { Component, OnInit } from '@angular/core';
import { ImdbService } from './filmes/services/imdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-jest';

  constructor(private service: ImdbService){}

  ngOnInit(){
   this.service.getListaDeGenerosDeFilme().subscribe((res)=> {
    console.log('testando', res)
   })
  }
}


