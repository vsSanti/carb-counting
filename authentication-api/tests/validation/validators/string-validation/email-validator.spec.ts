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
});
