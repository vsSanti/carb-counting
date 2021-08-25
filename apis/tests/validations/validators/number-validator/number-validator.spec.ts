import { NumberValidator } from '@/validation/validators';

describe('Number Validator', () => {
  let sut: NumberValidator;

  beforeEach(() => {
    sut = new NumberValidator();
  });

  it('should return undefined if parameter is a number', () => {
    const errorMessage = sut.validate({ fieldName: 'field', input: { field: 0 } });
    expect(errorMessage).toBeUndefined();
  });

  it("should return an error string if parameter isn't a number", () => {
    const errorMessage = sut.validate({ fieldName: 'field', input: { field: 'string' } });
    expect(errorMessage).toBeTruthy();
    expect(typeof errorMessage).toBe('string');
    expect(errorMessage).toBe("It isn't a number.");
  });
});
