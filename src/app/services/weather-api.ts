import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';
  private apiKey = '09076f677c8946f1a45140852262004';

  constructor(private http: HttpClient) {}

  getWeatherData(name: string): Observable<weatherData> {
    return this.http.get<weatherData>(`${this.apiUrl}?key=${this.apiKey}&q=${name}&aqi=no`);
  }
}
