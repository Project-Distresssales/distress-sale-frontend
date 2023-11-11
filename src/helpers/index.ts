import * as yup from 'yup';
export const isEmpty = (string: string) => string === '';

const PASSWORD_REGEXP = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

export const signupValidationSchema = yup.object().shape({
  firstName: yup.string().required('is required'),
  lastName: yup.string().required('is required'),
  email: yup.string().email('Enter a valid email address'),
  password: yup
    .string()
    .min(8, 'Password must be than 8 characters or more')
    .matches(PASSWORD_REGEXP, 'Password should contain combination of letters and numbers'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match'),
});

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email address'),
  password: yup.string().min(8, 'password must be more than 8 characters'),
});
