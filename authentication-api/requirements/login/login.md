# Login

> ## Body
- ✅ email:
  - ✅ Type: `string` and `email`;
  - ✅ Required: `true`;
- ✅ password:
  - ✅ Type: `string`;
  - ✅ Required: `true`;

> ## Main flow
1. ✅ Validate body parameters;
2. ✅ Check if email and password matches a patient;
3. ✅ Generate `accessToken` and `refreshToken` for patient;
4. ✅ Return tokens and status code 200;

> ## Error cases
- ✅ If there's any error on body parameters, returns 400;
- ✅ If there's no patient that matches the parameters, returns 401;
- ✅ If there's any kind of error, it should return 500;

> ## Route
**[POST]** `/login`