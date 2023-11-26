'use client';

import { VoidCallback } from '@/utils/types';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { ProfileState, profileLogoutAction } from '../store/profile.slice';
// import { ThemeState } from '../store/theme.slice';

interface IGlobalState {
  profile: ProfileState;
  // theme: ThemeState;
  isAuthenticated: boolean;
  logout: VoidCallback;
  isProfileCompleted: () => boolean;
}

const useGlobalState = (): IGlobalState => {
  const profile = useAppSelector((state) => state.profile) as ProfileState;
  // const theme = useAppSelector((state) => state.theme) as ThemeState;

  const isAuthenticated = !!profile?.accessToken;

  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(profileLogoutAction());
  };

  const isProfileCompleted = (): boolean => profile.isEmailVerified;

  return { profile, isAuthenticated, logout, isProfileCompleted };
};

export default useGlobalState;
