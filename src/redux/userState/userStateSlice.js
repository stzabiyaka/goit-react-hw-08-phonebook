import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './authSlice';

const initialState = { userToken: null };

const userStateSlice = createSlice({
  name: 'userState',
  initialState: initialState,

  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signInUser.matchFulfilled,
      (state, { payload }) => {
        state.userToken = payload.token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.signUpUser.matchFulfilled,
      (state, { payload }) => {
        state.userToken = payload.token;
      }
    );
    builder.addMatcher(authApi.endpoints.signOutUser.matchFulfilled, state => {
      state.userToken = initialState.userToken;
    });
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 401) {
          state.userToken = initialState.userToken;
        }
      }
    );
  },
});

const userPersistConfig = {
  key: 'userState',
  storage,
  whitelist: ['userToken'],
};

export const persistedUserReducer = persistReducer(
  userPersistConfig,
  userStateSlice.reducer
);

export const getUserToken = state => state.userState.userToken;

export const { setUserToken, unsetUserToken } = userStateSlice.actions;
