import { FC, useMemo } from 'react';
import { Typography } from 'antd';
import { AxisOptions, Chart } from 'react-charts';

import { Meal } from '@types';
import { meals } from 'utils';

import './styles.scss';

type Series = {
  label: string;
  data: Meal[];
};

const { Title } = Typography;

export const MealCharts: FC = () => {
  const primaryAxis = useMemo<AxisOptions<Meal>>(
    () => ({ getValue: (meal) => new Date(meal.createdAt) }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<Meal>[] => [
      { getValue: (meal) => meal.glucoseMeasurement },
    ],
    [],
  );

  const data: Series[] = [{ label: 'Medida da Glicose', data: meals }];

  return (
    <div className="meal-charts">
      <Title level={3}>Histórico de medida de glicose</Title>

      <div className="chart-wrapper">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </div>
  );
};
