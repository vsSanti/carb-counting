import { DateValidator } from '@/validation/validators';

describe('Date Validator', () => {
  let sut: DateValidator;

  beforeEach(() => {
    sut = new DateValidator();
  });

  it('should return undefined if parameter is a number', () => {
    const errorMessage = sut.validate({
      fieldName: 'field',
      input: { field: new Date().toISOString() },
    });
    expect(errorMessage).toBeUndefined();
  });

  it("should return an error string if parameter isn't a string", () => {
    const errorMessage = sut.validate({ fieldName: 'field', input: { field: 'invalid_date' } });
    expect(errorMessage).toBeTruthy();
    expect(typeof errorMessage).toBe('string');
    expect(errorMessage).toBe("It isn't a date.");
  });
});
