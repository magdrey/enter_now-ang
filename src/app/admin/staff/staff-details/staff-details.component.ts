import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { IStaffDetails } from '../../../interfaces/staff';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.css',
  standalone: false,
})
export class StaffDetailsComponent implements OnInit {
  staff?: IStaffDetails;

  constructor(
    private route: ActivatedRoute,
    private adminServices: AdminService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    console.log(id);
    if (id) {
      this.adminServices.getStaffById(id).subscribe((data) => {
        this.staff = data;
        console.log('Staff Details:', this.staff);
      });
    }
  }
}
