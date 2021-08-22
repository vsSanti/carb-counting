import faker from 'faker';

import { FoodModel } from '../models';

export const mockFoodModel = (): FoodModel => ({
  id: faker.datatype.uuid(),
  createdAt: new Date(),
  description: faker.random.words(3),
  group: faker.random.arrayElement([
    'cereals',
    'vegetables',
    'fruits',
    'fats_and_oils',
    'fish_and_seafood',
    'meat',
    'milk',
    'beverages',
    'eggs',
    'sugary',
    'misc',
    'industrialized',
    'prepared',
    'legumes',
    'nuts_and_seeds',
  ]),
  taco_id: faker.datatype.number(),
  carbohydrate: faker.datatype.number({ min: 0, max: 100 }),
  energy: faker.datatype.number({ min: 0, max: 100 }),
  fiber: faker.datatype.number({ min: 0, max: 100 }),
  lipid: faker.datatype.number({ min: 0, max: 100 }),
  protein: faker.datatype.number({ min: 0, max: 100 }),
  sodium: faker.datatype.number({ min: 0, max: 100 }),
});

export const mockFoodModelList = (): FoodModel[] => [
  mockFoodModel(),
  mockFoodModel(),
  mockFoodModel(),
];
