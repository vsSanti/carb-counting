import { FC } from 'react';
import { Button, Col, Row, Table, TableColumnsType } from 'antd';
import { Food } from '@types';

import { PageTitle, useModal } from 'components';
import { foods } from 'utils';

import { NewFoodModalContent } from './components';

import './styles.scss';

const columns: TableColumnsType<Food> = [
  { title: 'Alimento', dataIndex: 'description', key: 'description' },
  {
    title: 'Carboidrato/100g',
    dataIndex: 'carbohydrate',
    key: 'carbohydrate',
    render: (carbohydrate: number) => `${carbohydrate.toFixed(2)}g`,
  },
  { title: 'Grupo', dataIndex: 'group', key: 'group' },
];

export const FoodsList: FC = () => {
  const { modalContent, openModal } = useModal({
    title: 'Novo alimento',
    okText: 'Salvar',
    cancelText: 'Cancelar',
    innerContent: <NewFoodModalContent />,
  });

  return (
    <>
      {modalContent}

      <Row className="foods-list">
        <Col>
          <PageTitle
            title="Alimentos"
            subtitle="Listagem de alimentos registrados no sistema"
          />
        </Col>

        <Col className="new-food-button-wrapper">
          <Button type="primary" onClick={openModal}>
            Cadastrar novo alimento
          </Button>
        </Col>

        <Col span={24}>
          <Table columns={columns} dataSource={foods} rowKey="id" />
        </Col>
      </Row>
    </>
  );
};
