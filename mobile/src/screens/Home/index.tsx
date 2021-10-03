import React from 'react';

import { useAuth } from '@/hooks/auth';

import { ActivityIndicator } from '@/components/ActivityIndicator';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  LogoutButton,
} from './styles';

export const Home: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: `https://ui-avatars.com/api/?name=${user?.name || '-'}` }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user ? user.name : <ActivityIndicator />}</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={logout}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
};
