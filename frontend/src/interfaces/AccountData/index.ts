import { User } from '../Login';

export interface AccountData {
  // id: number;
  // firstName: string;
  // lastName: string;
  // phone: string;
  // email: string;
  // image: string | null;
  // thumb: string | null;
  // role: string;
  // language: string;
  // emailConfirmed: boolean;
  // phoneConfirmed: boolean;
  // sellerApprovedAt: null | string;
  // stripeCustomerId: null | string;
  // createdAt: null | string;
  // updatedAt: null | string;
  // businesses: any;

  VATNumber: string;
  account: User;
  businessLanguages: string[];
  companyRegNumber: string;
  dateOfBirth: string | null;
  description: string | null;
  displayName: string;
  id: number;
  image: File | string | null;
  location: string;
  name: string;
  phone: string | null;
  phoneForVerification: string;
  primaryContactPerson: string;
  stripeCustomerId: number | string | null;
  thumb: File | string | null;
}


export interface BuyerValuesForEdit {
  accountId: number,
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  language: string,
}

