import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const PickerView = styled.View`
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;

  margin-bottom: 8px;
`;

export const RNPickerSelectStyled = styled(RNPickerSelect)`
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;
