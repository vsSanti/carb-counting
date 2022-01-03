import { FC } from 'react';
import { Collapse, Typography } from 'antd';
import { meals } from 'utils';

import { MealData, MealDataHeader } from '..';

const { Panel } = Collapse;
const { Title } = Typography;

export const MealsList: FC = () => {
  return (
    <>
      <Title level={3}>Histórico de refeições</Title>
      <Collapse defaultActiveKey={meals[0].id} accordion>
        {meals.map((meal) => (
          <Panel header={<MealDataHeader data={meal} />} key={meal.id}>
            <MealData key={meal.id} data={meal} />
          </Panel>
        ))}
      </Collapse>
    </>
  );
};
