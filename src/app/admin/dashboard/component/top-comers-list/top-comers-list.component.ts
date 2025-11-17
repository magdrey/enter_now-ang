import { Component, Input } from '@angular/core';
import { StaffMember } from '../comer-item/comer-item.component';

@Component({
  selector: 'app-top-comers-list',
  templateUrl: './top-comers-list.component.html',
  styleUrl: './top-comers-list.component.css',
  standalone: false,
})
export class TopComersListComponent {
  @Input() title: string = '';
  @Input() staff: StaffMember[] = [];
}
