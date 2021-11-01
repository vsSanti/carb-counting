import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Masks } from 'react-native-mask-input';

import { Error, FieldTitle } from '@/components/Form/styles';
import { Container, MaskInputStyled } from './styles';

interface Props {
  control: Control;
  name: string;
  placeholder: string;
  error?: string;
}

export const MaskedInputForm: React.FC<Props> = ({
  control,
  name,
  placeholder,
  error,
}) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <FieldTitle>{placeholder}</FieldTitle>
            <MaskInputStyled
              keyboardType="number-pad"
              value={value}
              mask={Masks.DATE_DDMMYYYY}
              onChangeText={onChange}
            />
          </>
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
