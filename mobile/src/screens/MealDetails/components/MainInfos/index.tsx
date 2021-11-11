import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';

import { Card } from '@/components/Card';

import {
  MainInfosWrapper,
  InfoDisplay,
  ResultText,
  ResultLabel,
  Time,
  InfosWrapper,
} from './styles';

type Props = {
  glucoseMeasurement: number;
  insulinUnitsToBeApplied: number;
  createdAt: string;
};

export const MainInfos: React.FC<Props> = ({
  createdAt,
  glucoseMeasurement,
  insulinUnitsToBeApplied,
}) => {
  const createdAtFormatted = useMemo(() => {
    try {
      const date = format(parseISO(createdAt), "dd/MM/yyyy 'às' HH:mm");

      return date;
    } catch (error) {
      return '-';
    }
  }, [createdAt]);

  return (
    <Card>
      <InfosWrapper>
        <MainInfosWrapper>
          <InfoDisplay>
            <ResultText>{glucoseMeasurement}</ResultText>
            <ResultLabel>Medição de glicose</ResultLabel>
          </InfoDisplay>

          <InfoDisplay>
            <ResultText>{insulinUnitsToBeApplied}</ResultText>
            <ResultLabel>Qtd. de insulina aplicada</ResultLabel>
          </InfoDisplay>
        </MainInfosWrapper>
        <Time>Criado em {createdAtFormatted}</Time>
      </InfosWrapper>
    </Card>
  );
};
