import { EnumValidator } from '@/validation/validators/string-validators';

const allowedValues = ['abc', 'def'];
describe('Enum Validator', () => {
  let sut: EnumValidator;

  beforeEach(() => {
    sut = new EnumValidator(allowedValues);
  });

  it("should return an error string if parameter isn't an allowed value", () => {
    const errorMessage = sut.validate({ fieldName: 'field', input: { field: 'xyz' } });
    expect(errorMessage).toBeTruthy();
    expect(typeof errorMessage).toBe('string');
    expect(errorMessage).toBe(
      `It isn't a valid value. Allowed values: ${allowedValues.join(', ')}.`
    );
  });
});
