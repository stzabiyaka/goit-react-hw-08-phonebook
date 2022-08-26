import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63077a38c0d0f2b80130bf69.mockapi.io/',
  }),
  tagTypes: ['Items'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Items'],
    }),
    createContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: 'contacts',
        method: 'POST',
        body: {
          name,
          phone,
        },
      }),
      invalidatesTags: ['Items'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Items'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useSearchContactQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
