import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  notes?:Note[] = [];



  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }
   
  panelOpenState = false;
}
export class ExpansionOverviewExample {
  
}
