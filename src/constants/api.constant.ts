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
  forgotPassword: '/api/v1/auth/forgot-password',
  resetPassword: '/api/v1/auth/reset-password',
  // verification
  // verifyUser: '/verification/verify',

  // admins
  packages: '/api/v1/misc/packages/get',
  sections: '/api/v1/misc/sections/get',
  categories: '/api/v1/admin/categories',
  getBaseCategory: '/api/v1/misc/categories/base/get',

  createAd: '/api/v1/ad/create',

  // uploads
  uploads: '/uploads',
  images: '/images/',

  // user
  user: '/api/v1/user/me',
  updateUser: '/api/v1/user/update',
  verifyUser: '/api/v1/user/verify-me',

  getProduct: '/api/v1/property-for-sale',
  confirmPayment: '/api/v1/ad/confirm-payment',
  search: '/api/v1/ad/search',
};

export default API;


export const algoliaClient = algoliasearch("AMUOX0S31U", "5688348f4d83f05ca6c360f084fa49bb");