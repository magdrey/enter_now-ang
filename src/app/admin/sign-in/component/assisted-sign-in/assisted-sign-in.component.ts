import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-assisted-sign-in',
  templateUrl: './assisted-sign-in.component.html',
  styleUrl: './assisted-sign-in.component.css',
  standalone: false,
})
export class AssistedSignInComponent {
  signInForm = new FormGroup({
    staffId: new FormControl('', Validators.required),
    username: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<AssistedSignInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(); // Close the dialog without sending data
  }

  onSignInSubmit(): void {
    if (this.signInForm.valid) {
      // Close the dialog and pass the form data back to the parent component
      this.dialogRef.close(this.signInForm.value);
    }
  }
}
