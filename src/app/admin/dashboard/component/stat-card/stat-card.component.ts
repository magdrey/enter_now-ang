import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css',
  standalone: false,
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() percentage: number | null = null;
  @Input() icon: string = 'info';
  @Input() color: string = 'primary';
}
