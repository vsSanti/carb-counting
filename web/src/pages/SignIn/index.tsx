import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Divider, Form, Input } from 'antd';

import { PageTitle } from 'components';

import './styles.scss';

export const SignIn: FC = () => {
  const handleSubmit = (): void => {};

  return (
    <div id="signin-page">
      <PageTitle
        title="Faça login"
        subtitle="Informe seu e-mail e senha para efetuar login."
      />

      <Form
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          email: 'contato@carbcounting.app',
          password: '123456',
        }}
      >
        <Form.Item
          label="seu e-mail"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
            },
          ]}
        >
          <Input
            allowClear
            size="large"
            placeholder="Informe seu e-mail"
            prefix={<i className="caf-ic_mail" />}
          />
        </Form.Item>
        <Form.Item
          label="sua senha"
          name="password"
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
          <NavLink to="/signup">Cadastrar-me</NavLink>
        </Divider>
      </Form>
    </div>
  );
};
