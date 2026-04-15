import { Component, signal } from '@angular/core';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {
  
  constructor(private noteService: NoteService) {}

  protected newNote = signal<Partial<Note>>({  //Будем вызывать через ngModel, Partial - единственное, не массив, тип данных через Note
    title: '', // Значения по умолчанию, сюда будет записываться информация
    content: ''
  })

  protected submitted = false;

  protected addNote(form: any) {
    this.submitted = true; 

    if(form.invalid) return; // Если есть ошибки

    const noteData = this.newNote(); // Сюда попадает все вводимое от пользователя
    if(!noteData.title || !noteData.content) return; //Если title не подставлен или значение не подставлено, то выходим из функции

    this.noteService.addNote(noteData.title, noteData.content);

    this.newNote.set({ // Очищаем значения, чтобы добавить новые
      title: '',
      content: ''
    });
    
    form.resetForm(); // Очищаем формочку
    this.submitted = false;
  }
}
