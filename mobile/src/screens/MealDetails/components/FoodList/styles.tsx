import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const FoodTableHeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const FoodTable = styled.View``;

export const FoodTableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

type FoodTableTextProp = {
  isBold?: boolean;
};

export const FoodTableText = styled.Text<FoodTableTextProp>`
  flex-shrink: 1;
  max-width: ${RFPercentage(12)}%;
  font-family: ${({ theme, isBold }) =>
    isBold ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;
