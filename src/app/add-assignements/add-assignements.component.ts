import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssignmentsService} from '../../services/assignments.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Assignments from '../../models/assignments';

@Component({
  selector: 'app-add-assignements',
  templateUrl: './add-assignements.component.html',
  styleUrls: ['./add-assignements.component.css']
})
/**
 * @class [export AddAssignementsComponent]
 */
export class AddAssignementsComponent implements OnInit {
  assignments: any;

  /**
   * @constructor
   * @param {AssignmentsService} assignmentsService
   * @param {NgbActiveModal} activeModal
   */
  constructor(
    private assignmentsService: AssignmentsService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.assignments = {};
  }
  /**
   * submit and add a new assignment
   * @method [submit]
   * @param form
   */
  submit(form: NgForm) {
    console.log('before server request', JSON.stringify(this.assignments));
    this.assignmentsService.addAssignment(this.assignments).subscribe((assignments: Assignments) => {
      this.activeModal.close(assignments);
    });
  }
}
