'use client';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { deleteItem, getItem, saveItem } from '@/helpers/storage.helper';
import { profileStorageKey } from '../constants/index.constant';

export const sliceName = 'profile';

export interface ProfileState {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isAccountVerified: boolean;
  isEmailVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  accessToken: string;
  refreshToken: string;
  profile_pic: string;
}

interface IProfileLoginAction {
  accessToken?: string;
  refreshToken?: string;
  [key: string]: any;
}

const initialState: ProfileState = {
  ...((getItem(profileStorageKey) || {}) as ProfileState),
};

export const profileSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    profileLoginAction: (state, action: PayloadAction<IProfileLoginAction>) => {
      saveItem(profileStorageKey, { ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
    profileLogoutAction: (state) => {
      deleteItem(profileStorageKey);
      location.reload();
      return {} as any;
    },
    profileUpdateAction: (state, action) => {
      saveItem(profileStorageKey, { ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { profileLoginAction, profileLogoutAction, profileUpdateAction } = profileSlice.actions;

export default profileSlice.reducer;
