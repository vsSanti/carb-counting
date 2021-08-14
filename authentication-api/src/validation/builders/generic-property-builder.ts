import {
  PropertyValidation,
  PropertyBuilder,
  PropertyBuilderParams,
} from '@/presentation/protocols';

export class GenericPropertyBuilder implements PropertyBuilder {
  constructor(
    private readonly fieldName: string,
    private readonly validations: PropertyValidation[]
  ) {}

  validate(params: PropertyBuilderParams): string[] {
    const errors: string[] = [];
    for (const validation of this.validations) {
      const error = validation.validate({ fieldName: this.fieldName, input: params.input });
      if (error) {
        errors.push(error);
      }
    }
    return errors;
  }
}
