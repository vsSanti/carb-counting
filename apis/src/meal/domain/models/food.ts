import { BaseModel } from '@/common/domain/base';

type Food = {
  taco_id: number;
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
  description: string;
  energy?: number;
  protein?: number;
  lipid?: number;
  carbohydrate?: number;
  fiber?: number;
  sodium?: number;
};

export type FoodModel = Food & BaseModel;
