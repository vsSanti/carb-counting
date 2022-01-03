import { FC } from 'react';
import { Col, Form, Input, InputNumber, Row, Select } from 'antd';

const { Item } = Form;
const { Option } = Select;

export const NewFoodModalContent: FC = () => {
  return (
    <Form layout="vertical" initialValues={{}} autoComplete="off">
      <Row>
        <Col span={24}>
          <Item
            label="Nome do alimento"
            name="name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Nome do alimento" />
          </Item>
        </Col>

        <Col span={24}>
          <Item
            label="Carboidratos por 100g"
            name="carbohydrates"
            rules={[{ required: true }]}
          >
            <InputNumber placeholder="Carboidratos por 100g de alimento" />
          </Item>
        </Col>

        <Col span={24}>
          <Item
            label="Grupo do alimento"
            name="group"
            rules={[{ required: true }]}
          >
            <Select placeholder="Grupo do alimento">
              <Option value="cereals">Cereal</Option>
              <Option value="vegetal">Gorduras</Option>
              <Option value="vegetal">Legume</Option>
              <Option value="vegetal">Proteína</Option>
              <Option value="vegetal">Vegetal</Option>
            </Select>
          </Item>
        </Col>
      </Row>
    </Form>
  );
};
