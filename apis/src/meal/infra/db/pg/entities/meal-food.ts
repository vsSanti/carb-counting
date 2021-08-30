import { Column, Entity, ManyToOne } from 'typeorm';

import PgBaseModel from '@/common/infra/db/pg/entities/base-model';

import { PgMeal } from './meal';
import { PgFood } from './food';

@Entity('meal_foods')
export class PgMealFood extends PgBaseModel {
  @ManyToOne(() => PgMeal, (meal) => meal.mealFoods)
  meal: PgMeal;

  @ManyToOne(() => PgFood, (food) => food.mealFoods)
  food: PgFood;

  @Column({ type: 'decimal' })
  weight: number;

  @Column({ type: 'decimal' })
  carbohydrateTotal: number;
}
