import { DateValidator } from '@/validation/validators/date-validators';

describe('Number Validator', () => {
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
});
