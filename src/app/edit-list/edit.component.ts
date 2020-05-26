import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ParticipantsService} from '../../services/participants.service';
import Participants from '../../models/participants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public participants: Participants;
  public formulaire: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private participantsService: ParticipantsService,
              public activeModal: NgbActiveModal,
              private form: FormBuilder,
              ) { }

  ngOnInit(): void {
    this.formulaire = this.form.group({
      name: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('before server request', JSON.stringify(this.participants));
    this.participantsService.updateParticipant(this.participants).subscribe((participants: Participants) => {
      this.activeModal.close(participants);
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Verify the syntax' : '';
  }

}
