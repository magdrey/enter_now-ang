import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IDeduction,
  ISignInRecord,
  IStaff,
  IStaffDetails,
} from '../interfaces/staff';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  getStaff(): Observable<IStaff[]> {
    return this.httpClient.get<IStaff[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  createStaff(staff: IStaff): Observable<IStaff> {
    return this.httpClient.post<IStaff>(
      'https://jsonplaceholder.typicode.com/users',
      staff
    );
  }

  editStaff(id: number, payload: Partial<IStaff>): Observable<IStaff> {
    return this.httpClient.put<IStaff>(
      `https://jsonplaceholder.typicode.com/user/${id}`,
      payload
    );
  }

  deleteStaff(id: number): Observable<IStaff> {
    return this.httpClient.delete<IStaff>(
      `https://jsonplaceholder.typicode.com/user/${id}`
    );
  }

  getStaffById(id: number): Observable<IStaffDetails | undefined> {
    return this.getStaff().pipe(
      map((staffList: IStaff[]) => {
        // <-- use IStaff[] instead of IStaff
        const staff = staffList.find((s) => s.id === id);
        if (!staff) return undefined;

        // now fabricate the extra details
        const randomSignIns = this.generateRandomSignIns();
        const randomDeductions = this.generateRandomDeductions();

        const staffDetails: IStaffDetails = {
          ...staff,
          signInCount: randomSignIns.length,
          latenessCount: randomSignIns.filter((r) => r.minutesLate > 0).length,
          totalDeductions: randomDeductions.reduce((a, d) => a + d.amount, 0),
          signInHistory: randomSignIns,
          deductions: randomDeductions,
        };

        return staffDetails;
      })
    );
  }

  private generateRandomSignIns(): ISignInRecord[] {
    const records: ISignInRecord[] = [];
    const total = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < total; i++) {
      const late = Math.random() > 0.7 ? Math.floor(Math.random() * 20) : 0;
      records.push({
        id: crypto.randomUUID(),
        dateTime: new Date(Date.now() - i * 86400000).toISOString(),
        minutesLate: late,
        deductionAmount: late > 0 ? late * 50 : 0,
        deductionReason: late > 0 ? 'Late arrival' : undefined,
        note: late > 0 ? 'late' : 'On time',
      });
    }
    return records;
  }

  private generateRandomDeductions(): IDeduction[] {
    const deductions: IDeduction[] = [];
    const total = Math.floor(Math.random() * 3);
    for (let i = 0; i < total; i++) {
      const amount = Math.floor(Math.random() * 5000) + 1000;
      deductions.push({
        amount,
        reason: 'Policy violation',
        dateApplied: new Date(Date.now() - i * 2592000000).toISOString(),
      });
    }
    return deductions;
  }
}
