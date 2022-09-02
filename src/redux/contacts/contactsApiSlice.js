import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/contacts',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userState.userToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Items'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ``,
      providesTags: ['Items'],
      invalidatesTags: ['Items'],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['Items'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Items'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
