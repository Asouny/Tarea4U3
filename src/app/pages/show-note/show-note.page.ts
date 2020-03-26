import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.page.html',
  styleUrls: ['./show-note.page.scss'],
})
export class ShowNotePage implements OnInit {
  notes: Note[] = [];

  constructor(private studentService: StudentService, private router: Router) {
    this.notes = this.studentService.getNotes();
  }

  ngOnInit() {
  }

}
