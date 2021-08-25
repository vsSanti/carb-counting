import { GenericPropertyBuilder } from '@/validation/builders';

import { PropertyValidationSpy } from '@/tests/validations/mocks';

describe('GenericProperty Builder', () => {
  const fieldName = 'field';
  const params = { fieldName, input: { [fieldName]: 'value' } };
  let propertyValidationSpy: PropertyValidationSpy;
  let sut: GenericPropertyBuilder;

  beforeEach(() => {
    propertyValidationSpy = new PropertyValidationSpy();
    sut = new GenericPropertyBuilder(fieldName, [propertyValidationSpy]);
  });

  it('should call PropertyValidation with correct params', () => {
    sut.validate(params);
    expect(params).toEqual(propertyValidationSpy.params);
  });

  it('should return an empty array if there are no errors', () => {
    const errors = sut.validate(params);
    expect(errors).toBeTruthy();
    expect(errors).toEqual([]);
  });

  it('should return an array of errors if validation fails', () => {
    propertyValidationSpy.error = 'mocked error';
    const errors = sut.validate(params);
    expect(errors).toBeTruthy();
    expect(errors.length).toBe(1);
    expect(errors).toEqual(['mocked error']);
  });
});
