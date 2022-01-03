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

export const Footer = styled.View``;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(5)}px;
  padding-right: 32px;
  padding-left: 32px;
  padding-bottom: ${RFValue(50)}px;

  justify-content: space-between;
`;

export const CancelButton = styled.TouchableOpacity``;

export const CancelButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;

  text-align: center;
  margin-bottom: 25px;
`;

export const CheckboxWrapper = styled.View`
  margin: 10px 0 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(12)}px;

  margin-left: 10px;
`;

export const LegalTerms = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: #007fff;
  font-size: ${RFValue(12)}px;

  margin-left: 10px;
`;
