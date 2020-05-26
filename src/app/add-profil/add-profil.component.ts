import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import Teachers from '../../models/teachers';
import { TeachersService} from '../../services/service-profile.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {

  teachers: Teachers;
  public formulaire: FormGroup;

  constructor(public activeModal: NgbActiveModal, private form: FormBuilder, private teachersService: TeachersService) {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
    this.teachers = new Teachers();
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
    this.teachersService.addTeacher(this.teachers).subscribe((teachers: Teachers) => {
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
