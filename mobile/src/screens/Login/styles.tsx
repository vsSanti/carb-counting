import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';

export const Container = styled.View`
  /* flex: 1; */
  justify-content: flex-end;
`;

export const Header = styled.View`
  width: 100%;
  height: 60%;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  padding-top: ${RFValue(50)}px;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(20)}px;

  text-align: center;

  margin-top: 25px;
`;

export const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;

  text-align: center;

  margin-top: 60px;
  margin-bottom: 67px;
`;

export const LogoWrapper = styled.View`
  align-items: center;
`;

export const LogoIcon = styled(SimpleLineIcons)`
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const LogoTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  margin-top: ${RFValue(15)}px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 40%;

  /* background-color: ${({ theme }) => theme.colors.secondary}; */
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;

  justify-content: space-between;
`;

export const SignUpButton = styled.Button`
  width: 100%;
  height: 25px;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  margin-bottom: 8px;

  border-radius: 10px;
`;
