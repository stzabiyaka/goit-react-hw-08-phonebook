import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userEmail: '',
    userToken: null,
    isLogged: false,
  },
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    setUserToken(state, action) {
      state.userToken = action.payload;
    },
    ussetUserToken(state, action) {
      state.userToken = null;
    },
    setIsLogged(state, action) {
      state.isLogged = action.payload;
    },
  },
});

export const getUserName = state => state.user.userName;
export const getUserEmail = state => state.user.userEmail;
export const getUserToken = state => state.user.userTocken;
export const getisLogged = state => state.user.isLogged;

export const userReducer = userSlice.reducer;

export const { setUserName, setUserEmail, setUserToken, setIsLogged } =
  userSlice.actions;
