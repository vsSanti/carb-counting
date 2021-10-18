import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 20px;
  margin: 20px 0;

  border-radius: 10px;
`;

export const MainContent = styled.View`
  flex-direction: row;
`;

export const Photo = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;

  border-radius: 10px;
`;

export const MainDetails = styled.View`
  flex-shrink: 1;
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const UserId = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  align-self: center;
  margin-top: 10px;
`;
