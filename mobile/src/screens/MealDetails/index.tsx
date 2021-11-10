import React, { useCallback, useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Header, Title, Icon, Content } from './styles';

type Params = {
  meal: any;
};

export const MealDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { meal } = route.params as Params;

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    console.log(meal);
  }, [meal]);

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
        <Text>Conteúdo</Text>
      </Content>
    </Container>
  );
};
