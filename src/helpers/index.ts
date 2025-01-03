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


export const currencyFormatter = (value: number | bigint, currencyCode = 'AED', locale = 'en-US') => {
  const formattedCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(value);

  return formattedCurrency;
};


export const sliceText = (number: number, text: any) => {
  if (typeof text !== 'undefined' && text !== null) {
    return text.slice(0, number) + (text.length > number ? '...' : '');
  } else {
    return ''; // Return an empty string if text is undefined or null
  }
};

export const formatJoinDate = (createdAt) => {
  const date = new Date(createdAt);

  // Define month names
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Extract month and year
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format into desired string
  return `Joined in ${month} ${year}`;
};
