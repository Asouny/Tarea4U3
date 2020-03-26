import { Component, OnInit } from '@angular/core';
import {Note} from '../../models/student';
import {StudentService} from '../../services/student.service';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  myForm: FormGroup;
  submitted = false;


  constructor(private service: StudentService, private fb: FormBuilder) { }

  ngOnInit() {
   this.initializaFormm();
  }

  saveNote(){
    this.submitted = true;
    if(this.myForm.valid){
      this.service.newNote(
        {
          title : this.myForm.get('title').value,
          content: this.myForm.get('content').value,
          date: new Date().toISOString()
        }
      );
    }
  }

  initializaFormm(): void{
    this.myForm = this.fb.group(
      {
        title: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        content: ['', Validators.compose([Validators.required])]
      }
    );
  }

}
