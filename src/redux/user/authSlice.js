import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: 'users/signup',
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
      providesTags: ['User'],
    }),
    signInUser: builder.mutation({
      query: ({ email, password }) => ({
        url: 'users/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['User'],
    }),
    signOutUser: builder.mutation({
      query: ({ email, password }) => ({
        url: 'users/login',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useSignOutUserMutation,
} = authApi;
