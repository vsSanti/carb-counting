import React, { useCallback } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '@/hooks/auth';

import { Button } from '@/components/Button';
import { InputForm } from '@/components/Form/InputForm';

import {
  Container,
  Header,
  LogoWrapper,
  LogoIcon,
  LogoTitle,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email('E-mail precisa ser válido').required('Nome é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

export const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { login, loadingCredentials } = useAuth();

  const handleLogin = useCallback(
    (data: FormData) => {
      login(data);
    },
    [login]
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
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

          <Footer>
            <FooterWrapper>
              <InputForm
                name="email"
                control={control}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                error={errors.email?.message}
              />

              <InputForm
                name="password"
                control={control}
                placeholder="Senha"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                error={errors.password?.message}
              />

              <Button
                title="Entrar"
                onPress={handleSubmit(handleLogin)}
                loading={loadingCredentials}
              />
            </FooterWrapper>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
