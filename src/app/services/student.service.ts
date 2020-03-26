import { Injectable } from '@angular/core';
import { Note } from '../models/student';
import { NumericValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private notes: Note[] = new Array();

  constructor() {
    this.notes.push({
      title: 'Despensa',
      content: '1kl de huevo, Agua, Tortillas',
      date: "16/06/1998"
    });

    this.notes.push({
      title: 'Tareas',
      content: 'Hacer un nuevo servicio de ionic',
      date: "16/06/1998"
    });

    this.notes.push({
      title: 'Conferencias',
      content: 'Depresion: a la 1 en uvp 2',
      date: "16/06/1998"
    });
  }
  
  getNotes(): Note[] {
    return this.notes;
  }

  newNote(notes: Note): void{
    this.notes.push(notes);
  }
}
