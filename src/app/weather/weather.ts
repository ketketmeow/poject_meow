import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { weatherData } from '../models/weather.model';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule, DecimalPipe],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather implements OnInit {
  constructor(private WeatherService: WeatherService) {}

  cityName: string = 'Москва';
  weatherData?: weatherData;
  Weather: any[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    // Для кнопки поиска, вызываем срабатывание скрипта для отправления названия города
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.WeatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
      error: () => {
        this.errorMessage = 'Нет результата';
        this.Weather = [];
      },
    });
  }
}
