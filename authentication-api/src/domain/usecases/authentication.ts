import { AuthenticationModel } from '@/domain/models';

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AuthenticationModel>;
}