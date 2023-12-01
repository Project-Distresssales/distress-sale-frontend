// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrwLRSJwuZN8Hrx_Za2eX_OBc0yZiP6Wg',
  authDomain: 'distresssales-38d60.firebaseapp.com',
  projectId: 'distresssales-38d60',
  storageBucket: 'distresssales-38d60.appspot.com',
  messagingSenderId: '430562824430',
  appId: '1:430562824430:web:9d63f62e46aa460a2823ff',
  measurementId: 'G-5B346YW0SL',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
let analytics: Analytics = null as any;

isSupported().then((result) => {
  if (result) {
    analytics = getAnalytics(app);
  }
});

export const auth = getAuth(app);
export const db = getFirestore(app);
