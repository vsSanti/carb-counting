import React, { useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Meal } from '@/@types';

import { useAuth } from '@/hooks/auth';

import { ActivityIndicator } from '@/components/ActivityIndicator';

import { MealCard } from '@/screens/Home/components/MealCard';

import { useFetch } from '@/services';

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
  MealList,
  Meals,
  Title,
} from './styles';

export const Home: React.FC = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation<any>();
  const {
    get: getMeals,
    response: meals,
    loading: loadingMeals,
  } = useFetch<Meal>({ apiType: 'meal' });

  const fetch = useCallback(() => {
    getMeals({ url: '/meals' });
  }, [getMeals]);

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [fetch])
  );

  const handleMealDetails = useCallback(
    (meal: any) => {
      navigation.navigate('MealDetails', { meal });
    },
    [navigation]
  );

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

      <Meals>
        <Title>Listagem de refeições</Title>

        {loadingMeals ? (
          <ActivityIndicator color="dark" />
        ) : (
          <MealList
            data={meals?.docs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MealCard data={item} onPress={() => handleMealDetails(item)} />
            )}
          />
        )}
      </Meals>
    </Container>
  );
};
