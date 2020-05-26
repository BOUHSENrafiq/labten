import { Component, OnInit } from '@angular/core';
import { AssignmentsService} from '../../services/assignments.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import Assignments from '../../models/assignments';

@Component({
  selector: 'app-edit-assignements',
  templateUrl: './edit-assignements.component.html',
  styleUrls: ['./edit-assignements.component.css']
})
export class EditAssignementsComponent implements OnInit {
  public assignments: Assignments;
  constructor(
    private assignmentsService: AssignmentsService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  submit(form: NgForm){
    console.log('before server request', JSON.stringify(this.assignments));
    this.assignmentsService.updateAssignment(this.assignments).subscribe((assignments: Assignments) => {
      this.activeModal.close(assignments);
    });
  }
}
