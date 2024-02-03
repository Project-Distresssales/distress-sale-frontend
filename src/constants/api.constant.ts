export const API_HOST = process.env.API_URL || 'https://distress-api.onrender.com/';

export const API = {
  // users
  login: '/api/v1/auth/login',
  signup: '/api/v1/auth/register',
  profile: '/users/profile',
  profilePic: '/users/photo',

  // google
  googleLogin: '/api/v1/auth/external/google/url',
  facebookLogin: '/api/v1/auth/external/facebook/url',

  // reset-pass
  requestResetPassword: '/users/auth/reset-password/request',
  resetPass: '/users/auth/reset-password',
  // verification
  verifyUser: '/verification/verify',

  // admins
  packages: '/api/v1/admin/packages',

  // uploads
  uploads: '/uploads',
  images: '/images/',
};

export default API;
