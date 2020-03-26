import { Component } from '@angular/core';
import { Note } from '../models/student';
import { StudentService} from '../services/student.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  notes : Note [];
  constructor(private studentServcie : StudentService) {
      this.notes = studentServcie.getNotes();
  }
}
