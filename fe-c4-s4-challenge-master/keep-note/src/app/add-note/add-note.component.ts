import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  cardAdd:Note ={}

minDate:Date = new Date

 constructor(private noteservices:NoteService,private _snackBar: MatSnackBar) { 
  this.minDate.setDate(this.minDate.getDate()+1)
 }
  saveFruit(noteForm:any){
    let Note:Note ={
      title: noteForm.title,
      content: noteForm.content,
      date: noteForm.date,
      category: noteForm.addcategory,
      priority: noteForm.priority

    }
    console.log(noteForm.content)
    console.log(noteForm)
    console.log(noteForm.value)
    this.noteservices.postNote(noteForm).subscribe( card => {
      alert("New card Added");
      this.cardAdd = {}
    })
   }

   onSubmit(noteForm: any){
    this._snackBar.open('Note Added successfully', 'success', {​
      duration: 5000,​
      panelClass: ['mat-toolbar', 'mat-primary']​
      })
      console.log("sunb method")
      this.saveFruit(this.cardAdd)
   }
  
 

  ngOnInit(): void {
   
  }


}
