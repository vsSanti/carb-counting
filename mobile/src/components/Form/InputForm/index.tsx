import React from 'react';
import { TextInputProps, View } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '@/components/Form/Input';

import { Error } from '@/components/Form/styles';

export type InputFormProps = TextInputProps & {
  name: string;
  control: Control;
  title?: string;
  titleColor?: 'shape' | 'text' | 'text_dark';
  error?: string;
  customStyles?: {
    flex?: number;
    display?: 'none' | 'flex';
    marginRight?: number;
  };
};

export const InputForm: React.FC<InputFormProps> = ({
  control,
  name,
  title,
  titleColor,
  error,
  customStyles,
  ...rest
}) => {
  return (
    <View
      style={{
        flex: customStyles?.flex || 1,
        display: customStyles?.display,
        marginRight: customStyles?.marginRight,
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <Input
              onChangeText={onChange}
              value={value}
              title={title}
              titleColor={titleColor}
              {...rest}
            />
          </>
        )}
      />
      {error && <Error>{error}</Error>}
    </View>
  );
};
