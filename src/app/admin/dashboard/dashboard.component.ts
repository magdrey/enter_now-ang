import { Component } from '@angular/core';
import { StaffMember } from './component/comer-item/comer-item.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: false,
})
export class DashboardComponent {
  public userName: string = 'Alex Johnson';
  public totalStaff: number = 500;

  public statsData = {
    signIn: 490,
    earlyStaff: { count: 120, percentage: (120 / 500) * 100 },
    lateStaff: { count: 30, percentage: (30 / 500) * 100 },
    suspendedStaff: { count: 5, percentage: (5 / 500) * 100 },
  };

  public topEarlyComers: StaffMember[] = [
    { id: '1001', name: 'Sara Connor', department: 'HR' },
    { id: '1002', name: 'John Doe', department: 'IT' },
    { id: '1003', name: 'Jane Smith', department: 'Finance' },
    { id: '1004', name: 'mentos White', department: 'IT' },
    { id: '1005', name: 'Alpenliebe Caramel', department: 'Finance' },
  ];

  public topLateComers: StaffMember[] = [
    { id: '2001', name: 'Michael Scott', department: 'Sales' },
    { id: '2002', name: 'Dwight Schrute', department: 'Marketing' },
    { id: '2003', name: 'Pam Beesly', department: 'Design' },
    { id: '2004', name: 'Mister Carter', department: 'Marketing' },
    { id: '2005', name: 'TT james', department: 'Marketing' },
  ];
}
