import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Divider, Form, Input } from 'antd';

import { PageTitle } from 'components';

import './styles.scss';

export const SignUp: FC = () => {
  const handleSubmit = (): void => {};

  return (
    <div id="signup-page">
      <PageTitle title="Faça seu cadastro" />

      <Form
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          name: 'Especialista',
          email: 'contato@carbcounting.app',
          password: '123456',
          passwordConfirmation: '123456',
        }}
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input
            allowClear
            size="large"
            placeholder="Informe seu e-mail"
            prefix={<i className="caf-ic_mail" />}
          />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input
            allowClear
            size="large"
            placeholder="Informe seu e-mail"
            prefix={<i className="caf-ic_mail" />}
          />
        </Form.Item>

        <Form.Item label="Senha" name="password" rules={[{ required: true }]}>
          <Input.Password
            size="large"
            placeholder="Informe sua senha"
            prefix={<i className="caf-lock" />}
          />
        </Form.Item>

        <Form.Item
          label="Confirmação da senha"
          name="passwordConfirmation"
          rules={[{ required: true }]}
        >
          <Input.Password
            size="large"
            placeholder="Informe sua senha"
            prefix={<i className="caf-lock" />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            id="submit-button"
            block
            size="large"
            type="primary"
            htmlType="submit"
          >
            Acessar minha conta
          </Button>
        </Form.Item>

        <Divider>
          <NavLink to="/signin">Fazer login</NavLink>
        </Divider>
      </Form>
    </div>
  );
};
