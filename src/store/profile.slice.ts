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
  dob: string | null;
  address: string | null;
  nationality: string | null;
  gender: string;
  canPostAd: boolean;
  isBlocked: boolean;
  phoneNumber: string;
  isAccountVerified: boolean;
  isEmailVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  accessToken: string;
  refreshToken: string;
  profileImage: string;
  numOfCreatedAds: number;
  verified: boolean;
  subscribed: boolean;
  subscribedTo: string | null;
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
      localStorage.clear();
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
