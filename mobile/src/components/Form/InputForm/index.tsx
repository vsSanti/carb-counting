import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '@/components/Form/Input';

import { Error } from '@/components/Form/styles';
import { Container } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export const InputForm: React.FC<Props> = ({ control, name, error, ...rest }) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
