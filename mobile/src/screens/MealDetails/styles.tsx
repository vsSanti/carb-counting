import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${RFValue(113)}px;

  padding: 0 15px 19px 15px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.ScrollView`
  margin-top: 20px;
`;
