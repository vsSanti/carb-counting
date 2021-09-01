import { GenericObjectArrayPropertyBuilder } from '@/common/validation/builders';

import { PropertyValidationSpy } from '@/tests/common/validations/mocks';

describe('GenericObjectArrayProperty Builder', () => {
  const fieldName = 'field';
  const params = { fieldName, input: { [fieldName]: [] } };
  let arrayValidationSpy: PropertyValidationSpy;
  let sut: GenericObjectArrayPropertyBuilder;

  beforeEach(() => {
    arrayValidationSpy = new PropertyValidationSpy();
    sut = new GenericObjectArrayPropertyBuilder(fieldName, arrayValidationSpy);
  });

  it('should call PropertyValidation with correct params', () => {
    sut.validate(params);
    expect(params).toEqual(arrayValidationSpy.params);
  });

  it('should return an array of errors if PropertyValidation validation fails', () => {
    arrayValidationSpy.error = 'mocked error';
    const errors = sut.validate(params);
    expect(errors).toBeTruthy();
    expect(errors.length).toBe(1);
    expect(errors).toEqual(['mocked error']);
  });
});
