export const API_HOST = process.env.API_URL || 'https://api-distressales.onrender.com/';

export const API = {
  // users
  login: '/users/login',
  signup: '/users/signup',
  profile: '/users/profile',
  profilePic: '/users/photo',

  // google
  googleLogin: '/users/login/google',

  // reset-pass
  requestResetPassword: '/users/auth/reset-password/request',
  resetPass: '/users/auth/reset-password',
  // verification
  verifyUser: '/verification/verify',

  // admins
  bussiness: '/admins/business/',

  // uploads
  uploads: '/uploads',
  images: '/images/',
};

export default API;
