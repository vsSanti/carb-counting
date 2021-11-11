import React, { useMemo } from 'react';

import { MealFoods } from '@/@types';

import { Card } from '@/components/Card';
import { Separator } from '@/components/Separator';

import { FoodTableText, FoodTableRow, FoodTable, FoodTableHeaderTitle } from './styles';

type Props = {
  mealFoods: MealFoods[];
};

export const FoodList: React.FC<Props> = ({ mealFoods }) => {
  const totalCarbohydrate = useMemo(() => {
    const sum = mealFoods.reduce((acc, mealFood) => acc + mealFood.carbohydrateTotal, 0);
    return sum;
  }, [mealFoods]);

  return (
    <Card>
      <FoodTable>
        <FoodTableRow>
          <FoodTableHeaderTitle>Alimentos</FoodTableHeaderTitle>
          <FoodTableHeaderTitle>Peso</FoodTableHeaderTitle>
        </FoodTableRow>

        {mealFoods.map((mealFood) => (
          <FoodTableRow key={mealFood.id}>
            <FoodTableText>{mealFood.food.description}</FoodTableText>
            <FoodTableText isBold>{mealFood.weight}g</FoodTableText>
          </FoodTableRow>
        ))}

        <Separator />

        <FoodTableRow>
          <FoodTableText isBold>Total de carboidratos</FoodTableText>
          <FoodTableText isBold>{totalCarbohydrate}g</FoodTableText>
        </FoodTableRow>
      </FoodTable>
    </Card>
  );
};
