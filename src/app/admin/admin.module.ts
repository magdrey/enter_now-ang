import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StaffComponent } from './staff/staff.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminSideNavComponent } from './layout/admin-side-nav/admin-side-nav.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { StatCardComponent } from './dashboard/component/stat-card/stat-card.component';
import { ComerItemComponent } from './dashboard/component/comer-item/comer-item.component';
import { TopComersListComponent } from './dashboard/component/top-comers-list/top-comers-list.component';
import { StaffTableComponent } from './staff/staff-table/staff-table.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { AssistedSignInComponent } from './sign-in/component/assisted-sign-in/assisted-sign-in.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SignInComponent,
    StaffComponent,
    ReportComponent,
    LoginComponent,
    LayoutComponent,
    AdminLayoutComponent,
    AdminSideNavComponent,
    AdminHeaderComponent,
    StatCardComponent,
    ComerItemComponent,
    TopComersListComponent,
    StaffTableComponent,
    StaffDetailsComponent,
    AssistedSignInComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
