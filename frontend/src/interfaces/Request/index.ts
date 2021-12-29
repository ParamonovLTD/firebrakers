export type Status = 'approved' | 'rejected' | 'pending';

export interface RequestDataParsed {
  status: Status;
  fullName: string;
  key: number;
  address1: string;
  address2: string;
  city: string;
  companyRegistrationNumber: string;
  country: string;
  comment: string;
  VATNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  location: string;
  media: File[];
  name: string;
  phoneForVerification: string;
  primaryContactPerson: string;
  state: string;
  type: string;
  zipCode: string;
}

export interface Request {
  id: number;
  status: Status;
  data: string;
  createdAt: null | string;
  updatedAt: null | string;
  firstName?: any;
  lastName?: any;
  email?: any;
  isSellerCompleted?: any;
  isActive?: any;
}