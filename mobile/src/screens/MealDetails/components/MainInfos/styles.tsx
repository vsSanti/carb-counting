import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const InfosWrapper = styled.View`
  align-items: center;
`;

export const MainInfosWrapper = styled.View`
  flex-direction: row;
`;

export const InfoDisplay = styled.View`
  flex: 1;
  align-items: center;
`;

export const ResultText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(35)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const ResultLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  margin: 8px 0;
`;
