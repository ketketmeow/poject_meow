import { Component } from '@angular/core';
import { NoteService } from '../../services/note';
import { ActivatedRoute } from '@angular/router'; // За счет него можем получать данные url
import { CommonModule } from '@angular/common'; // Модуль, который помогает обрабывать директивы (*ngIf, *ngFor и тд...)

@Component({
  selector: 'app-note-detail', 
  imports: [CommonModule],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css',
})
export class NoteDetail { //
  noteId!: number;
  note: any;

  constructor ( // Создаем конструтор, через который принимаем параметры route и noteService, через конструктор можем обращаться к этим сервисам
    private route: ActivatedRoute,
    private noteService: NoteService
  ) {
    this.route.params.subscribe(params => { //Обращается к route.params и функции subscribe, в следствии чего можем получить нужный параметр из url адреса
      this.noteId = +params['id']; // обращаемся к noteId и туда добавляем id
      this.note = this.noteService.getNotes()().find(n => n.id === this.noteId); // Сначала обращаемся ко всем заметкам, потом к конкретной у которой соответствует id; this.noteService.getNotes() - получаем весь массив, () - получаем значение сигнала и потом из этих значений ищем элемент у котрого есть совпадение по id
    })
  }
}
