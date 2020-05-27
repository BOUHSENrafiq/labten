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
  /**
   * @property addSymbol
   * @property deleteSymbol
   * @property editSymbol
   */
  addSymbol = faUserPlus; // icon add user
  deleteSymbol = faUserMinus; // icon delete user
  editSymbol = faUserEdit; // icon edit user

  teachers: Teachers[];

  constructor(private teachersService: TeachersService, private modalService: NgbModal) {
  }

  /**
   *  to bring the model view of addProfilComponent
   *  @method [openFormAddTeachers]
   */
  openFormAddTeachers() {
    const modalRef = this.modalService.open(AddProfilComponent);
    modalRef.result.then( teacher => {
      console.log('result of module', teacher);
    });
  }

  /**
   * Callback: Bing the list of teachers and show it
   * @method [ngOnInit]
   */
  ngOnInit(): void {
    this.teachersService.getListOfTeachers().subscribe((teachers: Teachers[]) => {
      this.teachers = teachers;
      console.log('Participants: ', JSON.stringify(this.teachers));
    });
  }

  /**
   * Delete a teacher with this specific id
   * @method [deleteTeacher]
   * @param id
   */
  deleteTeacher(id: number){
    this.teachersService.deleteTeacher(id).subscribe(() => {
      console.log('Teacher: ', id, ' is deleted from the list');
    });
  }

  /**
   * Show the model view of EditProfilComponent
   * @method [editTeacher]
   * @param id
   */
  editTeacher(id: number) {
    const teacher = this.teachers.find((part) => part.id === id);
    console.log('update teacher: ', JSON.stringify(teacher));
    if (teacher === undefined) {
      console.log('There is no participant with this', id);
      return;
    }
    const modalRef = this.modalService.open(EditProfilComponent);
    modalRef.componentInstance.teachers = teacher;
    modalRef.result.then(teacheeer => {
      console.log('result: ', teacher);
    });
  }
}
