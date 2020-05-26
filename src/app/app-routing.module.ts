import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import components
import { ListComponent} from './list/list.component';

const routes: Routes = [
  { path: 'participants/list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
