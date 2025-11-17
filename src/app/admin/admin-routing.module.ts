import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffComponent } from './staff/staff.component';
import { ReportComponent } from './report/report.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { StaffTableComponent } from './staff/staff-table/staff-table.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'staff',
        component: StaffComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: StaffTableComponent },
          { path: ':id', component: StaffDetailsComponent },
        ],
      },
      {
        path: 'report',
        component: ReportComponent,
      },
      {
        path: 'sign-ins',
        component: SignInComponent,
      },
      {
        path: 'home',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
