import algoliasearch from "algoliasearch/lite";

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
  // verifyUser: '/verification/verify',

  // admins
  packages: '/api/v1/misc/sections/get',
  sections: '/api/v1/misc/sections/get',
  categories: '/api/v1/admin/categories',

  createAd: '/api/v1/tag/create',

  // uploads
  uploads: '/uploads',
  images: '/images/',

  // user
  user: '/api/v1/user/me',
  updateUser: '/api/v1/user/update',
  verifyUser: '/api/v1/user/verify-me',

  getProduct: '/api/v1/tag/property-for-sale',
  confirmPayment: '/api/v1/tag/confirm-payment',
};

export default API;


export const algoliaClient = algoliasearch("AMUOX0S31U", "5688348f4d83f05ca6c360f084fa49bb");