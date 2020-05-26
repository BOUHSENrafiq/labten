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
export class AddComponent implements OnInit {
   participants: Participants;
   public formulaire: FormGroup;
   constructor(public activeModal: NgbActiveModal, private form: FormBuilder, private participantsService: ParticipantsService) { }
   email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
    this.participants = new Participants();
    this.formulaire = this.form.group({
      name: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
    });
  }
  onSubmit(){
    console.log('before server request', JSON.stringify(this.participants));
    this.participantsService.addParticipant(this.participants).subscribe((participants: Participants) => {
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
