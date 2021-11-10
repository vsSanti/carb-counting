import React, { useCallback, useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '@/hooks/auth';
import { useFood } from '@/hooks/food';

import { useFetch } from '@/services';

import { Button } from '@/components/Button';
import { InputForm } from '@/components/Form/InputForm';
import { SearchableInput } from '@/components/Form/SearchableInput';

import {
  Container,
  Header,
  HeaderTitle,
  Content,
  Separator,
  MealInputs,
  Icon,
} from './styles';

const schema = yup.object().shape({
  // glucoseMeasurement: yup.number().required('Glicemia medida é obrigatório'),
});

export const Meal: React.FC = () => {
  const navigation = useNavigation<any>();

  const { user } = useAuth();
  const { foods, loadingFoods } = useFood();
  const { post: postMeal, loading: loadingPostMeal } = useFetch({
    apiType: 'meal',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'mealFoods',
  });

  const mappedFoodsToOption = useMemo(() => {
    if (!foods?.docs) return [];

    const result = foods.docs.map((food) => ({
      value: food.id,
      label: food.description,
    }));

    return result;
  }, [foods]);

  const handlePostMeal = useCallback(
    async (data: any) => {
      try {
        const glucoseMeasurement = Number(data?.glucoseMeasurement);

        const mealFoods = data?.mealFoods?.map((mealFood: any) => ({
          foodId: mealFood?.foodId,
          weight: Number(mealFood?.weight),
        }));

        await postMeal({
          url: '/meals',
          payload: {
            patientId: user?.id,
            patientInsulinUnitsPerDay: user?.insulinUnitsPerDay,
            patientGlycemicTarget: user?.glycemicTarget,
            glucoseMeasurement,
            mealFoods,
          },
        });
        navigation.navigate('List');

        reset();
        fields.forEach(() => {
          remove(0);
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    [fields, navigation, postMeal, remove, reset, user]
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>Refeição</HeaderTitle>
      </Header>

      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 25,
        }}
      >
        <InputForm
          name="glucoseMeasurement"
          control={control}
          title="Glicemia medida"
          titleColor="text_dark"
          placeholder="mg/dL"
          keyboardType="number-pad"
          error={errors.glucoseMeasurement?.message}
        />

        <Separator />

        {fields.map((field, index) => {
          register(`mealFoods.${index}.foodId`);

          return (
            <MealInputs key={field.id}>
              <InputForm
                control={control}
                placeholder="gramas"
                keyboardType="numeric"
                customStyles={{ flex: 0.5, marginRight: 8 }}
                {...register(`mealFoods.${index}.weight`)}
              />

              <SearchableInput
                control={control}
                options={mappedFoodsToOption}
                placeholder="alimento"
                {...register(`mealFoods.${index}.name`)}
                onCloseModal={(values) => {
                  setValue(`mealFoods.${index}.name`, values.label);
                  setValue(`mealFoods.${index}.foodId`, values.value);
                }}
              />

              <TouchableOpacity onPress={() => remove(index)}>
                <Icon name="trash" />
              </TouchableOpacity>
            </MealInputs>
          );
        })}

        <Button
          title="Adicionar alimento"
          loading={loadingPostMeal || loadingFoods}
          onPress={() => append({})}
        />

        <Button
          title="Finalizar"
          loading={loadingPostMeal}
          onPress={handleSubmit(handlePostMeal)}
        />
      </Content>
    </Container>
  );
};
