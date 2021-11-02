import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  padding: 0 15px 19px 15px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const InputView = styled.View`
  padding: 0 15px;
  margin-top: 10px;
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;
