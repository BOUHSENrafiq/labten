import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {AddComponent} from './add-list/add.component';
import {EditComponent} from './edit-list/edit.component';
import {ListComponent} from './list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddProfilComponent} from './add-profil/add-profil.component';
import {EditProfilComponent} from './edit-profil/edit-profil.component';
import {ProfilComponent} from './profil/profil.component';
import { AddAssignementsComponent } from './add-assignements/add-assignements.component';
import { EditAssignementsComponent } from './edit-assignements/edit-assignements.component';
import { AssignementsComponent } from './assignements/assignements.component';
import {MatButtonModule} from '@angular/material/button';
import {SafeUrlPipe} from '../services/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    AddProfilComponent,
    EditProfilComponent,
    ProfilComponent,
    AddAssignementsComponent,
    EditAssignementsComponent,
    AssignementsComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    FontAwesomeModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
