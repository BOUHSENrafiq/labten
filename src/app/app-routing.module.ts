import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import components
import { ListComponent} from './list/list.component';
import {ProfilComponent} from './profil/profil.component';
import {AssignementsComponent} from './assignements/assignements.component';
// add routes
const routes: Routes = [
  { path: 'teachers/list', component: ProfilComponent },
  { path: 'assignments/list', component: AssignementsComponent },
  { path: 'participants/list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
