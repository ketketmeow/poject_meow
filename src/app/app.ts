import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Weather } from './weather/weather';
import { Poke } from './poke/poke';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, Weather, Poke],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  handleSubscribe() {
    console.log('all is working');
    alert('all is working');
  }

  title = 'Список хотелок и заметок';
}
