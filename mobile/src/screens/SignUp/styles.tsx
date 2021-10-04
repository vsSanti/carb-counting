import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.primary};

  padding-top: ${RFValue(50)}px;
`;

export const PageTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(20)}px;

  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  height: 40%;
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(5)}px;
  padding: 0 32px;

  justify-content: space-between;
`;
