import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import components
import { ListComponent} from './list/list.component';
import {ProfilComponent} from './profil/profil.component';

const routes: Routes = [
  { path: 'teachers/list', component: ProfilComponent },
  { path: 'participants/list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
