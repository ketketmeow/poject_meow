import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    private apiKey = '09076f677c8946f1a45140852262004';
  
    constructor(private http: HttpClient) {}
  
    getPokeData(name: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}${name}`);
}
