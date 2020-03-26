import { Component } from '@angular/core';
import { Note } from '../models/student';
import { StudentService} from '../services/student.service';





@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
notes : Note [];
  constructor(private studentServcie : StudentService) {
      this.notes = studentServcie.getNotes();

  }

}
