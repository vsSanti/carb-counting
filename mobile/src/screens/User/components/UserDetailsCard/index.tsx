import React from 'react';

import { useAuth } from '@/hooks/auth';

import { Card } from '@/components/Card';

import { Title, InfoView, InfoTitle, InfoContent, InfoUnit } from './styles';

export const UserDetailsCard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <></>;

  return (
    <Card>
      <Title>Detalhes:</Title>

      <InfoView>
        <InfoTitle>Peso:</InfoTitle>
        <InfoContent>
          {user.weight}
          <InfoUnit> kg</InfoUnit>
        </InfoContent>
      </InfoView>

      <InfoView>
        <InfoTitle>Altura:</InfoTitle>
        <InfoContent>
          {user.height}
          <InfoUnit> cm</InfoUnit>
        </InfoContent>
      </InfoView>

      <InfoView>
        <InfoTitle>Meta glicêmica:</InfoTitle>
        <InfoContent>
          {user.glycemicTarget}
          <InfoUnit> mg/dL</InfoUnit>
        </InfoContent>
      </InfoView>

      {user.insulinUnitsPerDay && (
        <InfoView>
          <InfoTitle>Unidades de insulina diária:</InfoTitle>
          <InfoContent>
            {user.insulinUnitsPerDay}
            <InfoUnit> UI</InfoUnit>
          </InfoContent>
        </InfoView>
      )}

      {user.sensibilityFactor && (
        <InfoView>
          <InfoTitle>Fator de sensibilidade:</InfoTitle>
          <InfoContent>
            {user.sensibilityFactor}
            <InfoUnit> mg/dL</InfoUnit>
          </InfoContent>
        </InfoView>
      )}

      {user.insulinCarbohydrateRatio && (
        <InfoView>
          <InfoTitle>Razão insulina carboidrato:</InfoTitle>
          <InfoContent>
            {user.insulinCarbohydrateRatio}
            <InfoUnit>g = 1 UI</InfoUnit>
          </InfoContent>
        </InfoView>
      )}
    </Card>
  );
};
