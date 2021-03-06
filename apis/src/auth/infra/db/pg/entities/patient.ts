import { Column, Entity } from 'typeorm';

import { PgAccount } from './account';

@Entity('patients')
export class PgPatient extends PgAccount {
  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'int' })
  height: number;

  @Column({ type: 'int' })
  glycemicTarget: number;

  @Column({ type: 'int', nullable: true })
  insulinUnitsPerDay?: number;

  @Column({ type: 'int', nullable: true })
  sensibilityFactor?: number;

  @Column({ type: 'int', nullable: true })
  insulinCarbohydrateRatio?: number;
}
