import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  getNote():Observable<Array<Note>>{
    return this.http.get<Array<Note>>("http://localhost:3000/notes");
  }

  getNote1(id?: number) : Observable<Note> {
    return this.http.get<Note>(`${"http://localhost:3000/notes"}/${id}`);
  }

  postNote(note:any){
    console.log(note)
    console.log("poste method")
    return this.http.post("http://localhost:3000/notes",note)
  }

  editPost(id?: number, note?: any) {
    return this.http.put<Note>(`${"http://localhost:3000/notes"}/${id}`,note);
  }

  deletePost(id?: number){
    console.log("test deletepost")
    return this.http.delete("http://localhost:3000/notes/"+id)
  }


}
