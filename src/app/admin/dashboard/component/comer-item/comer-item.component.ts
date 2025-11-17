import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comer-item',
  templateUrl: './comer-item.component.html',
  styleUrl: './comer-item.component.css',
  standalone: false,
})
export class ComerItemComponent {
  @Input() member!: StaffMember;
}

export interface StaffMember {
  id: string;
  name: string;
  department: string;
}
