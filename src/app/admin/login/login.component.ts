import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false,
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['exampleEmail@mail.com', [Validators.required, Validators.email]],
      password: [
        'examplePassword',
        [Validators.required, Validators.minLength(8)],
      ],
    });
  }

  companyName: string = 'Enter Now';
  showEmail: boolean = false;
  cars: string[] = ['volvo', 'bmw', 'audi', 'mercedes'];
  userCase: string = 'staff';

  get email() {
    return this.loginForm.get('email');
  }

  submitForm() {
    console.log(this.loginForm.value);
    this.router.navigate(['/admin/home/dashboard']);
  }
}
