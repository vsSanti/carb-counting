import {
  ObjectValidator,
  ObjectValidatorParams,
  ObjectValidatorReturn,
  PropertyBuilder,
} from '@/presentation/protocols';

export class GenericObjectValidator implements ObjectValidator {
  constructor(private readonly propertyBuilders: PropertyBuilder[]) {}

  validate(params: ObjectValidatorParams): ObjectValidatorReturn {
    for (const propertyBuilder of this.propertyBuilders) {
      propertyBuilder.validate(params);
    }
    return;
  }
}
