import { Component, OnInit } from '@angular/core';
import Assignments from '../../models/assignments';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssignmentsService} from '../../services/assignments.service';
import { AddAssignementsComponent} from '../add-assignements/add-assignements.component';
import { EditAssignementsComponent} from '../edit-assignements/edit-assignements.component';
import { faLink, faUnlink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignements',
  templateUrl: './assignements.component.html',
  styleUrls: ['./assignements.component.css']
})
export class AssignementsComponent implements OnInit {
  addLinkSymbol = faLink;
  deleteLinkSymbol = faUnlink;

  assignments: Assignments[];
  constructor(
    private assignmentsService: AssignmentsService,
    private modalService: NgbModal) { }

  showModalAddAssignments() {
    const modalRef = this.modalService.open(AddAssignementsComponent);
    modalRef.result.then( Devoir => {
      console.log('result of module', Devoir);
    });
  }

  deleteAssignments(id: number){
    this.assignmentsService.deleteAssignments(id).subscribe(() => {
      console.log('assignments with this id', id, 'is deleted');
    });
  }

  showModalEditAssignments(id: number){
    console.log('edit assignment id: ', id);
    const assignments = this.assignments.find((part) => part.id === id);
    console.log('Edit assignment: ', JSON.stringify(assignments));
    if (assignments === undefined){
      console.log('can\'t find assignment with this id ', id);
      return;
    }

    const modalRef = this.modalService.open(EditAssignementsComponent);
    modalRef.componentInstance.assignments = assignments;
    modalRef.result.then( assignment => {
      console.log('result edit module', assignments);
    });
  }
// generate Youtube Embedded Url
  getUrl(url: string): string {
    let videoUrl = url.split('=')[1];
    videoUrl = 'https://www.youtube.com/embed/' + videoUrl;
    return videoUrl;
  }

  ngOnInit(): void {
    this.assignmentsService.getAssignments().subscribe((assignments: Assignments[]) => {
      this.assignments = assignments;
      console.log('Assignments: ', JSON.stringify(this.assignments));
    });

  }

}
