# Add Meal
This route adds a meal to the database, including calculations.

> ## Body
- ✅ `patientId`:
  - ✅ Type: `string`;
  - ✅ Required: `true`;
- ✅ `mealFoods`:
  - ✅ Type: `array of objects`;
  - ✅ Required: `true`;
  - ✅ Schema: 
    - ✅ foodId: `string`, `required`;
    - ✅ weight: `number`, `required`;
- ✅ `patientGlycemicTarget`:
  - ✅ Type: `number`;
  - ✅ Required: `true`;
- ✅ `patientInsulinUnitsPerDay`:
  - ✅ Type: `number`;
  - ✅ Required: `true`;
- ✅ `glucoseMeasurement`:
  - ✅ Type: `number`;
  - ✅ Required: `true`;
- ✅ `patientWeight`:
  - ✅ Type: `number`;
  - ✅ Required: `false`;
- ✅ `patientHeight`:
  - ✅ Type: `number`;
  - ✅ Required: `false`;

> ## Main flow
1. ✅ Validate body parameters;
2. ✅ Add meal;
3. ✅ Loads meal by id;
4. ✅ Return meal and status code 201;

> ## Error cases
- ✅ If there's any error on body parameters, returns 400;
- ✅ If there's any kind of error, it should return 500;

> ## Route
- **[POST]** `/meals`

> ## Middleware
- ✅ [**authorizer**](../../auth/login/authorizer.md)