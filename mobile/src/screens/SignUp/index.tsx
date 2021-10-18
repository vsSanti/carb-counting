import React, { useCallback } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '@/hooks/auth';

import { useFetch } from '@/services';

import { Button } from '@/components/Button';
import { InputForm } from '@/components/Form/InputForm';
import { MaskedInputForm } from '@/components/Form/MaskedInputForm';

import { Container, Footer, FooterWrapper, PageTitle } from './styles';
import { PickerSelectForm } from '@/components/Form/PickerSelectForm';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail precisa ser válido').required('Nome é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
  passwordConfirmation: yup.string().required('Senha é obrigatório'),
  birthDate: yup.string().required('Data de nascimento é obrigatório.'),
  sex: yup.string().required('Sexo é obrigatório.'),
  weight: yup.number().required('Peso é obrigatório.'),
  height: yup.number().required('Altura é obrigatório.'),
  glycemicTarget: yup.number().required('Meta glicêmica é obrigatório.'),
  insulinUnitsPerDay: yup.number().required('Unidades de insulina diária é obrigatório.'),
});

export const SignUp: React.FC = () => {
  const { setCredentials } = useAuth();

  const { post: signUpRequest, loading: loadingSignUp } = useFetch<any>({
    apiType: 'auth',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = useCallback(
    async (data: any) => {
      const payload = {
        ...data,
        weight: Number(data.weight),
        height: Number(data.height),
        glycemicTarget: Number(data.glycemicTarget),
        insulinUnitsPerDay: Number(data.insulinUnitsPerDay),
      };

      try {
        const response = await signUpRequest({ url: '/sign-up', payload });
        setCredentials(response.data);
        return undefined;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error?.response?.status === 400) {
            return Alert.alert('Erro ao realizar cadastro', 'Dados inválidos.');
          }
          if (error?.response?.status === 409) {
            return Alert.alert('Erro ao realizar cadastro', 'E-mail já está em uso.');
          }
        }
        return Alert.alert('Erro ao realizar cadastro', 'Erro interno.');
      }
    },
    [setCredentials, signUpRequest]
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container>
        <PageTitle>Cadastro</PageTitle>

        <Footer>
          <FooterWrapper>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="words"
              autoCorrect={false}
              error={errors.name?.message}
            />

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

            <InputForm
              name="passwordConfirmation"
              control={control}
              placeholder="Confirmação da senha"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              error={errors.password?.message}
            />

            <InputForm
              name="height"
              control={control}
              placeholder="Altura"
              keyboardType="number-pad"
              error={errors.height?.message}
            />

            <InputForm
              name="weight"
              control={control}
              placeholder="Peso"
              keyboardType="number-pad"
              error={errors.weight?.message}
            />

            <InputForm
              name="glycemicTarget"
              control={control}
              placeholder="Meta glicêmica"
              keyboardType="number-pad"
              error={errors.glycemicTarget?.message}
            />

            <InputForm
              name="insulinUnitsPerDay"
              control={control}
              placeholder="Unidades de insulina diária"
              keyboardType="number-pad"
              error={errors.insulinUnitsPerDay?.message}
            />

            <MaskedInputForm
              name="birthDate"
              control={control}
              placeholder="Data de nascimento"
              error={errors.birthDate?.message}
            />

            <PickerSelectForm
              name="sex"
              control={control}
              placeholder="Sexo"
              items={[
                { label: 'Masculino', value: 'masculine' },
                { label: 'Feminino', value: 'feminine' },
              ]}
              error={errors.sex?.message}
            />

            <Button
              title="Cadastrar-me"
              onPress={handleSubmit(handleSignUp)}
              loading={loadingSignUp}
            />
          </FooterWrapper>
        </Footer>
      </Container>
    </KeyboardAvoidingView>
  );
};
