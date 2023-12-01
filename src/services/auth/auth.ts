'use client';

import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '@/services/firebase/firebase.service';
import { getItem, saveItem } from '@/helpers/storage.helper';
import { profileStorageKey } from '@/constants/index.constant';

const provider = new GoogleAuthProvider();

const useAuth = () => {
  const [user, setUser] = useState<User>(getItem(profileStorageKey + 'user'));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user);
        saveItem(profileStorageKey + 'user', user);
      } else {
        setUser(null as any);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const signup = (credentials: { email: 'string'; password: '' }) => {
    const { email, password } = credentials;
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (credentials: { email: 'string'; password: '' }) => {
    const { email, password } = credentials;
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = async () => {
    await signOut(auth);
  };

  return {
    user,
    signInWithGoogle,
    signup,
    login,
    signout,
  };
};

// await updateProfile(user, {
//   displayName: fullname.value,
// });

export default useAuth;
