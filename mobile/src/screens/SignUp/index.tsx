import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/Button';
import { InputForm } from '@/components/Form/InputForm';

import { Container, Footer, FooterWrapper, PageTitle } from './styles';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail precisa ser válido').required('Nome é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

export const SignUp: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
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
            placeholder="Peso"
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

          <Button
            title="Cadastrar-me"
            onPress={handleSubmit(handleSignUp)}
            // loading={loadingCredentials}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};
