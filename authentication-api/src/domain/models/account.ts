import { BaseModel } from './base';

type Account = {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
};

export type AccountModel = Account & BaseModel;
