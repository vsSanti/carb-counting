import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';

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

export type MealCardProps = {
  id: string;
  glucoseMeasurement: number;
  insulinUnitsToBeApplied: number;
  createdAt: string;
};

type Props = {
  data: MealCardProps;
};

export const MealCard: React.FC<Props> = ({ data }) => {
  const createdAtFormatted = useMemo(() => {
    const { createdAt } = data;

    const date = format(parseISO(createdAt), "dd/MM/yyyy 'às' HH:mm");

    return date;
  }, [data]);

  return (
    <Container>
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
