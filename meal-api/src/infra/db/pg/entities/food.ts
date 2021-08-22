import { Column, Entity } from 'typeorm';

import PgBaseModel from './base-model';

export enum FOOD_GROUP {
  CEREALS = 'cereals',
  VEGETABLES = 'vegetables',
  FRUITS = 'fruits',
  FATS_AND_OILS = 'fats_and_oils',
  FISH_AND_SEAFOOD = 'fish_and_seafood',
  MEAT = 'meat',
  MILK = 'milk',
  BEVERAGES = 'beverages',
  EGGS = 'eggs',
  SUGARY = 'sugary',
  MISC = 'misc',
  INDUSTRIALIZED = 'industrialized',
  PREPARED = 'prepared',
  LEGUMES = 'legumes',
  NUTS_AND_SEEDS = 'nuts_and_seeds',
}

@Entity('foods')
export class PgFood extends PgBaseModel {
  @Column({ unique: true })
  taco_id: number;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: FOOD_GROUP })
  group:
    | 'cereals'
    | 'vegetables'
    | 'fruits'
    | 'fats_and_oils'
    | 'fish_and_seafood'
    | 'meat'
    | 'milk'
    | 'beverages'
    | 'eggs'
    | 'sugary'
    | 'misc'
    | 'industrialized'
    | 'prepared'
    | 'legumes'
    | 'nuts_and_seeds';

  @Column({ nullable: true })
  energy?: number;

  @Column({ nullable: true })
  protein?: number;

  @Column({ nullable: true })
  lipid?: number;

  @Column({ nullable: true })
  carbohydrate?: number;

  @Column({ nullable: true })
  fiber?: number;

  @Column({ nullable: true })
  sodium?: number;
}
