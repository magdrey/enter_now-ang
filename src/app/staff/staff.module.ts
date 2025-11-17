import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { FaceCaptureComponent } from './face-capture/face-capture.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import {
  ReactiveFormsModule,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FaceCaptureComponent, SignInComponent, SignOutComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    ɵInternalFormsSharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class StaffModule {}
