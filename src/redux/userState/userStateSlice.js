import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './authSlice';

const initialState = { userToken: null, userName: '', userEmail: '' };

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
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.userName = payload.name;
        state.userEmail = payload.email;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 401) {
          state.userToken = initialState.userToken;
          state.userName = initialState.userName;
          state.userEmail = initialState.userEmail;
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
export const getUserName = state => state.userState.userName;
export const getUserEmail = state => state.userState.userEmail;

export const { setUserToken, unsetUserToken } = userStateSlice.actions;
