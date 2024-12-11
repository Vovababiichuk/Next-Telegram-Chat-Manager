'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IResponseUserData, IUser } from '@/types/types';

interface UserState {
  user: IUser | null;
  isAuth: boolean;
  isRegister: boolean;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  isRegister: false,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerAction: (state, action: PayloadAction<IResponseUserData>) => {
      state.user = action.payload.user;
      state.isRegister = true;
    },
    loginAction: (state) => {
      state.isAuth = true;
    },
    logoutAction: (state) => {
      state.isAuth = false;
    },
  },
});

export const { loginAction, logoutAction, registerAction } = userSlice.actions;

export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
