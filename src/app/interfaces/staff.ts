export interface IStaff {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  entryTime?: string;
  status?: 'Early' | 'On Time' | 'Late';
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ISignInRecord {
  id: string;
  dateTime: string;
  minutesLate: number;
  deductionAmount?: number;
  deductionReason?: string;
  note?: string;
}

export interface IDeduction {
  amount: number;
  reason: string;
  dateApplied: string;
}

export interface IStaffDetails extends IStaff {
  signInCount: number;
  latenessCount: number;
  totalDeductions?: number;
  signInHistory: ISignInRecord[];
  deductions?: IDeduction[];
}
