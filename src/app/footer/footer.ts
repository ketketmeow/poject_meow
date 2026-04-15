import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Подключает формы
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Output() subscribeClicked = new EventEmitter<void>(); // Через функцию onSubscribe() вызовет функцию handleSubscribe(); Приминаем из компонента

  onSubscribe() {
    this.subscribeClicked.emit(); // Эта функция вызывает функцию выше
  }

  username = ''
}
