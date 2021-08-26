import { PatientModel } from '@/domain/models/auth';

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<PatientModel>;
}
