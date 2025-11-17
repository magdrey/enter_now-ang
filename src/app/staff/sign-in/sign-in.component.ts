import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private fb: FormBuilder) {}

  signInForm!: FormGroup;

  buildForm() {
    this.signInForm = this.fb.group({
      staffId: ['exampleStaffID', [Validators.required]],
      password: [
        'examplePassword',
        [Validators.required, Validators.minLength(8)],
      ],
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  submitForm() {
    console.log(this.signInForm.value);
  }
}
