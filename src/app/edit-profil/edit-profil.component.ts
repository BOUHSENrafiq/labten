import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TeachersService} from '../../services/service-profile.service';
import Teachers from '../../models/teachers';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
  public teachers: Teachers;
  public formulaire: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private teachersService: TeachersService,
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
      subject: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('before server request', JSON.stringify(this.teachers));
    this.teachersService.updateTeacher(this.teachers).subscribe((teachers: Teachers) => {
      this.activeModal.close(teachers);
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Verify the syntax' : '';
  }
}
