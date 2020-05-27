import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import Participants from '../../models/participants';
import { ParticipantsService } from 'src/services/participants.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
/**
 * @class [export AddComponent]
 */
export class AddComponent implements OnInit {
   participants: Participants;
   public formulaire: FormGroup;

  /**
   * import injectable services
   * @param {NgbActiveModal} activeModal
   * @param {FormBuilder} form
   * @param {ParticipantsService} participantsService
   */
   constructor(public activeModal: NgbActiveModal,
               private form: FormBuilder,
               private participantsService: ParticipantsService) { }

   email = new FormControl('', [Validators.required, Validators.email]);

  /**
   * @method [ngOnInit]
   */
  ngOnInit(): void {
    this.participants = new Participants();
    this.formulaire = this.form.group({
      name: ['', [Validators.required]], // make the name a required area
      firstName: ['', [Validators.required]], // make the firstName a required area
      age: ['', [Validators.required]], // make the age a required area
      email: ['', [Validators.required, Validators.email]], // make the email a required area with email validators (syntax...)
      phoneNumber: ['', [Validators.required]], // make the phoneNumber a required area
    });
  }

  /**
   * Add new participant
   * @method [onSubmit]
   */
  onSubmit(){
    console.log('before server request', JSON.stringify(this.participants));
    this.participantsService.addParticipant(this.participants).subscribe((participants: Participants) => {
      this.activeModal.close(participants);
    });
  }

  /**
   * Generate a message that show to user that the email field is an obligatory field to fill in
   * Generate an error message if the email doesn't match an email syntax
   * @method [getErrorMessage]
   */
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Verify the syntax' : '';
  }
}
