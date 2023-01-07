import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { RouterServiceService}   from '../services/router-service.service'

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  


  constructor(private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private routeService: RouterServiceService ) { }
  
 

  note: Note = { title: "", content: "" };
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteService.getNote1(+id).subscribe(data => {
        this.note = data;
      })
    });
  }

  editNote() {
    this.noteService.editPost(this.note?.id, this.note).subscribe(data => {
      this.note = data;
      this.routeService.toHome();
    })
  }

  deleteNote(){
    this.noteService.deletePost(this.note?.id).subscribe(data =>{
      console.log("test delete")
    });
    this.routeService.toHome();
  }

}
