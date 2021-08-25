# Patients Me
This route returns a patient based on the id inside `accessToken`.

> ## Main flow
1. ✅ Load patient by id;
    - It should get the id from the request authorizer;
3. ✅ Delete password from patient;
4. ✅ Return patient and status code 200;

> ## Error cases
- ✅ If patient isn't found, returns 401;
- ✅ If there's any kind of error, it should return 500;

> ## Route
- **[GET]** `/patients/me`

> ## Middleware
- [**authorizer**](../login/authorizer.md)