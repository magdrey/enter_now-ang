import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceCaptureComponent } from './face-capture/face-capture.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';

const routes: Routes = [
  {
    path: 'face-capture',
    component: FaceCaptureComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-out',
    component: SignOutComponent,
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
