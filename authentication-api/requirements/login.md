# Login

> ## Success cases

1. ⛔️ Recieve a request of type **POST** on route **/login**
2. ⛔️ Validate mandatory data (**email** and **password**)
3. ⛔️ Ensure that **email** is a valid email
4. ⛔️ **Search** user by email
5. ⛔️ Generate an **access token** containing the user ID
6. ⛔️ Return **200** with an **access token** on body

> ## Exceptions

1. ⛔️ Return error **404** if API doesn't exists
2. ⛔️ Return error **400** if email or password aren't provided
3. ⛔️ Return error **400** if email is invalid
4. ⛔️ Return error **401** if there's no user with provided data
5. ⛔️ Return error **500** if exception while generating token occurs
6. ⛔️ Return error **500** if something else goes wrong