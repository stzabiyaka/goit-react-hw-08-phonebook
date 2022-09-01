import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userStateSlice = createSlice({
  name: 'userState',
  initialState: {
    userToken: null,
  },
  reducers: {
    setUserToken(state, action) {
      state.userToken = action.payload;
    },
    unsetUserToken(state) {
      state.userToken = null;
    },
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
