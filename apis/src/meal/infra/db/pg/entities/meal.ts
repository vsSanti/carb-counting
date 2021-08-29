import { Column, Entity } from 'typeorm';

import PgBaseModel from '@/common/infra/db/pg/entities/base-model';

@Entity('meals')
export class PgMeal extends PgBaseModel {
  @Column({ type: 'uuid' })
  patientId: string;

  @Column()
  patientInsulinUnitsPerDay: number;

  @Column()
  patientGlycemicTarget: number;

  @Column()
  glucoseMeasurement: number;

  @Column({ type: 'decimal' })
  insulinUnitsToBeApplied: number;

  @Column({ type: 'decimal', nullable: true })
  patientWeight?: number;

  @Column({ type: 'decimal', nullable: true })
  patientHeight?: number;
}
