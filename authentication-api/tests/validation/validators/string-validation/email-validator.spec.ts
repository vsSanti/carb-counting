import { EmailValidator } from '@/validation/validators/string-validators';

describe('Email Validator', () => {
  let sut: EmailValidator;

  beforeEach(() => {
    sut = new EmailValidator();
  });

  it('should return undefined if parameter is an email', () => {
    const errorMessage = sut.validate({ fieldName: 'email', input: { email: 'any@email.com' } });
    expect(errorMessage).toBeUndefined();
  });

  it("should return an error string if parameter isn't a an email", () => {
    const errorMessage = sut.validate({ fieldName: 'email', input: { email: 'invalid_email' } });
    expect(errorMessage).toBeTruthy();
    expect(typeof errorMessage).toBe('string');
    expect(errorMessage).toBe("It isn't a valid email.");
  });
});
