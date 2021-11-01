import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.attention};

  margin: -4px 8px 8px 8px;
`;

type FieldTitleProps = {
  color?: 'shape' | 'text' | 'text_dark';
};

export const FieldTitle = styled.Text<FieldTitleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, color }) => theme.colors[color || 'shape']};
`;
