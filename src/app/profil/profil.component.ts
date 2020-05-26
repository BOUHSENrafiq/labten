import {Component, OnInit} from '@angular/core';
import Teachers from '../../models/teachers';
import {TeachersService} from '../../services/service-profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AddProfilComponent} from '../add-profil/add-profil.component';
import { faUserPlus, faUserMinus, faUserEdit} from '@fortawesome/free-solid-svg-icons';
import {EditProfilComponent} from '../edit-profil/edit-profil.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
// Symbols:
  addSymbol = faUserPlus; // add user symbol
  deleteSymbol = faUserMinus; // delete user symbol
  editSymbol = faUserEdit; // edit user symbol

  teachers: Teachers[];

  constructor(private teachersService: TeachersService, private modalService: NgbModal) {
  }

  /**
   *  to bring the model view of addProfilComponent
   */
  openFormAddTeachers() {
    const modalRef = this.modalService.open(AddProfilComponent);
    modalRef.result.then( teacher => {
      console.log('result of module', teacher);
    });
  }

  /**
   * Bing the list of teachers and show it
   */
  ngOnInit(): void {
    this.teachersService.getListOfTeachers().subscribe((teachers: Teachers[]) => {
      this.teachers = teachers;
      console.log('Participants: ', JSON.stringify(this.teachers));
    });
  }

  /**
   * Delete a teacher with this specific id
   * @param id
   */
  deleteTeacher(id: number){
    this.teachersService.deleteTeacher(id).subscribe(() => {
      console.log('Teacher: ', id, ' is deleted from the list');
    });
  }

  /**
   * Show the model view of EditProfilComponent, open form edit-profil
   * and
   * Update infos about a teacher who has this specific id
   * @param id
   */
  editTeacher(id: number) {
    const teacher = this.teachers.find((part) => part.id === id);
    console.log('update teacher: ', JSON.stringify(teacher));
    if (teacher === undefined) {
      console.log('there is no participant with this', id);
      return;
    }
    const modalRef = this.modalService.open(EditProfilComponent);
    modalRef.componentInstance.teachers = teacher;
    modalRef.result.then(participant => {
      console.log('result of module', teacher);
    });
  }
}
