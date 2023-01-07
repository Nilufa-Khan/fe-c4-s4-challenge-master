import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NoteComponent } from './note/note.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes: Routes = [{
  path: "home",
  component: DashboardComponent,
 
},
{
  path: "edit-note/:id",
  component: EditNoteComponent,

},
{
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
},
{
  path: "**",
  component: NotfoundComponent
}]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



