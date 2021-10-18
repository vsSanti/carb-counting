import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Masks } from 'react-native-mask-input';

import { Error, Placeholder } from '@/components/Form/styles';
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
            <Placeholder>{placeholder}</Placeholder>
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
