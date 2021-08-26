import { PatientModel } from '@/domain/auth/models';

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<PatientModel>;
}
