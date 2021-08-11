import { Column, Entity } from 'typeorm';

import { PgAccount } from './account';

@Entity()
export class PgPatient extends PgAccount {
  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'int' })
  height: number;

  @Column({ type: 'int' })
  glycemicTarget: number;

  @Column({ type: 'int' })
  insulinUnitsPerDay: number;
}
