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

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  })

  protected submitted = false;

  protected addNote(form: any) {
    this.submitted = true; // Начало процесс отправки формы

    if(form.invalid) return; // Если есть ошибки

    const noteData = this.newNote();
    if(!noteData.title || !noteData.content) return;

    this.noteService.addNote(noteData.title, noteData.content);

    this.newNote.set({
      title: '',
      content: ''
    });
    
    form.resetForm(); // Очищаем формочку
    this.submitted = false;
  }
}
