import { GenericObjectValidator } from '@/validation/builders';

import { PropertyBuilderSpy } from '@/tests/validations/mocks';

describe('GenericObject Validator', () => {
  const fieldName = 'field';
  const params = { input: { [fieldName]: 'value' } };
  let propertyBuilderSpy: PropertyBuilderSpy;
  let sut: GenericObjectValidator;

  beforeEach(() => {
    propertyBuilderSpy = new PropertyBuilderSpy(fieldName);
    sut = new GenericObjectValidator([propertyBuilderSpy]);
  });

  it('should call PropertyBuilder with correct params', () => {
    sut.validate(params);
    expect(params).toEqual(propertyBuilderSpy.params);
  });

  it('should return an object with hasErrors as false if there are no errors', () => {
    const response = sut.validate(params);
    expect(response).toHaveProperty('errors');
    expect(response.errors).toHaveProperty(fieldName);
    expect(response.hasErrors).toBe(false);
  });

  it('should return an object with errors if there are errors', () => {
    propertyBuilderSpy.errors = ['mocked error'];
    const response = sut.validate(params);
    expect(response).toHaveProperty('errors');
    expect(response.errors).toHaveProperty(fieldName);
    expect(response.hasErrors).toBe(true);
  });
});
