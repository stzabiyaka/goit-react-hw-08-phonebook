import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';
import { userReducer } from './user';
import { contactsApi } from './contacts/contactsApiSlice';
import { authApi } from './user/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});
