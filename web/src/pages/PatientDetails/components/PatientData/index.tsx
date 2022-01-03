import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
} from 'antd';
import { FC } from 'react';

import { patients } from 'utils';

const patient = patients[0];

const { Item } = Form;
const { Option } = Select;

export const PatientData: FC = () => {
  return (
    <Form layout="vertical" initialValues={patient} autoComplete="off">
      <Row>
        <Col span={12}>
          <Item label="Nome" name="name" rules={[{ required: true }]}>
            <Input />
          </Item>
        </Col>

        <Col span={12}>
          <Item label="E-mail" name="email" rules={[{ required: true }]}>
            <Input disabled />
          </Item>
        </Col>

        <Col span={8}>
          <Item label="Idade" name="birthDate" rules={[{ required: true }]}>
            <Input disabled />
          </Item>
        </Col>

        <Col span={8}>
          <Item label="Sexo" name="sex" rules={[{ required: true }]}>
            <Select disabled>
              <Option value="Feminino">Feminino</Option>
            </Select>
          </Item>
        </Col>

        <Col span={4}>
          <Item label="Altura" name="height">
            <InputNumber />
          </Item>
        </Col>

        <Col span={4}>
          <Item label="Peso" name="weight">
            <InputNumber />
          </Item>
        </Col>

        <Divider />

        <Col span={4}>
          <Item
            label="Meta Glicêmica"
            name="glycemicTarget"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Item>
        </Col>

        <Col span={20} />

        <Col span={4}>
          <Item label="Unidades de Insulina Diária" name="insulinUnitsPerDay">
            <InputNumber />
          </Item>
        </Col>

        <Col span={4}>
          <Item label="Fator de Sensibilidade" name="sensibilityFactor">
            <InputNumber />
          </Item>
        </Col>

        <Col span={4}>
          <Item
            label="Razão Insulina Carboidrato"
            name="insulinCarbohydrateRatio"
          >
            <InputNumber />
          </Item>
        </Col>

        <Divider />

        <Col span={24}>
          <Button
            type="primary"
            onClick={() => message.success('Dados atualizados com sucesso!')}
          >
            Atualizar dados
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
