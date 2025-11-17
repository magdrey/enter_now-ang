import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../services/admin.service';
import { IStaff } from '../../interfaces/staff';
import { AssistedSignInComponent } from './component/assisted-sign-in/assisted-sign-in.component';

export interface PeriodicElement {
  id: string;
  name: string;
  department: string;
  entryTime: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  standalone: false,
})
export class SignInComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'entryTime',
    'status',
    'email',
    'address',
  ];
  dataSource!: IStaff[];

  private readonly TARGET_TIME = 9 * 60;

  constructor(private adminServices: AdminService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.onGetSignIns();
  }

  onGetSignIns() {
    this.adminServices.getStaff().subscribe((res) => {
      console.log(res);

      const processedData = res.map((staff) => {
        const newtime = this.generateRandomEntryTime();
        return {
          ...staff,
          entryTime: newtime,
          status: this.calculateStatus(newtime), // Calculate status
        };
      });

      this.dataSource = processedData.reverse();
    });
  }

  private calculateStatus(entryTime: string): 'Early' | 'On Time' | 'Late' {
    if (!entryTime) return 'Late'; // Handle missing time

    try {
      const [hoursStr, minutesStr] = entryTime.split(':');
      const entryHours = parseInt(hoursStr, 10);
      const entryMinutes = parseInt(minutesStr, 10);

      const entryTimeInMinutes = entryHours * 60 + entryMinutes;

      if (entryTimeInMinutes <= this.TARGET_TIME - 15) {
        return 'Early';
      } else if (entryTimeInMinutes <= this.TARGET_TIME) {
        return 'On Time';
      } else {
        return 'Late';
      }
    } catch (e) {
      console.error('Error parsing entry time:', entryTime, e);
      return 'Late';
    }
  }

  openManualSignInDialog(): void {
    const dialogRef = this.dialog.open(AssistedSignInComponent, {
      width: '400px',
      height: '400px',
      position: { right: '0' },
      data: {
        /* ... */
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const mockProps = this.generateMockStaffProperties(result.username);

        const fullStaffData = {
          ...mockProps,
          ...result,
        };

        this.adminServices.createStaff(fullStaffData).subscribe({
          next: (newStaff) => {
            const randomTime = this.getCurrentSystemTime();
            const calculatedStatus = this.calculateStatus(randomTime);

            const staffWithTimeAndStatus: IStaff = {
              ...newStaff,
              entryTime: randomTime,
              status: calculatedStatus,
            };

            this.dataSource = [staffWithTimeAndStatus, ...this.dataSource];
          },
          error: (err) => {
            console.error('Error adding staff:', err);
          },
        });
      }
    });
  }

  private getCurrentSystemTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  private generateRandomEntryTime(): string {
    const targetHour = 9;
    const targetMinute = 0;

    // Randomly set the sign-in time between 8:30 AM (Early) and 9:15 AM (Late)
    const baseMinutes = targetHour * 60 + targetMinute - 30; // Base: 8:30 AM (510 minutes)
    const rangeMinutes = 45; // Range up to 9:15 AM (555 minutes)

    const randomOffset = Math.floor(Math.random() * rangeMinutes); // 0 to 44
    const totalMinutes = baseMinutes + randomOffset;

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const seconds = Math.floor(Math.random() * 60);

    // Format as "HH:MM:SS"
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  private generateRandomFullName(): string {
    const firstNames = [
      'Alex',
      'Morgan',
      'Taylor',
      'Jamie',
      'Jordan',
      'Riley',
      'Skyler',
      'Avery',
    ];
    const lastNames = [
      'Smith',
      'Jones',
      'Miller',
      'Davis',
      'Garcia',
      'Rodriguez',
      'Wilson',
      'Brown',
    ];

    const getRandomElement = (arr: string[]) =>
      arr[Math.floor(Math.random() * arr.length)];

    return `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
  }

  private generateMockStaffProperties(username: string): Partial<IStaff> {
    const streetNames = [
      'Main St',
      'Oak Ave',
      'Pine Ln',
      'Cedar Rd',
      'Maple Blvd',
    ];
    const cityNames = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
    const companyNames = [
      'Tech Solutions Co.',
      'Global Services Ltd.',
      'Creative Design Hub',
      'Future Innovations',
    ];

    const getRandomElement = (arr: string[]) =>
      arr[Math.floor(Math.random() * arr.length)];
    const getRandomNumber = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const generatedName = this.generateRandomFullName();

    return {
      name: generatedName,
      email: `${
        username ? username : generatedName.toLowerCase().replace(/ /g, '.')
      }@example.com`,
      phone: `1-${getRandomNumber(100, 999)}-${getRandomNumber(
        100,
        999
      )}-${getRandomNumber(1000, 9999)}`,
      website: `${username.toLowerCase()}.com`,

      address: {
        street: `${getRandomNumber(100, 999)} ${getRandomElement(streetNames)}`,
        suite: 'Apt. 556',
        city: getRandomElement(cityNames),
        zipcode: `${getRandomNumber(10000, 99999)}-${getRandomNumber(
          1000,
          9999
        )}`,
      } as any,

      company: {
        name: getRandomElement(companyNames),
        catchPhrase: 'Innovating the Future Today',
        bs: 'synergize scalable web services',
      } as any,
    };
  }
}
