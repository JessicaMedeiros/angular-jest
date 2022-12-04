import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders()
    .set('X-RapidAPI-Key', environment.IMDB_KEY);



  getListaDeGenerosDeFilme() {
    return this.http.get("https://imdb8.p.rapidapi.com/title/list-popular-genres", 
    { headers: this.httpHeaders })
  }

 
  
}
