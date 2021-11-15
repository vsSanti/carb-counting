# Sign Up

> ## Body
- ✅ `name`:
  - ✅ Type: `string`;
  - ✅ Required: `true`;
- ✅ `email`:
  - ✅ Type: `string` and `email`;
  - ✅ Required: `true`;
- ✅ `password`:
  - ✅ Type: `string`;
  - ✅ Required: `true`;
- ✅ `passwordConfirmation`:
  - ✅ Type: `string` and equal to `password`;
  - ✅ Required: `true`;
- ✅ `birthDate`:
  - ✅ Type: `date`;
  - ✅ Required: `true`;
- ✅ `weight`:
  - ✅ Type: `number`;
  - ✅ Required: `true`;
- ✅ `height`:
  - ✅ Type: `number`;
  - ✅ Required: `true`;
- ✅ `sex`:
  - ✅ Type: `string`;
    - ✅ `masculine`;
    - ✅ `feminine`;
  - ✅ Required: `true`;
- ✅ `glycemicTarget`:
  - ✅ Type: `number`;
  - ✅ Required: `true`;

> ## Main flow
1. ✅ Validate body parameters;
2. ✅ Add patient;
3. ✅ Generate `accessToken` and `refreshToken` for patient;
4. ✅ Return tokens and status code 201;

> ## Error cases
- ✅ If there's any error on body parameters, returns 400;
- ✅ If patient isn't added, returns 409;
- ✅ If there's any kind of error, it should return 500;

> ## Route
- **[POST]** `/sign-up`