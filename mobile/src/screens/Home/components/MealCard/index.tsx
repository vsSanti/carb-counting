import React, { useMemo } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { format, parseISO } from 'date-fns';

import { Meal } from '@/@types';

import {
  Container,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
  MainInfos,
  Info,
  InfoTitle,
  InfoValue,
  InfoUnit,
} from './styles';

type Props = RectButtonProps & {
  data: Meal;
};

export const MealCard: React.FC<Props> = ({ data, ...rest }) => {
  const createdAtFormatted = useMemo(() => {
    const { createdAt } = data;

    const date = format(parseISO(createdAt), "dd/MM/yyyy 'às' HH:mm");

    return date;
  }, [data]);

  return (
    <Container {...rest}>
      <MainInfos>
        <Info>
          <InfoTitle>Medição de glicose:</InfoTitle>
          <InfoValue>
            {data.glucoseMeasurement} <InfoUnit>mg/dL</InfoUnit>
          </InfoValue>
        </Info>

        <Info>
          <InfoTitle>Qtd. insulina aplicada:</InfoTitle>
          <InfoValue>
            {data.insulinUnitsToBeApplied} <InfoUnit>UI</InfoUnit>
          </InfoValue>
        </Info>
      </MainInfos>

      <Footer>
        <Category>
          <Icon name="clock" />
          <CategoryName>Feito em:</CategoryName>
        </Category>

        <Date>{createdAtFormatted}</Date>
      </Footer>
    </Container>
  );
};
