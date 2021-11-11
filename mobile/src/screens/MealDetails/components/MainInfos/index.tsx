import React from 'react';

import { Separator } from '@/components/Separator';

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
  return (
    <>
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
        <Time>Criado em {createdAt || '-'}</Time>
      </InfosWrapper>
      <Separator />
    </>
  );
};
