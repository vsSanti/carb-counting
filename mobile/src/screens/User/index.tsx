import React from 'react';

import { UserCard } from './components/UserCard';
import { UserDetailsCard } from './components/UserDetailsCard';

import { Container, Header, HeaderTitle, Content } from './styles';

export const User: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Usuário</HeaderTitle>
      </Header>

      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 25,
        }}
      >
        <UserCard />
        <UserDetailsCard />
      </Content>
    </Container>
  );
};
