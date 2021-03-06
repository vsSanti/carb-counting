import { Column } from 'typeorm';

import PgBaseModel from '@/common/infra/db/pg/entities/base-model';

export enum ACCOUNT_SEX {
  MASCULINE = 'masculine',
  FEMININE = 'feminine',
}

export class PgAccount extends PgBaseModel {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({})
  birthDate: Date;

  @Column({ type: 'enum', enum: ACCOUNT_SEX })
  sex: 'masculine' | 'feminine';
}
