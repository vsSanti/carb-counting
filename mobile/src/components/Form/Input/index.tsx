import React from 'react';
import { TextInputProps } from 'react-native';

import { FieldTitle } from '@/components/Form/styles';

import { Container } from './styles';

export type InputProps = TextInputProps & {
  title?: string;
  titleColor?: 'shape' | 'text' | 'text_dark';
};

export const Input: React.FC<InputProps> = ({ title, titleColor, ...rest }) => {
  return (
    <>
      {title && <FieldTitle color={titleColor}>{title}</FieldTitle>}
      <Container {...rest} />
    </>
  );
};
