import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IStaff, IStaffDetails } from '../../../interfaces/staff';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrl: './staff-table.component.css',
  standalone: false,
})
export class StaffTableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'username', 'email', 'address'];
  dataSource!: IStaff[];

  constructor(private adminServices: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.onGetSignIns();
  }

  onGetSignIns() {
    this.adminServices.getStaff().subscribe((res) => {
      console.log(res);
      this.dataSource = res;
    });
  }

  openDashboard(staff: IStaff) {
    this.router.navigate([`/admin/home/staff/${staff.id}`]);
  }
}
