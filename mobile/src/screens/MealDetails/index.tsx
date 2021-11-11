import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Meal } from '@/@types';

import { MainInfos } from './components/MainInfos';

import { Container, Header, Title, Icon, Content } from './styles';
import { FoodList } from './components/FoodList';

type Params = {
  meal: Meal;
};

export const MealDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { meal } = route.params as Params;

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="chevron-left" />
        </TouchableOpacity>
        <Title>Detalhes da Refeição</Title>
        <Icon name="x" style={{ opacity: 0 }} />
      </Header>

      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 25,
        }}
      >
        <MainInfos
          createdAt={meal.createdAt}
          glucoseMeasurement={meal.glucoseMeasurement}
          insulinUnitsToBeApplied={meal.insulinUnitsToBeApplied}
        />

        <FoodList mealFoods={meal.mealFoods} />
      </Content>
    </Container>
  );
};
