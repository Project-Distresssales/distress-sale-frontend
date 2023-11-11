export const API_HOST = process.env.API_URL || 'https://api-distressales.onrender.com/';

export const API = {
  // users
  login: '/users/login',
  signup: '/users/signup',
  profile: '/users/profile',

  // admins
  bussiness: '/admins/business/',

  // uploads
  uploads: '/uploads',
  images: '/images/',
};

export default API;
