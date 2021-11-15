import { Column, Entity, OneToMany } from 'typeorm';

import PgBaseModel from '@/common/infra/db/pg/entities/base-model';
import { PgMealFood } from './meal-food';

@Entity('meals')
export class PgMeal extends PgBaseModel {
  @OneToMany(() => PgMealFood, (mealFood) => mealFood.meal)
  mealFoods: PgMealFood[];

  @Column({ type: 'uuid' })
  patientId: string;

  @Column({ nullable: true })
  patientInsulinUnitsPerDay: number;

  @Column({ nullable: true })
  patientSensibilityFactor?: number;

  @Column({ nullable: true })
  patientInsulinCarbohydrateRatio?: number;

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
