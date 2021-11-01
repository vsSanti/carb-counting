import React from 'react';
import { Control, Controller } from 'react-hook-form';
import RNPickerSelect, { Item } from 'react-native-picker-select';

import { Error, FieldTitle } from '@/components/Form/styles';
import { Container, PickerView } from './styles';

interface Props {
  control: Control;
  name: string;
  placeholder: string;
  items: Item[];
  error?: string;
}

export const PickerSelectForm: React.FC<Props> = ({
  control,
  name,
  placeholder,
  items,
  error,
}) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            {placeholder && <FieldTitle>{placeholder}</FieldTitle>}
            <PickerView>
              <RNPickerSelect onValueChange={onChange} value={value} items={items} />
            </PickerView>
          </>
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
