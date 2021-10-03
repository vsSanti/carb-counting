import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

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
  /* flex-direction: row; */
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
