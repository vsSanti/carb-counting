import {
  GenericObjectArrayPropertyBuilder,
  GenericObjectValidator,
  GenericPropertyBuilder,
} from '@/common/validation/builders';
import { ObjectValidator } from '@/common/validation/protocols';
import { ArrayValidator, NumberValidator, StringValidator } from '@/common/validation/validators';

export const makeAddMealValidation = (): ObjectValidator => {
  const stringValidator = new StringValidator();
  const numberValidator = new NumberValidator();

  const patientIdProperty = new GenericPropertyBuilder('patientId', [stringValidator]);
  const patientGlycemicTargetProperty = new GenericPropertyBuilder('patientGlycemicTarget', [
    numberValidator,
  ]);
  const glucoseMeasurementProperty = new GenericPropertyBuilder('glucoseMeasurement', [
    numberValidator,
  ]);

  const mealFoodsWeightProperty = new GenericPropertyBuilder('weight', [numberValidator]);
  const mealFoodsFoodIdProperty = new GenericPropertyBuilder('foodId', [stringValidator]);
  const mealFoodsSchema = new GenericObjectValidator([
    mealFoodsWeightProperty,
    mealFoodsFoodIdProperty,
  ]);

  const mealFoodsProperty = new GenericObjectArrayPropertyBuilder(
    'mealFoods',
    new ArrayValidator({ validLength: true }),
    mealFoodsSchema
  );

  const objectValidator = new GenericObjectValidator([
    patientIdProperty,
    patientGlycemicTargetProperty,
    glucoseMeasurementProperty,
    mealFoodsProperty,
  ]);

  return objectValidator;
};
