import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import {
  Container,
  Header,
  LogoWrapper,
  LogoIcon,
  LogoTitle,
  TitleWrapper,
  Title,
  SignInTitle,
} from './styles';

export const Login: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <TitleWrapper>
            <LogoWrapper>
              <LogoIcon name="calculator" />
              <LogoTitle>CarbCounting</LogoTitle>
            </LogoWrapper>

            <Title>Sua contagem de carboidratos {'\n'} de forma simples</Title>
          </TitleWrapper>

          <SignInTitle>Faça seu login em sua conta</SignInTitle>
        </Header>
      </Container>
    </TouchableWithoutFeedback>
  );
};
