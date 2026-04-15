import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})

export class NoteService {
  private notes = signal<Note[]>([  // Передаем типы данных с массивом в переменную notes (создаем новый массив?)
    {id: 1,
      title: 'Первая заметка',
    content: 'Хочу раф на кокосовом',
  createdAt: new Date()
},
{id: 2,
      title: 'Вторая заметка',
    content: 'Хочу пиво',
  createdAt: new Date()
}
  ])

  getNotes() {
    return this.notes;
  }

  addNote(title: string, content: string) { // Сформировали новый объект Заметки
    const newNote: Note = {
      id: Date.now(),
      title: title,
      content: content,
      createdAt: new Date()
    };
    this.notes.update(notes => [...notes, newNote]); // Обращаемся к this.notes, потом к update - к текущему значению добавляем новые значения 
  }
}
