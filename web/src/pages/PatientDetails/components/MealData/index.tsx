import { FC, useMemo } from 'react';
import { Col, Divider, Row } from 'antd';

import { Meal } from '@types';

import './styles.scss';

type Props = {
  data: Meal;
};

export const MealDataHeader: FC<Props> = ({ data }) => {
  return (
    <div className="meal-data-header">
      <span className="info">
        <h2 className="main-data">{data.glucoseMeasurement}</h2>
        <h5 className="label">Medida da glicose</h5>
      </span>

      <span className="info">
        <h2 className="main-data">{data.insulinUnitsToBeApplied}</h2>
        <h5 className="label">Insulina aplicada</h5>
      </span>
    </div>
  );
};

export const MealData: FC<Props> = ({ data }) => {
  const totalCarbohydrate = useMemo(() => {
    const sum = data.mealFoods?.reduce(
      (acc, mealFood) => acc + mealFood.carbohydrateTotal,
      0,
    );

    return sum?.toFixed(2);
  }, [data]);

  return (
    <div className="meal-data">
      <Row className="meal-data-row">
        <Col span={18} className="food-description bold">
          Alimento
        </Col>
        <Col span={6} className="food-weight bold">
          Peso
        </Col>
      </Row>

      <Divider className="divider" />

      {data.mealFoods?.map((mealFood) => (
        <Row key={mealFood.id} className="meal-data-row">
          <Col span={18} className="food-description">
            {mealFood.food.description}
          </Col>
          <Col span={6} className="food-weight bold">
            {mealFood.weight}g
          </Col>
        </Row>
      ))}

      <Divider className="divider" />

      <Row className="meal-data-row">
        <Col span={18} className="food-description bold">
          Total de carboidratos
        </Col>
        <Col span={6} className="food-weight bold">
          {totalCarbohydrate}g
        </Col>
      </Row>
    </div>
  );
};
