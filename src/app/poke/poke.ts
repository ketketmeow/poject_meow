import { Component } from '@angular/core';
import { PokeService } from '../services/poke-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poke',
  imports: [],
  templateUrl: './poke.html',
  styleUrl: './poke.css',
})
export class Poke {
  constructor(private PokeService: PokeService) {}
  
}
