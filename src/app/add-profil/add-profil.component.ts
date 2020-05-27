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
/**
 * @class [export AddProfilComponent]
 */
export class AddProfilComponent implements OnInit {

  teachers: Teachers;
  public formulaire: FormGroup;

  /**
   * injectable services
   * @param {NgbActiveModal} activeModal
   * @param {FormBuilder} form
   * @param {TeachersService} teachersService
   */
  constructor(public activeModal: NgbActiveModal,
              private form: FormBuilder,
              private teachersService: TeachersService) {
  }

  /**
   * @property email
   */
  email = new FormControl('', [Validators.required, Validators.email]);

  /**
   * @method [ngOnInit]
   */
  ngOnInit(): void {
    this.teachers = new Teachers();
    this.formulaire = this.form.group({
      name: ['', [Validators.required]], // make the name a required area
      firstName: ['', [Validators.required]], // make the firstName a required area
      age: ['', [Validators.required]], // make the age a required area
      email: ['', [Validators.required, Validators.email]], // make the email a required area with email validators (syntax...)
      phoneNumber: ['', [Validators.required]], // make the phoneNumber a required area
      subject: ['', [Validators.required]], // make the suject a required area
    });
  }

  /**
   * Add new teacher
   *  @method [onSubmit]
   */
  onSubmit() {
    console.log('before server request', JSON.stringify(this.teachers));
    this.teachersService.addTeacher(this.teachers).subscribe((teachers: Teachers) => {
      this.activeModal.close(teachers);
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
