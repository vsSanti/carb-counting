import React from 'react';
import { TextInputProps } from 'react-native';

import { FieldTitle } from '@/components/Form/styles';

import { Container } from './styles';

type Props = TextInputProps & {
  title?: string;
  titleColor?: 'shape' | 'text' | 'text_dark';
};

export const Input: React.FC<Props> = ({ title, titleColor, ...rest }: Props) => {
  return (
    <>
      {title && <FieldTitle color={titleColor}>{title}</FieldTitle>}
      <Container {...rest} />
    </>
  );
};
