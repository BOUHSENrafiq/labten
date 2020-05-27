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
/**
 * @class [export EditAssignementsComponent]
 */
export class EditAssignementsComponent implements OnInit {
  public assignments: Assignments;

  /**
   * @constructors [constructor]
   * @param {AssignmentsService} assignmentsService
   * @param {NgbActiveModal} activeModal
   */
  constructor(
    private assignmentsService: AssignmentsService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  /**
   * Update/Edit assignments
   * @method [submit]
   * @param {NgForm} form
   */
  submit(form: NgForm){
    console.log('before server request', JSON.stringify(this.assignments));
    this.assignmentsService.updateAssignment(this.assignments).subscribe((assignments: Assignments) => {
      this.activeModal.close(assignments);
    });
  }
}
